import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-progress-bar',
  component: 'sd-progress-bar',
  args: getDefaultArgs('sd-progress-bar'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-progress-bar', args);
  }
};
