/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-video');
const { generateTemplate } = storybookTemplate('sd-video');

/**
 * Used to embed and control videos.
 *
 * **Related templates**:
 * - [Video](?path=/docs/templates-video--docs)
 */

export default {
  tags: ['!dev'],
  title: 'Components/sd-video',
  component: 'sd-video',
  args,
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2535-30009&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      constants: {
        type: 'slot',
        name: 'default',
        value: '<img class="w-[400px] aspect-video object-cover" src="./placeholders/images/generic.jpg" />'
      },
      args
    });
  }
};

/**
 * - Use in combination with a viewer component (e. g. from Moving Image) or a bare `<video>`-Tag.
 * - Use the `poster` slot to add a preview image.
 */

export const VideoElementWithPosterSlot = {
  name: 'Video Element with Poster Slot',
  render: () => html`
    <sd-video>
      <video controls="" id="video-example" class="w-[854px] aspect-video">
        <source src="./placeholders/videos/sds-placeholder-video/sds-placeholder-video.webm" type="video/webm" />
        <track
          label="English"
          kind="subtitles"
          srclang="en"
          src="./placeholders/videos/sds-placeholder-video/sds-placeholder-video.vtt"
          default
        />
        Your browser does not support the video tag.
      </video>
      <img
        slot="poster"
        alt="Video highlighting Union Investment's digital transformation through a design system named SOLID that enhances accessibility, sustainability, and efficiency."
        class="w-[854px] aspect-video cover"
        src="./placeholders/images/architecture.jpg"
      />
    </sd-video>
  `
};

/**
 * Use the `playing` attribute to hide the play icon and the overlay.
 */

export const Playing = {
  render: () => html`
    <sd-video playing>
      <img alt="Generic Alt" class="w-[854px] aspect-video cover" src="./placeholders/images/architecture.jpg" />
    </sd-video>
  `
};

/**
 * Use the `overlay` attribute to show a dark overlay. Only used when `playing` is `false`.
 */

export const Overlay = {
  render: () => html`
    <sd-video overlay>
      <img alt="Generic Alt" class="w-[854px] aspect-video cover" src="./placeholders/images/architecture.jpg" />
    </sd-video>
  `
};
