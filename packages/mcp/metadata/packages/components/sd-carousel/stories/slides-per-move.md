Use the `slides-per-move` attribute to configure the number of slides the carousel scrolls through at a time.
This is useful when specifying a `slides-per-page` greater than one. By setting `slides-per-move` to the same value as `slides-per-page`, the carousel will advance by one page at a time.
**Hints:**

- The number of slides should be divisible by the number of `slides-per-page` to maintain consistent scroll behavior.
- Variations between `slides-per-move` and `slides-per-page` can lead to unexpected scrolling behavior. Keep your intended UX in mind when adjusting these values.

```html
<div>
  <sd-carousel slides-per-page="3" slides-per-move="3">
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 1</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 2</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 3</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 4</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 5</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 6</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 7</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 8</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 9</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 10</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 11</div>
    </sd-carousel-item>
    <sd-carousel-item>
      <div class="slot slot--border slot--text h-16">Default slot 12</div>
    </sd-carousel-item>
  </sd-carousel>
</div>
```
