import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import cx from 'classix';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';
const { overrideArgs } = storybookHelpers('sd-navigation-item');
const { argTypes, parameters } = storybookDefaults('sd-navigation-item');
const { generateTemplate } = storybookTemplate('sd-navigation-item');

// Reusable Constants
const defaultSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value: '<span>Navigation</span>'
};

const descriptionSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'description',
  value: '<p slot="description">Lorem ipsum dolor sit amet.</p>'
};

const childrenSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'children',
  value:
    '<sd-navigation-item vertical indented slot="children">Sub Navigation 1</sd-navigation-item><sd-navigation-item vertical indented slot="children">Sub Navigation 2</sd-navigation-item><sd-navigation-item vertical indented slot="children">Sub Navigation 3</sd-navigation-item>'
};

// Stories
export default {
  title: 'Components/sd-navigation-item',
  component: 'sd-navigation-item',
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Navigation' }]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * The `sd-navigation-item` in its default state as a horizontally oriented button.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The `sd-navigation-item` using bold text.
 */

export const Bold = {
  render: (args: any) =>
    generateTemplate({
      args,
      axis: { x: { type: 'slot', name: 'default', values: ['Navigation', '<b>Navigation</b>'] } }
    })
};

/**
 * There are 3 variants determined by the `href` and `vertical` properties in addition to the `children` slot.  Each variant has 3 size options to define text size.
 */

export const Variants = {
  name: 'Variant × Size',
  parameters: {
    controls: {
      exclude: ['href', 'target', 'download', 'size', 'vertical', 'indented', 'relaxed', 'open', 'children']
    }
  },
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          x: { type: 'attribute', name: 'vertical' },
          y: { type: 'attribute', name: 'size' }
        },
        args,
        options: {
          title: 'Button'
        }
      })}
      ${generateTemplate({
        axis: {
          x: { type: 'attribute', name: 'vertical' },
          y: { type: 'attribute', name: 'size' }
        },
        args,
        options: { title: 'Link (href="https://www.union-investment.de/")' },
        constants: { type: 'attribute', name: 'href', value: 'https://www.union-investment.de/' }
      })}
      ${generateTemplate({
        axis: {
          x: { type: 'attribute', name: 'vertical', values: [true] },
          y: { type: 'attribute', name: 'size', values: ['base'] }
        },
        args,
        options: {
          title: 'Accordion'
        },
        constants: [
          childrenSlotConstant,
          { type: 'attribute', name: 'vertical', value: true },
          {
            type: 'slot',
            name: 'default',
            value: '<div style="width: 245px; text-align: left;">Navigation</div>'
          }
        ]
      })}
    `;
  }
};

/**
 * The navigation element when `disabled` is true.
 */

export const Disabled = {
  parameters: {
    controls: { exclude: ['disabled', 'vertical', 'current'] }
  },
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          y: { type: 'attribute', name: 'current' }
        },
        options: {
          title: 'Horizontal'
        },
        constants: [
          { type: 'attribute', name: 'disabled', value: true },
          { type: 'attribute', name: 'vertical', value: false },
          descriptionSlotConstant
        ],
        args
      })}
      ${generateTemplate({
        axis: {
          x: { type: 'attribute', name: 'chevron' },
          y: { type: 'attribute', name: 'current' }
        },
        options: {
          title: 'Vertical'
        },
        constants: [
          { type: 'attribute', name: 'disabled', value: true },
          { type: 'attribute', name: 'vertical', value: true },
          descriptionSlotConstant
        ],
        args
      })}
    `;
  }
};

/**
 * When `vertical` is false, `sd-navigation-item` will render as a `<button>` or link `<a>` if given an `href`.
 * Horizontal variants have a reduced API and ignore the excluded properties.
 */

export const VerticalAndCurrent = {
  name: 'Vertical × Current',
  parameters: {
    controls: {
      exclude: [
        'vertical',
        'chevron',
        'indented',
        'relaxed',
        'divider',
        'open',
        'current',
        'description',
        'children',
        'sd-show',
        'sd-hide'
      ]
    }
  },
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          x: { type: 'attribute', name: 'vertical' },
          y: { type: 'attribute', name: 'current' }
        },
        args
      })}
    `;
  }
};

/**
 * `href` can be used to create a link.
 */

export const VerticalAndLink = {
  name: 'Vertical × Link',
  parameters: {
    controls: {
      exclude: [
        'vertical',
        'href',
        'indented',
        'relaxed',
        'divider',
        'open',
        'current',
        'description',
        'children',
        'sd-show',
        'sd-hide'
      ]
    }
  },
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          x: { type: 'attribute', name: 'href', values: ['', '#'] },
          y: { type: 'attribute', name: 'vertical' }
        },
        args
      })}
    `;
  }
};

/**
 * Displays chevron property behaviors.  Vertical Button / Link variants show right facing chevron dependent on property.  Accordion variant always show up / down chevron to reflect open state.
 */

