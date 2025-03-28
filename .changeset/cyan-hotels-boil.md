---
'@solid-design-system/components': patch
---

Fixed a11y issue in `sd-expandable`. Swapped `aria-hidden` with `inert` attribute to make sure all content, including interactive elements, is properly hidden when component state is closed.
