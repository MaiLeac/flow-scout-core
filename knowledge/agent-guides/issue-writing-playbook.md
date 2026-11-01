# Issue Writing Playbook — Zero-Mistake uTest Report Standard

## 1. Title Formatting Rules
- Follow the active cycle's exact `Title Format` in `Overview > Issue Reporting Instructions`:
  - **PC / Laptop:** `Operating System - Area - Issue Description`
    - Verified Example: `Windows 11 - Flight Search Results - Carry-on filter hides eligible flights`
  - **Smartphone / Tablet:** `Device Name - Area - Issue Description`
    - Verified Example: `Xiaomi 13 Pro - Search Results - 'OVER $50' filter displays discounted product priced below $50`
- **Rules:** Sentence case (never ALL CAPS); derive `Area` from the page heading/tab/breadcrumb; state the exact observable failure (never write `"not working"` or `"is broken"`).

## 2. Classification Fields
- **Bug Type:** `Functional`, `Visual`, `Content`, `Performance`, or `Crash`. (If layout/UI failure blocks or breaks a function, classify as `Functional`).
- **Severity:**
  - `Low`: Cosmetic/visual/content or minor non-blocking issue (`#7290242`, `#7297096`, `#7297688`). Never inflate visual issues to `High` (`#7297868`).
  - `Medium`: Core feature partially impaired or filter/state bug with workaround (`#7297173`, `#7297158`, `#7297127`).
  - `High`: Core booking/checkout/pricing calculation broken (`#7297646`, `562706-MAI-BUG-2`).
  - `Critical`: App crash, total freeze, or complete blocker preventing core usage.
- **Source:**
  - `Exploratory`: Found outside scripted test case steps (`PRACTICE-MAC-01`, `#7297173`).
  - `Structured`: Found while executing a test case step (or reported via `Fail & Report Issue`).
- **Environment:** Must match the claimed slot and attachments 100%. Use `Native (No mobile browser)` for native mobile apps (`#12406429`) and the actual browser (`Chrome`) for web/mobile-web.

## 3. `Actions Performed` (Reproduction Steps)
1. **Numbered sequentially (`1.`, `2.`, `3.`...)** starting from the homepage URL (`1. Open https://...`) or app launch (`1. Open the <App> app.`).
2. **Strictly ONE action per step.** Never join two verbs with `"and"` (split `Tap Search and enter 'lipstick'` into two steps).
3. **Use `Click` for desktop/computer and `Tap` for mobile.**
4. **NEVER include `Observe`, `Check`, `View results`, `See`, or `Find` as a numbered step.** End on the final trigger action (`Click Apply`, `Select Carry-on bag`) and place what happened in `Actual Results`.

## 4. `Expected Results`, `Actual Results`, `Error Message`, `Additional Info`
- **Expected Results:** Specific, measurable behavior that should occur after the final step.
- **Actual Results:** Exact observed behavior, naming the concrete item/flight/hotel, prices, and how it contradicts Expected Results.
- **Error Message:** Exact verbatim error string if displayed on screen; **leave completely blank** if no error message appears (never write `None`, `N/A`, or `-`).
- **Additional Info:** Leave blank unless required by the cycle Overview.

## 5. Attachment & Log Checklist (Preventing `#7297173` Info Request)
1. **Screenshot (`.jpg` / `.png`):** Full browser window showing URL bar (or upright mobile screen), red rectangle highlighting the defect, **all PII blurred/black-boxed** (including fake test names like `"Hải Dương"` and emails).
2. **Screen Recording (`.mp4`):** Muted (no background audio), starting from homepage/app launch, matching every numbered step, clock matching log timestamps, PII blurred throughout.
3. **Browser Console Log (`.txt` / `.log`):**
   - Open DevTools Console -> Settings -> check **`Preserve log`** and **`Show timestamps`**.
   - Clear console, refresh the homepage so line 1 shows `<hh:mm:ss.sss> Navigated to https://...`.
   - Ensure search results do not jump to an unlogged tab without `Navigated to <homepage>`.
4. **Mobile Device Log (`.txt` / `.log`):**
   - Run `adb logcat -c` then `adb logcat -v threadtime > log.txt` simultaneously with the video reproduction.
