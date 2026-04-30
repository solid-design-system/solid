import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from 'storybook/test';
import { waitUntil } from '@open-wc/testing-helpers';
import cx from 'classix';

const { argTypes, parameters } = storybookDefaults('sd-drawer');
const { generateTemplate } = storybookTemplate('sd-drawer');
const { overrideArgs } = storybookHelpers('sd-drawer');

export default {
  title: 'Components/sd-drawer/Screenshots: sd-drawer',
  tags: ['!autodocs'],
  component: 'sd-drawer',

  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-full">Default slot</div>`
    },
    {
      type: 'slot',
      name: 'header',
      value: `<div slot='header' class="slot slot--border slot--text h-12 w-[140px]">Header slot</div>`
    },
    {
      type: 'slot',
      name: 'footer',
      value: `<div slot='footer' class="slot slot--border slot--text h-12">Footer slot</div>`
    },
    { type: 'attribute', name: 'open', value: true },
    { type: 'attribute', name: 'contained', value: true },
    { type: 'attribute', name: 'label', value: 'Label' }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            id: 'landmark-unique',
            selector: '.padding-template',
            enabled: false
          }
        ]
      }
    }
  }
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return html` <div style="width: auto; height: 95vh; position: relative;">
      ${generateTemplate({
        args
      })}
    </div>`;
  }
};

export const ButtonInHeader = {
  name: 'Button in Header',
  render: (args: any) => {
    return html` <div class="header-with-btn" style="width: auto; height: 95vh; position: relative;">
      <style>
        .header-with-btn sd-drawer::part(header) {
          padding-left: 0;
        }
      </style>
      ${generateTemplate({
        constants: [
          {
            type: 'slot',
            name: 'header',
            value: `<sd-button slot='header' variant='tertiary'>Header<sd-icon name="system/arrow-left" slot="icon-left"></sd-icon></sd-button>`
          }
        ],
        args
      })}
    </div>`;
  }
};

export const NoHeader = {
  name: 'No Header',
  render: (args: any) => {
    return html` <div style="width: auto; height: 95vh; position: relative;">
      ${generateTemplate({
        constants: [
          {
            type: 'attribute',
            name: 'no-header',
            value: true
          }
        ],
        args
      })}
    </div>`;
  }
};

export const NoFooter = {
  name: 'No Footer',
  render: (args: any) => {
    return html` <div style="width: auto; height: 95vh; position: relative;">
      ${generateTemplate({
        constants: [
          {
            type: 'slot',
            name: 'footer',
            value: ''
          }
        ],
        args
      })}
    </div>`;
  }
};

