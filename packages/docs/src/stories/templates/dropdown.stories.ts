import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
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
 * This is an example of a dropdown.
 */
export const Default = {
  render: () => html`
    <style>
      #anchor--templates-dropdown--default .innerZoomElementWrapper {
        min-height: 500px;
      }
    </style>

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

    <script type="module">
      await Promise.all([customElements.whenDefined('sd-navigation-item')]).then(() => {
        const dropdown = document.getElementById('dropdown');
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
