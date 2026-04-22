Use the `no-header` attribute to remove the header from the drawer.

```html
<sd-button id="noHeaderButton">Open Drawer</sd-button>
<div style="width: auto; height: 40vh; position: relative;">
  <sd-drawer open no-header placement="start" id="noHeaderDrawer" label="No header drawer">
    <div class="slot slot--border slot--text h-full">Default slot</div>
    <div slot="footer" class="slot slot--border slot--text h-full">Footer slot</div>
  </sd-drawer>
</div>
<script>
  document.querySelector('#noHeaderButton').addEventListener('click', () => {
    document.querySelector('#noHeaderDrawer').show();
  });
</script>
```
