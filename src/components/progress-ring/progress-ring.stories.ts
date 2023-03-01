import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-progress-ring',
  component: 'sd-progress-ring',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-progress-ring', args);
};

Default.args = { ...getDefaultArgs('sd-progress-ring') };
