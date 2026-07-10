Use the `disabled` attribute to disable the menu item so it cannot be selected.

```html
<sd-dropdown distance="4" rounded>
  <sd-button variant="secondary" slot="trigger">Menu</sd-button>
  <sd-menu>
    <sd-menu-item disabled>Disabled menu item 1</sd-menu-item>
    <sd-menu-item>Menu item 2</sd-menu-item>
    <sd-menu-item disabled>Disabled menu item 3</sd-menu-item>
  </sd-menu>
</sd-dropdown>
```
