/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-video');
const { generateTemplate } = storybookTemplate('sd-video');

const videoConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value:
    '<video controls id="video-example" class="w-full aspect-video"><source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />Your browser does not support the video tag.</video>'
};
const imageConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value: '<img class="w-[400px] aspect-video object-cover" src="./placeholders/generic.jpg" />'
};
const posterConstant: ConstantDefinition = {
  type: 'slot',
  name: 'poster',
  value:
    '<img slot="poster" alt="poster" class="w-WHATEVER-WIDTH aspect-video cover" src="./placeholders/architecture.jpg" />'
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
      constants: imageConstant,
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
        constants: imageConstant,
        args
      })}
    `;
  }
};

// Script used in next 2 stories. Due to Storybook behavior, we need to carefully target the appropriate elements in the context of the story.
const videoElementScript = html`<script>
  /**
   * Handles setting up event listeners and defining behaviors for video elements.
   */
  function runScriptOnPathChange() {
    // Query all video elements
    const videoEls = document.querySelectorAll('#video-example');
    const sdVideos = document.querySelectorAll('#sd-video-example > sd-video');

    // Select the first or second video element based on availability
    const videoEl = document.querySelectorAll('#video-example')[1] || document.querySelectorAll('#video-example')[0];
    const sdVideo =
      document.querySelectorAll('#sd-video-example > sd-video')[1] ||
      document.querySelectorAll('#sd-video-example > sd-video')[0];

    /**
     * Sets up event listeners for video elements.
     */
    function setupEventListeners() {
      sdVideo?.addEventListener('sd-play', playVideo);
      videoEl?.addEventListener('play', updatePlayingStatus);
      videoEl?.addEventListener('pause', updatePlayingStatus);
    }

    /**
     * Plays the video element.
     */
    function playVideo() {
      videoEl.play();
    }

    /**
     * Updates the playing status of the video element.
     */
    function updatePlayingStatus() {
      sdVideo.playing = videoEl.paused ? false : true;
    }

    /**
     * Removes event listeners and resets video elements to their initial state.
     */
    function removeEventListeners() {
      // Reset and remove event listeners for video elements
      videoEls.forEach(videoEl => {
        videoEl.pause();
        videoEl.currentTime = 0;

        videoEl?.removeEventListener('play', updatePlayingStatus);
        videoEl?.removeEventListener('pause', updatePlayingStatus);
      });

      // Reset and remove event listeners for sd-video elements
      sdVideos.forEach(sdVideo => {
        sdVideo.playing = false;
        sdVideo?.removeEventListener('sd-play', playVideo);
      });
    }

    // Initial setup
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
 * Here we wrap a `video` element that includes setting an image to the `poster` slot.
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
      <div id="sd-video-example">
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
      <div id="sd-video-example" class="mouseless">
        ${generateTemplate({
          args,
          constants: [videoConstant, posterConstant]
        })}
        ${videoElementScript}
      </div>
    `;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('#sd-video-example > sd-video');

    await waitUntil(() => el?.shadowRoot?.querySelector('button'));

    el?.shadowRoot?.querySelector('button')?.focus();
  }
};
