import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */

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
  name: 'Dropdown with navigation items',
  render: () => html`
    <style>
      #anchor--templates-dropdown--default .innerZoomElementWrapper {
        min-height: 500px;
      }
    </style>

    <sd-dropdown open>
      <sd-navigation-item slot="trigger" vertical>
        <sd-icon name="system/globe" class="h-6 w-6"></sd-icon>
      </sd-navigation-item>
      <div class="flex flex-col p-2">
        <h4 class="sd-headline sd-headline--size-base p-4">Please select a country</h4>
        <sd-navigation-item class="font-bold" href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/"
          >Austria</sd-navigation-item
        >
        <sd-navigation-item class="font-bold" href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/"
          >Denmark</sd-navigation-item
        >
        <sd-navigation-item class="font-bold" href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/"
          >Finland</sd-navigation-item
        >
        <sd-navigation-item class="font-bold" href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/"
          >France</sd-navigation-item
        >
        <sd-navigation-item class="font-bold" href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/"
          >Germany</sd-navigation-item
        >
      </div>
    </sd-dropdown>
  `
};
