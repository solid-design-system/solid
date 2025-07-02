import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-switch');
const { overrideArgs } = storybookHelpers('sd-switch');
const { generateTemplate } = storybookTemplate('sd-switch');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-switch',
  component: 'sd-switch',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Switch' }]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2265-39406&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `checked` attribute to activate the switch.
 */

export const Checked = {
  render: () => html`<sd-switch checked>Checked</sd-switch>`
};

/**
 * Use the `disabled` attribute to disable the switch. Clicks will be suppressed until the disabled state is removed.
 */

export const Disabled = {
  render: () => html`<sd-switch disabled>Disabled</sd-switch>`
};

/**
 * Use the `required` attribute to mark the switch as required. This can be used for form validation purposes.
 */

export const Required = {
  render: () => html`<sd-switch required>Required</sd-switch>`
};

/**
 * The component gets `invalid` state when the form is not valid.
 *
 * For an invalid switch an error-text underneath is mandatory.
 */

export const Invalid = {
  render: () => html`
    <form id="invalid-form">
      <sd-switch checked required id="invalid-switch">Invalid</sd-switch>
    </form>
    <script type="module">
      // Wait for custom elements to be defined
      await Promise.all([customElements.whenDefined('sd-switch')]).then(() => {
        const sdSwitch = document.getElementById('invalid-switch');

        sdSwitch.click();
        sdSwitch.reportValidity();
        sdSwitch.setCustomValidity('Error-text');
      });
    </script>
  `
};
