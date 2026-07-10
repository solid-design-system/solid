Use the `label` attribute to provide an accessible label for the textarea element.
For labels that contain HTML, use the `label` slot instead.

```html
<div class="flex gap-12">
  <sd-textarea size="lg" label="Label attribute" rows="4" spellcheck class="w-full"></sd-textarea>
  <sd-textarea size="lg" rows="4" spellcheck class="w-full">
    <div slot="label" class="text-lg">Label slot</div>
  </sd-textarea>
</div>
```
