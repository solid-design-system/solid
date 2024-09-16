import '../solid-components';
import { html } from 'lit-html';

/**
 * Examples of the sd-accordion-group component in different backgrounds.
 */

export default {
  tags: ['!dev'],
  title: 'Templates/Accordion Group on Different Backgrounds',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2001-2283&t=lJxrBJPRziV74fnu-4'
    }
  }
};

export const Default = {
  name: 'White Background',
  render: () => html`
    <div class="bg-white p-8">
      <sd-accordion-group>
        <sd-accordion summary="Shareholder Structure"
          ><p>
            Union Investment is the dedicated asset manager within the German cooperative financial network. All
            shareholders are also part of the network, which ensures a stable and long-term ownership structure. This
            allows us to maintain a sustainable business model and develop strong, long-term client relationships.
          </p></sd-accordion
        ><sd-accordion summary="Cooparative financial network"
          ><p>Union Investment is the asset manager within the German cooperative financial Network.</p></sd-accordion
        ><sd-accordion summary="Investment philosophy"
          ><div class="sd-prose">
            <p>
              Our investment philosophy is based on our belief that markets are inefficient. Long-term outperformance
              is, therefore, best achieved through a combination of fundamental research, actively managed security
              selection and robust risk management. This conviction lies at the heart of all our investment solutions.
              We offer a transparent investment process, which allows clients to keep track of our investment decisions.
            </p>
            <p>
              We take an integrated approach to portfolio management, with every portfolio manager also acting as a
              senior research specialist. This structure enhances the team’s commitment to the process and helps to
              ensure accountability for investment performance.
            </p>
          </div>
        </sd-accordion>
      </sd-accordion-group>
    </div>
  `
};

export const NeutralBackground = {
  name: 'Neutral Background',
  render: () => html`
    <div class="bg-neutral-100 p-8">
      <sd-accordion-group>
        <sd-accordion summary="Shareholder Structure"
          ><p>
            Union Investment is the dedicated asset manager within the German cooperative financial network. All
            shareholders are also part of the network, which ensures a stable and long-term ownership structure. This
            allows us to maintain a sustainable business model and develop strong, long-term client relationships.
          </p></sd-accordion
        ><sd-accordion summary="Cooparative financial network"
          ><p>Union Investment is the asset manager within the German cooperative financial Network.</p></sd-accordion
        ><sd-accordion summary="Investment philosophy"
          ><div class="sd-prose">
            <p>
              Our investment philosophy is based on our belief that markets are inefficient. Long-term outperformance
              is, therefore, best achieved through a combination of fundamental research, actively managed security
              selection and robust risk management. This conviction lies at the heart of all our investment solutions.
              We offer a transparent investment process, which allows clients to keep track of our investment decisions.
            </p>
            <p>
              We take an integrated approach to portfolio management, with every portfolio manager also acting as a
              senior research specialist. This structure enhances the team’s commitment to the process and helps to
              ensure accountability for investment performance.
            </p>
          </div>
        </sd-accordion>
      </sd-accordion-group>
    </div>
  `
};

export const PrimaryBackground = {
  name: 'Primary Background',
  render: () => html`
    <div class="bg-primary-100 p-8">
      <sd-accordion-group>
        <sd-accordion summary="Shareholder Structure"
          ><p>
            Union Investment is the dedicated asset manager within the German cooperative financial network. All
            shareholders are also part of the network, which ensures a stable and long-term ownership structure. This
            allows us to maintain a sustainable business model and develop strong, long-term client relationships.
          </p></sd-accordion
        ><sd-accordion summary="Cooparative financial network"
          ><p>Union Investment is the asset manager within the German cooperative financial Network.</p></sd-accordion
        ><sd-accordion summary="Investment philosophy">
          <div class="sd-prose">
            <p>
              Our investment philosophy is based on our belief that markets are inefficient. Long-term outperformance
              is, therefore, best achieved through a combination of fundamental research, actively managed security
              selection and robust risk management. This conviction lies at the heart of all our investment solutions.
              We offer a transparent investment process, which allows clients to keep track of our investment decisions.
            </p>
            <p>
              We take an integrated approach to portfolio management, with every portfolio manager also acting as a
              senior research specialist. This structure enhances the team’s commitment to the process and helps to
              ensure accountability for investment performance.
            </p>
          </div>
        </sd-accordion>
      </sd-accordion-group>
    </div>
  `
};
