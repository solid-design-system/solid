Use the `color` attribute to change an icon’s color

- `currentColor` (default): Inherits the current text color, which makes it easy to style icons via CSS.
- `primary`: Sets the color to the primary color.
- `white`: Sets the color to white.

```html
<div class="flex gap-6">
  <sd-icon class="p-2" name="union-investment/content/image" color="currentColor"></sd-icon>
  <sd-icon class="p-2" name="union-investment/content/image" color="primary"></sd-icon>
  <div class="p-2 bg-primary">
    <sd-icon name="union-investment/content/image" color="white"></sd-icon>
  </div>
</div>
```
