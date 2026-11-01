# Cycle 562000 — Academy - Mobile Test Case - 2026 (Build 3: Genius Android App)

## 1. Cycle Metadata
- **Cycle ID:** `562000`
- **Cycle Name:** `Academy - Mobile Test Case - 2026` (Practice Test Cycle 3 of 6)
- **Product Under Test:** **Genius: Song Lyrics Finder** (Android Native App from Google Play)
- **Build:** `3`
- **Linked Test Case:** `#12406429` (`Completed` -> `Approved`)
- **Claimed Environment:** `Xiaomi 13 Pro - Android 14, Wi-Fi - Native (No mobile browser)`
- **Pass Requirements:** Complete 5-step Test Case + submit 1 to 3 valid bugs + at least 1 Approved bug + 1 Approved test case.

## 2. In Scope & Out of Scope
- **In Scope:**
  - First-launch onboarding, registration, and preferences.
  - Search by song, artist, and lyrics.
  - Music recognition, playback, and Spotify/Apple Music integration.
  - Play/pause/skip (including lock screen).
  - Creating lyrics cards, annotations, and sharing.
  - Artist pages, discography, biography, and news.
  - App freezes, slow loading, abnormal battery/data drain, and blocked core flows.
- **Out of Scope / Prohibited:**
  - `Feedback`, Field validation, Accessibility, Usability, Security.
  - Issues not reproducible more than twice, or log-only errors invisible to the user.
  - Adding payment cards or making purchases.
  - Using emulators, simulators, third-party log apps (CatLog/aLogcat), or Google Translate.

## 3. Mandatory Evidence Rules
1. Highlighted screenshot (`.jpg` / `.png`).
2. Muted mobile screen recording (`.mp4`).
3. Android device log (`.txt` / `.log`) captured via Android SDK Platform-Tools (`adb logcat -c` then `adb logcat -v threadtime > log.txt`) simultaneously with the reproduction.
