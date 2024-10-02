import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Audio',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/branch/cHffrwo9yDeKpqsPcYN8R7/Solid-DS-%E2%80%93-Component-Library?node-id=29289-12781&node-type=frame&t=QXEhze4Hm78Vr6gA-0'
    }
  }
};

export const Default = {
  name: 'sd-audio with text',
  render: () => html`
    <div class="mb-4">
      <p class="font-bold text-base flex justify-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
      <p class="text-sm text-neutral-700 flex justify-center">Lorem ipsum sic semeper</p>
    </div>
    <sd-audio>
      <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
    </sd-audio>
  `
};

export const AudioWithHeadline = {
  name: 'sd-audio with sd-headline',
  render: () => html`
    <div class="mb-4">
      <p class="text-center sd-display text-xl text-primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      </p>
    </div>
    <sd-audio>
      <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
    </sd-audio>
  `
};

export const AudioWithTeaser = {
  name: 'sd-audio with sd-teaser',
  render: () => html`
    <style>
      sd-teaser {
        --distribution-media: 30%;
      }
    </style>
    <sd-teaser variant="default" breakpoint="448" class="mb-6">
      <div slot="media" class="relative">
        <img class="aspect-square object-cover" src="./placeholders/images/generic.jpg" alt="Example of a teaser" />
      </div>
      <div slot="meta" class="meta-info">
        <span class="meta-info-item">Meta information</span>
      </div>
      <h3 slot="headline">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </h3>
      <div class="flex flex-col gap-5">
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </sd-teaser>
    <sd-audio reversed-layout hide-timestamps speed="1.5">
      <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
    </sd-audio>
  `
};

export const AudioAnimated = {
  name: 'sd-audio animated',
  render: () => html`
    <sd-audio animated hide-timestamps>
      <audio src="./placeholders/audio/sds-song.mp3" preload="metadata"></audio>
    </sd-audio>
    <p class="text-center sd-leadtext text-xl text-primary mt-4">“Lorem ipsum dolor sit amet, conseincididunt”</p>
  `
};
