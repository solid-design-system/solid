import '../../solid-components';

import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-table-cell');
const { overrideArgs } = storybookHelpers('sd-table-cell');
const { generateTemplate } = storybookTemplate('sd-table-cell');
const { generateScreenshotStory } = storybookUtilities;

/**
 * The `sd-table-cell` component offers basic styling for table cells.
 * It is designed to be used in conjunction with the `sd-table` component.
 */

export default {
  title: 'Styles/sd-table-cell/Screenshot Tests',
  tags: ['!autodocs'],
  component: 'sd-table-cell',
  parameters: {
    ...parameters
  },
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Lorem ipsum dolor sit amet.' },
    { type: 'attribute', name: 'sd-table-cell--bg-...', value: 'transparent' }
  ]),
  argTypes
};

/**
 * This shows sd-table-cell in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: '<table class="sd-table"><tr class="relative"><td class="%CLASSES%">%SLOT%</td></tr></table>'
      },
      args
    });
  }
};

export const Combination = generateScreenshotStory([Default]);
