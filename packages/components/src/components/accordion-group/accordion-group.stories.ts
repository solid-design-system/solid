/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
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
    await userEvent.type(el!.shadowRoot!.querySelector('header')!, '{space}', {
      pointerEventsCheck: 0
    });
  }
};

/**
 * sd-accordion-group can be white-labeled.
 */

export const Whitelabel = {
  parameters: {
    controls: { include: [] }
  },
  render: (args: any) =>
    html`<div id="whitelabel">
      <sd-accordion-group>
        <sd-accordion summary="Accordion"
          ><svg
            slot="expand-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path>
          </svg>
          <svg
            slot="collapse-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path>
          </svg>
          The accordion component delivers large amounts of content in a small space through progressive disclosure. The
          user gets key details about the underlying content and can choose to expand that content within the
          constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space
          is at a premium.
        </sd-accordion>
        <sd-accordion summary="Accordion"
          ><svg
            slot="expand-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path>
          </svg>
          <svg
            slot="collapse-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path>
          </svg>
          The accordion component delivers large amounts of content in a small space through progressive disclosure. The
          user gets key details about the underlying content and can choose to expand that content within the
          constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space
          is at a premium.
        </sd-accordion>
      </sd-accordion-group>
    </div>`
};
