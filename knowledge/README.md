# Flow Scout Core — Evidence-Based uTest Knowledge System (`knowledge/`)

This directory contains the structured, schema-validated bug intelligence and uTest Academy knowledge base for `MaiLeac/flow-scout-core`.

## 1. Source-of-Truth Hierarchy (Strict Precedence)
When rules or heuristics conflict, agents and tools MUST resolve them in this exact order:
1. **Active Cycle Specifics:** Current cycle `Overview`, `Announcements`, `Issue Reporting Instructions`, `Slot / Test Case Instructions`, and direct `TTL / TE` instructions in Cycle Chat or Info Requests.
2. **Official uTest Academy Live Courses:** Official course lessons at `https://www.utest.com/academy` (indexed in [`academy/course-index.json`](academy/course-index.json) and [`academy/source-links.md`](academy/source-links.md)).
3. **Verified Historical Cycle & Issue Evidence:** Real uTest issues, scorecards, and TTL review outcomes in [`cycles/`](cycles/) and [`issues/issue-index.json`](issues/issue-index.json).
4. **Structured Repository Playbooks & Handbooks:** [`agent-guides/`](agent-guides/), [`guidelines/utest_academy_handbook.md`](../guidelines/utest_academy_handbook.md), [`heuristics/BUG_LESSONS.md`](../heuristics/BUG_LESSONS.md), and [`heuristics/MASTER_BUG_LIBRARY.md`](../heuristics/MASTER_BUG_LIBRARY.md).
5. **External Community Secondary Evidence:** Clearly labeled `secondary_community_reference` records (`EXT-TT-*`), used only for exploratory hypothesis generation.

## 2. Directory Architecture
- [`AUDIT_AND_COVERAGE_REPORT.md`](AUDIT_AND_COVERAGE_REPORT.md) — Complete Part A–F repository audit, contradictions resolved, and historical cycle/issue coverage matrix.
- [`cycles/cycle-index.json`](cycles/cycle-index.json) — Master index of Mai's uTest cycles (`562706`, `562000`, `562001`, `academy-practice-2026`) and all 5 Approved Academy Test Cases (`#12353130`, `#12382341`, `#12406429`, `#12428334`, `#12439394`).
  - [`cycles/562706/`](cycles/562706/) — OneTravel Academy Challenge (`overview.md`, `issues.jsonl` [17 records], `issue-analysis.md`, `review-outcomes.md` with Rank #1 Scorecard & verbatim TTL Info Request).
  - [`cycles/562000/`](cycles/562000/) — Genius Android App Mobile Cycle (`overview.md`, `issues.jsonl` [2 records: `#7290340`, `#7290242`], `issue-analysis.md`, `review-outcomes.md`).
  - [`cycles/562001/`](cycles/562001/) — Celine Web `en-vn` Cycle (`overview.md`, `issues.jsonl` [1 record: `#7292278`], `issue-analysis.md`, `review-outcomes.md`).
  - [`cycles/academy-practice-2026/`](cycles/academy-practice-2026/) — Practice Cycles Builds 1, 2, 4 & MAC Cosmetics (`overview.md`, `issues.jsonl` [1 record: `PRACTICE-MAC-01`], `issue-analysis.md`, `review-outcomes.md`).
- [`issues/issue-schema.json`](issues/issue-schema.json) & [`issues/issue-index.json`](issues/issue-index.json) — 24 structured issue records (21 primary uTest records + 3 secondary reference records) separating `original_source`, `normalized_fields`, `agent_analysis`, and `inferred_lessons`.
- [`patterns/pattern-index.json`](patterns/pattern-index.json) & `PAT-01`..`PAT-10` — 10 reusable defect patterns backed by real approved uTest bugs.
- [`rejection-lessons/rejection-index.json`](rejection-lessons/rejection-index.json) & category guides — Evidence-backed rules for avoiding `WAD`, `WNF`, `DUP`, `IR`, and `DNFI` while maximizing `Very Valuable` (`+2.00 pt`) and `Somewhat Valuable` (`+1.00 pt`) approvals.
- [`academy/course-index.json`](academy/course-index.json), [`academy/source-links.md`](academy/source-links.md), [`academy/access-status.md`](academy/access-status.md) — Official uTest Academy track/course/lesson index and access audit.
- [`agent-guides/`](agent-guides/) — Actionable playbooks for autonomous agents:
  - [`discovery-playbook.md`](agent-guides/discovery-playbook.md)
  - [`triage-playbook.md`](agent-guides/triage-playbook.md)
  - [`issue-writing-playbook.md`](agent-guides/issue-writing-playbook.md)
  - [`duplicate-check-playbook.md`](agent-guides/duplicate-check-playbook.md)
