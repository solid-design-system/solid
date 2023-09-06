import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';
import type { ConstantDefinition } from '../../../scripts/storybook/helper';
const { overrideArgs } = storybookHelpers('sd-navigation-item');
const { argTypes, args, parameters } = storybookDefaults('sd-navigation-item');
const { generateTemplate } = storybookTemplate('sd-navigation-item');

// Reusable Constants
const iconSlotConstant = (right?: boolean): ConstantDefinition => ({
  type: 'slot',
  name: right ? 'icon-right' : 'icon-left',
  value: `<sd-icon library="global-resources" name="system/picture" slot="${
    right ? 'icon-right' : 'icon-left'
  }"></sd-icon>`
});

const defaultSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'default',
  value: '<span>Navigation</span>'
};

const descriptionSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'description',
  value:
    '<p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id.</p>'
};

const mainSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'main',
  value: '<span slot="main"><sd-badge>888</sd-badge></span>'
};

const childrenSlotConstant: ConstantDefinition = {
  type: 'slot',
  name: 'children',
  value:
    '<div slot="children">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id.</div>'
};

// Stories
export default {
  title: 'Components/sd-navigation-item',
  component: 'sd-navigation-item',
  args: overrideArgs([
    // { type: 'attribute', name: 'current', value: 'true' },
    { type: 'slot', name: 'default', value: 'Navigation' }
  ]),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

/**
 * Default: This shows sd-navigation-item in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * The navigation element when `disabled` is true.
 */

export const Disabled = {
  parameters: {
    controls: { exclude: ['disabled', 'current', 'horizontal', 'chevron', 'indented', 'relaxed', 'divider'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        x: { type: 'attribute', name: 'size' },
        y: { type: 'attribute', name: 'horizontal' }
      },
      constants: [{ type: 'attribute', name: 'disabled', value: true }],
      args
    });
  }
};

/**
 * The navigation element when `horizontal` is true.
 */

export const Horizontal = {
  parameters: {
    controls: {
      exclude: [
        'href',
        'current',
        'size',
        'horizontal',
        'chevron',
        'indented',
        'relaxed',
        'divider',
        'open',
        'description',
        'children',
        'summary'
      ]
    }
  },
  render: (args: any) => {
    return html`
      ${['', 'https://www.union-investment.de/'].map(href =>
        generateTemplate({
          axis: {
            x: { type: 'attribute', name: 'size' },
            y: { type: 'attribute', name: 'current' }
          },
          constants: [
            { type: 'attribute', name: 'horizontal', value: true },
            { type: 'attribute', name: 'href', value: href }
          ],
          args,
          options: { title: `${href ? 'Link ' : 'Button '} (href="${href}") ${href ? '' : ' ("sd-click" event) '}` }
        })
      )}
    `;
  }
};

/**
 * Default: This shows sd-navigation-item in its default state.
 */

export const Vertical = {
  parameters: { controls: { exclude: ['chevron'] } },
  render: (args: any) => {
    return generateTemplate({
      constants: [
        iconSlotConstant(),
        defaultSlotConstant,
        mainSlotConstant,
        { type: 'attribute', name: 'chevron', value: true }
      ],
      args
    });
  }
};

/**
 * Default: This shows sd-navigation-item in its default state.
 */

export const Children = {
  render: (args: any) => {
    return generateTemplate({
      constants: [
        iconSlotConstant(),
        defaultSlotConstant,
        iconSlotConstant(true),
        mainSlotConstant,
        descriptionSlotConstant,
        childrenSlotConstant
      ],
      args
    });
  }
};

/**
 * Use the expand-icon and collapse-icon slots to change the expand and collapse icons, respectively.
 * To disable the animation, override the rotate property on the summary-icon part as shown below:
 * ```
 * sd-accordion.custom-icons::part(summary-icon) {
 *   rotate: none;
 * }
 * ```
 */

export const Slots = {
  parameters: {
    controls: { exclude: [] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'icon-left', 'main', 'description', 'children'].map(slot =>
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
                      ? `<slot-comp style="--slot-content: ''; --slot-height: 24px; --slot-width: 100px;"></slot-comp>`
                      : `<slot-comp slot='${slot}' style="--slot-content: ''; --slot-height: 24px; --slot-width: ${
                          slot === 'description' || slot === 'children' ? '100%' : '24px'
                        }"></slot-comp>`,
                  title: slot
                }
              ]
            }
          },
          constants: [
            { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
            { type: 'attribute', name: 'chevron', value: true },
            defaultSlotConstant,
            iconSlotConstant(),
            iconSlotConstant(true),
            mainSlotConstant,
            descriptionSlotConstant
          ],
          args: overrideArgs({ type: 'slot', name: 'default', value: '' }, args)
        })
      )}
    `;
  }
};

/**
 * Use the `base`, `label`, `icon-left` and `icon-right` part selectors to customize the button.
 */

export const Parts = {
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-navigation-item::part(...){outline: solid 2px red}',
          values: ['base', 'icon-left', 'label', 'icon-right', 'main', 'chevron', 'description'].map(part => {
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
        descriptionSlotConstant
      ],
      args
    });
  }
};
