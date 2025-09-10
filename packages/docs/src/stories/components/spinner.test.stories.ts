import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate, storybookUtilities } from '../../../scripts/storybook/helper';

const { argTypes, args, parameters } = storybookDefaults('sd-spinner');
const { generateTemplate } = storybookTemplate('sd-spinner');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-spinner/Screenshots: sd-spinner',
  component: 'sd-spinner',
  tags: ['!autodocs'],
  args,
  argTypes,
  parameters: { ...parameters, controls: { disable: true } }
};

/**
 * Default: This shows sd-spinner in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `color` attribute to change the color of the spinner and correspond (currentColor) with the parents color.
 */

export const Variants = {
  name: 'Variants',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'color' }
      },
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['', 'var(--sd-color-primary)', 'var(--sd-color-neutral-100)']
        }
      },
      args
    });
  }
};

/**
 * Use the font-size in css to scale the spinner.
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
