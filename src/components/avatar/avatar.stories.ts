import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-avatar',
  component: 'sd-avatar',
  args: getDefaultArgs('sd-avatar'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-avatar', args);
  }
};
