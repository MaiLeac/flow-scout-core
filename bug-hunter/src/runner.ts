import { mkdirSync, writeFileSync, appendFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { validateConfig, writeIntake } from './config.ts';
import { loadPlaywright } from './browser.ts';
import { inspect } from './inventory.ts';
import { cleanUrl, digest, redact, permittedUrl, permittedRequest, permittedControl, unsafeAction } from './policy.ts';
import { Triage, writeReport } from './triage.ts';
import type { CycleConfig, Task, TaskRecord, Metrics, HuntEvent, ActionRecord, Assertion, Step } from './types.ts';

class Blocked extends Error {}
class BudgetStop extends Error {}
const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));
const iso = () => new Date().toISOString();

export async function run(input: CycleConfig, outputDir: string) {
  const c = validateConfig(structuredClone(input));
  outputDir = path.resolve(outputDir);
  mkdirSync(outputDir, {recursive:true});
  if (existsSync(path.join(outputDir,'events.jsonl'))) throw new Error('Output already contains a run; choose a new directory to preserve evidence');
  await writeIntake(c,outputDir);
  const started = Date.now(), deadline = started+c.budgets.runtimeMs, runId=randomUUID();
  const metrics:Metrics = {startedAt:iso(), runtimeMs:0,modelCalls:0,pagesVisited:0,statesVisited:0,actionsAttempted:0,testCasesCompleted:0,uniqueSuspiciousEvents:0,credibleFindings:0,signalsSuppressed:0,evidenceCaptured:0};
  const tasks:TaskRecord[]=c.tasks.map(t=>({id:t.id,owner:'unassigned',lane:t.lane,feature:t.feature,required:t.required,status:'pending',evidence:[],blockers:[],nextAction:'Await worker',steps:t.steps.map(s=>({id:s.id,description:s.description,status:'pending',eventIds:[]}))}));
  const triage=new Triage(c,outputDir), signalKeys=new Set<string>();
  const pending=new Set<Promise<unknown>>(), activeContexts=new Set<any>();
  let stopping=false, navigationReservations=0;
  const persist=()=>{
    metrics.runtimeMs=Date.now()-started;
    writeFileSync(path.join(outputDir,'task-ledger.json'),JSON.stringify(tasks,null,2));
    writeFileSync(path.join(outputDir,'task-queue.json'),JSON.stringify(tasks.map(t=>({taskId:t.id,owner:t.owner,lane:t.lane,status:t.status,nextAction:t.nextAction})),null,2));
    writeFileSync(path.join(outputDir,'metrics.json'),JSON.stringify(metrics,null,2));
  };
  const budget=()=>{
    if(stopping||Date.now()>=deadline) throw new BudgetStop('Runtime budget exhausted');
    if(metrics.actionsAttempted>=c.budgets.maxActions) throw new BudgetStop('Action budget exhausted');
  };
  const background=(p:Promise<unknown>)=>{pending.add(p);void p.catch(()=>{}).finally(()=>pending.delete(p));};
  appendFileSync(path.join(outputDir,'events.jsonl'),'');
  appendFileSync(path.join(outputDir,'inventory.jsonl'),'');
  persist();
  let browser:any;
  try {
    const pw=await loadPlaywright();
    browser=await pw.chromium.launch({headless:c.browser.headless,channel:c.browser.channel,executablePath:c.browser.executablePath,timeout:Math.min(30000,c.budgets.runtimeMs)});
  } catch(error) {
    metrics.stopReason=`Browser setup failed: ${redact(String(error))}`;metrics.endedAt=iso();
    for(const t of tasks){t.status='blocked';t.blockers.push(metrics.stopReason);t.nextAction='Install/configure Playwright browser';for(const s of t.steps){s.status='blocked';s.reason=metrics.stopReason;}}
    await triage.finish();persist();await writeReport(outputDir,c,tasks,metrics,triage.findings);throw error;
  }
  // A watchdog closes active contexts so even a stalled operation cannot hold the run indefinitely.
  const watchdog=setTimeout(()=>{stopping=true;metrics.stopReason='Runtime budget exhausted';for(const x of activeContexts) background(x.close().catch(()=>{}));},Math.max(1,deadline-Date.now()));
  const signalStop=()=>{stopping=true;metrics.stopReason='Interrupted';for(const x of activeContexts) background(x.close().catch(()=>{}));};
  process.once('SIGINT',signalStop);

  async function execute(task:Task, record:TaskRecord, worker:string) {
    record.owner=worker;record.status='running';record.startedAt=iso();record.nextAction='Open start URL';persist();
    const context=await browser.newContext({serviceWorkers:'block',acceptDownloads:false});
    activeContexts.add(context);
    context.setDefaultTimeout(c.budgets.actionTimeoutMs);
    context.setDefaultNavigationTimeout(c.budgets.navigationTimeoutMs);
    const history:ActionRecord[]=[], states=new Set<string>(), attempted=new Set<string>(), urls=new Set<string>();
    const blockUrls=new Set<string>(), pagesTracked=new Set<any>();
    let page=await context.newPage(), contaminated=false, hadSignal=false, lastState='';
    const dir=path.join(outputDir,'evidence',task.id);mkdirSync(dir,{recursive:true});
    const tracePath=path.join(dir,'trace.zip');
    await context.tracing.start({screenshots:true,snapshots:true,sources:false});

    async function event(kind:string,message:string,extra:Partial<HuntEvent>={},capture=false,target=page,suspicious=true) {
      const rawUrl=target.isClosed()?'':target.url();
      const signature=extra.signature??digest([task.feature,kind,cleanUrl(rawUrl,true),message.replace(/\b\d{4,}\b/g,'#')]);
      if(suspicious) {
        if(signalKeys.has(signature)) {metrics.signalsSuppressed++;return undefined;}
        if(metrics.uniqueSuspiciousEvents>=c.budgets.maxSignals){metrics.signalsSuppressed++;return undefined;}
        signalKeys.add(signature);metrics.uniqueSuspiciousEvents++;hadSignal=true;
      }
      const ev:HuntEvent={id:randomUUID(),ts:iso(),runId,taskId:task.id,lane:task.lane,kind,url:cleanUrl(rawUrl),message:redact(message),userVisible:false,stateId:lastState,signature,evidence:{},history:structuredClone(history),...extra};
      ev.details={...ev.details,environmentRestricted:contaminated};
      if(capture && !target.isClosed() && metrics.evidenceCaptured<c.budgets.maxEvidence) {
        metrics.evidenceCaptured++;
        const image=path.join(dir,`${ev.id}.png`),dom=path.join(dir,`${ev.id}.json`);
        try {
          const masks=c.safety.privateDataSelectors.map(s=>target.locator(s));
          await target.screenshot({path:image,fullPage:false,mask:masks,timeout:Math.min(4000,c.budgets.actionTimeoutMs)});
          ev.evidence.screenshot=image;record.evidence.push(image);
        } catch(error) {ev.details.screenshotError=redact(String(error));}
        try {
          const s=await inspect(target);
          writeFileSync(dom,JSON.stringify({url:cleanUrl(s.url),stateId:s.stateId,title:s.title,visibleText:redact(s.text),controls:s.controls.map((x:any)=>({...x,value:undefined,href:x.href?cleanUrl(x.href):undefined}))},null,2));
          ev.evidence.dom=dom;record.evidence.push(dom);
        } catch(error) {ev.details.domError=redact(String(error));}
      }
      if(suspicious) ev.evidence.trace=tracePath;
      appendFileSync(path.join(outputDir,'events.jsonl'),JSON.stringify(ev)+'\n');
      if(['navigation','console-error','network-failure','network-status','safety-block'].includes(kind))appendFileSync(path.join(outputDir,'browser-console.log'),`${ev.ts} [${task.id}] ${ev.message}\n`);
      if(suspicious) triage.accept(ev);
      persist();return ev.id;
    }

    await context.route('**/*',async(route:any)=>{
      const r=route.request();
      if(!permittedRequest(r.url(),r.method(),r.isNavigationRequest(),c)) {
        blockUrls.add(r.url());contaminated=true;
        await route.abort('blockedbyclient').catch(()=>{});
        background(event('safety-block',`Blocked ${r.method()} ${cleanUrl(r.url())}`,{details:{requestUrl:cleanUrl(r.url()),method:r.method(),reason:'Domain/path or non-read-only request policy'}},false,page));
      } else {
        let mainNavigation=false;
        if(r.isNavigationRequest()) {
          // Popup navigation may arrive before Playwright creates its frame.
          try {const frame=r.frame();mainNavigation=frame===frame.page().mainFrame();}
          catch {mainNavigation=true;}
        }
        if(mainNavigation) {
          if(navigationReservations>=c.budgets.maxPages){stopping=true;metrics.stopReason='Page budget exhausted';blockUrls.add(r.url());await route.abort('blockedbyclient').catch(()=>{});return;}
          navigationReservations++;
        }
        await route.continue().catch(()=>{});
      }
    });
    // WebSockets can send consequential messages outside HTTP route interception; block them in this MVP.
    await context.routeWebSocket('**/*',(ws:any)=>{contaminated=true;ws.close();background(event('safety-block','WebSocket blocked by read-only policy'));});
    const attach=(p:any)=>{
      if(pagesTracked.has(p))return;pagesTracked.add(p);
      p.on('dialog',(d:any)=>background(d.dismiss().catch(()=>{})));
      p.on('download',(d:any)=>background(d.cancel().catch(()=>{})));
      p.on('console',(m:any)=>{if(m.type()==='error')background(event('console-error',m.text(),{},false,p));});
      p.on('pageerror',(e:Error)=>background(event('console-error',e.message,{},false,p)));
      p.on('requestfailed',(r:any)=>{if(!blockUrls.has(r.url()))background(event('network-failure',`${r.failure()?.errorText??'request failed'} ${cleanUrl(r.url())}`,{},false,p));});
      p.on('response',(r:any)=>{if(r.status()>=400)background(event('network-status',`${r.status()} ${cleanUrl(r.url())}`,{details:{status:r.status(),document:r.request().isNavigationRequest()}},r.request().isNavigationRequest(),p));});
      p.on('framenavigated',(frame:any)=>{
        if(frame!==p.mainFrame()||frame.url()==='about:blank')return;
        if(metrics.pagesVisited>=c.budgets.maxPages){stopping=true;metrics.stopReason='Page budget exhausted';background(p.close().catch(()=>{}));return;}
        metrics.pagesVisited++;
        background(event('navigation',`Navigated to ${cleanUrl(frame.url())}`,{},false,p,false));
      });
    };
    attach(page);context.on('page',attach);

    async function settle(){await page.waitForLoadState('domcontentloaded',{timeout:c.budgets.navigationTimeoutMs}).catch(()=>{});await delay(Math.min(c.budgets.settleMs,Math.max(0,deadline-Date.now())));}
    async function goto(url:string,description:string) {
      budget();if(!permittedUrl(url,c))throw new Blocked('URL outside scope or excluded by safety policy');
      if(metrics.pagesVisited>=c.budgets.maxPages)throw new BudgetStop('Page budget exhausted');
      history.push({ts:iso(),action:'goto',description,url:cleanUrl(url)});
      await page.goto(url,{waitUntil:'domcontentloaded'});await settle();
    }
    async function snapshot() {
      budget();const s=await inspect(page);lastState=s.stateId;
      if(!states.has(s.stateId)) {
        if(metrics.statesVisited>=c.budgets.maxStates)throw new BudgetStop('State budget exhausted');
        states.add(s.stateId);metrics.statesVisited++;
        appendFileSync(path.join(outputDir,'inventory.jsonl'),JSON.stringify({ts:iso(),taskId:task.id,url:cleanUrl(s.url),stateId:s.stateId,title:s.title,elements:s.controls.map((x:any)=>({...x,value:undefined,href:x.href?cleanUrl(x.href):undefined}))})+'\n');
        await event('page-state',`Visible content state: ${s.stateId}`,{details:{textLength:s.text.length,controlCount:s.controls.length}},false,page,false);
      }
      if(s.text.length===0 && s.controls.length===0) {
        await delay(Math.min(c.budgets.readinessTimeoutMs,Math.max(0,deadline-Date.now())));
        const again=await inspect(page);
        if(!again.text && !again.controls.length)await event('blank-state','Page remained visibly blank after bounded readiness wait',{actual:'No visible text or controls',details:{ready:again.ready,waitMs:c.budgets.readinessTimeoutMs}},true);
      }
      return s;
    }
    async function verify(a:Assertion) {
      const end=Math.min(deadline,Date.now()+c.budgets.readinessTimeoutMs);let actual:unknown,passed=false;
      do {
        const loc=a.selector?page.locator(a.selector):undefined;
        if(a.type==='visible'){actual=await loc.isVisible();passed=actual===a.value;}
        else if(a.type==='checked'){actual=await loc.isChecked();passed=actual===a.value;}
        else if(a.type==='count'){actual=await loc.count();passed=actual===a.value;}
        else if(a.type==='url'){actual=page.url();passed=String(actual).includes(String(a.value));}
        else {actual=await loc.innerText();passed=String(actual).includes(String(a.value));}
        if(passed)break;await delay(Math.min(100,Math.max(0,end-Date.now())));
      } while(Date.now()<end);
      return {passed,actual:redact(String(actual))};
    }
    async function act(step:Step) {
      budget();
      if(step.action==='manual')throw new Blocked('Manual execution required; not executed');
      if(step.action==='goto'){await goto(step.url! ,step.description);return;}
      if(step.action==='back'){
        metrics.actionsAttempted++;history.push({ts:iso(),action:'back',description:step.description,url:cleanUrl(page.url())});
        await page.goBack({waitUntil:'domcontentloaded'});await settle();return;
      }
      if(step.action==='assert')return;
      const loc=page.locator(step.selector!);
      if(await loc.count()!==1)throw new Blocked('Selector is missing or ambiguous; no action executed');
      const el=await loc.evaluate((e:any)=>({name:e.getAttribute('aria-label')||e.innerText||e.labels?.[0]?.textContent||e.getAttribute('placeholder')||'',href:e.href,type:e.type,field:`${e.name??''} ${e.id??''} ${e.autocomplete??''}`}));
      if(unsafeAction(el.name,el.href??'') || unsafeAction(step.description))throw new Blocked('Consequential action excluded by safety policy');
      if(el.href && !permittedUrl(el.href,c))throw new Blocked('Link destination outside allowed scope');
      if(['fill','select'].includes(step.action)) {
        if(/password|email|tel|file|hidden/i.test(el.type??'') || /card|credit|password|passport|ssn|email|phone|cc-/i.test(el.field))throw new Blocked('Sensitive input requires manual execution');
      } else if(!el.href && !permittedControl(el.name,c))throw new Blocked('Control name not explicitly allowed');
      metrics.actionsAttempted++;
      history.push({ts:iso(),action:step.action,description:step.description,url:cleanUrl(page.url()),selector:step.selector,value:step.value?redact(step.value):undefined});
      const priorPages=new Set(context.pages());
      if(step.action==='fill')await loc.fill(step.value??'');
      else if(step.action==='select')await loc.selectOption(step.value!);
      else if(step.action==='check')await loc.check();
      else if(step.action==='uncheck')await loc.uncheck();
      else await loc.click();
      await settle();
      const popup=context.pages().find((x:any)=>!priorPages.has(x));
      if(popup){page=popup;await settle();if(page.url()!=='about:blank'&&!permittedUrl(page.url(),c))throw new Blocked('New tab destination outside scope');}
      await event('action',step.description,{details:{action:step.action,selector:step.selector}},false,page,false);
    }

    try {
      await goto(task.startUrl,'Open task starting page');await snapshot();
      for(const step of task.steps) {
        const result=record.steps.find(s=>s.id===step.id)!;
        const failedDep=step.dependsOn?.find(id=>record.steps.find(s=>s.id===id)?.status!=='passed');
        if(failedDep){result.status='blocked';result.reason=`Dependency ${failedDep} did not pass`;persist();continue;}
        if(stopping||Date.now()>=deadline){result.status='blocked';result.reason='Runtime or global budget exhausted';continue;}
        record.nextAction=step.description;result.status='running';persist();
        try {
          if(step.action==='manual'){result.status='manual';result.reason='Requires human execution; no assertion of coverage';continue;}
          await act(step);
          if(step.expected) {
            const check=await verify(step.expected);
            if(!check.passed) {
              result.status='failed';result.reason=`Expected ${step.expected.type} ${step.expected.value}; actual ${check.actual}`;
              const id=await event('assertion-failed',step.description,{userVisible:true,expected:`${step.expected.type}: ${step.expected.value}`,actual:check.actual,basis:step.expected.basis,impact:step.expected.impact??'medium',details:{selector:step.expected.selector}},true);
              if(id)result.eventIds.push(id);
            } else result.status='passed';
          } else result.status='passed';
          const id=await event('step-result',`${step.id}: ${result.status}`,{details:{stepId:step.id,status:result.status}},false,page,false);if(id)result.eventIds.push(id);
        } catch(error) {
          result.status=error instanceof Blocked||error instanceof BudgetStop?'blocked':'blocked';
          result.reason=redact(String(error));
          if(error instanceof BudgetStop){stopping=true;metrics.stopReason=error.message;}
          const id=await event(error instanceof Blocked?'safety-block':'execution-blocked',`${step.id}: ${result.reason}`,{},!(error instanceof Blocked));if(id)result.eventIds.push(id);
        } finally {persist();}
      }
      if(task.crawl && !stopping) {
        const frontier:{url:string;depth:number}[]=[{url:page.url(),depth:0}];
        while(frontier.length && !stopping) {
          budget();const node=frontier.shift()!;
          const key=cleanUrl(node.url,true);if(urls.has(key))continue;urls.add(key);
          if(page.url()!==node.url)await goto(node.url,'Visit discovered internal page');
          let s=await snapshot();let localActions=0;
          while(localActions<c.budgets.maxActionsPerState && !stopping) {
            for(const link of s.controls)if(link.href && permittedUrl(link.href,c) && !unsafeAction(link.name,link.href) && node.depth<c.budgets.maxDepth && !urls.has(cleanUrl(link.href,true))) {
              if(!frontier.some(x=>cleanUrl(x.url,true)===cleanUrl(link.href!,true)))frontier.push({url:link.href,depth:node.depth+1});
            }
            let el:any;
            for(const candidate of s.controls) {
              if(candidate.disabled || !['button','tab','menuitem','checkbox','link'].includes(candidate.role))continue;
              if(attempted.has(digest([s.stateId,candidate.selector,candidate.name])))continue;
              if(candidate.href) {
                const target=await page.locator(candidate.selector).getAttribute('target').catch(()=>null);
                if(target!=='_blank'||!permittedUrl(candidate.href,c)||unsafeAction(candidate.name,candidate.href))continue;
              } else if(!permittedControl(candidate.name,c))continue;
              el=candidate;break;
            }
            if(!el)break;
            const actionKey=digest([s.stateId,el.selector,el.name]);
            attempted.add(actionKey);localActions++;
            try {
              await act({id:'crawl',description:el.name,action:'click',selector:el.selector});
              const after=await snapshot();
              if(after.stateId===s.stateId)await event('unchanged-state',`No visible state change after ${el.name}`,{details:{selector:el.selector}},false);
              if(cleanUrl(after.url,true)!==key) {
                if(node.depth<c.budgets.maxDepth && permittedUrl(after.url,c))frontier.push({url:after.url,depth:node.depth+1});
                break;
              }
              // Re-inventory changed states once, preserving per-page action bounds.
              s=after;
            } catch(error) {
              if(error instanceof BudgetStop)throw error;
              await event('execution-blocked',`Crawler action ${el.name}: ${redact(String(error))}`,{},false);
              break;
            }
          }
        }
      }
      record.status=record.steps.some(x=>x.status==='failed')?'failed':record.steps.some(x=>['blocked','manual','pending'].includes(x.status))?'blocked':task.crawl?'completed':'passed';
    } catch(error) {
      record.status='blocked';record.blockers.push(redact(String(error)));
      if(error instanceof BudgetStop){stopping=true;metrics.stopReason=error.message;}
      await event('execution-blocked',redact(String(error)),{},false).catch(()=>{});
    } finally {
      for(const s of record.steps)if(['pending','running'].includes(s.status)){s.status='blocked';s.reason='Task stopped before this step executed';}
      record.blockers.push(...record.steps.filter(s=>['blocked','manual'].includes(s.status)).map(s=>`${s.id}: ${s.reason}`));
      if(contaminated)record.blockers.push('Safety policy blocked requests; affected results require a manual control');
      record.nextAction=record.status==='blocked'?'Resolve listed blockers / complete manual steps':record.status==='failed'?'Review evidence and manually reproduce failed assertions':'Assignment finished';
      if(task.lane==='test-case' && record.steps.length && record.steps.every(x=>['passed','failed'].includes(x.status)))metrics.testCasesCompleted++;
      record.endedAt=iso();
      try {await context.tracing.stop(hadSignal?{path:tracePath}:{});if(hadSignal)record.evidence.push(tracePath);}catch(error){record.blockers.push(`Trace unavailable: ${String(error).slice(0,200)}`);}
      await context.close().catch(()=>{});activeContexts.delete(context);persist();
    }
  }

  const ordered=[...c.tasks].sort((a,b)=>Number(b.required)-Number(a.required));
  const locked=new Set<string>(), claimed=new Set<string>();
  async function worker(n:number) {
    while(!stopping) {
      const task=ordered.find(t=>!claimed.has(t.id)&&(!t.resourceKey||!locked.has(t.resourceKey)));
      if(!task){if(claimed.size===ordered.length)break;await delay(20);continue;}
      claimed.add(task.id);if(task.resourceKey)locked.add(task.resourceKey);
      const record=tasks.find(t=>t.id===task.id)!;
      try {await execute(task,record,`browser-worker-${n}`);}catch(error){record.status='blocked';record.blockers.push(redact(String(error)));record.nextAction='Resolve worker setup failure';}
      finally {if(task.resourceKey)locked.delete(task.resourceKey);persist();}
    }
  }
  try {await Promise.all(Array.from({length:c.budgets.workers},(_,i)=>worker(i+1)));}
  finally {
    clearTimeout(watchdog);process.removeListener('SIGINT',signalStop);
    await browser.close().catch(()=>{});
    while(pending.size)await Promise.allSettled([...pending]);
    for(const task of tasks) {
      if(['pending','running'].includes(task.status)){task.status='blocked';task.blockers.push(metrics.stopReason??'Run ended before execution');task.nextAction='Run remaining assignment';}
      for(const step of task.steps)if(['pending','running'].includes(step.status)){step.status='blocked';step.reason='Not executed before run ended';}
    }
    await triage.finish();
    metrics.endedAt=iso();metrics.stopReason??='Assignments exhausted';
    metrics.credibleFindings=triage.findings.filter(f=>['needs-human-verification','verified'].includes(f.status)).length;
    persist();await writeReport(outputDir,c,tasks,metrics,triage.findings);
  }
  return {metrics,tasks,findings:triage.findings};
}
