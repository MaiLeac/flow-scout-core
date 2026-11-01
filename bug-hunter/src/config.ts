import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { CycleConfig } from './types.ts';

export const defaultBudgets = {
  runtimeMs: 120000, maxPages: 12, maxStates: 25, maxActions: 40,
  maxActionsPerState: 4, maxDepth: 3, maxSignals: 100, maxEvidence: 12,
  workers: 2, actionTimeoutMs: 4000, navigationTimeoutMs: 15000, settleMs: 350, readinessTimeoutMs: 1500,
};

export function validateConfig(c: CycleConfig): CycleConfig {
  if (c.version !== 1 || !c.cycle?.id || !c.cycle.title) throw new Error('Config requires version 1 and cycle id/title');
  if (!c.scope?.allowedOrigins?.length) throw new Error('At least one exact allowed origin is required');
  for (const origin of [...c.scope.allowedOrigins, ...(c.scope.assetOrigins ?? [])]) {
    const u = new URL(origin);
    if (!['http:', 'https:'].includes(u.protocol) || u.origin !== origin || u.username || u.password) throw new Error(`Not an exact HTTP(S) origin: ${origin}`);
  }
  if (!Array.isArray(c.scope.includePaths) || !c.scope.includePaths.length) throw new Error('includePaths must be explicit');
  for (const field of ['sources', 'inScope', 'outOfScope', 'evidence'] as const) {
    if (!Array.isArray(c.cycle[field])) throw new Error(`cycle.${field} must be an array`);
  }
  if (!['checked', 'not-checked', 'inaccessible'].includes(c.cycle.currentIssues?.status) || !Array.isArray(c.cycle.currentIssues?.items)) throw new Error('Specify currentIssues status and items');
  if (c.cycle.currentIssues.status === 'checked' && !c.cycle.currentIssues.checkedAt) throw new Error('checked currentIssues requires checkedAt');
  if (!c.safety || !Array.isArray(c.safety.allowedActionNames) || !Array.isArray(c.safety.readOnlyPostRules) || !Array.isArray(c.safety.privateDataSelectors)) throw new Error('Explicit safety configuration is required');
  for (const r of c.safety.readOnlyPostRules) {
    if (!r.reason || !r.urlPattern.startsWith('^') || !r.urlPattern.endsWith('$')) throw new Error('Read-only POST exception requires anchored URL pattern and reviewed reason');
  }
  for (const p of [...c.scope.includePaths, ...c.scope.excludePatterns, ...c.safety.allowedActionNames, ...c.safety.readOnlyPostRules.map(x => x.urlPattern)]) new RegExp(p, 'i');
  c.budgets = { ...defaultBudgets, ...c.budgets };
  for (const [key, value] of Object.entries(c.budgets)) {
    if (!Number.isSafeInteger(value) || value < (['maxDepth', 'settleMs'].includes(key) ? 0 : 1)) throw new Error(`Invalid budget ${key}`);
  }
  if (c.budgets.workers > 8) throw new Error('workers must be <= 8');
  if (!c.tasks?.length) throw new Error('At least one task is required');
  const ids = new Set<string>();
  for (const task of c.tasks) {
    if (!/^[\w-]+$/.test(task.id) || ids.has(task.id)) throw new Error(`Invalid/duplicate task id: ${task.id}`);
    ids.add(task.id);
    if (!['test-case', 'quick-win', 'workflow', 'deep'].includes(task.lane)) throw new Error(`Invalid lane ${task.lane}`);
    if (!c.scope.allowedOrigins.includes(new URL(task.startUrl).origin)) throw new Error(`Task ${task.id} start URL is outside allowedOrigins`);
    if (!Array.isArray(task.steps)) throw new Error('steps must be an array');
    const stepIds = new Set<string>();
    for (const step of task.steps) {
      if (!/^[\w-]+$/.test(step.id) || stepIds.has(step.id)) throw new Error(`Invalid/duplicate step id ${step.id}`);
      if (!['goto', 'click', 'fill', 'select', 'check', 'uncheck', 'assert', 'manual', 'back'].includes(step.action)) throw new Error(`Unknown action ${step.action}`);
      for (const dep of step.dependsOn ?? []) if (!stepIds.has(dep)) throw new Error(`Dependency ${dep} must be an earlier step`);
      stepIds.add(step.id);
      if (step.action === 'assert' && !step.expected) throw new Error('assert requires expected');
      if (step.expected && (!step.expected.basis || !['visible', 'text', 'count', 'url', 'checked'].includes(step.expected.type))) throw new Error('Assertions need a supported type and defensible basis');
      if (['click', 'fill', 'select', 'check', 'uncheck'].includes(step.action) && !step.selector) throw new Error(`${step.action} requires selector`);
    }
  }
  return c;
}

export async function loadConfig(file: string): Promise<CycleConfig> {
  return validateConfig(JSON.parse(await readFile(file, 'utf8')));
}

export async function writeIntake(c: CycleConfig, dir: string) {
  await mkdir(dir, { recursive: true });
  const lines = [`# Cycle Brief — ${c.cycle.title}`, '', `Cycle: ${c.cycle.id}`, `Deadline: ${c.cycle.deadline ?? 'Not supplied'}`, '', c.cycle.overview, '',
    '## In scope', ...c.cycle.inScope.map(x => `- ${x}`), '', '## Excluded', ...c.cycle.outOfScope.map(x => `- ${x}`), '',
    `Current-cycle issue access: ${c.cycle.currentIssues.status}; checked: ${c.cycle.currentIssues.checkedAt ?? 'not recorded'}.`,
    'The source issue list is supplied intake, not an automatic live uTest fetch. Refresh it before duplicate screening.', '',
    '## Required evidence', ...c.cycle.evidence.map(x => `- ${x}`), '', '## Sources', ...c.cycle.sources.map(x => `- ${x}`), '',
    '## Safety and execution', `- Allowed page origins: ${c.scope.allowedOrigins.join(', ')}`,
    '- Fresh isolated browser context per task. No inherited personal profile or cookies.',
    '- No payment, messaging, account changes, deletes or booking completion. Unreviewed non-read-only requests are blocked.',
    '- Blocked requests can change site behavior. Related failures need an unrestricted manual control before reporting.',
    `- ${c.budgets.workers} deterministic workers; runtime limit ${c.budgets.runtimeMs} ms; model calls per click: 0.`, '',
    '## Complete configured test checklist',
    'Completeness is relative to the imported tasks. Unavailable original test steps must be entered as manual tasks; they are never treated as executed.', '',
    ...c.tasks.flatMap(t => [`### ${t.id}: ${t.feature} (${t.required ? 'required' : 'exploratory'}, ${t.lane})`, `Start: ${t.startUrl}`, ...t.steps.map(s => `- [ ] ${s.id} — ${s.description}${s.action === 'manual' ? ' [MANUAL / NOT AUTOMATED]' : ''}`), ''])];
  await writeFile(path.join(dir, 'cycle-brief.md'), lines.join('\n'));
  await writeFile(path.join(dir, 'cycle.json'), JSON.stringify(c, null, 2));
}
