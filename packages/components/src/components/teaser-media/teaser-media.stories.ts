import '../../solid-components';
import { html } from 'lit';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-teaser-media');
const { overrideArgs } = storybookHelpers('sd-teaser-media');
const { generateTemplate } = storybookTemplate('sd-teaser-media');

/**
 * Flexible containers that group related items and link to further content.
 *
 * **Related templates**:
 * - [Teaser Media](?path=/docs/templates-teaser-media--docs)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-teaser-media',
  component: 'sd-teaser-media',
  args: overrideArgs([
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-12">Main slot</div>`
    },
    {
      type: 'slot',
      name: 'media',
      value: `<img slot="media" src="./placeholders/images/generic.jpg" class="aspect-video object-cover" alt="Test"/>`
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
  parameters
};

export const Default = {
  render: (args: any) => {
    return generateTemplate({ args });
  }
};

/**
 * Use the `variant` attribute to set the color variant:
 * - `white (default)`
 * - `gradient-dark`
 * - `gradient-white`
 * - `primary`
 * - `primary-100`
 * - `neutral-100`
 */

export const Variant = {
  name: 'Variant',
  render: () => html`
    <div style="margin-bottom: 40px; width: 600px">
      <sd-teaser-media variant="white">
        <img slot="media" src="./placeholders/images/generic.jpg" class="aspect-video object-cover" alt="Test" />
        <h3 slot="headline">Headline Media Teaser (white – default)</h3>
        <div class="flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="flex-none">
            <sd-button href="#" target="_blank" variant="primary">Label</sd-button>
          </div>
        </div>
      </sd-teaser-media>
    </div>

    <div style="margin-bottom: 40px; width: 600px">
      <sd-teaser-media variant="gradient-dark">
        <img slot="media" src="./placeholders/images/generic.jpg" class="aspect-video object-cover" alt="Test" />
        <h3 slot="headline">Headline Media Teaser (gradient-dark)</h3>
        <div class="flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="flex-none">
            <sd-button href="#" target="_blank" variant="primary" inverted>Label</sd-button>
          </div>
        </div>
      </sd-teaser-media>
    </div>

    <div style="margin-bottom: 40px; width: 600px">
      <sd-teaser-media variant="gradient-white">
        <img slot="media" src="./placeholders/images/generic.jpg" class="aspect-video object-cover" alt="Test" />
        <h3 slot="headline">Headline Media Teaser (gradient-white)</h3>
        <div class="flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="flex-none">
            <sd-button href="#" target="_blank" variant="primary">Label</sd-button>
          </div>
        </div>
      </sd-teaser-media>
    </div>

    <div style="margin-bottom: 40px; width: 600px">
      <sd-teaser-media variant="primary">
        <img slot="media" src="./placeholders/images/generic.jpg" class="aspect-video object-cover" alt="Test" />
        <h3 slot="headline">Headline Media Teaser (primary)</h3>
        <div class="flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="flex-none">
            <sd-button href="#" target="_blank" variant="primary" inverted>Label</sd-button>
          </div>
        </div>
      </sd-teaser-media>
    </div>

    <div style="margin-bottom: 40px; width: 600px">
      <sd-teaser-media variant="primary-100">
        <img slot="media" src="./placeholders/images/generic.jpg" class="aspect-video object-cover" alt="Test" />
        <h3 slot="headline">Headline Media Teaser (primary-100)</h3>
        <div class="flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="flex-none">
            <sd-button href="#" target="_blank" variant="primary">Label</sd-button>
          </div>
        </div>
      </sd-teaser-media>
    </div>

    <div style="margin-bottom: 40px; width: 600px">
      <sd-teaser-media variant="neutral-100">
        <img slot="media" src="./placeholders/images/generic.jpg" class="aspect-video object-cover" alt="Test" />
        <h3 slot="headline">Headline Media Teaser (neutral-100)</h3>
        <div class="flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="flex-none">
            <sd-button href="#" target="_blank" variant="primary">Label</sd-button>
          </div>
        </div>
      </sd-teaser-media>
    </div>
  `
};
