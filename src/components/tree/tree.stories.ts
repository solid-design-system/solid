import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tree',
  component: 'sd-tree',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-tree', args);
};

Default.args = { ...getDefaultArgs('sd-tree') };
