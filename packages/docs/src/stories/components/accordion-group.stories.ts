/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-accordion-group');
const { generateTemplate } = storybookTemplate('sd-accordion-group');

/**
 *
 * Used to group multiple accordions together.
 *
 * **Related components**:
 * - [sd-accordion](?path=/docs/components-sd-accordion--docs)
 *
 * **Related templates**:
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
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2100-1420&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }
    });
  }
};

/**
 * Use the `close-others` attribute to only have one accordion open at a time.
 */

export const CloseOthers = {
  name: 'Close Others',
  render: () => html`
    <sd-accordion-group close-others>
      <sd-accordion summary="Accordion 1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed
        </p>
      </sd-accordion>
      <sd-accordion summary="Accordion 2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed
        </p>
      </sd-accordion>
      <sd-accordion summary="Accordion 3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed
        </p>
      </sd-accordion>
    </sd-accordion-group>
  `
};
