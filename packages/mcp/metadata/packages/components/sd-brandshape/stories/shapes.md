Use the `shapes` attribute to only display specific parts of the brandshape.
The `border-primary`, `border-white`, and `image` variants are **supported only in the default shape** where all three shapes (`top`, `middle`, and `bottom`) are shown simultaneously.

```html
<div class="space-y-5">
  <sd-brandshape shapes='["top", "middle", "bottom"]'>
    <div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>
  </sd-brandshape>

  <sd-brandshape shapes='["top"]'>
    <div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>
  </sd-brandshape>

  <sd-brandshape shapes='["top", "middle"]'>
    <div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>
  </sd-brandshape>

  <sd-brandshape shapes='["middle", "bottom"]'>
    <div class="slot slot--border slot--text slot--inverted h-8 w-full">Default slot</div>
  </sd-brandshape>
</div>
```
