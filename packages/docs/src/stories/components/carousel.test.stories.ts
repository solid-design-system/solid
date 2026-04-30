/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
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
  parameters: { ...parameters, controls: { disable: true } },
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
export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({
      args
    });
  }
};

export const Variant = {
  name: 'Variant',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant', values: ['dot', 'number'] }
      },
      args
    });
  }
};

export const Inverted = {
  name: 'Inverted',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'variant' },
        y: { type: 'attribute', name: 'inverted' }
      },
      args,
      options: {
        templateBackgrounds: {
          alternate: 'y',
          colors: ['rgba(var(--sd-color-primary))', 'transparent']
        },
        templateRenderer: ({ attributes, slots }) => {
          const attrs = Object.entries(attributes)
            .map(([attr, value]) => `${attr}='${value}'`)
            .join(' ');

          return `
            <sd-carousel ${attrs}>
              ${attributes.inverted ? slots?.default?.replaceAll('class="slot', 'class="slot slot--inverted') : slots?.default}
            </sd-carousel>
          `;
        }
      }
    });
  }
};

export const Loop = {
  name: 'Loop',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'loop' }
      },
      args
    });
  }
};

export const SlidesPerPage = {
  name: 'Slides Per Page',
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

export const SlidesPerMove = {
  name: 'Slides Per Move',
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
      constants: [{ type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' }],
      args
    });
  }
};

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

export const Autoplay = {
  name: 'Autoplay',
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

export const Fade = {
  name: 'Fade',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'fade' }
      },
      constants: [
        { type: 'attribute', name: 'variant', value: 'dot' },
        { type: 'attribute', name: 'loop', value: 'true' }
      ],
      args
    });
  }
};

export const Combination = generateScreenshotStory([Variant, Inverted, Loop, Parts, Mouseless, Fade]);
