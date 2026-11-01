# PAT-01: Filter / Detail Contradiction

## 1. Pattern Definition & Trigger Conditions
- **Core Mechanism:** A listing filter (e.g., `Carry-on bag`, `OVER $50`, `Price Range`, `Filter by Airline`) either excludes an item whose Detail/Review page proves it qualifies, or includes an item whose displayed price/attributes violate the selected filter.
- **Where It Appears:** Flight/Hotel/Car search results (`OneTravel`), e-commerce PLPs (`MAC Cosmetics`), status boards (`Flight Status`).

## 2. Fast Probe Procedure (Under 90 Seconds)
1. Run a standard search and pick **one specific result card** (record its exact title, time/ID, and price).
2. Open its Detail or Review page and verify a concrete attribute (e.g., `"Carry-on baggage included"`, `"Free cancellation"`, or current sale price `$36.40`).
3. Return to the listing page and apply the corresponding filter (`Carry-on bag`, `OVER $50`).
4. Check whether the anchor item disappears when it should remain (false exclusion, `#7297173`) or remains when it should be excluded (false inclusion, `PRACTICE-MAC-01`, `#7297678`).
5. Also test **clearing** the filter (`#7297698`) and switching symmetric tabs like `Departures` vs. `Arrivals` (`#7297946`).

## 3. Evidence Required to Make It Undeniable
- The video and steps MUST show the Detail/Review page of the specific item *before* (or *after*) applying the filter so the reviewer sees the contradiction on screen without guessing.

## 4. Real Supporting Issues
- [`#7297173`](https://platform.utest.com/testcycles/562706/issues/7297173) (`Approved`, `Very Valuable`) — VietJet Air 10:25 PM flight includes carry-on on Review page but is hidden by `Carry-on bag` filter.
- `PRACTICE-MAC-01` (`Approved`) — `'OVER $50'` filter displays `'LIP COMBO BY @QUENBLACKWELL'` priced at `$36.40`.
- [`#7297698`](https://platform.utest.com/testcycles/562706/issues/7297698) (`Approved`, `Somewhat Valuable`) — Flights remain filtered by British Airways after clearing the filter input.
- [`#7298627`](https://platform.utest.com/testcycles/562706/issues/7298627) (`New`), [`#7297946`](https://platform.utest.com/testcycles/562706/issues/7297946) (`New`), [`#7297678`](https://platform.utest.com/testcycles/562706/issues/7297678) (`New`).
