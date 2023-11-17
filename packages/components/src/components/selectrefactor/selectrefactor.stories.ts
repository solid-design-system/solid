import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-selectrefactor');
const { generateTemplate } = storybookTemplate('sd-selectrefactor');

export default {
  title: 'Components/sd-selectrefactor',
  component: 'sd-selectrefactor',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-selectrefactor in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({args});
  }
};
