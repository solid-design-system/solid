Use the `size` attribute to change the size of the input radio (`md` equals `lg` but added for consistency reason on input elements):

- `lg` (default)
- `md`
- `sm`
  This attribute affects the font-size within the element, while the element itself remains the same size.

```html
<div class="flex gap-12">
  <sd-radio-group size="lg" value="1">
    <sd-radio value="1">Radio 1</sd-radio>
    <sd-radio value="2">Radio 2</sd-radio>
    <sd-radio value="3">Radio 3</sd-radio>
  </sd-radio-group>
  <sd-radio-group size="md" value="1">
    <sd-radio value="1">Radio 1</sd-radio>
    <sd-radio value="2">Radio 2</sd-radio>
    <sd-radio value="3">Radio 3</sd-radio>
  </sd-radio-group>
  <sd-radio-group size="sm" value="1">
    <sd-radio value="1">Radio 1</sd-radio>
    <sd-radio value="2">Radio 2</sd-radio>
    <sd-radio value="3">Radio 3</sd-radio>
  </sd-radio-group>
</div>
```
