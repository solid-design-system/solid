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
 * This is an example of dropdowns with a list of navigation items.
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
      sd-navigation-item::part(chevron) {
        transform: rotate(0deg);
      }
      sd-dropdown[open] sd-navigation-item::part(chevron) {
        transform: rotate(180deg);
      }
    </style>
    <div class="flex gap-12">
      <sd-dropdown no-auto-size>
        <sd-navigation-item slot="trigger" vertical chevron>Trigger </sd-navigation-item>
        <div class="flex flex-col p-4">
          <h4 class="sd-headline sd-headline--size-base">Nisi eu excepteur anim esse</h4>
          <sd-navigation-item href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/"
            >Navigation</sd-navigation-item
          >
          <sd-navigation-item href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/"
            >Navigation</sd-navigation-item
          >
          <sd-navigation-item href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/"
            >Navigation</sd-navigation-item
          >
          <sd-navigation-item href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/"
            >Navigation</sd-navigation-item
          >
          <sd-navigation-item href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/"
            >Navigation</sd-navigation-item
          >
        </div>
      </sd-dropdown>

      <sd-dropdown no-auto-size>
        <sd-navigation-item slot="trigger" vertical chevron>Trigger </sd-navigation-item>
        <div class="flex flex-col p-4">
          <h4 class="sd-headline sd-headline--size-base">Nisi eu excepteur anim esse</h4>
          <sd-navigation-item href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/">
            <sd-icon name="system/image" library="default"></sd-icon>
            Navigation
          </sd-navigation-item>
          <sd-navigation-item href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/">
            <sd-icon name="system/image" library="default"></sd-icon>
            Navigation
          </sd-navigation-item>
          <sd-navigation-item href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/">
            <sd-icon name="system/image" library="default"></sd-icon>
            Navigation
          </sd-navigation-item>
          <sd-navigation-item href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/">
            <sd-icon name="system/image" library="default"></sd-icon>
            Navigation
          </sd-navigation-item>
          <sd-navigation-item href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/">
            <sd-icon name="system/image" library="default"></sd-icon>
            Navigation
          </sd-navigation-item>
        </div>
      </sd-dropdown>
    </div>
  `
};
