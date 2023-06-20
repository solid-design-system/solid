import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes } = storybookDefaults('sd-link');
const { generateTemplate } = storybookTemplate('sd-link');
const { overrideArgs } = storybookHelpers('sd-link');

export default {
  title: 'Components/sd-link',
  component: 'sd-link',
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Link' },
    { type: 'attribute', name: 'href', value: '#' }
  ]),
  argTypes
};

/**
 * Default: This shows sd-link in its default state.
 */

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `icon-left` and `icon-right` slots to add icons.
 */

export const IconsAndSize = {
  name: 'Icons × Size',
  parameters: { controls: { exclude: ['size', 'default', 'icon-left', 'icon-right'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: 'icon-right',
          title: 'slot="icon-..."',
          values: [
            '',
            {
              value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',
              title: 'left'
            },
            {
              value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',
              title: 'right'
            }
          ]
        },
        y: {
          type: 'attribute',
          name: 'size'
        }
      },
      args
    })
};

/**
 * Use the `icon-left` and `icon-right` slots to add icons.
 */

export const IconsAndDisabled = {
  name: 'Icons × Disabled',
  parameters: { controls: { exclude: ['size', 'default', 'href', 'inverted'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'href',
          values: ['#', '']
        },
        y: {
          type: 'attribute',
          name: 'inverted',
          values: [false, true]
        }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
      }
    })
};

/**
 * Use the `icon-left` and `icon-right` slots to add icons.
 */

export const IconsAndInverted = {
  name: 'Icons × Inverted',
  parameters: { controls: { exclude: ['inverted', 'default', 'icon-left', 'icon-right'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: 'icon-right',
          title: 'slot="icon-..."',
          values: [
            '',
            {
              value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',
              title: 'left'
            },
            {
              value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',
              title: 'right'
            }
          ]
        },
        y: {
          type: 'attribute',
          name: 'inverted',
          values: [false, true]
        }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
      }
    })
};

/**
 * Use the `icon-left` and `icon-right` slots to add icons.
 */

export const Standalone = {
  parameters: { controls: { exclude: ['standalone', 'default', 'icon-left', 'icon-right'] } },
  render: (args: any) => {
    return html`
      ${[false, true].map(surroundingContent =>
        // We have to compare different types of icons: "square", "wide" and "tall" ones.
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: 'icon-right',
              title: 'icon-...',
              values: [
                '',
                {
                  value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>',
                  title: 'left'
                },
                {
                  value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>',
                  title: 'right'
                }
              ]
            },
            y: {
              type: 'attribute',
              name: 'standalone',
              values: [false, true]
            }
          },
          constants: [
            {
              type: 'slot',
              name: 'default',
              value: 'Magna ex ex elit cupidatat non esse.'
            },
            {
              type: 'template',
              name: 'defaults',
              value: `<div style="font-size: 16px; text-align: left; width: 200px; word-break: break-all;">${
                surroundingContent ? 'Qui do.' : ''
              }%TEMPLATE%${surroundingContent ? 'Eiusmod minim excepteur.</div>' : ''}`
            }
          ],
          args,
          options: {
            title: surroundingContent ? 'example with surrounding content' : 'example without surrounding content'
          }
        })
      )}
    `;
  }
};
