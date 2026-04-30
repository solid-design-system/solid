---
name: mark
title: Mark
components:
  - sd-display
  - sd-headline
  - sd-headline--size-3xl
  - sd-headline--size-xl
  - sd-icon
  - sd-mark
version: 1.0.0
---

## Template: Headline with Mark

```html
<div class="flex flex-col gap-8">
  <h4 class="sd-headline">
    <sd-icon name="content/skyscrapers" color="primary" aria-hidden="true" library="default"></sd-icon>
    <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
  </h4>
  <h4 class="sd-headline">
    <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
  </h4>
  <h4 class="sd-headline sd-headline--size-3xl">
    <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
  </h4>
  <h4 class="sd-headline sd-headline--size-xl">
    <sd-icon name="content/skyscrapers" color="primary" aria-hidden="true" library="default"></sd-icon>
    <span>Real estate investments <mark class="sd-mark">in the Americas</mark></span>
  </h4>
</div>
```

## Template: Display with Mark

```html
<p class="sd-display"><mark class="sd-mark">Union Investment</mark> at a glance</p>
```
