import '../../../../components/src/solid-components';
import {
  type ConstantDefinition,
  storybookDefaults,
  storybookHelpers,
  storybookTemplate
} from '../../../scripts/storybook/helper';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import SdCombobox from '../../../../components/src/components/combobox/combobox';

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
  tags: ['!dev', 'autodocs'],
  component: 'sd-combobox',
  args: overrideArgs([
    threeOptionsConstant,
    labelConstant,
    { type: 'attribute', name: 'placeholder', value: ' ' },
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
  render: (args: any) => {
    delete args['filter'];
    delete args['getOption'];
    delete args['getOption-attr'];

    return html`<div class="h-[260px] w-[400px]">${generateTemplate({ args })}</div>`;
  }
};

/**
 * Use the `size` attribute to change the size. It will cascade to slotted `sd-option` elements:
 * - `lg` (default)
 * - `md`
 * - `sm`
 *
 * __Note:__ On the `floating-label` variant “sm” size is not available.
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
      <sd-combobox size="lg" label="Label attribute" placement="bottom" value="">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-combobox>

      <sd-combobox size="lg" placement="bottom" value="">
        <div slot="label" class="text-lg">Label slot</div>
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
 * Use the `floating-label` attribute to enable a floating label on the combobox.
 *
 * __Note:__ Floating labels only work with the `label` attribute. The `label` slot is not supported. Only the `lg` and `md` sizes are available.
 */
export const FloatingLabel = {
  render: () => html`
    <div class="flex gap-12 h-[500px] w-[400px]">
      <sd-combobox size="lg" label="Floating Label" floating-label placement="bottom" value="">
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
 * Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
 *
 * __Hint:__ When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
 *
 * **Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.
 */
export const VisuallyDisabled = {
  render: () => html`
    <div class="w-[400px] h-[200px] pt-12">
      <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm" placement="top">
        <sd-combobox
          size="lg"
          label="Label"
          placeholder="Visually disabled"
          placement="bottom"
          value=""
          visually-disabled
        >
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
          <sd-option value="option-4">Option 4</sd-option>
          <sd-option value="option-5">Option 5</sd-option>
        </sd-combobox>
      </sd-tooltip>
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
      <sd-combobox size="lg" label="Label" placement="bottom" value="" help-text="Help text attribute">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
        <sd-option value="option-4">Option 4</sd-option>
        <sd-option value="option-5">Option 5</sd-option>
      </sd-combobox>

      <sd-combobox size="lg" label="Label" placement="bottom" value="">
        <div slot="help-text" class="text-lg">Help text slot</div>
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
      <sd-combobox label="Label">
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-combobox>
    </div>
  `
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
      <sd-combobox label="Preferred color" id="max-height" value="g"> ${createColorOptionsHtml()} </sd-combobox>
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
 *  Use the “left” and “right” slots to add system icons.
 *
 *  Show the search icon in either the left slot or right icon slot instead of the chevron icon (don’t show two icons on the right-hand side).
 *
 *  __Accessibility hint__: The label can be omitted for search input fields if a button (e.g., aria-label="Search") with a search icon is present.
 */
export const Icons = {
  render: () => html`
    <div class="w-[400px] h-[400px]">
      <sd-combobox size="lg" clearable label="Label">
        <sd-icon slot="left" name="system/image" aria-hidden="true" color="currentColor"></sd-icon>
        ${createColorOptionsHtml()}
        <button slot="right" aria-label="Search" class="sd-interactive flex">
          <sd-icon name="system/magnifying-glass" aria-hidden="true" color="currentColor"></sd-icon>
        </button>
      </sd-combobox>
    </div>
  `
};

/**
 * Use the `type="search"` to control the type of input the browser renders.
 */
export const Search = {
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox size="lg" label="Label" placement="bottom" type="search" value="">
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
 * To inform your users about their selected options tags are displayed.
 * Use Backspace to remove the last selected option.
 * Use `--tag-max-width` to set the maximum width of the tags and to show an ellipsis, e.g. `<sd-combobox style="--tag-max-width: 40px">`. The default value is `15ch`.
 *
 * __Hint:__ If you really don't want to show tags, you can hide them with CSS via `::part(tags)`.
 */

export const Multiple = {
  render: () => html`
    <div class="w-[700px] h-[400px]">
      <sd-combobox
        size="lg"
        label="Funds name"
        placement="bottom"
        multiple
        value="BBBank_Dynamik_Union BBBank_Kontinuität_Union"
      >
        <sd-option value="BBBank_Dynamik_Union" checkbox>BBBank Dynamik Union</sd-option>
        <sd-option value="BBBank_Kontinuität_Union" checkbox>BBBank Kontinuität Union</sd-option>
        <sd-option value="BBBank_Nachhaltigkeit_Union" checkbox>BBBank Nachhaltigkeit Union</sd-option>
        <sd-option value="BBBank_Wachstum_Union" checkbox>BBBank Wachstum Union</sd-option>
        <sd-option value="BBBank_Zukunft_Union" checkbox>BBBank Zukunft Union</sd-option>
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
    <div class="w-[700px] h-[400px]">
      <sd-combobox
        size="lg"
        label="Funds name"
        placement="bottom"
        multiple
        value="BBBank_Dynamik_Union BBBank_Kontinuität_Union BBBank_Nachhaltigkeit_Union"
        max-options-visible="2"
      >
        <sd-option value="BBBank_Dynamik_Union" checkbox>BBBank Dynamik Union</sd-option>
        <sd-option value="BBBank_Kontinuität_Union" checkbox>BBBank Kontinuität Union</sd-option>
        <sd-option value="BBBank_Nachhaltigkeit_Union" checkbox>BBBank Nachhaltigkeit Union</sd-option>
        <sd-option value="BBBank_Wachstum_Union" checkbox>BBBank Wachstum Union</sd-option>
        <sd-option value="BBBank_Zukunft_Union" checkbox>BBBank Zukunft Union</sd-option>
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
      <sd-combobox
        size="lg"
        label="Required"
        placeholder="Please search and select"
        placement="bottom"
        value=""
        required=""
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
 * The component gets `valid` state when the input is valid.
 *
 * Use the `style-on-valid` attribute to automatically indicate and show a valid state.
 */

export const Valid = {
  render: () => html`
    <div class="w-[400px] h-[400px]">
      <sd-combobox
        size="lg"
        placement="bottom"
        label="Label"
        placeholder="Please search and select"
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
        placeholder="Please search and select"
        style-on-valid=""
        value=""
        required=""
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
 * It is possible to add options dynamically to the combobox e.g. if the option values need to be fetched asynchronously from a remote server or API.
 */
export const AsyncOptions = {
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
  render: () => html`
    <div class="w-[400px] h-[500px]">
      <sd-combobox label="Custom filter" class="filter-combobox"> ${createColorOptionsHtml()} </sd-combobox>
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
