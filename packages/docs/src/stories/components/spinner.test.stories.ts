import '../../../../components/src/solid-components';
import { html } from 'lit-html';
storybookUtilities;
import {
  storybookDefaults,
  storybookTemplate,
  storybookUtilities
} from '../../../../components/scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-spinner');
const { generateTemplate } = storybookTemplate('sd-spinner');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-spinner/Screenshots: sd-spinner',
  component: 'sd-spinner',
  tags: ['!autodocs'],
  args,
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
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
  parameters: { controls: { exclude: 'color' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'color' }
      },
      options: {
        templateBackgrounds: {
          alternate: 'x',
          colors: ['', 'rgb(var(--sd-color-primary, 0 53 142))', '#F6F6F6']
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
  parameters: { controls: { exclude: ['color'] } },
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
