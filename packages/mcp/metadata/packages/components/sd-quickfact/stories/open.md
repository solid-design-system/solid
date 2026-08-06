Use the `open` attribute to set the state of the quickfact.

```html
<div class="flex flex-col gap-12">
  <sd-quickfact expandable="" open summary="Open">
    <sd-icon name="content/image" color="currentColor" aria-hidden="true" library="default" slot="icon"></sd-icon>
    <div class="slot slot--border slot--text h-16">Default slot</div>
  </sd-quickfact>

  <sd-quickfact expandable="" summary="Closed">
    <sd-icon name="content/image" color="currentColor" aria-hidden="true" library="default" slot="icon"></sd-icon>
    <div class="slot slot--border slot--text h-16">Default slot</div>
  </sd-quickfact>
</div>
```
