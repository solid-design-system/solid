import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-textarea');
const { generateTemplate } = storybookTemplate('sd-textarea');
const { overrideArgs } = storybookHelpers('sd-textarea');

export default {
  title: 'Components/sd-textarea',
  tags: ['!dev', 'autodocs'],
  component: 'sd-textarea',
  args,
  argTypes: {
    ...argTypes
  },
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2619-19544&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  name: 'Default',
  args: overrideArgs([{ type: 'attribute', name: 'label', value: 'Label' }]),
  render: (args: any) => {
    return html`<div class="w-[500px]">${generateTemplate({ args })}</div> `;
  }
};

/**
 * Use the `size` attribute to change the size:
 * - 'lg' (default)
 * - 'md'
 * - 'sm'
 */

export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-textarea value="Large" size="lg" label="Label" rows="4" spellcheck></sd-textarea>

      <sd-textarea value="Medium" size="md" label="Label" rows="4" spellcheck></sd-textarea>

      <sd-textarea value="Small" size="sm" label="Label" rows="4" spellcheck></sd-textarea>
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
      <sd-textarea size="lg" label="Label" rows="4" spellcheck></sd-textarea>

      <sd-textarea size="lg" label="Label" rows="8" spellcheck></sd-textarea>

      <sd-textarea size="lg" label="Label" rows="12" spellcheck></sd-textarea>
    </div>
  `
};

/**
 * Use the `label` attribute to provide an accessible label for the textarea element.
 *
 * For labels that contain HTML, use the `label` slot instead.
 */

export const Label = {
  name: 'Label',
  render: () => html`
    <div class="flex gap-12">
      <sd-textarea size="lg" label="Label Attribute" rows="4" spellcheck class="w-full"></sd-textarea>
      <sd-textarea size="lg" rows="4" spellcheck class="w-full">
        <div slot="label" class="text-lg">Label Slot</div>
      </sd-textarea>
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
      <sd-textarea size="lg" label="Label" placeholder="Placeholder example" rows="4" spellcheck></sd-textarea>
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
      <sd-textarea size="lg" label="Label" placeholder="Input text disabled" rows="4" spellcheck disabled></sd-textarea>
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
  name: 'Visually Disabled',
  render: () => html`
    <div class="w-[500px] mt-12">
      <sd-tooltip content="Visually Disabled" trigger="hover focus" size="sm">
        <sd-textarea
          size="lg"
          label="Label"
          placeholder="Input text visually disabled"
          rows="4"
          spellcheck
          visually-disabled
        ></sd-textarea>
      </sd-tooltip>
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
  name: 'Read only',
  render: () => html`
    <div class="w-[500px]">
      <sd-textarea
        value="Read only example Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        size="lg"
        label="Label"
        rows="4"
        readonly
        spellcheck
      ></sd-textarea>
    </div>
  `
};

/**
 * Use the `help-text` attribute to provide an accessible help text for the textarea element.
 *
 * For help texts that contain HTML, use the `help-text` slot instead.
 */

export const HelpText = {
  name: 'Help Text',
  render: () => html`
    <div class="flex gap-12">
      <sd-textarea size="lg" label="Label" help-text="Help text Attribute" rows="4" class="w-full"></sd-textarea>
      <sd-textarea size="lg" label="Label" rows="4" spellcheck class="w-full">
        <div slot="help-text" class="text-lg">Help text Slot</div>
      </sd-textarea>
    </div>
  `
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 */
export const Required = {
  name: 'Required',
  render: () => html`
    <div class="w-[500px]">
      <sd-textarea size="lg" label="Required" rows="4" required spellcheck></sd-textarea>
    </div>
  `
};

/**
 * The component gets `valid` state when the input is valid. Use the `style-on-valid` attribute to automatically indicate and show a valid state.
 */

export const Valid = {
  render: () => html`
    <form class="w-[500px]">
      <sd-textarea
        id="valid-textarea"
        value="Input text here"
        size="lg"
        label="Label"
        style-on-valid
        spellcheck
      ></sd-textarea>
    </form>
    <script type="module">
      await Promise.all([customElements.whenDefined('sd-textarea'), customElements.whenDefined('sd-button')]).then(
        () => {
          const input = document.getElementById('valid-textarea');

          input.setCustomValidity(''); // Clear custom validity
          input.reportValidity();
        }
      );
    </script>
  `
};

/**
 * The component gets `invalid` state when the form is not valid.
 */
export const Invalid = {
  render: () => html`
    <form class="w-[500px]">
      <sd-textarea
        id="invalid-textarea"
        value=""
        size="lg"
        label="Label"
        rows="4"
        placeholder="Placeholder"
        style-on-valid
        spellcheck
      ></sd-textarea>
    </form>
    <script type="module">
      await Promise.all([customElements.whenDefined('sd-textarea'), customElements.whenDefined('sd-button')]).then(
        () => {
          const input = document.getElementById('invalid-textarea');

          input.setCustomValidity('Error text');
          input.reportValidity();
        }
      );
    </script>
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
