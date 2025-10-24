/* eslint-disable lit/attribute-value-entities */

import '../../../../components/src/solid-components';
import {
  type ConstantDefinition,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { highlightOptionRenderer } from '../../../../components/src/components/combobox/option-renderer';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { userEvent } from 'storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
import type SdCombobox from '../../../../components/src/components/combobox/combobox';
const { argTypes, parameters } = storybookDefaults('sd-combobox');
const { generateTemplate } = storybookTemplate('sd-combobox');
const { overrideArgs } = storybookHelpers('sd-combobox');
const { generateScreenshotStory } = storybookUtilities;

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

const twentyOptionsConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value: `
    ${Array.from({ length: 20 }, (_, i) => `<sd-option value="option-${i + 1}">Option ${i + 1}</sd-option>`).join('')}
  `
};

const clearableConstant: ConstantDefinition = { type: 'attribute', name: 'clearable', value: true };
const multipleConstant: ConstantDefinition = { type: 'attribute', name: 'multiple', value: true };
const helpTextConstant: ConstantDefinition = { type: 'attribute', name: 'help-text', value: 'Help-text' };
const labelConstant: ConstantDefinition = { type: 'attribute', name: 'label', value: 'Label' };

const colors = [
  'Yellow',
  'Light Green',
  'Grey',
  'Green',
  'Blue',
  'Red',
  'Orange',
  'Magenta',
  'White',
  'Purple',
  'Pink',
  'Black',
  'Brown'
].sort();

const createColorOption = (color: string) => `<sd-option value="${color.replaceAll(' ', '_')}">${color}</sd-option>`;
const createColorOptions = () => colors.map(createColorOption);
const createColorOptionsHtml = () => unsafeHTML(createColorOptions().join('\n'));

export default {
  title: 'Components/sd-combobox/Screenshots: sd-combobox',
  tags: ['!autodocs'],
  component: 'sd-combobox',
  args: overrideArgs([
    threeOptionsConstant,
    labelConstant,
    { type: 'attribute', name: 'placeholder', value: 'Please search and select' },
    { type: 'attribute', name: 'max-options-visible', value: 3 },
    { type: 'attribute', name: 'getOption', value: '' }
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
        'The current value of the combobox, submitted as a name/value pair with form data. When `multiple` is enabled, the value attribute will be a space-delimited list of values based on the options selected, and the value property will be an array. **For this reason, values must not contain spaces.**',
      control: 'text'
    }
  },
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/branch/W0LTcrsplIFyHJonYNyqsG/Solid-DS-%E2%80%93-Component-Library?m=auto&node-id=29654-2771&t=Do65Udn4cACM7ww3-1'
    }
  }
};

/**
 * This shows sd-combobox in its default state.
 */
export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div class="h-[260px] w-[400px]">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `size` attribute to change the size. It will cascade to slotted `sd-option` elements:
 * - `lg` (default)
 * - `md`
 * - `sm`
 */

export const SizeMultiple = {
  name: 'Size x Multiple',
  parameters: {
    controls: {
      exclude: ['open']
    }
  },
  render: (args: { open?: string }) => {
    delete args['open'];

    return html`<div class="h-[340px] w-[700px]">
      ${generateTemplate({
        options: {
          classes: 'w-full'
        },
        axis: {
          y: {
            type: 'attribute',
            name: 'size'
          }
        },
        constants: [multipleConstant, { type: 'attribute', name: 'value', value: 'option-1 option-2' }],
        args
      })}
    </div>`;
  }
};

/**
 * To allow multiple options to be selected, use the `multiple` attribute. It’s a good practice to use `clearable` when this option is enabled. To use the checkbox with tags variant, set the `useTags` variant to `true`.  To set multiple values at once, set value to a space-delimited list of values.  The preferred placement of the combobox’s listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.
 */

export const DisabledMultiple = {
  name: 'Disabled x Multiple',
  parameters: {
    controls: {
      exclude: ['open']
    }
  },
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];
    return html`<div class="h-[340px] w-full">
      ${generateTemplate({
        options: {
          classes: 'w-full [&>tbody>tr>td]:w-[50%]'
        },
        axis: {
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
        args
      })}
    </div>`;
  }
};

/**
 * `sd-combobox` with valid and invalid styles.
 */

