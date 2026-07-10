Use the `label` attribute to give the input an accessible label.
For labels that contain HTML, use the `label` slot instead.

```html
<div class="flex flex-row gap-12 items-baseline">
  <sd-input label="Label attribute" spellcheck></sd-input>
  <sd-input spellcheck>
    <div slot="label" class="text-lg">Label slot</div>
  </sd-input>
</div>
```
