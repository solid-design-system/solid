Use the `sd-copyright--no-shadow` class to remove the shadow.
**Hint:** the class `sd-copyright--color-black` automaticaly removes the shadow.

```html
<div class="flex">
  <div class="sd-copyright sd-copyright--no-shadow flex-1" style="--copyright: '© Union Investment 2025';">
    <div class="px-12 py-8 bg-primary h-full"></div>
  </div>
  <div class="sd-copyright sd-copyright--color-black flex-1" style="--copyright: '© Union Investment 2025';">
    <div class="sd-container sd-container--variant-border-neutral-400 h-full"></div>
  </div>
</div>
```
