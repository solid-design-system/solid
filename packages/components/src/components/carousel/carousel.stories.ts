import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-carousel');
const { overrideArgs } = storybookHelpers('sd-carousel-item');
const { generateTemplate } = storybookTemplate('sd-carousel');

export default {
  title: 'Components/sd-carousel',
  component: 'sd-carousel',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-carousel-item> <slot-comp></slot-comp> </sd-carousel-item>
        <sd-carousel-item> <slot-comp></slot-comp> </sd-carousel-item>
        <sd-carousel-item> <slot-comp></slot-comp> </sd-carousel-item>`
    }
  ]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * This shows sd-carousel in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};
