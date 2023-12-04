import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-select');
const { generateTemplate } = storybookTemplate('sd-select');
const { overrideArgs } = storybookHelpers('sd-select');

// Reusable Constants
const twoOptionsConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value: '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option>'
};
const threeOptionsConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value:
    '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
};
const fiveOptionsConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value:
    '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option><sd-option value="option-4">Option 4</sd-option><sd-option value="option-5">Option 5</sd-option>'
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

// Stories
export default {
  title: 'Components/sd-select',
  component: 'sd-select',
  args: overrideArgs([
    clearableConstant,
    threeOptionsConstant,
    labelConstant,
    { type: 'attribute', name: 'placeholder', value: 'Please Select' },
    { type: 'attribute', name: 'max-options-visible', value: 3 }
  ]),
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
  }
};

/**
 * This shows sd-select in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div class="h-[260px] w-[420px]">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `size` attribute to change a select’s size. It will cascade to slotted `sd-option` elements.
 */

export const SizeMultiple = {
  name: 'Size x Multiple',
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => {
    return html`<div class="h-[340px]">
      ${generateTemplate({
        options: {
          classes: 'w-full'
        },
        axis: {
          x: {
            type: 'attribute',
            name: 'size'
          },
          y: {
            type: 'attribute',
            name: 'checklist',
            values: [false, true]
          }
        },
        constants: [
          fiveOptionsConstant,
          leftSlotConstant,
          multipleConstant,
          { type: 'attribute', name: 'value', value: 'option-1 option-2 option-3 option-4' }
        ],
        args: null
      })}
    </div>`;
  }
};

/**
 * To allow multiple options to be selected, use the `multiple` attribute. It’s a good practice to use `clearable` when this option is enabled. To use the checkbox with tags variant, set the `checklist` variant to `true`.  To set multiple values at once, set value to a space-delimited list of values.  The preferred placement of the select’s listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.
 */

export const DisabledMultiple = {
  name: 'Disabled x Multiple',
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => {
    return html`<div class="h-[340px] w-full">
      ${generateTemplate({
        options: {
          classes: 'w-full [&>tbody>tr>td]:w-[50%]'
        },
        axis: {
          y: {
            type: 'attribute',
            name: 'checklist',
            values: [false, true]
          },
          x: {
            type: 'attribute',
            name: 'disabled',
            values: [false, true]
          }
        },
        constants: [
          clearableConstant,
          multipleConstant,
          fiveOptionsConstant,
          {
            type: 'attribute',
            name: 'value',
            value: 'option-1 option-2 option-3 option-4'
          }
        ],
        args: null
      })}
    </div>`;
  }
};

/**
 * Shows the validation styles when the `required` and `enableValidation` attributes are set to `true`.
 */

export const ValidInvalid = {
  name: 'Valid x Invalid',
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => {
    const sharedConstants: ConstantDefinition[] = [
      { type: 'attribute', name: 'clearable', value: true },
      { type: 'attribute', name: 'required', value: true },
      { type: 'attribute', name: 'checklist', value: true },
      helpTextConstant,
      leftSlotConstant,
      twoOptionsConstant
    ];

    return html`
      <div class="w-full">
        ${generateTemplate({
          axis: {
            x: {
              type: 'attribute',
              name: 'value',
              values: ['option-1', '']
            },
            y: {
              type: 'attribute',
              name: 'multiple',
              values: [false, true]
            }
          },
          constants: [
            ...sharedConstants,
            { type: 'attribute', name: 'label', value: 'Required' },
            { type: 'attribute', name: 'name', value: 'required field' }
          ],
          args: null
        })}
      </div>
    `;
  },
  play: ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const sdSelects = canvasElement.querySelectorAll('sd-select');
    sdSelects.forEach(sdSelect => {
      if (sdSelect.value) {
        sdSelect.setAttribute('data-user-valid', 'true');
      } else {
        sdSelect.setAttribute('data-user-invalid', 'true');
      }
    });
  }
};

/**
 * Shows available slots. The `label` and `help-text` slots will overwrite their corresponding attributes.
 */

export const Slots = {
  parameters: {
    controls: {
      include: []
    }
  },
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
                          slot === 'label' || slot === 'help-text' ? 'w-20' : 'w-6'
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
            twoOptionsConstant
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
      include: []
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
  render: () => {
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
 * Use `<sl-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won’t be announced by most assistive devices.
 */

export const SampleGroupingOptions = {
  name: 'Sample: Grouping Options',
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
        args
      })}
    </div>`;
  }
};

/**
 * Demonstrates the form behavior with validation styles when the `required` attribute is set to `true`.
 */

export const SampleForm = {
  name: 'Sample: Form',
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => {
    const sharedConstants: ConstantDefinition[] = [
      { type: 'attribute', name: 'form', value: 'testForm' },
      { type: 'attribute', name: 'clearable', value: true },
      { type: 'attribute', name: 'required', value: true },
      { type: 'attribute', name: 'placeholder', value: '.*' },
      { type: 'attribute', name: 'help-text', value: 'selection must be made' },
      twoOptionsConstant
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
