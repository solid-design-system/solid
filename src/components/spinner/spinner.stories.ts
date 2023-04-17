import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-spinner',
  component: 'sd-spinner',
  args: getDefaultArgs('sd-spinner'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-spinner', args);
  }
};
