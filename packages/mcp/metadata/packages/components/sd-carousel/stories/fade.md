Use the `fade` attribute to enable fading between slides.
**Note**: The `fade` attribute is not compatible with the `slides-per-page` and `slides-per-move` attributes. If you use `fade`, the carousel will display one slide at a time.

```html
<div>
  <sd-carousel loop fade>
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
