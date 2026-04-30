Use the `checkbox` attribute to make it a checkbox.
Enabled automatically when using `sd-select` with attribute `checklist` set to `true`.

```html
<div class="h-[260px]">
  <sd-select
    class="max-w-[300px]"
    label="Checkbox"
    placeholder="Please select"
    placement="bottom"
    max-options-visible="3"
    multiple
  >
    <sd-option value="option-1" checkbox>Checkbox option 1</sd-option>
    <sd-option value="option-2" checkbox>Checkbox option 2</sd-option>
    <sd-option value="option-3" checkbox>Checkbox option 3</sd-option>
  </sd-select>
</div>
```
