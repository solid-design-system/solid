Use the `required` attribute to mark the element as required. This can be used for form validation purposes.

```html
<div class="h-[400px] min-w-[200px] md:min-w-0 max-w-[400px]">
  <sd-combobox
    size="lg"
    label="Required"
    placeholder="Please search and select"
    placement="bottom"
    value=""
    required=""
  >
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-combobox>
</div>
```
