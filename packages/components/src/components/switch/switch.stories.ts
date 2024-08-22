import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-switch');
const { overrideArgs } = storybookHelpers('sd-switch');
const { generateTemplate } = storybookTemplate('sd-switch');

/**
 * Gives control over a feature or option that can be turned on or off.
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
      url: 'https://www.figma.com/file/sFzAnWIy3ck28dF4vv1RnE/Switch?node-id=642%3A1032&mode=dev'
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
 * Use the `disabled` attribute to disable an input switch. Clicks will be suppressed until the disabled state is removed.
 */

export const Disabled = {
  render: () => html`<sd-switch disabled>Disabled</sd-switch>`
};

/**
 * Use the `required` attribute to mark the element as required. This can be used for form validation purposes.
 * */

export const Required = {
  render: () => html`<sd-switch required>Required</sd-switch>`
};

/**
 * The component gets `invalid` state when the form is not valid.
 */

export const Invalid = {
  render: () =>
    html` <form>
      <sd-switch required>Invalid</sd-switch>
      <sd-button style="margin-top: 16px" type="submit">Submit</sd-button>
    </form>`
};
