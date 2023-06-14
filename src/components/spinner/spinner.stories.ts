import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, args } = storybookDefaults('sd-spinner');
const { generateTemplate } = storybookTemplate('sd-spinner');

export default {
  title: 'Components/sd-spinner',
  component: 'sd-spinner',
  args,
  argTypes
};

/**
 * Default: This shows sd-spinner in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `color` attribute to change the color of the spinner and correspond (currentColor) with the parents color.
 */

export const Color = {
  parameters: { controls: { exclude: 'color' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'color' }
      },
      options: { templateBackgrounds: { alternate: 'x', colors: ['#F6F6F6', '#00358E', '#F6F6F6'] } },
      args
    });
  }
};

/**
 * Use the font-size in css to scale the spinner.
 */

export const Sizing = {
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
