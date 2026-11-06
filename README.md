# HOE — Heaven On Earth

Version **0.4**, an offline-first, personal-use progressive web app designed for iPhone and Android. Core features: Today, one-step quick capture, a local Day/Week/Month calendar, Eisenhower Matrix, tasks, project spaces, notes and journal, focus sessions, opportunities and exams, weekly reviews, a true 24-hour sleep grid, weight history, Money mode, encrypted attachments, backup/restore, and local vault lock.

## Deployment

Upload these files and folders at the root of a static HTTPS host, such as GitHub Pages. This GitHub repository publishes from `main` / root. Open the site in Safari on iPhone and choose Share → Add to Home Screen.

## Where data lives

HOE stores encrypted records in the browser/PWA's **IndexedDB** under `HOE.private.v3`, within the origin of the deployed website. It does **not** save personal records to the GitHub repository. Cryptographic operations use Web Crypto API (PBKDF2-SHA-256, 310,000 iterations; AES-256-GCM). The passphrase is not uploaded or recoverable. App files, not personal records, are cached by the service worker.

**Back up now:** Settings → Your data → Download encrypted backup, then store the file safely, for instance in your private Google Drive. Keep the passphrase as well. Clearing site data, uninstalling the app, changing browsers, or losing the device can permanently erase the vault unless a backup exists. Older v0.3 vaults remain compatible; no data reset is required.

## Integration and privacy boundaries

This static release does not include Google Drive OAuth or automatic sync. A Google account connected in ChatGPT is not the same as a Google account connected in HOE. Google Calendar and Gmail do not feed data into this release. Drive OAuth should eventually use a narrow file-scoped permission and encrypted upload, with explicit user consent. No bank connectivity or external analytics are included. HOE cannot promise iOS-level device protection or independently audited security.

## Development notes

- Plain HTML, CSS, JavaScript; no external fonts, trackers or package dependencies.
- No hidden default user data, credentials or API keys. Users choose a vault passphrase on the first launch.
- Core design renders at iPhone widths; supports reduced-motion preferences.
- Service worker cache `hoe-static-v4.0` refreshes app assets. Cached old versions may take a browser reload to update.
- Avoid disabling browser pinch zoom; touch controls use `touch-action: manipulation` and form controls at least 16px.

For security caveats see `PRIVACY.md`.
