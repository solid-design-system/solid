import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-card',
  component: 'sd-card',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-card', args);
};

Default.args = { ...getDefaultArgs('sd-card') };
