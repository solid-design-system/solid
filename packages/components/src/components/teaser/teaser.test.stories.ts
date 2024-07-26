import '../../solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-teaser');
const { overrideArgs } = storybookHelpers('sd-teaser');
const { generateTemplate } = storybookTemplate('sd-teaser');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-teaser/Screenshot Tests',
  component: 'sd-teaser',
  tags: ['!autodocs'],
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-12">Main slot</div>`
    },
    {
      type: 'slot',
      name: 'media',
      value: `<div slot="media" class="slot slot--border slot--text h-12">Media slot</div>`
    },
    {
      type: 'slot',
      name: 'meta',
      value: `<div slot="meta" class="slot slot--border slot--text h-12">Meta slot</div>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    controls: { include: [] }
  }
};

/**
 * This shows sd-teaser in its default state.
 */

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const VariantAndInset = {
  name: 'Variant x Inset',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'inset' },
        y: { type: 'attribute', name: 'variant' }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px; height: 250px;">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'orientation',
          value: 'vertical'
        }
      ]
    });
  }
};

export const InsetAndOrientation = {
  name: 'Inset x Orientation',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'breakpoint',
          values: [
            {
              value: '0',
              title: 'breakpoint = 0'
            },
            {
              value: '9999',
              title: 'breakpoint = 9999'
            }
          ]
        },
        y: { type: 'attribute', name: 'inset' }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px;">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'neutral-100'
        }
      ]
    });
  }
};

export const NoMeta = {
  name: 'Empty Meta Slot',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'breakpoint',
          values: [
            {
              value: '0',
              title: 'breakpoint = 0'
            },
            {
              value: '9999',
              title: 'breakpoint = 9999'
            }
          ]
        },
        y: { type: 'attribute', name: 'inset' }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        },
        {
          type: 'slot',
          name: 'meta',
          value: '<slot name="meta"></slot>'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'neutral-100'
        }
      ]
    });
  }
};

/**
 * Teaser with different `media` and `content` distribution values. In case there's a requirement to have a fixed value for the `media`, you can override the `sd-teaser::part(media)` selector by applying a `flex-shrink: 0;` style. Same can be done for the `content` part.
 */

export const DistributionRatio = {
  name: 'Media and Content Distribution',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'media and content distribution',
          values: [
            {
              title: '--distribution-media: 33%, --distribution-content: 66%',
              value: '<div style="--distribution-media: 33%; --distribution-content: 66%;">%TEMPLATE%</div>'
            },
            {
              title: '--distribution-media: 200px, sd-teaser::part(media){flex-shrink: 0;}',
              value:
                '<div style="--distribution-media: 200px;" id="fixed-ratio"><style> #fixed-ratio sd-teaser::part(media){flex-shrink: 0;} </style>%TEMPLATE%</div>'
            }
          ]
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'orientation',
          value: 'horizontal'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'white border-neutral-400'
        }
      ]
    });
  }
};

/**
 * Breakpoint where the teaser switches from `vertical` to `horizontal`, `0` is always `horizontal`, `9999` is always `vertical`. When responsive, teaser changes its orientation from `horizontal` to `vertical` at a component's width of 448px.
 */

export const Breakpoint = {
  name: 'Breakpoint',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: { type: 'attribute', name: 'breakpoint', values: ['0', '448', '9999'] }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'white border-neutral-400'
        }
      ]
    });
  }
};

/**
 * Different `headline` sizes. It is also possible to use `sd-link` inside the `<h>` tag in the headline slot.
 */

export const Headline = {
  name: 'Headline',
  render: (args: any) => {
    return html`
      ${['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(tag => {
        return generateTemplate({
          axis: {
            y: {
              type: 'slot',
              name: 'headline',
              values: [
                {
                  value: `<${tag} slot="headline">${tag}</${tag}>`,
                  title: tag
                },
                {
                  value: `<${tag} slot="headline"><sd-link href="#">${tag} + sd-link</sd-link></${tag}>`,
                  title: `${tag} + sd-link`
                }
              ]
            }
          },
          args,
          constants: [
            {
              type: 'template',
              name: 'style',
              value: '<div style="margin-bottom: 40px; width: 375px;">%TEMPLATE%</div>'
            },
            {
              type: 'attribute',
              name: 'variant',
              value: 'white border-neutral-400'
            }
          ]
        });
      })}
    `;
  }
};

/**
 * Use the 'default', 'media', 'meta' and 'headline' slots to add content to the teaser. Please use h1-h6 tags for the headline slot.
 */

export const Slots = {
  name: 'Slots',
  render: (args: any) => {
    return html`
      ${['default', 'media', 'meta', 'headline'].map(slot =>
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=..',
              values: [
                {
                  value:
                    slot === 'default'
                      ? `<div class="slot slot--border slot--background h-16"></div>`
                      : `<div slot='${slot}' class="slot slot--border slot--background h-16"></div>`,
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
              value: `<img slot='media' src='./placeholders/images/collaboration.jpg' alt='Test' style="width:100%; height: 100%;"/>`
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
              type: 'template',
              name: 'style',
              value: '<div style="margin-bottom: 40px; width: 782px;">%TEMPLATE%</div>'
            },
            {
              type: 'attribute',
              name: 'variant',
              value: 'white border-neutral-400'
            }
          ]
        })
      )}
    `;
  }
};

export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-teaser::part(...){outline: solid 2px red}',
          values: ['base', 'media', 'content', 'meta', 'headline', 'main'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-teaser::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      args,
      constants: [
        {
          type: 'template',
          name: 'style',
          value: '<div style="margin-bottom: 40px">%TEMPLATE%</div>'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'white border-neutral-400'
        }
      ]
    });
  }
};
export const Combination = generateScreenshotStory([
  Default,
  VariantAndInset,
  InsetAndOrientation,
  NoMeta,
  DistributionRatio,
  Breakpoint,
  Headline,
  Slots,
  Parts
]);
