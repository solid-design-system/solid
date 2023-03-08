import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tree',
  component: 'sd-tree',
  args: getDefaultArgs('sd-tree'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-tree', args);
  }
};
