import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-file-selector');
const { generateTemplate } = storybookTemplate('sd-file-selector');
//TODO ADD ACCEPT

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-file-selector',
  component: 'sd-file-selector',
  args,
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `drop-area` attribute to switch to a drop area appearance.
 */
export const Variant = {
  render: () =>
    html` <div class="flex flex-col gap-10">
      <sd-file-selector label="sd-file-selector default variant"></sd-file-selector>
      <sd-file-selector drop-area label="sd-file-selector drop area variant"></sd-file-selector>
    </div>`
};

/**
 * Use the `size` attribute to change the size:
 *
 * - `lg` (default)
 * - `md`
 * - `sm`
 *
 * On drop-area variant “md” and “sm” sizes are not available.
 */
export const Sizes = {
  render: () =>
    html` <div class="flex flex-col gap-10">
      <sd-file-selector size="lg" label="sd-file-selector large size"></sd-file-selector>
      <sd-file-selector size="md" label="sd-file-selector medium size"></sd-file-selector>
      <sd-file-selector size="sm" label="sd-file-selector small size"></sd-file-selector>
    </div>`
};

/**
 * Use the `label` attribute to add an accessible label to the file selector.
 *
 * For labels that contain HTML, use the label slot instead.
 *
 * This label is visually hidden by default, to display it, use the `show-label` attribute.
 */
export const Label = {
  render: () =>
    html`<div class="flex flex-col gap-10">
      <sd-file-selector label="Select a file to upload"></sd-file-selector>
      <sd-file-selector label="Select a file to upload" show-label></sd-file-selector>
      <sd-file-selector label="Select a file to upload" show-label>
        <div slot="label" class="text-lg">Label slot</div>
      </sd-file-selector>
    </div>`
};

/**
 * Use the `disabled` attribute to disable the file selector.
 */
export const Disabled = {
  render: () => html`<sd-file-selector label="Select a file to upload" disabled></sd-file-selector>`
};

/**
 * Use the `visually-disabled` attribute to style the component as if it was disabled and enable `aria-disabled` to allow it to be reachable by screen readers. When using this attribute, make sure to provide ways to inform the user why the element is disabled and how to enable it. This can be done by using the `help-text` attribute or wrapping the element in a sd-tooltip. Disabling elements is not recommended for accessibility reasons.
 */
export const VisuallyDisabled = {
  render: () =>
    html` <div class="w-[250px] pt-12">
      <sd-tooltip content="Visually disabled" trigger="hover focus" size="sm" placement="top">
        <sd-file-selector value="Visually disabled" label="Select a file to upload" visually-disabled></sd-file-selector
      ></sd-tooltip>
    </div>`
};

/**
 * Use the `help-text`attribute to provide additional context or instructions as:
 *
 * - file size restrictions
 * - file format requirements
 * - file selection limit
 *
 * For help-text that contain HTML, use the help-text slot instead.
 */
export const HelpText = {
  render: () =>
    html`<div class="flex flex-col gap-10">
      <sd-file-selector
        label="Select a file to upload"
        help-text="Max file size is 3 MB. Only PDF, JPG and PNG files are supported."
      >
      </sd-file-selector>
      <sd-file-selector label="Select a file to upload">
        <div slot="help-text" class="text-lg">Max file size is 3 MB. Only PDF, JPG and PNG files are supported.</div>
      </sd-file-selector>
    </div>`
};

/**
 * Use the `multiple` attribute to allow multiple files selection.
 */
export const MultipleFiles = {
  name: 'Multiple',
  render: () => html` <sd-file-selector label="Select a file to upload" multiple></sd-file-selector>`
};

/**
 * Use the `hide-value` attribute where you don’t want to show the selected value.
 */
export const HideValue = {
  render: () => html` <sd-file-selector label="Select a file to upload" hide-value></sd-file-selector>`
};

/**
 * Use the `required` attribute to make the file selector a required field. This can be used for form validation purposes.
 *
 * __Note:__ For accessibility reasons, required fields must always display a visible label and value.
 */
export const Required = {
  render: () => html` <sd-file-selector label="Required" show-label required></sd-file-selector>`
};

//TODO fix invalid
/**
 * The component gets an `invalid` state either when the form is not valid (default variant) or when selected files don't meet the required restrictions (drop-area variant).
 */
export const Invalid = {
  render: () =>
    html` <form id="invalid-form">
        <sd-file-selector id="invalid-file-selector" label="Select a file to upload" show-label style-on-valid>
        </sd-file-selector>
      </form>
      <script type="module">
        await Promise.all([customElements.whenDefined('sd-file-selector')]).then(() => {
          const fileSelector = document.getElementById('invalid-file-selector');
          fileSelector.setCustomValidity('Error text');
          fileSelector.reportValidity();
        });
      </script>`
};
