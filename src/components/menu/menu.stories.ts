import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-menu',
  component: 'sd-menu',
  args: getDefaultArgs('sd-menu'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-menu', args);
  }
};
