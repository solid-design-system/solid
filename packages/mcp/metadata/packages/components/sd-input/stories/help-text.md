Use the `help-text` attribute to add a descriptive “help text”.
For help texts that contain HTML, use the `help-text` slot instead.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12">
  <sd-input label="Label" help-text="Help text attribute" class="min-w-[200px] md:min-w-0 max-w-[400px]"></sd-input>
  <sd-input label="Label" class="min-w-[200px] md:min-w-0 max-w-[400px]">
    <div slot="help-text" class="text-lg">Help text slot</div>
  </sd-input>
</div>
```
