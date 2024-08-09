import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';
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

/**
 * Container for creating scrollable areas in the UI.
 */

export default {
  title: 'Components/sd-scrollable',
  tags: ['!dev'],
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

/**
 * Use the `orientation` attribute to set the scroll direction of the component.
 */

export const Orientation = {
  name: 'Orientation',
  render: () => html`
    <div class="flex gap-12">
      <sd-scrollable orientation="horizontal">
        <div class="slot slot--border text-sm items-start h-max w-max p-4">
          <p>Scroll horizontally</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>

      <sd-scrollable orientation="vertical">
        <div class="slot slot--border items-start h-max p-4 text-sm justify-start">
          <p>Scroll vertically</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    </div>
  `
};

/**
 * Use the `scrollbars` attribute to display browser scrollbars.
 */

export const Scrollbar = {
  name: 'Browser Scrollbar',
  render: () => html`
    <div class="flex gap-12">
      <sd-scrollable orientation="horizontal" buttons scrollbars>
        <div class="slot slot--border text-sm items-start h-max w-max p-4">
          <p>Scroll horizontally</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>

      <sd-scrollable orientation="vertical" buttons scrollbars>
        <div class="slot slot--border items-start h-max p-4 text-sm justify-start">
          <p>Scroll vertically</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    </div>
  `
};

/**
 * Use the `buttons` attribute to display buttons indicating scrollable content.
 */

export const Buttons = {
  name: 'Buttons',
  render: () => html`
    <div class="flex gap-12">
      <sd-scrollable orientation="horizontal" buttons>
        <div class="slot slot--border text-sm items-start h-max w-max p-4">
          <p>Scroll horizontally</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>

      <sd-scrollable orientation="vertical" buttons>
        <div class="slot slot--border items-start h-max p-4 text-sm justify-start">
          <p>Scroll vertically</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    </div>
  `
};

/**
 * Use the `shadows` attribute to display visual cues indicating scrollable content.
 */

export const Shadows = {
  name: 'Shadows',
  render: () => html`
    <div class="flex gap-12">
      <sd-scrollable orientation="horizontal" shadows>
        <div class="slot slot--border text-sm items-start h-max w-max p-4">
          <p>Scroll horizontally</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>

      <sd-scrollable orientation="vertical" shadows>
        <div class="slot slot--border items-start h-max p-4 text-sm justify-start">
          <p>Scroll vertically</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    </div>
  `
};

/**
 * Use the `inset` attribute to adjust the inset padding.
 */

export const Inset = {
  name: 'Inset',
  render: () => html`
    <div class="flex gap-12">
      <sd-scrollable orientation="horizontal" inset>
        <div class="slot slot--border text-sm items-start h-max w-max p-4">
          <p>Scroll horizontally</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>

      <sd-scrollable orientation="vertical" inset>
        <div class="slot slot--border items-start h-max p-4 text-sm justify-start">
          <p>Scroll vertically</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    </div>
  `
};

/**
 * Use the `step` attribute to set the amount of pixels to scroll when clicking the buttons.
 */
export const Step = {
  name: 'Step',
  render: () => html`
    <div class="flex gap-12">
      <sd-scrollable orientation="horizontal" buttons step="50">
        <div class="slot slot--border text-sm items-start h-max w-max p-4">
          <p>Scroll horizontally</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>

      <sd-scrollable orientation="vertical" buttons step="50">
        <div class="slot slot--border items-start h-max p-4 text-sm justify-start">
          <p>Scroll vertically</p>
          <br />
          <p>This is a long scrollable content.</p>
          <p>It contains multiple paragraphs and lines.</p>
          <p>The content is intentionally long to trigger scrolling. You can scroll horizontally and vertically.</p>
          <p>The scrollable component will display shadows and buttons based on the props.</p>
          <p>Customize the content and attributes as needed.</p>
        </div>
      </sd-scrollable>
    </div>
  `
};
