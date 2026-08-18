---
name: chip
title: Chip
components:
  - sd-chip
  - sd-chip--color-neutral
  - sd-chip--color-white
  - sd-chip--outline
  - sd-chip--shade-high
  - sd-chip--shade-low
  - sd-chip--shade-medium
  - sd-chip--sharp
  - sd-chip--size-lg
version: 1.0.0
---

## Template: Background Options

```html
<div class="grid grid-cols-3 gap-px bg-neutral-400 border border-neutral-400">
  <div class="bg-white py-6 px-8 flex flex-col gap-2 items-start min-h-32">
    <span class="sd-chip">primary-subtle</span>
    <span class="sd-chip sd-chip--color-neutral">neutral-subtle</span>
  </div>
  <div class="bg-primary-100 py-6 px-8 min-h-32">
    <span class="sd-chip sd-chip--shade-low">primary-low</span>
  </div>
  <div class="bg-neutral-100 py-6 px-8 min-h-32">
    <span class="sd-chip sd-chip--color-neutral sd-chip--shade-low">neutral-low</span>
  </div>
  <div class="bg-primary py-6 px-8">
    <span class="sd-chip sd-chip--shade-high">primary-high</span>
  </div>
  <div class="relative col-span-2 py-6 px-8 min-h-32">
    <img
      class="absolute inset-0 w-full h-full object-cover"
      src="./placeholders/images/coffeeshop.jpg"
      alt="A group of people sitting in a coffee shop"
    />
    <div class="relative">
      <span class="sd-chip sd-chip--color-white">white</span>
    </div>
  </div>
</div>

<div class="grid grid-cols-3 gap-px bg-neutral-400 border border-neutral-400 mt-8">
  <div class="bg-white py-6 flex flex-col gap-4 items-end min-h-32">
    <span class="sd-chip sd-chip--shade-low sd-chip--size-lg sd-chip--sharp">primary-low</span>
    <span class="sd-chip sd-chip--color-neutral sd-chip--shade-low sd-chip--size-lg sd-chip--sharp"> neutral-low </span>
  </div>
  <div class="bg-primary-100 py-6 min-h-32 relative">
    <span class="sd-chip sd-chip--shade-medium sd-chip--size-lg sd-chip--sharp absolute right-0">primary-medium</span>
  </div>
  <div class="bg-neutral-100 py-6 min-h-32 relative">
    <span class="sd-chip sd-chip--color-neutral sd-chip--shade-medium sd-chip--size-lg sd-chip--sharp absolute right-0"
      >neutral-medium</span
    >
  </div>
  <div class="bg-primary py-6 relative">
    <span class="sd-chip sd-chip--shade-high sd-chip--size-lg sd-chip--sharp absolute right-0">primary-high</span>
  </div>
  <div class="relative col-span-2 py-6 min-h-32">
    <img
      class="absolute inset-0 w-full h-full object-cover"
      src="./placeholders/images/coffeeshop.jpg"
      alt="A group of people sitting in a coffee shop"
    />
    <div class="relative">
      <span class="sd-chip sd-chip--color-neutral sd-chip--size-lg sd-chip--sharp absolute right-0"
        >neutral-subtle</span
      >
    </div>
  </div>
</div>
```

## Template: Background Options Outlined

```html
<div class="grid grid-cols-3 gap-px bg-neutral-400 border border-neutral-400 mt-4">
  <div class="bg-white py-6 px-8 flex flex-col gap-2 items-start min-h-32">
    <span class="sd-chip sd-chip--shade-medium sd-chip--outline">primary-medium</span>
    <span class="sd-chip sd-chip--color-neutral sd-chip--shade-medium sd-chip--outline">neutral-medium</span>
  </div>
  <div class="bg-primary-100 py-6 px-8 min-h-32">
    <span class="sd-chip sd-chip--shade-medium sd-chip--outline">primary-medium</span>
  </div>
  <div class="bg-neutral-100 py-6 px-8 min-h-32">
    <span class="sd-chip sd-chip--color-neutral sd-chip--shade-medium sd-chip--outline">neutral-medium</span>
  </div>
</div>
```
