import '../../../../components/src/solid-components';
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
 * - [Tooltip](?path=/docs/templates-tooltip--docs)
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
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2776-10073&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
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
          #anchor--components-sd-tooltip--hoist .innerZoomElementWrapper,
          .template-height {
            height: 110px;
          }

          #anchor--components-sd-tooltip--trigger .innerZoomElementWrapper {
            padding: 50px 0;
            height: 200px;
          }

          #anchor--components-sd-tooltip--hoist .innerZoomElementWrapper,
          #anchor--components-sd-tooltip--custom-trigger .innerZoomElementWrapper {
            height: 150px;
          }
        </style>
        ${story()}`
  ] as unknown
};

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
 * Use the `size` attribute to change the tooltip trigger size:
 *
 * - `lg` (default)
 * - `sm`
 */

export const Size = {
  render: () => html`
    <div class="flex items-center gap-12">
      <sd-tooltip content="Lorem ipsum" placement="bottom-start" size="lg" trigger="click focus"></sd-tooltip>
      <sd-tooltip content="Lorem ipsum" placement="bottom-start" size="sm" trigger="click focus"></sd-tooltip>
    </div>
  `
};

/**
 * Use the `placement` attribute to set the placement:
 *
 * - `top-start`: Displays tooltip above the trigger element and aligns arrow to the start of the tooltip container
 * - `top`: Displays tooltip above the trigger element
 * - `top-end`: Displays tooltip above the trigger element and aligns arrow to the end of the tooltip container
 * - `bottom-start`: Displays tooltip below the trigger element and aligns arrow to the start of the tooltip container
 * - `bottom`: Displays tooltip below the trigger element
 * - `bottom-end`: Displays tooltip below the trigger element and aligns arrow to the end of the tooltip container
 */

export const Placement = {
  render: () => html`
    <div class="grid grid-cols-1 justify-items-center md:grid-cols-3 md:justify-items-start gap-24 p-12">
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
 * Use the `trigger` attribute to control how the tooltip is triggered:
 *
 * - `click`: Displays the tooltip when the trigger element is clicked
 * - `hover`: Displays the tooltip when the trigger element is hovered
 * - `focus`: Displays the tooltip when the trigger element is focused
 * - `manual`: Displays the tooltip when the `open` attribute is set to `true`
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
      <sd-tooltip content="Lorem ipsum" placement="bottom-start" size="lg" hoist></sd-tooltip>
    </div>`
};

/**
 * It is possible to change the tooltip trigger element by defining the new trigger in the default slot.
 * However, be aware that this affects the accessibility of the component due to the loss of the aria reference to the trigger element which will be located in the shadow DOM.
 * In this example we provide a solution to this problem by using a live region to announce the tooltip content when the trigger element is clicked.
 */
export const CustomTrigger = {
  render: () => html`
    <sd-tooltip
      size="lg"
      content="This tooltip is accessible"
      placement="bottom"
      trigger="click"
      class="custom-tooltip"
    >
      <sd-button class="custom-button">Custom Trigger</sd-button>
    </sd-tooltip>
    <div aria-live="assertive" class="sr-only live-region"></div>
    <script>
      const liveRegion = document.querySelector('.live-region');
      const tooltip = document.querySelector('.custom-tooltip');
      const tooltipContent = tooltip.getAttribute('content');
      const tooltipLabel = tooltipContent;

      tooltip.addEventListener('sd-after-show', event => {
        liveRegion.textContent =
          liveRegion.textContent === tooltipContent ? tooltipContent + '\\u200B' : tooltipContent;
      });
    </script>
  `
};
