import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Video',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2535-30009&t=lJxrBJPRziV74fnu-4'
    }
  }
};

export const VideoWithDescription = {
  name: 'Video with Description',
  render: () => html`
    <figure class="sd-media">
      <sd-video>
        <video controls class="aspect-video">
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
          class="aspect-video cover"
          src="./placeholders/images/union-investment.png"
        />
      </sd-video>
      <figcaption class="mt-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
      </figcaption>
    </figure>
  `
};

export const VideoWithCopyright = {
  name: 'Video with Copyright',
  render: () => html`
    <style>
      .sd-copyright::after {
        z-index: 10;
      }
    </style>
    <div class="sd-copyright sd-copyright--placement-top" style="--copyright:'© Union Investment 2024'">
      <sd-video>
        <video controls class="aspect-video">
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
          class="aspect-video cover"
          src="./placeholders/images/union-investment.png"
        />
      </sd-video>
    </div>
  `
};
