import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tooltip',
  component: 'sd-tooltip',
  args: getDefaultArgs('sd-tooltip'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-tooltip', args);
  }
};
