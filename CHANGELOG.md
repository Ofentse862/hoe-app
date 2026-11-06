# HOE releases

## v0.4 — Workflow and mobile layout (6 November 2026)

- Rebuilt the mobile layout as a fixed-height, single-scroll-region application; bottom navigation stays attached to the screen and content does not shift horizontally.
- Increased form text to 16px to avoid Safari auto-zoom on focus while preserving user-controlled accessibility zoom.
- Reworked Today around one next action, a simple low-capacity toggle, up to three visible tasks, quick capture, and a calendar entry point.
- Added a real, editable local calendar with Day, Week, and Month views. Fixed appointments and movable time blocks are distinguished. Tasks with deadlines are shown separately. New blocks and tasks default to the selected calendar day.
- Added the requested seven-row, 24-hour sleep grid. Main sleep, naps, estimates and midnight-crossing sleep are plotted by time of day; previous/next weeks and individual day summaries are available.
- Simplified capture: **Save to inbox** is the default; task and note remain optional shortcuts.
- Preserved the v0.3 encrypted IndexedDB schema, passphrase, tasks, notes, money records, attachments, and migration.
- Updated the service-worker cache key to ensure installed versions can retrieve new assets.

### Not yet implemented

Cloud backups, actual Google Drive OAuth, two-way Google Calendar synchronization, Gmail integration, background push notifications, and biometric unlock. The calendar in this build shows HOE records only, not external calendar events.
