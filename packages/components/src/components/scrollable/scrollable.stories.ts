import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
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
    value: `
      <div style="width: 277px; height: 80px; line-height: 1.6;">
        <p>This is a long scrollable content.</p>
        <p>It contains multiple paragraphs and lines.</p>
        <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
        <p>The scrollable component will display shadows and buttons based on the props.</p>
        <p>Customize the content and attributes as needed.</p>
      </div>
    `
  }),
  argTypes,
  parameters: { ...parameters },
  decorators: [withActions] as any
};

export const Default = {
  render: (args: any) => {
    return html`
      <div style="width: 277px; height: 120px;">
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
  render: (args: any) => {
    return html`
      <div style="width: 277px; height: 120px;">
        ${generateTemplate({
          args,
          constants: [
            {
              type: 'slot',
              name: 'icon',
              value: '<sd-icon library="global-resources" name="system/minus" slot="icon-left"></sd-icon>'
            },
            { type: 'attribute', name: 'buttons', value: 'true' }
          ]
        })}
      </div>
    `;
  }
};

export const Parts = {
  parameters: {
    controls: { exclude: ['base', 'content', 'button-left', 'button-right', 'button-top', 'button-bottom'] }
  },
  render: (args: any) => {
    return generateTemplate({
      axis: {
        y: {
          type: 'template',
          name: 'sd-scrollable::part(...){outline: solid 2px red}',
          values: ['base', 'content', 'button-left', 'button-right', 'button-top', 'button-bottom'].map(part => {
            return {
              title: part,
              value: `<style>#part-${part} sd-scrollable::part(${part}){outline: solid 2px red;} #part-${part} .${part}{outline: solid 2px red;}</style><div id='part-${part}'>%TEMPLATE%</div>`
            };
          })
        }
      },
      constants: [
        { type: 'template', name: 'width', value: '<div style="width: 300px">%TEMPLATE%</div>' },
        { type: 'attribute', name: 'buttons', value: true },
        { type: 'attribute', name: 'shadows', value: true }
      ],
      args
    });
  }
};
