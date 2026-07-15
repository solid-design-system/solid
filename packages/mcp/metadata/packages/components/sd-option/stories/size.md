Use the `size` attribute to change the option’s size:

- `lg` (default)
- `md`
- `sm`
  This will be inherited automatically from the size attribute of the parent `sd-select`.

```html
<div class="flex flex-row gap-4 h-[260px]">
  <sd-select label="Large" placeholder="Please select" placement="bottom" max-options-visible="3">
    <sd-option value="option-1" size="lg">option 1</sd-option>
    <sd-option value="option-2" size="lg">option 2</sd-option>
    <sd-option value="option-3" size="lg">option 3</sd-option>
  </sd-select>
  <sd-select label="Medium" placeholder="Please select" placement="bottom" max-options-visible="3" size="md">
    <sd-option value="option-1" size="md">option 1</sd-option>
    <sd-option value="option-2" size="md">option 2</sd-option>
    <sd-option value="option-3" size="md">option 3</sd-option>
  </sd-select>
  <sd-select label="Small" placeholder="Please select" placement="bottom" max-options-visible="3" size="sm">
    <sd-option value="option-1" size="sm">option 1</sd-option>
    <sd-option value="option-2" size="sm">option 2</sd-option>
    <sd-option value="option-3" size="sm">option 3</sd-option>
  </sd-select>
</div>
```
