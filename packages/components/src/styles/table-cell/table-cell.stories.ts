import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-table-cell');
const { overrideArgs } = storybookHelpers('sd-table-cell');
const { generateTemplate } = storybookTemplate('sd-table-cell');

/**
 * A paragraph is used to display blocks of text. It uses the base font size and can contain bold and/or link styles.<br>
 * <br>
 * <b>Sizes</b>
 * <li>lg is the default paragraph size.</li>
 * <li>sm can be used as an alternative for tighter spaces.</li>
 */

export default {
  title: 'Styles/sd-table-cell',
  component: 'sd-table-cell',
  parameters: {
    ...parameters
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

/**
 * Default: This shows sd-paragraph in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<td class="%CLASSES%">%SLOT%</td>' },
      args
    });
  }
};
