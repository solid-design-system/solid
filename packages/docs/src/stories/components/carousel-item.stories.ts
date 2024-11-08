import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-carousel-item');
const { overrideArgs } = storybookHelpers('sd-carousel-item');
const { generateTemplate } = storybookTemplate('sd-carousel-item');

/**
 * Used to represent a slide within a carousel.
 *
 * **Related components**:
 * - [sd-carousel](?path=/docs/components-sd-carousel--docs)
 *
 * **Related templates**:
 * - [Carousel](?path=/docs/templates-carousel--docs)
 */

export default {
  title: 'Components/sd-carousel-item',
  tags: ['!dev'],
  component: 'sd-carousel-item',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-16">Default slot</div>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2233-2414&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

/**
 * This shows sd-carousel-item in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};
