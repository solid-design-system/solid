Use the `placement` attribute to set the position of the dropdown panel relative to the trigger:

- top: `top`, `top-start` and `top-end`
- bottom: `bottom`, `bottom-start` and `bottom-end`
- right: `right`, `right-start` and `right-end`
- left: `left`, `left-start` and `left-end`

```html
<div class="grid grid-cols-2 gap-32">
  <sd-dropdown open placement="bottom-start">
    <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
    <sd-button slot="trigger">bottom-start</sd-button>
  </sd-dropdown>

  <sd-dropdown open placement="bottom-end">
    <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
    <sd-button slot="trigger">bottom-end</sd-button>
  </sd-dropdown>
</div>
```
