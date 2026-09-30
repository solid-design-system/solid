---
name: combobox
title: Combobox
components:
  - sd-combobox
  - sd-optgroup
  - sd-option
version: 1.0.0
---

## Template: Combobox Simple Suggests

```html
<div class="h-[260px] max-w-[400px]">
  <sd-combobox label="Funds"> ${createFondsOptionsHtml()} </sd-combobox>
</div>
```

## Template: Combobox Highlight Query

```html
<div class="h-[260px] max-w-[400px]">
  <sd-combobox label="Funds" class="highlight-combobox" value="g"> ${createFondsOptionsHtml()} </sd-combobox>
</div>
<script type="module">
  // the highlight option renderer utility function can be imported via:
  // import { highlightOptionRenderer } from '@solid-design-system/components';

  // preview-ignore:start
  const highlightOptionRenderer = ${optionRenderer};
  // preview-ignore:end

  const comboboxes = document.querySelectorAll('.highlight-combobox');
  comboboxes.forEach(combobox => {
    combobox.getOption = highlightOptionRenderer;
  });
</script>
```

## Template: Combobox Grouping Query

```html
<div class="h-[260px] max-w-[400px]">
  <sd-combobox label="Group elements" type="search" value="g">
    <sd-optgroup label="Funds"> ${createFondsOptionsHtml()} </sd-optgroup>
    <sd-optgroup label="Search Suggestions">
      <sd-option value="uniabsoluterertrag">UniAbsoluterErtrag</sd-option>
      <sd-option value="uniasia">UniAsia</sd-option>
    </sd-optgroup>
  </sd-combobox>
</div>
```

## Template: Combobox with Visually Hidden Label

```html
<div class="h-[340px] max-w-[400px]">
  <h4 class="text-primary font-bold text-xl mb-4">New transfer</h4>

  <p class="text-sm mb-4">Who do you want to send money to?</p>

  <sd-combobox type="search" placeholder="Please select">
    <span slot="label" class="sr-only">Search recipients</span>
    ${createFondsOptionsHtml()}
  </sd-combobox>
</div>
```
