Use the `orientation` attribute to set the axis of the checkboxes:

- `vertical` (default)
- `horizontal`

```html
<div class="flex gap-12">
  <sd-checkbox-group orientation="vertical" label="Group label">
    <sd-checkbox value="1">Checkbox 1</sd-checkbox>
    <sd-checkbox value="2">Checkbox 2</sd-checkbox>
    <sd-checkbox value="3">Checkbox 3</sd-checkbox>
  </sd-checkbox-group>
  <sd-checkbox-group orientation="horizontal" label="Group label">
    <sd-checkbox value="1">Checkbox 1</sd-checkbox>
    <sd-checkbox value="2">Checkbox 2</sd-checkbox>
    <sd-checkbox value="3">Checkbox 3</sd-checkbox>
  </sd-checkbox-group>
</div>
```
