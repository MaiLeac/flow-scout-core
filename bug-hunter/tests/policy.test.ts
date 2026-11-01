import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validateConfig } from '../src/config.ts';
import { permittedUrl, permittedRequest, permittedControl, cleanUrl, fingerprint } from '../src/policy.ts';
const template=JSON.parse(await readFile(new URL('../configs/template.json',import.meta.url),'utf8'));
const c=validateConfig(template);
test('scope rejects external origins, lookalikes, credentials and consequential GET destinations',()=>{
  for(const url of ['https://example.com.evil.test/products','https://evil.test/','https://user:pass@example.com/','https://example.com/delete','https://example.com/api?action=delete','javascript:alert(1)'])assert.equal(permittedUrl(url,c),false,url);
  assert.equal(permittedUrl('https://example.com/products?color=red',c),true);
});
test('POST needs an explicit reviewed endpoint and safety-denied controls stay denied',()=>{
  assert.equal(permittedRequest('https://example.com/search','POST',false,c),false);
  const x=structuredClone(c);x.safety.readOnlyPostRules=[{urlPattern:'^https://example\\.com/search$',reason:'Documented read-only search'}];
  assert.equal(permittedRequest('https://example.com/search','POST',false,x),true);
  assert.equal(permittedRequest('https://example.com/search','POST',true,x),false);
  assert.equal(permittedRequest('https://example.com/orders','POST',false,x),false);
  x.safety.allowedActionNames=['.*'];assert.equal(permittedControl('Purchase',x),false);
  assert.equal(permittedControl('Search',x),true);
});
test('state keys ignore ephemeral token but preserve meaningful query and controls',()=>{
  assert.equal(fingerprint('https://example.com/?token=one&q=red','text',[]),fingerprint('https://example.com/?q=red&token=two','text',[]));
  assert.notEqual(fingerprint('https://example.com/?q=red','text',[]),fingerprint('https://example.com/?q=blue','text',[]));
  assert.notEqual(fingerprint('https://example.com/','text',[false]),fingerprint('https://example.com/','text',[true]));
  assert.ok(!cleanUrl('https://example.com/?token=private&email=person@example.com').includes('private'));
});
test('config rejects incomplete budgets, duplicate tasks and ungrounded assertions',()=>{
  const a=structuredClone(c);a.budgets.workers=100;assert.throws(()=>validateConfig(a));
  const b=structuredClone(c);b.tasks.push(b.tasks[0]);assert.throws(()=>validateConfig(b));
  const d=structuredClone(c);d.tasks[0].steps=[{id:'x',description:'invented',action:'assert',expected:{type:'visible',value:true,basis:''}}];assert.throws(()=>validateConfig(d));
});
