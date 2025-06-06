import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-breadcrumb');
const { overrideArgs } = storybookHelpers('sd-breadcrumb');
const { generateTemplate } = storybookTemplate('sd-breadcrumb');

/**
 *
 * Component description.
 *
 */

export default {
  title: 'Components/sd-breadcrumb/Screenshots: sd-breadcrumb',
  component: 'sd-breadcrumb',
  tags: ['!dev'],
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([]),
  argTypes,
  decorators: [withActions] as any
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};
