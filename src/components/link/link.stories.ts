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
 * Unset `href` to make the link disabled.
 */

export const InvertedAndDisabled = {
  name: 'Disabled × Inverted',
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
 * You can make links bold by setting `<b>` tags around the text in the main slot.
 */

export const BoldInMainSlot = {
  name: 'Bold',
  parameters: { controls: { exclude: ['default'] } },
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'slot',
          name: 'default',
          title: 'main-slot',
          values: ['Link', '<b>Link</b>']
        }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', '#00358E'] }
      }
    })
};

/**
 * Use the `icon-left` and `icon-right` slots to add icons. They automatically adapt the size.
 */

export const SizeAndIconSlots = {
  name: 'Size × Icon Slots',
  parameters: { controls: { exclude: ['size', 'default', 'icon-left', 'icon-right', 'standalone'] } },
  render: (args: any) => {
    return html`
      ${[false, true].map(standalone =>
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
            y: { type: 'attribute', name: 'size' }
          },
          options: { title: `standalone="${standalone ? 'true' : 'false'}"` },
          constants: { type: 'attribute', name: 'standalone', value: standalone },
          args
        })
      )}
    `;
  }
};

/**
 * Icons automatically adapt to the link's invertedness.
 */

export const InvertedAndIconSlots = {
  name: 'Inverted × Icon Slots',
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
 * This `standalone` attribute controls the layout of the icon and text within the component.
 * - If true, the icon and text will be displayed side by side, each occupying its own column.
 * - If false or not provided, the icon will be displayed inline within the text.
 */

export const StandaloneAndIconSlots = {
  name: 'Standalone × Icon Slots',
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

/**
 * The `--align-icon` controls the alignment of the icon within the component.
 */

export const AlignIcon = {
  parameters: {
    controls: { exclude: ['base', 'icon-left', '--align-icon'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'cssProperty',
          name: '--align-icon',
          values: ['start', 'center', 'end']
        }
      },
      constants: [
        {
          type: 'slot',
          name: 'icon-right',
          value: '<sd-icon library="global-resources" name="system/arrow-right" slot="icon-right"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'default',
          value: 'In dolore consectetur do excepteur tempor occaecat magna anim esse sit dolor mollit est voluptate.'
        },
        {
          type: 'attribute',
          name: 'standalone',
          value: true
        },
        {
          type: 'template',
          name: 'defaults',
          value: `<div style="text-align: right; width: 300px;">%TEMPLATE%</div>`
        }
      ],
      args
    });
  }
};

/**
 * Use the `base`, `label`, `icon-left` and `icon-right` part selectors to customize the button.
 */

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'label', 'icon-left', 'icon-right'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-link::part(...){outline: solid 2px red}',
          values: ['base', 'label', 'icon-left', 'icon-right'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-link::part(${part}){outline: solid 2px red}</style><div id="part-${part}">%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        {
          type: 'slot',
          name: 'icon-right',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-right"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'icon-left',
          value: '<sd-icon library="global-resources" name="system/picture" slot="icon-left"></sd-icon>'
        }
      ],
      args
    });
  }
};
