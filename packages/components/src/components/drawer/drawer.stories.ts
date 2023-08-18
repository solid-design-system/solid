import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { userEvent } from '@storybook/testing-library';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-drawer');
const { generateTemplate } = storybookTemplate('sd-drawer');
const { overrideArgs } = storybookHelpers('sd-drawer');

export default {
  title: 'Components/sd-drawer',
  component: 'sd-drawer',

  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<slot-comp style="height: 100%;"></slot-comp>`
    },
    {
      type: 'slot',
      name: 'header',
      value: `<slot-comp slot='header' style="height: 48px; width: 140px;"></slot-comp>`
    },
    {
      type: 'slot',
      name: 'footer',
      value: `<slot-comp slot='footer' style="--slot-height: 48px;"></slot-comp>`
    },
    { type: 'attribute', name: 'open', value: true },
    { type: 'attribute', name: 'contained', value: true }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    controls: { exclude: ['contained'] }
  }
};

/**
 * Default: This shows sd-drawer in its default state.
 */

export const Default = {
  render: (args: any) => {
    return html` <div id="parent-container" style="width: auto; height: 95vh; position: relative;">
      ${generateTemplate({
        args
      })}
    </div>`;
  }
};

/**
 * Drawer with a tertiary button in the header. In case there's a requirement not to have left-padding in the header, as it's the case with the tertiary button in the `header` slot, you can override the `sd-drawer::part(header)` selector by applying a `left-padding: 0;` style.
 */
export const ButtonInHeader = {
  name: 'Button in Header',
  parameters: {
    controls: { exclude: ['header', 'contained'] }
  },
  render: (args: any) => {
    return html` <div id="header-with-btn" style="width: auto; height: 95vh; position: relative;">
      <style>
        #header-with-btn sd-drawer::part(header) {
          padding-left: 0;
        }
      </style>
      ${generateTemplate({
        constants: [
          {
            type: 'slot',
            name: 'header',
            value: `<sd-button slot='header' variant='tertiary'>Header</sd-button>`
          }
        ],
        args
      })}
    </div>`;
  }
};

export const Slots = {
  parameters: {
    controls: { exclude: ['default', 'header', 'footer', 'contained'] }
  },
  render: (args: any) => {
    return html`
      ${['default', 'header', 'footer'].map((slot, index) =>
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
                      ? `<slot-comp style="--slot-content: ''; --slot-height: 100%;'"></slot-comp>`
                      : `<slot-comp slot='${slot}' style="--slot-content: ''; --slot-height: 48px; --slot-width: ${
                          slot === 'header' ? '140px' : 'auto'
                        }"></slot-comp>`,
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
              <div id="parent-container-${index}" style="width: 600px; height: 600px; position: relative;">%TEMPLATE%
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
  parameters: {
    controls: {
      exclude: [
        'base',
        'overlay',
        'panel',
        'header',
        'header-content',
        'title',
        'close-button',
        'body',
        'footer',
        '--width',
        'contained'
      ]
    }
  },
  render: (args: any) => {
    return html`
      ${['base', 'overlay', 'panel', 'header', 'header-content', 'title', 'close-button', 'body', 'footer'].map(part =>
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

export const Scrolling = {
  parameters: { controls: { exclude: ['default', 'contained'] } },
  render: (args: any) => {
    return html` <div id="parent-container" style="width: auto; height: 95vh; position: relative;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `<slot><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis a cras. Maecenas accumsan lacus vel facilisis volutpat est velit. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Tempor nec feugiat nisl pretium fusce id velit. Faucibus ornare suspendisse sed nisi. Euismod in pellentesque massa placerat duis ultricies lacus sed. Tortor condimentum lacinia quis vel. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Dui vivamus arcu felis bibendum ut. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Morbi tempus iaculis urna id volutpat lacus laoreet. Donec massa sapien faucibus et molestie. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Vel risus commodo viverra maecenas. Eget dolor morbi non arcu risus quis. Posuere sollicitudin aliquam ultrices sagittis orci. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Auctor elit sed vulputate mi. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Enim nec dui nunc mattis enim. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Tincidunt tortor aliquam nulla facilisi cras fermentum. Fermentum leo vel orci porta non pulvinar neque laoreet. Velit euismod in pellentesque massa placerat. Elementum nibh tellus molestie nunc non blandit massa enim nec. Condimentum vitae sapien pellentesque habitant morbi. Eget gravida cum sociis natoque penatibus. Morbi enim nunc faucibus a. Vitae nunc sed velit dignissim sodales ut eu. Libero justo laoreet sit amet cursus sit amet. Libero nunc consequat interdum varius sit amet. Natoque penatibus et magnis dis. Scelerisque eu ultrices vitae auctor. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Gravida cum sociis natoque penatibus et magnis dis. Massa ultricies mi quis hendrerit dolor. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Amet consectetur adipiscing elit pellentesque habitant. Nisl vel pretium lectus quam id leo. Nunc sed augue lacus viverra vitae congue eu consequat ac. Fermentum dui faucibus in ornare quam viverra orci. Convallis tellus id interdum velit laoreet id donec ultrices. Nulla aliquet enim tortor at auctor urna nunc id. Ultricies tristique nulla aliquet enim. Nisl nunc mi ipsum faucibus vitae aliquet. Enim praesent elementum facilisis leo vel. Eget duis at tellus at urna condimentum. Fringilla est ullamcorper eget nulla. Ut tellus elementum sagittis vitae et leo duis ut. Cras semper auctor neque vitae tempus quam pellentesque. Vel risus commodo viverra maecenas. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Ut porttitor leo a diam. Amet porttitor eget dolor morbi non. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Duis at consectetur lorem donec massa sapien faucibus et. Varius quam quisque id diam. Platea dictumst quisque sagittis purus. Ultrices dui sapien eget mi proin sed.</p></slot>`
          }
        ]
      })}
    </div>`;
  }
};

export const Mouseless = {
  parameters: { controls: { exclude: ['default', 'header', 'footer', 'contained', 'no-header'] } },
  render: (args: any) => {
    return html`<div class="mouseless" id="header-with-btn" style="width: auto; height: 95vh; position: relative;">
      <style>
        #header-with-btn sd-drawer::part(header) {
          padding-left: 0;
        }
      </style>
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `<input placeholder="Default slot"></input>`
          },
          {
            type: 'slot',
            name: 'header',
            value: `<sd-button slot='header' variant='tertiary'>Header</sd-button>`
          },
          {
            type: 'slot',
            name: 'footer',
            value: `<sd-button slot='footer' variant='secondary'>Footer</sd-button>`
          },
          {
            type: 'attribute',
            name: 'no-header',
            value: false
          }
        ]
      })}
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

/**
 *By default, the drawer’s panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the drawer. If you want a different element to have focus, add the autofocus attribute to it
 */
export const InitialFocus = {
  parameters: { controls: { exclude: 'contained' } },
  render: (args: any) => {
    return html` <div id="parent-container" style="width: auto; height: 95vh; position: relative;">
      ${generateTemplate({
        args,
        constants: [
          {
            type: 'slot',
            name: 'default',
            value: `<input autofocus placeholder="I will have focus when the drawer is opened" style="width: 80%"></input>`
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
          }
        ]
      })}
    </div>`;
  }
};
