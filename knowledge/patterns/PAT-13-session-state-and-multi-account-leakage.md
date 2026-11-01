# PAT-13: Session State & Multi-Account Leakage

## Summary
User session state (cart items, wishlist, personal profile data, search history) fails to clear upon user logout, and incorrectly leaks into a subsequent user session or causes authentication deadlocks.

## Verified Evidence
- `EXT-TT-2072602`: Shopping cart items from Account A remain saved and visible when Account B logs in on the same browser.
- `EXT-TT-1941666`: Items cannot be added to wishlist after logging out unless application is forcibly reloaded.
- `EXT-TT-2085902`: Logged-out users cannot increase cart quantity, failing silently without login prompt.
- `EXT-TT-2086348`: User cannot save account profile changes after session token expiry.

## Agent Exploration Probes
1. Log into Test Account A -> Add Product X to cart.
2. Click Log Out -> Verify cart state (should either be empty or cleanly separated).
3. Log into Test Account B -> Inspect cart.
4. **Defect Condition**: If Account A's product X appears in Account B's cart without explicit user consent or guest merge notice, log as High-severity Functional defect.
