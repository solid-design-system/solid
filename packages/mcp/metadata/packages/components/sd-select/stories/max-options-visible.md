Use the `max-options-visible` attribute to define the maximum number of selected options that will be visible.
**Hint:** It requires the `multiple` and `useTags` attributes to be set.<br />
Once the maximum number of options is reached, the selection will display a message indicating how many additional options have been selected.<br />
To remove the limit, set the attribute to `0`.

```html
<div class="w-[400px] h-[500px]">
  <sd-select
    size="lg"
    label="Label"
    placement="bottom"
    multiple=""
    value="option-1 option-2 option-3"
    useTags
    max-options-visible="2"
  >
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-select>
</div>
```
