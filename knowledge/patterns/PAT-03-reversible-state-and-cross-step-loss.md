# PAT-03: Reversible State Mutation & Cross-Step State Loss

## 1. Pattern Definition & Trigger Conditions
- **Core Mechanism:** Multi-entity state (Room 2 travelers, 2nd Adult passenger, Multi-city flight legs, or entity-specific search filters) is either lost during step transitions (`Search -> Listing`), cannot be removed (`Review Trip Details`), deletes the wrong array index (`Multi-city leg deletion`), or leaks into the next viewed entity (`Product A -> Product B`).

## 2. Fast Probe Procedure
1. **Multi-Room / Multi-Passenger Transition:** Add `Room 2` with `2 Travelers` in search (`#7297158`), submit search, and inspect the results header/summary to see if Room 2 was silently dropped.
2. **Add-Then-Remove Passenger on Checkout:** On Review Trip Details, add a 2nd adult passenger and immediately click Remove (`#7297669`, `#7297646`).
3. **Multi-Leg Array Deletion:** Add 3+ legs in Multi-city search and test deleting the middle leg (`#7297771` — check cycle Issues list first as this is a known hotspot!).
4. **Cross-Entity Filter Leak:** Search/filter reviews inside Item A, then open Item B (`EXT-TT-1941791`).

## 3. Real Supporting Issues
- [`#7297646`](https://platform.utest.com/testcycles/562706/issues/7297646) (`Approved`, `Very Valuable`), [`#7297158`](https://platform.utest.com/testcycles/562706/issues/7297158) (`Approved`, `Somewhat Valuable`), [`#7297669`](https://platform.utest.com/testcycles/562706/issues/7297669) (`Approved`, `Somewhat Valuable`), [`#7297771`](https://platform.utest.com/testcycles/562706/issues/7297771) (`New`), `EXT-TT-1941791` (Secondary Reference).
