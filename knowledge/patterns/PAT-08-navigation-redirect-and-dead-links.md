# PAT-08: Internal Navigation Redirect & Dead Control Audit

## 1. Pattern Definition & Value Split
- **Wrong Destination Redirect (`#7297096` — `Approved`, `Somewhat Valuable`):** Clicking an in-scope informational/legal link (`"terms and conditions"` on the Service Fees page) redirects the user back to the Homepage (`/`) instead of opening the target content.
- **Dead Auxiliary Footer Control (`#7297917` — `Approved / Won't Fix`):** Clicking `"Give Us Feedback"` in the footer does nothing. While technically approved, it received `Won't Fix` (0 scorecard points).

## 2. Priority Rule
- Prioritize links inside active booking/service flows (`#7297096`) over third-party or auxiliary feedback links (`#7297917`), and never report Out-of-Scope external partner links (`Press Room`, `Contact Us`).
