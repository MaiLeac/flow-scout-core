import { mkdir, writeFile, rename, appendFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import type { CycleConfig, HuntEvent, Finding, Metrics, TaskRecord } from './types.ts';

async function atomic(path: string, value: unknown): Promise<void> {
  const temp = `${path}.${randomUUID()}.tmp`;
  await writeFile(temp, JSON.stringify(value, null, 2) + '\n');
  await rename(temp, path);
}
const words = (s: string) => new Set(s.toLowerCase().match(/[\p{L}\p{N}]+/gu)?.filter(w => w.length > 2) ?? []);
function similar(a: string, b: string): boolean {
  const x = words(a), y = words(b);
  const common = [...x].filter(w => y.has(w)).length;
  return common >= 3 && common / new Set([...x, ...y]).size >= 0.7;
}
function classify(e: HuntEvent): Pick<Finding, 'status' | 'confidence' | 'reason'> {
  const kind = e.kind.toLowerCase().replace(/[_\s]/g, '-');
  const evidence = Boolean(e.evidence.screenshot || e.evidence.dom || e.evidence.trace);
  const proven = e.userVisible && evidence && Boolean(e.basis?.trim()) && Boolean(e.expected?.trim()) && Boolean(e.actual?.trim());
  if (proven && e.details?.environmentRestricted === true) return { status: 'inconclusive', confidence: 'low', reason: 'Requests were blocked by the runner in this context. Recheck without those restrictions before attributing the failure to the product.' };
  if (/console|network/.test(kind)) return { status: 'signal', confidence: 'low', reason: 'Console or network observation alone does not establish a user-visible defect.' };
  if (/timeout|timed-out|safety|blocked/.test(kind) && !proven) return { status: 'inconclusive', confidence: 'low', reason: 'Execution was blocked or timed out without evidence proving a visible failure.' };
  if (proven && /assert|fail|mismatch|defect|timeout|timed-out|safety|blocked/.test(kind)) return { status: 'needs-human-verification', confidence: 'medium', reason: 'Recorded visible failure has evidence and an expectation basis; human verification is still required.' };
  return { status: 'signal', confidence: 'low', reason: 'Observation lacks a complete evidence-backed visible assertion failure.' };
}

/** One instance owns an output directory. All persistence is serialized by its consumer. */
export class Triage {
  findings: Finding[] = [];
  private config: CycleConfig;
  private outputDir: string;
  private queue: HuntEvent[] = [];
  private seen = new Set<string>();
  private scheduled = false;
  private closing = false;
  private failure: unknown;
  private finished?: Promise<void>;
  private idle: (() => void)[] = [];
  constructor(config: CycleConfig, outputDir: string) { this.config = config; this.outputDir = outputDir; }
  accept(event: HuntEvent): void {
    if (this.closing) throw new Error('Triage is finishing; no more events accepted');
    if (this.seen.has(event.id)) return;
    this.queue.push(structuredClone(event));
    this.seen.add(event.id);
    this.schedule();
  }
  private schedule(): void {
    if (this.scheduled) return;
    this.scheduled = true;
    setImmediate(() => { void this.consume(); });
  }
  private async consume(): Promise<void> {
    try {
      await mkdir(this.outputDir, { recursive: true });
      await appendFile(join(this.outputDir, 'findings.jsonl'), '');
      do {
        await atomic(join(this.outputDir, 'triage-queue.json'), this.queue);
        const batch = this.queue.splice(0);
        for (const event of batch) {
          const finding = this.merge(event);
          await appendFile(join(this.outputDir, 'findings.jsonl'), JSON.stringify({ eventId: event.id, ts: event.ts, finding }) + '\n');
        }
        await atomic(join(this.outputDir, 'findings.json'), this.findings);
      } while (this.queue.length);
      await atomic(join(this.outputDir, 'triage-queue.json'), this.queue);
    } catch (error) { this.failure = error; }
    finally {
      this.scheduled = false;
      if (this.queue.length && !this.failure) this.schedule();
      else this.idle.splice(0).forEach(resolve => resolve());
    }
  }
  private merge(event: HuntEvent): Finding {
    const signature = event.signature || createHash('sha256').update(JSON.stringify([event.kind, event.url, event.message, event.expected, event.actual])).digest('hex');
    let finding = this.findings.find(f => f.signature === signature);
    const classification = classify(event);
    if (!finding) {
      finding = { id: `finding-${this.findings.length + 1}`, signature, eventIds: [], title: event.message,
        ...classification, impact: event.impact ?? 'low', expected: event.expected, actual: event.actual, basis: event.basis,
        url: event.url, evidence: [], history: event.history, occurrences: 0,
        duplicate: { status: 'not-checked', candidates: [], note: '' } };
      this.findings.push(finding);
    } else {
      // Retain the strongest observation without allowing noise to downgrade it.
      if (classification.status === 'needs-human-verification' && finding.status !== 'needs-human-verification') {
        Object.assign(finding, classification, { expected: event.expected, actual: event.actual, basis: event.basis, url: event.url });
      }
      if (event.history.length < finding.history.length) finding.history = event.history;
      const rank = { low: 0, medium: 1, high: 2 };
      if (event.impact && rank[event.impact] > rank[finding.impact]) finding.impact = event.impact;
    }
    finding.eventIds.push(event.id);
    finding.occurrences++;
    if (Object.values(event.evidence).some(Boolean) && !finding.evidence.some(e => JSON.stringify(e) === JSON.stringify(event.evidence))) finding.evidence.push(event.evidence);
    const issues = this.config.cycle.currentIssues;
    const candidates = issues.status === 'checked' ? issues.items.filter(issue => similar(`${finding.title} ${finding.actual ?? ''}`, `${issue.title} ${issue.actual ?? ''}`)).map(issue => issue.id) : [];
    finding.duplicate = {
      status: issues.status !== 'checked' ? issues.status : candidates.length ? 'candidate' : 'screened-no-match', candidates,
      note: issues.status === 'checked' ? 'Conservative lexical comparison against supplied current-cycle issues only; candidates are not definitive duplicates, and no match does not prove novelty.' : 'Current-cycle known issues were not available for reliable screening.'
    };
    return finding;
  }
  finish(): Promise<void> {
    if (!this.finished) {
      this.closing = true;
      this.finished = (async () => {
        if (!this.scheduled && !this.failure) this.schedule();
        if (this.scheduled) await new Promise<void>(resolve => this.idle.push(resolve));
        if (this.failure) throw this.failure;
      })();
    }
    return this.finished;
  }
}

const md = (value: unknown) => String(value ?? '').replace(/[\\`*_{}\[\]<>|#]/g, '\\$&').replace(/\r?\n/g, ' ');
export async function writeReport(outputDir: string, config: CycleConfig, tasks: TaskRecord[], metrics: Metrics, findings: Finding[]): Promise<void> {
  await mkdir(outputDir, { recursive: true });
  const credible = findings.filter(f => f.status === 'needs-human-verification' || f.status === 'verified' || f.status === 'duplicate-candidate');
  const lines = [`# ${md(config.cycle.title)} — triage report`, '', `Cycle: ${md(config.cycle.id)}`, '',
    `Credible findings: ${credible.length}. Model calls recorded: ${metrics.modelCalls}. Triage makes no model calls.`,
    `Stop reason: ${md(metrics.stopReason ?? 'not recorded')}. Runtime: ${metrics.runtimeMs} ms.`, '', '## Remaining budgets', '',
    ...([['runtimeMs', metrics.runtimeMs], ['maxPages', metrics.pagesVisited], ['maxStates', metrics.statesVisited], ['maxActions', metrics.actionsAttempted], ['maxSignals', metrics.uniqueSuspiciousEvents], ['maxEvidence', metrics.evidenceCaptured]] as const).map(([key, used]) => `- ${key}: ${Math.max(0, config.budgets[key] - used)} remaining (${used}/${config.budgets[key]} recorded).`),
    `- Per-state/depth limits: ${config.budgets.maxActionsPerState} actions, depth ${config.budgets.maxDepth}; remaining allowance is unavailable from aggregate metrics.`, '', '## Findings', ''];
  if (!credible.length) lines.push('No credible findings established; this does not establish absence of defects.', '');
  const rank = {high:3,medium:2,low:1};
  const ranked = [...findings].sort((a,b) => Number(credible.includes(b))-Number(credible.includes(a)) || rank[b.impact]-rank[a.impact] || rank[b.confidence]-rank[a.confidence]);
  for (const f of ranked) {
    lines.push(`### ${md(f.id)}: ${md(f.title)}`, '', `Status: ${md(f.status)}; confidence: ${f.confidence}; impact: ${f.impact}; occurrences: ${f.occurrences}.`,
      `URL: ${md(f.url)}`, `Expected: ${md(f.expected ?? 'not recorded')}`, `Actual: ${md(f.actual ?? 'not recorded')}`, `Basis: ${md(f.basis ?? 'missing')}`, `Assessment: ${md(f.reason)}`,
      `Duplicate status: ${f.duplicate.status}; candidates: ${md(f.duplicate.candidates.join(', ') || 'none')}. ${md(f.duplicate.note)}`, '', 'Evidence:', '',
      ...f.evidence.map(e => `- ${md(Object.entries(e).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('; '))}`));
    const missing = ['screenshot', 'dom', 'trace'].filter(k => !f.evidence.some(e => Boolean(e[k as keyof typeof e])));
    lines.push(`Evidence missing: ${missing.join(', ') || 'none of the tracked artifact types'}; artifact contents and reproducibility require human review.`, 'Cycle evidence still needs checking: highlighted screenshot, silent MP4 and PII review are not automatically completed by this engine.', '', 'Shortest recorded action path (not claimed minimized; grouped occurrences may differ):', '');
    lines.push(...(f.history.length ? f.history.map((a, i) => `${i + 1}. ${md(a.action)}: ${md(a.description)} — ${md(a.url)}${a.selector ? `; selector ${md(a.selector)}` : ''}${a.value ? `; value ${md(a.value)}` : ''}${a.outcome ? `; outcome ${md(a.outcome)}` : ''}`) : ['No actions recorded; reproduction path is missing.']), '');
  }
  lines.push('## Every-step coverage and blockers', '');
  for (const task of config.tasks) {
    const record = tasks.find(t => t.id === task.id);
    lines.push(`### ${md(task.id)} — ${md(task.feature)}`, '', `Status: ${record?.status ?? 'pending'}; required: ${task.required}.`, '');
    for (const step of task.steps) {
      const result = record?.steps.find(s => s.id === step.id);
      lines.push(`- ${md(step.id)}: ${md(step.description)} — ${result?.status ?? 'pending (not recorded)'}${result?.reason ? `; ${md(result.reason)}` : ''}; events: ${md(result?.eventIds.join(', ') || 'none')}.`);
    }
    for (const step of record?.steps.filter(s => !task.steps.some(x => x.id === s.id)) ?? []) lines.push(`- Additional step ${md(step.id)}: ${md(step.description)} — ${step.status}; ${md(step.reason ?? '')}.`);
    lines.push(`Blockers: ${md(record?.blockers.join('; ') || (record ? 'none recorded' : 'task not recorded'))}.`, `Next action: ${md(record?.nextAction || 'not recorded')}.`, '');
  }
  for (const record of tasks.filter(t => !config.tasks.some(c => c.id === t.id))) {
    lines.push(`### Additional task ${md(record.id)}`, '', `Status: ${record.status}. Blockers: ${md(record.blockers.join('; ') || 'none recorded')}.`, ...record.steps.map(s => `- ${md(s.id)}: ${md(s.description)} — ${s.status}; ${md(s.reason ?? '')}.`), `Next action: ${md(record.nextAction)}.`, '');
  }
  lines.push('## Limitations', '', 'Findings require human review. Evidence paths are recorded references, not independent validation of artifact contents. Coverage reflects recorded execution only. The parent runner owns the task ledger. Screenshots use configured masks; traces and DOM text can still contain personal information and must stay local until reviewed. Duplicate screening is lexical against supplied current-cycle reports only, not a proof of novelty. No live uTest submission or autonomous LLM reasoning occurs inside the engine.', '');
  await writeFile(join(outputDir, 'report.md'), lines.join('\n'));
  await writeFile(join(outputDir, 'brief.md'), [`# ${md(config.cycle.title)} — brief`, '', `Credible findings: ${credible.length}; total grouped observations: ${findings.length}.`, `Model calls recorded: ${metrics.modelCalls}. Stop: ${md(metrics.stopReason ?? 'not recorded')}.`, `Tasks: ${tasks.length}/${config.tasks.length} recorded.`, ...tasks.filter(t => t.blockers.length).map(t => `- ${md(t.id)}: ${md(t.blockers.join('; '))}`), '', 'See report.md for evidence gaps, duplicate-screening limitations, recorded action paths, budgets, and every-step coverage.', ''].join('\n'));
}
