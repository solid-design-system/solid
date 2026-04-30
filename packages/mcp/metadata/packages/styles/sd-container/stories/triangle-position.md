Use the `sd-container--triangle-*` classes to add a triangle indentation to the container:

- `sd-container--triangle-top`
- `sd-container--triangle-right`
- `sd-container--triangle-bottom`
- `sd-container--triangle-left`
  **Hint:** Default background option is white and can be overridden if desired.

```html
<div class="grid grid-cols-2 gap-4">
  <div class="sd-container sd-container--variant-primary sd-container--triangle-top">
    <div class="slot slot--border slot--text slot--inverted h-12">Default slot</div>
  </div>

  <div class="sd-container sd-container--variant-primary sd-container--triangle-right">
    <div class="slot slot--border slot--text slot--inverted h-12">Default slot</div>
  </div>

  <div class="sd-container sd-container--variant-primary sd-container--triangle-bottom">
    <div class="slot slot--border slot--text slot--inverted h-12">Default slot</div>
  </div>

  <div class="sd-container sd-container--variant-primary sd-container--triangle-left">
    <div class="slot slot--border slot--text slot--inverted h-12">Default slot</div>
  </div>
</div>
```
