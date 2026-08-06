Use the `autoplay-interval` attribute to set the wait time (in seconds) between automatic slide transitions:

- `5`(default): fast
- `7`: medium
- `10`: slow
- `12`: very slow
  The attribute `autoplay` needs to be set for this to work.
  **Disclaimer**: Press the play button to start autoplay. It’s paused in Storybook to prevent screen reader confusion from multiple carousels on the page.

```html
<div class="flex flex-col gap-8">
  <sd-carousel class="autoplay-pause" autoplay autoplay-interval="5" loop>
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 1 with 5s autoplay interval</div></sd-carousel-item
    >
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 2 with 5s autoplay interval</div></sd-carousel-item
    >
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 3 with 5s autoplay interval</div></sd-carousel-item
    >
  </sd-carousel>

  <sd-carousel class="autoplay-pause" autoplay autoplay-interval="7" loop>
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 1 with 7s autoplay interval</div></sd-carousel-item
    >
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 2 with 7s autoplay interval</div></sd-carousel-item
    >
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 3 with 7s autoplay interval</div></sd-carousel-item
    >
  </sd-carousel>

  <sd-carousel class="autoplay-pause" autoplay autoplay-interval="10" loop>
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 1 with 10s autoplay interval</div></sd-carousel-item
    >
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 2 with 10s autoplay interval</div></sd-carousel-item
    >
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 3 with 10s autoplay interval</div></sd-carousel-item
    >
  </sd-carousel>

  <sd-carousel class="autoplay-pause" autoplay autoplay-interval="12" loop>
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 1 with 12s autoplay interval</div></sd-carousel-item
    >
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 2 with 12s autoplay interval</div></sd-carousel-item
    >
    <sd-carousel-item
      ><div class="slot slot--border slot--text h-16">Default slot 3 with 12s autoplay interval</div></sd-carousel-item
    >
  </sd-carousel>
</div>

<script type="module">
  document.querySelectorAll('.autoplay-pause').forEach(carrousel => {
    carrousel.pause();
  });
</script>
```
