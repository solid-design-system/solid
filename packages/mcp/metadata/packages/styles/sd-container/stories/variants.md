Use the `sd-container--variant-*` classes for alternative appearances:

- neutral-100 is the default appearance
- `sd-container--variant-primary-100`
- `sd-container--variant-primary`
- `sd-container--variant-border-neutral-400`
- `sd-container--variant-white`

```html
<div class="grid grid-cols-2 gap-4">
  <div class="sd-container">
    <div class="slot slot--border slot--text h-12">Default slot</div>
  </div>

  <div class="sd-container sd-container--variant-primary-100">
    <div class="slot slot--border slot--text h-12">Default slot</div>
  </div>

  <div class="sd-container sd-container--variant-primary">
    <div class="slot slot--border slot--text slot--inverted h-12">Default slot</div>
  </div>

  <div class="sd-container sd-container--variant-border-neutral-400">
    <div class="slot slot--border slot--text h-12">Default slot</div>
  </div>

  <div class="sd-container sd-container--variant-white">
    <div class="slot slot--border slot--text h-12">Default slot</div>
  </div>
</div>
```
