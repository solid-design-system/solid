import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-divider',
  component: 'sd-divider',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-divider', args);
};

Default.args = { ...getDefaultArgs('sd-divider') };
