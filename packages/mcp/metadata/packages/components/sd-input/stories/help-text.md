Use the `help-text` attribute to add a descriptive “help text”.
For help texts that contain HTML, use the `help-text` slot instead.

```html
<div class="flex flex-rows gap-12">
  <sd-input label="Label" help-text="Help text attribute"></sd-input>
  <sd-input label="Label">
    <div slot="help-text" class="text-lg">Help text slot</div>
  </sd-input>
</div>
```
