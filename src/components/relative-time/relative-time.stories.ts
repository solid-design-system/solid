import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-relative-time',
  component: 'sd-relative-time',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-relative-time', args);
};

Default.args = { ...getDefaultArgs('sd-relative-time') };
