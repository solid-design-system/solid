The height of the filtered options list can be customized by setting the max-height on the listbox part of the combobox.

```html
<div class="h-[260px] min-w-[200px] md:min-w-0 max-w-[400px]">
  <style>
    #max-height::part(listbox) {
      max-height: 100px;
    }
  </style>
  <sd-combobox label="Preferred color" id="max-height" value="g"> ${createColorOptionsHtml()} </sd-combobox>
</div>
```
