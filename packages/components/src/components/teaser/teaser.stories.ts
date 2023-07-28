import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-teaser');
const { overrideArgs } = storybookHelpers('sd-teaser');
const { generateTemplate } = storybookTemplate('sd-teaser');

export default {
  title: 'Components/sd-teaser',
  component: 'sd-teaser',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<slot-comp style="--slot-height: 48px; --slot-content: 'Main slot'"></slot-comp>`
    },
    {
      type: 'slot',
      name: 'media',
      value: `<slot-comp slot='media' style="--slot-height: 48px; --slot-content: 'Media slot'"></slot-comp>`
    },
    {
      type: 'slot',
      name: 'meta',
      value: `<slot-comp slot='meta' style="--slot-height: 46px; --slot-content: 'Meta slot'"></slot-comp>`
    }
  ]),
  argTypes,
  parameters
};

/**
 * This shows sd-teaser in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Teaser in all possible combinations of `variant` and `inset`. Note that in case the variant is `white border-neutral-300`, the inset is always `true`.
 */

export const VariantAndInset = {
  name: 'Variant x Inset',
  parameters: { controls: { exclude: ['variant', 'inset'] } },
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
          value: '<div style="margin-bottom: 40px; width: 375px; height: 250px;">%TEMPLATE%</div>'
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

/**
 * Teaser in all possible combinations of `inset` and `orientation`.
 */

export const InsetAndOrientation = {
  name: 'Inset x Orientation',
  parameters: { controls: { exclude: ['inset', 'orientation'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'inset' },
        y: { type: 'attribute', name: 'orientation' }
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
          value: 'primary-100'
        }
      ]
    });
  }
};

/**
 * Teaser with different `media` and `content` distribution values.
 */

export const DistributionRatio = {
  parameters: { controls: { exclude: ['--distribution-media', '--distribution-content'] } },
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
              title: '--distribution-media: 200px, --distribution-content: auto',
              value: '<div style="--distribution-media: 200px; --distribution-content: auto;">%TEMPLATE%</div>'
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
          value: 'primary-100'
        }
      ]
    });
  }
};

/**
 * When responsive, teaser changes its orientation from `horizontal` to `vertical` at a component's width of 448px.
 */

export const Breakpoint = {
  parameters: { controls: { exclude: 'orientation' } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'style',
          values: [
            {
              value: '<div style="width: 300px">%TEMPLATE%</div>',
              title: 'grid sm'
            },
            {
              value: '<div style="width: 500px">%TEMPLATE%</div>',
              title: 'grid md'
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
          value: 'responsive'
        },
        {
          type: 'attribute',
          name: 'variant',
          value: 'primary-100'
        }
      ]
    });
  }
};

/**
 * Different `headline` sizes. It is also possible to use `sd-link` inside the <h> tag in the headline slot.
 */

export const Headline = {
  parameters: { controls: { exclude: 'headline' } },
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
              value: 'primary-100'
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
  parameters: {
    controls: { exclude: ['default', 'media', 'meta', 'headline'] }
  },
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
                      ? `<slot-comp style="--slot-content: ''"></slot-comp>`
                      : `<slot-comp slot='${slot}' style="--slot-content: '';}"></slot-comp>`,
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
              value: `<img slot='media' src='./placeholders/collaboration.jpg' alt='Test' style="width:100%; height: 100%;"/>`
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
              value: 'primary-100'
            }
          ]
        })
      )}
    `;
  }
};

export const Parts = {
  parameters: { controls: { exclude: ['base', 'media', 'meta', 'headline', 'main'] } },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-teaser::part(...){outline: solid 2px red}',
          values: ['base', 'media', 'meta', 'headline', 'main'].map(part => {
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
          value: 'primary-100'
        }
      ]
    });
  }
};
