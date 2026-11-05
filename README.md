# HOE — Heaven On Earth · v0.2

This folder contains a complete static progressive web app (PWA) designed for iPhone. It requires no paid hosting, server, framework, build command or npm installation.

## What works

- Dark-mode mobile-first design with Life and Money modes
- Today, Plan, quick capture, Notes and More navigation
- Tasks and Eisenhower Matrix; due dates and categories
- Monthly calendar, events and focus blocks
- Projects, goals, opportunities, assessments, wellness, notes and journaling
- Money transactions (ZAR), account opening balances, bills, subscriptions, debts, buying and earning
- Local browser storage, export/import JSON backups, offline app caching via service worker
- Standalone iPhone home screen installation through Safari

## Important limitations

- This version does not integrate Google Calendar, Gmail, Google Drive, cloud storage, system notifications or any external API.
- Your private entered data stays in the browser's `localStorage` unless you export a backup. There is **no account, cloud sync or automatic recovery**. Local data may be lost if you clear site storage, remove the installed app, or change devices. Backup frequently.
- Some of the starting records are **illustrative examples**. Clear them through “Clear samples”.
- Photo/video selection is a prompt only. The original media stays in your phone gallery and is **not saved by HOE**.
- GitHub Pages requires a **public repository** on GitHub Free. Do **not** upload private data or backups to the repository. Only upload the application source files.

## Publish on GitHub Pages (free)

1. On GitHub create a new public repository named `hoe-app` (or another name).
2. Unzip this package on your computer. Upload **all files and the `icons` folder** from inside `HOE-PWA` to the repository root, not the parent directory.
3. Commit your changes to the `main` branch.
4. Open Settings > Pages > Build and deployment. Under Source choose **Deploy from a branch**, select `main`, folder `/(root)`, and Save.
5. Once published, open the URL `https://YOUR-USERNAME.github.io/hoe-app/`. Replace `YOUR-USERNAME` with your real GitHub username and `hoe-app` with the repository name you chose.

## Install on iPhone

1. Open the published HTTPS URL in Safari.
2. Tap the Page Menu/Share button, then **Add to Home Screen**.
3. Ensure **Open as Web App** is on, name it HOE, and tap Add.
4. Open HOE from the new home screen icon. After opening it online once, most app screens will also load offline.
5. Export a JSON backup regularly from More > Backups & settings.

## Local desktop preview

Use `python -m http.server 8080` inside the folder, then visit `http://localhost:8080` in a browser. Open via a local server rather than double-clicking `index.html` so the service worker/manifest are handled correctly when deployed.

## Roadmap for production

Private sign-in, encrypted cloud sync, reliable reminders, Google OAuth connections, calendar sync, safe media storage, and recovery across devices must be implemented and security-reviewed before this can be regarded as a production personal-data system.
