/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import '../../solid-components';
import { html } from 'lit-html';
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
 * `sd-video` does not have any content by default because it is a wrapper component.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The `sd-video` element wrapping a standard `video` element in the `default` slot including a `poster` attribute. Includes an `sd-icon` elment in the `play-icon` slot. `overlay` property is set to `true`.
 */

export const VideoElement = {
  name: 'Video Element',
  parameters: {
    controls: {
      exclude: ['playing', 'default']
    }
  },
  render: (args: any) => {
    return html`
      ${generateTemplate({
        args,
        constants: {
          type: 'slot',
          name: 'default',
          value:
            '<video controls poster="https://www.blender.org/wp-content/uploads/2020/10/robin-tran-redautumnforest_pr1.jpg" style="max-width: 854px; may-height: 480px;"><source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
        }
      })}
      <script>
        const videoEl = document.querySelector('video');
        const sdVideo = document.querySelector('sd-video');

        sdVideo.addEventListener('sd-play', () => {
          videoEl.play();
        });

        videoEl.addEventListener('play', () => {
          sdVideo.play();
        });

        videoEl.addEventListener('pause', () => {
          sdVideo.playing = false;
        });
      </script>
    `;
  }
};
