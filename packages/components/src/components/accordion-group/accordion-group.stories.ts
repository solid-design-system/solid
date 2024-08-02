/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-accordion-group');
const { generateTemplate } = storybookTemplate('sd-accordion-group');

/**
 *
 * Accordion groups are used to group multiple accordions together.
 *
 *  **Related templates**:
 * - [Accordion Group](?path=/docs/templates-accordion-group--docs)
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
 * Use 'close-others' attribute to only have one accordion open at a time.
 */

export const CloseOthers = {
  name: 'One accordion open at a time',
  render: () => html`
    <sd-accordion-group close-others>
      <sd-accordion summary="Accordion 1">
        <div class="slot slot--border slot--background slot--text h-16">Default slot</div> </sd-accordion
      ><sd-accordion summary="Accordion 2"
        >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
        tempora.</sd-accordion
      ><sd-accordion summary="Accordion 3"
        >A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem tempora.
        A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem tempora.
        A dolore mollitia qui dolorum possimus. Natus quos ea nihil ullam. Vel molestias nesciunt. Error autem
        tempora.</sd-accordion
      >
    </sd-accordion-group>
  `
};
