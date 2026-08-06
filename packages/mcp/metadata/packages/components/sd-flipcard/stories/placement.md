Use the `placement` attribute to set the position variant:

- `top`
- `bottom`

```html
<div class="grid grid-cols-2 gap-8">
  <sd-flipcard flip-direction="horizontal" placement="top">
    <p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>
    <p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>
  </sd-flipcard>
  <sd-flipcard flip-direction="horizontal" placement="bottom">
    <p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>
    <p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>
  </sd-flipcard>
</div>
```
