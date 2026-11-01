# Value Intelligence & Leaderboard Optimization

## 1. WhatSeparates `Very Valuable` from `Somewhat Valuable` (Evidence from Cycle 562706)
| Value Tier | Points | Verified Examples in Cycle 562706 | Defining Characteristics |
|---|---:|---|---|
| **Very Valuable** | **2.00** | `#7297173` (Mai: Carry-on filter hides eligible VietJet flight), `#7297646` (Artur: Total price drops after adding & removing adult) | Breaks core search filtering or checkout price calculation; proven via an undeniable cross-step or reversible-state contradiction. |
| **Somewhat Valuable** | **1.00** | `562706-MAI-BUG-2` (`OCTHTL` hotel card promo rejected), `562706-MAI-BUG-3` (Partial stay calendar lockout), `#7297158`, `#7297127`, `#7297096`, `#7297698`, `#7297626`, `#7297688`, `#7297794` | Breaks a secondary flow, specific promo code, state persistence on refresh, internal link redirect, or homepage image/locale rendering. |
| **Approved (Won't Fix)** | **0.00** | `#7297917` (Footer 'Give Us Feedback' dead link), `#7292278` (Celine editorial grid overlap) | Valid defect in a low-priority or editorial/auxiliary area that the client will not fix. |

## 2. Early-Cycle Speed & Zero-Rejection Advantage
- Mai achieved **Rank #1 Current Leader** (`4.00 points`, `3/3 Approved`, `0 Rejected`, `6 hours` to first bug), beating 7+ competing testers because:
  1. First bug (`#7297173`) targeted a `Very Valuable` core filter contradiction early in the cycle.
  2. Every candidate bug passed strict WAD and current-cycle Duplicate screening before submission (`0 Rejected`).
