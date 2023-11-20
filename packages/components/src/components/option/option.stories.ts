import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';
const { overrideArgs } = storybookHelpers('sd-option');
import { html } from 'lit-html';

const { argTypes, args, parameters } = storybookDefaults('sd-option');
const { generateTemplate } = storybookTemplate('sd-option');

/**
 * Options define the selectable items within various form controls such as `sd-select`
 */

export default {
  title: 'Components/sd-option',
  component: 'sd-option',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-option in its default state.
 */

export const Default = {
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Option' }),
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `disabled` attribute to disable an option. Clicks will be suppressed until the disabled state is removed.
 */

export const Disabled = {
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Option' }),
  render: (args: any) => {
    return generateTemplate({
      constants: { type: 'attribute', name: 'disabled', value: true },
      args
    });
  }
};

/**
 * Shows available slots.
 */

export const Slots = {
  parameters: {
    controls: {
      exclude: ['default', 'left', 'right']
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Option' }),
  render: (args: any) => {
    return html`
      ${['default', 'left', 'right'].map(slot =>
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
                      ? `<div class="slot slot--border slot--background h-8 w-[100px]"></div>`
                      : `<div slot='${slot}' class="slot slot--border slot--background h-6 ${
                          slot === 'default' ? 'w-18' : 'w-6'
                        }"></div>`,
                  title: slot
                }
              ]
            }
          },
          constants: [
            {
              type: 'slot',
              name: 'left',
              value: '<sd-icon slot="left" library="global-resources" name="system/picture"></sd-icon>'
            },
            {
              type: 'slot',
              name: 'right',
              value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
            }
          ],
          args
        })
      )}
    `;
  }
};

/**
 * Use the `base`, `label`, `left`, `right` part selectors to customize the option.
 */

export const Parts = {
  parameters: {
    controls: {
      exclude: ['base', 'label', 'left', 'right']
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-option::part(...){outline: solid 2px red}',
          values: ['base', 'label', 'left', 'right'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-option::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        {
          type: 'slot',
          name: 'left',
          value: '<sd-icon slot="left" library="global-resources" name="system/picture"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'default',
          value: 'Option'
        },
        {
          type: 'slot',
          name: 'right',
          value: '<sd-icon slot="right" library="global-resources" name="system/picture"></sd-icon>'
        }
      ],
      args
    });
  }
};
