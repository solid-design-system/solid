import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-radio-group');
const { generateTemplate } = storybookTemplate('sd-radio-group');
const { overrideArgs } = storybookHelpers('sd-radio-group');

/**
 * Used to group multiple input radio or radio buttons so they function as a single form control.
 *
 *  **Related components**:
 * - [sd-radio](?path=/docs/components-sd-radio--docs)
 * - [sd-radio-button](?path=/docs/components-sd-radio-button--docs)
 */

export default {
  title: 'Components/sd-radio-group',
  component: 'sd-radio-group',
  tags: ['!dev'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LP6fOKJjWupBBAL0rylL7H/Radio-%2F-Radio-Group?type=design&node-id=0-1&mode=design&t=ksZl4QS9N7UeLysz-0'
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'label',
      value: `<label slot="label">Group Label</label>`
    },
    {
      type: 'slot',
      name: 'default',
      value: `<sd-radio value="1">Radio 1</sd-radio><sd-radio value="2">Radio 2</sd-radio><sd-radio value="3">Radio 3</sd-radio>`
    },
    { type: 'attribute', name: 'name', value: 'radio-group' },
    { type: 'attribute', name: 'value', value: '1' },
    { type: 'attribute', name: 'boldLabel', value: true }
  ]),
  argTypes
};

/**
 * Default: This shows sd-radio-group in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `size` attribute to change the size.
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group name="radio-group" size="lg" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>

      <sd-radio-group name="radio-group" size="sm" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `orientation` attribute to set the orientation of the radio buttons.
 */

export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex gap-12">
      <sd-radio-group name="radio-group" orientation="vertical" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Vertical Group</label>
      </sd-radio-group>

      <sd-radio-group name="radio-group" orientation="horizontal" value="1">
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Horizontal Group</label>
      </sd-radio-group>
    </div>
  `
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 *
 *
 * **Accessibility:** To ensure screen-reader compatibility, consider including a statement such as "Fields marked with an asterisk (*) are required" at the start of the form.
 */

export const Required = {
  name: 'Required',
  render: () => html`
    <form id="required-form" class="flex flex-col gap-2">
      <sd-radio-group name="radio-group" required boldlabel>
        <sd-radio value="1">Radio 1</sd-radio>
        <sd-radio value="2">Radio 2</sd-radio>
        <sd-radio value="3">Radio 3</sd-radio>
        <label slot="label">Required Group</label>
      </sd-radio-group>

      <div class="flex gap-2">
        <sd-button class="w-min" type="submit">Submit</sd-button>
        <sd-button class="w-min" type="reset" variant="secondary">Reset</sd-button>
      </div>
    </form>

    <script type="module">
      // Wait for custom elements to be defined
      await Promise.all([customElements.whenDefined('sd-radio-group'), customElements.whenDefined('sd-button')]).then(
        () => {
          const form = document.getElementById('required-form');

          form.addEventListener('submit', event => {
            event.preventDefault();
            alert('This field is valid!');
          });
        }
      );
    </script>
  `
};

/**
 * 1. You can use the `setCustomValidity` method to set a custom validation message. This will override any native validation messages.
 * 2. Set an empty string to clear the custom validity and make the input valid.
 * 3. To show the validation message, call the `reportValidity` method. Originally this would show a native validation bubble, but we show the error messages inline.
 */

export const setCustomValidity = {
  name: 'Custom Validation',
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  render: () => {
    return html`
      <!-- block submit and show alert instead -->
      <form id="validationForm" class="flex flex-col gap-2">
        <sd-radio-group id="custom-input">
          <sd-radio id="radio-1" name="a" value="1">1</sd-radio>
          <sd-radio id="radio-2" name="a" value="2">2</sd-radio>
        </sd-radio-group>
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
          customElements.whenDefined('sd-radio-group'),
          customElements.whenDefined('sd-button'),
          customElements.whenDefined('sd-radio')
        ]).then(() => {
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
        });
      </script>
    `;
  }
};
