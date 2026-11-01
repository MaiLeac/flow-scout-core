# PAT-10: Account Lifecycle & Structured Test Case Step Failures

## 1. Pattern Definition
- During structured Test Case execution (e.g., `TC #12439394 Step 4: Registration and Preference`), account lifecycle actions (`Create account`, `Login/Logout`, `Change/Reset password`, `Update preferences`) are tested step-by-step against explicit expected bullets.

## 2. Mandatory Execution Rule (`#7296862` in `TC #12439394`)
- When one bullet of a Test Case step fails (e.g., `"Unable to change the account password"`):
  1. Search the cycle's Issues list first.
  2. If already reported (`#7296862`), do NOT file a duplicate bug; instead, mark the Test Case step `Fail` and write in `Actual Result`: `"Unable to change the account password. Already reported as issue #7296862."`
  3. If not yet reported, use `Fail & Report Issue` directly from the step (which automatically sets `Source = Structured`).
  4. Submitting a Test Case with `RESULTS: Failed` (because a product bug caused Step 4 to fail) is 100% compliant and results in `Approval = Approved`.
