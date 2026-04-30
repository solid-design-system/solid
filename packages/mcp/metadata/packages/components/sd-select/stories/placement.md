Use the `placement` attribute to define where the select panel should appear:

- `bottom` (default)
- `top`

```html
<div class="flex items-center gap-12 h-[500px]">
  <sd-select class="self-baseline" size="lg" label="Label" placement="bottom" value="">
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-select>

  <sd-select size="lg" label="Label" placement="top" value="">
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-select>
</div>
```
