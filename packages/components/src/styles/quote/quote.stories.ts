import '../../solid-components';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-quote');
const { overrideArgs } = storybookHelpers('sd-quote');
const { generateTemplate } = storybookTemplate('sd-quote');

export default {
  title: 'Samples/sd-quote',
  component: 'sd-quote',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hER2N8wZXhiTrdlDXyrdUt/Quote?type=design&node-id=1001-4293&mode=design&t=Xywhix1rQMoatokH-0'
    }
  },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
  }),
  argTypes
};

const htmlContent = `
  <div class="%CLASSES%">
    <q>%SLOT%</q>
    <div class="sd-quote__content">
      <img class="sd-avatar" src="./placeholders/family.jpg" />
      <div class="sd-quote__content--details">
        <p class="sd-paragraph">Jane Miller</p>
        <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
      </div>
    </div>
  </div>
`;

/**
 * Default: This shows sd-avatar in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: htmlContent
      },
      args
    });
  }
};

/**
 * Use the `inverted` class to make a paragraph with inverted colors.
 */

export const Size = {
  parameters: { controls: { exclude: ['sd-quote--size-...', 'sd-quote--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'sd-quote--size-...', values: ['4xl', '3xl', 'xl'] }
      },
      options: { templateContent: htmlContent },
      args
    });
  }
};

/**
 * Use the `inverted` class to make a paragraph with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: ['sd-quote--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'sd-quote--inverted', values: [false, true] }
      },
      options: {
        templateContent: htmlContent,
        templateBackgrounds: { alternate: 'y', colors: ['transparent', '#00358E'] }
      },
      args
    });
  }
};

/**
 * Use the `variant` class to make a avatar with variants.
 */

export const Variant = {
  parameters: { controls: { exclude: ['sd-quote--image', 'sd-quote--inverted'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'sd-quote--image', values: [true, false] }
      },
      options: { templateContent: htmlContent },
      args
    });
  }
};
