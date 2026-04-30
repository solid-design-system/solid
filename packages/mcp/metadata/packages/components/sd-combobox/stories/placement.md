Use the `placement` attribute to define where the combobox panel should appear:

- `bottom` (default)
- `top`

```html
<div class="flex flex-wrap md:flex-nowrap items-center gap-12 h-[400px]">
  <sd-combobox
    class="self-baseline min-w-[200px] md:min-w-0 max-w-[400px]"
    size="lg"
    label="Label"
    placement="bottom"
    value=""
  >
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-combobox>
  <sd-combobox class="min-w-[200px] md:min-w-0 max-w-[400px]" size="lg" label="Label" placement="top" value="">
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-combobox>
</div>
```
