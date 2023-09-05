import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';
const { overrideArgs } = storybookHelpers('sd-navigation-item');
const { argTypes, args, parameters } = storybookDefaults('sd-navigation-item');
const { generateTemplate } = storybookTemplate('sd-navigation-item');

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
 * The navigation with every given `size` in selected (current=true) and unselected variants for both Horizontal and Vertical orientations.
 */

export const CurrentAndSize = {
  name: 'Current × Size',
  parameters: { controls: { exclude: ['size'] } },
  render: (args: any) => {
    return html`
      ${['true', 'false'].map(horizontal =>
        generateTemplate({
          axis: {
            x: { type: 'attribute', name: 'size' },
            y: { type: 'attribute', name: 'current' }
          },
          constants: [{ type: 'attribute', name: 'horizontal', value: horizontal }],
          args,
          options: { title: `horizontal="${horizontal}"` }
        })
      )}
    `;
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
 * Use the `icon-left` and `icon-right` slots to add icons.
 */

export const IconSlots = {
  parameters: { controls: { exclude: ['size', 'default', 'icon-left', 'icon-right'] } },
  render: (args: any) => {
    return html`
      ${['smaller', 'base', 'larger'].map(size =>
        // We have to compare different types of icons: "square", "wide" and "tall" ones.
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: 'icon-right',
              values: [
                { value: '', title: '–' },
                {
                  value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',
                  title: 'system/picture'
                },
                {
                  value:
                    '<sd-icon library="global-resources" name="system/multi-functions" slot="icon-right"></sd-icon>',
                  title: 'system/multi-functions'
                },
                {
                  value: '<sd-icon library="global-resources" name="system/minus" slot="icon-right"></sd-icon>',
                  title: 'system/minus'
                }
              ]
            },
            y: {
              type: 'slot',
              name: 'icon-left',
              values: [
                { value: '', title: '–' },
                {
                  value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',
                  title: 'system/picture'
                },
                {
                  value:
                    '<sd-icon library="global-resources" name="system/multi-functions" slot="icon-left"></sd-icon>',
                  title: 'system/multi-functions'
                },
                {
                  value: '<sd-icon library="global-resources" name="system/minus" slot="icon-left"></sd-icon>',
                  title: 'system/minus'
                }
              ]
            }
          },
          constants: [{ type: 'attribute', name: 'size', value: size }],
          args,
          options: { title: `size="${size}"` }
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
        {
          type: 'slot',
          name: 'icon-left',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'default',
          value: '<span>Navigation</span>'
        },
        {
          type: 'slot',
          name: 'main',
          value: '<span slot="main"><sd-badge>888</sd-badge></span>'
        },
        { type: 'attribute', name: 'chevron', value: true }
      ],
      args
    });
  }
};

/**
 * Default: This shows sd-navigation-item in its default state.
 */

export const Vertical2 = {
  render: (args: any) => {
    return generateTemplate({
      constants: [
        {
          type: 'slot',
          name: 'icon-left',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'default',
          value: '<span>Navigation</span>'
        },
        {
          type: 'slot',
          name: 'main',
          value: '<span slot="main"><sd-badge>888</sd-badge></span>'
        },
        {
          type: 'slot',
          name: 'description',
          value:
            '<p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id.</p>'
        }
      ],
      args
    });
  }
};

export const Test2 = {
  parameters: { controls: { exclude: ['children'] } },
  render: (args: any) => {
    return generateTemplate({
      constants: [
        {
          type: 'slot',
          name: 'icon-left',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'default',
          value: '<span>Label</span>'
        },
        {
          type: 'slot',
          name: 'icon-right',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'main',
          value: '<span slot="main"><sd-badge>Badge</sd-badge></span>'
        },
        {
          type: 'slot',
          name: 'children',
          value:
            '<p slot="children">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
        }
      ],
      args
    });
  }
};
