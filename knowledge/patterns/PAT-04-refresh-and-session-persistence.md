# PAT-04: Refresh, Back/Forward & Session Persistence Drift

## 1. Pattern Definition & Trigger Conditions
- **Core Mechanism:** User-selected preferences or saved items (Header Currency selector, Shortlist/Favorites heart icon) revert or desynchronize after a page refresh (`F5`) or tab switch between Listing and Detail views.

## 2. Fast Probe Procedure
1. Change header currency (e.g., `USD -> EUR`) on the homepage, wait for re-render, and refresh the page (`#7297127`).
2. Add an item to Shortlist / Favorites on the listing page, refresh the page, and open the Detail tab to verify count and item synchronization (`#7297626`).

## 3. False-Positive Check (Cart Persistence Across Accounts)
- Before reporting that Account A's cart items appear in Account B (`EXT-TT-2072602`), verify that the items were not added while logged out as a guest (many sites intentionally merge guest carts into the next logged-in account).

## 4. Real Supporting Issues
- [`#7297127`](https://platform.utest.com/testcycles/562706/issues/7297127) (`Approved`, `Somewhat Valuable`) — Currency selection not changing after refreshing the page.
- [`#7297626`](https://platform.utest.com/testcycles/562706/issues/7297626) (`Approved`, `Somewhat Valuable`) — Hotel Shortlist disappears on refresh and fails to sync with Detail tab.
