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
      <sd-skeleton>
          <span slot="headline" class="sd-headline sd-headline--size-3xl">Terms of use</span>
            <div class="items-start justify-start h-[300px] lg:h-[454px] space-y-5">
              <h3 class="sd-headline sd-headline--size-lg">Important notices to our investors</h3>
              <p class="sd-paragraph">
                By accepting this document, you accept the following restrictions as binding on you:
              </p>
              <p class="sd-paragraph">
                This investor information is intended exclusively for professional clients who are already invested in
                the fund.
                <sd-link href="http://institutional@union-investment.de">institutional@union-investment.de</sd-link>,
                </p>
              </p>
            <sd-button class="close-dialog" variant="secondary" size="lg" type="button" aria-label="Close">
              <sd-icon name="system/log-out" slot="icon-left"></sd-icon>
              Exit portal
            </sd-button>
            <sd-button class="download" variant="secondary" size="lg" type="button">
              <sd-icon name="system/download" slot="icon-left"></sd-icon>
              Download PDF
            </sd-button>
            <sd-button class="close-dialog" variant="primary" size="lg" type="button"> Accept terms of use </sd-button>
          </div>
      </sd-skeleton>

      <sd-skeleton>
        <div class="sd-leadtext">
          Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
          phasellus dui vel id.
        </div>
      </sd-skeleton>

      <sd-skeleton>
        <sd-button variant="primary">Primary</sd-button>
      </sd-skeleton>
    </div>
  `
};

export const Combination = generateScreenshotStory([Default, Variant, WrappingContent]);