export const Padding = {
  name: 'Padding',
  render: (args: any) => {
    return html`
      ${['header', 'body', 'footer'].map(part =>
        generateTemplate({
          axis: {
            x: {
              type: 'template',
              name: 'sd-drawer::part(...){padding: 0;}',
              values: [
                {
                  title: part,
                  value: `<style>#padding-${part} sd-drawer::part(${part}){padding: 0;}</style><div id="padding-${part}">%TEMPLATE%</div>`
                }
              ]
            }
          },
          constants: [
            {
              type: 'template',
              name: 'width',
              value: `
                <div style="width: 600px; height: 600px; position: relative;">%TEMPLATE%
                </div>
              `
            },
            {
              type: 'slot',
              name: 'header',
              value: `<div slot='header' class="slot slot--border slot--text h-[56px] w-[140px]">Header slot</div>`
            }
          ],
          args
        })
      )}
    `;
  }
};

export const Placement = {
  name: 'Placement',
  render: (args: any) => {
    return html`
      ${generateTemplate({
        axis: {
          y: {
            type: 'attribute',
            name: 'placement',
            title: 'placement=...'
          }
        },
        constants: [
          {
            type: 'template',
            name: 'width',
            value: `
              <div style="width: 600px; height: 600px; position: relative; margin-bottom:40px;">%TEMPLATE%
              </div>
            `
          }
        ],
        args
      })}
    `;
  }
};

export const Autofocus = {
  name: 'Autofocus',
  render: (args: any) => {
    return html` <div style="width: auto; height: 95vh; position: relative;">
        <sd-button id="openDrawer">Open Drawer</sd-button>
        ${generateTemplate({
          args,
          constants: [
            {
              type: 'slot',
              name: 'default',
              value: `<sd-input
                        autofocus
                        label="Autofocus input example"
                        help-text="This input will be focused when the drawer is opened."
                        > </sd-input>`
            },
            {
              type: 'slot',
              name: 'header',
              value: `<span slot="header">Drawer</span>`
            },
            {
              type: 'slot',
              name: 'footer',
              value: `<span slot="footer">Footer content</span>`
            },
            {
              type: 'attribute',
              name: 'open',
              value: false
            }
          ]
        })}
      </div>
      <script>
        document.querySelector('#openDrawer').addEventListener('click', () => {
          document.querySelector('sd-drawer').show();
        });
      </script>`;
  }
};

export const Scrolling = {
  name: 'Scrolling',
  render: (args: any) => {
    return html` <div style="width: auto; height: 95vh; position: relative;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `<sd-scrollable orientation='vertical' scrollbars shadow class="w-full"><div class="slot slot--border slot--background slot--text" style="height:150vh; width: 100%; padding: 1rem; justify-content:start;">Scroll down and give it a try!</div></sd-scrollable>`
          }
        ]
      })}
    </div>`;
  }
};

export const Slots = {
  name: 'Slots',
  render: (args: any) => {
    return html`
      ${['default', 'header', 'footer'].map(slot =>
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
                      ? `<div class="slot slot--border slot--background slot--text h-full">Default slot</div>`
                      : `<div slot='${slot}' class="${cx(
                          'slot slot--border slot--background slot--text h-12',
                          slot === 'header' ? 'w-[140px]' : 'w-auto'
                        )}">${slot === 'header' ? 'Header slot' : 'Footer slot'}</div>`,
                  title: slot
                }
              ]
            }
          },
          constants: [
            {
              type: 'template',
              name: 'width',
              value: `
              <div style="width: 600px; height: 600px; position: relative;">%TEMPLATE%
              </div>
            `
            }
          ],
          args
        })
      )}
    `;
  }
};

export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    return html`
      ${['base', 'overlay', 'panel', 'header', 'title', 'close-button', 'body', 'footer'].map(part =>
        generateTemplate({
          axis: {
            x: {
              type: 'template',
              name: 'sd-drawer::part(...){outline: solid 2px red}',
              values: [
                {
                  title: part,
                  value: `<style>#part-${part} sd-drawer::part(${part}){outline: solid 2px red; ${
                    part === 'base' ? '' : 'outline-offset: -2px'
                  };}</style><div id="part-${part}">%TEMPLATE%</div>`
                }
              ]
            }
          },
          constants: [
            {
              type: 'template',
              name: 'width',
              value: `
                <div style="width: 600px; height: 600px; position: relative;">%TEMPLATE%
                </div>
              `
            }
          ],
          args
        })
      )}
    `;
  }
};

export const Mouseless = {
  name: 'Mouseless',
  render: (args: any) => {
    return html`<div class="mouseless" style="width: auto; height: 95vh; position: relative;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `<sd-input
                        label="Mouseless input example"
                        > </sd-input>`
          },
          {
            type: 'slot',
            name: 'header',
            value: `<span slot='header'>Header</span>`
          },
          {
            type: 'slot',
            name: 'footer',
            value: `<sd-button slot='footer' variant='secondary' style='width: 100%'>Footer</sd-button>`
          },
          {
            type: 'attribute',
            name: 'no-header',
            value: false
          }
        ]
      })}
      <sd-button
        variant="secondary"
        @click=${() => {
          const drawer = document.querySelector('sd-drawer');
          if (drawer && !drawer.hasAttribute('open')) {
            drawer.setAttribute('open', '');
          }
        }}
      >
        Open Drawer
      </sd-button>
    </div>`;
  },
  play: async ({ canvasElement }: { canvasElement?: HTMLUnknownElement }) => {
    const el = canvasElement?.querySelector('.mouseless sd-drawer');
    await waitUntil(() => el?.shadowRoot?.querySelector('header'));

    if (el?.shadowRoot) {
      const header = el.shadowRoot.querySelector('header');
      if (header) {
        await userEvent.type(header, '{space}', { pointerEventsCheck: 0 });
      }
    }
  }
};
