import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-switch');
const { overrideArgs } = storybookHelpers('sd-switch');
const { generateTemplate } = storybookTemplate('sd-switch');

/**
 * Used to give control over a feature or option that can be turned on or off.
 */

export default {
  tags: ['!dev'],
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
      <sd-switch required id="invalid-switch">Invalid</sd-switch>
      <sd-button id="invalid-button" class="hidden" type="submit"></sd-button>
    </form>
    <script type="module">
      await Promise.all([customElements.whenDefined('sd-switch')]).then(() => {
        const button = document.getElementById('invalid-button');
        button.click();
      });
    </script>
  `
};
