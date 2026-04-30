Use the `sd-copyright--orientation-*` classes to set the axis of a copyright:

- horizontal is the default orientation
- `sd-copyright--orientation-vertical`

```html
<div class="grid grid-cols-2 gap-4">
  <div class="sd-copyright max-w-xl" style="--copyright: '© Union Investment 2025';">
    <img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover" />
  </div>

  <div class="sd-copyright sd-copyright--orientation-vertical max-w-xl" style="--copyright: '© Union Investment 2025';">
    <img src="./placeholders/images/generic.jpg" alt="" class="aspect-video object-cover" />
  </div>
</div>
```
