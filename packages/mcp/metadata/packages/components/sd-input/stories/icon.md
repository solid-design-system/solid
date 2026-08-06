Use the `left` or `right` slot to add system icons.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12">
  <sd-input label="Label" spellcheck class="min-w-[200px] md:min-w-0 max-w-[400px]">
    <sd-icon label="landscape" name="system/image" slot="left"></sd-icon>
  </sd-input>

  <sd-input label="Label" spellcheck class="min-w-[200px] md:min-w-0 max-w-[400px]">
    <sd-icon label="landscape" name="system/image" slot="right"></sd-icon>
  </sd-input>
</div>
```
