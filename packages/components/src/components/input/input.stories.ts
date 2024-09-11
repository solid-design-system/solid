import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-input');
const { generateTemplate } = storybookTemplate('sd-input');

/**
 * Allows users to enter text. It can be displayed in several ways, depending on the type attribute.
 */

export default {
  tags: ['!dev'],
  title: 'Components/sd-input',
  component: 'sd-input',
  args,
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/xSIeTnyfW2T21Uw5JgdZOg/Input?node-id=0%3A1&mode=dev'
    }
  }
};

/**
 * This shows sd-input in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div class="w-[250px]">${generateTemplate({ args })}</div> `;
  }
};

/**
 * Use the `size` attribute to change the size.
 */

export const Size = {
  render: () => html`
    <div class="grid grid-cols-2 gap-12 content-end">
      <sd-input size="lg" label="Label" placeholder="Large"></sd-input>
      <sd-input size="md" label="Label" placeholder="Medium"></sd-input>
      <sd-input size="sm" label="Label" placeholder="Small"></sd-input>
    </div>
  `
};

/**
 * Use the `label` attribute to give the input an accessible label.
 *
 * For labels that contain HTML, use the `label` slot instead.
 */

export const Label = {
  render: () => html`
    <div class="flex flex-row gap-12 items-baseline">
      <sd-input label="Label Attribute" spellcheck></sd-input>
      <sd-input spellcheck>
        <div slot="label" class="text-lg">Label Slot</div>
      </sd-input>
    </div>
  `
};

/**
 *Use the `placeholder` attribute to add a placeholder.
 */
export const Placeholder = {
  render: () => html`
    <div class="w-[250px]">
      <sd-input placeholder="Placeholder example" spellcheck></sd-input>
    </div>
  `
};

/**
 * Use the `value` attribute to set the value.
 */
export const Value = {
  render: () =>
    html` <div class="w-[250px]">
      <sd-input value="Value example"></sd-input>
    </div>`
};

/**
 * Use the `inputmode` attribute Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual keyboard on supportive devices.

'none'
'text'
'decimal'
'numeric'
'tel'
'search'
'email'
'url'
 */

/**
 * Use the `disabled` attribute to disable the input.
 */

export const Disabled = {
  render: () =>
    html`<div class="w-[250px]">
      <sd-input label="Label" placeholder="Input text disabled" disabled></sd-input>
    </div>`
};

/**
 * Use the `read-only` attribute to render an input as read only.
 *
 * Interaction is enabled, but the textarea cannot be edited. Events will be fired.
 */
export const ReadOnly = {
  render: () =>
    html`<div class="w-[250px]">
      <sd-input label="Label" placeholder="Read only example" readonly></sd-input>
    </div>`
};

/**
 * Use the `help-text` attribute to add a descriptive “help text”. For help texts that contain HTML, use the `help-text` slot instead.
 */

export const HelpText = {
  render: () => {
    return html`
      <div class="flex flex-rows gap-12">
        <sd-input label="Label" help-text="Help text Attribute"></sd-input>
        <sd-input label="Label">
          <div slot="help-text" class="text-lg">Help text Slot</div>
        </sd-input>
      </div>
    `;
  }
};

/**
 * Add the `clearable` attribute to add a clear button when the input has content.
 */

export const Clearable = {
  render: () =>
    html`<div class="w-[250px]">
      <sd-input label="Clearable" clearable spellcheck value="Input Text"></sd-input>
    </div>`
};

/**
 * Add the `password-toggle` attribute to add a toggle button that will show the password when activated.
 * - Note: Only works with `type=password`.
 */

export const TogglePassword = {
  render: () =>
    html`<div class="w-[250px]">
      <sd-input type="password" label="Toggle Password" password-toggle spellcheck></sd-input>
    </div>`
};

/**
 * Use the `type` attribute to control the type of input the browser renders.
 */

export const Type = {
  render: () =>
    html` <div class="grid grid-cols-2 gap-12 content-end">
      <div class="mb-2">
        <sd-input type="text" placeholder=".*" label="Text" help-text="default type" spellcheck></sd-input>
      </div>
      <div class="mb-2">
        <sd-input
          type="search"
          placeholder="^d{1,3}$"
          label="Search"
          help-text="use search format"
          spellcheck
        ></sd-input>
      </div>
      <div class="mb-2">
        <sd-input
          type="date"
          placeholder="someone@example.com"
          label="Date"
          help-text="value is restricted to date format"
          spellcheck
        ></sd-input>
      </div>
      <div class="mb-2">
        <sd-input
          type="datetime-local"
          placeholder="someone@example.com"
          label="Date Time"
          help-text="value is restricted to datetime format"
          spellcheck
        ></sd-input>
      </div>
      <div class="mb-2">
        <sd-input type="time" label="Time" help-text="value is restricted to time format" spellcheck></sd-input>
      </div>
      <div class="mb-2">
        <sd-input
          type="number"
          placeholder="^d{1,3}$"
          label="Number"
          help-text="value is restricted to numbers"
          spellcheck
        ></sd-input>
      </div>
      <div class="mb-2">
        <sd-input
          type="email"
          placeholder="someone@example.com"
          label="Email"
          help-text="validate with email address format"
          spellcheck
        ></sd-input>
      </div>
      <div class="mb-2">
        <sd-input
          type="tel"
          placeholder="+49 1234 567891"
          label="Tel"
          help-text="Shows optimized keyboard on touch devices or similar"
          spellcheck
        ></sd-input>
      </div>
      <div class="mb-2">
        <sd-input
          type="password"
          placeholder=".*"
          label="Password"
          help-text="use password display format"
          password-toggle
          spellcheck
        ></sd-input>
      </div>
      <div class="mb-2">
        <sd-input
          type="url"
          placeholder="https://www.union-investment.de/"
          label="URL"
          help-text="validate with url format"
          name="url field"
          spellcheck
        ></sd-input>
      </div>
    </div>`
};

/**
 *
 */

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 */

export const Required = {
  render: () =>
    html`<div class="w-[250px]">
      <sd-input label="Label" required></sd-input>
    </div>`
};

/**
 * The component gets `valid` state when the input is valid.
 * Use the `style-on-valid` attribute to automatically indicate and show a valid state.
 */

export const Valid = {
  render: () =>
    html`<form id="valid-form">
        <sd-input id="valid-input" class="w-[250px]" label="Label" style-on-valid value="Input text here"></sd-input>
      </form>
      <script type="module">
        await Promise.all([customElements.whenDefined('sd-input')]).then(() => {
          const input = document.getElementById('valid-input');
          input.setCustomValidity(''); // Clear custom validity
          input.reportValidity();
        });
      </script>`
};

/**
 * The component gets `invalid` state when the form is invalid.
 */

export const Invalid = {
  render: () =>
    html`<form id="invalid-form">
        <sd-input
          id="invalid-input"
          class="w-[250px]"
          label="Label"
          style-on-valid
          placeholder="Placeholder"
        ></sd-input>
      </form>
      <script type="module">
        await Promise.all([customElements.whenDefined('sd-input')]).then(() => {
          const input = document.getElementById('invalid-input');
          input.setCustomValidity('Error message');
          input.reportValidity();
        });
      </script>`
};

/**
 * Use the `pattern` attribute to use a regular expression to validate the input.
 */
export const Pattern = {
  render: () => html`
    <div class="w-[250px]">
      <sd-input label="Pattern" pattern="[A-Za-z]{3,}" help-text="[A-Za-z]{3,}" required></sd-input>
    </div>
  `
};
