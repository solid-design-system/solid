import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-color-picker',
  component: 'sd-color-picker',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-color-picker', args);
};

Default.args = { ...getDefaultArgs('sd-color-picker') };
