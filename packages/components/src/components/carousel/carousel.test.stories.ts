/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../solid-components';
import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-carousel');
const { overrideArgs } = storybookHelpers('sd-carousel');
const { generateTemplate } = storybookTemplate('sd-carousel');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-carousel/Screenshots: sd-carousel',
  tags: ['!autodocs'],
  component: 'sd-carousel',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `
        <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 1</div></sd-carousel-item>
        <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 2</div></sd-carousel-item>
        <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 3</div></sd-carousel-item>
        <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 4</div></sd-carousel-item>
        <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 5</div></sd-carousel-item>`
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
  name: 'Default',
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
  name: 'Variant',
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
 * Use the `inverted` attribute when displayed on primary background.
 */

export const Inverted = {
  name: 'Inverted',
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
        templateBackgrounds: { alternate: 'y', colors: ['rgb(var(--sd-color-primary, 0 53 142))', 'white'] }
      }
    });
  }
};

/**
 * Use the `loop` attribute to enable/disable the looping of your slides.
 */

export const Loop = {
  name: 'Loop',
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
  name: 'Autoplay',
  parameters: { controls: { exclude: 'autoplay' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'autoplay' }
      },
      constants: [
        { type: 'attribute', name: 'variant', value: 'dot' },
        { type: 'attribute', name: 'loop', value: 'true' }
      ],
      args
    });
  }
};

/**
 * Use the `slides-per-page` attribute to set the number of slides that would be shown at a given time.
 */

export const SlidesPerPage = {
  name: 'Slides Per Page',
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
 * Use `slides-per-move` to set how many slides the carousel advances when scrolling. This is useful when specifying a `slides-per-page` greater than one. By setting `slides-per-move` to the same value as `slides-per-page`, the carousel will advance by one page at a time.<br>
 * <b>Note:</b><br>
 * <li> The number of slides should be divisible by the number of `slides-per-page` to maintain consistent scroll behavior.</li>
 * <li>Variations between `slides-per-move` and `slides-per-page` can lead to unexpected scrolling behavior. Keep your intended UX in mind when adjusting these values.</li>
 */

export const SlidesPerMove = {
  name: 'Slides Per Move',
  parameters: { controls: { exclude: 'slides-per-move' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'slides-per-move', values: [2] }
      },
      constants: [
        { type: 'attribute', name: 'loop', value: 'true' },
        { type: 'attribute', name: 'slides-per-page', value: 2 },
        {
          type: 'slot',
          name: 'default',
          value: `
            <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 1</div></sd-carousel-item>
            <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 2</div></sd-carousel-item>
            <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 3</div></sd-carousel-item>
            <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 4</div></sd-carousel-item>
            <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 5</div></sd-carousel-item>
            <sd-carousel-item><div class="slot slot--border slot--text h-12">Default slot 6</div></sd-carousel-item>`
        }
      ],
      args
    });
  }
};

export const Parts = {
  name: 'Parts',
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
        'autoplay'
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
        { type: 'attribute', name: 'autoplay', value: true }
      ],
      args
    });
  }
};

/**
 * sd-carousel are fully accessibile via keyboard.
 */

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-carousel');
    await waitUntil(() => el?.shadowRoot?.querySelector('#scroll-container'));

    el?.shadowRoot?.querySelector<HTMLElement>('#scroll-container')!.focus();
  }
};

export const Combination = generateScreenshotStory([
  Variant,
  Inverted,
  Loop,
  SlidesPerPage,
  SlidesPerMove,
  Parts,
  Mouseless
]);
