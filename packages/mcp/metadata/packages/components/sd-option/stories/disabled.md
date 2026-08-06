Use the `disabled` attribute to disable an option.

```html
<div class="flex flex-row gap-12 h-[260px]">
  <sd-select label="Disabled options" placeholder="Please select" placement="bottom" max-options-visible="3">
    <sd-option value="option-1" disabled>option 1</sd-option>
    <sd-option value="option-2" disabled>option 2</sd-option>
    <sd-option value="option-3" disabled>option 3</sd-option>
  </sd-select>
  <sd-select
    label="Disabled checkbox options"
    placeholder="Please select"
    placement="bottom"
    max-options-visible="3"
    multiple
  >
    <sd-option value="option-1" disabled checkbox>Checkbox option 1</sd-option>
    <sd-option value="option-2" disabled checkbox>Checkbox option 2</sd-option>
    <sd-option value="option-3" disabled checkbox>Checkbox option 3</sd-option>
  </sd-select>
</div>
```
