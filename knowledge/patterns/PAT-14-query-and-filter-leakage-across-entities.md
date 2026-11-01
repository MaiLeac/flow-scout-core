# PAT-14: Cross-Entity Query & Rating State Leakage

## Summary
In Single Page Applications (SPA), search parameters, sub-filters, or review ratings applied to Entity A are retained in global state and improperly applied to Entity B when navigating between related pages.

## Verified Evidence
- `EXT-TT-1941791`: Search keyword entered in Product A's customer reviews remains active on Product B, filtering reviews down to 1/85 without user intent.
- `EXT-TT-1941819`: Star rating filter selected on Product A remains active and displayed on Product B.
- `EXT-TT-2085481`: Women shoe size filter is displayed and results are filtered even when navigating to search 'Hats'.

## Agent Exploration Probes
1. On Product A, scroll to Reviews / Details and apply a specific filter (e.g. 5 stars, keyword 'comfort').
2. Click on a recommended or related product to navigate directly to Product B.
3. Observe Review / Filter section on Product B.
4. **Defect Condition**: Product B reviews are pre-filtered with Product A's search keyword or rating without showing an active filter tag.
