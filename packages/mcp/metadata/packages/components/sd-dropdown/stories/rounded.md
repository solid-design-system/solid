Use the `rounded` attribute to set a border-radius on the dropdown panel and trigger button.

```html
<sd-dropdown open rounded distance="4">
  <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
  <sd-button slot="trigger" variant="secondary">
    <sd-icon name="system/more-functions" class="h-6 w-6" label="Rounded dropdown"></sd-icon>
  </sd-button>
</sd-dropdown>
```
