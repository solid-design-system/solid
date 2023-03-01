import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-animation',
  component: 'sd-animation',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-animation', args);
};

Default.args = { ...getDefaultArgs('sd-animation') };
