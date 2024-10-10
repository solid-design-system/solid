import '../../solid-components';
import {
  type ConstantDefinition,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate
} from '../../../scripts/storybook/helper';
import { highlightOptionRenderer } from './option-renderer';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type SdCombobox from './combobox';

const { argTypes, parameters } = storybookDefaults('sd-combobox');
const { generateTemplate } = storybookTemplate('sd-combobox');
const { overrideArgs } = storybookHelpers('sd-combobox');

const threeOptionsConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value:
    '<sd-option value="option-1">Option 1</sd-option><sd-option value="option-2">Option 2</sd-option><sd-option value="option-3">Option 3</sd-option>'
};

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
  title: 'Components/sd-combobox',
  tags: ['!dev'],
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

export const Size = {
  render: () => html`
    <div class="flex gap-12 h-[500px]">
      <sd-combobox size="lg" label="Label" placeholder="Large" placement="bottom" value="" class="test">
        <sd-option value="option-1" size="lg">Option 1</sd-option>
        <sd-option value="option-2" size="lg">Option 2</sd-option>
        <sd-option value="option-3" size="lg">Option 3</sd-option>
        <sd-option value="option-4" size="lg">Option 4</sd-option>
        <sd-option value="option-5" size="lg">Option 5</sd-option>
      </sd-combobox>

      <sd-combobox size="md" label="Label" placeholder="Medium" placement="bottom" value="" class="test">
        <sd-option value="option-1" size="md">Option 1</sd-option>
        <sd-option value="option-2" size="md">Option 2</sd-option>
        <sd-option value="option-3" size="md">Option 3</sd-option>
        <sd-option value="option-4" size="md">Option 4</sd-option>
        <sd-option value="option-5" size="md">Option 5</sd-option>
      </sd-combobox>

      <sd-combobox size="sm" label="Label" placeholder="Small" placement="bottom" value="">
        <sd-option value="option-1" size="sm">Option 1</sd-option>
        <sd-option value="option-2" size="sm">Option 2</sd-option>
        <sd-option value="option-3" size="sm">Option 3</sd-option>
        <sd-option value="option-4" size="sm">Option 4</sd-option>
        <sd-option value="option-5" size="sm">Option 5</sd-option>
      </sd-combobox>
    </div>
  `
};

/**
 * Use the `placement` attribute to define where the combobox panel should appear:
 * - `bottom` (default)
 * - `top`
 */
export const Placement = {
  render: () => html`
    <div class="flex items-center gap-12 h-[500px]">
      <sd-combobox class="self-baseline" size="lg" label="Label" placement="bottom" value="">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-combobox>

      <sd-combobox size="lg" label="Label" placement="top" value="">
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
 * Use the `label` attribute to give the combobox element an accessible label.
 *
 * For labels that contain HTML, use the `label` slot instead.
 */
export const Label = {
  render: () => html`
    <div class="flex gap-12 h-[500px]">
      <sd-combobox size="lg" label="Label Attribute" placement="bottom" value="">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-combobox>

      <sd-combobox size="lg" placement="bottom" value="">
        <div slot="label" class="text-lg">Label Slot</div>
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
 * Use the `placeholder` attribute to show a placeholder when no option is selected.
 */
export const Placeholder = {
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox size="lg" label="Label" placeholder="Placeholder example" placement="bottom" value="">
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
 * Use the `disabled` attribute to disable the combobox.
 */
export const Disabled = {
  render: () => html`
    <div class="w-[400px]">
      <sd-combobox size="lg" label="Label" placeholder="Disabled" placement="bottom" value="" disabled>
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
 * Use the `help-text` attribute to provide additional context or instructions.
 *
 * For help texts that contain HTML, use the `help-text` slot instead.
 */
export const HelpText = {
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
  play: ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const elm = canvasElement.querySelector<SdCombobox>('sd-combobox');
    elm?.focus();
  },
  render: () => html`
    <div class="h-[260px] w-[400px]">
      <sd-combobox label="Preferred Color">
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
 * The height of the filtered options list can be customized by setting the max-height on the listbox part of the combobox.
 */
export const SuggestionContainerHeight = {
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
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox size="lg" label="Label" placement="bottom" clearable value="option-1">
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
 * Use the `multiple` attribute to allow multiple options to be selected.
 */

export const Multiple = {
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox size="lg" label="Label" placement="bottom" multiple="" value="option-1 option-2">
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
 * Use the `useTags` attribute to display selected options as tags using the `sd-tag` component.
 *
 * __Hint:__ It requires the `multiple` attribute to be set.
 */
export const useTags = {
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox size="lg" label="Label" placement="bottom" multiple="" value="option-1 option-2" useTags>
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
 * The component gets `valid` state when the input is valid.
 *
 * Use the `style-on-valid` attribute to automatically indicate and show a valid state.
 */

export const Valid = {
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
 * Use the prefix and suffix slots to add text and icons.
 */
export const PrefixSuffixTextAndIcons = {
  render: () => html`
    <div class="w-[400px] h-[800px]">
      <sd-combobox placeholder="Small" size="small" clearable>
        <span slot="prefix">prefix</span>
        <span slot="suffix">suffix</span>
        ${createColorOptionsHtml()}
      </sd-combobox>
      <br />
      <sd-combobox placeholder="Medium" size="medium" clearable>
        <span slot="prefix">prefix</span>
        <span slot="suffix">suffix</span>
        ${createColorOptionsHtml()}
      </sd-combobox>
      <br />
      <sd-combobox placeholder="Large" size="large" clearable>
        <span slot="prefix">prefix</span>
        <span slot="suffix">suffix</span>
        ${createColorOptionsHtml()}
      </sd-combobox>

      <br />

      <sd-combobox placeholder="Small" size="small" clearable>
        <sd-icon name="union-investment/content/image" slot="prefix"></sd-icon>
        ${createColorOptionsHtml()}
        <sd-icon name="union-investment/content/image" slot="suffix"></sd-icon>
      </sd-combobox>
      <br />
      <sd-combobox placeholder="Medium" size="medium" clearable>
        <sd-icon name="union-investment/content/image" slot="prefix"></sd-icon>
        ${createColorOptionsHtml()}
        <sd-icon name="union-investment/content/image" slot="suffix"></sd-icon>
      </sd-combobox>
      <br />
      <sd-combobox placeholder="Large" size="large" clearable>
        <sd-icon name="union-investment/content/image" slot="prefix"></sd-icon>
        ${createColorOptionsHtml()}
        <sd-icon name="union-investment/content/image" slot="suffix"></sd-icon>
      </sd-combobox>
    </div>
  `
};
