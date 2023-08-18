/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-carousel');
const { overrideArgs } = storybookHelpers('sd-carousel-item');
const { generateTemplate } = storybookTemplate('sd-carousel');

export default {
  title: 'Components/sd-carousel',
  component: 'sd-carousel',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-carousel-item> <slot-comp></slot-comp> </sd-carousel-item>
        <sd-carousel-item> <slot-comp></slot-comp> </sd-carousel-item>
        <sd-carousel-item> <slot-comp></slot-comp> </sd-carousel-item>
        <sd-carousel-item> <slot-comp></slot-comp> </sd-carousel-item>
        <sd-carousel-item> <slot-comp></slot-comp> </sd-carousel-item>`
    }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        sd-carousel {
          padding: 0.5px;
        }
      </style>
      ${story()}
    `
  ]
};

/**
 * This shows sd-carousel in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

/**
 * Use the `variant` attribute to select the pagination format.
 */

export const Variant = {
  parameters: { controls: { exclude: 'variant' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant', values: ['dot', 'number'] }
      },
      args
    });
  }
};

/**
 * Use the `inverted` attribute to make a carousel with inverted colors.
 */

export const Inverted = {
  parameters: { controls: { exclude: ['inverted', 'variant'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'inverted' }
      },
      args,
      constants: [{ type: 'attribute', name: 'autoplay', value: true }],
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['#00358E', 'white'] }
      }
    });
  }
};

/**
 * Use the `loop` attribute to enable/disable the looping of your slides.
 */

export const Loop = {
  parameters: { controls: { exclude: 'loop' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'loop' }
      },
      args
    });
  }
};

/**
 * Use the `autoplay` attribute to toggle autoplay.
 */

export const Autoplay = {
  parameters: { controls: { exclude: 'autoplay' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'autoplay' }
      },
      constants: [{ type: 'attribute', name: 'variant', value: 'dot' }],
      args
    });
  }
};

/**
 * Use the `slides-per-page` attribute to set the number of slides that would be shown at a given time.
 */

export const SlidesPerPage = {
  parameters: { controls: { exclude: 'slides-per-page' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'slides-per-page', values: [1, 2, 3] }
      },
      constants: [{ type: 'attribute', name: 'variant', value: 'dot' }],
      args
    });
  }
};

export const Parts = {
  parameters: {
    controls: {
      exclude: [
        'base',
        'scroll-container',
        'controls',
        'pagination-dot',
        'pagination-number',
        'pagination-item',
        'pagination-item--active',
        'navigation',
        'navigation-button',
        'navigation-button--previous',
        'navigation-button--next',
        'autoplay-controls',
        'variant',
        'autoplay',
      ]
    }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: {
          type: 'template',
          name: 'sd-carousel::part(...){outline: solid 2px red}',
          values: [
            'base',
            'scroll-container',
            'controls',
            'pagination-dot',
            'pagination-number',
            'pagination-item',
            'pagination-item--active',
            'navigation',
            'navigation-button',
            'navigation-button--previous',
            'navigation-button--next',
            'autoplay-controls'
          ].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-carousel::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        { type: 'attribute', name: 'autoplay', value: true },
      ],
      args
    });
  }
};

/**
 * sd-carousel are fully accessibile via keyboard.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-carousel');
    await waitUntil(() => el?.shadowRoot?.querySelector('scroll-container'));
    await userEvent.type(el!.shadowRoot!.querySelector('scroll-container')!, '{space}', { pointerEventsCheck: 0 });
  }
};
