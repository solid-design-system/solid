import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-visually-hidden',
  component: 'sd-visually-hidden',
  args: getDefaultArgs('sd-visually-hidden'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-visually-hidden', args);
  }
};
