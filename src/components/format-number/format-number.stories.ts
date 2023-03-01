import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-format-number',
  component: 'sd-format-number',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-format-number', args);
};

Default.args = { ...getDefaultArgs('sd-format-number') };
