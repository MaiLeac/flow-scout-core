# Duplicate Check Playbook — Separating Historical Intelligence from Active Cycle Duplicates

## 1. Two Distinct Concepts (Never Confuse Them!)

| Dimension | Historical Pattern Similarity (`knowledge/issues/issue-index.json`) | Current-Cycle Duplicate (`Active Cycle Issues List + Known Issues`) |
|---|---|---|
| **Source** | Past cycles (`562000`, `562001`, `562706`, `academy-practice-2026`, `TesterTudo`) | The currently active uTest cycle's `Issues` tab and attached `Known Issues` sheet |
| **Effect on Candidate Bug** | **INCREASES Confidence & Priority** (proves reviewers approve this defect class) | **BLOCKS Submission (`DUP` Rejection)** (unless used for `+1` reproduction or failed Test Case step linking) |
| **Example** | Finding an `'OVER $50'` sale-price filter bug on a new e-commerce site after seeing `PRACTICE-MAC-01` -> **Report it!** | Finding Multi-city middle flight leg delete failure in Cycle 562706 after Văn Vĩ already reported `#7297771` in Cycle 562706 -> **Do NOT report!** |

## 2. Step-by-Step Current-Cycle Duplicate Screening Procedure
1. **Refresh the Active Cycle Issues List Immediately Before Reporting:**
   - As documented in `BUG_LESSONS.md #5`, cycle issue lists change every hour. Always inspect the live `Issues` tab right before recording final evidence.
2. **Search by 3 Axes (Not Just Exact Words):**
   - **Axis A — Component / Area:** e.g., `Multi city`, `Flight Status`, `Review Trip Details`, `Hotel List`, `Car Listing`.
   - **Axis B — User Action / Control:** e.g., `delete button`, `filter`, `currency`, `shortlist`, `promo code`, `remove adult`.
   - **Axis C — Root Cause / Permutation:** Check if the same underlying bug was already reported on another page (e.g., `#7297550` Portuguese dates on My Trips vs. `#7297794` Vietnamese dates on Home Page). Cycle Overviews explicitly rule: *"Permutations of the reported issues in different sections or pages"* are Duplicates.
3. **Even Rejected Bugs in the Current Cycle Count as Duplicates:**
   - Academy Challenge Overviews state: *"Duplicate issues: Testers need to review the currently submitted issues and the known issue list if attached, even if the original bug was rejected due to mistakes within the report."*
