import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-visually-hidden');
const { generateTemplate } = storybookTemplate('sd-visually-hidden');

export default {
  title: 'Components/sd-visually-hidden',
  component: 'sd-visually-hidden',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-visually-hidden in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
