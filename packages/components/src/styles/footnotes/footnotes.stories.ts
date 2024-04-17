import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-footnotes');
const { overrideArgs } = storybookHelpers('sd-footnotes');
const { generateTemplate } = storybookTemplate('sd-footnotes');

/**
 * A footnote contains additional information/sources related to the content and usually appears at the bottom of a page or below the content it refers to.
 */

export default {
  title: 'Styles/sd-footnotes',
  component: 'sd-footnotes',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/DeZ6iJggYfpSXHcEexNeYs/Footnote?type=design&node-id=0-1&mode=design&t=7vjD8Qq8iKSnKn6a-0'
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value:
        '<li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li><li>Sed diam nonumy eirmod tempor invidunt ut labore.</li><li>Dolore magna aliq erat, sed diam voluptua.</li>'
    }
  ]),
  argTypes,
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template {
          text-align: left;
        }
      </style>
      ${story()}
    `
  ]
};

/**
 * Default: This shows sd-footnote in its default state, used with a `ul` element.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<div class="sd-container"><ul class="%CLASSES%">%SLOT%</ul></div?' },
      args
    });
  }
};

/**
 * Use the class with a `ol` element to display the footnotes as a numbered list.
 */

export const Number = {
  parameters: { controls: { include: [] } },

  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: '<div class="sd-container"><ol class="%CLASSES%">%SLOT%</ol></div?'
      },
      args
    });
  }
};

/**
 * Use the `--continue` class to continue the footnote numbering from the previous footnote between different lists.
 *
 * > This only works inside the same ShadowDOM/LightDOM context.
 */

export const Continue = {
  parameters: { controls: { include: [] } },

  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-footnotes--continue', values: [false, true] }]
      },
      options: {
        templateContent: `<div class="sd-container space-y-4">
          <h2 class="sd-headline sd-headline--size-lg">First list</h2>
          <ol class="%CLASSES%">%SLOT%</ol>
          <h2 class="sd-headline sd-headline--size-lg">Second list</h2>
          <ol class="%CLASSES%">%SLOT%</ol>
          <h2 class="sd-headline sd-headline--size-lg">Third list</h2>
          <ol class="%CLASSES%">%SLOT%</ol>
        </div>`
      },
      args
    });
  }
};

/**
 * This sample shows how to use the `start` attribute to set the starting number of the list. This is a html standard attribute.
 */

export const Sample = {
  parameters: { controls: { include: [] } },
  name: 'Sample: Set start',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: `<div class="sd-container">
        <ol start="50" class="%CLASSES%">%SLOT%</ol>
        <ol start="150" class="%CLASSES%">%SLOT%</ol>
        <ol class="%CLASSES%">%SLOT%</ol>
      </div>`
      },
      args
    });
  }
};
