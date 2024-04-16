import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-step-group');
const { overrideArgs } = storybookHelpers('sd-step-group');
const { generateTemplate } = storybookTemplate('sd-step-group');

export default {
  title: 'Components/sd-step-group',
  component: 'sd-step-group',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
      <sd-step size="lg" orientation="horizontal" state="waiting">Step name <span name="label">Lorem ipsum est dolor sit amet</span></sd-step>
      <sd-step size="lg" orientation="horizontal" state="waiting">Step name <span name="label">Lorem ipsum est dolor sit amet</span></sd-step>
      <sd-step size="lg" orientation="horizontal" state="waiting">Step name <span name="label">Lorem ipsum est dolor sit amet</span></sd-step>
      `
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-step-group in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`${generateTemplate({ args })}`;
  }
};