export const ValidInvalid = {
  name: 'Valid x Invalid',
  parameters: {
    controls: {
      exclude: ['label', 'open-attr', 'required', 'default', 'useTags', 'multiple', 'max-options-visible']
    }
  },
  render: (args: any) => {
    delete args['open-attr'];
    delete args['filter'];
    delete args['getOption'];
    delete args['getOption-attr'];

    return html`<form class="h-[260px] w-full flex gap-4">
      ${generateTemplate({
        options: {
          classes: 'w-full [&>tbody>tr>td]:align-top'
        },
        axis: {
          x: {
            type: 'attribute',
            name: 'value',
            values: ['option-1 option-2', '']
          }
        },
        constants: [
          twoOptionsConstant,
          labelConstant,
          multipleConstant,
          { type: 'attribute', name: 'required', value: true }
        ],
        args
      })}
      <sd-button class="hidden" type="submit">Submit</sd-button>
    </form>`;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('sd-button');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};

/**
 * This shows sd-combobox has the borders visible even when there is limited vertical space.
 */
export const BorderVisibility = {
  name: 'Border visibility',
  render: () => {
    return html`<div class="h-[150px] w-[420px]">
      ${generateTemplate({
        args: overrideArgs([
          twentyOptionsConstant,
          labelConstant,
          { type: 'attribute', name: 'placeholder', value: 'Please search and select' },
          { type: 'attribute', name: 'max-options-visible', value: 3 },
          { type: 'attribute', name: 'getOption', value: '' }
        ])
      })}
    </div>`;
  }
};

/**
 * Shows available slots. The `label` and `help-text` slots will overwrite their corresponding attributes.
 */
export const Slots = {
  name: 'Slots',
  parameters: {
    controls: {
      exclude: ['open-attr']
    }
  },
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];

    return html`
      ${['default', 'label', 'clear-icon', 'expand-icon', 'left', 'right', 'help-text'].map(slot =>
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
                      ? `<sd-option></sd-option>`
                      : `<div
                          slot='${slot}'
                          class="slot slot--border slot--background h-6 ${slot === 'label' || slot === 'help-text' ? 'w-20' : 'w-6'}"
                      >${slot === 'label' ? 'Label' : ''}</div>`,
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
 `display-input`,
 `listbox`,
 `tags`,
 `tag`,
 `tag__base`,
 `tag__content`,
 `tag__removable-indicator`,
 `clear-button`, and
 `expand-icon` part selectors to customize the combobox component.
 */

const partsArr = [
  'form-control',
  'form-control-label',
  'form-control-input',
  'form-control-help-text',
  'combobox',
  'display-input',
  'listbox',
  'tags',
  'tag',
  'tag__base',
  'tag__content',
  'tag__removable-indicator',
  'clear-button',
  'expand-icon',
  'left',
  'right'
];

export const Parts = {
  name: 'Parts',
  parameters: {
    controls: {
      exclude: [
        'open-attr',
        'form-control',
        'form-control-label',
        'form-control-input',
        'form-control-help-text',
        'combobox',
        'display-input',
        'listbox',
        'tags',
        'tag',
        'tag__base',
        'tag__content',
        'tag__removable-indicator',
        'clear-button',
        'expand-icon',
        'left',
        'right'
      ]
    }
  },
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];

    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-combobox::part(...){outline: solid 2px red}',
          values: partsArr.map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-combobox::part(${part}){outline: solid 2px red; outline-offset: 2px} ::part(popup__content){overflow-y: visible} ::part(tag__removable-indicator){display: block} ::part(tag__content){display: block}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'attribute', name: 'useTags', value: true },
        { type: 'attribute', name: 'value', value: 'option-1 option-2' },
        {
          type: 'slot',
          name: 'left',
          value: '<sd-icon slot="left" name="system/image" aria-hidden="true" color="currentColor"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'right',
          value: '<sd-icon slot="right" name="system/image" aria-hidden="true" color="currentColor"></sd-icon>'
        },
        clearableConstant,
        helpTextConstant,
        labelConstant,
        multipleConstant
      ],
      args
    });
  }
};

/**
 * The focus attribute provides feedback to the users, informing them that the combobox component is ready for use.
 */
export const Focus = {
  name: 'Focus',
  play: ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const elm = canvasElement.querySelector<SdCombobox>('sd-combobox');
    elm?.focus();
  },
  render: () => html`
    <div class="h-[260px] w-[400px]">
      <sd-combobox label="Label">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    </div>
  `
};

/**
 * Per default the combobox will indicate an error state when the input is invalid. Use the `style-on-valid` attribute to indicate a valid state as well.
 */

export const StyleOnValid = {
  name: 'Style on valid',
  parameters: {
    controls: {
      exclude: ['open-attr']
    }
  },
  render: (args: any) => {
    delete args['open-attr'];
    delete args['filter'];
    delete args['getOption'];
    delete args['getOption-attr'];

    return html`<div class="h-[340px]">
      ${generateTemplate({
        options: {
          classes: 'w-full'
        },
        axis: {
          x: {
            type: 'attribute',
            name: 'style-on-valid'
          }
        },
        constants: [fiveOptionsConstant, { type: 'attribute', name: 'value', value: '' }],
        args
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    await Promise.all([customElements.whenDefined('sd-combobox'), customElements.whenDefined('sd-option')]).then(
      async () => {
        const els = canvasElement.querySelectorAll('sd-combobox');

        for (const el of els) {
          await waitUntil(() => el?.shadowRoot?.querySelector('input'));
          await userEvent.click(el.shadowRoot!.querySelector('input')!);
          await userEvent.click(el.querySelector('sd-option')!);
        }

        // tab to next element to loose focus
        await userEvent.tab();
      }
    );
  }
};

export const Tags = {
  name: 'Tags',
  render: () => html`
    <div class="h-[260px] w-[400px]">
      <sd-combobox label="Label" multiple value="option-1 option-2">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    </div>
  `
};

/**
 * A simple suggestions list shows the user a filtered list.
 */
export const SimpleSuggests = {
  name: 'Simple suggests',
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];
    return html`
      <div class="h-[260px] w-[400px]">
        <sd-combobox label="Preferred color"> ${createColorOptionsHtml()} </sd-combobox>
      </div>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await Promise.all([customElements.whenDefined('sd-combobox'), customElements.whenDefined('sd-option')]).then(
      async () => {
        const elm = canvasElement.querySelector<SdCombobox>('sd-combobox');
        await waitUntil(() => elm?.shadowRoot?.querySelector('input'));
        await userEvent.type(elm!.shadowRoot!.querySelector('input')!, 'gre');
      }
    );
  }
};

/**
 * A message is shown if no results are found.
 */
export const NotFoundMessage = {
  name: 'Not found message',
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];
    return html`
      <div class="h-[260px] w-[400px]">
        <sd-combobox label="Preferred Color"> ${createColorOptionsHtml()} </sd-combobox>
      </div>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await Promise.all([customElements.whenDefined('sd-combobox'), customElements.whenDefined('sd-option')]).then(
      async () => {
        const elm = canvasElement.querySelector<SdCombobox>('sd-combobox');
        await waitUntil(() => elm?.shadowRoot?.querySelector('input'));
        await userEvent.type(elm!.shadowRoot!.querySelector('input')!, 'xyz');
      }
    );
  }
};

