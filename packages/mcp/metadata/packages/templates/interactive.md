---
name: interactive
title: Interactive
components:
  - sd-icon
  - sd-interactive
  - sd-interactive--reset
version: 1.0.0
---

## Template: Examples

```html
<div class="flex flex-col gap-12">
  <button class="sd-interactive sd-interactive--reset" title="Action name">Text</button>
  <button class="sd-interactive sd-interactive--reset" title="Action name">
    <sd-icon name="system/image" label="Icon only button"></sd-icon>
  </button>
  <button class="sd-interactive sd-interactive--reset flex flex-row items-center gap-2" title="Action name">
    <sd-icon name="system/image"></sd-icon>
    <span>Text</span>
  </button>
  <button class="sd-interactive sd-interactive--reset flex flex-row items-center gap-2" title="Action name">
    <span>Text</span>
    <sd-icon name="system/image"></sd-icon>
  </button>
</div>
```
