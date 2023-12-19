import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { overrideArgs } = storybookHelpers('sd-dialog');
const { argTypes, parameters } = storybookDefaults('sd-dialog');
const { generateTemplate } = storybookTemplate('sd-dialog');

export default {
  title: 'Components/sd-dialog',
  component: 'sd-dialog',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<p class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed.</p>`
    },
    {
      type: 'slot',
      name: 'headline',
      value: `<h4 slot="headline" class="sd-headline sd-headline--size-3xl">Lorem Ipsum</h4>`
    },
    {
      type: 'slot',
      name: 'footer',
      value: `<sd-button slot="footer" class="">Label</sd-button>`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-dialog in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html` <div style="width: auto; height: 30vh;">
      ${generateTemplate({
        args
      })}
    </div>`;
  }
};
