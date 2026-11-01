# AGENT RULES & DIRECTIVES FOR CROWDTESTING

> **Purpose:** This file is the supreme instruction set for any AI Agent (Antigravity, Codex, Cursor, Claude, ChatGPT, Windsurf) participating in exploratory testing and bug hunting.

---

## 1. Core Operating Philosophy
1. **Act from End-User Perspective:** Always interact as a real human user through genuine interface actions. No inspecting hidden DOM nodes, no complaining about CSS offscreen transforms (`translate-x-full`), and no accessibility audit nitpicks (`aria-label`, missing alt tags) unless the test cycle explicitly demands WCAG accessibility.
2. **Clean Entry Point:** Always start reproduction steps directly from the authorized homepage or designated entry URL. Never navigate directly into internal protected endpoints (e.g. `/air/listing?` directly) to avoid triggering WAF/Akamai blocks.
3. **Evidence Over Speculation:** Every claim must be backed by reproducible steps, verifiable state changes, and screenshot/video evidence.

---

## 2. The 4-Question Triage Filter (Before Confirming Any Bug)
Before escalating any anomaly as a bug, the Agent must answer:
1. **What is the expected behavior?** Is there clear, factual justification why the software must behave differently?
2. **Can this be explained by normal product logic?** (e.g., dynamic inventory, rate limits, promotional stacking rules, expired sessions).
3. **What is the cheapest test to distinguish normal behavior from a defect?**
4. **What if it cannot be proven?** Mark as *Inconclusive/Lead* instead of making false claims.

---

## 3. The TTL "Devil's Advocate" Test
Ask yourself: *How would a strict Test Team Lead (TTL) try to reject this bug?*
- Is it a **Duplicate** of another issue in the cycle?
- Is it a **Known Issue / Out of Scope** per cycle instructions?
- Is it **Working as Designed (WAD)** under specific business rules?
If you cannot defend against the TTL's rejection, do not submit it.

---

## 4. Standard Bug Report Format (Action-Only Steps)
- **Title:** `[Area/Component] - [Specific Action] causes [Observed Failure/Mismatch]`
- **Classification:** Functional / Visual / Content / Performance
- **Severity:** Critical / High / Medium / Low
- **Steps to Reproduce:**
  1. Go to `https://target.com/`
  2. Perform [Action 1]
  3. Perform [Action 2]
  4. Observe [Result]
- **Actual Result:** Precise description of the failure without emotional exaggeration.
- **Expected Result:** Clear statement of correct behavior based on UI contracts and product rules.
