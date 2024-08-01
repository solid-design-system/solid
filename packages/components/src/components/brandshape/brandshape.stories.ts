/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';

import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-brandshape');
const { overrideArgs } = storybookHelpers('sd-brandshape');
const { generateTemplate } = storybookTemplate('sd-brandshape');

/**
 *
 * This component is used to create a brand box with a background and create a visual separation in the UI.
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
 *
 * Options are `top`, `middle` and `bottom`.
 *
 * `bottom` shape cannot display any content.
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
