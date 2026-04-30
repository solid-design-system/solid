Use the `variant` attribute to select the pagination format:

- `number` (default): can be used for all use cases
- `dot`: can only be used for up to 5 items total

```html
<div class="flex gap-12">
  <sd-carousel variant="number">
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 1</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 2</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 3</div>
    </sd-carousel-item>
  </sd-carousel>

  <sd-carousel variant="dot">
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 1</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 2</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 3</div>
    </sd-carousel-item>
  </sd-carousel>
</div>
```
