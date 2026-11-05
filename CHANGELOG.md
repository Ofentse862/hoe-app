# Changelog

## v0.3 — 5 November 2026

- Rebuilt the interface against ten supplied monochrome iOS design boards. Removed decorative dashboard styling and retained the original H. home-screen icon.
- Introduced a user-passphrase-encrypted IndexedDB vault (PBKDF2-HMAC-SHA-256 and AES-256-GCM), encrypted backup/restore, configurable privacy auto-lock and app-switcher privacy blur.
- Migrates local v0.2 records after encryption succeeds. Retains an encrypted snapshot of the original data for recovery. Preserves existing GitHub source on `legacy-v0.2` branch.
- Rebuilt Life and Money navigation: daily overview, priority matrix, tasks, time blocks, focus sessions, notes and journals, project spaces, opportunity and exam desks, life shelf, sleep, weight, photos, finances, commitments, debts and shopping.
- Added internal-account transfers without inflating income or spending, distinctions between expected and recorded money, manually entered receipts, session return notes and snoozes that preserve deadlines.
- Added archive/restore, readable-note/task export with explicit privacy warnings, and plaintext CSV formula-injection mitigation.
- Strictly local dependencies with restrictive Content Security Policy. No cloud sync, Face ID, bank connection or background notification delivery yet.

## v0.2 — previous release

- Initial Life/Money progressive web application, stored records in plaintext browser localStorage. Kept on a rollback branch for compatibility; users should migrate to the encrypted version before deleting their former installation.
