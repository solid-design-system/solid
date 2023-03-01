import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tab-group',
  component: 'sd-tab-group',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-tab-group', args);
};

Default.args = { ...getDefaultArgs('sd-tab-group') };
