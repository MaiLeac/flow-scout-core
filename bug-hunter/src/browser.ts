import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

export async function loadPlaywright(): Promise<any> {
  if (process.env.PLAYWRIGHT_MODULE_PATH) {
    const req = createRequire(path.join(path.resolve(process.env.PLAYWRIGHT_MODULE_PATH), '_loader.cjs'));
    let file: string;
    try { file = req.resolve(process.env.PLAYWRIGHT_MODULE_PATH); }
    catch { file = path.resolve(process.env.PLAYWRIGHT_MODULE_PATH); }
    const loaded = await import(pathToFileURL(file).href);
    return loaded.chromium ? loaded : loaded.default;
  }
  try { return await import('playwright'); }
  catch { throw new Error('Playwright unavailable. Run npm install, or set PLAYWRIGHT_MODULE_PATH to an installed playwright package.'); }
}
