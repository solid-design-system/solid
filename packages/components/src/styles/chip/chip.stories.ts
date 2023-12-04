import '../../solid-components';
import { html } from 'lit';

import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-chip');
const { overrideArgs } = storybookHelpers('sd-chip');
const { generateTemplate } = storybookTemplate('sd-chip');

/**
 * A small, non-interactive label the represents a status, property or meta-data.
 *
 * <b>Variants</b><br>
 * <li>white is the default variant</li>
 * <li>--primary-200</li>
 * <li>--primary-300</li>
 * <li>--primary-500</li>
 */

export default {
  title: 'Styles/sd-chip',
  component: 'sd-chip',
  parameters: {
    ...parameters,
    backgrounds: {
      default: 'neutral-200'
    }
  },
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Lorem Ipsum' }]),
  argTypes,
  decorators: [(story: any) => html` ${story()} `]
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
      exclude: ['sd-chip', 'sd-chip--size-primary-200', 'sd-chip--size-primary-300', 'sd-chip--size-primary-500']
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
              values: ['sd-chip--white', 'sd-chip--primary-200', 'sd-chip--primary-300', 'sd-chip--primary-500']
            }
          ]
        },
        constants: {
          type: 'slot',
          name: 'default',
          value: `${chip.constant}`
        },
        args
      })
    )}`;
  }
};
