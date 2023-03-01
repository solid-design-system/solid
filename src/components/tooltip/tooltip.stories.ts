import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-tooltip',
  component: 'sd-tooltip',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-tooltip', args);
};

Default.args = { ...getDefaultArgs('sd-tooltip') };
