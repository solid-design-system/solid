import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tree-item',
  component: 'sd-tree-item',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-tree-item', args);
};

Default.args = { ...getDefaultArgs('sd-tree-item') };
