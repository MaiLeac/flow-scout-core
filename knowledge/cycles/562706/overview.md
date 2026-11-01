# Cycle 562706 — uTest Academy - Challenge (Build 5: OneTravel)

## 1. Cycle Metadata
- **Cycle ID:** `562706`
- **Cycle Name:** `uTest Academy - Challenge` (Practice Test Cycle 5 of 6)
- **Company / Product:** Applause - Academy / OneTravel (`https://www.onetravel.com/`)
- **Cycle Type:** Functional — Exploratory with Test Cases
- **Build:** `5`
- **Linked Test Case:** `#12439394` (`Academy - Challenge 1 Test Case - 2026`, Environment: `Windows 11 Home - Chrome`, Result: `Failed` on Step 4 -> `Approved`)
- **Pass Requirements:** At least 1 Approved bug report + 1 Approved test case.
- **Mai's Final Outcome:** **Rank #1 Current Leader** on Tester Bugs Scorecard (`3 Reported`, `3 Approved`: `1 Very Valuable`, `2 Somewhat Valuable`, `0 Won't Fix`, `0 Rejected`, `4.00 Points`, `Time to first bug: 6 hours`).

## 2. In Scope & Focus Areas
- **Test URL:** `https://www.onetravel.com/` (local site corresponding to tester location, or US version if local country site unavailable; never use Google Translate or test in an uncomprehended language).
- **Focus Areas:**
  1. **Account Creation & Onboarding:** Create account, adjust preferences, Profile Management, Login/Logout, Forgot Password.
  2. **Website Navigation & UI:** Primary menu items, submenus, footer/service links leading to correct pages.
  3. **Flight Search:** One-way, round-trip, multi-city switching; complex routes/layovers/airlines; origin/destination inputs, date picker, passenger selection; search results matching criteria; filters.
  4. **Flight Selection & Details:** Fare types, included/excluded items, price updates on upgrade, outbound/inbound combinations.
  5. **Hotel / Car Search:** Full search and viewing flow for hotels and rental cars.
  6. **Booking Flow & Price Summary:** Add-ons, Passenger Details form, Price Summary accuracy (segments, dates, times, airports, passenger names, selected seats, added baggage, ancillary services, applied discount, total calculation) up to final step before payment.
  7. **My Bookings:** Retrieving trips.

## 3. Out of Scope (OOS) & Prohibited Actions
- **Out of Scope Areas:** Contact Us (Call Us, Email Us); Partner and External websites (e.g., Press Room).
- **Avoid Doing (Strict Prohibition):**
  - Do NOT complete any orders or make any purchases (no reimbursement).
  - Do NOT add any debit/credit cards or payment methods to the account.
  - Do NOT use "tester" or "test" in names/comments; do NOT use VPN; disable ad-blockers.
- **Do Not Report:**
  - Accessibility, Usability, and Security issues.
  - Field validation issues.
  - Issues not reproducible more than twice.
  - Issues only visible in console/network logs.
  - Permutations of already-reported issues across different sections/pages (counted as Duplicates).
  - Minor visual issues that do not block the user (slight overlapping, misalignment, spacing).
  - Minor content/localization issues (upper/lowercase, missing letters, punctuation). Major translation failures (missing/wrong language) are accepted as a single report per page.
  - Mobile landscape mode, desktop view on mobile browser, or browser window resize issues.

## 4. Mandatory Issue Reporting Instructions
- **Title Format:**
  - PC/Laptop: `Operating System - Area - Issue Description` (e.g., `Windows 11 - Flight Search Results - Carry-on filter hides eligible flights`)
  - Mobile: `Device Name - Area - Issue Description`
- **3 Required Attachments on Every Bug:**
  1. Highlighted screenshot (`.jpg` or `.png` with red rectangle around defect, full browser with URL bar, PII redacted).
  2. Screen recording (`.mp4`, no background noise, full flow starting from homepage `https://www.onetravel.com/`, PII redacted).
  3. Browser console log (`.txt` or `.log`, captured with `Preserve log` and `Show timestamps` enabled, starting with `Navigated to https://www.onetravel.com/`).
