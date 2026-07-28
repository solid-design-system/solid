Use the `label` attribute to give the select element an accessible label.
For labels that contain HTML, use the `label` slot instead.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12 h-[500px]">
  <sd-select
    size="lg"
    label="Label attribute"
    placement="bottom"
    value=""
    class="w-full min-w-[200px] md:min-w-0 max-w-[400px]"
  >
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-select>

  <sd-select size="lg" placement="bottom" value="" class="w-full min-w-[200px] md:min-w-0 max-w-[400px]">
    <div slot="label" class="text-lg">Label slot</div>
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-select>
</div>
```
