import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-footnotes');
const { overrideArgs } = storybookHelpers('sd-footnotes');
const { generateTemplate } = storybookTemplate('sd-footnotes');

/**
 * Used to add additional information/sources related to the content and usually appears at the bottom of a page or below the content it refers to.
 */

export default {
  title: 'Styles/sd-footnotes',
  tags: ['!dev'],
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

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<div class="sd-container"><ol class="%CLASSES%">%SLOT%</ol></div?' },
      args
    });
  }
};

/**
 * Use the alternative html elements for alternative appearances:
 *
 * - unnumbered: use a `ul` element to create an unnumbered list.
 * - numbered: use an `ol` element to create a numbered list.
 * Usually start with "1", use the html `start` attribute to set the starting number of the list.
 */

export const Variants = {
  render: () => html`
    <div class="flex flex-col gap-12">
      <ul class="sd-footnotes">
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
        <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
        <li>Dolore magna aliq erat, sed diam voluptua.</li>
      </ul>
      <ol start="150" class="sd-footnotes">
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
        <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
        <li>Dolore magna aliq erat, sed diam voluptua.</li>
      </ol>
    </div>
  `
};

/**
 * Use the `sd-footnotes--inverted` class to invert the color of the footnotes.
 */

export const Inverted = {
  render: () => html`
    <div class="sd-container sd-container--variant-primary">
      <ol class="sd-footnotes sd-footnotes--inverted">
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
        <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
        <li>Dolore magna aliq erat, sed diam voluptua.</li>
      </ol>
    </div>
  `
};
