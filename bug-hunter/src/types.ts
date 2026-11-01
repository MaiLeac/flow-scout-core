export type Lane = 'test-case' | 'quick-win' | 'workflow' | 'deep';
export type Status = 'pending' | 'running' | 'passed' | 'failed' | 'blocked' | 'manual' | 'completed';
export interface KnownIssue { id: string; title: string; url?: string; trigger?: string; actual?: string; }
export interface Assertion {
  type: 'visible' | 'text' | 'count' | 'url' | 'checked';
  selector?: string;
  value: string | number | boolean;
  basis: string;
  impact?: 'low' | 'medium' | 'high';
}
export interface Step {
  id: string; description: string;
  action: 'goto' | 'click' | 'fill' | 'select' | 'check' | 'uncheck' | 'assert' | 'manual' | 'back';
  selector?: string; value?: string; url?: string; expected?: Assertion;
  dependsOn?: string[];
}
export interface Task {
  id: string; lane: Lane; feature: string; startUrl: string;
  required: boolean; steps: Step[]; crawl?: boolean;
  resourceKey?: string;
}
export interface CycleConfig {
  version: 1;
  cycle: {
    id: string; title: string; overview: string; inScope: string[]; outOfScope: string[];
    sources: string[]; evidence: string[]; deadline?: string;
    currentIssues: { status: 'checked' | 'not-checked' | 'inaccessible'; checkedAt?: string; items: KnownIssue[] };
  };
  browser: { headless: boolean; channel?: string; executablePath?: string };
  scope: { allowedOrigins: string[]; assetOrigins?: string[]; includePaths: string[]; excludePatterns: string[] };
  safety: { allowedActionNames: string[]; readOnlyPostRules: { urlPattern: string; reason: string }[]; privateDataSelectors: string[] };
  budgets: {
    runtimeMs: number; maxPages: number; maxStates: number; maxActions: number;
    maxActionsPerState: number; maxDepth: number; maxSignals: number; maxEvidence: number;
    workers: number; actionTimeoutMs: number; navigationTimeoutMs: number; settleMs: number; readinessTimeoutMs: number;
  };
  tasks: Task[];
}
export interface ActionRecord { ts: string; action: string; description: string; url: string; selector?: string; value?: string; outcome?: string; }
export interface Evidence { screenshot?: string; dom?: string; trace?: string; }
export interface HuntEvent {
  id: string; ts: string; runId: string; taskId: string; lane: Lane;
  kind: string; url: string; message: string; userVisible: boolean;
  stateId?: string; signature?: string; expected?: string; actual?: string; basis?: string;
  impact?: 'low' | 'medium' | 'high'; details?: Record<string, unknown>;
  evidence: Evidence; history: ActionRecord[];
}
export interface Finding {
  id: string; signature: string; eventIds: string[]; title: string;
  status: 'signal' | 'needs-human-verification' | 'verified' | 'not-a-bug' | 'inconclusive' | 'duplicate-candidate';
  confidence: 'low' | 'medium' | 'high'; impact: 'low' | 'medium' | 'high';
  expected?: string; actual?: string; basis?: string; url: string;
  evidence: Evidence[]; history: ActionRecord[];
  duplicate: { status: 'not-checked' | 'inaccessible' | 'screened-no-match' | 'candidate'; candidates: string[]; note: string };
  occurrences: number; reason: string;
}
export interface StepResult { id: string; description: string; status: Status; reason?: string; eventIds: string[]; }
export interface TaskRecord {
  id: string; owner: string; lane: Lane; feature: string; required: boolean; status: Status;
  startedAt?: string; endedAt?: string; evidence: string[]; blockers: string[]; nextAction: string;
  steps: StepResult[];
}
export interface Metrics {
  startedAt: string; endedAt?: string; runtimeMs: number; modelCalls: number;
  pagesVisited: number; statesVisited: number; actionsAttempted: number;
  testCasesCompleted: number; uniqueSuspiciousEvents: number; credibleFindings: number;
  signalsSuppressed: number; evidenceCaptured: number; stopReason?: string;
}
