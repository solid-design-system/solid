import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-range',
  component: 'sd-range',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-range', args);
};

Default.args = { ...getDefaultArgs('sd-range') };
