import '../../solid-components';
import { html } from 'lit';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-chip');
const { overrideArgs } = storybookHelpers('sd-chip');
const { generateTemplate } = storybookTemplate('sd-chip');

/**
 * Generates basic styles for chip elements.
 */

export default {
  title: 'Styles/sd-chip',
  component: 'sd-chip',
  parameters: {
    ...parameters
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Lorem Ipsum' }]),
  argTypes,
  decorators: [(story: any) => html`${story()}`]
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: { templateContent: '<span class="%CLASSES%">%SLOT%</span>' },
      args
    });
  }
};

export const Variants = {
  name: 'Variants',
  parameters: {
    controls: {
      exclude: ['sd-chip--size-primary-200', 'sd-chip--size-primary-300', 'sd-chip--size-primary-500']
    }
  },
  render: (args: any) => {
    return html` ${[
      {
        title: '',
        constant: `Lorem ipsum`
      }
    ].map(chip =>
      generateTemplate({
        axis: {
          y: [
            {
              type: 'attribute',
              name: 'Variant',
              values: ['sd-chip--primary-200', 'sd-chip--primary-300', 'sd-chip--primary-500']
            }
          ]
        },
        constants: {
          type: 'slot',
          name: 'default',
          value: `${chip.constant}`
        },
        options: {
          templateBackground: 'rgb(var(--sd-color-neutral-200, 242 242 242))',
          title: `${chip.title}`
        },
        args
      })
    )}`;
  }
};
