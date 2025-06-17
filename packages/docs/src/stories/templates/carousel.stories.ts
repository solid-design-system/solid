import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Carousel',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const CarouselWithImages = {
  name: 'Carousel with Images',
  render: () => html`
    <sd-carousel role="region" aria-label="Carousel with images" fade>
      <sd-carousel-item>
        <img
          src="./placeholders/images/architecture.jpg"
          alt="Modern, waved architecture with blue sky in background"
          class="aspect-video"
        />
      </sd-carousel-item>
      <sd-carousel-item>
        <img
          src="./placeholders/images/skyline.jpg"
          alt="A vibrant city skyline at dusk, symbolizing economic growth and investment opportunities in urban hubs."
          class="aspect-video"
        />
      </sd-carousel-item>
      <sd-carousel-item>
        <img
          src="./placeholders/images/workspace.jpg"
          alt="Close-up of a pair of glasses, a pen, and an open notebook with notes written on it, on a desk next to a laptop."
          class="aspect-video"
        />
      </sd-carousel-item>
    </sd-carousel>
  `
};

export const LoopAndAutoplay = {
  name: 'Loop and Autoplay',
  render: () => html`
    <sd-carousel loop autoplay role="region" aria-label="Carousel in loop and autoplay">
      <sd-carousel-item>
        <img
          src="./placeholders/images/coffeeshop.jpg"
          alt="A group of people sitting in a coffee shop"
          class="aspect-video"
        />
      </sd-carousel-item>
      <sd-carousel-item>
        <img
          src="./placeholders/images/friends.jpg"
          alt="A couple of friends sitting and laughing together on a bed with a dog."
          class="aspect-video"
        />
      </sd-carousel-item>
      <sd-carousel-item>
        <img
          src="./placeholders/images/family.jpg"
          alt="A smiling father with two children outdoors, symbolizing shared values and future growth."
          class="aspect-video"
        />
      </sd-carousel-item>
    </sd-carousel>
  `
};
