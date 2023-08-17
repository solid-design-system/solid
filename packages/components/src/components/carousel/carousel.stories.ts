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
  parameters: { controls: { exclude: 'inverted' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'inverted' }
      },
      args,
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
 * Use the `autoplay-interval` attribute to set the speed of slide change in milliseconds.
 */

export const autoplayInterval = {
  parameters: { controls: { exclude: 'autoplay-interval' } },
  render: (args: any) => {
    return html`${generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'autoplay-interval(ms)', values: [3000, 2000, 1000] }
      },
      constants: [{ type: 'attribute', name: 'autoplay', value: true }],
      args
    })}`;
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

/**
 * Use the `slides-per-move` attribute to set slides per swipe or button click.
 */

export const SlidesPerMove = {
  parameters: { controls: { exclude: 'slides-per-move' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'slides-per-move', values: [1, 2, 3] }
      },
      args
    });
  }
};

/**
 * Use the `mouse-dragging` attribute to allow users to drag slides with a mouse.
 */

export const MouseDragging = {
  parameters: { controls: { exclude: 'mouse-dragging' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'mouse-dragging' }
      },
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
