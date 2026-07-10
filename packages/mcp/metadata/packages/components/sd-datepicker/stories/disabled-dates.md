Use the `disable-dates` attribute to manually disable days in your datepicker. If this attribute is active the range selection will not be possible.

```html
<div class="w-[370px] h-[500px]">
  <sd-datepicker
    label="Label"
    value="2025-11-10"
    disabled-dates="2025-10-31,2025-11-11,2025-11-19,2025-11-20,2025-11-24"
  ></sd-datepicker>
</div>
```
