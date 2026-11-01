# PAT-06: High-Signal Visual & Localization Defects (vs. WNF/OOS Traps)

## 1. Pattern Definition & Scope Triage
- Most cycles exclude "minor visual issues (slight overlapping, misalignment, spacing)" and "minor content issues (capitalization, punctuation)".
- However, three specific classes of visual/localization issues **were Approved** in Mai's historical cycles:
  1. **Broken Image Assets on Primary Pages (`#7297688` — `Approved`, `Somewhat Valuable`):** `img.complete && img.naturalWidth === 0` displaying broken image icon + raw alt text on Homepage trip cards.
  2. **OS/Browser Locale Leak into English UI Dates (`#7297794` — `Approved`, `Somewhat Valuable`):** English site rendering date subtitles in Vietnamese/Portuguese (`#7297550`) due to unpinned locale in client-side date formatters.
  3. **In-Scope Core Feature Visual Rendering (`#7290242` — `Approved`, `Low`):** Partial highlight on Genius lyric annotations when annotations are explicitly in scope.

## 2. Traps to Avoid
- **Luxury Editorial Grid Overlaps (`#7292278` — `Approved / Won't Fix`):** Do not farm editorial layout overlaps on fashion sites (`Celine`).
- **Severity Inflation (`#7297868`):** Never mark a missing room photo or visual issue as `High` severity; Academy rules mandate `Low` severity for non-blocking visual defects.
- **Permutation Duplicates (`#7297550` vs `#7297794`):** Do not submit a second report for the same locale-date leak on another page once reported in the cycle.
