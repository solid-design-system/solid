Use the `label` attribute to give the input an accessible label.
For labels that contain HTML, use the `label` slot instead.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12 items-baseline">
  <sd-input label="Label attribute" spellcheck class="min-w-[200px] md:min-w-0 max-w-[400px]"></sd-input>
  <sd-input spellcheck class="min-w-[200px] md:min-w-0 max-w-[400px]">
    <div slot="label" class="text-lg">Label slot</div>
  </sd-input>
</div>
```
