import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-tooltip');
const { overrideArgs } = storybookHelpers('sd-tooltip');
const { generateTemplate } = storybookTemplate('sd-tooltip');

/**
 * Used as a floating and non-actionable text label that explains an element or function of the user interface.
 *
 *  **Related templates:**
 * - [Select with tooltip](?path=/docs/templates-select--docs#select%20with%20tooltip)
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

          #anchor--components-sd-tooltip--size .innerZoomElementWrapper,
          #anchor--components-sd-tooltip--placement .innerZoomElementWrapper,
          #anchor--components-sd-tooltip--hoist .innerZoomElementWrapper,
          .template-height {
            height: 110px;
          }

          #anchor--components-sd-tooltip--placement .innerZoomElementWrapper {
            padding: 50px 0;
            height: 400px;
          }

          #anchor--components-sd-tooltip--trigger .innerZoomElementWrapper {
            padding: 50px 0;
            height: 200px;
          }

          #anchor--components-sd-tooltip--hoist .innerZoomElementWrapper {
            height: 150px;
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
 * Use the `size` attribute to change the tooltip trigger size.
 *
 * - `large` is the default tooltip trigger size.
 * - `small` can be used as an alternative.
 */
export const Size = {
  render: () => html`
    <div class="flex items-center gap-12">
      <sd-tooltip content="Lorem ipsum" placement="bottom" size="lg" trigger="click focus"></sd-tooltip>
      <sd-tooltip content="Lorem ipsum" placement="bottom" size="sm" trigger="click focus"></sd-tooltip>
    </div>
  `
};

/**
 * Use the `placement` attribute to set the placement.
 *
 * - `top-start`: displays tooltip above the trigger element and aligns arrow to the start of the tooltip container
 * - `top`: displays tooltip above the trigger element
 * - `top-end`: displays tooltip above the trigger element and aligns arrow to the end of the tooltip container
 * - `bottom-start`: displays tooltip below the trigger element and aligns arrow to the start of the tooltip container
 * - `bottom`: displays tooltip below the trigger element
 * - `bottom-end`: displays tooltip below the trigger element and aligns arrow to the end of the tooltip container
 */
export const Placement = {
  render: () => html`
    <div class="grid md:grid-cols-3 gap-24">
      <div>
        <sd-tooltip
          content="Top Start Positioning"
          placement="top-start"
          open
          size="lg"
          trigger="click focus"
        ></sd-tooltip>
      </div>
      <div>
        <sd-tooltip content="Top Positioning" placement="top" open size="lg" trigger="click focus"></sd-tooltip>
      </div>
      <div>
        <sd-tooltip content="Top End Positioning" placement="top-end" open size="lg" trigger="click focus"></sd-tooltip>
      </div>
      <div>
        <sd-tooltip
          content="Bottom Start Positioning"
          placement="bottom-start"
          open
          size="lg"
          trigger="click focus"
        ></sd-tooltip>
      </div>
      <div>
        <sd-tooltip content="Bottom Positioning" placement="bottom" open size="lg" trigger="click focus"></sd-tooltip>
      </div>
      <div>
        <sd-tooltip
          content="Bottom End Positioning"
          placement="bottom-end"
          open
          size="lg"
          trigger="click focus"
        ></sd-tooltip>
      </div>
    </div>
  `
};

/**
 * Use the `disabled` attribute to disable the tooltip trigger.
 */
export const Disabled = {
  render: () => html` <sd-tooltip content="Lorem ipsum" placement="top" size="lg" disabled></sd-tooltip> `
};

/**
 * Use the `trigger` attribute to control how the tooltip is triggered.
 *
 * - `click`: displays the tooltip when the trigger element is clicked
 * - `hover`: displays the tooltip when the trigger element is hovered
 * - `focus`: displays the tooltip when the trigger element is focused
 * - `manual`: displays the tooltip when the `open` attribute is set to `true`
 */
export const Trigger = {
  render: () => html` <sd-tooltip content="Lorem ipsum" placement="top-start" size="lg" trigger="click"></sd-tooltip> `
};

/**
 * Use the `hoist` attribute to prevent the tooltip from being clipped when it's placed inside a container with `overflow: auto | hidden | scroll`.
 */
export const Hoist = {
  render: () =>
    html` <div class="flex items-end overflow-scroll h-[5em] w-16">
      <sd-tooltip content="Lorem ipsum" placement="bottom-start" size="lg"></sd-tooltip>
    </div>`
};
