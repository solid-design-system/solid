import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookTemplate } from '../../../scripts/storybook/helper';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, args, parameters } = storybookDefaults('sd-navigation-item');
const { generateTemplate } = storybookTemplate('sd-navigation-item');

export default {
  title: 'Components/sd-navigation-item',
  component: 'sd-navigation-item',
  args: args,
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
 * Default: This shows sd-navigation-item in its default state.
 */

export const Test = {
  render: (args: any) => {
    return generateTemplate({
      constants: [
        {
          type: 'slot',
          name: 'icon-left',
          value: '<span slot="icon-left">Left</span>'
        },
        {
          type: 'slot',
          name: 'default',
          value: '<span slot="default">Middle</span>'
        },
        {
          type: 'slot',
          name: 'icon-right',
          value: '<span slot="icon-right">Right</span>'
        },
        {
          type: 'slot',
          name: 'main',
          value: '<span slot="main">Main</span>'
        }
      ],
      args
    });
  }
};

/**
 * Use the `icon-left` and `icon-right` slots to add icons.
 */

export const IconSlots = {
  parameters: { controls: { exclude: ['size', 'icon-left', 'icon-right'] } },
  render: (args: any) => {
    return html`
      ${['sm', 'md', 'lg'].map(size =>
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
