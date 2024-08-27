/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-accordion-group');
const { generateTemplate } = storybookTemplate('sd-accordion-group');

/**
 *
 * Used to group multiple accordions together.
 *
 *  **Related templates**:
 * - [Accordion Group](?path=/docs/templates-accordion-group--docs)
 *
 *
 *  **Related components**:
 * - [sd-accordion](?path=/docs/components-sd-accordion--docs)
 *
 */

export default {
  title: 'Components/sd-accordion-group',
  component: 'sd-accordion-group',
  tags: ['!dev'],
  args: {
    ...args,
    'default-slot':
      '<sd-accordion summary="Accordion 1"><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion><sd-accordion summary="Accordion 2"><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion><sd-accordion summary="Accordion 3"><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion>'
  },
  argTypes,
  parameters: { ...parameters }
};

/**
 * Vertical stack of sd-accordions.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }
    });
  }
};

/**
 * Use `close-others` attribute to only have one accordion open at a time.
 */

export const CloseOthers = {
  name: 'Close Others',
  render: () => html`
    <sd-accordion-group close-others>
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
            Our investment philosophy is based on our belief that markets are inefficient. Long-term outperformance is,
            therefore, best achieved through a combination of fundamental research, actively managed security selection
            and robust risk management. This conviction lies at the heart of all our investment solutions. We offer a
            transparent investment process, which allows clients to keep track of our investment decisions.
          </p>
          <p>
            We take an integrated approach to portfolio management, with every portfolio manager also acting as a senior
            research specialist. This structure enhances the team’s commitment to the process and helps to ensure
            accountability for investment performance.
          </p>
        </div>
      </sd-accordion>
    </sd-accordion-group>
  `
};
