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
 * Default: This shows sd-footnote in its default state.
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
 * Use the `--number` class to display the footnote as a numbered list.
 */

export const Number = {
  parameters: { controls: { exclude: ['sd-footnote--number'] } },

  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent:
          '<div class="sd-container"><ol class="%CLASSES%">%SLOT%</ol><ol class="%CLASSES%" start="50">%SLOT%</ol></div?'
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
 * This sample shows how to use the `--number` and `--reset` classes in combination. The `--number` class should be included in every footnote that needs a number. The `--reset` class should be included at the first `sd-footnote` to indicate that it's the first element. It can be used again later on to restart the counter from 1.
 */

export const Sample = {
  parameters: { controls: { include: [] } },
  name: 'Sample: Set start',
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent:
          '<div class="sd-container"><ol start="50" class="%CLASSES%">%SLOT%</ol><ol class="%CLASSES%" start="50">%SLOT%</ol></div?'
      },
      args
    });
  }
};
