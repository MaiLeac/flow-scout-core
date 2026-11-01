import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Triage, writeReport } from '../src/triage.ts';
import type { CycleConfig, HuntEvent, Metrics } from '../src/types.ts';

const config: CycleConfig = {
  version: 1, cycle: { id: 'cycle', title: 'Cycle', overview: '', inScope: [], outOfScope: [], sources: [], evidence: [], currentIssues: { status: 'checked', items: [{ id: 'known', title: 'Checkout confirmation shows wrong total', actual: 'Wrong total displayed' }] } },
  browser: { headless: true }, scope: { allowedOrigins: [], includePaths: [], excludePatterns: [] }, safety: { allowedActionNames: [], readOnlyPostRules: [], privateDataSelectors: [] },
  budgets: { runtimeMs: 1000, maxPages: 10, maxStates: 10, maxActions: 20, maxActionsPerState: 5, maxDepth: 3, maxSignals: 100, maxEvidence: 10, workers: 1, actionTimeoutMs: 10, navigationTimeoutMs: 10, settleMs: 1, readinessTimeoutMs: 10 },
  tasks: [{ id: 'task', lane: 'test-case', feature: 'Checkout', startUrl: 'https://example.test', required: true, steps: [{ id: 'step', action: 'assert', description: 'Check total' }] }]
};
function event(id: string, extra: Partial<HuntEvent> = {}): HuntEvent {
  return { id, ts: '2026-10-29', runId: 'run', taskId: 'task', lane: 'test-case', kind: 'assertion-failed', url: 'https://example.test', message: 'Checkout confirmation shows wrong total', userVisible: true, expected: 'Correct total', actual: 'Wrong total displayed', basis: 'Cycle acceptance criterion', evidence: { screenshot: 'shot.png' }, history: [{ ts: '', action: 'click', description: 'Checkout', url: 'https://example.test' }], ...extra };
}
test('a policy-contaminated visible failure stays inconclusive', async t => {
  const dir = await directory(t), triage = new Triage(config, dir);
  triage.accept(event('restricted', {details:{environmentRestricted:true}}));
  await triage.finish();
  assert.equal(triage.findings[0].status,'inconclusive');
});
async function directory(t: { after: (fn: () => Promise<void>) => void }) {
  const dir = await mkdtemp(join(tmpdir(), 'triage-test-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  return dir;
}
test('bursts serialize durable updates and shortest recorded paths, without verification', async t => {
  const dir = await directory(t), triage = new Triage(config, dir);
  const first = event('0', { signature: 'same' });
  triage.accept(first);
  first.message = 'mutated after accept';
  assert.equal(triage.findings.length, 0);
  await new Promise(resolve => setImmediate(resolve));
  for (let i = 1; i < 75; i++) triage.accept(event(String(i), { signature: 'same', history: [] }));
  triage.accept(event('1'));
  const done = triage.finish();
  assert.equal(done, triage.finish());
  await done;
  assert.throws(() => triage.accept(event('late')), /finishing/);
  const saved = JSON.parse(await readFile(join(dir, 'findings.json'), 'utf8'));
  assert.equal(saved.length, 1);
  assert.equal(saved[0].occurrences, 75);
  assert.equal(saved[0].status, 'needs-human-verification');
  assert.equal(saved[0].title, event('x').message);
  assert.deepEqual(saved[0].history, []);
  assert.equal(saved[0].duplicate.status, 'candidate');
  assert.deepEqual(JSON.parse(await readFile(join(dir, 'triage-queue.json'), 'utf8')), []);
  const updates = (await readFile(join(dir, 'findings.jsonl'), 'utf8')).trim().split('\n').map(s => JSON.parse(s));
  assert.equal(updates.length, 75);
  assert.equal(updates.at(-1).finding.occurrences, 75);
});
test('noise, missing basis, and blocked execution cannot become verified bugs', async t => {
  const triage = new Triage(config, await directory(t));
  for (const kind of ['console-error', 'network-error', 'safety-block', 'timeout']) triage.accept(event(kind, { kind, signature: kind, userVisible: false }));
  triage.accept(event('no-basis', { signature: 'no-basis', basis: '' }));
  triage.accept(event('no-evidence', { signature: 'no-evidence', evidence: {} }));
  await triage.finish();
  assert.deepEqual(triage.findings.map(f => f.status), ['signal', 'signal', 'inconclusive', 'inconclusive', 'signal', 'signal']);
});
test('screening respects availability and conservative overlap', async t => {
  for (const status of ['checked', 'not-checked', 'inaccessible'] as const) {
    const cfg = structuredClone(config); cfg.cycle.currentIssues.status = status;
    const triage = new Triage(cfg, await directory(t));
    triage.accept(event('different', { message: 'Checkout button fails keyboard navigation', actual: 'No focus indicator' }));
    await triage.finish();
    assert.equal(triage.findings[0].duplicate.status, status === 'checked' ? 'screened-no-match' : status);
  }
});
test('finish initializes empty snapshots and reports include all planned coverage and truthful counters', async t => {
  const dir = await directory(t), triage = new Triage(config, dir);
  await triage.finish();
  assert.deepEqual(JSON.parse(await readFile(join(dir, 'findings.json'), 'utf8')), []);
  assert.equal(await readFile(join(dir, 'findings.jsonl'), 'utf8'), '');
  const metrics: Metrics = { startedAt: '', runtimeMs: 100, modelCalls: 7, pagesVisited: 2, statesVisited: 2, actionsAttempted: 3, testCasesCompleted: 0, uniqueSuspiciousEvents: 0, credibleFindings: 0, signalsSuppressed: 0, evidenceCaptured: 0, stopReason: 'budget' };
  await writeFile(join(dir, 'tasks.json'), 'parent-owned');
  await writeReport(dir, config, [], metrics, []);
  const report = await readFile(join(dir, 'report.md'), 'utf8');
  assert.match(report, /Model calls recorded: 7/);
  assert.match(report, /step: Check total — pending/);
  assert.match(report, /maxActions: 17 remaining/);
  assert.match(report, /task not recorded/);
  assert.equal(await readFile(join(dir, 'tasks.json'), 'utf8'), 'parent-owned');
  assert.match(await readFile(join(dir, 'brief.md'), 'utf8'), /Model calls recorded: 7/);
});
test('persistence errors reject finish without unhandled consumer rejection', async t => {
  const dir = await directory(t), path = join(dir, 'file');
  await writeFile(path, 'not a directory');
  const triage = new Triage(config, path);
  triage.accept(event('failure'));
  await assert.rejects(triage.finish());
});
test('visible proven failures retain human review and reports disclose evidence and reproduction limitations', async t => {
  const dir = await directory(t), triage = new Triage(config, dir);
  triage.accept(event('proven-timeout', { kind: 'timeout' }));
  await triage.finish();
  assert.equal(triage.findings[0].status, 'needs-human-verification');
  const metrics: Metrics = { startedAt: '', runtimeMs: 100, modelCalls: 0, pagesVisited: 2, statesVisited: 2, actionsAttempted: 3, testCasesCompleted: 0, uniqueSuspiciousEvents: 1, credibleFindings: 1, signalsSuppressed: 0, evidenceCaptured: 1 };
  await writeReport(dir, config, [], metrics, triage.findings);
  const report = await readFile(join(dir, 'report.md'), 'utf8');
  assert.match(report, /Shortest recorded action path \(not claimed minimized/);
  assert.match(report, /Evidence missing: dom, trace/);
  assert.match(report, /Duplicate status: candidate/);
  assert.match(report, /not definitive duplicates/);
  assert.match(report, /1\. click: Checkout/);
});
