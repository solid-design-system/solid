import '../../../../components/src/solid-components';
import { html } from 'lit';
import {
  storybookDefaults,
  storybookHelpers,
  storybookTemplate,
  storybookUtilities
} from '../../../scripts/storybook/helper';
import { waitUntil } from '@open-wc/testing-helpers';

const { argTypes, parameters } = storybookDefaults('sd-scrollable');
const { overrideArgs } = storybookHelpers('sd-scrollable');
const { generateTemplate } = storybookTemplate('sd-scrollable');
const { generateScreenshotStory } = storybookUtilities;

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
  title: 'Components/sd-scrollable/Screenshots: sd-scrollable',
  tags: ['!autodocs'],
  component: 'sd-scrollable',
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value: defaultSlotContent
  }),
  argTypes,
  parameters: { ...parameters, controls: { disable: true } },
  decorators: [
    (story: any) =>
      html`<style>
          sd-scrollable {
            width: 277px;
            height: 188px;
          }</style
        >${story()}`
  ] as unknown
};

export const Default = {
  name: 'Default',
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

export const AutoOrientation = {
  name: 'Auto Orientation',
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: [
        { type: 'attribute', name: 'buttons', value: true },
        { type: 'attribute', name: 'orientation', value: 'auto' }
      ],
      options: {
        templateRenderer: ({ attributes }) => {
          const attrs = Object.entries(attributes)
            .map(([attr, value]) => `${attr}='${value}'`)
            .join(' ');

          return `
            <sd-scrollable ${attrs}>
              <div class="slot slot--border slot--text items-start" style="height:max-content; width:max-content; padding: 1rem; justify-content:start;">
                <p>Scroll and give it a try!</p>
                <br/>
                <p>This is a long scrollable content.</p>
                <p>It contains multiple paragraphs and lines.</p>
                <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
                <p>The scrollable component will display shadows and buttons based on the props.</p>
                <p>Customize the content and attributes as needed.</p>
                <p>Here’s another line to keep things flowing.</p>
                <p>Another one couldn't hurt, right?</p>
                <p>We’re adding more content to ensure you can scroll in both directions.</p>
                <p>These lines are here to make the scrollable component more useful for testing.</p>
              </div>
            </sd-scrollable>
          `;
        }
      }
    });
  }
};

export const ButtonWithGradient = {
  name: 'Button With Gradient',
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: [{ type: 'attribute', name: 'buttons', value: true }]
    });
  }
};

export const Shadow = {
  name: 'Shadow',
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: [{ type: 'attribute', name: 'shadows', value: 'true' }]
    });
  }
};

export const Scrollbar = {
  name: 'Scrollbar',
  render: (args: any) => {
    return generateTemplate({
      args,
      constants: [{ type: 'attribute', name: 'scrollbars', value: 'true' }]
    });
  }
};

export const CustomIcon = {
  name: 'Custom Icon',
  render: () => {
    return html`
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
          <sd-icon name="system/image" label="Start"></sd-icon>
        </div>
        <div slot="icon-end">
          <sd-icon name="system/image" label="End"></sd-icon>
        </div>
      </sd-scrollable>
    `;
  }
};

export const Parts = {
  name: 'Parts',
  render: (args: any) => {
    const parts = [
      'base',
      'scroll-content',
      'button-start',
      'button-end',
      'button-right',
      'button-left',
      'button-top',
      'button-bottom',
      'shadow-right',
      'shadow-left',
      'shadow-top',
      'shadow-bottom'
    ];

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
        { type: 'attribute', name: 'orientation', value: 'auto' },
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
    }
  }
};

export const Mouseless = {
  name: 'Mouseless',
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

export const Combination = generateScreenshotStory([
  Default,
  ButtonWithGradient,
  Shadow,
  Scrollbar,
  CustomIcon,
  Parts,
  Mouseless
]);
