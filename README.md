# HOE — Heaven On Earth

Version **0.3** · private, offline-first progressive web application

HOE is an iPhone-oriented personal system for life planning, capture, projects, focus, wellness, opportunities, notes and manual financial tracking. This build is based on the user's ten supplied dark-mode design boards. It is a **static web app**, not a native iOS application and not a cloud service.

## Publishing

Host all files in the repository root of `Ofentse862/hoe-app` using GitHub Pages: Settings → Pages → Deploy from branch → `main` → `/(root)`. The PWA manifest and service worker are already configured for the subpath `/hoe-app/` through relative asset URLs.

Install from Safari: Share → Add to Home Screen → Open as Web App. In Chrome on Android: menu → Install app / Add to Home screen.

If an installed app shows the previous release, open the site in the browser while online and restart the app; the new service worker updates cached application code. Do **not** clear website data to force an update: that can erase records.

## Privacy model

Records are encrypted before saving to IndexedDB. A user-provided passphrase (minimum ten characters) derives an AES-256-GCM key using PBKDF2-HMAC-SHA-256 with 310,000 iterations and a fresh 128-bit random salt. Every save uses a new random 96-bit AES-GCM nonce. The derived key stays in memory only while unlocked; the passphrase is not stored. The app auto-locks after a configurable period when returning from the background.

HOE does not contain third-party JavaScript, remote font calls, analytics, advertising, cloud uploads, bank connections, or Google OAuth integrations. Source code on GitHub Pages is public, **not the user's encrypted records**.

Encryption protects **data at rest on this device**. It does not protect against malicious browser extensions, a compromised device, someone using an already unlocked session, an altered deployment that captures passwords, operating-system compromise, or disclosure through an unencrypted export. This code has not received an independent security audit. Browser storage is not guaranteed durable. Face ID, push reminders, Drive sync and Google Calendar sync are **not implemented**.

## Upgrading from v0.2

On first open, HOE detects `localStorage['hoe.pwa.v2']` in the *same browser storage context*. It asks for a new passphrase, encrypts the migrated data, and **only then** removes the previous plaintext localStorage record. Original v0.2 data is retained inside the encrypted vault as a legacy snapshot and can be exported from Your data; user-edited records are migrated into the new interface while illustrative example entries are not added to active lists. Data stored in a different Safari/PWA storage context may not be visible; export a backup from the old installation before clearing or reinstalling anything.

## Backups

Settings → Your data → Download encrypted backup. Backups contain the encrypted vault, not the password. Restoring requires the original passphrase. HOE automatically offers an encrypted backup of the existing vault before replacing it with another. Plain TXT or CSV exports are explicitly labelled **unencrypted**.

If the passphrase is forgotten, there is no password recovery service. Clearing browser data, deleting the home-screen app or moving devices can erase the local vault. Keep multiple offline encrypted backups.

## Supported workflows

- Life home, low-capacity mode, capture inbox, split pasted lists into tasks, priority matrix, task details, deadlines, scheduling, protected time blocks and timed focus sessions with return notes
- Spaces, projects, notes, journal, opportunities, exam topics, follow-ups, reusable checklists, item-location records, administrative records and arrangements
- Sleep records, weight trends, encrypted resized selfies and transaction receipt photos, plus reference links for videos
- Money: cash-flow entries (received versus expected), manually recorded accounts, internal transfers, bills, subscriptions, debts and repayments, purchases, shopping and earning leads
- History, archive/trash/restore, category management, encrypted backups, passphrase changes, configurable auto-lock, light/dark appearance and structured exports

## Boundaries

Notification examples, calendar integrations, Google Drive backups, YouTube uploads, automatic receipt extraction, native face authentication and dependable background check-ins from the original designs are **future work**. Planned versus recorded workflows are local, not linked to external calendars. Account balances are calculated from manually entered figures and are not bank statements. Date-sensitive and financial calculations should be verified before relying on them.

## Development notes

No build step and no npm dependencies. Files: `index.html`, `styles.css`, `app.js`, `sw.js`, `manifest.webmanifest`, and `icons/*`. Content security policy restricts JavaScript, fonts and network connections to this site's own origin. The service worker caches application resources only, never user records.

Browser smoke tests were run against a mocked storage/cryptography environment to exercise interface routing. **These tests do not validate encryption strength or provide a security audit.** Additional real-device Safari and Android testing is required.
