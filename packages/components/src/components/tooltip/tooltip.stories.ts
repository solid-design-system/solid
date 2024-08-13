import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tooltip');
const { overrideArgs } = storybookHelpers('sd-tooltip');
const { generateTemplate } = storybookTemplate('sd-tooltip');

/**
 * Used to display additional information based on a specific action.
 */
export default {
  title: 'Components/sd-tooltip',
  tags: ['!dev'],
  component: 'sd-tooltip',
  args: overrideArgs([
    {
      type: 'attribute',
      name: 'open',
      value: true
    },
    {
      type: 'attribute',
      name: 'content',
      value: 'Lorem ipsum'
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [
    withActions,
    (story: any) =>
      html` <style>
          .template-position {
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .template-height {
            height: 110px;
          }
          .placement-story td.template,
          #story--components-sd-tooltip--skidding td.template,
          #story--components-sd-tooltip--distance td.template {
            position: relative;
            overflow: auto;
          }
        </style>
        ${story()}`
  ] as unknown
};

/**
 * Default: This shows sd-tooltip in its default state.
 */
export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div class="template-position template-height">
      ${generateTemplate({
        args
      })}
    </div>`;
  }
};

/**
 * Use the `size` attribute to set the size.
 */
export const Size = {
  name: 'Size',
  render: () => html`
    <div class="flex gap-12">
      <sd-tooltip content="Lorem ipsum" placement="top" size="lg" trigger="click focus"></sd-tooltip>
      <sd-tooltip content="Lorem ipsum" placement="top" size="sm" trigger="click focus"></sd-tooltip>
    </div>
  `
};

/**
 * Use the `placement` attribute to set the placement.
 */
export const Placement = {
  name: 'Placement',
  render: () => html` <sd-tooltip content="Lorem ipsum" placement="top" size="lg" trigger="click focus"></sd-tooltip> `
};

/**
 * Use the `disabled` attribute to disable the tooltip.
 */
export const Disabled = {
  name: 'Disabled',
  render: () => html` <sd-tooltip content="Lorem ipsum" placement="top" size="lg" disabled></sd-tooltip> `
};
