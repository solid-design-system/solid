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
      <sd-input size="lg" label="Label"> </sd-input>
      <sd-input size="md" label="Label"> </sd-input>
      <sd-input size="sm" label="Label"> </sd-input>
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
      <sd-input label="Label" spellcheck></sd-input>
      <sd-input spellcheck>
        <div slot="label" class="text-lg">Label</div>
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
        <sd-input label="Label" help-text="Help text"></sd-input>
        <sd-input label="Label">
          <div slot="help-text" class="text-lg">Help text</div>
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
      <sd-input label="Clearable" clearable spellcheck></sd-input>
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
    html`<div class="w-[250px]">
      <sd-input label="Label" style-on-valid></sd-input>
    </div>`
};

/**
 * 1. You can use the `setCustomValidity` method to set a custom validation message. This will override any native validation messages.
 * 2. Set an empty string to clear the custom validity and make the input valid.
 * 3. To show the validation message, call the `reportValidity` method. Originally this would show a native validation bubble, but we show the error messages inline.
 */

export const setCustomValidity = {
  render: () => {
    return html`
      <!-- block submit and show alert instead -->
      <form id="validationForm" class="flex flex-col gap-2">
        <sd-input id="custom-input" label="Input" style-on-valid></sd-input>
        <div>
          <sd-button type="submit">Submit</sd-button>
          <sd-button id="error-button" variant="secondary">Set custom error</sd-button>
          <sd-button id="success-button" variant="secondary">Set success</sd-button>
          <sd-button type="reset" variant="secondary">Reset</sd-button>
        </div>
      </form>
      <script type="module">
        // Wait for custom elements to be defined
        await Promise.all([customElements.whenDefined('sd-input'), customElements.whenDefined('sd-button')]).then(
          () => {
            const form = document.getElementById('validationForm');
            const input = document.getElementById('custom-input');
            const setErrorButton = document.getElementById('error-button');
            const setSuccessButton = document.getElementById('success-button');

            // Initial error
            const errorMessage = \`This is an initial custom error (\${new Date().toLocaleTimeString()})\`;
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
          }
        );
      </script>
    `;
  }
};
