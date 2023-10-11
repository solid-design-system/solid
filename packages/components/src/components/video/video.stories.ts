/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-video');
const { generateTemplate } = storybookTemplate('sd-video');

const placeholderWidth = 400;
const placeholderHeight = placeholderWidth * (9 / 16);
const placeholderImg = `<div style="width: ${placeholderWidth}px; height: ${placeholderHeight}px;" class="flex items-center justify-center overflow-hidden"><img src="./placeholders/generic.jpg" /></div>`;

export default {
  title: 'Components/sd-video',
  component: 'sd-video',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * The `sd-video` component can be used to wrap external video elements in order to provide basic styling for Union Investment.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      constants: [
        {
          type: 'slot',
          name: 'default',
          value: placeholderImg
        }
      ],
      args
    });
  }
};

/**
 * `sd-video` with all possible property configurations.
 */

export const PlayingOverlay = {
  name: 'Playing × Overlay',
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          x: { type: 'attribute', name: 'playing' },
          y: { type: 'attribute', name: 'overlay' }
        },
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: placeholderImg
          }
        ],
        args
      })}
    `;
  }
};

/**
 * Use in combination with a viewer component (e. g. from Moving Image) or a bare `<video>`-Tag. <br/>
 * Here we wrap a `video` element that includes a `poster` attribute.
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
          sdVideo.playing = true;
        });

        videoEl.addEventListener('pause', () => {
          sdVideo.playing = false;
        });
      </script>
    `;
  }
};
