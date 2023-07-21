import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
const { args, argTypes, parameters } = storybookDefaults('sd-divider');
const { generateTemplate } = storybookTemplate('sd-divider');

export default {
  title: 'Components/sd-divider',
  component: 'sd-divider',
  args,

  argTypes,

  parameters: { ...parameters },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        sd-divider[orientation='vertical'] {
          height: 120px;
        }
        sd-divider[orientation='horizontal'] {
          width: 120px;
        }
      </style>
      ${story()}
    `
  ]
};
/**
 * This shows sd-divider in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the orientation attribute to set the axis of a divider.
 */

export const Orientation = {
  parameters: { controls: { exclude: 'orientation' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'orientation' }
      },
      args
    });
  }
};

/**
 * Use the inverted attribute to make a divider with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: 'inverted' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'inverted' }
      },
      args
    });
  }
};

/**
 * Use the `main` part selector to customize the divider.
 */

export const Parts = {
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-divider::part(...){outline: solid 2px red}',
          values: [
            {
              title: 'main',
              value: `<style>#part-main sd-divider::part(main){outline: solid 2px red }</style><div id="part-main">%TEMPLATE%</div>`
            }
          ]
        }
      },
      args
    });
  }
};
