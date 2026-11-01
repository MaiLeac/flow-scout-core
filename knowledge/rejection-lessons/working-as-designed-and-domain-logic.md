# Working as Designed (WAD) & Domain Logic Traps

## 1. Verified WAD Rejection in Cycle 562706
- **`#7296911` (`Rejected - WAD`):** Reporting that payment card inputs are not wiped when clicking `'Clear All'` on another section of the checkout form.

## 2. Four Candidate Leads Correctly Filtered Out as WAD Before Submission
1. **Promo Code `OCT26` on Flight Checkout (`media_1793261356281_69655762.png`):**
   - **Message Shown:** `"Nice find! The fare already includes our best available deal - no further discounts apply."`
   - **Why It Is WAD:** Backend recognized `OCT26` and enforced the stated Instant Savings non-stacking rule. Contrast this with `OCTHTL` on Hotel Checkout (`media_1793261647793_a99e8aa3.png`), which returned `"Promo code is not valid, please try another code"` for the exact hotel card advertising `OCTHTL` (`Approved`).
2. **Lap Infants Exceeding Adults (`media_1793046283169_98d41e87.png`):**
   - **Message Shown:** `"Each infant on Lap must have a corresponding adult or senior."`
   - **Why It Is WAD:** Even if the `+` stepper allows incrementing the number to `2` inside the open popover, the inline red validation blocks submission. Also, `Field validation issues` are explicitly Out of Scope.
3. **Flight Status Showing `Gate: -` (`media_1793043949772_0c561cd7.png`):**
   - **Why It Is WAD:** Airport gates for international flights departing 24+ hours later are not yet assigned (`Terminal: T3`, `Gate: -`).
4. **LAX Departures `01:00 AM - 04:00 AM` Showing Only Tokyo (`HND`) & Mexico (`MEX`) (`media_1793043864379_6a8b62f9.png`):**
   - **Why It Is WAD:** Real-world red-eye schedule at LAX between 1 AM and 4 AM consists of transpacific and Latin American flights.
