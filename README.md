# HOE — Heaven On Earth

**HOE 1.0** is an offline-first, iPhone-oriented personal operating system. It is a static Progressive Web App, so it can be hosted free on GitHub Pages. There are no dependencies, analytics libraries, external fonts or trackers.

## What it includes

**Life** has exactly five tabs: **Today**, **Matrix**, **Radar**, **Calendar**, and **Notes**. A settings button remains in the header. Life and Money are distinct modes.

- **Today:** local time, current event or time block, "What are you doing?" capture when nothing is active, next event, daily radar, urgent tasks and the quick-capture inbox.
- **Matrix:** a full four-quadrant Eisenhower Matrix; categories; due dates, details, task completion, archiving and a first next action. Categories can be created and renamed in Settings. No project hierarchy.
- **Radar:** a customisable daily checklist, with structured entry points for sleep, weight, a photograph, water, reading, exercise and a short reflection. Sleep, weight and photos can complete their items from saved records. Reflections are stored in **Notes**, not a separate journal.
- **Sleep:** seven days on a 00–24 hour horizontal timeline, with overnight sleep split at midnight, and separate main sleep and nap bars.
- **Calendar:** Month, Week and Day event views; create/edit recurring events, meetings and appointments. Time blocks are separately recorded and shown on Today.
- **Notes:** searchable two-column note grid; one-tap empty note editor; auto-saving title/body; optional image attachment; pin and archive. No mandatory metadata.
- **Time Lock:** elapsed session time, pause/resume, a return note, interruption capture and session history. A website **cannot** block other iOS applications.
- **Money:** overview, activity, income, expenses, internal transfers, manually created accounts, bills, subscriptions, debts and repayment history. Expected money is excluded from recorded balances, and transfers do not increase global income.
- **Privacy:** AES-256-GCM encrypted IndexedDB vault derived from a user passphrase using PBKDF2-SHA256, a configurable lock timer, passphrase change, encrypted backup/restore, readable (unencrypted) text/CSV exports with warnings, and archive/restore.

## Using HOE on an iPhone

1. Open the GitHub Pages website in Safari, online, once to cache the application assets.
2. Select **Share → Add to Home Screen → Open as Web App → Add**.
3. On the first launch, create a passphrase of at least 10 characters. The passphrase is needed to unlock and restore the vault.
4. Open **Settings → Backup & restore → Download encrypted backup**, then save the file yourself to private Google Drive or another safe place. Keep the passphrase separate.
5. Add categories, set the daily Radar list, enter a few Matrix tasks and Calendar events, and create a Note.

Do **not** delete the old installation or clear Safari website data merely to force an update. Those actions may remove the encrypted vault. Refresh the hosted page in Safari while online and reopen the installed app. If updating from 0.4, the same encrypted IndexedDB store name and vault file format are used.

## How information is stored

- The vault key is derived from a passphrase. HOE encrypts the full data document before writing it into `HOE.private.v3` / `vault` / `primary` in IndexedDB.
- Your own notes, events, sleep records, photos and transaction values **are not stored in the GitHub repository**. Only application code is published there.
- Automatic Google Drive backup, Google Calendar sync and Gmail integration **are not implemented**. A ChatGPT-connected Google account does not grant this PWA access to that account.
- The initial v0.3/v0.4 data schema remains `schema:3`; older fields (including the no-longer-exposed project and arrangement arrays) are retained for recovery in encrypted backups. Older journal entries are made available through Notes once on unlock.
- Photos and note attachments are compressed and encrypted locally. Large numbers of photos can consume browser storage quota.
- No password-reset server exists. The original passphrase is required for an encrypted backup. If the device storage is lost and no backup exists, recovery is not possible.

## Deployment and version updates

Copy all root files (including the `icons/` folder) to your static site. GitHub Pages branch `main` and root folder is sufficient. The service worker uses a versioned offline shell and a network-first strategy while online.

For this GitHub repository, the site is `https://ofentse862.github.io/hoe-app/` once GitHub Pages completes its deployment. The public source is `https://github.com/Ofentse862/hoe-app`.

## Testing

The no-dependency test suite runs with Node.js 22:

```sh
node tests/smoke.cjs
```

The suite checks the PWA file references, secure-vault format, major rendering functions, action model, scheduled events, sleep crossing midnight, financial arithmetic and encryption. An independent security audit and real-device Safari UI/gesture testing are **not** included. The application cannot guarantee the behavior of every iOS version or future browser update.

## Scope and limitations

This release implements the core workflows as a local-first PWA, not a remotely synchronised, native App Store application. It has no system-wide iPhone app blocking, Face ID API integration, push-server reminders, bank connection or Google OAuth setup. Existing real user data should be backed up before upgrades.
