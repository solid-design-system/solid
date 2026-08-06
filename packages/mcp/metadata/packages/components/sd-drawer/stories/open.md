Use the `open` attribute to set the state of the drawer to open.

```html
<sd-button id="openButton">Open drawer</sd-button>
<div style="width: auto; height: 40vh; position: relative;">
  <sd-drawer open label="example" placement="start" id="openDrawer">
    <sd-button slot="header" variant="tertiary">
      <sd-icon slot="icon-left" name="system/arrow-left"></sd-icon>
      Back
    </sd-button>
    <div class="slot slot--border slot--text h-full">Default slot</div>
    <div slot="footer" class="flex flex-col w-full gap-4">
      <sd-button variant="primary">Primary action</sd-button>
      <sd-button variant="secondary">Secondary action</sd-button>
    </div>
  </sd-drawer>
</div>
<script>
  document.querySelector('#openButton').addEventListener('click', () => {
    document.querySelector('#openDrawer').show();
  });
</script>
```
