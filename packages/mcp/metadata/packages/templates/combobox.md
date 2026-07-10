---
name: combobox
title: Combobox
components:
  - sd-combobox
  - sd-optgroup
  - sd-option
version: 1.0.0
---

## Template: Simple Suggests

```html
<div class="h-[260px] w-[400px]">
  <sd-combobox label="Funds"> ${createFondsOptionsHtml()} </sd-combobox>
</div>
```

## Template: Highlight Query

```html
<div class="h-[260px] w-[400px]">
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

## Template: Multiple Highlight Query

```html
<div class="h-[260px] w-[400px]">
  <sd-combobox label="Funds" class="multiple-highlight-combobox"> ${createFondsOptionsHtml()} </sd-combobox>
</div>
<script type="module">
  const combobox = document.querySelector('.multiple-highlight-combobox');

  const multipleHighlightRender = (option, query) => {
    if (!query) {
      return option;
    }

    const clonedOption = option.cloneNode(true);

    clonedOption.selected = option.selected;

    const optionLabel = clonedOption.getTextLabel();
    const queryRegex = new RegExp(query, 'gi');

    const mark = document.createElement('mark');

    const exchangedText = optionLabel.replace(queryRegex, match => {
      mark.textContent = match;
      return mark.outerHTML;
    });

    const indexLabel = clonedOption.innerHTML.indexOf(optionLabel);
    const previousContent = clonedOption.innerHTML.slice(0, indexLabel);
    const followingContent = clonedOption.innerHTML.slice(indexLabel + optionLabel.length);

    clonedOption.innerHTML = previousContent.concat(exchangedText, followingContent);
    return clonedOption;
  };

  combobox.getOption = multipleHighlightRender;
</script>
```

## Template: Grouping Query

```html
<div class="h-[260px] w-[400px]">
  <sd-combobox label="Group elements" value="g">
    <sd-optgroup label="Funds"> ${createFondsOptionsHtml()} </sd-optgroup>
    <sd-optgroup label="Search Suggestions">
      <sd-option value="uniabsoluterertrag">UniAbsoluterErtrag</sd-option>
      <sd-option value="uniasia">UniAsia</sd-option>
    </sd-optgroup>
  </sd-combobox>
</div>
```
