Use the `autoplay` attribute to toggle autoplay. Autoplay is automatically paused when the user interacts with the carousel or when the pause button is clicked.
**Disclaimer**: Press the play button to start autoplay. It’s paused in Storybook to prevent screen reader confusion from multiple carousels on the page.

```html
<div>
  <sd-carousel class="autoplay" autoplay loop>
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
<script type="module">
  const carousel = document.querySelector('.autoplay');
  carousel?.pause();
</script>
```
