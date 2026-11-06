# Deployment and local-device verification

The application's source is published from GitHub Pages. User records are not included in the repository.

## Updating a previously installed HOE

1. In the **currently installed app**, open **Settings → Backup & restore** and download an encrypted backup. Save it in the Files app or a private Google Drive folder; keep the passphrase safely.
2. Stay online. In Safari open the app website, refresh, then return to the installed home-screen app. Do **not** remove the app to clear a cache.
3. Unlock with the same passphrase used in HOE 0.4. The vault ID remains `HOE.private.v3`.
4. Confirm at least one old note, task and finance record still exists before regular use.
5. If an old version remains cached, close the PWA, return to Safari, refresh the website and reopen the installed app; allow time for the service worker to update. Do not clear local storage.

## Manual iPhone acceptance checklist

- HOE displays all five Life tabs with the radar in the centre.
- Use Matrix → + to create a task, check it, and change its category.
- In Notes create a blank note, type multiple paragraphs, navigate back and reopen it.
- In Calendar add an event and move between Month, Week and Day.
- From Today record an unscheduled time block; start and finish Time Lock.
- In Radar record weight, overnight sleep and a photo. Inspect the 7-day 00–24 sleep grid.
- Verify there is no unintended page-wide horizontal scroll at normal display size. Focusing inputs should not automatically enlarge the viewport. User-initiated accessibility pinch zoom remains enabled.
- Lock the vault, unlock and confirm the entries remain. Download an encrypted backup.
- Switch to Money, add account, income, expense and internal transfer; ensure transfers do not alter total balance.

## Rollback

A `legacy-v0.4` branch keeps the previous version. Rolling back application code does **not** roll back user data. Always keep encrypted backups before switching versions.
