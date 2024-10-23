import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-dropdown');
const { generateTemplate } = storybookTemplate('sd-dropdown');
const { overrideArgs } = storybookHelpers('sd-dropdown');

/**
 * Used to display a list of actions or options in a panel when activated.
 *
 * **Related templates:**
 * - [Dropdown](?path=/docs/templates-dropdown--docs)
 */

export default {
  title: 'Components/sd-dropdown',
  component: 'sd-dropdown',
  tags: ['!dev'],
  args: overrideArgs([
    {
      type: 'slot',
      name: 'trigger',
      value: '<sd-navigation-item slot="trigger" style="position: relative">Dropdown</sd-navigation-item>'
    },
    {
      type: 'slot',
      name: 'default',
      value: '<div class="slot slot--border slot--text">Default slot</div>'
    },
    {
      type: 'attribute',
      name: 'open',
      value: true
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2357-10911&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  decorators: [
    withActions,
    (story: any) =>
      html`<style>
          sd-dropdown:not([rounded]) sd-button::part(base),
          sd-dropdown:not([rounded]) .slot {
            border-radius: 0;
          }
          td.template > * {
            padding: 24px;
          }
          td.template > *,
          .example,
          div.example {
            width: 140px;
            height: 100px;
          }
          .example {
            display: flex;
            flex-direction: column;
            padding: 12px;
          }
          .template-placement sd-dropdown[placement^='top'] .slot,
          .template-placement sd-dropdown[placement^='bottom'] .slot {
            width: 48px;
          }
          .template-placement sd-dropdown[placement^='left'] .slot,
          .template-placement sd-dropdown[placement^='right'] .slot {
            height: 36px;
          }

          .placement-story td.template,
          #story--components-sd-dropdown--skidding td.template,
          #story--components-sd-dropdown--distance td.template {
            position: relative;
            overflow: auto;
          }
          #anchor--components-sd-dropdown .innerZoomElementWrapper,
          #anchor--components-sd-dropdown--open .innerZoomElementWrapper,
          #anchor--components-sd-dropdown--rounded .innerZoomElementWrapper,
          #anchor--components-sd-dropdown--placement .innerZoomElementWrapper,
          #anchor--components-sd-dropdown--placement .innerZoomElementWrapper,
          #anchor--components-sd-dropdown--distance .innerZoomElementWrapper,
          #anchor--components-sd-dropdown--stay-open .innerZoomElementWrapper,
          #anchor--components-sd-dropdown--skidding .innerZoomElementWrapper,
          #anchor--components-sd-dropdown--no-flip .innerZoomElementWrapper {
            min-height: 150px;
          }
          #anchor--components-sd-dropdown--placement .innerZoomElementWrapper {
            margin-top: 25px;
          }
          #anchor--components-sd-dropdown--no-auto-size .innerZoomElementWrapper {
            min-height: 250px;
          }
        </style>
        ${story()}`
  ] as unknown
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html`<div style="height: 200px; overflow: hidden;">
      ${generateTemplate({
        constants: {
          type: 'slot',
          name: 'default',
          value: '<div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>'
        },
        args
      })}
    </div>`;
  }
};

/**
 * Use the `open` attribute to toggle the visibility of the dropdown.
 */
export const Open = {
  name: 'Open',
  render: () => html`
    <sd-dropdown open>
      <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
      <sd-button slot="trigger" variant="secondary">Trigger</sd-button>
    </sd-dropdown>
  `
};

/**
 * Use the `rounded` attribute to set a border-radius on the dropdown panel and trigger button.
 */

export const Rounded = {
  name: 'Rounded',
  render: () => html`
    <sd-dropdown open rounded distance="4">
      <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
      <sd-button slot="trigger" variant="secondary">
        <sd-icon name="system/more-functions" class="h-6 w-6"></sd-icon>
      </sd-button>
    </sd-dropdown>
  `
};

/**
 * Use the `placement` attribute to set the position of the dropdown panel relative to the trigger:
 *
 * - top: `top`, `top-start` and `top-end`
 * - bottom: `bottom`, `bottom-start` and `bottom-end`
 * - right: `right`, `right-start` and `right-end`
 * - left: `left`, `left-start` and `left-end`
 */

export const Placement = {
  name: 'Placement',
  render: () => html`
    <div class="grid grid-cols-2 gap-32">
      <sd-dropdown open placement="bottom-start">
        <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
        <sd-button slot="trigger">bottom-start</sd-button>
      </sd-dropdown>

      <sd-dropdown open placement="bottom-end">
        <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
        <sd-button slot="trigger">bottom-end</sd-button>
      </sd-dropdown>
    </div>
  `
};

/**
 * Use the `stay-open-on-select` attribute to keep the dropdown open after an item has been selected.
 */

export const StayOpen = {
  name: 'Stay Open on Select',
  render: () => html`
    <sd-dropdown stay-open-on-select>
      <div class="example">
        <sd-checkbox>Checkbox 1</sd-checkbox>
        <sd-checkbox>Checkbox 2</sd-checkbox>
        <sd-checkbox>Checkbox 3</sd-checkbox>
      </div>
      <sd-button slot="trigger">Trigger</sd-button>
    </sd-dropdown>
  `
};

/**
 * Use the `disabled` attribute to disable the dropdown.
 */

export const Disabled = {
  name: 'Disabled',
  render: () => html`
    <sd-dropdown disabled>
      <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
      <sd-button slot="trigger" disabled>Trigger</sd-button>
    </sd-dropdown>
  `
};

/**
 * Use the `distance` attribute to set the distance between the dropdown panel and the trigger.
 */

export const Distance = {
  name: 'Distance',
  render: () => html`
    <sd-dropdown open distance="8">
      <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
      <sd-button slot="trigger">Trigger</sd-button>
    </sd-dropdown>
  `
};

/**
 * Use the `skidding` attribute to offset the panel away from its trigger.
 */

export const Skidding = {
  name: 'Skidding',
  parameters: { controls: { exclude: ['placement'] } },
  render: () => html`
    <sd-dropdown open skidding="20" placement="bottom">
      <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
      <sd-button slot="trigger">Trigger</sd-button>
    </sd-dropdown>
  `
};

/**
 * Use the `no-auto-size` attribute to prevent the dropdown from automatically adjusting its size.
 */

export const NoAutoSize = {
  name: 'No Auto Size',
  render: () => html`
    <sd-dropdown no-auto-size open>
      <div class="slot slot--border slot--background flex justify-start" style="height: 110vh; width: 120px;">
        Scroll down
      </div>
      <sd-button slot="trigger">Trigger</sd-button>
    </sd-dropdown>
  `
};

/**
 * Use the `no-flip` attribute to prevent the dropdown from flipping its position when it would be cut off.
 */

export const NoFlip = {
  name: 'No Flip',
  render: () => html`
    <sd-dropdown no-flip open>
      <div class="slot slot--border slot--text p-4 w-[300px]">Default slot</div>
      <sd-button slot="trigger">Trigger</sd-button>
    </sd-dropdown>
  `
};
