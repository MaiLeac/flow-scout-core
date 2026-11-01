# Cycle 562706 — Deep Issue Analysis (20 Indexed Issues)

## 1. High-Value Approved Defects (`Very Valuable`)
1. **`#7297173` (Mai Lê — `Approved`, `Very Valuable`):**
   - **Title:** `Windows 11 - Flight Search Results - Carry-on filter hides eligible flights`
   - **Mechanism:** In `HAN -> SGN` one-way search, selecting a VietJet Air flight (`10:25 PM`) and opening its Review Trip Details / Add Baggage section proves that carry-on baggage is included. Returning to search results and checking the `Carry-on bag` filter removes all VietJet Air flights from both results and the Airlines filter list.
   - **Why it scored `Very Valuable`:** Concrete cross-page contradiction (`Detail/Review page truth != Listing filter behavior`) on a primary flight search filter, backed by a 15-step atomic reproduction path.
2. **`#7297646` (ARTUR KAMALETDINOV — `Approved`, `Very Valuable`):**
   - **Title:** `Windows 11 - Review Trip Details - Total price drops after adding and removing an adult`
   - **Mechanism:** Mutating passenger state (`Add Adult -> Remove Adult`) on the checkout review screen failed to restore the initial baseline total price, leaving the total lower than the 1-adult fare.
   - **Why it scored `Very Valuable`:** Direct financial/pricing calculation corruption in the checkout funnel (`Focus Area: Verify the total price is calculated correctly`).

## 2. Solid Approved Defects (`Somewhat Valuable`)
- **Mai's 2 Additional Approved Bugs (`562706-MAI-BUG-2` & `562706-MAI-BUG-3`):**
  - **Hotel Promo Code `OCTHTL` Contradiction:** Printed directly on the `Suites Reforma by Homirent` hotel card with tooltip `Expires Oct 31, 2026`, yet rejected at that exact hotel's checkout on Oct 29 with `'Promo code is not valid, please try another code.'`
  - **Packages Partial Hotel Stay Calendar Lockout:** Checking `'Hotel for part of my trip'` on the Packages tab before selecting flight dates opens a calendar where all 396 future date cells are disabled (`.is--disabled`) with zero guidance.
- **Peer Approved Bugs:**
  - `#7297158` (Artur): Second room and its travelers disappear from `Hotel + Car` search results.
  - `#7297669` (Artur): Unable to remove the second adult passenger on Review Trip Details.
  - `#7297127` (Dibyaranjan): Homepage currency selection resets on page refresh.
  - `#7297096` (Loan): Service Fees `'terms and conditions'` link redirects to homepage.
  - `#7297698` (Loan): Flight Status remains filtered by British Airways after clearing the airline filter input.
  - `#7297626` (Lan Huong): Hotel Shortlist disappears on refresh and fails to sync with Detail tab.
  - `#7297688` (Lan Huong): Homepage `'Phu Quoc Island'` trip cards display broken images (`naturalWidth === 0`) with raw alt text.
  - `#7297794` (Trong Nghia): Homepage hotel deal subtitles render dates in Vietnamese on the English site.

## 3. Cautionary & Rejected Outcomes
- **`#7297917` (`Approved / Won't Fix`):** Footer `'Give Us Feedback'` link does not respond. Approved technically, but marked `Won't Fix` (0 scorecard points).
- **`#7296911` (`Rejected / Working as Designed`):** Payment card inputs not wiped when clicking `'Clear All'`. Rejected as WAD (and bordered on prohibited payment-card entry).
- **Avoided False Positives / Duplicates During Cycle:**
  - **Lap Infants > Adults:** Rejected internally before submission because OneTravel displayed red validation message `'Each infant on Lap must have a corresponding adult or senior'` (WAD).
  - **Flight Promo Code `OCT26`:** Rejected internally before submission because checkout returned `'Nice find! The fare already includes our best available deal - no further discounts apply'` (WAD business rule, unlike `OCTHTL` which returned `'Promo code is not valid'`).
  - **Multi-city Middle Leg Delete Button:** Skipped before submission after spotting `#7297771` (`Windows 10 64 bit - Multi city - Middle flight leg has no delete button` by Văn Vĩ) in the cycle Issues list.
