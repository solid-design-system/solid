import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tab-panel',
  component: 'sd-tab-panel',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-tab-panel', args);
};

Default.args = { ...getDefaultArgs('sd-tab-panel') };
