import { createServer } from 'node:http';

/** All destinations, including the deliberately out-of-scope origin, are local. */
export async function startFixture(): Promise<{
  origin: string;
  close: () => Promise<void>;
  counters: { dangerous: number; posts: number };
}> {
  const counters = { dangerous: 0, posts: 0 };
  let origin = '';
  const page = (body: string) => `<!doctype html><html lang="en"><head>
    <meta charset="utf-8"><title>Deterministic bug hunter fixture</title>
    <link rel="icon" href="data:,"></head><body>${body}</body></html>`;
  const server = createServer((req, res) => {
    const path = new URL(req.url ?? '/', 'http://fixture.invalid').pathname;
    if (req.method === 'POST') counters.posts++;
    if (/^\/(purchase|delete|external)(\/|$)/.test(path)) counters.dangerous++;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    if (req.method === 'POST') {
      req.resume();
      res.end(page('<h1>POST reached server</h1>'));
      return;
    }
    switch (path) {
      case '/':
        res.end(page(`<h1>Fixture home</h1>
          <nav aria-label="Fixture pages">
            <a href="/healthy">Healthy page</a>
            <a href="/blank">Blank page</a>
            <a href="/broken500">Broken server page</a>
            <a href="/newtab" target="_blank" rel="noopener">Open new tab</a>
          </nav>
          <p id="filter-promise">Clear filter restores all results.</p>
          <label>Search <input id="search" type="search"></label>
          <button id="clear" type="button">Clear filter</button>
          <ul id="results"><li id="alpha">Alpha</li><li id="beta">Beta</li></ul>
          <p id="independent">Independent assertion still runs</p>
          <a id="purchase-link" href="/purchase">Purchase</a>
          <a id="delete-link" href="/delete">Delete</a>
          <button id="purchase-button" onclick="location.href='/purchase'">Purchase</button>
          <button id="delete-button" onclick="location.href='/delete'">Delete</button>
          <a id="external" href="${origin.replace('127.0.0.1', 'localhost')}/external">External information</a>
          <button id="preview" type="button">Preview</button><p id="preview-status"></p>
          <script>
            const search = document.querySelector('#search');
            search.addEventListener('input', () => {
              for (const item of document.querySelectorAll('#results li')) {
                item.hidden = !item.textContent.toLowerCase().includes(search.value.toLowerCase());
              }
            });
            document.querySelector('#clear').addEventListener('click', () => {
              search.value = ''; // Intentional defect: filtered rows stay hidden.
            });
            document.querySelector('#preview').addEventListener('click', () => {
              document.querySelector('#preview-status').textContent = 'Preview requested';
              fetch('/preview', { method: 'POST', body: 'fixture-only' }).catch(() => {});
            });
            console.error('fixture-console-signal: diagnostic without visible impact');
          </script>`));
        break;
      case '/healthy': res.end(page('<h1 id="healthy">Healthy page</h1><a href="/">Home</a>')); break;
      case '/blank': res.end(page('')); break;
      case '/broken500': res.statusCode = 500; res.end(page('<h1>Fixture server error</h1>')); break;
      case '/newtab': res.end(page('<h1>New tab destination</h1><a href="/">Home</a>')); break;
      case '/purchase':
      case '/delete':
      case '/external': res.end(page('<h1>Forbidden destination reached</h1>')); break;
      default: res.statusCode = 404; res.end(page('<h1>Not found</h1>'));
    }
  });
  await new Promise<void>((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      server.off('error', reject);
      resolve();
    });
  });
  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('Expected TCP fixture address');
  origin = `http://127.0.0.1:${address.port}`;
  return {
    origin, counters,
    close: () => new Promise<void>((resolve, reject) => {
      server.close(error => error ? reject(error) : resolve());
      server.closeAllConnections();
    }),
  };
}
