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
      value: `<li>Lorem ipsum dolor sit amet.</li>
<li>Elit aliqua labore qui eu mollit officia ullamco exercitation ut veniam laboris ad elit adipisicing elit. Cupidatat enim nostrud aliquip labore elit sit fugiat veniam.</li>
<li>Officia ipsum cillum id sint officia commodo laboris ullamco nulla veniam ut. Cupidatat deserunt amet aliquip dolore nostrud amet veniam ad nostrud do dolore culpa.</li>`
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
      options: { templateContent: '<div class="sd-container"><ol class="%CLASSES%">%SLOT%</ol></div>' },
      args
    });
  }
};

/**
 * Use the class with a `ul` element to display the footnotes as an unordered list.
 */

export const UnorderedLists = {
  parameters: { controls: { include: [] } },

  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: '<div class="sd-container"><ul class="%CLASSES%">%SLOT%</ul></div>'
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
