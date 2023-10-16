/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-video');
const { generateTemplate } = storybookTemplate('sd-video');

const placeholderWidth = 400;
const placeholderHeight = placeholderWidth * (9 / 16);
const placeholderImg = `<div style="width: ${placeholderWidth}px; height: ${placeholderHeight}px;" class="flex items-center justify-center overflow-hidden"><img src="./placeholders/generic.jpg" /></div>`;
const videoConstant = {
  type: 'slot',
  name: 'default',
  value:
    '<video controls id="videoExample" style="min-width: 854px; min-height: 480px; width: 854px; height: 480px;"><source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
};
const posterConstant = {
  type: 'slot',
  name: 'poster',
  value:
    '<img slot="poster" alt="poster" src="https://www.blender.org/wp-content/uploads/2020/10/robin-tran-redautumnforest_pr1.jpg" />'
};

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

// Script used in next 2 stories
const videoElementScript = html`<script>
  function runScriptOnPathChange() {
    // *NOTE: Storybook single page behavior complicates queries between the "Docs" and "Video Element" stories.
    // Therefore it is necessary to query for all existing elements and target the one specific to our story, otherwise we end up with strange overlapping behaviors in Storybook.
    const videoEls = document.querySelectorAll('#videoExample');
    const sdVideos = document.querySelectorAll('#sdVideoExample > sd-video');

    const videoEl = document.querySelectorAll('#videoExample')[1] || document.querySelectorAll('#videoExample')[0];
    const sdVideo =
      document.querySelectorAll('#sdVideoExample > sd-video')[1] ||
      document.querySelectorAll('#sdVideoExample > sd-video')[0];

    function setupEventListeners() {
      sdVideo?.addEventListener('sd-play', playVideo);
      videoEl?.addEventListener('play', updatePlayingStatus);
      videoEl?.addEventListener('pause', updatePlayingStatus);
    }

    function playVideo() {
      videoEl.play();
    }

    function updatePlayingStatus() {
      sdVideo.playing = videoEl.paused ? false : true;
    }

    function removeEventListeners() {
      // ensure we affect ANY existing elements by querying for all, see *NOTE above
      const videoEls = document.querySelectorAll('#videoExample');
      const sdVideos = document.querySelectorAll('#sdVideoExample > sd-video');
      const sdVideoPlayButtons = document.querySelectorAll('#sdVideoExample > sd-video');

      videoEls.forEach(videoEl => {
        videoEl.pause();
        videoEl.currentTime = 0;

        videoEl?.removeEventListener('play', updatePlayingStatus);
        videoEl?.removeEventListener('pause', updatePlayingStatus);
      });

      sdVideos.forEach(sdVideo => {
        sdVideo.playing = false;
        sdVideo?.removeEventListener('sd-play', playVideo);
      });
    }

    removeEventListeners();
    setupEventListeners();
  }

  // Run the script when the page loads
  runScriptOnPathChange();

  // Run the script again whenever the hash (path) changes
  window.onhashchange = runScriptOnPathChange;
</script>`;

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
      <div id="sdVideoExample">
        ${generateTemplate({
          args,
          constants: [videoConstant, posterConstant]
        })}
        ${videoElementScript}
      </div>
    `;
  }
};

/**
 * Duplicates the previous story with default focus on the play button.
 */

export const Mouseless = {
  name: 'Mouseless',
  parameters: {
    controls: {
      exclude: ['playing', 'default']
    }
  },
  render: (args: any) => {
    return html`
      <div id="sdVideoExample">
        ${generateTemplate({
          args,
          constants: [videoConstant, posterConstant]
        })}
        ${videoElementScript}
      </div>
    `;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('#sdVideoExample > sd-video');

    await waitUntil(() => el?.shadowRoot?.querySelector('button'));

    el?.shadowRoot?.querySelector('button')?.focus();
  }
};
