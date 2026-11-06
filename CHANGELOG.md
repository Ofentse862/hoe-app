# HOE changes

## 1.0 — Core redesign

- Replaced the prior complex Life navigation with **Today / Matrix / Radar / Calendar / Notes**.
- Removed Project Spaces, Arrangements, Low Capacity, More, and a separate Journal from the visible interface. Existing encrypted data in older arrays is not erased.
- Rebuilt Today around the current event/time block, a direct record-this-time action, next events, the radar and urgent Matrix tasks.
- Rebuilt the full Eisenhower Matrix around user-editable categories, with task detail, completion, prioritisation and archive/restore.
- Introduced the central daily Radar with customisable essentials and structured records; daily reflection now opens plain Notes.
- Kept the full seven-day 24-hour sleep grid with midnight-spanning intervals.
- Rebuilt Notes as a grid with a single blank editor, auto-save, pin and compressed encrypted image attachments.
- Made Calendar event-first, with repeatable events and Month/Week/Day views.
- Kept Time Lock for in-app focus with pause/resume, return note and recorded-session history.
- Retained a separate, simplified Money mode for manually entered finances.
- Kept the v0.3/v0.4 encrypted vault identity and backup format, plus app locking, passphrase changes and manual encrypted backup/restore.
- Reworked iOS responsive layout using dynamic viewport units, safe-area insets, a single contained vertical scroll region and 16px+ input text. No pinch-zoom disabling; accessible zoom remains possible.
- Moved to a versioned offline-shell service worker and network-first updates.

### Explicit limitations

No Google Drive/Calendar/Gmail sync, system-wide app blocking, Face ID or push-server notifications. The prior v0.4 source should be preserved on a rollback branch before deployment. Automated tests cover source logic, not real-device iOS interaction.
