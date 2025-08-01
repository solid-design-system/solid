/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-video');
const { generateTemplate } = storybookTemplate('sd-video');

export default {
  tags: ['!dev', 'autodocs'],
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
        value: '<img class="w-[400px] aspect-video object-cover" alt="" src="./placeholders/images/generic.jpg" />'
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
        alt="Video highlighting Union Investment's digital transformation through a design system named Solid that enhances accessibility, sustainability, and efficiency."
        class="w-[854px] aspect-video cover"
        src="./placeholders/images/union-investment.png"
      />
    </sd-video>
  `
};

/**
 * Use the `playing` attribute to show/hide the play-button.
 */

export const Playing = {
  render: () => html`
    <sd-video playing>
      <img
        alt="Video highlighting Union Investment's digital transformation through a design system named Solid that enhances accessibility, sustainability, and efficiency."
        class="w-[854px] aspect-video cover"
        src="./placeholders/images/union-investment.png"
      />
    </sd-video>
  `
};
