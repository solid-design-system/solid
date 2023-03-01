import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tag',
  component: 'sd-tag',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-tag', args);
};

Default.args = { ...getDefaultArgs('sd-tag') };
