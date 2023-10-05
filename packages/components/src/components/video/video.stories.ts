import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-video');
const { generateTemplate } = storybookTemplate('sd-video');

/**
 * The `sd-video` component can be used to wrap external video elements in order to provide basic styling for Union Investment.
 * ## Implementation
 * Use in combination with a viewer component (e. g. from Moving Image) or a bare `<video>`-Tag in addition to `sd-media`.
 * `<sd-media>
 *  <sd-video><video></video></sd-video>
 *  <p slot="copyright">This is mine!!!</p>
 * </sd-media>`
 */

export default {
  title: 'Components/sd-video',
  component: 'sd-video',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-video in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The `sd-video` element with a standard `video` element in the `default` slot.
 */

export const VideoElement = {
  name: 'Video Element',
  parameters: { controls: { exclude: ['size', 'inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      constants: [
        {
          type: 'slot',
          name: 'default',
          value:
            '<video controls><source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
        },
        {
          type: 'slot',
          name: 'play-icon',
          value:
            '<sd-icon library="global-resources" name="system/start" slot="play-icon" color="primary" style="font-size: 64px;"></sd-icon>'
        }
      ],
      args
    });
  }
};
