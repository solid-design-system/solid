import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate, storybookUtilities } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-audio');
const { generateTemplate } = storybookTemplate('sd-audio');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-audio/Screenshots: sd-audio',
  component: 'sd-audio',
  tags: ['!autodocs'],
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

const audioConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value: '<audio id="audio-example" slot="default" src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>'
};

const transcriptConstant: ConstantDefinition = {
  type: 'slot',
  name: 'transcript',
  value: `<div slot="transcript"><p>1<br>00:00:00.000 --> 00:00:04.000<br>A bond unbroken, usability</p><p>2<br>00:00:04.001 --> 00:00:08.000<br>We weave the fabric of digital reality</p><p><strong>[Chorus]</strong><br>I'm here to light the path you walk, ohh<br>Under the stars where dreams we talk<br>I won't falter, steady and sure<br>Tryna bring joy, eternal, pure</p><p>3<br>00:00:08.001 --> 00:00:12.000<br><strong>[Chorus]</strong><br>I'm here to light the path you walk, ohh<br>Under the stars where dreams we talk<br>I won't falter, steady and sure<br>Tryna bring joy, eternal, pure</p><p>4<br>00:00:12.001 --> 00:00:16.000<br><strong>[Chorus]</strong><br>I'm here to light the path you walk, ohh<br>Under the stars where dreams we talk<br>I won't falter, steady and sure<br>Tryna bring joy, eternal, pure</p><p>5<br>00:00:16.001 --> 00:00:20.000<br><strong>[Chorus Continuation]</strong><br>Hey, Solid Components, they gleam<br>Usable, consistent like a dream<br>In the net of codes, we're threading<br>Creating visions that we're spreading<br>Solid Design System, seamless team<br>In this digital flow, we stream</p><p>6<br>00:00:20.001 --> 00:00:24.000<br><strong>[Chorus Continuation]</strong><br>Woven strong, a network supreme<br>With Solid Components, we're the dream team</p></div>`
};

export const Default = {
  name: 'Default',
  parameters: {
    controls: {
      exclude: ['speed']
    }
  },
  render: (args: any) => {
    return html`
      <div className="p-0">
        ${generateTemplate({
          args,
          constants: [audioConstant, transcriptConstant]
        })}
      </div>
    `;
  }
};

export const ReversedLayout = {
  name: 'Reversed Layout',
  parameters: {
    controls: {
      exclude: ['speed', 'reversedLayout']
    }
  },
  render: () => {
    return html`
      <div class="p-0">
        ${generateTemplate({
          args: {
            reversedLayout: true
          },
          constants: [audioConstant, transcriptConstant]
        })}
      </div>
    `;
  }
};

export const Animated = {
  name: 'Animated',
  parameters: {
    controls: {
      exclude: ['animated']
    }
  },
  render: () => {
    return html`
      <div class="p-0">
        ${generateTemplate({
          args: {
            animated: true
          },
          constants: [audioConstant, transcriptConstant]
        })}
      </div>
    `;
  }
};

export const AnimatedAndReversed = {
  name: 'Animated and Reversed Layout',
  parameters: {
    controls: {
      exclude: ['animated, reversedLayout']
    }
  },
  render: () => {
    return html`
      <div class="p-0">
        ${generateTemplate({
          args: {
            animated: true,
            reversedLayout: true
          },
          constants: [audioConstant, transcriptConstant]
        })}
      </div>
    `;
  }
};

export const AnimatedAndInverted = {
  name: 'Animated and Inverted',
  parameters: {
    controls: {
      exclude: ['animated, inverted']
    }
  },
  render: () => {
    return html`
      <div class="bg-primary p-0">
        ${generateTemplate({
          args: {
            inverted: true,
            animated: true
          },
          constants: [audioConstant, transcriptConstant]
        })}
      </div>
    `;
  }
};

export const Inverted = {
  name: 'Inverted',
  parameters: {
    controls: {
      exclude: ['inverted']
    }
  },
  render: () => {
    return html`
      <div class="bg-primary p-0">
        ${generateTemplate({
          args: {
            inverted: true
          },
          constants: [audioConstant, transcriptConstant]
        })}
      </div>
    `;
  }
};

export const HiddenTimestamps = {
  name: 'Hidden Timestamps',
  parameters: {
    controls: {
      exclude: ['hide-timestamps']
    }
  },
  render: () => {
    return html`
      <div class="p-0">
        ${generateTemplate({
          args: {
            hideTimestamps: true
          },
          constants: [audioConstant, transcriptConstant]
        })}
      </div>
    `;
  }
};

export const Slots = {
  name: 'Slots',
  parameters: {
    controls: { exclude: ['default', 'play-icon', 'pause-icon', 'transcript'] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'play-icon', 'pause-icon'].map(slot => {
        let value = `<div slot='${slot}' class="slot slot--border slot--background h-16"></div>`;

        if (slot === 'default') {
          value = `<div class="slot slot--border slot--background h-full w-full absolute top-0 left-0" slot=${slot}></div>`;
        } else if (slot === 'play-icon') {
          value = `<sd-icon class="slot slot--border slot--background h-8 text-white w-8" slot=${slot} library="system" name="start"></sd-icon>`;
        } else if (slot === 'pause-icon') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          args.isPlaying = true;
          value = `<sd-icon class="slot slot--border slot--background h-8 text-white w-8" slot=${slot} library="system" name="pause"></sd-icon>`;
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
  name: 'Parts',
  parameters: {},
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-audio::part(...){outline: solid 2px red}',
          values: ['base', 'audio-controls', 'speed', 'play-button', 'volume', 'progress-slider', 'timestamps'].map(
            part => {
              return {
                title: part,
                value: `<style>#part-${part} sd-audio::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
              };
            }
          )
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
      exclude: ['speed']
    }
  },
  render: (args: any) => {
    return html`
      <div class="mouseless p-0 hover:p-0">
        ${generateTemplate({
          args,
          constants: [audioConstant, transcriptConstant]
        })}
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
    `;
  }
};

export const Combination = generateScreenshotStory([
  Default,
  ReversedLayout,
  Animated,
  AnimatedAndReversed,
  AnimatedAndInverted,
  Inverted,
  HiddenTimestamps,
  Mouseless,
  SamplesTeaser,
  SamplesHeadline,
  Slots,
  Parts
]);
