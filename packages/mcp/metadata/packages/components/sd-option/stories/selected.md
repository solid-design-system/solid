Parent component `sd-select` controls state of `sd-option`.

```html
<div class="flex flex-row gap-12 h-[260px]">
  <sd-select label="Selected option" placeholder="Please select" placement="bottom" size="lg" max-options-visible="3">
    <sd-option value="option-1">option 1</sd-option>
    <sd-option value="option-2">option 2</sd-option>
    <sd-option value="option-3">option 3</sd-option>
  </sd-select>
  <sd-select
    label="Multiple selected option"
    placeholder="Please select"
    placement="bottom"
    size="lg"
    max-options-visible="3"
    multiple
  >
    <sd-option value="option-1" checkbox>Checkbox option 1</sd-option>
    <sd-option value="option-2" checkbox>Checkbox option 2</sd-option>
    <sd-option value="option-3" checkbox>Checkbox option 3</sd-option>
  </sd-select>
</div>
```
