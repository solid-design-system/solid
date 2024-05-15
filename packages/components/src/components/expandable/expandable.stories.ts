import '../../solid-components';
// import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
// import { userEvent } from '@storybook/testing-library';
// import { waitUntil } from '@open-wc/testing-helpers';
// import cx from 'classix';

const { argTypes, parameters } = storybookDefaults('sd-expandable');
const { overrideArgs } = storybookHelpers('sd-expandable');
const { generateTemplate } = storybookTemplate('sd-expandable');

export default {
  title: 'Components/sd-expandable',
  component: 'sd-expandable',
  args: overrideArgs([
    { type: 'slot', name: 'default', value: '<div class="slot slot--border slot--text h-16">Default slot</div>' }
  ]),
  argTypes,
  parameters: { ...parameters }
};

/**
 * Expandable shows a brief summary and expands to show additional content.
 */
export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the inverted attribute to make an expandable with inverted colors.
 */
export const Inverted = {
  parameters: { controls: { exclude: 'inverted' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'inverted' }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'x', colors: ['rgb(var(--sd-color-primary, 0 53 142))', 'white'] }
      }
    });
  }
};
