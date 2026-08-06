Use the `help-text` attribute to add a descriptive “help text”.
For help texts that contain HTML, use the `help-text` slot instead.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12 h-[500px]">
  <sd-datepicker
    label="Label"
    help-text="Help text attribute"
    class="min-w-[200px] md:min-w-0 max-w-[370px]"
  ></sd-datepicker>
  <sd-datepicker label="Label" class="min-w-[200px] md:min-w-0 max-w-[370px]">
    <div slot="help-text">Help text slot</div>
  </sd-datepicker>
</div>
```