/**
 * The filtered options shown in the list can be customized by passing a function to the getOption property. Your function can return a string of HTML, a Lit Template, or an HTMLElement. The getOption() function will be called for each option. The first argument is an element and the second argument is the query string.
 * Remember that the options are rendered in a shadow root. To style them, you can use the style attribute in your template or you can add your own parts and target them with the ::part() selector.
 * Note: Be sure you trust the content you are outputting! Passing unsanitized user input to getOption() can result in XSS vulnerabilities.
 */
export const HighlightQuery = {
  name: 'Highlight Query',
  render: () => {
    const optionRenderer = highlightOptionRenderer;
    return html`
      <div class="h-[260px] w-[400px]">
        <sd-combobox label="Preferred color" class="highlight-combobox"> ${createColorOptionsHtml()} </sd-combobox>
      </div>
      <script type="module">
        // the highlight option renderer utility function can be imported via:
        // import { highlightOptionRenderer } from '@solid-design-system/components';

        // preview-ignore:start
        const highlightOptionRenderer = ${optionRenderer};
        // preview-ignore:end

        const comboboxes = document.querySelectorAll('.highlight-combobox');
        comboboxes.forEach(combobox => {
          combobox.getOption = highlightOptionRenderer;
        });
      </script>
    `;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    await Promise.all([customElements.whenDefined('sd-combobox'), customElements.whenDefined('sd-option')]).then(
      async () => {
        const elm = canvasElement.querySelector<SdCombobox>('sd-combobox');
        await waitUntil(() => elm?.shadowRoot?.querySelector('input'));
        await userEvent.type(elm!.shadowRoot!.querySelector('input')!, 'gre');
      }
    );
  }
};

/**
 * `sd-combobox` is fully accessibile via keyboard.
 */

