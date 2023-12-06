import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-chip');
const { overrideArgs } = storybookHelpers('sd-chip');
const { generateTemplate } = storybookTemplate('sd-chip');

/**
 * A small, non-interactive label the represents a status, property or meta-data.
 *
 * <b>Variants</b><br>
 * <li>--primary-200 is the default variant</li>
 * <li>--primary-500</li>
 * <li>--primary-300</li>
 * <li>--white</li>
 */

export default {
  title: 'Styles/sd-chip',
  component: 'sd-chip',
  parameters: {
    ...parameters,
    backgrounds: {
      default: 'neutral-200'
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/IUiRoK2jiW8ydM77uiY2RX/Chip?type=design&mode=design&t=cioeESUO1sJ6UIu8-0'
    }
  },
  args: overrideArgs({ type: 'slot', name: 'default', value: 'Lorem Ipsum' }),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<span class="%CLASSES%">%SLOT%</span>' },
      args
    });
  }
};

export const Variants = {
  parameters: { controls: { exclude: ['default', 'sd-chip--...'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [
          {
            type: 'attribute',
            name: 'sd-chip',
            values: ['sd-chip--primary-500', 'sd-chip--primary-300', 'sd-chip--primary-200', 'sd-chip--white']
          }
        ]
      },
      args
    });
  }
};
