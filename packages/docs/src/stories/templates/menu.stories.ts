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

export const MenuWithCheckmarks = {
  name: 'Menu with Checkmarks, Grouping and Submenu',
  render: () => html`
    <sd-dropdown distance="4" rounded open>
      <sd-button variant="secondary" slot="trigger">
        Menu
        <sd-icon library="_internal" name="chevron-down" slot="icon-right"></sd-icon>
      </sd-button>
      <sd-menu>
        <sd-menu-item type="checkbox">Menu item</sd-menu-item>
        <sd-menu-item type="checkbox">Menu item</sd-menu-item>
        <sd-menu-item type="checkbox" checked>Menu item</sd-menu-item>
        <sd-menu-item type="checkbox">Menu item</sd-menu-item>
        <sd-menu-item type="checkbox">Menu item</sd-menu-item>
        <sd-divider></sd-divider>
        <sd-menu-item>
          Menu item
          <sd-menu slot="submenu">
            <sd-menu-item type="checkbox">Submenu item</sd-menu-item>
            <sd-menu-item type="checkbox" checked>Submenu item</sd-menu-item>
            <sd-menu-item type="checkbox">Submenu item</sd-menu-item>
          </sd-menu>
        </sd-menu-item>
        <sd-menu-item>
          Menu item
          <sd-menu slot="submenu">
            <sd-menu-item type="checkbox">Submenu item</sd-menu-item>
            <sd-menu-item type="checkbox">Submenu item</sd-menu-item>
            <sd-menu-item type="checkbox">Submenu item</sd-menu-item>
          </sd-menu>
        </sd-menu-item>
      </sd-menu>
    </sd-dropdown>
  `
};

export const MenuWithCheckmarksAndIcons = {
  name: 'Menu with Checkmarks and Icons',
  render: () => html`
    <sd-dropdown distance="4" rounded open>
      <sd-button variant="secondary" slot="trigger">
        <sd-icon name="system/more-functions" label="Icon only"></sd-icon>
      </sd-button>
      <sd-menu>
        <sd-menu-item type="checkbox">
          <sd-icon name="system/image" slot="icon-indent"></sd-icon>
          Menu item
        </sd-menu-item>
        <sd-menu-item type="checkbox" checked>
          <sd-icon name="system/image" slot="icon-indent"></sd-icon>
          Menu item
        </sd-menu-item>
        <sd-menu-item type="checkbox">
          <sd-icon name="system/image" slot="icon-indent"></sd-icon>
          Menu item
        </sd-menu-item>
      </sd-menu>
    </sd-dropdown>
  `
};
