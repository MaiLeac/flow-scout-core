# Issue Analysis: TesterTudo Approved Crowdtesting Cases

## High-Frequency Failure Modes

### 1. Formatted Mask Cursor Snap (PAT-11)
- **Cases**: #1976079, #1976776, #943362.
- **Root Cause**: Input masks on telephone or credit card fields reformat raw input on every `keyup`/`input` event and reset selection/caret position to the end (`value.length`), preventing middle edits or deleting characters.
- **Hunter Heuristic**: In every phone, zip code, or credit card field, input a full valid string, place cursor in the middle (e.g. index 4), and press `Backspace` or insert a digit. If cursor jumps to the end or modifies unexpected digits, report as functional bug.

### 2. Cart Overflow & Boundary Truncation (PAT-12)
- **Cases**: #2016865 (cart items disappear when adding > 40 products), #105559 (error on quantity change), #882522 (totals fail to update).
- **Root Cause**: Backend microservices or local session stores encounter memory, payload size, or pagination bounds when quantity or distinct SKUs exceed standard single-digit defaults.
- **Hunter Heuristic**: Stress-test cart item count (add 20, 40, 50 distinct items) and test large quantity boundaries.

### 3. Session State & Cross-Account Leakage (PAT-13)
- **Cases**: #2072602 (Cart persists from Account A into Account B), #1941666 (Wishlist state fails to clear on logout), #2085902 (Logged out user cart failure).
- **Root Cause**: LocalStorage / Redux state persists unkeyed across login/logout boundaries.
- **Hunter Heuristic**: Add items to Account A -> Logout -> Login to Account B. If Account A items persist, verify if guest merge logic is documented; if not, report session leakage.

### 4. Cross-Entity Query & Rating State Leakage (PAT-14)
- **Cases**: #1941791 (Review search query leaks across PDPs), #1941819 (Selected star rating leaks across products), #2085481 (Women shoe filter persists on search for Hats).
- **Root Cause**: SPA client-side router changes component props without clearing ancestor filter state.
- **Hunter Heuristic**: Apply an internal filter on Product A -> Click related product link -> Verify if filter from Product A leaked into Product B.

### 5. Geographic & Validation Policy Bypass (PAT-15)
- **Cases**: #1976172 (Canada-only shipping product orderable to foreign address), #2017496 (System accepts invalid email and claims reset sent), #1976054 (Invalid password format still creates account).
- **Root Cause**: Client-side validation is either missing, bypassed, or desynchronized from backend fulfillment rules.
- **Hunter Heuristic**: Enter international addresses for domestically restricted goods; enter edge-case password formatting without required characters.
