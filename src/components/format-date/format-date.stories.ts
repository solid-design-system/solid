import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-format-date',
  component: 'sd-format-date',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-format-date', args);
};

Default.args = { ...getDefaultArgs('sd-format-date') };
