import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-audio');
const { generateTemplate } = storybookTemplate('sd-audio');

export default {
  title: 'Components/sd-audio',
  component: 'sd-audio',
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

const audioElementScript = html`<script>
  const initAudioPlayer = () => {
    const audioElements = document.querySelectorAll('#audio-example');
    const sdAudioPlayers = document.querySelectorAll('#sd-audio-example > sd-audio');

    // Select the first or second audio element based on availability
    // Due to Storybook behavior, we need to carefully target the appropriate elements in the context of the story.
    const audioElement =
      document.querySelectorAll('#audio-example')[1] || document.querySelectorAll('#audio-example')[0];
    const sdAudio =
      document.querySelectorAll('#sd-audio-example > sd-audio')[1] ||
      document.querySelectorAll('#sd-audio-example > sd-audio')[0];

    function setupEventListeners() {
      sdAudio?.addEventListener('sd-playback-start', playAudio);
      sdAudio?.addEventListener('sd-playback-mute', muteAudio);
      sdAudio?.addEventListener('sd-playback-speed', updatePlaybackSpeed);
    }

    const playAudio = () => {
      sdAudio.isPlaying ? audioElement.pause() : audioElement.play();
    };

    const muteAudio = () => {
      audioElement.muted = !sdAudio.isMuted;
    };

    const updatePlaybackSpeed = () => {
      sdAudio.playbackSpeed = audioElement.playbackRate === 1.5 ? 1 : audioElement.playbackRate + 0.25;
      audioElement.playbackRate = sdAudio.playbackSpeed;
    };

    function removeEventListeners() {
      sdAudioPlayers.forEach(sdAudio => {
        sdAudio.playing = false;
        sdAudio?.removeEventListener('sd-playback-start', playAudio);
        sdAudio?.removeEventListener('sd-playback-mute', muteAudio);
        sdAudio?.removeEventListener('sd-playback-speed', updatePlaybackSpeed);
      });
    }

    removeEventListeners();
    setupEventListeners();
  };

  // Run the script when the page loads
  initAudioPlayer();

  // Run the script again whenever the hash (path) changes
  window.onhashchange = initAudioPlayer;
</script>`;

const audioConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value: '<audio id="audio-example" slot="default" src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>'
};

export const Default = {
  name: 'Default',
  parameters: {
    controls: {
      exclude: ['playbackSpeed']
    }
  },
  render: (args: any) => {
    return html`
      <div id="sd-audio-example" className="p-0">
        ${generateTemplate({
          args,
          constants: [
            audioConstant,
            {
              type: 'slot',
              name: 'transcript',
              value: '<div>Show audio transcript</div>'
            }
          ]
        })}
        ${audioElementScript}
      </div>
    `;
  }
};

export const ReversedLayout = {
  name: 'Reversed Layout',
  parameters: {
    controls: {
      exclude: ['playbackSpeed', 'reversedLayout']
    }
  },
  render: () => {
    return html`
      <div id="sd-audio-example" class="p-0">
        ${generateTemplate({
          args: {
            reversedLayout: true
          },
          constants: [
            audioConstant,
            {
              type: 'slot',
              name: 'transcript',
              value: '<div>Show audio transcript</div>'
            }
          ]
        })}
        ${audioElementScript}
      </div>
    `;
  }
};

export const Backgrounds = {
  name: 'Backgrounds',
  parameters: {
    controls: {
      exclude: ['playbackSpeed']
    }
  },
  render: () => {
    return html`
      ${['white', 'neutral', 'primary', 'inverted'].map(variant => {
        if (variant === 'inverted') {
          return html`
            <div id="sd-audio-example" class="pb-8">
              ${generateTemplate({
                args: {
                  variant,
                  inverted: true
                },
                constants: [
                  audioConstant,
                  {
                    type: 'slot',
                    name: 'transcript',
                    value: '<div>Show audio transcript</div>'
                  }
                ]
              })}
              ${audioElementScript}
            </div>
          `;
        }

        return html`
          <div id="sd-audio-example" class="pb-8">
            ${generateTemplate({
              args: {
                variant
              },
              constants: [
                audioConstant,
                {
                  type: 'slot',
                  name: 'transcript',
                  value: '<div>Show audio transcript</div>'
                }
              ]
            })}
            ${audioElementScript}
          </div>
        `;
      })}
    `;
  }
};

