import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-textarea');
const { generateTemplate } = storybookTemplate('sd-textarea');
const { overrideArgs } = storybookHelpers('sd-textarea');

/**
 * Collect data from the user and allow multiple lines of text.
 */
export default {
  title: 'Components/sd-textarea',
  tags: ['!dev'],
  component: 'sd-textarea',
  args,
  argTypes: {
    ...argTypes
  },
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/07Bzd23A0QSrSWiXy6w2uM/Text-Area?node-id=1010%3A1736&mode=dev'
    }
  },
  decorators: [withActions] as any
};

/**
 * This shows sd-textarea in its default state.
 */
export const Default = {
  name: 'Default',
  args: overrideArgs([
    { type: 'attribute', name: 'label', value: 'Label' },
    { type: 'attribute', name: 'value', value: 'value' },
    { type: 'attribute', name: 'help-text', value: 'help-text' }
  ]),
  render: (args: any) => {
    return html`<div class="w-[500px]">${generateTemplate({ args })}</div> `;
  }
};

/**
 * Use the `size` attribute to change the size.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-textarea value="value" size="lg" label="Label" help-text="help-text" rows="4" spellcheck=""></sd-textarea>

      <sd-textarea value="value" size="md" label="Label" help-text="help-text" rows="4" spellcheck=""></sd-textarea>

      <sd-textarea value="value" size="sm" label="Label" help-text="help-text" rows="4" spellcheck=""></sd-textarea>
    </div>
  `
};

/**
 * Use the `help-text` slot to add help text.
 */

export const HelpText = {
  name: 'Help Text',
  render: () => html`
    <div class="w-[500px]">
      <sd-textarea
        size="lg"
        label="Label"
        help-text="Help text example"
        placeholder="Placeholder"
        rows="4"
      ></sd-textarea>
    </div>
  `
};

/**
 * Use the `placeholder` attribute to add a placeholder.
 */

export const Placeholder = {
  name: 'Placeholder',
  render: () => html`
    <div class="w-[500px]">
      <sd-textarea
        size="lg"
        label="Label"
        help-text="help-text"
        placeholder="Placeholder example"
        rows="4"
        spellcheck=""
      ></sd-textarea>
    </div>
  `
};

/**
 * Use the `rows` attribute to set the number of rows.
 */

export const Rows = {
  name: 'Rows',
  render: () => html`
    <div class="flex gap-12">
      <sd-textarea
        size="lg"
        label="Label"
        help-text="help-text"
        placeholder="Placeholder example"
        rows="4"
        spellcheck=""
      ></sd-textarea>

      <sd-textarea
        size="lg"
        label="Label"
        help-text="help-text"
        placeholder="Placeholder example"
        rows="8"
        spellcheck=""
      ></sd-textarea>

      <sd-textarea
        size="lg"
        label="Label"
        help-text="help-text"
        placeholder="Placeholder example"
        rows="12"
        spellcheck=""
      ></sd-textarea>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable the textarea.
 */
export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <div class="w-[500px]">
      <sd-textarea
        size="lg"
        label="Label"
        help-text="help-text"
        placeholder="Placeholder"
        rows="4"
        spellcheck=""
        disabled
      ></sd-textarea>
    </div>
  `
};

/**
 * Use the `readonly` attribute to render a textarea as readonly.
 *
 * Interaction is enabled, but the textarea cannot be edited.
 * Events will be fired.
 */
export const Readonly = {
  name: 'Readonly',
  render: () => html`
    <div class="w-[500px]">
      <sd-textarea
        value="value"
        size="lg"
        label="Label"
        help-text="help-text"
        rows="4"
        readonly=""
        spellcheck=""
      ></sd-textarea>
    </div>
  `
};

/**
 * Use the `required` attribute to mark the textarea as required.
 */
export const Required = {
  name: 'Required',
  render: () => html`
    <div class="w-[500px]">
      <sd-textarea
        value="value"
        size="lg"
        label="Label"
        help-text="help-text"
        rows="4"
        required=""
        spellcheck=""
      ></sd-textarea>
    </div>
  `
};

/**
 * Use the `minlength` attribute to set a minimum length for the textarea to be valid.
 */
export const MinLength = {
  name: 'Min Length',
  render: () => html`
    <div class="w-[500px]">
      <sd-textarea
        value=""
        size="lg"
        label="Label"
        help-text="Please type at least 5 characters"
        rows="4"
        spellcheck=""
        minlength="5"
      ></sd-textarea>
    </div>
  `
};

/**
 * Use the `maxlength` attribute to set a maximum length for the textarea to be valid.
 */
export const MaxLength = {
  name: 'Max Length',
  render: () => html`
    <div class="w-[500px]">
      <sd-textarea
        value=""
        size="lg"
        label="Label"
        help-text="You are limited to a maximum of 5 characters"
        rows="4"
        spellcheck=""
        maxlength="5"
      ></sd-textarea>
    </div>
  `
};

/**
 * Use the `style-on-valid` attribute to opt-in the automatic indication of a valid state.
 */

export const StyleOnValid = {
  name: 'Style on Valid',
  render: () => html`
    <div class="w-[500px]">
      <sd-textarea
        value="value"
        size="lg"
        label="Label"
        help-text="help-text"
        rows="4"
        style-on-valid=""
        spellcheck=""
        minlength="5"
      ></sd-textarea>
    </div>
  `
};

/**
 * Demonstrates the various validation options extended from the native textarea element in addition to error and success styles.
 */

export const Validation = {
  name: 'Validation',
  render: () => html`
    <form action="" method="get" id="testForm" name="testForm" class="w-[500px]">
      <div class="mb-2">
        <sd-textarea
          name="required field"
          size="lg"
          label="Required"
          help-text="textarea must be filled"
          placeholder=".*"
          rows="4"
          form="testForm"
          required=""
          style-on-valid=""
          spellcheck=""
        ></sd-textarea>
      </div>
      <div class="mb-2">
        <sd-textarea
          name="min length field"
          size="lg"
          label="Min Length"
          help-text="value must meet minlength"
          placeholder="^.{3,}$"
          rows="4"
          form="testForm"
          required=""
          minlength="3"
          style-on-valid=""
          spellcheck=""
        ></sd-textarea>
      </div>
      <div class="mb-2">
        <sd-textarea
          name="max length field"
          size="lg"
          label="Max Length"
          help-text="value cannot exceed maxlength"
          placeholder="^.{0,3}$"
          rows="4"
          form="testForm"
          required=""
          maxlength="3"
          style-on-valid=""
          spellcheck=""
        ></sd-textarea>
      </div>
      <sd-button type="submit">Submit</sd-button>
    </form>
  `
};

/**
 * 1. You can use the `setCustomValidity` method to set a custom validation message. This will override any native validation messages.
 * 2. Set an empty string to clear the custom validity and make the input valid.
 * 3. To show the validation message, call the `reportValidity` method. Originally this would show a native validation bubble, but we show the error messages inline.
 */

export const setCustomValidity = {
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  render: () => {
    return html`
      <!-- block submit and show alert instead -->
      <form id="validationForm" class="flex flex-col gap-2 w-[500px]">
        <sd-textarea id="custom-input" label="Input" style-on-valid></sd-textarea>
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
