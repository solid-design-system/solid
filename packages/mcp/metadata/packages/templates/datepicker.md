---
name: datepicker
title: Datepicker
components:
  - sd-datepicker
version: 1.0.0
---

## Template: Datepicker with a Selected Date and Unavailable Weekends

```html
<div class="w-[370px]">
  <sd-datepicker value="2025.11.21" disabled-weekends alignment="right" label="Appointment"></sd-datepicker>
</div>
```

## Template: Datepicker with a Selected Date and Unavailable Dates

```html
<div class="w-[370px]">
  <sd-datepicker
    value="2025.11.21"
    disabled-dates="2025.11.04,2025.11.12,2025.11.18,2025.11.26"
    disabled-weekends
    alignment="right"
    label="Appointment"
  ></sd-datepicker>
</div>
```

## Template: Datepicker with a Selected Range

```html
<div class="w-[370px]">
  <sd-datepicker
    value="2025.11.21"
    range
    rangeStart="2025.11.21"
    rangeEnd="2025.11.28"
    alignment="right"
    label="Time period"
  ></sd-datepicker>
</div>
```
