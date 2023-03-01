import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-icon-button',
  component: 'sd-icon-button',
};

export const Default = (args: any) => {
  return renderDefaultStory('sd-icon-button', args);
};

Default.args = { ...getDefaultArgs('sd-icon-button') };