export const Mouseless = {
  name: 'Mouseless',
  parameters: {
    controls: {
      exclude: ['open-attr', 'value', 'default']
    }
  },
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];

    return html`<div class="mouseless h-[260px] w-full flex gap-4">
      ${generateTemplate({
        constants: [twoOptionsConstant, { type: 'attribute', name: 'label', value: 'Default' }],
        args
      })}
      ${generateTemplate({
        constants: [twoOptionsConstant, multipleConstant, { type: 'attribute', name: 'label', value: 'Multiple' }],
        args
      })}
      ${generateTemplate({
        constants: [
          twoOptionsConstant,
          multipleConstant,
          { type: 'attribute', name: 'useTags', value: true },
          { type: 'attribute', name: 'label', value: 'Multiple w/ tags' }
        ],
        args
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-combobox');
    await waitUntil(() => el?.shadowRoot?.querySelector('input'));
    el?.shadowRoot?.querySelector('input')!.focus();
  }
};

/**
 * Use `<sd-optgroup>` to group listbox items visually.
 */

export const SampleGroupingOptions = {
  name: 'Sample: Grouping options and sizes',
  render: (args: any) => {
    return generateTemplate({
      options: {
        classes: 'w-full'
      },
      axis: {
        y: {
          type: 'attribute',
          name: 'size'
        }
      },
      constants: [
        {
          type: 'slot',
          name: 'default',
          value:
            '<sd-optgroup label="Funds"><sd-option value="UniDeutschland_XS">UniDeutschland XS</sd-option><sd-option value="UniEM_Global_A">UniEM Global A</sd-option> <sd-option value="UniEuroKapital_net">UniEuroKapital -net-</sd-option></sd-optgroup><sd-optgroup label="Search Suggestions"><sd-option value="uniabsoluterertrag">UniAbsoluterErtrag</sd-option><sd-option value="uniasia">UniAsia</sd-option></sd-optgroup>'
        }
      ],
      args
    });
  }
};

/**
 * Demonstrates the form behavior with validation styles when the `required` attribute is set to `true`.
 */

export const SampleForm = {
  name: 'Sample: Form',
  parameters: {
    controls: {
      exclude: ['open-attr', 'label', 'name', 'useTags', 'value', 'multiple', 'max-options-visible', 'default']
    }
  },
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];

    const sharedConstants: ConstantDefinition[] = [
      { type: 'attribute', name: 'form', value: 'testForm' },
      { type: 'attribute', name: 'clearable', value: true },
      { type: 'attribute', name: 'required', value: true },
      twoOptionsConstant
    ];

    return html`
      <form action="" method="get" id="testForm" name="testForm" class="w-[370px]">
        <div class="mb-6">
          ${generateTemplate({
            constants: [
              ...sharedConstants,
              { type: 'attribute', name: 'label', value: 'Required' },
              { type: 'attribute', name: 'name', value: 'required-field' }
            ],
            args
          })}
        </div>
        <div class="mb-6">
          ${generateTemplate({
            constants: [
              ...sharedConstants,
              { type: 'attribute', name: 'label', value: 'Required multiple' },
              { type: 'attribute', name: 'name', value: 'required-multiple-field' },
              multipleConstant
            ],
            args
          })}
        </div>
        <div class="mb-8">
          ${generateTemplate({
            constants: [
              ...sharedConstants,
              { type: 'attribute', name: 'label', value: 'Required multiple w/ tags' },
              { type: 'attribute', name: 'name', value: 'required-multiple-tags-field' },
              multipleConstant,
              { type: 'attribute', name: 'useTags', value: true }
            ],
            args
          })}
        </div>
        <sd-button type="submit">Submit</sd-button>
      </form>
      <script type="module">
        const customErrorMessages = {
          'required-field': 'Please select an option.',
          'required-multiple-field': 'Please select at least one option.',
          'required-multiple-tags-field': 'Please select at least one option.'
        };

        await Promise.all([customElements.whenDefined('sd-combobox'), customElements.whenDefined('sd-button')]);
        const form = document.querySelector('#testForm');
        const controls = Array.from(form.querySelectorAll('sd-select'));

        controls.forEach(control => {
          const name = control.getAttribute('name');
          const message = customErrorMessages[name];
          if (message) {
            control.setCustomValidity(message);
          }
        });

        function handleSubmit(event) {
          event.preventDefault();

          const formData = new FormData(form);
          const formValues = Object.fromEntries(formData);

          if (form.reportValidity()) {
            alert('Form submitted with the following values: ' + JSON.stringify(formValues, null, 2));
          }
        }

        form.addEventListener('submit', handleSubmit);
      </script>
    `;
  }
};

/**
 * Demonstrates a form containing all existing Solid form elements.
 */

export const SolidForm = {
  name: 'Sample: Solid form',
  parameters: {
    controls: {
      include: []
    }
  },
  render: () => {
    return html`
      <form action="" method="get" id="testForm" name="testForm" class="">
        <h1 class="text-lg text-white bg-primary p-4">Solid Form</h1>
        <div class="[&>:nth-child(even)]:bg-neutral-100 [&>*]:p-4">
          <sd-checkbox form="testForm" name="field 1" required>Field 1</sd-checkbox>
          <sd-input form="testForm" name="field 2" label="Field 2" required></sd-input>
          <sd-combobox form="testForm" multiple useTags name="field 3" label="Field 3" required
            ><sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option><sd-option value="option-4">Option 4</sd-option
            ><sd-option value="option-5">Option 5</sd-option><sd-option value="option-6">Option 6</sd-option
            ><sd-option value="option-7">Option 7</sd-option></sd-combobox
          >
          <sd-radio-group form="testForm" name="field 4" label="Field 4" required
            ><sd-radio value="option-1">Option 1</sd-radio><sd-radio value="option-2">Option 2</sd-radio>
            <sd-radio value="option-3">Option 3</sd-radio></sd-radio-group
          >
          <sd-radio-group value="option-1" form="testForm" name="field 5" label="Field 5" required
            ><sd-radio-button value="option-1">Option 1</sd-radio-button
            ><sd-radio-button value="option-2">Option 2</sd-radio-button>
            <sd-radio-button value="option-3">Option 3</sd-radio-button></sd-radio-group
          >
          <sd-switch form="testForm" name="field 6" required>Field 6</sd-switch>
          <sd-textarea form="testForm" name="field 7" label="Field 7" required></sd-textarea>
        </div>
        <sd-button class="my-4" type="submit">Submit</sd-button>
        <sd-button class="my-4" type="reset">Reset</sd-button>
      </form>

      <script>
        function handleSubmit(event) {
          const form = document.querySelector('#testForm');

          const formData = new FormData(form);
          const formValues = Object.fromEntries(formData);
          formValues['field 3'] = formData.getAll('field 3');
          if (form.reportValidity()) {
            event.preventDefault(); // Prevent the default form submission behavior
            alert('Form submitted with the following values: ' + JSON.stringify(formValues, null, 2));
          }
        }

        document.querySelector('#testForm').addEventListener('submit', handleSubmit);
      </script>
    `;
  }
};

/**
 * 1. You can use the `setCustomValidity` method to set a custom validation message. This will override any native validation messages.
 * 2. Set an empty string to clear the custom validity and make the input valid.
 * 3. To show the validation message, call the `reportValidity` method. Originally this would show a native validation bubble, but we show the error messages inline.
 */

export const setCustomValidity = {
  name: 'Set custom validity',
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  render: () => {
    return html`
      <!-- block submit and show alert instead -->
      <form id="validationForm" class="flex flex-col gap-2">
        <sd-combobox id="custom-input" style-on-valid label="Label">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-combobox>
        <div>
          <sd-button type="submit">Submit</sd-button>
          <sd-button id="error-button" variant="secondary">Set custom error</sd-button>
          <sd-button id="success-button" variant="secondary">Set success</sd-button>
          <sd-button type="reset" variant="secondary">Reset</sd-button>
        </div>
      </form>
      <script type="module">
        // Wait for custom elements to be defined
        await Promise.all([
          customElements.whenDefined('sd-combobox'),
          customElements.whenDefined('sd-button'),
          customElements.whenDefined('sd-option')
        ]).then(() => {
          const form = document.getElementById('validationForm');
          const input = document.getElementById('custom-input');
          const setErrorButton = document.getElementById('error-button');
          const setSuccessButton = document.getElementById('success-button');

          // Initial error
          const errorMessage = \`This is an initial custom error.\`;
          input.setCustomValidity(errorMessage);
          input.reportValidity();

          // Show error message
          setErrorButton.addEventListener('click', () => {
            const errorMessage = \`This is a new custom error (\${new Date().toLocaleTimeString()})\`;
            input.setCustomValidity(errorMessage);
            input.reportValidity();
          });

          // Show success message
          setSuccessButton.addEventListener('click', () => {
            input.setCustomValidity(''); // Clear custom validity
            input.reportValidity();
          });

          form.addEventListener('submit', event => {
            event.preventDefault();
            alert('All fields are valid!');
          });
        });
      </script>
    `;
  }
};

export const Combination = generateScreenshotStory([
  Default,
  SizeMultiple,
  DisabledMultiple,
  ValidInvalid,
  BorderVisibility,
  Focus,
  Slots,
  Parts,
  StyleOnValid,
  SimpleSuggests,
  HighlightQuery,
  Mouseless,
  SampleGroupingOptions,
  SampleForm,
  setCustomValidity
]);
