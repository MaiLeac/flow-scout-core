import path from 'node:path';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { loadConfig, writeIntake, defaultBudgets } from './config.ts';
import { run } from './runner.ts';

const [command, ...args] = process.argv.slice(2);
const value = (flag:string, fallback?:string) => {const i=args.indexOf(flag);return i<0?fallback:args[i+1];};
async function main() {
  if(command==='init') {
    const file=path.resolve(value('--config','cycle.json')!);
    const origin=new URL(value('--url','https://example.com')!).origin;
    const template=JSON.parse(await readFile(new URL('../configs/template.json',import.meta.url),'utf8'));
    template.scope.allowedOrigins=[origin];template.tasks[0].startUrl=origin+'/';
    await mkdir(path.dirname(file),{recursive:true});
    await writeFile(file,JSON.stringify(template,null,2),{flag:'wx'});
    console.log(`Created ${file}. Fill scope, current issues, real test steps and justified assertions before running.`);return;
  }
  if(!['run','intake','demo'].includes(command)) {
    console.log('Commands:\n  node src/cli.ts init --url https://example.com --config cycle.json\n  node src/cli.ts intake --config cycle.json --out runs/intake\n  node src/cli.ts run --config cycle.json [--out runs/new-run]\n  node src/cli.ts demo [--out runs/demo]');return;
  }
  const out=path.resolve(value('--out',path.join('runs',new Date().toISOString().replace(/[:.]/g,'-')))!);
  if(command==='demo') {
    const {startFixture}=await import('../tests/fixture.ts');const f=await startFixture();
    const c=JSON.parse(await readFile(new URL('../configs/template.json',import.meta.url),'utf8'));
    c.cycle={...c.cycle,id:'local-demo',title:'Local fixture — intentional filter defect',overview:'Demonstration only; not a real uTest finding.',inScope:['Local fixture'],outOfScope:['External hosts','Purchase/delete'],sources:['tests/fixture.ts'],currentIssues:{status:'checked',checkedAt:new Date().toISOString(),items:[]}};
    c.scope.allowedOrigins=[f.origin];c.safety.allowedActionNames=['^Clear filter$','^Preview$','^Healthy page$'];
    c.budgets={...defaultBudgets,runtimeMs:30000,workers:2,maxPages:10};
    c.browser={headless:true,...(process.env.PLAYWRIGHT_CHANNEL?{channel:process.env.PLAYWRIGHT_CHANNEL}:{}),...(process.env.PLAYWRIGHT_EXECUTABLE_PATH?{executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH}:{})};
    c.tasks=[{id:'filter-case',lane:'test-case',feature:'Filter recovery',required:true,startUrl:f.origin,steps:[
      {id:'filter',action:'fill',selector:'#search',value:'Alpha',description:'Filter to Alpha'},
      {id:'clear',action:'click',selector:'#clear',description:'Clear filter'},
      {id:'restore',action:'assert',description:'Clear filter must restore Beta',expected:{type:'visible',selector:'#beta',value:true,basis:'Visible text: Clear filter restores all results.',impact:'medium'}},
      {id:'independent',action:'assert',description:'Independent follow-up still executes',expected:{type:'visible',selector:'#independent',value:true,basis:'Independent control stays available'}}
    ]},{id:'quick-navigation',lane:'quick-win',feature:'Internal navigation',required:false,startUrl:f.origin,steps:[],crawl:true}];
    try {const result=await run(c,out);console.log(JSON.stringify({outputDir:out,...result.metrics,fixtureOnly:true},null,2));}finally{await f.close();}
    return;
  }
  const file=value('--config');if(!file)throw new Error('--config is required');
  const c=await loadConfig(file);
  if(command==='intake'){await writeIntake(c,out);console.log(out);return;}
  const result=await run(c,out);console.log(JSON.stringify({outputDir:out,...result.metrics},null,2));
}
main().catch(e=>{console.error(e instanceof Error?e.message:e);process.exitCode=1;});
