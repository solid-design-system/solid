import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-range',
  component: 'sd-range',
  args: getDefaultArgs('sd-range'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-range', args);
  }
};
