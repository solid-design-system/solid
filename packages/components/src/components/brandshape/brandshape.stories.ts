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
      <sd-brandshape variant="primary">
        <p class="sd-headline sd-headline--lg text-white">Primary Variant</p>
      </sd-brandshape>

      <sd-brandshape variant="neutral-100">
        <p class="sd-headline sd-headline--lg">Neutral-100 Variant</p>
      </sd-brandshape>

      <div class="bg-primary">
        <sd-brandshape variant="white">
          <p class="sd-headline sd-headline--lg">White Variant</p>
        </sd-brandshape>
      </div>

      <sd-brandshape variant="border-primary">
        <p class="sd-headline sd-headline--lg">Border Primary Variant</p>
      </sd-brandshape>

      <div class="bg-primary">
        <sd-brandshape variant="border-white">
          <p class="sd-headline sd-headline--lg text-white">Border White Variant</p>
        </sd-brandshape>
      </div>

      <sd-brandshape variant="image">
        <p class="sd-headline sd-headline--lg">Image Variant</p>
        <img slot="image" style="transform:translateY(-30%);" src="./placeholders/images/generic.jpg" alt="Generic" />
      </sd-brandshape>
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
        <p class="text-white">All Shapes</p>
      </sd-brandshape>

      <sd-brandshape shapes='["top"]'>
        <p class="text-white">Top Shape</p>
      </sd-brandshape>

      <sd-brandshape shapes='["top", "middle"]'>
        <p class="text-white">Top and Middle Shape</p>
      </sd-brandshape>

      <sd-brandshape shapes='["middle", "bottom"]'>
        <p class="text-white">Middle and Bottom Shape</p>
      </sd-brandshape>
    </div>
  `
};
