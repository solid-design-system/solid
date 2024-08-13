/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';

import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-brandshape');
const { overrideArgs } = storybookHelpers('sd-brandshape');
const { generateTemplate } = storybookTemplate('sd-brandshape');

/**
 *
 * Creates a container with brand character and visually emphasizes the content.
 *
 * **Related templates:**
 * - [Brandshape Template](?path=/story/templates-brandshape-template--docs)
 *
 */

export default {
  title: 'Components/sd-brandshape',
  tags: ['!dev'],
  component: 'sd-brandshape',
  parameters: { ...parameters },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: '<div class="slot slot--border slot--text h-8 w-full">Default slot</div>'
    },
    {
      type: 'slot',
      name: 'image',
      value: `<img slot="image" style="transform:translateY(-30%);" src="./placeholders/images/generic.jpg" alt="Generic" />`
    },
    { type: 'attribute', name: 'shapes', value: '["top", "middle", "bottom"]' }
  ]),
  argTypes: {
    ...argTypes,
    'shapes-attr': {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...argTypes['shapes-attr'],
      control: 'text'
    }
  }
};

/**
 * Default: This shows sd-brandshape in its default state.
 */
export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to display the brandshape with different background colors.
 */

export const Variant = {
  name: 'Variant',
  render: () => html`
    <div class="space-y-5">
      <sd-brandshape variant="neutral-100">
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      </sd-brandshape>

      <sd-brandshape variant="primary">
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      </sd-brandshape>

      <sd-brandshape variant="border-primary">
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      </sd-brandshape>

      <div class="bg-primary">
        <sd-brandshape variant="white">
          <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
        </sd-brandshape>

        <sd-brandshape variant="border-white">
          <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
        </sd-brandshape>

        <sd-brandshape variant="image">
          <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
          <img slot="image" style="transform:translateY(-30%);" src="./placeholders/images/generic.jpg" alt="Generic" />
        </sd-brandshape>
      </div>
    </div>
  `
};

/**
 * Use the `shapes` attribute to only display specific parts of the brandshape.
 */
export const Shapes = {
  name: 'Shapes',
  render: () => html`
    <div class="space-y-5">
      <sd-brandshape shapes='["top", "middle", "bottom"]'>
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      </sd-brandshape>

      <sd-brandshape shapes='["top"]'>
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      </sd-brandshape>

      <sd-brandshape shapes='["top", "middle"]'>
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      </sd-brandshape>

      <sd-brandshape shapes='["middle", "bottom"]'>
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      </sd-brandshape>
    </div>
  `
};

// TODO: Add copyright story once it's implemented.
