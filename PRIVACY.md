# HOE Privacy & Security Notes — v0.3

## What is stored

All active personal records are stored in a locally encrypted IndexedDB vault. The app also stores a migration snapshot of any previous v0.2 records (if present) inside that same encrypted vault. Images saved through Daily selfie or added as transaction receipts are resized and encrypted in that vault. The service worker caches **only** site assets needed for offline use.

## What is not sent

HOE v0.3 has no outgoing data API, no login server, no analytics, no cloud backup, no push notification server, and no third-party font or script request. GitHub Pages distributes public application code, not the records stored on each device.

## Threats this mitigates

An attacker who gets an offline copy of the encrypted IndexedDB record cannot simply read it as JSON. The encrypted backup is portable without exposing its plaintext as long as the passphrase remains secret and sufficiently strong.

## Threats it does not mitigate

This is not end-to-end encrypted cloud sync because there is **no cloud sync**. Any person or malicious program able to interact with HOE while unlocked can read the displayed data. Malware, browser extensions, compromised GitHub deployment assets, weak passphrases, screenshots and operating-system access are outside the guaranteed protection of web-app encryption. Browser storage may be deleted by iOS or the user. The application has not been independently penetration-tested.

## Passphrase and recovery

A passphrase of at least 10 characters is required. Prefer a long, unique passphrase kept in a trusted password manager. The app has no access to the original passphrase after deriving its in-memory key; it cannot recover an encrypted vault if the passphrase is lost.

## On-device migration

Previous `hoe.pwa.v2` localStorage data is removed only after successful encryption into IndexedDB. Illustrative example items are excluded from the active migrated lists but the raw old snapshot is preserved inside the encrypted vault for audit and export.

## External links

Opening an external opportunity or video link takes the user outside HOE. The external destination's privacy practices then apply. HOE will not silently transmit its vault to the external site.
