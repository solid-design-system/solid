---
'@solid-design-system/components': patch
---

Improved render performance on pages with many components (e.g. long tables with buttons and icons):

- Replaced the per-component `sd-theme-listener` (one `style-observer` per element) with a single, page-wide theme observer that batches theme checks into one animation frame. `sd-icon` and `sd-audio` use it to react to theme changes. `sd-theme-listener` uses it too and keeps emitting `sd-theme-change`.
- `sd-button` and `sd-dialog` no longer observe the theme at all. They check it right before an animation runs (hover/focus for buttons, show/hide for dialogs).
- Fixed theme change listeners not being removed when a component is disconnected.
