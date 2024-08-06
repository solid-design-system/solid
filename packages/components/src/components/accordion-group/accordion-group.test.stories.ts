/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate, storybookUtilities } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, args, parameters } = storybookDefaults('sd-accordion-group');
const { generateTemplate } = storybookTemplate('sd-accordion-group');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-accordion-group/Screenshot',
  component: 'sd-accordion-group',
  tags: ['!autodocs'],
  args: {
    ...args,
    'default-slot':
      '<sd-accordion summary="Accordion 1"><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion><sd-accordion summary="Accordion 2"><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion><sd-accordion summary="Accordion 3"><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion>'
  },
  argTypes,
  parameters: { ...parameters }
};

/**
 * Vertical stack of sd-accordions.
 */

export const Default = {
  name: 'Default',
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
  name: 'One accordion open at a time',
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
  name: 'Parts',
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
  name: 'Mouseless',
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
    await userEvent.type(el!.shadowRoot!.querySelector('header')!, '{space}', {
      pointerEventsCheck: 0
    });
  }
};

/**
 * Accordion group can be used with background options of white, neutral-100 and primary-100.
 */

export const Samples = {
  name: 'Samples',
  render: () => {
    return html`
      <div class="w-full flex gap-8 flex-col">
        <div>
          <div class="p-4 mb-8 bg-neutral-100 text-left text-[14px] font-bold box-border">white</div>

          <sd-accordion-group class="w-1/2 bg-white p-8">
            <sd-accordion summary="Accordion 1"
              ><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion
            ><sd-accordion summary="Accordion 2"
              ><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion
            ><sd-accordion summary="Accordion 3"
              ><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion
            >
          </sd-accordion-group>
        </div>

        <div>
          <div class="w-full p-4 mb-8 bg-neutral-100 text-left text-[14px] font-bold box-border">neutral-100</div>
          <sd-accordion-group class="w-1/2 bg-neutral-100 p-8">
            <sd-accordion summary="Accordion 1"
              ><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion
            ><sd-accordion summary="Accordion 2"
              ><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion
            ><sd-accordion summary="Accordion 3"
              ><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion
            >
          </sd-accordion-group>
        </div>

        <div>
          <div class="w-full p-4 mb-8 bg-neutral-100 text-left text-[14px] font-bold box-border">primary-100</div>
          <sd-accordion-group class="w-1/2 bg-primary-100 p-8">
            <sd-accordion summary="Accordion 1"
              ><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion
            ><sd-accordion summary="Accordion 2"
              ><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion
            ><sd-accordion summary="Accordion 3"
              ><div class="slot slot--border slot--text h-16">Default slot</div></sd-accordion
            >
          </sd-accordion-group>
        </div>
      </div>
    `;
  }
};

export const Combination = generateScreenshotStory([Default, CloseOthers, Parts, Mouseless, Samples]);
