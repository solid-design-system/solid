Use the `floating-label` attribute to enable a floating label on the select.
**Note:** Floating labels only work with the `label` attribute. The `label` slot is not supported. Only the `lg` and `md` sizes are available.

```html
<div class="flex gap-12 w-[400px] h-[500px]">
  <sd-select size="lg" label="Floating Label" floating-label placement="bottom" value="">
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-select>
</div>
```
