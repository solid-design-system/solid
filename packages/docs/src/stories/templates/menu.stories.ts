import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  title: 'Templates/Menu',
  tags: ['!dev', 'autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  decorators: [
    (story: any) => html`
      <style>
        #anchor--templates-menu--menu-with-icons .innerZoomElementWrapper {
          min-height: 300px;
        }

        #anchor--templates-menu--menu-with-checkmarks .innerZoomElementWrapper {
          min-height: 650px;
        }

        #anchor--templates-menu--menu-with-checkmarks-and-icons .innerZoomElementWrapper {
          min-height: 300px;
        }
      </style>
      ${story()}
    `
  ] as unknown
};

/**
 * Example of how to build a simple context menu where each item is paired with a leading icon. Triggered by a three-dot icon button, the menu provides quick access to a small set of actions such as Share and Save.
 */

export const MenuWithIcons = {
  name: 'Menu with Icons',
  render: () =>
    html` <sd-dropdown distance="4" rounded open stay-open-on-select>
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
    </sd-dropdown>`
};

/**
 * Example of how to combine icons and checkmarks in a menu to show both the action type and the current active state. The checkmark indicates the currently selected or enabled item.
 */

export const MenuWithCheckmarksAndIcons = {
  name: 'Menu with Checkmarks and Icons',
  render: () => html`
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
  `
};

/**
 * Example of how to structure a complex menu with item groups, checkmarks for active selections, and submenus for nested options. Items that trigger a submenu are indicated by a trailing chevron, and a divider separates the grouped entries from the main list.
 */

export const MenuWithCheckmarks = {
  name: 'Menu with Checkmarks, Grouping and Submenu',
  render: () => html`
    <sd-dropdown distance="4" rounded stay-open-on-select>
      <sd-button variant="secondary" slot="trigger">
        Menu
        <sd-icon library="_internal" name="chevron-bottom" slot="icon-right"></sd-icon>
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
  `
};
