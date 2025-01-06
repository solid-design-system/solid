import '../../../../components/src/solid-components';
import { html } from 'lit-html';

/**
 * Example on how to use flipcard component.
 */
export default {
  tags: ['!dev'],
  title: 'Templates/Flipcard',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=9619-1000&t=4hJLzQoS5miOfXHR-0'
    }
  }
};

/**
 * ```
 * ```
 */
export const Default = {
  render: () => html`
    <sd-flipcard
      activation="click hover"
      flip-direction="horizontal"
      front-variant="gradient-dark"
      back-variant="gradient-dark"
      placement="top"
      class="mb-12"
    >
      <h5 slot="front" class="sd-headline sd-headline--inverted sd-headline--size-lg p-5">
        We are invested in over USD 6 Billion of Assets under Management
      </h5>
      <div slot="back" class="w-full sd-prose sd-prose--inverted p-5">
        <h3 class="sd-headline sd-headline--size-lg sd-headline--inverted">Our quality portfolio</h3>
        <p class="sd-paragraph">
          Together with our local partners we manage a real estate portfolio of approx. USD 6 billion, which represents
          about 15% of the total global portfolio and spans over more than 35 properties. In the US, we have properties
          in New York, San Francisco, Washington D.C., Chicago and other major US cities. In Latin America we are
          currently invested in office buildings in Mexico-City.
        </p>
      </div>
      <img
        slot="media-front"
        class="object-cover h-full w-full"
        src="./placeholders/images/skyline.jpg"
        alt="A vibrant city skyline at dusk, symbolizing economic growth and investment opportunities in urban hubs."
      />
      <img
        slot="media-back"
        class="object-cover h-full w-full"
        src="./placeholders/images/skyline.jpg"
        alt="A vibrant city skyline at dusk, symbolizing economic growth and investment opportunities in urban hubs."
      />
    </sd-flipcard>
    <sd-flipcard
      activation="click hover"
      flip-direction="horizontal"
      front-variant="primary-100"
      back-variant="primary"
      placement="bottom"
    >
      <h2 slot="front" class="sd-headline sd-headline--size-3xl p-5">We promote diversity</h2>
      <div slot="back" class="w-full p-5">
        <h3 class="sd-headline sd-headline--size-lg sd-headline--inverted">
          We provide room for creative solutions and ensure that we are equipped for the future. 
        </h3>
        <p class="sd-paragraph sd-paragraph--inverted mt-2">
          Our approach is based around interacting with each other, our customers and our partners on an equal footing.
          Our actions are defined by values such as respect, professionalism and collaboration. In the true spirit of
          the cooperative principles, we channel a wide range of strengths in order to be stronger together.
        </p>
      </div>
    </sd-flipcard>
  `
};
