Use the `floating-label` attribute to enable a floating label on the text-area.
**Note:** Floating labels only work with the `label` attribute. The `label` slot is not supported. Only the `lg` and `md` sizes are available.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12">
  <sd-textarea
    size="lg"
    label="Floating Label"
    floating-label
    rows="4"
    spellcheck
    class="w-full min-w-[200px] md:min-w-0 max-w-[500px]"
  ></sd-textarea>
</div>
```
