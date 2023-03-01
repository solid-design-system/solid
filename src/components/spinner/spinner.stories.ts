import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-spinner',
  component: 'sd-spinner',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-spinner', args);
};

Default.args = { ...getDefaultArgs('sd-spinner') };
