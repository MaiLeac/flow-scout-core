# Academy Practice Cycles — Review Outcomes & Formatting Corrections

## 1. Key Reviewer Corrections Learned in Practice Cycles
1. **No Standalone `'Observe'` Step:**
   - Earlier habits included a final numbered step such as `8. Observe that...`.
   - Current uTest Academy `Issue Reports` lessons and practice cycle reviewers strictly prohibit `Observe`, `Check`, `View results`, `See`, or `Find` as a numbered step in `Actions Performed`. What is observed belongs exclusively in `Actual Results`.
2. **`Source: Exploratory` vs. `Source: Structured`:**
   - The MAC Cosmetics `'OVER $50'` filter bug was discovered while exploring outside the scripted test case steps, so setting `Source = Structured` was flagged.
   - Rule: Use `Structured` ONLY when the bug occurs while executing a test case step (or via `Fail & Report Issue`). Use `Exploratory` for all independent bug hunting.
3. **Charles Proxy Log Discipline (`#12428334`):**
   - SSL Proxying must be enabled (`* : 443`) with Root Certificate trusted so traffic shows a blue circle/lightning bolt (decrypted), not a lock icon or red cross. Upload the full `.chls` / `.chlz` session file without filtering out hosts mid-session.
