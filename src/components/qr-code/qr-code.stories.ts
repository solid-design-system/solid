import '../../solid-components';
import { getDefaultArgs, renderDefaultStory } from '../../../scripts/storybook/helper';

export default {
  title: 'Components/sd-qr-code',
  component: 'sd-qr-code',
  args: getDefaultArgs('sd-qr-code'),
};

export const Default = {
  render: (args: any) => {
    return renderDefaultStory('sd-qr-code', args);
  }
};
