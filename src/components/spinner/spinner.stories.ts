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
 * Use the `variant` attribute to change the color of the spinner and correspond (currentColor) with the parents variant.
 */

export const Variant = {
  parameters: { controls: { exclude: 'variant' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' }
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
  parameters: { controls: { exclude: ['variant'] } },
  render: (args: any) => {
    return html`
      <style>
        sd-spinner {
          font-size: 2rem;
        }
      </style>
      ${generateTemplate({
        options: { title: `font-size: 2rem` },
        args
      })}
    `;
  }
};
