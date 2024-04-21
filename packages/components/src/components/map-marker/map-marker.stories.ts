import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-map-marker');
const { overrideArgs } = storybookHelpers('sd-map-marker');
const { generateTemplate } = storybookTemplate('sd-map-marker');

export default {
  title: 'Components/sd-map-marker',
  component: 'sd-map-marker',
  parameters: {
    ...parameters
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: '8' }]),
  argTypes,
  decorators: [withActions] as any
};

/**
 * This shows the badge in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
