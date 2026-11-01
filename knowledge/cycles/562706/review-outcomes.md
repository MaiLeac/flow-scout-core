# Cycle 562706 — Reviewer Outcomes, Scorecard & TTL Feedback Analysis

## 1. Tester Bugs Scorecard Snapshot (Verified `media_1793473224908_12e0e914.png`)

| Rank | Tester | Reported | Approved | Won't Fix | Somewhat Valuable | Very Valuable | Exceptional | Rejected | Messages | Time to 1st Bug | Points |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|
| **1** | **Mai Lê (Current leader)** | **3** | **3** | **0** | **2** | **1** | **0** | **0** | **4** | **6 hours** | **4.00** |
| 2 | ARTUR KAMALETDINOV | 3 | 3 | 0 | 2 | 1 | 0 | 0 | 3 | 6 hours | 4.00 |
| 3 | Stephen Oko | 2 | 2 | 0 | 1 | 1 | 0 | 0 | 0 | 32 hours | 3.00 |
| 4 | Loan Ngo Thi Ngoc | 3 | 3 | 0 | 3 | 0 | 0 | 0 | 0 | 2 hours | 3.00 |
| 5 | NGUYEN THI LAN HUONG | 3 | 3 | 0 | 3 | 0 | 0 | 0 | 0 | 5 hours | 3.00 |
| 6 | Israell Valdes | 3 | 2 | 0 | 1 | 1 | 0 | 1 | 0 | 5 hours | 3.00 |
| 7 | Boryana Todorova | 4 | 2 | 1 | 0 | 1 | 0 | 2 | 8 | 3 hours | 2.00 |
| 8 | Nguyen Trong Nghia | 2 | 2 | 0 | 2 | 0 | 0 | 0 | 1 | 22 hours | 2.00 |

### Leaderboard Scoring Formula Extracted from Evidence
- `Very Valuable` = **+2.00 points**
- `Somewhat Valuable` = **+1.00 point**
- `Approved (Won't Fix)` = **0.00 points** (see Boryana Todorova: 2 Approved [1 Won't Fix + 1 Very Valuable] = 2.00 points)
- Tie-breaker between equal points & equal value distribution (Mai Lê vs. Artur at 4.00 pts): exact timestamp of first approved bug (`Time to first bug`) and zero rejections.

## 2. Verbatim TTL Info Request on `#7297173` & Resolution Protocol
- **TTL Message:**
  > *"Thanks for making the changes. However there are still a few mistakes in the report, please fix the mistakes listed below:*
  > *- Your log file does not contain the homepage URL. Please open the console and clear the log, refresh the homepage, and then save the log after you have reproduced the issue. Re-upload a new log afterward.*
  > *- Please capture a new console log from the first step of the action performed with selected 'preserve log' and 'enable timestamp' options. You should see a text line like '18:32:30.854 Navigated to'*
  > *Click 'Confirm all requested info is added' after you finish fixing your report.*
  > *- Upload a new log file, which covers all the steps of your actions performed from visiting the test URL to the issue page"*
- **Root Cause of the Info Request:**
  - Clicking `Search` on `onetravel.com` opened `/air/listing` in a **new browser tab (Tab 2)**. Saving the console log from Tab 2 omitted the initial `Navigated to https://www.onetravel.com/` entry from Tab 1.
- **Verified Fix:**
  - Ensure the console log starts with `<timestamp> Navigated to https://www.onetravel.com/` and continuously records all steps through `/air/listing` and `/air/review`, then click **Confirm all requested info is added**.
