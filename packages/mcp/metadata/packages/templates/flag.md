---
name: flag
title: Flag
components:
  - sd-flag
  - sd-flag--neutral-200
  - sd-flag--neutral-300
  - sd-flag--neutral-500
  - sd-flag--white
version: 1.0.0
---

## Template: Background Options

```html
<div class="grid grid-cols-2 grid-rows-3">
  <div class="bg-white pt-[32px] flex justify-end border border-neutral-200">
    <div class="sd-flag sd-flag--neutral-200">neutral-200</div>
  </div>
  <div class="bg-neutral-100 pt-[32px] flex justify-end">
    <div class=" sd-flag sd-flag--neutral-300">neutral-300</div>
  </div>
  <div class="bg-primary-100 pt-[32px] flex justify-end">
    <div class="sd-flag sd-flag--neutral-500">neutral-500</div>
  </div>
  <div class="bg-primary pt-[32px] flex justify-end">
    <div class="sd-flag sd-flag--white">white</div>
  </div>
  <div slot="media" class="relative">
    <img
      class="aspect-video object-cover"
      src="./placeholders/images/coffeeshop.jpg"
      alt="A group of people sitting in a coffee shop"
    />
    <div class="absolute top-[32px] right-0 sd-flag sd-flag--white">white</div>
  </div>
</div>
```
