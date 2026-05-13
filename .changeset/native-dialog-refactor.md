---
'@solid-design-system/components': minor
---

Replaced custom modal/overlay implementation in `sd-dialog` and `sd-drawer` with the browser-native `<dialog>` element and its `showModal()`/`close()` APIs.

- Both components now use `<dialog>` internally, gaining native top-layer stacking, focus trapping, and scroll locking for free
- Removed the internal `Modal` class (`internal/modal.ts`) — no longer needed
- Removed manual body scroll lock and Escape key handling — handled natively by the browser
- `role="dialog"` and `aria-modal` removed from `[part="panel"]` — native `<dialog>` provides these semantics
- Removed `contained` property from `sd-drawer` (incompatible with native top-layer stacking)
- `sd-drawer` and `sd-dialog`: `part="overlay"` is retained as a real `<div>` inside the `<dialog>` shadow DOM; `overlay.show` and `overlay.hide` animation hooks continue to work
- Story improvements: all non-Default stories for `sd-dialog` and `sd-drawer` now render in iframes (`inline: false`) to prevent native top-layer overlays from bleeding into the docs page; Default stories start closed with an "Open" button
