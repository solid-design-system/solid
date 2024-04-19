import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-scrollable');
const { overrideArgs } = storybookHelpers('sd-scrollable');
const { generateTemplate } = storybookTemplate('sd-scrollable');

export default {
  title: 'Components/sd-scrollable',
  component: 'sd-scrollable',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value:
      '<div class="slot slot--border slot--background slot--text items-start" style="height:max-content; padding: 1rem; justify-content:start;"><p>Scroll and give it a try!</p><br/><p>This is a long scrollable content.</p><p>It contains multiple paragraphs and lines.</p><p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p><p>The scrollable component will display shadows and buttons based on the props.</p><p>Customize the content and attributes as needed.</p></div>'
  }),
  argTypes,
  parameters: { ...parameters },
  decorators: [
    withActions,
    (story: any) =>
      html`<style>
          sd-scrollable {
            height: 183px;
            width: 277px;
          }</style
        >${story()}`
  ] as unknown
};

export const Default = {
  render: (args: any) => {
    return html`
      <div>
        ${generateTemplate({
          args
        })}
      </div>
    `;
  }
};

export const ButtonWithGradient = {
  parameters: { controls: { exclude: ['buttons'] } },
  render: (args: any) => {
    return html`
      <div style="width: 277px; height: 120px;">
        ${generateTemplate({
          args,
          constants: [{ type: 'attribute', name: 'buttons', value: true }]
        })}
      </div>
    `;
  }
};

export const Shadow = {
  parameters: { controls: { exclude: ['shadow'] } },
  render: (args: any) => {
    return html`
      <div style="width: 277px; height: 120px;">
        ${generateTemplate({
          args,
          constants: [{ type: 'attribute', name: 'shadow', value: 'true' }]
        })}
      </div>
    `;
  }
};

export const Scrollbar = {
  parameters: { controls: { exclude: ['scrollbars'] } },
  render: (args: any) => {
    return html`
      <div style="width: 277px; height: 120px;">
        ${generateTemplate({
          args,
          constants: [{ type: 'attribute', name: 'scrollbars', value: 'true' }]
        })}
      </div>
    `;
  }
};

export const CustomIcon = {
  parameters: { controls: { exclude: ['default', 'buttons'] } },
  render: () => {
    return html`
      <div style="width: 277px; height: 120px;">
        ${generateTemplate({
          args: overrideArgs(
            {
              type: 'slot',
              name: 'icon-start',
              value: '<sd-icon library="global-resources" name="system/minus"></sd-icon>'
            },
            {
              type: 'slot',
              name: 'icon-end',
              value: '<sd-icon library="global-resources" name="system/minus"></sd-icon>'
            }
          ),
          constants: [
            { type: 'attribute', name: 'buttons', value: 'true' },
            {
              type: 'slot',
              name: 'default',
              value:
                '<div class="slot slot--border slot--background slot--text items-start" style="height:max-content; padding: 1rem; justify-content:start;"><p>Scroll and give it a try!</p><br/><p>This is a long scrollable content.</p><p>It contains multiple paragraphs and lines.</p><p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p><p>The scrollable component will display shadows and buttons based on the props.</p><p>Customize the content and attributes as needed.</p></div>'
            }
          ]
        })}
      </div>
    `;
  }
};

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'content', 'button-start', 'button-end', 'shadow-start', 'shadow-end'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-scrollable::part(...){outline: solid 2px red}',
          values: ['base', 'content', 'button-start', 'button-end', 'shadow-start', 'shadow-end'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-scrollable::part(${part}){outline: solid 2px red;} #part-${part} .${part}{outline: solid 2px red;}</style><div id='part-${part}'>%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'attribute', name: 'buttons', value: true },
        { type: 'attribute', name: 'shadow', value: true }
      ],
      args
    });
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const scrollables = canvasElement.querySelectorAll('sd-scrollable');
    for (const el of scrollables) {
      await waitUntil(() => el?.shadowRoot?.querySelector('button'));
      el?.shadowRoot?.querySelector<HTMLElement>('button')!.click();
      console.log('clicked');
    }
  }
};

export const Mouseless = {
  render: (args: any) => {
    return html`<div class="mouseless">
      ${generateTemplate({ args, constants: [{ type: 'attribute', name: 'buttons', value: true }] })}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-scrollable');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));

    el?.shadowRoot?.querySelector<HTMLElement>('button')!.focus();
  }
};
