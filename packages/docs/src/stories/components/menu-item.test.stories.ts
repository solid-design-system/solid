import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import cx from 'classix';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-menu-item');
const { overrideArgs } = storybookHelpers('sd-menu-item');
const { generateTemplate } = storybookTemplate('sd-menu-item');
const { generateScreenshotStory } = storybookUtilities;

const defaultSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value: 'Menu Item 1'
};

const iconSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'icon-indent',
  value: `<sd-icon name="system/image" slot="icon-indent"></sd-icon>`
};

export default {
  title: 'Components/sd-menu-item/Screenshots: sd-menu-item',
  component: 'sd-menu-item',
  tags: ['!autodocs'],
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
      url: ''
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Menu item 1' }),
  argTypes
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const IconIndent = {
  name: 'Icon Indent',
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: [
        {
          type: 'slot',
          name: 'icon-indent',
          value: iconSlotConstant.value
        }
      ]
    });
  }
};

export const Checked = {
  name: 'Checked',
  render: (args: any) => {
    return generateTemplate({
      args,
      axis: {
        x: { type: 'attribute', name: 'checked', values: [true, false] },
        y: { type: 'attribute', name: 'type', values: ['checkbox'] }
      }
    });
  }
};

export const Disabled = {
  name: 'Disabled',
  render: (args: any) => {
    return generateTemplate({
      args,
      axis: {
        x: { type: 'attribute', name: 'disabled', values: [true, false] }
      }
    });
  }
};

export const Slots = {
  name: 'Slots',
  render: (args: any) => {
    return html`
      ${['icon-indent', 'default', 'submenu'].map(slot =>
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=...',
              values: [
                {
                  value:
                    slot === 'default'
                      ? `<div class="slot slot--border slot--background h-8 w-[100px]">Slot</div>`
                      : `<div slot='${slot}' class="${cx(
                          'slot slot--border slot--background h-6',
                          slot === 'description' || slot === 'children' ? 'w-full' : 'w-6'
                        )}"></div>`,
                  title: slot
                }
              ]
            }
          },
          constants: [
            { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
            defaultSlotConstant,
            iconSlotConstant,
            {
              type: 'slot',
              name: 'submenu',
              value: `<sd-menu slot="submenu"><sd-menu-item>Submenu Item 1</sd-menu-item><sd-menu-item>Submenu Item 2</sd-menu-item></sd-menu>`
            }
          ],
          args: overrideArgs({ type: 'slot', name: 'default', value: '' }, args)
        })
      )}
    `;
  }
};

export const Combination = generateScreenshotStory([Default, IconIndent, Checked, Disabled, Slots]);
