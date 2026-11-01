import { createHash } from 'node:crypto';
import type { CycleConfig } from './types.ts';

// Always enforced, including explicit workflows. High-consequence actions stay manual in v1.
const unsafe = /(?:\b(?:purchase|pay\s*now|confirm\s*(?:booking|order)|book\s*now|checkout\s*complete|send|submit|delete|unsubscribe|subscribe|register|password|logout|sign\s*out|log\s*out|cancel\s*(?:booking|reservation)|create\s*account)\b|(?:^|[/_-])(?:purchase|payment|delete|logout|unsubscribe|send|complete|confirm)(?:$|[/_?&=-]))/i;
export function unsafeAction(name: string, destination = '') { return unsafe.test(`${name} ${destination}`); }
export function permittedUrl(raw: string, c: CycleConfig, navigation = true): boolean {
  try {
    const u = new URL(raw);
    if (!['http:', 'https:'].includes(u.protocol) || u.username || u.password) return false;
    const origins = navigation ? c.scope.allowedOrigins : [...c.scope.allowedOrigins, ...(c.scope.assetOrigins ?? [])];
    if (!origins.includes(u.origin) || unsafeAction('', decodeURIComponent(u.pathname+u.search))) return false;
    if (c.scope.excludePatterns.some(p => new RegExp(p, 'i').test(raw))) return false;
    return !navigation || c.scope.includePaths.some(p => new RegExp(p, 'i').test(u.pathname));
  } catch { return false; }
}
export function permittedRequest(url: string, method: string, navigation: boolean, c: CycleConfig) {
  if (!permittedUrl(url, c, navigation)) return false;
  if (['GET', 'HEAD', 'OPTIONS'].includes(method.toUpperCase())) return true;
  return method === 'POST' && !navigation && c.safety.readOnlyPostRules.some(r => new RegExp(r.urlPattern, 'i').test(url));
}
export function permittedControl(name: string, c: CycleConfig) {
  return !!name.trim() && !unsafeAction(name) && c.safety.allowedActionNames.some(p => new RegExp(p, 'i').test(name));
}
const privateKeys = /token|secret|password|session|auth|email|phone|key|locator|cachekey/i;
export function cleanUrl(raw: string, canonical = false) {
  try {
    const u = new URL(raw);
    u.username = ''; u.password = '';
    for (const k of [...u.searchParams.keys()]) {
      if (privateKeys.test(k) || /^(?:utm_|searchtime|timestamp|_)/i.test(k)) {
        if (canonical) u.searchParams.delete(k); else u.searchParams.set(k, '[redacted]');
      }
    }
    u.searchParams.sort(); return u.href;
  } catch { return raw.slice(0,500); }
}
export function redact(text: string) {
  return text.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '[email]')
    .replace(/((?:token|password|secret|authorization|sessionid)\s*[=:]\s*)[^\s&,;]+/gi, '$1[redacted]').slice(0, 12000);
}
export function digest(value: unknown) { return createHash('sha256').update(JSON.stringify(value)).digest('hex').slice(0,20); }
export function fingerprint(url: string, text: string, controls: unknown[]) {
  return digest([cleanUrl(url, true), text.replace(/\s+/g, ' ').trim(), controls]);
}
