import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-flipcard');
const { generateTemplate } = storybookTemplate('sd-flipcard');
const { overrideArgs } = storybookHelpers('sd-flipcard');

export default {
  title: 'Components/sd-flipcard',
  component: 'sd-flipcard',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'headline-icon',
      value: `<sd-icon name="content/picture" library="global-resources"></sd-icon>`
    },
    {
      type: 'slot',
      name: 'default',
      value: `
      Nisi eu excepteur anim esse
       `
    },
    {
      type: 'slot',
      name: 'description',
      value: `<p slot="description">Lorem ipsum dolor sit amet per niente da faremmasds nonnummy dolore lorem ipsum dolor sit amet
      consectuer.</p>`
    }
  ]),

  argTypes,

  parameters: { ...parameters },
  decorators: [withActions] as any
};
/**
 * This shows sd-divider in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`<div style="width:350px">${generateTemplate({ args })}</div>`;
  }
};
