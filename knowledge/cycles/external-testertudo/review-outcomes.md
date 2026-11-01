# Review Outcomes & Approval Criteria (TesterTudo Archive)

## Why These 90+ Issues Were Approved by Test IO & uTest Reviewers

1. **Concrete Negative Impact on Business Flow**:
   - A bug where cart items disappear at 40 products directly halts high-volume sales.
   - An address mask that forces cursors to the end causes frustrating checkout abandonment.
   - A filter that wipes out all search options on 0 results forces users to restart their session.

2. **Clarity of Reproduction Steps**:
   - Every single approved bug in this archive follows strict 4-8 step reproducibility.
   - Steps start with clean URL navigation and specific test credentials/inputs.
   - Actual result specifies exact failure symptoms without vague phrases like "doesn't work".

3. **Rejection Safeguards Learned**:
   - **Do NOT report empty search results as bugs** unless filter controls completely vanish (PAT-05).
   - **Do NOT claim session leakage** when a website intentionally preserves a guest cart on the same browser before login; only report when items from *Account A* leak into *Account B* (PAT-13).
   - **Distinguish GUI vs Functional**: If a drop-down menu vanishes on scroll, report as functional navigation obstruction rather than visual misalignment (PAT-08/PAT-06).
