import '../../../../components/src/solid-components';
import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../../components/scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-teaser-media');
const { overrideArgs } = storybookHelpers('sd-teaser-media');
const { generateTemplate } = storybookTemplate('sd-teaser-media');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-teaser-media/Screenshots: sd-teaser-media',
  tags: ['!autodocs'],
  component: 'sd-teaser-media',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-12">Default slot</div>`
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
    }
  ]),
  argTypes,
  parameters
};

/**
 * This shows sd-teaser-media in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Teaser-Media in all possible `variant`.
 */

export const Variant = {
  name: 'Variant',
  parameters: { controls: { exclude: ['variant'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'variant' }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px; width: 600px">%TEMPLATE%</div>'
        },
        {
          type: 'slot',
          name: 'media',
          value:
            '<img slot="media" class="aspect-video object-cover" src="./placeholders/images/generic.jpg" alt="A skyline of a city by night"/>'
        }
      ]
    });
  }
};

/**
 * Use the 'default', 'media', 'meta', 'expandable' and 'headline' slots to add content to the teaser. Please make sure to use semantically correct headline tags for the `headline` slot to provide accessible content.
 */
export const Slots = {
  name: 'Slots',
  parameters: {
    controls: { exclude: ['default', 'media', 'meta', 'headline', 'expandable'] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'media', 'meta', 'headline', 'expandable'].map(slot => {
        let value = `<div slot='${slot}' class="slot slot--border slot--background h-16"></div>`;

        if (slot === 'default') {
          value = `<div class="slot slot--border slot--background h-16"></div>`;
        } else if (slot === 'media') {
          value = `<div slot='${slot}' class="slot slot--border slot--background h-[577px]"></div>`;
        } else if (slot === 'expandable') {
          value = `<div slot='${slot}' class="slot--border slot--background h-16 box-border flex flex-col items-center justify-center rounded-md"></div>`;
        }

        return generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=..',
              values: [
                {
                  value: value,
                  title: slot
                }
              ]
            }
          },
          args,
          constants: [
            {
              type: 'slot',
              name: 'media',
              value: `<img slot='media' src='./placeholders/images/collaboration.jpg' alt='Test'/>`
            },
            {
              type: 'slot',
              name: 'meta',
              value: `<slot slot='meta'>Teaser's Meta information</slot>`
            },
            {
              type: 'slot',
              name: 'default',
              value: `<slot>Teaser's Main content</slot>`
            },
            {
              type: 'slot',
              name: 'headline',
              value: `<slot slot='headline'>Teaser's Headline</slot>`
            },
            {
              type: 'slot',
              name: 'expandable',
              value: `<slot slot='expandable'>Teaser's Expandable content</slot>`
            },
            {
              type: 'template',
              name: 'style',
              value: '<div style="margin-bottom: 40px; width: 782px;">%TEMPLATE%</div>'
            }
          ]
        });
      })}
    `;
  }
};

export const Parts = {
  name: 'Parts',
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
        },
        {
          type: 'slot',
          name: 'expandable',
          value: `<div slot="expandable" class="slot--border slot--text box-border flex flex-col items-center justify-center rounded-md"><p>Expandable slot</p></div>`
        }
      ]
    });
  }
};

export const Samples = {
  name: 'Samples: Teaser-Media',
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
      <div class="flex flex-wrap gap-8">
        <sd-teaser-media variant="gradient-dark" class="min-w-[435px] max-w-4xl">
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/images/architecture.jpg"
              alt="A skyline of a city"
            />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Not expandable teaser-media</h3>
          <div class="flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary" inverted>Link</sd-button>
            </div>
          </div>
        </sd-teaser-media>
        <sd-teaser-media variant="gradient-white" class="min-w-[435px] max-w-4xl">
          <div slot="media" class="relative">
            <img
              class="aspect-video object-cover"
              src="./placeholders/images/architecture.jpg"
              alt="A skyline of a city"
            />
          </div>
          <div slot="meta" class="meta-info">
            <span class="meta-info-item">01.12.2013</span>
            <span class="meta-info-item">| Author name</span>
          </div>
          <h3 slot="headline">Expandable teaser-media</h3>
          <div slot="expandable">
            <p>
              Expandable: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div class="flex-none">
              <sd-button href="#" target="_blank" variant="primary">Link</sd-button>
            </div>
            <div class="flex-none text-sm">
              <p>@Copyright Lorem ipsum</p>
            </div>
          </div>
        </sd-teaser-media>
      </div>
    `;
  }
};

export const Combination = generateScreenshotStory([Default, Variant, Slots, Parts, Samples]);
