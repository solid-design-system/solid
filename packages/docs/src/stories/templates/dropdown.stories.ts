import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Dropdown',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3000-9863&t=JCsisVFNkWSlhSSN-4'
    },
    chromatic: { disableSnapshot: true }
  }
};

/**
 * ### Dropdown with Navigation Items
 *
 * Example of how to use a dropdown to present a list of navigation options, such as a country selector in the header.
 */
export const Default = {
  render: () => html`
    <style>
      #anchor--templates-dropdown--default .innerZoomElementWrapper {
        min-height: 500px;
      }
    </style>
    <div class="min-h-[400px] w-[380px]">
      <sd-dropdown id="dropdown" open>
        <sd-navigation-item slot="trigger" vertical>
          <sd-icon name="system/globe" class="h-6 w-6" label="Select a country"></sd-icon>
        </sd-navigation-item>
        <div class="flex flex-col p-2">
          <h4 class="sd-headline sd-headline--size-base p-4">Please select a country</h4>
          <sd-navigation-item current vertical href="javascript:void(0)"> Austria </sd-navigation-item>
          <sd-navigation-item vertical href="javascript:void(0)"> Denmark </sd-navigation-item>
          <sd-navigation-item vertical href="javascript:void(0)"> Finland </sd-navigation-item>
          <sd-navigation-item vertical href="javascript:void(0)"> France </sd-navigation-item>
          <sd-navigation-item vertical href="javascript:void(0)"> Germany </sd-navigation-item>
        </div>
      </sd-dropdown>
    </div>

    <script type="module">
      await Promise.all([
        customElements.whenDefined('sd-dropdown'),
        customElements.whenDefined('sd-navigation-item')
      ]).then(() => {
        const dropdown = document.getElementById('dropdown');
        dropdown.containingElement = document.body;
        const navigationItems = dropdown.querySelectorAll('sd-navigation-item[href]');

        const handleNavigationItemClick = e => {
          navigationItems.forEach(item => item.removeAttribute('current'));

          const target = e.target.closest('sd-navigation-item');
          target.setAttribute('current', '');
        };

        navigationItems.forEach(item => item.addEventListener('click', handleNavigationItemClick));
      });
    </script>
  `
};

/**
 * Example of how to use a dropdown as a contextual action menu triggered by an icon button. A list of navigation items come with an icon on the left. Use it for making actions like Share, Download, and Delete quickly to scan and access.
 */

export const MenuWithIcons = {
  name: 'Dropdown with Menu Items',
  render: () => html`
    <div class="min-h-[300px]">
      <sd-dropdown id="dropdown-menu-items" distance="4" rounded open stay-open-on-select>
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
            <sd-icon name="system/download" slot="icon-indent"></sd-icon>
            Download
          </sd-menu-item>
          <sd-menu-item>
            <sd-icon name="system/trash" slot="icon-indent"></sd-icon>
            Delete
          </sd-menu-item>
        </sd-menu>
      </sd-dropdown>
    </div>

    <script type="module">
      customElements.whenDefined('sd-dropdown').then(() => {
        const dropdown = document.getElementById('dropdown-menu-items');
        dropdown.containingElement = document.body;
      });
    </script>
  `
};
