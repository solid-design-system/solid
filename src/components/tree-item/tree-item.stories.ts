import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tree-item',
  component: 'sd-tree-item',
  args: getDefaultArgs('sd-tree-item'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-tree-item', args);
  }
};
