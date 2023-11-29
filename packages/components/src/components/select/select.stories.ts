import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-select');
const { generateTemplate } = storybookTemplate('sd-select');
const { overrideArgs } = storybookHelpers('sd-select');

// Reusable Constants
const defaultSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value:
    '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
};

const defaultSlotConstant2: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value: '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option>'
};

const leftSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'prefix',
  value: '<sd-icon slot="prefix" library="global-resources" name="system/picture"></sd-icon>'
};

const clearableConstant: ConstantDefinition = { type: 'attribute', name: 'clearable', value: true };

const multipleConstant: ConstantDefinition = { type: 'attribute', name: 'multiple', value: true };

const helpTextConstant: ConstantDefinition = { type: 'attribute', name: 'help-text', value: 'help-text' };

const labelConstant: ConstantDefinition = { type: 'attribute', name: 'label', value: 'Label' };

export default {
  title: 'Components/sd-select',
  component: 'sd-select',
  args: overrideArgs([defaultSlotConstant]),
  argTypes: {
    ...argTypes,
    'value-attr': {
      name: 'value',
      table: {
        category: 'attributes',
        defaultValue: ''
      },
      description:
        'The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the value attribute will be a space-delimited list of values based on the options selected, and the value property will be an array. **For this reason, values must not contain spaces.**',
      control: 'text'
    }
  },
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZphyVFsUHL72voMrJagMeo/Select?node-id=1002%3A2284&mode=dev'
    }
  },
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

export const Labels = {
  parameters: {
    controls: {
      exclude: ['label']
    }
  },
  render: (args: any) => {
    return html`<div class="h-[260px] w-[420px]">
      ${generateTemplate({
        constants: [labelConstant],
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
          leftSlotConstant
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
            name: 'checklist',
            values: [false, true]
          }
        },
        constants: [clearableConstant, multipleConstant, defaultSlotConstant],
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
        constants: [defaultSlotConstant],
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
        constants: [defaultSlotConstant2],
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
 * Demonstrates the form behavior with validation styles when the `required` attribute is set to `true`.
 */

export const Validation = {
  parameters: {
    controls: {
      include: []
    }
  },
  render: (args: any) => {
    const sharedConstants: ConstantDefinition[] = [
      { type: 'attribute', name: 'form', value: 'testForm' },
      { type: 'attribute', name: 'clearable', value: true },
      { type: 'attribute', name: 'required', value: true },
      { type: 'attribute', name: 'placeholder', value: '.*' },
      { type: 'attribute', name: 'help-text', value: 'selection must be made' },
      defaultSlotConstant2
    ];

    return html`
      <form action="" method="get" id="testForm" name="testForm" class="w-[370px]">
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              ...sharedConstants,
              { type: 'attribute', name: 'label', value: 'Required' },
              { type: 'attribute', name: 'name', value: 'required field' }
            ],
            args: null
          })}
        </div>
        <div class="mb-2">
          ${generateTemplate({
            constants: [
              ...sharedConstants,
              { type: 'attribute', name: 'label', value: 'Required Multiple' },
              { type: 'attribute', name: 'name', value: 'required multiple field' },
              multipleConstant
            ],
            args: null
          })}
        </div>
        <div class="mb-4">
          ${generateTemplate({
            constants: [
              ...sharedConstants,
              { type: 'attribute', name: 'label', value: 'Required Multiple Checklist' },
              { type: 'attribute', name: 'name', value: 'required multiple checklist field' },
              multipleConstant,
              { type: 'attribute', name: 'checklist', value: true }
            ],
            args: null
          })}
        </div>
        <sd-button type="submit">Submit</sd-button>
      </form>
      <script>
        function handleSubmit(event) {
          const form = document.querySelector('#testForm');
          const sdSelects = Array.from(document.querySelectorAll('sd-select'));

          const isValid = sdSelect => sdSelect.checkValidity();

          if (sdSelects.every(isValid)) {
            event.preventDefault(); // Prevent the default form submission behavior

            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData);

            alert('Form submitted successfully with the following values: ' + JSON.stringify(formValues, null, 2));
          }
        }

        document.querySelector('#testForm').addEventListener('submit', handleSubmit);
      </script>
    `;
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
            clearableConstant,
            labelConstant,
            helpTextConstant,
            leftSlotConstant,
            defaultSlotConstant2
          ],
          args
        })
      )}
    `;
  }
};

/**
 * Use the `form-control`,
  `form-control-label`,
  `form-control-input`,
  `form-control-help-text`,
  `combobox`,
  `prefix`,
  `display-input`,
  `listbox`,
  `tags`,
  `tag`,
  `tag__base`,
  `tag__content`,
  `tag__remove-button`,
  `tag__remove-button__base`,
  `clear-button`, and
  `expand-icon` part selectors to customize the select component.
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
        { type: 'attribute', name: 'checklist', value: true },
        { type: 'attribute', name: 'value', value: 'option-1 option-2' },
        clearableConstant,
        helpTextConstant,
        labelConstant,
        leftSlotConstant,
        multipleConstant
      ],
      args
    });
  }
};

/**
 * `sd-select` is fully accessibile via keyboard.
 */

export const Mouseless = {
  parameters: {
    controls: {
      include: []
    }
  },
  render: (args: any) => {
    const sharedConstants: ConstantDefinition[] = [
      {
        type: 'slot',
        name: 'default',
        value: '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option>'
      }
    ];

    return html`<div class="mouseless h-[260px] w-full flex gap-4">
      ${generateTemplate({
        constants: [...sharedConstants, { type: 'attribute', name: 'label', value: 'Default' }],
        args: null
      })}
      ${generateTemplate({
        constants: [...sharedConstants, multipleConstant, { type: 'attribute', name: 'label', value: 'Multiple' }],
        args: null
      })}
      ${generateTemplate({
        constants: [
          ...sharedConstants,
          multipleConstant,
          { type: 'attribute', name: 'checklist', value: true },
          { type: 'attribute', name: 'label', value: 'Multiple Checklist' }
        ],
        args: null
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-select');
    await waitUntil(() => el?.shadowRoot?.querySelector('input'));
    el?.shadowRoot?.querySelector('input')!.focus();
  }
};

/**
 * DEV: debug form behavior
 */

// export const Dev = {
//   parameters: {
//     controls: {
//       include: []
//     }
//   },
//   render: (args: any) => {
//     return html`
//       <form class="[&>*]:mb-4" action="" method="get" id="testForm" name="testForm">
//         <input class="border w-full" name="field1" form="testForm" required />
//         <sd-input name="field2" form="testForm" required></sd-input>
//         <sd-select required name="field3" form="testForm"><sd-option value="option-1">Option 1</sd-option></sd-select>
//         <sd-button
//           @click=${() => {
//             const form: HTMLFormElement = document.querySelector('#testForm')!;

//             console.error('CLICKED SUBMIT');
//             console.log(form.checkValidity());
//           }}
//           type="submit"
//           >Submit</sd-button
//         >
//         <sd-button
//           @click=${() => {
//             const sdSelect = document.querySelector('sd-select');
//             sdSelect?.focus();
//           }}
//           >Focus</sd-button
//         >
//       </form>
//       <script>
//         function handleSubmit(event) {
//           const form = document.querySelector('#testForm');

//           console.error('HANDLE SUBMIT');
//           console.log(form.checkValidity());
//         }

//         document.querySelector('#testForm').addEventListener('submit', handleSubmit);
//       </script>
//     `;
//   }
// };
