Use the `help-text` attribute to add a descriptive “help text”.
For help texts that contain HTML, use the `help-text` slot instead.

```html
<div class="flex gap-12">
  <sd-checkbox-group orientation="vertical" help-text="Help text">
    <label slot="label">Group label</label>
    <sd-checkbox value="1">Checkbox 1</sd-checkbox>
    <sd-checkbox value="2">Checkbox 2</sd-checkbox>
    <sd-checkbox value="3">Checkbox 3</sd-checkbox>
  </sd-checkbox-group>
</div>
```
