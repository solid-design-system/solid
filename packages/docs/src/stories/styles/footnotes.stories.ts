import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-footnotes');
const { overrideArgs } = storybookHelpers('sd-footnotes');
const { generateTemplate } = storybookTemplate('sd-footnotes');

export default {
  title: 'Styles/sd-footnotes',
  tags: ['!dev', 'autodocs', 'skip-a11y-[link-name]'],
  component: 'sd-footnotes',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3153-5381&t=ohgrgpEVGgKzqMzU-4'
    }
  },
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
        <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
        <li>Dolore magna aliq erat, sed diam voluptua.</li>
      `
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
      options: { templateContent: '<ol class="%CLASSES%">%SLOT%</ol>' },
      args
    });
  }
};

/**
 * Use the standard html list elements for alternative appearances:
 *
 * - ordered: use an `ol` element to create a numbered list.<br />Use the html `start` attribute to set the starting number of the list, the default value is '1'.
 * - unordered: use an `ul` element to create an unnumbered list.
 */

export const Variants = {
  render: () => html`
    <div class="flex flex-col gap-12">
      <ol class="sd-footnotes">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
        <li>Dolore magna aliq erat, sed diam voluptua.</li>
      </ol>
      <ul class="sd-footnotes">
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</li>
        <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
        <li>Dolore magna aliq erat, sed diam voluptua.</li>
      </ul>
    </div>
  `
};

/**
 * Use the `sd-footnotes--inverted` class when displayed on primary background.
 */

export const Inverted = {
  render: () => html`
    <div class="sd-container sd-container--variant-primary">
      <ol class="sd-footnotes sd-footnotes--inverted">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Sed diam nonumy eirmod tempor invidunt ut labore.</li>
        <li>Dolore magna aliq erat, sed diam voluptua.</li>
      </ol>
    </div>
  `
};
