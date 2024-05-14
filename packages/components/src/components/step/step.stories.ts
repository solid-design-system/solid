import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';
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
  parameters: { controls: { exclude: ['size', 'state'] } },
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

/**
 * Use the 'base', 'circle-and-tail-container','circle', 'label', 'description', 'text-container', 'label' and 'description' parts to style the step.
 */
export const Parts = {
  parameters: {
    controls: {
      exclude: [
        'base',
        'circle-and-tail-container',
        'circle',
        'tail',
        'label',
        'description',
        'text-container',
        'label',
        'description'
      ]
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'state' },
        y: {
          type: 'template',
          name: 'sd-step::part(...){outline: solid 2px red}',
          values: [
            'base',
            'circle-and-tail-container',
            'circle',
            'tail',
            'label',
            'description',
            'text-container',
            'label',
            'description'
          ].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-step::part(${part}){outline: solid 2px red; outline-offset: -2px;}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
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

/**
 * sd-steps are fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-step');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));
    // We have to catch the event as otherwise Storybook will break
    await userEvent.type(el!.shadowRoot!.querySelector('button')!, '{return}', { pointerEventsCheck: 0 });
  }
};
