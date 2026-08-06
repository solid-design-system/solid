---
name: menu
title: Menu
components:
  - sd-button
  - sd-divider
  - sd-dropdown
  - sd-icon
  - sd-menu
  - sd-menu-item
version: 1.0.0
---

## Template: Menu with Icons

```html
<sd-dropdown distance="4" rounded open stay-open-on-select>
  <sd-button variant="secondary" slot="trigger">
    <sd-icon name="system/more-functions" label="Icon only"></sd-icon>
  </sd-button>
  <sd-menu>
    <sd-button variant="secondary" slot="trigger">
      <sd-icon name="system/more-functions" label="Icon only"></sd-icon>
    </sd-button>
    <sd-menu-item>
      <sd-icon name="system/share" slot="icon-indent"></sd-icon>
      Share
    </sd-menu-item>
    <sd-menu-item>
      <sd-icon name="system/bookmark" slot="icon-indent"></sd-icon>
      Save
    </sd-menu-item>
  </sd-menu>
</sd-dropdown>
```

## Template: Menu with Checkmarks and Icons

```html
<sd-dropdown distance="4" rounded open stay-open-on-select>
  <sd-button variant="secondary" slot="trigger">
    <sd-icon name="system/more-functions" label="Icon only"></sd-icon>
  </sd-button>
  <sd-menu>
    <sd-menu-item type="checkbox">
      <sd-icon name="system/laptop" slot="icon-indent"></sd-icon>
      Display Settings
    </sd-menu-item>
    <sd-menu-item type="checkbox" checked>
      <sd-icon name="system/bell" slot="icon-indent"></sd-icon>
      Notifications
    </sd-menu-item>
    <sd-menu-item type="checkbox">
      <sd-icon name="system/lock-locked" slot="icon-indent"></sd-icon>
      Privacy and security
    </sd-menu-item>
  </sd-menu>
</sd-dropdown>
```

## Template: Menu with Checkmarks, Grouping and Submenu

```html
<sd-dropdown distance="4" rounded stay-open-on-select>
  <sd-button variant="secondary" slot="trigger">
    Menu
    <sd-icon library="_internal" name="chevron-down" slot="icon-right"></sd-icon>
  </sd-button>
  <sd-menu>
    <sd-menu-item type="checkbox">Account overview</sd-menu-item>
    <sd-menu-item type="checkbox">Transactions</sd-menu-item>
    <sd-menu-item type="checkbox" checked>Investments</sd-menu-item>
    <sd-menu-item type="checkbox">Budget planner</sd-menu-item>
    <sd-menu-item type="checkbox">Dashboard</sd-menu-item>
    <sd-divider></sd-divider>
    <sd-menu-item>
      Reports
      <sd-menu slot="submenu">
        <sd-menu-item type="checkbox">Annual summary</sd-menu-item>
        <sd-menu-item type="checkbox" checked>Investment performance</sd-menu-item>
        <sd-menu-item type="checkbox">Tax documents</sd-menu-item>
      </sd-menu>
    </sd-menu-item>
    <sd-menu-item>
      Billing
      <sd-menu slot="submenu">
        <sd-menu-item type="checkbox">Invoices</sd-menu-item>
        <sd-menu-item type="checkbox" checked>Payment methods</sd-menu-item>
      </sd-menu>
    </sd-menu-item>
  </sd-menu>
</sd-dropdown>
```
