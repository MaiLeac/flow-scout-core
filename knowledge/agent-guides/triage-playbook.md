# Triage Playbook — Candidate Validation & Rejection Resistance

## 1. The 5-Gate Candidate Triage Filter
Every anomaly discovered by `bug-hunter` or exploratory testing MUST pass all 5 gates before alerting the user or recording final evidence:

### Gate 1: Scope & Safety Gate (`AGENT_RULES.md` + Cycle Overview)
- Does reproducing or testing this touch a prohibited area (`Contact Us`, `External Partner sites`, real purchase/order submission, or adding debit/credit cards)?
  - If **YES** -> **ABORT IMMEDIATELY**.
- Is the bug category excluded under `Do Not Report` (e.g., `Field validation`, `Accessibility`, `Usability`, `Security`, `slight visual overlapping/spacing`, `upper/lowercase typo`)?
  - If **YES** -> **DISCARD**.

### Gate 2: Current-Cycle Duplicate & Permutation Gate
- Search `currentIssues` and `knownIssues` of the **active cycle** by component, action, and root cause (not just exact title keywords).
- Would a TTL view this candidate as the same underlying defect or a page permutation of an already-submitted issue in the current cycle (e.g., `#7297771` Multi-city middle leg delete button, or `#7297550` vs `#7297794` locale date leak)?
  - If **YES** -> **SKIP** (unless executing a Test Case step that fails because of that bug, in which case link the existing Issue ID in the step's Actual Result like `#7296862`).

### Gate 3: Working-as-Designed (WAD) & Domain Logic Gate
- Can the behavior be explained by normal industry/product rules?
  - Flight Status calendar only allowing ±1–2 days (`#7297277`) -> **WAD**.
  - Flight Status showing `Gate: -` 24h before departure -> **WAD**.
  - Promo code `OCT26` returning `"The fare already includes our best available deal"` -> **WAD**.
  - Passenger selector showing inline red text `"Each infant on Lap must have a corresponding adult"` -> **WAD / Field Validation**.
  - `'Clear All'` button only clearing its local section (`#7296911`) -> **WAD**.

### Gate 4: `Won't Fix` (WNF) & Value Gate
- Is the defect an editorial grid overlap on a luxury site (`#7292278`) or a dead `'Give Us Feedback'` footer link (`#7297917`)?
  - Deprioritize (`low_priority_candidate`) while core functional bugs remain unexplored.

### Gate 5: Shortest Deterministic Reproduction Gate
- Strip out all exploratory detours. Verify the bug reproduces cleanly starting from Step 1 (`Open <Homepage URL>` or `Open the <App Name> app`).
