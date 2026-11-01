import { fingerprint } from './policy.ts';
export interface ElementInfo {
  selector: string; tag: string; role: string; name: string; nameSource: string; href?: string;
  type?: string; value?: string; disabled: boolean; checked?: boolean; expanded?: string | null;
}
export async function inspect(page: any) {
  const data = await page.evaluate(() => {
    const visible = (e: Element) => { const r=e.getBoundingClientRect(), s=getComputedStyle(e); return r.width>0 && r.height>0 && s.visibility!=='hidden' && s.display!=='none'; };
    const elements = [...document.querySelectorAll('a[href],button,input,select,textarea,[role="button"],[role="tab"],[role="menuitem"],[role="checkbox"],[role="combobox"]')].filter(visible).slice(0,500);
    const selector = (e: Element) => {
      if (e.id && document.querySelectorAll('#'+CSS.escape(e.id)).length===1) return '#'+CSS.escape(e.id);
      const parts:string[]=[]; let n:Element|null=e;
      while(n && n.tagName!=='HTML') {
        const parent=n.parentElement;
        const i=parent?[...parent.children].filter(x=>x.tagName===n!.tagName).indexOf(n)+1:1;
        parts.unshift(n.tagName.toLowerCase()+`:nth-of-type(${i})`); n=parent;
      }
      return 'html>'+parts.join('>');
    };
    const controls=elements.map((e:any) => {
      const labelled=(e.getAttribute('aria-labelledby')??'').split(/\s+/).map((id:string)=>document.getElementById(id)?.textContent??'').join(' ').trim();
      const label=e.labels?[...e.labels].map((x:any)=>x.textContent).join(' ').trim():'';
      const name=e.getAttribute('aria-label')||labelled||label||e.innerText||e.getAttribute('title')||e.getAttribute('placeholder')||e.getAttribute('alt')||'';
      const role=e.getAttribute('role')||(e.tagName==='A'?'link':e.tagName==='BUTTON'?'button':e.tagName==='SELECT'?'combobox':e.type==='checkbox'?'checkbox':e.tagName==='INPUT'||e.tagName==='TEXTAREA'?'textbox':'');
      return {selector:selector(e),tag:e.tagName.toLowerCase(),role,name:name.replace(/\s+/g,' ').trim().slice(0,180),nameSource:'DOM labels/text (approximate accessible name)',href:e.tagName==='A'?e.href:undefined,type:e.type,value:e.type==='password'?'[redacted]':e.value?.slice(0,120),disabled:!!e.disabled||e.getAttribute('aria-disabled')==='true',checked:typeof e.checked==='boolean'?e.checked:undefined,expanded:e.getAttribute('aria-expanded')};
    });
    return {title:document.title,text:(document.body?.innerText??'').replace(/\s+/g,' ').trim().slice(0,12000),controls,ready:document.readyState};
  });
  return {...data,url:page.url(),stateId:fingerprint(page.url(),data.text,data.controls.map((x:ElementInfo)=>[x.role,x.name,x.value,x.disabled,x.checked,x.expanded]))};
}
