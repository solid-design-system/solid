/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';

import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-brandshape');
const { overrideArgs } = storybookHelpers('sd-brandshape');
const { generateTemplate } = storybookTemplate('sd-brandshape');

/**
 *
 * Used as a container with brand character that visually emphasizes the content.
 *
 * **Related templates:**
 * - [Brandshape](?path=/story/templates-brandshape--docs)
 *
 */

export default {
  title: 'Components/sd-brandshape',
  tags: ['!dev'],
  component: 'sd-brandshape',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2059-1578&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: '<div class="slot slot--border slot--text h-8 w-full">Default slot</div>'
    },
    {
      type: 'slot',
      name: 'image',
      value: `<img slot="image" src="./placeholders/images/generic.jpg" alt="Generic" />`
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

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to set the color variant:
 *
 * - `primary` (default): Used on light backgrounds
 * - `neutral-100`
 * - `border-primary`: Used on light backgrounds
 * <br>Change the fill color to match the background color
 * - `image`
 * - `white`: Used on primary, primary-100 and neutral-100 backgrounds
 * - `border-white`: Used on primary background
 */

export const Variant = {
  name: 'Variant',
  render: () => html`
    <div class="space-y-5">
      <sd-brandshape variant="primary">
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      </sd-brandshape>

      <sd-brandshape variant="neutral-100">
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      </sd-brandshape>

      <sd-brandshape variant="border-primary">
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      </sd-brandshape>

      <sd-brandshape variant="image">
        <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
        <img slot="image" src="./placeholders/images/generic.jpg" alt="Generic" />
      </sd-brandshape>

      <div class="bg-primary">
        <sd-brandshape variant="white">
          <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
        </sd-brandshape>

        <sd-brandshape variant="border-white">
          <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
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

/**
 * Use the `object-position` CSS property to adjust the focal point of the image.
 */

export const ImageTranslateY = {
  name: 'Image Translation',
  render: () => html`
    <sd-brandshape variant="image">
      <div class="slot slot--border slot--text h-8 w-full">Default slot</div>
      <img
        slot="image"
        src="./placeholders/images/architecture.jpg"
        style="object-position: top right"
        alt="Modern, waved architecture with blue sky in background"
      />
    </sd-brandshape>
  `
};
// TODO: Add copyright story once it's implemented. (issue: https://github.com/solid-design-system/solid/issues/1553)
