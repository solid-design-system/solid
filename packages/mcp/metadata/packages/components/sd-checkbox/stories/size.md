Use the `size` attribute to change the size of the input checkbox (`md` equals `lg` but added for consistency reason on input elements):

- `lg` (default)
- `md`
- `sm`
  This attribute affects the font-size within the element, while the element itself remains the same size.

```html
<div class="flex gap-12">
  <sd-checkbox size="lg">Large</sd-checkbox>
  <sd-checkbox size="md">Medium</sd-checkbox>
  <sd-checkbox size="sm">Small</sd-checkbox>
</div>
```
