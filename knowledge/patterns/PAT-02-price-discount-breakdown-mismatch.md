# PAT-02: Price, Discount & Fare Breakdown Mismatch

## 1. Pattern Definition & Trigger Conditions
- **Core Mechanism:** The checkout/review price table either (a) fails to return to the baseline price after adding and removing a passenger/ancillary (`#7297646`), or (b) rejects a promo code that is explicitly advertised on that specific item's listing card (`562706-MAI-BUG-2` `OCTHTL`), or (c) miscalculates the discount relative to stated terms (`#7297934`).

## 2. Fast Probe Procedure
1. **Reversible Price Probe:** Record baseline `Total Price` on Review/Checkout. Add 1 Adult (or seat/bag/protection), let total recalculate, then remove that exact Adult/add-on. Compare new total against baseline (`#7297646`).
2. **Card-Anchored Promo Probe:** Look for promo codes printed *directly on a specific hotel/flight/product card* (e.g., `OCTHTL` on `Suites Reforma by Homirent`). Open the info tooltip `(i)` to verify expiration date and eligibility, copy the code, proceed to checkout for that exact item, and click `Apply`.

## 3. How to Distinguish Valid Bug vs. WAD
- **WAD (Do Not Report):** Generic site-wide promo code (`OCT26`) returning `"Nice find! The fare already includes our best available deal - no further discounts apply."` That is intentional non-stacking discount logic.
- **Valid High-Value Bug:** Item-specific promo code (`OCTHTL`) printed on the selected hotel card returning `"Promo code is not valid, please try another code."` before its stated expiration date.

## 4. Real Supporting Issues
- [`#7297646`](https://platform.utest.com/testcycles/562706/issues/7297646) (`Approved`, `Very Valuable`) — Total price drops after adding and removing an adult on Review Trip Details.
- `562706-MAI-BUG-2` (`Approved`, `Somewhat Valuable`) — Hotel card promo code `OCTHTL` rejected as `"not valid"` at checkout.
- [`#7297934`](https://platform.utest.com/testcycles/562706/issues/7297934) (`New`) — Applied promo discount in price table does not match discount criteria.
