/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { userEvent } from 'storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes } = storybookDefaults('sd-link');
const { generateTemplate } = storybookTemplate('sd-link');
const { overrideArgs } = storybookHelpers('sd-link');
const { generateScreenshotStory } = storybookUtilities;

export default {
  title: 'Components/sd-link/Screenshots: sd-link',
  component: 'sd-link',
  tags: ['!autodocs'],
  args: overrideArgs([
    { type: 'slot', name: 'default', value: 'Link' },
    { type: 'attribute', name: 'href', value: '#' }
  ]),
  argTypes,
  parameters: { controls: { disable: true } }
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const InvertedAndDisabled = {
  name: 'Disabled × Inverted',
  render: (args: any) =>
    generateTemplate({
      axis: {
        x: {
          type: 'attribute',
          name: 'href',
          values: ['#link', { value: '', title: '–' }]
        },
        y: {
          type: 'attribute',
          name: 'inverted',
          values: [false, true]
        }
      },
      args,
      options: {
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      }
    })
};

export const BoldInMainSlot = {
  name: 'Bold',
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
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      }
    })
};

export const SizeAndIconSlots = {
  name: 'Size × Icon Slots',
  render: (args: any) => {
    return html`
      ${[false, true].map(standalone =>
        generateTemplate({
          axis: {
            x: {
              // To make the story creation easier, we put everything in the default slot.
              type: 'slot',
              name: 'default',
              title: 'slot="icon-..."',
              values: [
                { value: '<span>Link</span>', title: '–' },
                {
                  value: '<sd-icon name="system/image" slot="icon-left"></sd-icon><span>Link</span>',
                  title: 'left'
                },
                {
                  value: '<span>Link</span><sd-icon name="system/image" slot="icon-right"></sd-icon>',
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

export const InvertedAndIconSlots = {
  name: 'Inverted × Icon Slots',
  render: (args: any) =>
    generateTemplate({
      axis: {
        // To make the story creation easier, we put everything in the default slot.
        x: {
          type: 'slot',
          name: 'default',
          title: 'slot="icon-..."',
          values: [
            { value: 'Link', title: '–' },
            {
              value: 'Link<sd-icon name="system/image" slot="icon-left"></sd-icon>',
              title: 'left'
            },
            {
              value: 'Link<sd-icon name="system/image" slot="icon-right"></sd-icon>',
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
        templateBackgrounds: { alternate: 'y', colors: ['white', 'rgb(var(--sd-color-primary, 0 53 142))'] }
      }
    })
};

export const StandaloneAndIconSlots = {
  name: 'Standalone × Icon Slots',
  render: (args: any) => {
    return html`
      ${[false, true].map(surroundingContent =>
        // To make the story creation easier, we put everything in the default slot.
        generateTemplate({
          axis: {
            x: {
              type: 'slot',
              name: 'default',
              title: 'icon-...',
              values: [
                { value: 'Magna ex ex elit cupidatat non esse.', title: '–' },
                {
                  value: '<sd-icon name="system/image" slot="icon-left"></sd-icon>Magna ex ex elit cupidatat non esse.',
                  title: 'left'
                },
                {
                  value:
                    'Magna ex ex elit cupidatat non esse.<sd-icon name="system/image" slot="icon-right"></sd-icon>',
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
              type: 'template',
              name: 'default-template',
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

export const IconAlignment = {
  name: 'Icon Alignment',
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-link::part(base){align-items: ...;}',
          values: ['start', 'center', 'end'].map(alignIcon => {
            return {
              value: `<style>#align-icon-${alignIcon} sd-link::part(base){align-items: ${alignIcon};}</style><div id="align-icon-${alignIcon}">%TEMPLATE%</div>`,
              title: alignIcon
            };
          })
        }
      },
      constants: [
        {
          type: 'template',
          name: 'constant-template',
          value: '<style>div[id^=align-icon-]{text-align: left; width: 300px;}</style>'
        },
        {
          type: 'slot',
          name: 'icon-right',
          value: '<sd-icon name="system/arrow-right" slot="icon-right"></sd-icon>'
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
        }
      ],
      args
    });
  }
};

export const Parts = {
  name: 'Parts',
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
          value: '<sd-icon name="system/image" slot="icon-right"></sd-icon>'
        },
        {
          type: 'slot',
          name: 'icon-left',
          value: '<sd-icon name="system/image" slot="icon-left"></sd-icon>'
        }
      ],
      args
    });
  }
};

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless">${generateTemplate({ args })}</div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-link');
    await waitUntil(() => el?.shadowRoot?.querySelector('a'));
    // We have to catch the event as otherwise Storybook will break
    el!.addEventListener('click', e => e.preventDefault());
    await userEvent.type(el!.shadowRoot!.querySelector('a')!, '{return}', { pointerEventsCheck: 0 });
  }
};

export const Combination = generateScreenshotStory([
  Default,
  InvertedAndDisabled,
  BoldInMainSlot,
  SizeAndIconSlots,
  InvertedAndIconSlots,
  StandaloneAndIconSlots,
  IconAlignment,
  Parts,
  Mouseless
]);
