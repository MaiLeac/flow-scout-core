# Discovery Playbook — Autonomous Bug Hunting Protocol

## 1. Pre-Exploration Intake (First 3 Minutes of Any Cycle)
1. **Parse Cycle Overview First (Highest Authority):**
   - Extract `Test URL`, `In Scope / Focus Areas`, `Out of Scope Areas`, `Avoid Doing`, `Do Not Report`, `Required Attachments`, and `Title Format`.
   - Load the active cycle's `Issues List` and `Known Issues (KI)` into `bug-hunter/configs/<cycle>.scout.json` (`currentIssues` and `knownIssues`).
2. **Select High-Yield Defect Patterns from `knowledge/patterns/pattern-index.json`:**
   - **Wave 1 (First 15 Minutes — `Very Valuable` Targets):**
     - `PAT-01` (**Filter / Detail Contradiction**): Open 1 specific item's Detail/Review page, record its included features/price, then test if listing filters (`Carry-on bag`, `OVER $50`, `Price Range`) falsely exclude or include it (`#7297173`, `PRACTICE-MAC-01`).
     - `PAT-02` (**Price & Promo Breakdown Mismatch**): Test `Add Passenger/Room/Add-on -> Remove Passenger/Room/Add-on` on Checkout Review to see if `Total Price` fails to return to baseline (`#7297646`). Test item-specific promo codes printed directly on listing cards (`OCTHTL`, `562706-MAI-BUG-2`).
     - `PAT-03` (**Multi-Room / Multi-Passenger / Multi-Leg State Loss**): Add `Room 2` or a `2nd Adult` in search and verify whether Room 2 disappears on the results page (`#7297158`) or cannot be removed on Review (`#7297669`).
   - **Wave 2 (Minutes 15–30 — Fast `Somewhat Valuable` Targets):**
     - `PAT-07` (**Dependent Calendar Lockout**): Toggle conditional checkboxes (`"Hotel for part of my trip"`) before setting parent dates and open the child calendar (`562706-MAI-BUG-3`).
     - `PAT-04` (**Refresh & Shortlist Sync**): Change header Currency and refresh (`#7297127`); add item to Shortlist/Favorites, refresh, and check Detail tab sync (`#7297626`).
     - `PAT-05` (**Filter Reset / Unrecoverable Empty State**): Filter by airline/keyword then clear the input (`#7297698`); check if a `0 results` filter hides the reset controls (`EXT-TT-2085731`).
     - `PAT-09` (**App vs. Mobile Web Parity / Infinite Spinners**): On mobile cycles, compare failing app endpoints against mobile web on the same device/Wi-Fi (`#7290340`); click ancillary info modals like `Connection Protection` (`#7297180`).
   - **Wave 3 (Minutes 30+ — Low-Hanging Valid Bugs When Permitted by Scope):**
     - `PAT-08` (**Internal Service Link Wrong Redirect**): Check links on `Service Fees` / `Terms` pages (`#7297096`).
     - `PAT-06` (**Broken Homepage Images / Mixed Locale Dates**): Check for `naturalWidth === 0` broken images on primary cards (`#7297688`) and OS-locale date leaks on English pages (`#7297794`).
    - **Wave 4 (Boundary, Session & Input Formatting Probes — Tested from Approved Crowdtesting Archives):**
      - PAT-11 (**Masked Input & Caret Snapping**): On checkout phone/credit card inputs, place cursor in the middle and press Backspace or enter a digit. Check if cursor snaps to end or mutates trailing digits (EXT-TT-1976079, EXT-TT-1976776).
      - PAT-12 (**Cart Upper Boundary & Quantity Shock**): Rapidly add 20–40 distinct items or update item quantity to high boundary (99), then proceed to checkout. Watch for cart wiping or unhandled 500 exceptions (EXT-TT-2016865, EXT-TT-105559).
      - PAT-13 (**Session State & Multi-Account Isolation**): Log into Account A -> add item to cart -> logout -> log into Account B -> check if Account A's items persist in Account B (EXT-TT-2072602, EXT-TT-1941666).
      - PAT-14 (**Cross-Entity Query & Review Leakage**): Filter reviews on Product A, click through to Product B, and check if Product A's filter/search string is improperly applied to Product B (EXT-TT-1941791, EXT-TT-1941819).
      - PAT-15 (**Geographic & Fulfillment Bypass**): Select a product explicitly restricted to domestic delivery (e.g. Canada only), enter an international address at checkout, and check if the order flow bypasses the geographic restriction without blocking (EXT-TT-1976172).
