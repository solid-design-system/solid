Use the `summary` attribute to provide the text in the quickfact.
For summaries that contain HTML, use the summary slot instead.

```html
<sd-quickfact>
  <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>
  <div slot="summary" class="flex flex-col sm:gap-4">
    <p class="text-base font-normal leading-normal sm:text-4xl sm:leading-tight">Summary</p>
    <div class="text-base font-normal leading-normal sm:text-xl">Description</div>
  </div>
  <div class="slot slot--border slot--text h-16">Default slot</div>
</sd-quickfact>
```
