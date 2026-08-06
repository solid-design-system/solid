To create a submenu, nest an `<sd-menu slot="submenu">` in any menu item.

```html
<sd-dropdown distance="4" rounded>
  <sd-navigation-item slot="trigger" vertical>Menu</sd-navigation-item>
  <sd-menu>
    <sd-menu-item>Menu item 1</sd-menu-item>
    <sd-menu-item>Menu item 2</sd-menu-item>
    <sd-menu-item>
      Menu item 3
      <sd-menu slot="submenu">
        <sd-menu-item value="find">Submenu item 1</sd-menu-item>
        <sd-menu-item value="find-previous">Submenu item 2</sd-menu-item>
      </sd-menu>
    </sd-menu-item>
  </sd-menu>
</sd-dropdown>
```
