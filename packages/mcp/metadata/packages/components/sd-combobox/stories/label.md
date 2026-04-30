Use the `label` attribute to give the combobox element an accessible label.
For labels that contain HTML, use the `label` slot instead.

```html
<div class="flex flex-wrap md:flex-nowrap gap-6">
  <div class="flex-1 min-w-[200px] md:min-w-0 max-w-[400px] h-[350px]">
    <sd-combobox size="lg" label="Label" placement="bottom" value="" class="w-full">
      <sd-option value="option-1">Option 1</sd-option>
      <sd-option value="option-2">Option 2</sd-option>
      <sd-option value="option-3">Option 3</sd-option>
      <sd-option value="option-4">Option 4</sd-option>
      <sd-option value="option-5">Option 5</sd-option>
    </sd-combobox>
  </div>
  <div class="flex-1 min-w-[200px] md:min-w-0 max-w-[400px] h-[350px]">
    <sd-combobox size="lg" placement="bottom" value="" class="w-full">
      <div slot="label" class="text-lg">Label slot</div>
      <sd-option value="option-1">Option 1</sd-option>
      <sd-option value="option-2">Option 2</sd-option>
      <sd-option value="option-3">Option 3</sd-option>
      <sd-option value="option-4">Option 4</sd-option>
      <sd-option value="option-5">Option 5</sd-option>
    </sd-combobox>
  </div>
</div>
```
