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
    <div class="mb-5">
      <sd-brandshape variant="primary">
        <p class="sd-headline sd-headline--lg text-white">Primary Variant Example</p>
        <p class="text-white">Example content text</p>
      </sd-brandshape>
    </div>

    <div class="mb-5">
      <sd-brandshape variant="neutral-100">
        <p class="sd-headline sd-headline--lg">Neutral-100 Variant Example</p>
        <p>Example content text</p>
      </sd-brandshape>
    </div>

    <div class="bg-primary">
      <sd-brandshape variant="white">
        <p class="sd-headline sd-headline--lg">White Variant Example</p>
        <p>Example content text</p>
      </sd-brandshape>
    </div>
  `
};

/**
 * The different shapes of the brandshape. By default, all shapes are displayed but it's possible to display only specific shapes by utilizing the `shapes` attribute.
 */
export const Shapes = {
  name: 'Shapes',
  render: () => html`
    <div class="mb-5">
      <sd-brandshape shapes='["top", "middle", "bottom"]'>
        <p class="text-white">All Shapes Example</p>
      </sd-brandshape>
    </div>

    <div class="mb-5">
      <sd-brandshape shapes='["top"]'>
        <p class="text-white">Top Shape Example</p>
      </sd-brandshape>
    </div>

    <div class="mb-5">
      <sd-brandshape shapes='["top", "middle"]'>
        <p class="text-white">Top and Middle Shape Example</p>
      </sd-brandshape>
    </div>

    <div class="mb-5">
      <sd-brandshape shapes='["middle", "bottom"]'>
        <p class="text-white">Middle and Bottom Shape Example</p>
      </sd-brandshape>
    </div>
  `
};

/**
 * When using the 'image' variant, use the transform property to adjust the image position. In this example, the image is moved up and skewed to fit the brandshape.
 */
export const Sample = {
  name: 'Sample: Positioning Image Variant',
  render: () => {
    return generateTemplate({
      args: overrideArgs([
        {
          type: 'attribute',
          name: 'variant',
          value: 'image'
        },
        {
          type: 'slot',
          name: 'image',
          value: `<img slot="image" style="transform:translateY(-50%) skewY(11deg)" src="./placeholders/images/coins.jpg" alt="collaboration" />`
        },
        { type: 'attribute', name: 'shapes', value: '["top", "middle", "bottom"]' }
      ])
    });
  }
};
