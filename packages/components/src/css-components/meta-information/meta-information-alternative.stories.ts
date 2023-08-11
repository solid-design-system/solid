import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-meta-information');
const { overrideArgs } = storybookHelpers('sd-meta-information');
const { generateTemplate } = storybookTemplate('sd-meta-information');

/**
 * List of meta information like file size, date or whatever needed.
 */

export default {
  title: 'Styles/sd-meta-information',
  component: 'sd-meta-information',
  parameters,
  args: overrideArgs({ type: 'slot', name: 'default', value: '11. August 2023' }),
  argTypes
};

/**
 * Default: This shows sd-meta-information in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<time class="%CLASSES%" datetime="2023-08-11">%SLOT%</time>' },
      args
    });
  }
};
