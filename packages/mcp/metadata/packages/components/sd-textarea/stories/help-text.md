Use the `help-text` attribute to provide an accessible help text for the textarea element.
For help texts that contain HTML, use the `help-text` slot instead.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12">
  <sd-textarea
    size="lg"
    label="Label"
    help-text="Help text attribute"
    rows="4"
    class="w-full min-w-[200px] md:min-w-0 max-w-[500px]"
  ></sd-textarea>
  <sd-textarea size="lg" label="Label" rows="4" spellcheck class="w-full min-w-[200px] md:min-w-0 max-w-[500px]">
    <div slot="help-text" class="text-lg">Help text slot</div>
  </sd-textarea>
</div>
```
