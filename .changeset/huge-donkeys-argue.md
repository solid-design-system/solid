---
'@solid-design-system/components': minor
---

Increased `sd-drawer` close button `z-index` when using attribute `no-header` to prevent it being overlapped by the content.

Exported new CSS part on `sd-dropdown` named `base__popup`, which targets the internal `sd-popup` `popup` part.

Implemented `focus` and `blur` methods on `sd-navigation-item`.

Improved `sd-navigation-item` accessibility by separating the content and description into `aria-labelledby` and `aria-describedby` respectively.