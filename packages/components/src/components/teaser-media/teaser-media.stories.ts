import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-teaser-media');
const { overrideArgs } = storybookHelpers('sd-teaser-media');
const { generateTemplate } = storybookTemplate('sd-teaser-media');

export default {
  title: 'Components/sd-teaser-media',
  component: 'sd-teaser-media',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-12">Main slot</div>`
    },
    {
      type: 'slot',
      name: 'media',
      value: `<div slot="media" class="slot slot--border slot--text h-[384px]">Media slot</div>`
    },
    {
      type: 'slot',
      name: 'meta',
      value: `<div slot="meta" class="slot slot--border slot--text h-12">Meta slot</div>`
    },
    {
      type: 'slot',
      name: 'expandable',
      value: `<div slot="expandable" class="slot slot--border slot--text h-12">Expandable slot</div>`
    }
  ]),
  argTypes,
  parameters
};

/**
 * This shows sd-teaser-media in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'media', 'content', 'meta', 'headline', 'main', 'expandable', 'variant'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-teaser-media::part(...){outline: solid 2px red}',
          values: ['base', 'media', 'content', 'meta', 'headline', 'main', 'expandable'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-teaser-media::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px; width: 500px">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'white'
        }
      ]
    });
  }
};

export const SamplesNotClickable = {
  name: 'Samples: Not clickable teaser',
  parameters: {
    controls: {
      disable: true
    },
    backgrounds: {
      default: 'white'
    }
  },
  render: () => {
    return html`
      <style>
        #teaserWithContentPlaceholder::part(media) {
          flex-grow: 1;
        }
      </style>
      <div class="flex justify-between gap-8">
        <sd-teaser-media variant="primary" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/generic.jpg"
              alt="A group of people sitting in a coffee shop"
            />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div slot="expandable">
            <p>
              Expandable: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary" inverted>Link</sd-button>
            </div>
          </div>
        </sd-teaser-media>
        <sd-teaser-media variant="gradient-dark" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/generic.jpg"
              alt="A skyline of a city by night"
            />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div slot="expandable">
            <p>
              Expandable: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary">Link</sd-button>
            </div>
          </div>
        </sd-teaser-media>
        <sd-teaser-media variant="white" breakpoint="9999" inset class="flex-1">
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/generic.jpg"
              alt="A skyline of a city by night"
            />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Not clickable teaser</h3>
          <div slot="expandable">
            <p>
              Expandable: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
          <div class="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary">Link</sd-button>
            </div>
          </div>
        </sd-teaser-media>
      </div>
    `;
  }
};
