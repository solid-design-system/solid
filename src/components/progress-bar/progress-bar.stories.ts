import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-progress-bar',
  component: 'sd-progress-bar',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-progress-bar', args);
};

Default.args = { ...getDefaultArgs('sd-progress-bar') };
