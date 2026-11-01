import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateConfig } from '../src/config.ts';
import { Triage } from '../src/triage.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');

test('onetravel.scout.json validates cleanly and screens verified Cycle 562706 duplicates', async t => {
  const raw = JSON.parse(await readFile(path.join(repoRoot, 'bug-hunter', 'configs', 'onetravel.scout.json'), 'utf8'));
  const cfg = validateConfig(raw);
  assert.equal(cfg.cycle.id, '562706');
  assert.equal(cfg.cycle.currentIssues.status, 'checked');
  assert.ok(cfg.cycle.currentIssues.items.length >= 20, 'Should contain all 20+ verified Cycle 562706 issues');

  const dir = await mkdtemp(path.join(tmpdir(), 'knowledge-triage-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const triage = new Triage(cfg, dir);
  triage.accept({
    id: 'cand-1', ts: new Date().toISOString(), runId: 'r1', taskId: 'search-scout', lane: 'quick-win',
    kind: 'assertion-failed', url: 'https://www.onetravel.com/',
    message: 'Windows 10 64 bit - Multi city - Middle flight leg has no delete button',
    expected: 'Middle flight leg can be deleted',
    actual: 'Middle flight leg has no delete button',
    basis: 'Cycle overview',
    evidence: { screenshot: 's.png' },
    history: [{ ts: '', action: 'click', description: 'Multi city', url: 'https://www.onetravel.com/' }],
    userVisible: true
  });
  await triage.finish();
  assert.equal(triage.findings[0].duplicate.status, 'candidate');
  assert.ok(triage.findings[0].duplicate.candidates.some(c => c.includes('7297771')));
});

test('knowledge/ indexes, schemas, and referenced files are complete and valid', async () => {
  const cycleIndex = JSON.parse(await readFile(path.join(repoRoot, 'knowledge', 'cycles', 'cycle-index.json'), 'utf8'));
  assert.equal(cycleIndex.test_cases_summary.length, 5);
  assert.ok(cycleIndex.cycles.length >= 4);

  for (const cycle of cycleIndex.cycles) {
    const folder = path.join(repoRoot, cycle.folder_path);
    await access(path.join(folder, 'overview.md'));
    await access(path.join(folder, 'issue-analysis.md'));
    await access(path.join(folder, 'review-outcomes.md'));
    const jsonlRaw = await readFile(path.join(folder, 'issues.jsonl'), 'utf8');
    const lines = jsonlRaw.trim().split('\n').filter(Boolean);
    assert.equal(lines.length, cycle.total_issues_indexed);
  }

  const issueIndex = JSON.parse(await readFile(path.join(repoRoot, 'knowledge', 'issues', 'issue-index.json'), 'utf8'));
  assert.ok(issueIndex.issues.length >= 23);
  for (const issue of issueIndex.issues) {
    assert.ok(issue.issue_id, 'issue_id required');
    assert.ok(issue.cycle_id, 'cycle_id required');
    assert.ok(issue.source_completeness, 'source_completeness required');
    assert.ok(issue.original_source?.title, 'original_source.title required');
    assert.ok(issue.normalized_fields?.defect_category, 'normalized_fields.defect_category required');
    assert.ok(Array.isArray(issue.inferred_lessons) && issue.inferred_lessons.length > 0, 'inferred_lessons required');
  }

  const patternIndex = JSON.parse(await readFile(path.join(repoRoot, 'knowledge', 'patterns', 'pattern-index.json'), 'utf8'));
  assert.equal(patternIndex.patterns.length, 10);
  for (const pat of patternIndex.patterns) {
    await access(path.join(repoRoot, pat.file));
  }

  const rejectionIndex = JSON.parse(await readFile(path.join(repoRoot, 'knowledge', 'rejection-lessons', 'rejection-index.json'), 'utf8'));
  assert.equal(rejectionIndex.categories.length, 5);
  for (const cat of rejectionIndex.categories) {
    await access(path.join(repoRoot, cat.file));
  }

  const academyIndex = JSON.parse(await readFile(path.join(repoRoot, 'knowledge', 'academy', 'course-index.json'), 'utf8'));
  assert.equal(academyIndex.tracks.length, 6);
});
