import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-input');
const { generateTemplate } = storybookTemplate('sd-input');
const { overrideArgs } = storybookHelpers('sd-input');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-input',
  component: 'sd-input',
  args: overrideArgs({
    type: 'attribute',
    name: 'label',
    value: 'Label'
  }),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2649-5448&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return html`<div class="w-[300px]">${generateTemplate({ args })}</div> `;
  }
};

/**
 * Use the `size` attribute to change the size:
 *
 * - `lg` (default)
 * - `md`
 * - `sm`
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
      <sd-input label="Label attribute" spellcheck></sd-input>
      <sd-input spellcheck>
        <div slot="label" class="text-lg">Label slot</div>
      </sd-input>
    </div>
  `
};

/**
 * Use the `placeholder` attribute to add a placeholder.
 */
export const Placeholder = {
  render: () => html`
    <div class="w-[250px]">
      <sd-input placeholder="Placeholder example" label="Label" spellcheck></sd-input>
    </div>
  `
};

/**
 * Use the `value` attribute to set the value.
 */
export const Value = {
  render: () =>
    html` <div class="w-[250px]">
      <sd-input label="Label" value="Value example"> </sd-input>
    </div>`
};

/**
 * Use the `disabled` attribute to disable the input.
 */

export const Disabled = {
  render: () =>
    html`<div class="w-[250px]">
      <sd-input label="Label" value="Disabled" disabled></sd-input>
    </div>`
};

/**
 * Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers.
 *
 * __Hint:__ When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip.
 *
 * **Accessibility Hint:** Disabling elements is not recommended for accessibility reasons.
 */
export const VisuallyDisabled = {
  render: () =>
    html`<div class="w-[250px] h-[200px] pt-12">
      <sd-tooltip content="Visually disabled" trigger="hover focus" size="sm" placement="top">
        <sd-input label="Label" value="Visually disabled" visually-disabled></sd-input>
      </sd-tooltip>
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
      <sd-input label="Label" value="Read only example" readonly></sd-input>
    </div>`
};

/**
 * Use the `help-text` attribute to add a descriptive “help text”.
 *
 * For help texts that contain HTML, use the `help-text` slot instead.
 */

export const HelpText = {
  render: () => {
    return html`
      <div class="flex flex-rows gap-12">
        <sd-input label="Label" help-text="Help text attribute"></sd-input>
        <sd-input label="Label">
          <div slot="help-text" class="text-lg">Help text slot</div>
        </sd-input>
      </div>
    `;
  }
};

/**
 * Use the `clearable` attribute to add a clear button when the input has content.
 */

export const Clearable = {
  render: () =>
    html`<div class="w-[250px]">
      <sd-input label="Clearable" clearable spellcheck value="Input text"></sd-input>
    </div>`
};

/**
 * Use the `left` or `right` slot to add system icons.
 */

export const Icon = {
  render: () =>
    html`<div class="flex flex-rows gap-12">
      <sd-input label="Label" spellcheck>
        <sd-icon label="landscape" name="system/image" slot="left"></sd-icon>
      </sd-input>

      <sd-input label="Label" spellcheck>
        <sd-icon label="landscape" name="system/image" slot="right"></sd-icon>
      </sd-input>
    </div>`
};

/**
 * Use the `password-toggle` attribute to add a toggle button that will show the password when activated.
 *
 * __Hint:__ Only works with `type=password`.
 */

export const TogglePassword = {
  render: () =>
    html`<div class="w-[250px]">
      <sd-input type="password" label="Toggle password" password-toggle spellcheck></sd-input>
    </div>`
};

/**
 * Use the `type` attribute to control the type of input the browser renders.
 */

