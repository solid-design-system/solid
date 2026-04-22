Use the “left” and “right” slots to add system icons.
Show the search icon in either the left slot or right icon slot instead of the chevron icon (don’t show two icons on the right-hand side).
**Accessibility hint**: The label can be omitted for search input fields if a button (e.g., aria-label="Search") with a search icon is present.

```html
<div class="w-[400px] h-[400px]">
  <sd-combobox size="lg" clearable label="Label">
    <sd-icon slot="left" name="system/image" aria-hidden="true" color="currentColor"></sd-icon>
    ${createColorOptionsHtml()}
    <button slot="right" aria-label="Search" class="sd-interactive flex">
      <sd-icon name="system/magnifying-glass" aria-hidden="true" color="currentColor"></sd-icon>
    </button>
  </sd-combobox>
</div>
```
