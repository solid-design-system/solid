import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-switch');
const { overrideArgs } = storybookHelpers('sd-switch');

/**
 * Gives control over a feature or option that can be turned on or off
 */

export default {
  tags: ['!dev'],
  title: 'Components/sd-switch',
  component: 'sd-switch',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Default Slot' }]),
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
  name: 'Default',
  render: () => html`<sd-switch>Default Slot</sd-switch>`
};

/**
 * Use the `checked` attribute to activate the switch
 */

export const Checked = {
  render: () => html`<sd-switch disabled="" checked="">Default Slot</sd-switch>`
};

/**
 * Use the `required `attribute to mark the element as required. This can be used for form validation purposes
 * */

export const Required = {
  render: () => html`<sd-switch required="">Default Slot</sd-switch>`
};

/**
 * Use the `disabled `attribute to disable an input checkbox. Clicks will be suppressed until the disabled state is removed
 */

export const Disabled = {
  render: () => html`<sd-switch disabled="">Default Slot</sd-switch>`
};

/**
 * The component gets `invalid` attribute when the form is invalid
 */

export const Invalid = {
  render: () =>
    html` <form>
      <sd-switch required="">Default Slot</sd-switch>
      <sd-button style="margin-top: 16px" type="submit">Submit</sd-button>
    </form>`
};
