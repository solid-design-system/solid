import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-step');
const { overrideArgs } = storybookHelpers('sd-step');
const { generateTemplate } = storybookTemplate('sd-step');

export default {
  title: 'Components/sd-step',
  component: 'sd-step',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `Lorem ipsum est dolor sit amet`
    },
    {
      type: 'slot',
      name: 'label',
      value: `<span slot="label">Step name</span>`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-step in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html`${generateTemplate({ args })}`;
  }
};

/**
 * Use the orientation attribute to set the axis of a step.
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
 * Use the orientation attribute to set the axis of a step.
 */

export const SizeXStatus = {
  parameters: { controls: { exclude: ['size', 'state'] }, docs: { story: { inline: false, height: '500px' } } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'size' },
        x: { type: 'attribute', name: 'state' }
      },
      args
    });
  },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        td.template {
          width: 33%;
        }
      </style>
      ${story()}
    `
  ]
};
