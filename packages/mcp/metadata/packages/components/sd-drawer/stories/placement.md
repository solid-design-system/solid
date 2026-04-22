Use the `placement` attribute to change the position of the drawer:

- `start`: The drawer will be positioned on the left side of the screen.
- `end`: The drawer will be positioned on the right side of the screen.

```html
<sd-button id="placementButton">Open Drawer</sd-button>
<div style="width: auto; height: 40vh; position: relative;">
  <sd-drawer open placement="start" id="placementDrawer" label="Placement drawer">
    <sd-input slot="header" type="search" size="lg" placeholder="Start typing" label="Search"></sd-input>
    <div class="slot slot--border slot--text h-full">Default slot</div>
    <div slot="footer" class="flex flex-col w-full gap-4">
      <sd-button variant="primary">Primary Action</sd-button>
      <sd-button variant="secondary">Secondary Action</sd-button>
    </div>
  </sd-drawer>
</div>
<script>
  document.querySelector('#placementButton').addEventListener('click', () => {
    document.querySelector('#placementDrawer').show();
  });
</script>
```
