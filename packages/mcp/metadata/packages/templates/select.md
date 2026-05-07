---
name: select
title: Select
components:
  - sd-divider
  - sd-option
  - sd-select
version: 1.0.0
---

## Template: Grouping Options

```html
<div class="h-[500px] flex gap-12">
  <sd-select size="lg" placement="bottom" label="City/Region" placeholder="Please select" max-options-visible="3">
    <div class="text-black px-4 font-bold">Australia</div>
    <sd-option value="option-1">Brisbane (Queensland)</sd-option>
    <sd-option value="option-2">Sydney (Victoria)</sd-option>
    <sd-divider class="mb-4"></sd-divider>
    <div class="text-black px-4 font-bold">Austria</div>
    <sd-option value="option-3">Graz (Styria)</sd-option>
    <sd-option value="option-4">Hartberg (Styria)</sd-option>
  </sd-select>

  <sd-select size="lg" placement="bottom" label="Country" placeholder="Please select" max-options-visible="3">
    <div class="text-black px-4 font-bold">Asia</div>
    <sd-option value="option-1">Japan</sd-option>
    <sd-option value="option-2">South Korea</sd-option>
    <sd-option value="option-3">Turkey</sd-option>
    <sd-divider class="mb-4"></sd-divider>
    <div class="text-black px-4 font-bold">Australia</div>
    <sd-option value="option-4">Australia</sd-option>
  </sd-select>
</div>
```

## Template: Select with Option and Checkbox

```html
<div class="w-[400px] h-[500px]">
  <sd-select
    id="select-with-checkbox"
    size="lg"
    placement="bottom"
    multiple
    placeholder="Fund selection"
    value="option-1 option-3"
  >
    <div slot="label" class="font-bold">Choose Fund Category</div>

    <sd-option value="option-1">Union Investment funds</sd-option>
    <sd-option value="option-2">Institutional retail funds</sd-option>
    <sd-option value="option-3">Bank-specific funds </sd-option>
    <sd-option value="option-4">Corporate client fund</sd-option>
  </sd-select>
</div>
<script type="module">
  const selectElement = document.querySelector('#select-with-checkbox');
  selectElement.localize.setCustomLocalization({
    numOptionsSelected: num => (num === 0 ? '' : 'Fund selection (' + num + ')')
  });
</script>
```
