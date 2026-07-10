---
name: chip
title: Chip
components:
  - sd-chip
  - sd-chip--primary-200
  - sd-chip--primary-300
  - sd-chip--primary-500
  - sd-chip--white
version: 1.0.0
---

## Template: Background Options

```html
<div class="grid grid-cols-2 grid-rows-2">
  <div class="bg-white p-4 border border-neutral-200">
    <span class="sd-chip sd-chip--primary-200">primary-200</span>
  </div>
  <div class="bg-primary-100 p-4">
    <span class=" sd-chip sd-chip--primary-300">primary-300</span>
  </div>
  <div class="bg-primary p-4">
    <span class="sd-chip sd-chip--primary-500">primary-500</span>
  </div>
  <div slot="media" class="relative">
    <img
      class="aspect-video object-cover"
      src="./placeholders/images/coffeeshop.jpg"
      alt="A group of people sitting in a coffee shop"
    />
    <span class="absolute top-3 left-4 sd-chip sd-chip--white">white</span>
  </div>
</div>
```
