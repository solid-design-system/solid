import '../../solid-components';
import {
  type ConstantDefinition,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { highlightOptionRenderer } from './option-renderer';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
import type SdCombobox from './combobox';
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
const helpTextConstant: ConstantDefinition = { type: 'attribute', name: 'help-text', value: 'help-text' };
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
const createColorOptionHtml = (color: string) => unsafeHTML(createColorOption(color));
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
      url: 'https://www.figma.com/file/ZphyVFsUHL72voMrJagMeo/Select?node-id=1002%3A2284&mode=dev'
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
      exclude: ['open-attr']
    }
  },
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];

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
            name: 'useTags',
            values: [false, true]
          }
        },
        constants: [
          fiveOptionsConstant,
          multipleConstant,
          { type: 'attribute', name: 'value', value: 'option-1 option-2 option-3 option-4' }
        ],
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
          y: {
            type: 'attribute',
            name: 'useTags',
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
  render: (args: { 'open-attr'?: string }) => {
    delete args['open-attr'];

    return html`<form class="h-[260px] w-full flex gap-4">
      ${generateTemplate({
        options: {
          classes: 'w-full [&>tbody>tr>td]:align-top'
        },
        axis: {
          y: {
            type: 'attribute',
            name: 'useTags',
            values: [false, true]
          },
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
  name: 'Border Visibility',
  render: () => {
    return html`<div class="h-[150px] w-[420px]">
      ${generateTemplate({
        args: overrideArgs([
          twentyOptionsConstant,
          labelConstant,
          { type: 'attribute', name: 'placeholder', value: 'Please Select' },
          { type: 'attribute', name: 'max-options-visible', value: 3 }
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
      ${['default', 'label', 'clear-icon', 'expand-icon', 'help-text'].map(slot =>
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
            twoOptionsConstant
          ],
          args
        })
      )}
    `;
  }
};

/**
 * Use the `help-text` attribute to provide additional context or instructions.
 *
 * For help texts that contain HTML, use the `help-text` slot instead.
 */
export const HelpText = {
  name: 'Help Text',
  render: () => html`
    <div class="flex gap-12 h-[500px]">
      <sd-combobox size="lg" label="Label" placement="bottom" value="" help-text="Help text Attribute">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-combobox>

      <sd-combobox size="lg" label="Label" placement="bottom" value="">
        <div slot="help-text" class="text-lg">Help text Slot</div>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-combobox>
    </div>
  `
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
 * A simple suggestions list shows the user a filtered list.
 */
export const SimpleSuggests = {
  name: 'Simple Suggests',
  render: () => html`
    <div class="h-[260px] w-[400px]">
      <sd-combobox label="Preferred Color" value="g"> ${createColorOptionsHtml()} </sd-combobox>
    </div>
  `
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
        <sd-combobox label="Preferred color" class="highlight-combobox" value="g">
          ${createColorOptionsHtml()}
        </sd-combobox>
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
  }
};

/**
 * Use to group `s visually.
 */
export const GroupingQuery = {
  name: 'Grouping Query',
  render: () => html`
    <div class="h-[260px] w-[400px]">
      <sd-combobox label="Group elements" value="g">
        <sd-optgroup label="B">
          ${createColorOptionHtml('Black')} ${createColorOptionHtml('Blue')} ${createColorOptionHtml('Brown')}
        </sd-optgroup>
        <sd-optgroup label="G"> ${createColorOptionHtml('Green')} ${createColorOptionHtml('Grey')} </sd-optgroup>
        <sd-optgroup label="L"> ${createColorOptionHtml('Light Green')} </sd-optgroup>
        <sd-optgroup label="M"> ${createColorOptionHtml('Magenta')} </sd-optgroup>
        <sd-optgroup label="O"> ${createColorOptionHtml('Orange')} </sd-optgroup>
        <sd-optgroup label="W"> ${createColorOptionHtml('White')} </sd-optgroup>
        <sd-optgroup label="P"> ${createColorOptionHtml('Pink')} ${createColorOptionHtml('Purple')} </sd-optgroup>
        <sd-optgroup label="R"> ${createColorOptionHtml('Red')} </sd-optgroup>
        <sd-optgroup label="W"> ${createColorOptionHtml('White')} </sd-optgroup>
        <sd-optgroup label="Y"> ${createColorOptionHtml('Yellow')} </sd-optgroup>
      </sd-combobox>
    </div>
  `
};

/**
 * The height of the filtered options list can be customized by setting the max-height on the listbox part of the combobox.
 */
export const SuggestionContainerHeight = {
  name: 'Suggestion Container Height',
  render: () => html`
    <div class="h-[260px] w-[400px]">
      <style>
        #max-height::part(listbox) {
          max-height: 100px;
        }
      </style>
      <sd-combobox label="Preferred Color" id="max-height" value="g"> ${createColorOptionsHtml()} </sd-combobox>
    </div>
  `
};

/**
 * Use the `clearable` attribute to add a clear button that removes the selected value.
 */

export const Clearable = {
  name: 'Clearable',
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox size="lg" label="Label" placement="bottom" clearable value="Green">
        ${createColorOptionsHtml()}
      </sd-combobox>
    </div>
  `
};

/**
 * Use the `multiple` attribute to allow multiple options to be selected.
 */

export const Multiple = {
  name: 'Multiple',
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox size="lg" label="Label" placement="bottom" multiple value="option-1 option-2">
        <sd-option value="option-1" checkbox>Option 1</sd-option>
        <sd-option value="option-2" checkbox>Option 2</sd-option>
        <sd-option value="option-3" checkbox>Option 3</sd-option>
        <sd-option value="option-4" checkbox>Option 4</sd-option>
        <sd-option value="option-5" checkbox>Option 5</sd-option>
      </sd-combobox>
    </div>
  `
};

/**
 * Use the `useTags` attribute to display selected options as tags using the `sd-tag` component.
 *
 * __Hint:__ It requires the `multiple` attribute to be set.
 */
export const useTags = {
  name: 'Use Tags',
  render: () => html`
    <div class="w-[650px] h-[500px]">
      <sd-combobox size="lg" label="Label" placement="bottom" multiple value="option-1 option-2" useTags>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-combobox>
    </div>
  `
};

/**
 * Use the `max-options-visible` attribute to define the maximum number of selected options that will be visible.
 *
 * __Hint:__ It requires the `multiple` and `useTags` attributes to be set.<br />
 * Once the maximum number of options is reached, the selection will display a message indicating how many additional options have been selected.<br />
 * To remove the limit, set the attribute to `0`.
 */
export const MaxOptionsVisible = {
  name: 'Max Options Visible',
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox
        size="lg"
        label="Label"
        placement="bottom"
        multiple=""
        value="option-1 option-2 option-3"
        useTags
        max-options-visible="2"
      >
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-combobox>
    </div>
  `
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 */

export const Required = {
  name: 'Required',
  render: () => html`
    <div class="w-[400px] h-[400px]">
      <sd-combobox size="lg" label="Required" placeholder="Please Select" placement="bottom" value="" required="">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-combobox>
    </div>
  `
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 */

export const NoOptions = {
  name: 'No Options',
  render: () => html`
    <div class="w-[400px] h-[400px]">
      <sd-combobox size="lg" label="Required" placeholder="Please Select" placement="bottom" value=""> </sd-combobox>
    </div>
  `
};

/**
 * The component gets `valid` state when the input is valid.
 *
 * Use the `style-on-valid` attribute to automatically indicate and show a valid state.
 */

export const Valid = {
  name: 'Valid',
  render: () => html`
    <style>
      sd-combobox.valid-example::part(display-input) {
        color: #181818;
      }
    </style>
    <div class="w-[400px] h-[400px]">
      <sd-combobox
        size="lg"
        placement="bottom"
        label="Label"
        placeholder="Please Select"
        style-on-valid=""
        value="option-1"
        class="valid-example"
      >
        <sd-option class="option" value="option-1">Option 1</sd-option>
        <sd-option class="option" value="option-2">Option 2</sd-option>
        <sd-option class="option" value="option-3">Option 12</sd-option>
      </sd-combobox>
    </div>

    <script>
      var validSelect = document.querySelector('.valid-example');
      var options = validSelect.querySelectorAll('.option');
      setTimeout(() => {
        validSelect.checkValidity();
        validSelect.reportValidity();
      }, 500);
    </script>
  `
};

/**
 * The component gets `invalid` state when the form is not valid.
 */

export const Invalid = {
  name: 'Invalid',
  render: () => html`
    <div class="w-[400px] h-[300px]">
      <sd-combobox
        size="lg"
        placement="bottom"
        label="Label"
        placeholder="Please Select"
        style-on-valid=""
        value=""
        required=""
        clearable=""
        class="invalid-example"
      >
        <sd-option class="option" value="option-1">Option 1</sd-option>
        <sd-option class="option" value="option-2">Option 2</sd-option>
        <sd-option class="option" value="option-3">Option 3</sd-option>
      </sd-combobox>
    </div>

    <script>
      var invalidSelect = document.querySelector('.invalid-example');
      setTimeout(() => {
        invalidSelect.checkValidity();
        invalidSelect.reportValidity();
        invalidSelect.setCustomValidity('Error text');
      }, 500);
    </script>
  `
};

/**
 * Use the left and right slots to add text and icons.
 */
export const Icons = {
  name: 'Icons',
  render: () => html`
    <div class="w-[400px] h-[400px]">
      <sd-combobox placeholder="Small" size="sm" clearable>
        <sd-icon
          slot="left"
          library="global-resources"
          name="system/picture"
          aria-hidden="true"
          color="currentColor"
        ></sd-icon>
        ${createColorOptionsHtml()}
        <sd-icon
          slot="right"
          library="global-resources"
          name="system/picture"
          aria-hidden="true"
          color="currentColor"
        ></sd-icon>
      </sd-combobox>
      <br />
      <sd-combobox placeholder="Medium" size="md" clearable>
        <sd-icon
          slot="left"
          library="global-resources"
          name="system/picture"
          aria-hidden="true"
          color="currentColor"
        ></sd-icon>
        ${createColorOptionsHtml()}
        <sd-icon
          slot="right"
          library="global-resources"
          name="system/picture"
          aria-hidden="true"
          color="currentColor"
        ></sd-icon>
      </sd-combobox>
      <br />
      <sd-combobox placeholder="Large" size="lg" clearable>
        <sd-icon
          slot="left"
          library="global-resources"
          name="system/picture"
          aria-hidden="true"
          color="currentColor"
        ></sd-icon>
        ${createColorOptionsHtml()}
        <sd-icon
          slot="right"
          library="global-resources"
          name="system/picture"
          aria-hidden="true"
          color="currentColor"
        ></sd-icon>
      </sd-combobox>
    </div>
  `
};

/**
 * It is possible to add options dynamically to the combobox e.g. if the option values need to be fetched asynchronously from a remote server or API.
 */
export const AsyncOptions = {
  name: 'Async Options',
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox label="Async options" class="async-combobox">
        <sd-option class="option" value="option-1">Option 1</sd-option>
        <sd-option class="option" value="option-2">Option 2</sd-option>
        <sd-option class="option" value="option-3">Option 3</sd-option>
      </sd-combobox>
    </div>
    <script type="module">
      const comboboxes = document.querySelectorAll('.async-combobox');
      comboboxes.forEach(combobox => {
        // After api request the options are added async
        let index = 4;
        let timeout = setInterval(() => {
          const option = document.createElement('sd-option');
          const value = 'Option ' + index++;
          option.textContent = value;
          combobox.appendChild(option);
          if (index > 10) {
            clearInterval(timeout);
          }
        }, 4000);
      });
    </script>
  `
};

/**
 * A custom filter can be applied by passing a filter function to the filter property. This filter() function will be called for each option. The first argument is an element and the second argument is the query string.
 */
export const CustomFilter = {
  name: 'Custom Filter',
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox label="Custom Filter" class="filter-combobox"> ${createColorOptionsHtml()} </sd-combobox>
    </div>
    <script type="module">
      const comboboxes = document.querySelectorAll('.filter-combobox');
      comboboxes.forEach(combobox => {
        const oldFilter = combobox.filter;
        combobox.filter = (option, queryString) => {
          // only show options for more than 2 characters on text input
          if (queryString && queryString.length > 2) {
            return oldFilter(option, queryString);
          }
          return false;
        };
      });
    </script>
  `
};

export const Combination = generateScreenshotStory([
  Default,
  SizeMultiple,
  DisabledMultiple,
  ValidInvalid,
  BorderVisibility,
  Slots,
  HelpText,
  Focus,
  SimpleSuggests,
  HighlightQuery,
  GroupingQuery,
  SuggestionContainerHeight,
  Clearable,
  Multiple,
  useTags,
  MaxOptionsVisible,
  Required,
  NoOptions,
  Valid,
  Invalid,
  Icons,
  AsyncOptions,
  CustomFilter
]);
