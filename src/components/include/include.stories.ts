import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-include',
  component: 'sd-include',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-include', args);
};

Default.args = { ...getDefaultArgs('sd-include') };
