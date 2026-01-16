import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-loader');
const { generateTemplate } = storybookTemplate('sd-loader');
const { overrideArgs } = storybookHelpers('sd-loader');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-loader/Screenshots: sd-loader',
  component: 'sd-loader',
  tags: ['!autodocs'],
  args: overrideArgs([
    {
      type: 'attribute',
      name: 'color',
      value: 'primary'
    }
  ]),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } }
};

/**
 * Default: This shows sd-loader in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `color` attribute to change the color of the loader and correspond (currentColor) with the parents color.
 */

export const Variants = {
  name: 'Variants',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'color' }
      },
      options: {
        templateRenderer: ({ attributes }) => {
          return `<div class="flex text-neutral-500"><sd-loader color=${attributes.color}></sd-loader></div>`;
        },
        templateBackgrounds: {
          alternate: 'y',
          colors: ['', 'rgba(var(--sd-color-primary))', 'transparent']
        }
      },
      args
    });
  }
};

/**
 * Use the font-size in css to scale the loader.
 */

export const Size = {
  name: 'Size',
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          x: {
            type: 'template',
            name: 'individual sizing',
            values: [
              { value: '<div style="font-size: inherit">%TEMPLATE%</div>', title: 'font-size: inherit' },
              { value: '<div style="font-size: 1rem">%TEMPLATE%</div>', title: 'font-size: 1rem' },
              { value: '<div style="font-size: 2rem">%TEMPLATE%</div>', title: 'font-size: 2rem' },
              { value: '<div style="font-size: 4rem">%TEMPLATE%</div>', title: 'font-size: 4rem' }
            ]
          }
        },
        args
      })}
    `;
  }
};

export const Combination = generateScreenshotStory([Default, Variants, Size]);
