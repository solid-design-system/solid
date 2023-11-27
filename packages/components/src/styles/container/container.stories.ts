import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-container');
const { overrideArgs } = storybookHelpers('sd-container');
const { generateTemplate } = storybookTemplate('sd-container');

/**
 * Container lets users delimit and highlight a piece of content. The user has no interaction with it, it is merely a visual element that influences the flow of the page.
 */

export default {
  title: 'Styles/sd-container',
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