export const Chevron = {
  parameters: { controls: { exclude: [] } },
  render: (args: any) => {
    return html`${['Button', 'Link', 'Accordion'].map(title => {
      const constants: ConstantDefinition[] = [
        { type: 'attribute', name: 'vertical', value: true },
        { type: 'attribute', name: 'href', value: title === 'Link' ? 'https://www.union-investment.de/' : '' },
        {
          type: 'slot',
          name: 'default',
          value: '<div style="width: 245px; text-align: left;">Navigation</div>'
        }
      ];

      if (title === 'Accordion') {
        constants.push(childrenSlotConstant);
      }

      return generateTemplate({
        args,
        axis: {
          y: { type: 'attribute', name: 'chevron' }
        },
        options: {
          title
        },
        constants
      });
    })}`;
  }
};

/**
 * When `indented` is true, padding is added to the left side.  When `relaxed` is true, padding is added to both sides.
 */

export const IndentedRelaxed = {
  name: 'Indented x Relaxed',
  parameters: {
    controls: {
      exclude: ['vertical', 'chevron', 'indented', 'sd-show', 'sd-hide']
    }
  },
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          x: { type: 'attribute', name: 'indented' },
          y: { type: 'attribute', name: 'relaxed' }
        },
        constants: [
          { type: 'attribute', name: 'divider', value: true },
          { type: 'attribute', name: 'current', value: true },
          { type: 'attribute', name: 'vertical', value: true },
          { type: 'attribute', name: 'chevron', value: true }
        ],
        args
      })}
    `;
  }
};

/**
 * Shows available slots.  `description`is only used when `vertical`is true.
 */

export const Slots = {
  parameters: {
    controls: { exclude: [] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'description', 'children'].map(slot =>
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: slot,
              title: 'slot=...',
              values: [
                {
                  value:
                    slot === 'default'
                      ? `<div class="slot slot--border slot--background h-8 w-[100px]"></div>`
                      : `<div slot='${slot}' class="${cx(
                          'slot slot--border slot--background h-6',
                          slot === 'description' || slot === 'children' ? 'w-full' : 'w-6'
                        )}"></div>`,
                  title: slot
                }
              ]
            }
          },
          constants: [
            { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
            {
              type: 'attribute',
              name: 'vertical',
              value: true
            },
            { type: 'attribute', name: 'chevron', value: true },
            {
              type: 'attribute',
              name: 'open',
              value: true
            },
            defaultSlotConstant,
            descriptionSlotConstant
          ],
          args: overrideArgs({ type: 'slot', name: 'default', value: '' }, args)
        })
      )}
    `;
  }
};

/**
 * Use the `base`, `content`, `chevron`, and `description` part selectors to customize the navigation item.
 */

export const Parts = {
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-navigation-item::part(...){outline: solid 2px red}',
          values: [
            'base',
            'content',
            'content-area',
            'content-container',
            'chevron',
            'description',
            'divider',
            'current-indicator',
            'details'
          ].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-navigation-item::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        {
          type: 'attribute',
          name: 'vertical',
          value: true
        },
        {
          type: 'attribute',
          name: 'divider',
          value: true
        },
        {
          type: 'attribute',
          name: 'chevron',
          value: true
        },
        {
          type: 'slot',
          name: 'icon-right',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'icon-left',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'main',
          value: '<sd-badge slot="main">888</sd-badge>'
        },
        {
          type: 'slot',
          name: 'children',
          value: '<div slot="children" class="slot slot--border slot--background h-6"></div>'
        },
        descriptionSlotConstant
      ],
      args
    });
  }
};

/**
 * `sd-navigation-item` is fully accessibile via keyboard in all variants. Tab through the story to try each variant.
 */

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">
      ${['Button', 'Link', 'Accordion'].map(title => {
        const constants: ConstantDefinition[] = [
          { type: 'attribute', name: 'vertical', value: true },
          { type: 'attribute', name: 'chevron', value: true },
          {
            type: 'slot',
            name: 'default',
            value: '<div style="width: 245px; text-align: left;">Navigation</div>'
          }
        ];

        if (title === 'Link')
          constants.push({ type: 'attribute', name: 'href', value: 'https://www.union-investment.de/' });
        if (title === 'Accordion') constants.push(childrenSlotConstant);

        return generateTemplate({
          args,
          constants,
          options: { title }
        });
      })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-navigation-item');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));

    el?.shadowRoot?.querySelector('button')?.focus();
  }
};

export const separated = {
  render: () => {
    return generateTemplate({
      args: overrideArgs([
        defaultSlotConstant,
        {
          type: 'attribute',
          name: 'vertical',
          value: true
        },
        {
          type: 'attribute',
          name: 'separated',
          value: true
        },
        {
          type: 'attribute',
          name: 'href',
          value: 'https://www.union-investment.de/'
        },
        {
          type: 'attribute',
          name: 'chevron',
          value: true
        },
        {
          type: 'slot',
          name: 'children',
          value: '<div slot="children" class="slot slot--border slot--background h-6"></div>'
        },
        childrenSlotConstant
      ])
    });
  }
};
