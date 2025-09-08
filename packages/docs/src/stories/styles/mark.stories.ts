import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-mark');
const { overrideArgs } = storybookHelpers('sd-mark');
const { generateTemplate } = storybookTemplate('sd-mark');

export default {
  title: 'Styles/sd-mark',
  tags: ['!dev', 'autodocs'],
  component: 'sd-mark',
  parameters: {
    parameters
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem ipsum' }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<p class="sd-display"><mark class="%CLASSES%">%SLOT%</mark></p>' },
      args
    });
  }
};
