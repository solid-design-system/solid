Use the `help-text` attribute to provide additional context or instructions.
For help texts that contain HTML, use the `help-text` slot instead.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12 h-[400px]">
  <sd-combobox
    class="flex-1 min-w-[200px] md:min-w-0 max-w-[400px]"
    size="lg"
    label="Label"
    placement="bottom"
    value=""
    help-text="Help text attribute"
  >
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-combobox>

  <sd-combobox
    class="flex-1 min-w-[200px] md:min-w-0 max-w-[400px]"
    size="lg"
    label="Label"
    placement="bottom"
    value=""
  >
    <div slot="help-text" class="text-lg">Help text slot</div>
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-combobox>
</div>
```
