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
  title: 'Styles/sd-skeleton/Screenshots: sd-skeleton',
  tags: ['!autodocs'],
  component: 'sd-skeleton',
  parameters: {
    ...parameters,
    controls: { disable: true }
  },
  args: overrideArgs([{ type: 'attribute', name: 'class', value: 'h-8 w-48' }]),
  argTypes
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<div class="%CLASSES%"></div>' },
      args
    });
  }
};

export const Variants = {
  name: 'Variants',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [
          {
            type: 'attribute',
            name: 'sd-skeleton--variant',
            values: ['', 'sd-skeleton--circular']
          }
        ]
      },
      constants: [{ type: 'attribute', name: 'class', value: 'h-12 w-12' }],
      options: { templateContent: '<div class="%CLASSES%"></div>' },
      args
    });
  }
};

export const OnElements = {
  name: 'On Elements',
  render: () => html`
    <div class="flex flex-col items-start gap-4 p-4">
      <sd-button class="sd-skeleton">Submit form</sd-button>
      <div class="sd-skeleton h-6 w-64"></div>
      <div class="sd-skeleton h-4 w-48"></div>
      <div class="sd-skeleton h-4 w-56"></div>
      <div class="flex gap-3">
        <div class="sd-skeleton sd-skeleton--circular w-10 h-10"></div>
        <div class="flex flex-col gap-2">
          <div class="sd-skeleton h-4 w-32"></div>
          <div class="sd-skeleton h-3 w-24"></div>
        </div>
      </div>
    </div>
  `
};

export const Combination = generateScreenshotStory([Default, Variants, OnElements]);
