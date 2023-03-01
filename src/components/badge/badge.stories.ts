import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-badge',
  component: 'sd-badge',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-badge', args);
};

Default.args = { ...getDefaultArgs('sd-badge') };
