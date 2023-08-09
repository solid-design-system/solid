import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-carousel-item');
const { generateTemplate } = storybookTemplate('sd-carousel-item');

export default {
  title: 'Components/sd-carousel-item',
  component: 'sd-carousel-item',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
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
