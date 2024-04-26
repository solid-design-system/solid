import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

const { argTypes, parameters } = storybookDefaults('sd-scrollable');
const { overrideArgs } = storybookHelpers('sd-scrollable');
const { generateTemplate } = storybookTemplate('sd-scrollable');

const defaultSlotContent = `
  <div class="slot slot--border slot--text items-start" style="height:max-content; width:max-content; padding: 1rem; justify-content:start;">
    <p>Scroll and give it a try!</p>
    <br/>
    <p>This is a long scrollable content.</p>
    <p>It contains multiple paragraphs and lines.</p>
    <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
    <p>The scrollable component will display shadows and buttons based on the props.</p>
    <p>Customize the content and attributes as needed.</p>
  </div>
`;

export default {
  title: 'Components/sd-scrollable',
  component: 'sd-scrollable',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: defaultSlotContent
  }),
  argTypes,
  parameters: { ...parameters },
  decorators: [
    withActions,
    (story: any) =>
      html`<style>
          sd-scrollable {
            width: 277px;
          }</style
        >${story()}`
  ] as unknown
};

const renderTemplate = (args: any, constants: any[] = []) => {
  return generateTemplate({
    args,
    constants
  });
};

export const Default = {
  render: (args: any) => {
    return html` <div>${renderTemplate(args)}</div> `;
  }
};

export const ButtonWithGradient = {
  parameters: { controls: { exclude: ['buttons'] } },
  render: (args: any) => {
    return html`
      <div style="width: 277px; height: 120px;">
        ${renderTemplate(args, [{ type: 'attribute', name: 'buttons', value: true }])}
      </div>
    `;
  }
};

export const Shadow = {
  parameters: { controls: { exclude: ['shadows'] } },
  render: (args: any) => {
    return html`
      <div style="width: 277px; height: 120px;">
        ${renderTemplate(args, [{ type: 'attribute', name: 'shadows', value: 'true' }])}
      </div>
    `;
  }
};

export const Scrollbar = {
  parameters: { controls: { exclude: ['scrollbars'] } },
  render: (args: any) => {
    return html`
      <div style="width: 277px; height: 120px;">
        ${renderTemplate(args, [{ type: 'attribute', name: 'scrollbars', value: 'true' }])}
      </div>
    `;
  }
};

export const CustomIcon = {
  parameters: {
    controls: {
      exclude: ['default', 'buttons', 'icon-start', 'icon-end']
    }
  },
  render: () => {
    return html`
      <div style="width: 277px; height: 120px;">
        <sd-scrollable buttons>
          <div
            class="slot slot--border slot--text items-start"
            style="height:max-content; width:max-content; padding: 1rem; justify-content:start;"
          >
            <p>Scroll and give it a try!</p>
            <br />
            <p>This is a long scrollable content.</p>
            <p>It contains multiple paragraphs and lines.</p>
            <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
            <p>The scrollable component will display shadows and buttons based on the props.</p>
            <p>Customize the content and attributes as needed.</p>
          </div>
          <div slot="icon-start">
            <sd-icon library="global-resources" name="system/picture"></sd-icon>
          </div>
          <div slot="icon-end">
            <sd-icon library="global-resources" name="system/picture"></sd-icon>
          </div>
        </sd-scrollable>
      </div>
    `;
  }
};

export const Parts = {
  parameters: {
    controls: {
      exclude: ['base', 'button-start', 'button-end', 'shadow-right', 'shadow-left', 'shadow-top', 'shadow-bottom']
    }
  },
  render: (args: any) => {
    const parts = ['base', 'button-start', 'button-end', 'shadow-right', 'shadow-left', 'shadow-top', 'shadow-bottom'];

    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-scrollable::part(...){outline: solid 2px red}',
          values: parts.map(part => ({
            title: part,
            value: `<style>#part-${part} sd-scrollable::part(${part}){outline: solid 2px red;} #part-${part} .${part}{outline: solid 2px red;}</style><div id='part-${part}'>%TEMPLATE%</div>`
          }))
        }
      },
      constants: [
        { type: 'attribute', name: 'buttons', value: true },
        { type: 'attribute', name: 'shadows', value: true }
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
      ${renderTemplate(args, [{ type: 'attribute', name: 'buttons', value: true }])}
    </div>`;
  },

  play: async ({ canvasElement }: { canvasElement: HTMLUnknownElement }) => {
    const el = canvasElement.querySelector('.mouseless sd-scrollable');
    await waitUntil(() => el?.shadowRoot?.querySelector('button'));

    el?.shadowRoot?.querySelector<HTMLElement>('button')!.focus();
  }
};
