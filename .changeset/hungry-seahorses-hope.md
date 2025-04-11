---
'@solid-design-system/components': patch
---

Improved `sd-notification` accessibility:

- Improved consistency on screen reader announcements.
- `sd-notification` will now use existing toast stacks if present in the DOM with specific IDs. If not existent, it will be automatically created as a fallback.