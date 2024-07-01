import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-quickfact');
const { overrideArgs } = storybookHelpers('sd-quickfact');
const { generateTemplate } = storybookTemplate('sd-quickfact');
import '../../styles/display/display.css';
import '../../styles/leadtext/leadtext.css';
import '../../styles/paragraph/paragraph.css';
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'Components/sd-quickfact',
  component: 'sd-quickfact',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-12">Default slot</div>`
    },
    {
      type: 'slot',
      name: 'summary',
      value: `<div slot="summary"> <p class="text-base font-normal leading-normal  sm:text-3xl sm:leading-tight">Lorem Ipsum</p>
            <div class="text-base font-normal leading-normal sm:text-xl">Con sectetur adipiscing elit</div></div>`
    }
  ]),

  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};
/**
 * This shows sd-quickfact in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