export const Type = {
  render: () =>
    html` <div class="grid grid-cols-2 gap-12 content-end">
      <sd-input
        type="text"
        placeholder="Lorem ipsum"
        label="Text (default)"
        help-text="Default type"
        spellcheck
      ></sd-input>

      <sd-input
        type="search"
        placeholder="Search term"
        label="Search"
        help-text="Use search format"
        spellcheck
      ></sd-input>

      <sd-input
        type="date"
        label="Date"
        value="2025-03-01"
        help-text="Value is restricted to date format"
        spellcheck
      ></sd-input>

      <sd-input
        type="datetime-local"
        label="Date time"
        value="2025-03-01T10:30"
        help-text="Value is restricted to datetime format"
        spellcheck
      ></sd-input>

      <sd-input
        type="time"
        label="Time"
        value="10:30"
        help-text="Value is restricted to time format"
        spellcheck
      ></sd-input>

      <sd-input
        type="number"
        placeholder="123456"
        label="Number"
        help-text="Value is restricted to numbers"
        spin-buttons
        spellcheck
      ></sd-input>

      <sd-input
        type="email"
        placeholder="someone@example.com"
        label="Email"
        help-text="Validate with email address format"
        spellcheck
      ></sd-input>

      <sd-input
        type="tel"
        placeholder="+49 1234 567891"
        label="Tel"
        help-text="Shows optimized keyboard on touch devices or similar"
        spellcheck
      ></sd-input>

      <sd-input
        type="password"
        label="Password"
        value="8SyW4jNDdrIDe2L"
        help-text="Use password display format"
        password-toggle
        spellcheck
      ></sd-input>

      <sd-input
        type="password"
        label="Password"
        value="8SyW4jNDdrIDe2L"
        help-text="Use password display format"
        password-toggle
        password-visible
        spellcheck
      ></sd-input>

      <sd-input
        type="url"
        placeholder="https://www.union-investment.de/"
        label="URL"
        help-text="Validate with url format"
        name="url field"
        spellcheck
      ></sd-input>
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
 * The component gets `invalid` state when the form is not valid.
 */

export const Invalid = {
  render: () =>
    html`<form id="invalid-form">
        <sd-input
          id="invalid-input"
          class="w-[250px]"
          label="Label"
          style-on-valid
          placeholder="Placeholder text"
        ></sd-input>
      </form>
      <script type="module">
        await Promise.all([customElements.whenDefined('sd-input')]).then(() => {
          const input = document.getElementById('invalid-input');
          input.setCustomValidity('Error text');
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
      <sd-input label="Pattern" pattern="[A-Za-z]{3,}" help-text="Required pattern is [A-Za-z]{3,}" required></sd-input>
    </div>
  `
};

/**
 * Use the `minlength` attribute to set the minimum length of the input to be valid.
 */
export const MinLength = {
  render: () => html`
    <div class="w-[250px]">
      <sd-input label="Minlength" minlength="5" help-text="5 is the minimum allowed characters" required></sd-input>
    </div>
  `
};

/**
 * Use the `maxlength` attribute to set the maximum length of the input to be valid.
 */
export const MaxLength = {
  render: () => html`
    <div class="w-[250px]">
      <sd-input label="Maxlength" maxlength="25" help-text="25 is the maximum allowed characters" required></sd-input>
    </div>
  `
};

/**
 * Use the `min` attribute to set the minimum number value of the input to be valid.
 */
export const Min = {
  render: () => html`
    <div class="w-[250px]">
      <sd-input label="Min" type="number" min="1000" help-text="Minimum value is 1000" required></sd-input>
    </div>
  `
};

/**
 * Use the `max` attribute to set the maximum number value of the input to be valid.
 */
export const Max = {
  render: () => html`
    <div class="w-[250px]">
      <sd-input label="Max" type="number" max="5000" help-text="Maximum value is 5000" required></sd-input>
    </div>
  `
};

/**
 * Use the `spin-buttons` attribute display custom spin buttons for number inputs.
 */
export const SpinButtons = {
  render: () => html`
    <div class="w-[250px]">
      <sd-input
        label="Spin buttons"
        type="number"
        min="0"
        max="100"
        help-text="Min value is 0 and Max value is 100"
        spin-buttons
      ></sd-input>
    </div>
  `
};

/**
 * Use the `floating-label` attribute to enable a floating label on the input.
 */
export const FloatingLabel = {
  render: () => html`
    <div class="w-[350px]">
      <sd-input label="Floating Label" floating-label></sd-input>
    </div>
  `
};
