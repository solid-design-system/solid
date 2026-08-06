Use the `animated` attribute to animate the marker.

```html
<div class="flex items-center gap-12">
  <sd-map-marker class="animated-example" variant="main" state="default" animated="" not-interactive></sd-map-marker>
</div>
<script>
  const marker = document.querySelector('.animated-example');
  setInterval(() => {
    marker.animated = !marker.animated;
  }, 2000);
</script>
```
