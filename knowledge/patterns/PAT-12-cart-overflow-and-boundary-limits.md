# PAT-12: Cart Overflow & Boundary Limits

## Summary
Applications fail gracefully handling large item quantities, bulk product additions, or upper-boundary cart payloads, resulting in wiped carts, HTTP 500 errors, or desynchronized totals.

## Verified Evidence
- `EXT-TT-2016865`: Products in shopping cart completely disappear when user adds more than 40 items.
- `EXT-TT-105559`: System displays unhandled 'Something went wrong' exception when changing item quantity in cart and proceeding to checkout.
- `EXT-TT-882522`: Total order amount is not updated after making a custom contribution/tip amount.
- `EXT-TT-1987488`: Comparison list cannot be cleared when tapping 'Remove all' button.

## Agent Exploration Probes
1. In product listing or detail pages, add multiple items sequentially (test 10, 20, 40+ items).
2. Inside the cart, modify item quantity to boundaries (`0`, `1`, `99`, `999`, `-1`).
3. Tap 'Proceed to Checkout' immediately after quantity change without blurring input.
4. **Defect Condition**: Silent cart wiping, fatal error popups, or pricing total miscalculations.
