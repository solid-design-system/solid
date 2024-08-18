import '../../solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-container');
const { overrideArgs } = storybookHelpers('sd-container');
const { generateTemplate } = storybookTemplate('sd-container');
const { generateScreenshotStory } = storybookUtilities;

/**
 * Container lets users delimit and highlight a piece of content. The user has no interaction with it, it is merely a visual element that influences the flow of the page.
 */

export default {
  title: 'Styles/sd-container/Screenshot Tests',
  tags: ['!autodocs'],
  component: 'sd-container',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ffdz9zO1CISlr8aHCZ7Bzp/Container?type=design&node-id=0-1&mode=design&t=pa9I1YKCYZQxj9Ob-0'
    }
  },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: '<div class="slot slot--border slot--text h-12">Default slot</div>'
  }),
  argTypes,
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template {
          width: 70%;
        }
      </style>
      ${story()}
    `
  ]
};

/**
 * Default: This shows sd-container in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<div class="%CLASSES%">%SLOT%</div>' },
      args
    });
  }
};

/**
 * Use the 5 color variants for alternate container experiences.
 */

export const Variants = {
  name: 'Variants',
  parameters: {
    controls: {
      exclude: ['sd-container--variant-...']
    }
  },
  render: (args: any) => {
    return html` ${generateTemplate({
      axis: {
        y: [
          {
            type: 'attribute',
            name: 'sd-container--variant',
            values: [
              'default',
              'sd-container--variant-primary-100',
              'sd-container--variant-primary',
              'sd-container--variant-border-neutral-400',
              'sd-container--variant-white'
            ]
          }
        ]
      },
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['tranparent', 'tranparent', 'tranparent', 'transparent', 'rgb(var(--sd-color-primary, 0 53 142))']
        }
      },
      args
    })}`;
  }
};

/**
 * Use the `--padding-sm` class to adapt the container to smaller component widths.
 */

export const Padding = {
  name: 'Padding',
  parameters: {
    controls: {
      exclude: ['sd-container--padding-...']
    }
  },
  render: (args: any) => {
    return html` ${generateTemplate({
      axis: {
        y: [
          {
            type: 'attribute',
            name: 'sd-container--padding',
            values: ['default', 'sd-container--padding-sm']
          }
        ]
      },
      args
    })}`;
  }
};

/**
 * You can override the default padding values by setting your desired values as a style.
 */

export const CustomPadding = {
  name: 'Custom Padding',
  parameters: {
    controls: {
      exclude: ['sd-container--padding-...']
    }
  },

  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<div class="%CLASSES%" style="padding:4rem;">%SLOT%</div>' },
      args
    });
  }
};

/**
 * You can add a triangle indentation to the container using the `--triangle-` class appended with one of the following positions 'top', 'right', 'bottom', 'left' (e.g. `sd-container--triangle-top`).
 */

export const TrianglePosition = {
  name: 'Sample: Triangle Position',
  parameters: {
    controls: {
      exclude: ['sd-container--triangle-...', 'sd-container--variant-...']
    }
  },
  render: (args: any) => {
    return html` ${generateTemplate({
      constants: [{ type: 'attribute', name: 'sd-container--variant-...', value: 'primary' }],
      axis: {
        y: [
          {
            type: 'attribute',
            name: 'sd-container--triangle',
            values: [
              'sd-container--triangle-top',
              'sd-container--triangle-right',
              'sd-container--triangle-bottom',
              'sd-container--triangle-left'
            ]
          }
        ]
      },
      args
    })}`;
  }
};

/**
 * For the `sd-container--variant-border-neutral-400`, an alternate set of classes must be used to create a triangle with a border.
 */

export const TriangleBorder = {
  name: 'Sample: Triangle Border',
  parameters: {
    controls: {
      exclude: ['sd-container--variant-...', 'sd-container--triangle-...']
    }
  },
  render: (args: any) => {
    return html` ${generateTemplate({
      constants: [{ type: 'attribute', name: 'sd-container--variant-...', value: 'border-neutral-400' }],
      axis: {
        y: [
          {
            type: 'attribute',
            name: 'sd-container--triangle',
            values: [
              'sd-container--triangle-top-border',
              'sd-container--triangle-right-border',
              'sd-container--triangle-bottom-border',
              'sd-container--triangle-left-border'
            ]
          }
        ]
      },
      args
    })}`;
  }
};

/**
 * You can set the color of the triangle cut-out using the `--triangle-background` CSS property. CSS variables can be set either with an inline style: `style="--triangle-background: rgb(var(--sd-color-primary-600, 0 53 142) / 1);"` or a custom class:
 * `.custom-sd-container {
    --triangle-background: rgb(var(--sd-color-primary-600, 0 53 142) / 1);
  }`
 */

export const TriangleColor = {
  name: 'Sample: Triangle Color',
  parameters: {
    controls: {
      exclude: ['sd-container--variant-...', 'sd-container--triangle-...']
    }
  },
  render: (args: any) => {
    const { 'sd-container--padding-...-attr': paddingAttr } = args;

    return html`
      <div class="bg-primary p-4">
        <div
          class=${`sd-container sd-container--variant-white sd-container--triangle-top sd-container--padding-${paddingAttr}`}
          style="--triangle-background: rgb(var(--sd-color-primary-600, 0 53 142) / 1);"
        >
          <div class="slot slot--border slot--text h-12">Default slot</div>
        </div>
      </div>
    `;
  }
};

export const Combination = generateScreenshotStory([
  Default,
  Variants,
  Padding,
  CustomPadding,
  TrianglePosition,
  TriangleBorder,
  TriangleColor
]);