export const Slots = {
  parameters: {
    controls: { exclude: ['default', 'play-icon', 'pause-icon', 'transcript'] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'play-icon', 'pause-icon', 'transcript'].map(slot => {
        let value = `<div slot='${slot}' class="slot slot--border slot--background h-16"></div>`;

        if (slot === 'default') {
          value = `<div class="slot slot--border slot--background h-full w-full absolute top-0 left-0" slot=${slot}></div>`;
        } else if (slot === 'play-icon') {
          value = `<sd-icon class="slot slot--border slot--background h-8 text-white w-8" slot=${slot} library="system" name="start"></sd-icon>`;
        } else if (slot === 'pause-icon') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          args.isPlaying = true;
          value = `<sd-icon class="slot slot--border slot--background h-8 text-white w-8" slot=${slot} library="system" name="pause"></sd-icon>`;
        } else if (slot === 'transcript') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          args.isPlaying = false;
          value = `<sd-icon class="slot slot--border h-8 text-primary w-8" slot=${slot} library="system" name="transcript"></sd-icon>`;
        }

        return generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=..',
              values: [
                {
                  value: value,
                  title: slot
                }
              ]
            }
          },
          args,
          constants: [
            {
              type: 'template',
              name: 'style',
              value: '<div style="margin-bottom: 40px; width: 782px;">%TEMPLATE%</div>'
            }
          ]
        });
      })}
    `;
  }
};

export const Parts = {
  parameters: {},
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-audio::part(...){outline: solid 2px red}',
          values: ['base', 'audio-controls', 'play-button', 'playback-speed'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-audio::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px; width: 782px;">%TEMPLATE%</div>'
        }
      ]
    });
  }
};

export const Mouseless = {
  name: 'Mouseless',
  parameters: {
    controls: {
      exclude: ['playbackSpeed']
    }
  },
  render: (args: any) => {
    return html`
      <div id="sd-audio-example" class="mouseless p-0 hover:p-0">
        ${generateTemplate({
          args,
          constants: [
            audioConstant,
            {
              type: 'slot',
              name: 'transcript',
              value: '<div>Show audio transcript</div>'
            }
          ]
        })}
        ${audioElementScript}
      </div>
    `;
  }
};

export const SamplesTeaser = {
  name: 'Samples: sd-audio with sd-teaser',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return html`
      <style>
        sd-teaser {
          --distribution-media: 30%;
        }
      </style>
      <div>
        <div class="px-12 pt-12">
          <sd-teaser variant="default">
            <div slot="media" class="relative">
              <img
                class="aspect-square object-cover"
                src="./placeholders/images/coffeeshop.jpg"
                alt="A group of people sitting in a coffee shop"
              />
            </div>
            <div slot="meta" class="meta-info">
              <span class="meta-info-item">Meta information</span>
            </div>
            <h3 slot="headline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
            </h3>
            <div class="flex flex-col gap-5">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </sd-teaser>
        </div>
        <div id="sd-audio-example">
          <sd-audio reversedLayout="true">
            <audio id="audio-example" slot="default" src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
          </sd-audio>
        </div>
      </div>
      ${audioElementScript}
    `;
  }
};

export const SamplesHeadline = {
  name: 'Samples: sd-audio with sd-headline',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return html`
      <style></style>
      <div>
        <div class="px-12 pt-12">
          <h4 class="sd-headline sd-headline--size-xl flex justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </h4>
        </div>
        <div id="sd-audio-example">
          <sd-audio>
            <audio id="audio-example" slot="default" src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
          </sd-audio>
        </div>
      </div>
      ${audioElementScript}
    `;
  }
};
