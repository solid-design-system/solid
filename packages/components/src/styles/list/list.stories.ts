import '../../solid-components';

import {storybookDefaults, storybookHelpers, storybookTemplate} from '../../../scripts/storybook/helper';

const {argTypes, parameters} = storybookDefaults('sd-list');
const {overrideArgs} = storybookHelpers('sd-list');
const {generateTemplate} = storybookTemplate('sd-list');

/**
 *
 */

export default {
  title: 'Styles/sd-list',
  component: 'sd-list',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/DDSyYvf2q99RhiyDjy03s5/List?type=design&node-id=971-4578&mode=design&t=2UZo6NW6ErMA2G5X-0'
    }
  },
  args: overrideArgs({type: 'slot', name: 'default', value: 'Lorem Ipsum'}),
  argTypes
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: {templateContent: '<ul class="%CLASSES%"><li>%SLOT%</li><li>%SLOT%</li><li>%SLOT%</li></ul>'},
      args
    });
  }
};
