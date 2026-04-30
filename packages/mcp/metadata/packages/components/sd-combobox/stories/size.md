Use the `size` attribute to change the size. It will cascade to slotted `sd-option` elements:

- `lg` (default)
- `md`
- `sm`
  **Note:** On the `floating-label` variant “sm” size is not available.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12 h-[400px]">
  <div class="flex-1 min-w-[200px] md:min-w-0 max-w-[400px]">
    <sd-combobox size="lg" label="Label" placeholder="Large" placement="bottom" value="" class="test">
      <sd-option value="option-1" size="lg">Option 1</sd-option>
      <sd-option value="option-2" size="lg">Option 2</sd-option>
      <sd-option value="option-3" size="lg">Option 3</sd-option>
      <sd-option value="option-4" size="lg">Option 4</sd-option>
      <sd-option value="option-5" size="lg">Option 5</sd-option>
    </sd-combobox>
  </div>
  <div class="flex-1 min-w-[200px] md:min-w-0 max-w-[400px]">
    <sd-combobox size="md" label="Label" placeholder="Medium" placement="bottom" value="" class="test">
      <sd-option value="option-1" size="md">Option 1</sd-option>
      <sd-option value="option-2" size="md">Option 2</sd-option>
      <sd-option value="option-3" size="md">Option 3</sd-option>
      <sd-option value="option-4" size="md">Option 4</sd-option>
      <sd-option value="option-5" size="md">Option 5</sd-option>
    </sd-combobox>
  </div>
  <div class="flex-1 min-w-[200px] md:min-w-0 max-w-[400px]">
    <sd-combobox size="sm" label="Label" placeholder="Small" placement="bottom" value="">
      <sd-option value="option-1" size="sm">Option 1</sd-option>
      <sd-option value="option-2" size="sm">Option 2</sd-option>
      <sd-option value="option-3" size="sm">Option 3</sd-option>
      <sd-option value="option-4" size="sm">Option 4</sd-option>
      <sd-option value="option-5" size="sm">Option 5</sd-option>
    </sd-combobox>
  </div>
</div>
```
