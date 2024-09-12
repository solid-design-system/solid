import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-table');
const { overrideArgs } = storybookHelpers('sd-table');
const { generateTemplate } = storybookTemplate('sd-table');

/**
 * The `sd-table` component resets the styles of a table to predefined values. To style table cells use the `sd-table-cell` component.
 */

export default {
  title: 'Styles/sd-table/Screenshot Tests',
  tags: ['!autodocs'],
  component: 'sd-table',
  parameters: {
    ...parameters
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem ipsum dolor sit amet.' }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<table class="%CLASSES%"><tr><td>%SLOT%</td></tr></table>' },
      args
    });
  }
};
