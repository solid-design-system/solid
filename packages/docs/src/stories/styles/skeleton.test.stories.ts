import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookUtilities } from '../../../scripts/storybook/helper';

const { generateScreenshotStory } = storybookUtilities;

/**
 * Visual regression tests for sd-skeleton.
 */

export default {
  title: 'Styles/sd-skeleton/Screenshots: sd-skeleton',
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true }
  }
};

/**
 * Default: sd-skeleton on a paragraph.
 */
export const Default = {
  name: 'Default',
  render: () => html`<p class="sd-skeleton">Lorem ipsum dolor sit amet</p>`
};

/**
 * Animated: sd-skeleton with pulse animation.
 */
export const Animated = {
  name: 'Animated',
  render: () => html`<p class="sd-skeleton sd-skeleton--animated">Lorem ipsum dolor sit amet</p>`
};

/**
 * Element types: skeleton on headings, paragraphs, wrapper with button, rounded and rectangular blocks.
 */
export const ElementTypes = {
  name: 'Element Types',
  render: () => html`
    <h2 class="sd-headline sd-headline--size-3xl sd-skeleton">Heading placeholder</h2>
    <p class="sd-skeleton">Paragraph placeholder text.</p>
    <div class="sd-skeleton inline-block mt-4"><sd-button>Button label</sd-button></div>
    <div class="sd-skeleton rounded-full w-12 h-12 block mt-4"></div>
    <div class="sd-skeleton w-40 h-32 block mt-4"></div>
  `
};

export const Combination = generateScreenshotStory([Default, Animated, ElementTypes]);
