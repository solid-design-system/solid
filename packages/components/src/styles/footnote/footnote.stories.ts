import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-footnote');
const { overrideArgs } = storybookHelpers('sd-footnote');
const { generateTemplate } = storybookTemplate('sd-footnote');

/**
 * A footnote contains additional information/sources related to the content and usually appears at the bottom of a page or below the content it refers to.
 */

export default {
  title: 'Styles/sd-footnote',
  component: 'sd-footnote',
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
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliq erat, sed diam voluptua.'
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
      options: { templateContent: '<div class="sd-container"><p class="%CLASSES%">%SLOT%</p></div?' },
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
      axis: {
        y: [{ type: 'attribute', name: 'sd-footnote--number', values: [false, true] }]
      },
      options: { templateContent: '<div class="sd-container"><p class="%CLASSES%">%SLOT%</p></div?' },
      args
    });
  }
};

/**
 * Use the `--reset` class to reset the number of the footnote and start counting from 1. This should be used at the beginning of a counting sequence and can be used again when starting a new context.
 */

export const Reset = {
  parameters: { controls: { include: [] } },

  render: () => {
    return html`<div class="sd-container flex flex-col gap-4">
    <p class="sd-footnote sd-footnote--number sd-footnote--reset">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliq erat, sed diam voluptua.
        </p>

        <p class="sd-footnote sd-footnote--number">
          Maecenas vel maximus nisi. Morbi feugiat venenatis diam ac efficitur. Nulla vehicula posuere facilisis.
          Integer vel dolor efficitur, auctor leo id, interdum ipsum. Etiam nec porta dolor.
        </p>

        <p class="sd-footnote sd-footnote--number">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed et massa non
          dolor porta viverra a sed lorem.
        </p>


    <h4 class="sd-headline sd-headline--size-base">New Context</h4>

    <p class="sd-footnote sd-footnote--number sd-footnote--reset">
          Vivamus erat libero, pellentesque ac velit a, vulputate congue neque. Vivamus non interdum leo, maximus
          dignissim nibh. Suspendisse pretium tempor arcu.
        </p>

    <p class="sd-footnote sd-footnote--number">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliq erat, sed diam voluptua.
    </p>
    </div>
    </div>`;
  }
};

/**
 * Use the `inverted` class to make a footnote with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: ['sd-footnote--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: [{ type: 'attribute', name: 'sd-footnote--inverted', values: [false, true] }]
      },
      constants: { type: 'attribute', name: 'sd-footnote--inverted', value: true },
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['transparent', 'rgb(var(--sd-color-primary, 0 53 142))'] }
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
  name: 'Sample: Counter',
  render: () => {
    return html`
      <div class="sd-container flex flex-col gap-4">
        <p class="sd-footnote sd-footnote--number sd-footnote--reset">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliq erat, sed diam voluptua.
        </p>

        <p class="sd-footnote sd-footnote--number">
          Maecenas vel maximus nisi. Morbi feugiat venenatis diam ac efficitur. Nulla vehicula posuere facilisis.
          Integer vel dolor efficitur, auctor leo id, interdum ipsum. Etiam nec porta dolor.
        </p>

        <p class="sd-footnote sd-footnote--number">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed et massa non
          dolor porta viverra a sed lorem.
        </p>

        <p class="sd-footnote sd-footnote--number sd-footnote--reset">
          Vivamus erat libero, pellentesque ac velit a, vulputate congue neque. Vivamus non interdum leo, maximus
          dignissim nibh. Suspendisse pretium tempor arcu.
        </p>

        <p class="sd-footnote sd-footnote--number">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliq erat, sed diam voluptua.
        </p>
      </div>
    `;
  }
};
