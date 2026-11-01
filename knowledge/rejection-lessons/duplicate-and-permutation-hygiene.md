# Duplicate (DUP), Known Issues & Permutation Hygiene

## 1. CRITICAL Distinction: Historical Pattern Similarity vs. Current-Cycle Duplicate
- **Historical Pattern Similarity (`Boost Priority`):**
  - If a candidate bug on a new cycle resembles a past approved bug from an earlier cycle (e.g., `#7297173` carry-on filter contradiction or `PRACTICE-MAC-01` price filter mismatch), that is **positive prior evidence** that the pattern is high-yield. It is **NEVER** a duplicate in the new cycle.
- **Current-Cycle Duplicate (`Hard Block`):**
  - A candidate bug is a duplicate ONLY if it matches an issue already reported in the **active cycle's Issues list** or **Known Issues (KI) sheet**, even if the earlier report in the active cycle was rejected for formatting mistakes or reported on a different page/section (`Permutation`).

## 2. Real Duplicate Saves in Cycle 562706
1. **Multi-City Flight Leg Deletion (`#7297771`):**
   - Our Playwright scout discovered that clicking `X` on the middle flight leg deleted the last flight leg.
   - Before recording video, checking `platform.utest.com/testcycles/562706/issues` revealed `#7297771` (`Windows 10 64 bit - Multi city - Middle flight leg has no delete button` by Văn Vĩ). Even though our technical description was more precise, both target the same broken control -> skipped, saving a guaranteed `DUP` rejection!
2. **Account Password Change Failure (`#7296862` in Test Case `#12439394`):**
   - Instead of filing a duplicate bug during Step 4 of Test Case `#12439394`, Mai linked `#7296862` in the failed step's Actual Result -> Test Case Approved!
