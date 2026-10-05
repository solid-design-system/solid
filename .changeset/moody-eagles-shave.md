---
'@solid-design-system/components': patch
---

fix(sd-breadcrumb): keep separator spacing when a CSS reset is applied

The spacing around the breadcrumb separators is now created with flex gaps instead of margins on `::slotted()` pseudo-elements. Outer CSS resets such as Tailwind v4 Preflight take precedence over margins on slotted content, which made the separators collapse. Consuming apps can now ship their own reset without losing the breadcrumb spacing.
