import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookHelpers, storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-menu');
const { overrideArgs } = storybookHelpers('sd-menu');
const { generateTemplate } = storybookTemplate('sd-menu');

/**
 * **Note:** When first loading this page, the `focus-visible` styles applied to the `sd-menu-item` component will be visible. This is a browser specific behaviour. After you interact with the page, the correct styles will be displayed. This is only happening when the `sd-menu` is rendered in isolation, if rendered inside a `sd-dropdown` it will not happen.
 */

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-menu',
  component: 'sd-menu',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-menu-item>Menu item 1</sd-menu-item>
        <sd-menu-item>Menu item 2</sd-menu-item>
        <sd-menu-item>Menu item 3</sd-menu-item>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  decorators: [
    (story: any) =>
      html`<style>
          .innerZoomElementWrapper #story--components-sd-menu--default,
          #anchor--components-sd-menu--default .innerZoomElementWrapper,
          #anchor--components-sd-menu--icon .innerZoomElementWrapper,
          #anchor--components-sd-menu--checkmark .innerZoomElementWrapper,
          #anchor--components-sd-menu--submenu .innerZoomElementWrapper,
          #anchor--components-sd-menu--grouping .innerZoomElementWrapper,
          #anchor--components-sd-menu--disabled .innerZoomElementWrapper {
            min-height: 450px;
          }
        </style>
        ${story()}`
  ] as unknown
};

export const Default = {
  render: (args: any) => {
    return html` <sd-dropdown distance="4" rounded open>
      <sd-button variant="secondary" slot="trigger">
        Menu
        <sd-icon library="_internal" name="chevron-down" slot="icon-right"></sd-icon>
      </sd-button>
      ${generateTemplate({
        args
      })}
    </sd-dropdown>`;
  }
};

/**
 * Use the `icon-indent` slot to add system icons.
 */
export const Icon = {
  render: () => html`
    <sd-dropdown distance="4" rounded>
      <sd-button variant="secondary" slot="trigger">
        <sd-icon name="system/more-functions" label="Icon only"></sd-icon>
      </sd-button>
      <sd-menu>
        <sd-menu-item>
          <sd-icon name="system/image" slot="icon-indent"></sd-icon>
          Menu item 1
        </sd-menu-item>
        <sd-menu-item>
          <sd-icon name="system/image" slot="icon-indent"></sd-icon>
          Menu item 2
        </sd-menu-item>
        <sd-menu-item>
          <sd-icon name="system/image" slot="icon-indent"></sd-icon>
          Menu item 3
        </sd-menu-item>
      </sd-menu>
    </sd-dropdown>
  `
};

/**
 * Set the `type` attribute to `checkbox` to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.
 */
export const Checkmark = {
  render: () => html`
    <div class="w-[180px]">
      <sd-menu>
        <sd-menu-item type="checkbox" checked>Menu item 1</sd-menu-item>
        <sd-menu-item type="checkbox" checked>Menu item 2</sd-menu-item>
        <sd-menu-item type="checkbox">Menu item 3</sd-menu-item>
      </sd-menu>
    </div>
  `
};

/**
 * To create a submenu, nest an `<sd-menu slot="submenu">` in any menu item.
 */
export const Submenu = {
  render: () => html`
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
  `
};

/**
 * Use dividers to group menu-items in a menu.
 */
export const Grouping = {
  render: () => html`
    <sd-dropdown distance="4" rounded>
      <sd-button variant="secondary" slot="trigger">
        Menu
        <sd-icon library="_internal" name="chevron-down" slot="icon-right"></sd-icon>
      </sd-button>
      <sd-menu>
        <sd-menu-item>Menu item 1</sd-menu-item>
        <sd-menu-item>Menu item 2</sd-menu-item>
        <sd-menu-item>Menu item 3</sd-menu-item>
        <sd-menu-item>Menu item 4</sd-menu-item>
        <sd-menu-item>Menu item 5</sd-menu-item>
        <sd-divider></sd-divider>
        <sd-menu-item>Menu item 6</sd-menu-item>
        <sd-menu-item>Menu item 7</sd-menu-item>
      </sd-menu>
    </sd-dropdown>
  `
};

/**
 * Use the `disabled` attribute to disable the menu item so it cannot be selected.
 */
export const Disabled = {
  render: () => html`
    <sd-dropdown distance="4" rounded>
      <sd-button variant="secondary" slot="trigger">Menu</sd-button>
      <sd-menu>
        <sd-menu-item disabled>Disabled menu item 1</sd-menu-item>
        <sd-menu-item>Menu item 2</sd-menu-item>
        <sd-menu-item disabled>Disabled menu item 3</sd-menu-item>
      </sd-menu>
    </sd-dropdown>
  `
};
