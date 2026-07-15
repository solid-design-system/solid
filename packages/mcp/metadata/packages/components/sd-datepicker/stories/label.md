Use the `label` attribute to give the datepicker an accessible label.
For labels that contain HTML, use the `label` slot instead.

```html
<div class="flex gap-12 h-[500px]">
  <sd-datepicker label="Label attribute"></sd-datepicker>
  <sd-datepicker>
    <div slot="label">Label slot</div>
  </sd-datepicker>
</div>
```
