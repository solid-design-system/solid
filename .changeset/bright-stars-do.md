---
'@solid-design-system/components': patch
---

Improve `sd-select` and `sd-combobox` a11y:

- Add focus state style to `sd-option`.
- Handle option focus inside `sd-select` and `sd-combobox`.
- Add invisible button to open `sd-combobox` with TalkBack.
- Expand tag removal to include handling with `enter` and `space` keys in addition to `backspace`.
- Separate tag text and removable indicator to it's own button to improve the component usability and clarity.
- Add translatable label to `sd-tag` removable button.
- Improve tag removal announcements.

