# Info Requests (IR), Attachment Compliance & DNFI Prevention

## 1. Real Info Request #1: Console Log Missing Homepage URL (`#7297173`)
- **What Happened:** OneTravel opened flight search results (`/air/listing`) in a **new tab (Tab 2)**. Saving the Chrome console log from Tab 2 missed Step 1 (`Navigated to https://www.onetravel.com/`).
- **TTL Requirement:**
  - Enable **Preserve log** and **Show timestamps** in Chrome DevTools Console *before* Step 1.
  - Refresh the homepage so the very first lines include `<hh:mm:ss.sss> Navigated to https://www.onetravel.com/`.
  - Keep the entire reproduction flow in a single tab (or capture across the full flow from homepage to issue page) so timestamps match the screen recording clock.
  - After re-uploading the log, always click **`Confirm all requested info is added`**.

## 2. Real Correction #2: No `'Observe'` Step & Correct `Source` Field (`PRACTICE-MAC-01`)
- **No `'Observe'` in Numbered Steps:** Never write `8. Observe that...` or `5. Check the results` as a step in `Actions Performed`. End `Actions Performed` with the last user action (`Click Apply`, `Select the 'OVER $50' filter`) and state the observation in `Actual Results`.
- **`Source` Classification:** Select `Exploratory` whenever the bug is found outside a test case step. Select `Structured` ONLY when reporting directly from a failed test case step.

## 3. PII Redaction & Fake Name Rule
- Even if a test account uses a fictional human-looking name (e.g., `"Hi, Hải Dương"` in the OneTravel header, `transcript line 330`), TTLs do not know whether it is real or fake and enforce GDPR/PII rules strictly. Always blur/black-box any human name, email (`recruitmentmeifan@gmail.com`), phone number, or avatar in both screenshots and videos.
