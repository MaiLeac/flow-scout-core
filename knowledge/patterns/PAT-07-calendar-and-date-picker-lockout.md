# PAT-07: Dependent Calendar & Date Picker Boundary Lockout

## 1. Pattern Definition & Trigger Conditions
- **Core Mechanism:** A child or conditional date picker (such as `"Hotel for part of my trip"` inside a Flight + Hotel Package search) is opened before the parent flight dates are populated, resulting in `100%` of future calendar cells (`396/396`) rendering as `.is--disabled` with no warning or fallback message (`562706-MAI-BUG-3`).

## 2. False-Positive Trap (`#7297277`)
- Contrast `562706-MAI-BUG-3` (Approved) with `#7297277` (`Flight Status - Calendar Does Not Allow Flight Date Selection`): live Flight Status trackers intentionally restrict dates to ±1–2 days around today. Always verify domain business rules before reporting disabled calendar dates.
