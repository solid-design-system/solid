import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { withActions } from 'storybook/actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-option');
const { generateTemplate } = storybookTemplate('sd-option');
const { overrideArgs } = storybookHelpers('sd-option');
const { generateScreenshotStory } = storybookUtilities;

/**
 * Options define the selectable items within various form controls such as `sd-select`
 */

export default {
  title: 'Components/sd-option/Screenshots: sd-option',
  tags: ['!autodocs', 'skip-a11y-[aria-required-parent]'],
  component: 'sd-option',
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Option' }),
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
      },
      options: {}
    }
  },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-option in its default state.
 */

export const Default = {
  name: 'Default',
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Option' }),
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `disabled` attribute to disable an option. Clicks will be suppressed until the disabled state is removed. Use the `checkbox` attribute to prefix a styled checkbox. Enabled automatically when using `sd-select` with attribute `checklist` set to `true`.
 */

export const DisabledCheckbox = {
  name: 'Disabled x Checkbox',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'disabled',
          values: [false, true]
        },
        y: {
          type: 'attribute',
          name: 'checkbox',
          values: [false, true]
        }
      },
      constants: { type: 'attribute', name: 'disabled', value: true },
      args
    });
  }
};

/**
 * Use the `size` attribute to change a select’s size. This will be inherited automatically from the `size` attribute of the parent `sd-select`.
 */

export const SizeCheckbox = {
  name: 'Size x Checkbox',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'size'
        },
        y: {
          type: 'attribute',
          name: 'checkbox',
          values: [false, true]
        }
      },
      constants: { type: 'attribute', name: 'checkbox', value: true },
      args
    });
  }
};

/**
 * Shows available slots.
 */

export const Slots = {
  name: 'Slots',
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
                      ? `<div class="slot slot--border slot--background h-8 w-[100px]" aria-label="Slot"></div>`
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
              value: '<sd-icon slot="left" name="system/image"></sd-icon>'
            },
            {
              type: 'slot',
              name: 'right',
              value: '<sd-icon slot="right" name="system/image"></sd-icon>'
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
  name: 'Parts',
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
          value: '<sd-icon slot="left" name="system/image"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'default',
          value: 'Option'
        },
        {
          type: 'slot',
          name: 'right',
          value: '<sd-icon slot="right" name="system/image"></sd-icon>'
        }
      ],
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default, DisabledCheckbox, SizeCheckbox, Slots, Parts]);
