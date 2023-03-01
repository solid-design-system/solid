import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-split-panel',
  component: 'sd-split-panel',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-split-panel', args);
};

Default.args = { ...getDefaultArgs('sd-split-panel') };
