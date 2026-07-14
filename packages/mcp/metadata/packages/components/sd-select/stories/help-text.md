Use the `help-text` attribute to provide additional context or instructions.
For help texts that contain HTML, use the `help-text` slot instead.

```html
<div class="flex gap-12 h-[500px]">
  <sd-select size="lg" label="Label" placement="bottom" value="" help-text="Help text attribute">
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-select>

  <sd-select size="lg" label="Label" placement="bottom" value="">
    <div slot="help-text" class="text-lg">Help text slot</div>
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-select>
</div>
```
