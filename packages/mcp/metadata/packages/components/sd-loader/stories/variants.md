Use the `color` attribute to set the loader's color:

- `currentColor` (default): used to inherit the `text-color` from the parent element
- `primary`: used on light backgrounds
- `white`: used on primary backgrounds

```html
<div class="flex items-center gap-12">
  <div class="inline-flex text-xl text-neutral-500">
    <sd-loader color="currentColor"></sd-loader>
  </div>
  <div class="inline-flex text-xl">
    <sd-loader color="primary"></sd-loader>
  </div>
  <div class="inline-flex bg-primary p-12 text-xl">
    <sd-loader color="white"></sd-loader>
  </div>
</div>
```
