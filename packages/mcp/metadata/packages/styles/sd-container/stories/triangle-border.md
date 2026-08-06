Use the `sd-container--triangle-*-border` classes to create a triangle with a border when using the variant `sd-container--variant-border-neutral-400`:

- `sd-container--triangle-top-border`
- `sd-container--triangle-right-border`
- `sd-container--triangle-bottom-border`
- `sd-container--triangle-left-border`

```html
<div class="grid grid-cols-2 gap-4">
  <div class="sd-container sd-container--variant-border-neutral-400 sd-container--triangle-top-border">
    <div class="slot slot--border slot--text h-12">Default slot</div>
  </div>

  <div class="sd-container sd-container--variant-border-neutral-400 sd-container--triangle-right-border">
    <div class="slot slot--border slot--text h-12">Default slot</div>
  </div>

  <div class="sd-container sd-container--variant-border-neutral-400 sd-container--triangle-bottom-border">
    <div class="slot slot--border slot--text h-12">Default slot</div>
  </div>

  <div class="sd-container sd-container--variant-border-neutral-400 sd-container--triangle-left-border">
    <div class="slot slot--border slot--text h-12">Default slot</div>
  </div>
</div>
```
