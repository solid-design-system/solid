import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters, args } = storybookDefaults('sd-carousel');
const { generateTemplate } = storybookTemplate('sd-carousel');
import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'Components/sd-carousel',
  component: 'sd-carousel',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
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
