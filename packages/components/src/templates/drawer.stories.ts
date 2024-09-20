import '../solid-components';
import { html } from 'lit-html';

/**
 * This example shows a drawer containing a navigation list.
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Drawer',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3000-10344&t=JCsisVFNkWSlhSSN-4'
    },
    chromatic: { disableSnapshot: true }
  },
  decorators: [
    (story: any) =>
      html` <style>
          #anchor--templates-drawer-with-navigation--default .innerZoomElementWrapper {
            background-color: #ecf0f9;
            min-height: 750px;
          }
        </style>
        ${story()}`
  ] as unknown
};

/**
 * ### Tablet Navigation - Level 1
 */
export const Default = {
  name: 'Tablet Navigation - Level 1',
  render: () => html`
    <style>
      sd-navigation-item::part(content) {
        display: flex;
        align-items: center;
      }

      sd-drawer::part(panel) {
        border-top: 2px solid #e9e9e9;
        border-right: 2px solid #e9e9e9;
      }

      sd-drawer::part(overlay) {
        background-color: #051530;
      }

      sd-drawer::part(body),
      sd-drawer::part(footer) {
        padding: 0;
      }
    </style>

    <sd-drawer open placement="end">
      <nav>
        <sd-navigation-item vertical current><b>Home page</b></sd-navigation-item>
        <sd-navigation-item vertical chevron divider>About Us</sd-navigation-item>
        <sd-navigation-item vertical chevron divider>Markets</sd-navigation-item>
        <sd-navigation-item vertical chevron divider>Press service</sd-navigation-item>
        <sd-navigation-item vertical chevron divider>Sustainability</sd-navigation-item>
        <sd-navigation-item vertical chevron divider>Career</sd-navigation-item>
      </nav>

      <nav slot="footer" class="bg-neutral-100">
        <sd-navigation-item vertical class="flex align-center">
          <sd-icon name="system/user" class="h-6 w-6 mr-2"></sd-icon>
          My depot
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center">
          <sd-icon name="system/lock-locked" class="h-6 w-6 mr-2"></sd-icon>
          My application
        </sd-navigation-item>
        <sd-navigation-item vertical divider class="flex align-center">
          <sd-icon name="system/website" class="h-6 w-6 mr-2"></sd-icon>
          Our further appearances
        </sd-navigation-item>
      </nav>
    </sd-drawer>
  `
};
