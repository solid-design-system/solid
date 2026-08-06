Use dividers to group menu-items in a menu.

```html
<sd-dropdown distance="4" rounded>
  <sd-button variant="secondary" slot="trigger">
    Menu
    <sd-icon library="_internal" name="chevron-down" slot="icon-right"></sd-icon>
  </sd-button>
  <sd-menu>
    <sd-menu-item>Menu item 1</sd-menu-item>
    <sd-menu-item>Menu item 2</sd-menu-item>
    <sd-menu-item>Menu item 3</sd-menu-item>
    <sd-menu-item>Menu item 4</sd-menu-item>
    <sd-menu-item>Menu item 5</sd-menu-item>
    <sd-divider></sd-divider>
    <sd-menu-item>Menu item 6</sd-menu-item>
    <sd-menu-item>Menu item 7</sd-menu-item>
  </sd-menu>
</sd-dropdown>
```
