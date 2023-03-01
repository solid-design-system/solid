import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-dropdown',
  component: 'sd-dropdown',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-dropdown', args);
};

Default.args = { ...getDefaultArgs('sd-dropdown') };
