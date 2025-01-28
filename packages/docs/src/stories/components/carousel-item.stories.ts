import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
const { argTypes, parameters } = storybookDefaults('sd-carousel-item');
const { overrideArgs } = storybookHelpers('sd-carousel-item');
const { generateTemplate } = storybookTemplate('sd-carousel-item');

/**
 * Used to represent a slide within a carousel.
 *
 * **Accessibility Information:**
 * - Ensure that users can navigate through the carousel using the keyboard (e.g., Tab and Arrow keys).
 * - Navigation arrows are still displayed on touch devices to enable alternative interaction that complies with accessibility requirements.
 * - Use appropriate ARIA roles, such as `aria-roledescription="carousel"` and ”aria-live” to indicate the state of the carousel and announce dynamic changes to screen reader users, and navigation controls and slides using ”aria-label” or ”aria-labelledby”.
 * - Show the pause/play control at all times.
 * - Ensure sufficient contrast between each slide’s content and its background.
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
