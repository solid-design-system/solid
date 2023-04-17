import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-popup',
  component: 'sd-popup',
  args: getDefaultArgs('sd-popup'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-popup', args);
  }
};
