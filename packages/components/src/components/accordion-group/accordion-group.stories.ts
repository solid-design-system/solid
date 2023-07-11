import '../../solid-components';
import { expect } from '@open-wc/testing';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, args, parameters } = storybookDefaults('sd-accordion-group');
const { generateTemplate } = storybookTemplate('sd-accordion-group');

export default {
  title: 'Components/sd-accordion-group',
  component: 'sd-accordion-group',
  args: {
    ...args,
    'default-slot':
      '<sd-accordion summary="Accordion 1"><slot-comp></slot-comp></sd-accordion><sd-accordion summary="Accordion 2"><slot-comp></slot-comp></sd-accordion><sd-accordion summary="Accordion 3"><slot-comp></slot-comp></sd-accordion>'
  },
  argTypes,
  parameters: { ...parameters }
};

/**
 * Vertical stack of sd-accordions.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }
    });
  }
};

/**
 * Set 'close-others' to only have one accordion open.
 */

export const CloseOthers = {
  parameters: { controls: { exclude: 'close-others' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'close-others' }
      },
      args,
      constants: { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }
    });
  }
};

/**
 * Part of sd-accordion-group
 */

export const Parts = {
  parameters: {
    controls: { exclude: 'base' }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-accordion-group::part(...){outline: solid 2px red}',
          values: ['base'].map(part => {
            return {
              title: 'base',
              value: `<style>#part-${part} sd-accordion-group::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args,
      constants: { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }
    });
  }
};

/**
 * sd-accordions inside a group are fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">
      ${generateTemplate({
        args,
        constants: {
          type: 'template',
          name: 'width',
          value: '<div style="width: 300px">%TEMPLATE%</div>'
        }
      })}
    </div>`;
  },
  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-accordion');
    await waitUntil(() => el?.shadowRoot?.querySelector('header'));
    await userEvent.type(el!.shadowRoot!.querySelector('header')!, '{space}', { pointerEventsCheck: 0 });
  }
};
