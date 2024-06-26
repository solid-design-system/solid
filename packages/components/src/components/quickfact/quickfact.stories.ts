import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-quickfact');
const { overrideArgs } = storybookHelpers('sd-quickfact');
const { generateTemplate } = storybookTemplate('sd-quickfact');
import { html } from 'lit';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'Components/sd-quickfact',
  component: 'sd-quickfact',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: `<div class="slot slot--border slot--text h-12">Default slot</div>`
  }),

  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};
/**
 * This shows sd-quickfact in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div class="w-[500px]">${generateTemplate({ args })}</div>`;
  }
};
