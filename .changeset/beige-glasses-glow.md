---
'@solid-design-system/components': patch
---

Fixed the following issues in `sd-dialog`:

- Panel max-height is set to 80vh.
- On higher zoom levels (e.g. 400%):
  - Panel body now has a min-height to prevent collapsing.
  - Added `overflow-y: auto` to the footer to prevent content from overflowing.
