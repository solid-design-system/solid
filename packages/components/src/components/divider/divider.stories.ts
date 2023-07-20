import '../../solid-components';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-divider');
const { generateTemplate } = storybookTemplate('sd-divider');

export default {
  title: 'Components/sd-divider',
  component: 'sd-divider',
  args,

  argTypes,
  // TODO: Add constants for a wrapper
  // constants: [
  //   { type: 'template', name: 'width', value: '<div class="h-4 w-4"> %TEMPLATE% </div>' },
  // ],
  parameters: { ...parameters },
  decorators: [withActions] as any
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
  parameters: { controls: { exclude: 'main' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-divider::part(...){outline: solid 2px red}',
          values: ['main'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-divider::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args
    });
  }
};
