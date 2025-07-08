import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from 'storybook/actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-menu-item');
const { overrideArgs } = storybookHelpers('sd-menu-item');
const { generateTemplate } = storybookTemplate('sd-menu-item');

export default {
  tags: ['!dev', 'autodocs', 'skip-a11y-[aria-required-parent]'],
  title: 'Components/sd-menu-item',
  component: 'sd-menu-item',
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Menu item 1' }),
  argTypes,
  parameters: {
    ...parameters,
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-required-parent',
            enabled: false
          }
        ]
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Solid-DS-%E2%80%93-Component-Docs?node-id=15967-5252&t=ZM8naV6M5izZj27w-0'
    }
  },
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `icon-indent` slot to add system icons.
 */
export const iconIndent = {
  render: () => html`
    <sd-menu-item>
      Menu item 1
      <sd-icon name="system/image" slot="icon-indent"></sd-icon>
    </sd-menu-item>
  `
};

/**
 * Set the `type` attribute to ”checkbox” to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.
 */
export const Checkmark = {
  render: () => html` <sd-menu-item type="checkbox" checked> Menu item 1 </sd-menu-item> `
};

/**
 * Use the `disabled` attribute to disable the menu item so it cannot be selected.
 */
export const Disabled = {
  render: () => html` <sd-menu-item disabled> Menu item 1 </sd-menu-item> `
};
