import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-select');
const { generateTemplate } = storybookTemplate('sd-select');
const { overrideArgs } = storybookHelpers('sd-select');

export default {
  title: 'Components/sd-select',
  component: 'sd-select',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value:
        '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions, (story: any) => html`<div>${story()}</div>`] as unknown
};

/**
 * This shows sd-select in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div class="h-[220px] w-[420px]">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.
 */

export const Label = {
  parameters: {
    controls: {
      exclude: ['label']
    }
  },
  render: (args: any) => {
    return html`<div class="h-[260px] w-[420px]">
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'label',
            value: 'Label'
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the help-text slot instead.
 */

export const HelpText = {
  name: 'Help Text',
  parameters: {
    controls: {
      exclude: ['help-text']
    }
  },
  render: (args: any) => {
    return html`<div class="h-[260px] w-[420px]">
      ${generateTemplate({
        constants: [
          {
            type: 'slot',
            name: 'default',
            value:
              '<sd-option value="novice">Novice</sd-option><sd-option value="intermediate">Intermediate</sd-option><sd-option value="advanced">Advanced</sd-option>'
          },
          {
            type: 'attribute',
            name: 'help-text',
            value: 'Please tell us your skill level.'
          },
          {
            type: 'attribute',
            name: 'label',
            value: 'Experience'
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Use the `placeholder` attribute to add a placeholder.  We use the localized string "Please select" by default.
 */

export const Placeholder = {
  parameters: {
    controls: {
      include: ['placeholder']
    }
  },
  render: (args: any) => {
    return html`<div class="h-[220px] w-[420px]">
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'placeholder',
            value: 'Placeholder'
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.
 */

export const Clearable = {
  parameters: {
    controls: {
      exclude: ['clearable']
    }
  },
  render: (args: any) => {
    return html`<div class="h-[220px] w-[420px]">
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'clearable',
            value: true
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * Use the `disabled` attribute to disable a select.
 */

export const Disabled = {
  parameters: {
    controls: {
      exclude: ['disabled']
    }
  },
  render: (args: any) => {
    return html`<div class="w-[420px]">
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'disabled',
            value: true
          },
          {
            type: 'slot',
            name: 'prefix',
            value: '<sd-icon slot="prefix" library="global-resources" name="system/picture"></sd-icon>'
          }
        ],
        args
      })}
    </div>`;
  }
};

/**
 * To allow multiple options to be selected, use the `multiple` attribute. It’s a good practice to use `clearable` when this option is enabled. To use the checkbox with tags variant, set the `checklist` variant to `true`.  To set multiple values at once, set value to a space-delimited list of values.
 */

export const Multiple = {
  parameters: {
    controls: {
      include: []
    }
  },
  render: (args: any) => {
    return html`<div class="h-[340px]">
      ${generateTemplate({
        options: {
          classes: 'w-full [&>tbody>tr>td]:w-[50%]'
        },
        axis: {
          x: {
            type: 'attribute',
            name: 'checklist'
          }
        },
        constants: [
          {
            type: 'attribute',
            name: 'clearable',
            value: true
          },
          {
            type: 'attribute',
            name: 'multiple',
            value: true
          },
          {
            type: 'slot',
            name: 'default',
            value:
              '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
          }
        ],
        args: null
      })}
    </div>`;
  }
};

/**
 * Use the `size` attribute to change a select’s size. Note that `size` does not apply to listbox options.
 */

export const Sizes = {
  parameters: {
    controls: {
      include: []
    }
  },
  render: (args: any) => {
    return html`<div class="h-[340px]">
      ${generateTemplate({
        options: {
          classes: 'w-full'
        },
        axis: {
          x: {
            type: 'attribute',
            name: 'size'
          }
        },
        constants: [
          {
            type: 'slot',
            name: 'default',
            value:
              '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
          }
        ],
        args: null
      })}
    </div>`;
  }
};

/**
 * The preferred placement of the select’s listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.
 */

export const Placement = {
  parameters: {
    controls: {
      include: []
    }
  },
  render: (args: any) => {
    return html`<div class="h-[290px]">
      ${generateTemplate({
        options: {
          classes: 'w-full'
        },
        axis: {
          x: {
            type: 'attribute',
            name: 'placement',
            values: ['bottom', 'top']
          }
        },
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option>'
          }
        ],
        args: null
      })}
    </div>`;
  }
};

/**
 * Use `<sl-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won’t be announced by most assistive devices.
 */

export const GroupingOptions = {
  parameters: {
    controls: {
      include: []
    }
  },
  render: (args: any) => {
    return html`<div class="h-[290px] w-[420px]">
      ${generateTemplate({
        constants: [
          {
            type: 'slot',
            name: 'default',
            value:
              '<small>Odd Options</small><sd-option value="option-1">Option 1</sd-option><sd-option value="option-3">Option 3</sd-option><sd-divider class="mb-2"></sd-divider><small>Even Options</small><sd-option value="option-2">Option 2</sd-option>'
          }
        ],
        args: null
      })}
    </div>`;
  }
};

/**
 * Shows available slots. The `label` and `help-text` slots will overwrite their corresponding attributes.
 */

export const Slots = {
  render: (args: any) => {
    return html`
      ${['default', 'label', 'prefix', 'clear-icon', 'expand-icon', 'help-text'].map(slot =>
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
                      ? `<div class="slot slot--border slot--background h-8 w-full"></div>`
                      : `<div slot='${slot}' class="slot slot--border slot--background h-6 ${
                          slot === 'label' || slot === 'help-text' ? 'w-18' : 'w-6'
                        }"></div>`,
                  title: slot
                }
              ]
            }
          },
          constants: [
            { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
            { type: 'attribute', name: 'clearable', value: true },

            { type: 'attribute', name: 'label', value: 'Label' },
            { type: 'attribute', name: 'help-text', value: 'help-text' },
            {
              type: 'slot',
              name: 'left',
              value: '<sd-icon slot="prefix" library="global-resources" name="system/picture"></sd-icon>'
            },
            {
              type: 'slot',
              name: 'default',
              value: '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option>'
            }
          ],
          args
        })
      )}
    `;
  }
};

/**
 * Use the `form-control`, `form-control-label`, `form-control-input`, `form-control-help-text`, `base`, `border`, `input`, `left`, `clear-button`, and `right` part selectors to customize the input.
 */

const partsArr = [
  'form-control',
  'form-control-label',
  'form-control-input',
  'form-control-help-text',
  'combobox',
  'prefix',
  'display-input',
  'listbox',
  'tags',
  'tag',
  'tag__base',
  'tag__content',
  'tag__remove-button',
  'tag__remove-button__base',
  'clear-button',
  'expand-icon'
];

export const Parts = {
  parameters: {
    controls: {
      exclude: partsArr
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-select::part(...){outline: solid 2px red}',
          values: partsArr.map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-select::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'attribute', name: 'multiple', value: true },
        { type: 'attribute', name: 'checklist', value: true },
        { type: 'attribute', name: 'value', value: 'option-1 option-2' },
        { type: 'attribute', name: 'clearable', value: true },
        { type: 'attribute', name: 'label', value: 'Label' },
        { type: 'attribute', name: 'help-text', value: 'help-text' },
        {
          type: 'slot',
          name: 'prefix',
          value: '<sd-icon slot="prefix" library="global-resources" name="system/picture"></sd-icon>'
        }
      ],
      args
    });
  }
};

/**
 * `sd-select` is fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless w-[250px]">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-select');
    await waitUntil(() => el?.shadowRoot?.querySelector('input'));
    el?.shadowRoot?.querySelector('input')!.focus();
  }
};

/**
 * Dev: Temporary development story
 */

export const Dev = {
  render: (args: any) => {
    return html`<div>
      <sd-select>
        <sd-option value="1">Option 1</sd-option>
        <sd-option value="2">Option 2</sd-option>
        <sd-option value="3">Option 3</sd-option>
      </sd-select>
      <sd-select>
        <sd-option value="1">Option 1</sd-option>
        <sd-option value="2">Option 2</sd-option>
        <sd-option value="3">Option 3</sd-option>
      </sd-select>
    </div>`;
  }
};
