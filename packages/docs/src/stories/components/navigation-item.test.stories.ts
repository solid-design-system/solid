import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import cx from 'classix';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';

const { overrideArgs } = storybookHelpers('sd-navigation-item');
const { argTypes, parameters } = storybookDefaults('sd-navigation-item');
const { generateTemplate } = storybookTemplate('sd-navigation-item');
const { generateScreenshotStory } = storybookUtilities;

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
  title: 'Components/sd-navigation-item/Screenshots: sd-navigation-item',
  component: 'sd-navigation-item',
  tags: ['!autodocs'],
  args: overrideArgs([{ type: 'slot', name: 'default', value: 'Navigation' }]),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } }
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const Current = {
  name: 'Variant x Current',
  render: (args: any) =>
    generateTemplate({
      args,
      axis: {
        x: { type: 'attribute', name: 'vertical' },
        y: { type: 'attribute', name: 'current' }
      }
    })
};

export const Variants = {
  name: 'Variant × Size',
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

export const Disabled = {
  name: 'Disabled',
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

export const VerticalAndCurrent = {
  name: 'Vertical × Current',
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

export const VerticalAndLink = {
  name: 'Vertical × Link',
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

export const Chevron = {
  name: 'Chevron',
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

export const Separated = {
  name: 'Separated',
  render: (args: any) => {
    return html`
      ${generateTemplate({
        args,
        axis: {
          y: [{ type: 'attribute', name: 'separated', values: [true, false] }],
          x: [{ type: 'attribute', name: 'href', values: ['#', ''] }]
        },
        constants: [
          { type: 'attribute', name: 'vertical', value: true },
          { type: 'attribute', name: 'current', value: true },
          defaultSlotConstant,
          childrenSlotConstant
        ]
      })}
      ${generateTemplate({
        args,
        axis: {
          y: [{ type: 'attribute', name: 'separated', values: [true, false] }],
          x: [{ type: 'attribute', name: 'href', values: ['#', ''] }]
        },
        constants: [
          { type: 'attribute', name: 'vertical', value: true },
          { type: 'attribute', name: 'current', value: true },
          defaultSlotConstant,
          descriptionSlotConstant,
          childrenSlotConstant
        ]
      })}
    `;
  }
};

export const IndentedRelaxed = {
  name: 'Indented × Relaxed',
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

export const Slots = {
  name: 'Slots',
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

export const Parts = {
  name: 'Parts',
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
              value: `<style>#part-${part} sd-navigation-item::part(${part}){transform: none; opacity: 1; outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
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
          value: '<sd-icon name="system/image" slot="icon-right"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'icon-left',
          value: '<sd-icon name="system/image" slot="icon-left"></sd-icon>'
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

export const Mouseless = {
  name: 'Mouseless',
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

export const Combination = generateScreenshotStory([
  Default,
  Current,
  Variants,
  Disabled,
  Parts,
  Chevron,
  IndentedRelaxed,
  VerticalAndCurrent,
  VerticalAndLink,
  Separated,
  Slots,
  Mouseless
]);
