Use the `help-text` attribute to add a descriptive “help text”.
For help texts that contain HTML, use the `help-text` slot instead.

```html
<div class="flex gap-12 h-[500px] w-[370px] h-[500px]">
  <sd-datepicker label="Label" help-text="Help text attribute"></sd-datepicker>
  <sd-datepicker label="Label">
    <div slot="help-text">Help text slot</div>
  </sd-datepicker>
</div>
```
