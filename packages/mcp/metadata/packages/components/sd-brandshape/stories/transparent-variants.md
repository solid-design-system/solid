Use the `variant` attribute to set a transparent color variant:

- `primary|80`: Used on image backgrounds
- `white|80`: Used on image backgrounds

```html
<style>
  .transparent-variants {
    background: url('./placeholders/images/architecture.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
  }
</style>
<div class="space-y-5 transparent-variants">
  <sd-brandshape variant="primary|80">
    <div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>
  </sd-brandshape>

  <sd-brandshape variant="white|80">
    <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
  </sd-brandshape>
</div>
```
