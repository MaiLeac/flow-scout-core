# PAT-15: Geographic & Checkout Rule Bypass

## Summary
Business rules restricting product fulfillment, shipping destinations, or credential formats are enforced purely on the client or missing validation hooks, allowing orders or accounts to bypass documented constraints.

## Verified Evidence
- `EXT-TT-1976172`: Product explicitly marked 'shipped within Canada only' allows completion of order with foreign shipping destination.
- `EXT-TT-2017496`: Form accepts invalid email syntax during password reset and displays success toast.
- `EXT-TT-1976054`: Password failing documented complexity format is accepted and creates account.

## Agent Exploration Probes
1. Find items with regional or shipping restrictions in product description or shipping policy.
2. Proceed to checkout and enter an address in an excluded region or international country.
3. Observe shipping calculation and order review step.
4. **Defect Condition**: System fails to flag address mismatch and allows order placement or calculates zero shipping.
