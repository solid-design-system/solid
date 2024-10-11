import '../solid-components';
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
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2724-2988&t=JCsisVFNkWSlhSSN-4'
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
      front-variant="gradient-dark-bottom"
      back-variant="primary"
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
      <img slot="media-front" class="object-cover h-full w-full" src="./placeholders/images/architecture.jpg" alt="" />
    </sd-flipcard>
  `
};
