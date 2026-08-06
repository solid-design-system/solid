Use the `sd-copyright--placement-*` class to set the copyright placement:

- bottom is the default placement
- `sd-copyright--placement-top`

```html
<style>
  .sd-copyright::after {
    z-index: 10;
  }
</style>
<div class="grid grid-cols-2 gap-4">
  <div class="sd-copyright max-w-xl" style="--copyright: '© Union Investment 2025';">
    <img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover h-full" />
  </div>

  <sd-video class="sd-copyright sd-copyright--placement-top max-w-xl" style="--copyright: '© Union Investment 2025';">
    <img class="aspect-video object-cover" alt src="./placeholders/images/generic.jpg" />
  </sd-video>
</div>
```
