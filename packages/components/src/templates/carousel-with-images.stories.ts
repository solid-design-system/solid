import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Carousel with Images',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const Default = {
  name: 'Default',
  render: () => html`
    <sd-carousel>
      <sd-carousel-item>
        <img src="./placeholders/images/architecture.jpg" alt="architecture" class="aspect-video" />
      </sd-carousel-item>
      <sd-carousel-item>
        <img src="./placeholders/images/skyline.jpg" alt="skyline" class="aspect-video" />
      </sd-carousel-item>
      <sd-carousel-item>
        <img src="./placeholders/images/workspace.jpg" alt="workspace" class="aspect-video" />
      </sd-carousel-item>
      <sd-carousel> </sd-carousel
    ></sd-carousel>
  `
};

export const LoopAndAutoplay = {
  name: 'Loop and Autoplay',
  render: () => html`
    <sd-carousel loop autoplay>
      <sd-carousel-item>
        <img src="./placeholders/images/coffeeshop.jpg" alt="coffeeshop" class="aspect-video" />
      </sd-carousel-item>
      <sd-carousel-item>
        <img src="./placeholders/images/friends.jpg" alt="friends" class="aspect-video" />
      </sd-carousel-item>
      <sd-carousel-item>
        <img src="./placeholders/images/family.jpg" alt="family" class="aspect-video" />
      </sd-carousel-item>
      <sd-carousel> </sd-carousel
    ></sd-carousel>
  `
};
