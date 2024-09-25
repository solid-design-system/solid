import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-teaser-media');
const { overrideArgs } = storybookHelpers('sd-teaser-media');
const { generateTemplate } = storybookTemplate('sd-teaser-media');

/**
 * Used as a flexible container that groups related items and links them to further content.
 *
 * **Related components**:
 * - [sd-teaser](?path=/docs/components-sd-teaser--docs)
 *
 * **Related templates**:
 * - [Teaser with Icon](?path=/docs/templates-teaser-with-icon--docs)
 * - [Teaser with Link](?path=/docs/templates-teaser-with-link--docs)
 * - [Teaser](?path=/docs/templates-teaser--docs)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-teaser-media',
  component: 'sd-teaser-media',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-12">Default slot</div>`
    },
    {
      type: 'slot',
      name: 'media',
      value: `<img slot="media" src="./placeholders/images/generic.jpg" class="aspect-video object-cover" alt="Generic alt"/>`
    },
    {
      type: 'slot',
      name: 'meta',
      value: `<div slot="meta" class="slot slot--border slot--text h-12">Meta slot</div>`
    },
    {
      type: 'slot',
      name: 'headline',
      value: `<div slot="headline" class="h-12">Headline Media Teaser</div>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2062-15525&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to set the color variant:
 * - `white (default)`
 * - `primary`
 * - `primary-100`
 * - `neutral-100`
 * - `gradient-dark`
 * - `gradient-white`
 */

export const Variant = {
  name: 'Variant',
  render: () => html`
    <div class="flex flex-col gap-12">
      <sd-teaser-media variant="white" class="max-w-[600px]">
        <img
          slot="media"
          src="./placeholders/images/architecture.jpg"
          class="aspect-video object-cover"
          alt="Generic alt"
        />
        <h3 slot="headline">Headline Media Teaser (white – default)</h3>
        <p class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </sd-teaser-media>

      <sd-teaser-media variant="primary" class="max-w-[600px]">
        <img
          slot="media"
          src="./placeholders/images/architecture.jpg"
          class="aspect-video object-cover"
          alt="Generic alt"
        />
        <h3 slot="headline">Headline Media Teaser (primary)</h3>
        <p class="sd-paragraph sd-paragraph--inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </sd-teaser-media>

      <sd-teaser-media variant="primary-100" class="max-w-[600px]">
        <img
          slot="media"
          src="./placeholders/images/architecture.jpg"
          class="aspect-video object-cover"
          alt="Generic alt"
        />
        <h3 slot="headline">Headline Media Teaser (primary-100)</h3>
        <p class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </sd-teaser-media>

      <sd-teaser-media variant="neutral-100" class="max-w-[600px]">
        <img
          slot="media"
          src="./placeholders/images/architecture.jpg"
          class="aspect-video object-cover"
          alt="Generic alt"
        />
        <h3 slot="headline">Headline Media Teaser (neutral-100)</h3>
        <p class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </sd-teaser-media>

      <sd-teaser-media variant="gradient-dark" class="max-w-[600px]">
        <img
          slot="media"
          src="./placeholders/images/architecture.jpg"
          class="aspect-video object-cover"
          alt="Generic alt"
        />
        <h3 slot="headline">Headline Media Teaser (gradient-dark)</h3>
        <p class="sd-paragraph sd-paragraph--inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </sd-teaser-media>

      <sd-teaser-media variant="gradient-white" class="max-w-[600px]">
        <img
          slot="media"
          src="./placeholders/images/architecture.jpg"
          class="aspect-video object-cover"
          alt="Generic alt"
        />
        <h3 slot="headline">Headline Media Teaser (gradient-white)</h3>
        <p class="sd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </sd-teaser-media>
    </div>
  `
};

/**
 * - Use the `default` slot to display main information and/or action elements below the headline.
 * - Use the `media` slot to add an image to the teaser.
 * - Use the `headline` slot to display titles. It should always contain a <h*> element.
 */
export const DefaultMediaAndHeadlineSlot = {
  name: 'Default, Media and Headline Slot',
  render: () => html`
    <sd-teaser-media variant="gradient-dark" class="max-w-[600px]">
      <img
        slot="media"
        src="./placeholders/images/architecture.jpg"
        class="aspect-video object-cover"
        alt="Generic alt"
      />
      <h3 slot="headline">Headline Media Teaser</h3>
      <div class="slot slot--border slot--text h-12">Default slot</div>
    </sd-teaser-media>
  `
};

/**
 * Use the `meta` slot to show content above the headline.
 */

export const MetaSlot = {
  render: () => html`
    <sd-teaser-media variant="gradient-dark" class="max-w-[600px]">
      <div slot="meta" class="slot slot--border slot--text h-12">Meta slot</div>
      <img
        slot="media"
        src="./placeholders/images/architecture.jpg"
        class="aspect-video object-cover"
        alt="Generic alt"
      />
      <h3 slot="headline">Headline Media Teaser</h3>
    </sd-teaser-media>
  `
};

/**
 * Use the `expandable` slot to add content that only shows up on hover.
 *
 * **Accessibility Hint:** Expandable slot content cannot contain any action since it is not shown on mobile devices due to hover interaction.
 */

export const ExpandableSlot = {
  render: () => html`
    <sd-teaser-media variant="gradient-dark" class="max-w-[600px]">
      <img
        slot="media"
        src="./placeholders/images/architecture.jpg"
        class="aspect-video object-cover"
        alt="Generic alt"
      />
      <h3 slot="headline">Headline Media Teaser</h3>
      <div slot="expandable" class="slot slot--border slot--text h-12">Expandable slot</div>
    </sd-teaser-media>
  `
};
