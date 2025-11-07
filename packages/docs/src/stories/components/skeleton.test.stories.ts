import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-skeleton');
const { overrideArgs } = storybookHelpers('sd-skeleton');
const { generateTemplate } = storybookTemplate('sd-skeleton');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-skeleton/Screenshots: sd-skeleton',
  component: 'sd-skeleton',
  tags: ['!autodocs'],
  parameters: {
    ...parameters,
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs'
    }
  },
  args: overrideArgs([{ type: 'attribute', name: 'class', value: 'w-48 h-24' }]),
  argTypes,
  decorators: [
    (story: () => typeof html) =>
      html`<style>
          .skeleton-wrapper {
            display: inline-block;
          }
        </style>
        ${story()}`
  ]
};

/**
 * This shows the skeleton in its default state.
 */
export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The skeleton in all possible `variant` values.
 */
export const Variant = {
  name: 'Variant',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' }
      },
      constants: [{ type: 'attribute', name: 'class', value: 'w-24 h-24' }],
      args
    });
  }
};

/**
 * The skeleton wrapping various content types to show dimension adaptation.
 */
export const WrappingContent = {
  name: 'Wrapping Content',
  render: () => html`
    <div class="flex flex-col gap-4">
      <!-- Text content -->
      <sd-skeleton>
        <div style="font-size: 24px; font-weight: bold;">Large Heading Text</div>
      </sd-skeleton>

      <!-- Small text -->
      <sd-skeleton>
        <div style="font-size: 14px;">Small body text content</div>
      </sd-skeleton>

      <!-- Button-like content -->
      <sd-skeleton>
        <div style="width: 120px; height: 40px; padding: 10px 20px;">Button</div>
      </sd-skeleton>
    </div>
  `
};

export const Combination = generateScreenshotStory([Default, Variant, WrappingContent]);
