# Academy Practice Cycles — Issue Analysis (`PRACTICE-MAC-01`)

## 1. `PRACTICE-MAC-01` — MAC Cosmetics `'OVER $50'` Filter Mismatch
- **Product:** `https://www.maccosmetics.com/`
- **Environment:** `Xiaomi 13 Pro - Android 14 - Chrome`
- **Classification:** `Functional` | `Low` | `Every Time` | `Source: Exploratory`
- **Verified Steps to Reproduce:**
  1. Open Chrome on the Xiaomi 13 Pro.
  2. Navigate to `https://www.maccosmetics.com/`
  3. Tap the Search icon.
  4. Enter `'lipstick'`.
  5. Submit the search.
  6. Tap `'FILTER & SORT'`.
  7. Select the `'OVER $50'` filter.
- **Expected Results:** Only products with a current price over $50 are displayed after applying the `'OVER $50'` filter.
- **Actual Results:** A product with a current sale price below $50, such as `'LIP COMBO BY @QUENBLACKWELL'` priced at `$36.40`, is displayed after applying the `'OVER $50'` filter.
