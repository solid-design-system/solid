Use the `label` attribute to give the datepicker an accessible label.
For labels that contain HTML, use the `label` slot instead.

```html
<div class="flex flex-wrap md:flex-nowrap gap-12 h-[500px]">
  <sd-datepicker label="Label attribute" class="min-w-[200px] md:min-w-0 max-w-[370px]"></sd-datepicker>
  <sd-datepicker class="min-w-[200px] md:min-w-0 max-w-[370px]">
    <div slot="label">Label slot</div>
  </sd-datepicker>
</div>
```
