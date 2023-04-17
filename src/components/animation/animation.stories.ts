import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-animation',
  component: 'sd-animation',
  args: getDefaultArgs('sd-animation'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-animation', args);
  }
};
