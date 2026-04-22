Use the `multiple` attribute to allow multiple options to be selected.
Use `--tag-max-width` to set the maximum width of the tags and to show an ellipsis, e.g. `<sd-select style="--tag-max-width: 40px">`. The default value is `15ch`

```html
<div class="w-[400px] h-[500px]">
  <sd-select size="lg" label="Label" placement="bottom" multiple="" value="option-1 option-2">
    <sd-option value="option-1">Option 1</sd-option>
    <sd-option value="option-2">Option 2</sd-option>
    <sd-option value="option-3">Option 3</sd-option>
    <sd-option value="option-4">Option 4</sd-option>
    <sd-option value="option-5">Option 5</sd-option>
  </sd-select>
</div>
```
