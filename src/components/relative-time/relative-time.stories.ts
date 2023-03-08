import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-relative-time',
  component: 'sd-relative-time',
  args: getDefaultArgs('sd-relative-time'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-relative-time', args);
  }
};
