import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-icon',
  component: 'sd-icon',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-icon', args);
};

Default.args = { ...getDefaultArgs('sd-icon') };
