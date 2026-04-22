Use the `flip-direction` attribute to determine the direction of the flipcard:

- `horizontal` (default)
- `vertical`

```html
<div class="grid grid-cols-2 gap-8">
  <sd-flipcard flip-direction="horizontal">
    <p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>
    <p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>
  </sd-flipcard>
  <sd-flipcard flip-direction="vertical">
    <p slot="front" class="slot slot--border slot--text slot--inverted h-12 w-full">Front slot</p>
    <p slot="back" class="slot slot--border slot--text slot--inverted h-12 w-full">Back slot</p>
  </sd-flipcard>
</div>
```
