# PAT-05: Unrecoverable Empty State & Sticky Reset Failure

## 1. Pattern Definition & Trigger Conditions
- **Core Mechanism:**
  1. Applying a filter returns `0 results` AND hides the filter sidebar/chips so the user has no UI path to clear the filter (`EXT-TT-2085731`).
  2. Clearing a filter input leaves the list stuck on the filtered subset (`#7297698`).

## 2. How to Avoid WAD Rejections
- Do NOT report `0 results` when a valid `Clear` / `Reset` button remains accessible (`BUG_LESSONS.md #6`).
- Do NOT report `'Clear All'` failing to wipe unrelated payment fields (`#7296911` — `Rejected WAD`).

## 3. Real Supporting Issues
- [`#7297698`](https://platform.utest.com/testcycles/562706/issues/7297698) (`Approved`, `Somewhat Valuable`), `EXT-TT-2085731` (Secondary Reference), [`#7296911`](https://platform.utest.com/testcycles/562706/issues/7296911) (`Rejected WAD` counter-example).
