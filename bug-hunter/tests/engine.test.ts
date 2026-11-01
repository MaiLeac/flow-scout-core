import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readdir, readFile, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join } from 'node:path';
import type { CycleConfig, Step } from '../src/types.ts';
import { startFixture } from './fixture.ts';

async function filesUnder(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? filesUnder(join(dir, entry.name)) : Promise.resolve([join(dir, entry.name)])))).flat();
}

test('engine exercises a deterministic local fixture and preserves truthful evidence', { timeout: 120_000 }, async t => {
  const fixture = await startFixture();
  t.after(() => fixture.close());
  const outputDir = await mkdtemp(join(tmpdir(), 'bug-hunter-integration-'));
  // Intentionally retained, including when a subtest fails, for parent integration/debugging.
  t.diagnostic(`Retained engine artifacts: ${outputDir}`);
  const { origin } = fixture;
  const steps: Step[] = [
    { id: 'search', description: 'Filter to Alpha', action: 'fill', selector: '#search', value: 'Alpha' },
    { id: 'filtered', description: 'Filter hides Beta', action: 'assert', expected: { type: 'visible', selector: '#beta', value: false, basis: 'Search filters nonmatching results.' } },
    { id: 'clear', description: 'Clear filter', action: 'click', selector: '#clear' },
    { id: 'restore', description: 'Clear restores Beta (intentional defect)', action: 'assert', expected: { type: 'visible', selector: '#beta', value: true, basis: 'Visible UI promises: Clear filter restores all results.', impact: 'medium' } },
    { id: 'dependent', description: 'Must be blocked by failed restore', action: 'assert', dependsOn: ['restore'], expected: { type: 'visible', selector: '#independent', value: true, basis: 'This check requires restore to pass.' } },
    { id: 'independent', description: 'Independent assertion after failure', action: 'assert', expected: { type: 'text', selector: '#independent', value: 'Independent assertion still runs', basis: 'Fixture independent status text.' } },
    { id: 'preview', description: 'Preview', action: 'click', selector: '#preview' },
    { id: 'preview-clicked', description: 'Innocuous control really executed', action: 'assert', expected: { type: 'text', selector: '#preview-status', value: 'Preview requested', basis: 'Preview immediately acknowledges the click.' } },
  ];
  const config: CycleConfig = {
    version: 1,
    cycle: { id: 'local-integration', title: 'Deterministic integration', overview: 'Local fixture only', inScope: [origin], outOfScope: ['Other origins', 'Purchases and deletion'], sources: ['Local fixture'], evidence: [], currentIssues: { status: 'checked', checkedAt: '2026-01-01T00:00:00.000Z', items: [] } },
    // PLAYWRIGHT_MODULE_PATH is consumed by the runner, without modifying process.env.
    browser: { headless: true, ...(process.env.PLAYWRIGHT_EXECUTABLE_PATH ? { executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH } : {}), ...(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {}) },
    scope: { allowedOrigins: [origin], includePaths: ['/'], excludePatterns: [] },
    safety: { allowedActionNames: ['Search', 'Clear filter', 'Preview', 'Healthy page', 'Blank page', 'Broken server page', 'Open new tab', 'Home', 'External information'], readOnlyPostRules: [], privateDataSelectors: [] },
    budgets: { runtimeMs: 60_000, maxPages: 20, maxStates: 40, maxActions: 60, maxActionsPerState: 12, maxDepth: 2, maxSignals: 40, maxEvidence: 30, workers: 1, actionTimeoutMs: 1_500, navigationTimeoutMs: 3_000, settleMs: 50, readinessTimeoutMs: 1_000 },
    tasks: [
      { id: 'filter-case', lane: 'test-case', feature: 'Filter', startUrl: origin, required: true, steps },
      ...['purchase-link', 'delete-link', 'purchase-button', 'delete-button', 'external'].map(id => ({ id: `safety-${id}`, lane: 'test-case' as const, feature: 'Safety', startUrl: origin, required: true, steps: [{ id: `try-${id}`, description: id === 'external' ? 'External information' : id.startsWith('purchase') ? 'Purchase' : 'Delete', action: 'click' as const, selector: `#${id}` }] })),
      { id: 'inventory', lane: 'quick-win', feature: 'Local navigation', startUrl: origin, required: true, steps: [], crawl: true },
    ],
  };
  // The parent supplies runner.ts during integration. Do not skip a missing runner/browser.
  const { run } = await import('../src/runner.ts');
  const started = performance.now();
  const result = await run(config, outputDir);
  const elapsed = performance.now() - started;
  const files = await filesUnder(outputDir);
  const records = result.tasks.find(task => task.id === 'filter-case');
  const step = (id: string) => records?.steps.find(item => item.id === id);
  // Separate awaited subtests report every independent contract even after a failure.
  await t.test('independent assertions continue and explicit dependencies block', () => {
    assert.equal(step('filtered')?.status, 'passed');
    assert.equal(step('restore')?.status, 'failed');
    assert.equal(step('dependent')?.status, 'blocked');
    assert.match(step('dependent')?.reason ?? '', /restore|depend/i);
    assert.equal(step('independent')?.status, 'passed');
    assert.equal(step('preview-clicked')?.status, 'passed');
    assert.notEqual(records?.status, 'passed');
  });
  await t.test('risky controls, external navigation and POST never reach server', () => {
    assert.equal(fixture.counters.dangerous, 0);
    assert.equal(fixture.counters.posts, 0);
    for (const task of config.tasks.filter(item => item.id.startsWith('safety-'))) {
      const record = result.tasks.find(item => item.id === task.id);
      assert.equal(record?.steps[0]?.status, 'blocked', task.id);
      assert.ok(record?.steps[0]?.reason, `${task.id} needs an explicit blocking reason`);
    }
  });
  await t.test('metrics obey configured budgets and use no model', () => {
    assert.equal(result.metrics.modelCalls, 0);
    for (const [metric, limit] of [
      ['pagesVisited', 'maxPages'], ['statesVisited', 'maxStates'],
      ['actionsAttempted', 'maxActions'], ['uniqueSuspiciousEvents', 'maxSignals'],
      ['evidenceCaptured', 'maxEvidence'],
    ] as const) {
      assert.ok(Number.isInteger(result.metrics[metric]) && result.metrics[metric] >= 0, metric);
      assert.ok(result.metrics[metric] <= config.budgets[limit], `${metric} exceeds ${limit}`);
    }
    assert.ok(result.metrics.pagesVisited > 0);
    assert.ok(result.metrics.actionsAttempted > 0);
    assert.ok(result.metrics.runtimeMs >= 0 && result.metrics.runtimeMs <= config.budgets.runtimeMs + 10_000);
    assert.ok(elapsed <= config.budgets.runtimeMs + 15_000, 'Run must finish within budget plus bounded teardown');
  });
  await t.test('inventory, event stream, screenshots and trace are saved', async () => {
    for (const pattern of [/inventory/i, /events?\.(jsonl|ndjson|json)$/i, /\.png$/i, /trace.*\.zip$/i]) {
      const matches = files.filter(file => pattern.test(basename(file)));
      assert.ok(matches.length, `Missing artifact matching ${pattern}; saved: ${files.join(', ')}`);
      for (const file of matches) assert.ok((await stat(file)).size > 0, `Empty artifact: ${file}`);
    }
    const inventory = (await Promise.all(files.filter(file => /inventory/i.test(basename(file))).map(file => readFile(file, 'utf8')))).join('\n');
    for (const path of ['/healthy', '/blank', '/broken500', '/newtab']) assert.ok(inventory.includes(path), `Missing discovered link ${path}`);
    const events = (await Promise.all(files.filter(file => /events?\.(jsonl|ndjson|json)$/i.test(basename(file))).map(file => readFile(file, 'utf8')))).join('\n');
    assert.match(events, /fixture-console-signal/);
    assert.match(events, /post/i, 'Blocked POST must be observable');
  });
  await t.test('queue and ledger account for every task without overstating coverage', async () => {
    assert.equal(new Set(result.tasks.map(task => task.id)).size, result.tasks.length);
    for (const task of config.tasks) {
      const record = result.tasks.find(item => item.id === task.id);
      assert.ok(record, `Unaccounted task: ${task.id}`);
      assert.ok(!['pending', 'running'].includes(record.status), `Unfinished task: ${task.id}`);
      assert.equal(record.required, task.required);
      assert.equal(record.lane, task.lane);
      for (const planned of task.steps) assert.equal(record.steps.filter(item => item.id === planned.id).length, 1, `Missing/duplicate step ${planned.id}`);
      if (record.steps.some(item => ['failed', 'blocked', 'manual'].includes(item.status))) assert.notEqual(record.status, 'passed');
    }
    const testCases = result.tasks.filter(task => task.lane === 'test-case');
    assert.ok(result.metrics.testCasesCompleted <= testCases.filter(task => ['passed', 'failed', 'completed'].includes(task.status)).length, 'Blocked/manual cases cannot count as completed');
    for (const kind of ['queue', 'ledger']) {
      const paths = files.filter(file => basename(file).toLowerCase().includes(kind));
      assert.ok(paths.length, `Missing persisted ${kind}`);
      const text = (await Promise.all(paths.map(file => readFile(file, 'utf8')))).join('\n');
      for (const task of config.tasks) assert.ok(text.includes(task.id), `${kind} omits ${task.id}`);
    }
  });
  await t.test('visible defect has evidence; console noise alone is not verified', () => {
    const ids = step('restore')?.eventIds ?? [];
    assert.ok(ids.length, 'Failed assertion must reference its event');
    const finding = result.findings.find(item => item.eventIds.some(id => ids.includes(id)));
    assert.ok(finding, 'Expected a finding linked to the failed assertion');
    assert.ok(finding.basis && finding.expected && finding.actual);
    assert.ok(finding.evidence.some(item => item.screenshot), 'Visible defect needs screenshot evidence');
    for (const item of result.findings.filter(item => /fixture-console-signal/.test(JSON.stringify(item)))) {
      if (!item.eventIds.some(id => ids.includes(id))) assert.notEqual(item.status, 'verified', 'Console-only signal is not a verified user-visible bug');
    }
  });
});
