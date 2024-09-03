import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Video with Description and Copyright',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

export const VideoElementWithDescription = {
  render: () => html`
    <sd-video class="sd-media">
      <video controls="" id="video-example" class="w-[854px] aspect-video">
        <source src="./placeholders/videos/ui-placeholder-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        slot="poster"
        alt="poster"
        class="w-[854px] aspect-video cover"
        src="./placeholders/images/architecture.jpg"
      />
      <figcaption class="mt-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
      </figcaption>
    </sd-video>
  `
};

export const VideoElementWithCopyright = {
  render: () => html`
    <style>
      .sd-copyright::after {
        z-index: 9999;
      }
    </style>
    <div class="sd-copyright" style="--copyright:'© Union Investment 2024'">
      <sd-video>
        <video controls="" id="video-example" class="w-[854px] aspect-video">
          <source src="./placeholders/videos/ui-placeholder-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img
          slot="poster"
          alt="poster"
          class="w-[854px] aspect-video cover"
          src="./placeholders/images/architecture.jpg"
        />
      </sd-video>
    </div>
  `
};
