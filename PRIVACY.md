# HOE privacy and security guide

### What is encrypted

HOE encrypts its user-data document before writing to IndexedDB, using AES-256-GCM with a 96-bit random nonce per save. The key is derived from your passphrase with PBKDF2-HMAC-SHA256 and a 128-bit random salt; the app currently uses 310,000 PBKDF2 iterations. The encryption key is only held in application memory while unlocked. The vault record stores the salt, iteration count, nonce and ciphertext.

### What is not encrypted

The app's public HTML, CSS, JS, icons, service worker and manifest live on the public GitHub Pages site. The service worker caches only application assets. The names of your custom app files and the installed app icon are not private. **Readable** notes and CSV exports are intentionally unencrypted and should be treated as sensitive.

### Data retention

HOE has no backend, server account or recovery service. Personal records and compressed photo attachments are stored locally in the installed PWA/browser storage. A user's encrypted backup is saved wherever the user chooses. Removing the web app or clearing its storage can remove the only copy. Back up before upgrades and regularly thereafter.

### What "Time Lock" means

The in-app focus timer can help you maintain a task and capture a return note. It cannot prevent opening other apps, enforce iOS focus restrictions, or override OS settings.

### Permissions and integrations

The site does not read your Google Drive, Calendar or Gmail account. The only file permissions it requests are user-triggered photo selection/capture and backup-file selection. Google Cloud OAuth credentials have not been configured. No analytics, advertising SDK, trackers or external JavaScript are included.

### Limits

This software has not undergone an independent security audit, formal penetration test, or full mobile-device QA across iOS releases. A compromised browser, unlocked device, malicious extension, maliciously modified hosted code or exposed passphrase can compromise the data. Hosted code remains public and updates from the server when online. Protect your phone and use a unique passphrase, current software and encrypted backups.
