import '../../../../components/src/solid-components';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate
} from '../../../../components/scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-carousel-item');
const { overrideArgs } = storybookHelpers('sd-carousel-item');
const { generateTemplate } = storybookTemplate('sd-carousel-item');

export default {
  title: 'Components/sd-carousel-item/Screenshots: sd-carousel-item',
  tags: ['!autodocs'],
  component: 'sd-carousel-item',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-16">Default slot</div>`
    }
  ]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * This shows sd-carousel-item in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};
