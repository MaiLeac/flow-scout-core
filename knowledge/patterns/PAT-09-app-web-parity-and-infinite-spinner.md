# PAT-09: Native App vs. Mobile Web Parity & Infinite Spinner

## 1. Pattern Definition
- **App vs. Mobile Web Parity (`#7290340` — `Approved`):** A feature in the native mobile app (`Genius -> Add a song`) fails with a connection error (`"Couldn't reach Genius"`), while the exact same feature on the mobile web version (`genius.com`) loads normally on the same device and Wi-Fi network.
- **Ancillary Modal Infinite Spinner (`#7297180` — `New`):** Secondary modals on search/checkout pages (`Connection Protection`) spin indefinitely without resolving.

## 2. Verification Protocol
- Whenever a native app endpoint fails with a generic connection message, immediately open mobile Chrome on the same phone and test the web equivalent. Include that exact comparison in `Actual Results`.
