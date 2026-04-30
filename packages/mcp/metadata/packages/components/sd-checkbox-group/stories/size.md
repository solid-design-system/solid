Use the `size` attribute to change the size (`md` equals `lg` but added for consistency reason on input elements):

- `lg` (default)
- `md`
- `sm`

```html
<div class="flex gap-12">
  <sd-checkbox-group size="lg" label="Group label">
    <sd-checkbox value="1">Checkbox 1</sd-checkbox>
    <sd-checkbox value="2">Checkbox 2</sd-checkbox>
    <sd-checkbox value="3">Checkbox 3</sd-checkbox>
  </sd-checkbox-group>

  <sd-checkbox-group size="sm" label="Group label">
    <sd-checkbox value="1">Checkbox 1</sd-checkbox>
    <sd-checkbox value="2">Checkbox 2</sd-checkbox>
    <sd-checkbox value="3">Checkbox 3</sd-checkbox>
  </sd-checkbox-group>
</div>
```
