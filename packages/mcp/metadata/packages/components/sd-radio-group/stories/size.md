Use the `size` attribute to change the size of the input radio. This attribute affects the font-size within the element, while the element itself remains the same size:

- `lg` (default)
- `sm`

```html
<div class="flex gap-12">
  <sd-radio-group name="large-radio-group" size="lg" value="1" label="Group label">
    <sd-radio value="1">Radio 1</sd-radio>
    <sd-radio value="2">Radio 2</sd-radio>
    <sd-radio value="3">Radio 3</sd-radio>
  </sd-radio-group>

  <sd-radio-group name="small-radio-group" size="sm" value="1" label="Group label">
    <sd-radio value="1">Radio 1</sd-radio>
    <sd-radio value="2">Radio 2</sd-radio>
    <sd-radio value="3">Radio 3</sd-radio>
  </sd-radio-group>
</div>
```
