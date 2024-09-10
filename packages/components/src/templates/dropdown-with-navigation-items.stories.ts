import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Dropdown with navigation items',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 *
 * This is an example of a dropdown.
 *
 * ```
 * ```
 */
export const Default = {
  render: () => html`
    <style>
      #anchor--templates-dropdown-with-navigation-items--default .innerZoomElementWrapper {
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
