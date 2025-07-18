import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-teaser');
const { overrideArgs } = storybookHelpers('sd-teaser');
const { generateTemplate } = storybookTemplate('sd-teaser');

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Components/sd-teaser',
  component: 'sd-teaser',
  args: overrideArgs([
    {
      type: 'attribute',
      name: 'breakpoint',
      value: `9999`
    },
    {
      type: 'slot',
      name: 'default',
      value: `<div class="slot slot--border slot--text h-12">Main slot</div>`
    },
    {
      type: 'slot',
      name: 'media',
      value: `<div slot="media" class="slot slot--border slot--text h-12">Media slot</div>`
    },
    {
      type: 'slot',
      name: 'meta',
      value: `<div slot="meta" class="slot slot--border slot--text h-12">Meta slot</div>`
    }
  ]),
  argTypes,
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2019-5109&node-type=section&t=5PpAC3TA3kYF7ufX-0'
    }
  },
  decorators: [
    (story: () => typeof html) => html`
      <style>
        #default-teaser sd-teaser::part(content) {
          margin: 0 16px;
        }
      </style>
      <div id="default-teaser">${story()}</div>
    `
  ]
};

export const Default = {
  render: (args: any) => generateTemplate({ args })
};

/**
 * Use the `variant` attribute to use the appropriate teaser for your context:
 *
 * - `white` (default)
 * - `white border-neutral-400`
 * - `neutral-100`
 * - `primary-100`
 * - `primary`
 */

export const Variant = {
  render: () => html`
    <div class="grid grid-cols-2 gap-12">
      <sd-teaser variant="white" inset>
        <h3 slot="headline">Teaser with white background</h3>
        <p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
        </p>
      </sd-teaser>
      <sd-teaser variant="white border-neutral-400">
        <h3 slot="headline">Teaser with white background and border neutral-400</h3>
        <p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
        </p>
      </sd-teaser>
      <sd-teaser variant="neutral-100" inset>
        <h3 slot="headline">Teaser with neutral-100 background</h3>
        <p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
        </p>
      </sd-teaser>
      <sd-teaser variant="primary-100" inset>
        <h3 slot="headline">Teaser with primary-100 background</h3>
        <p class="sd-paragraph">
          Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
        </p>
      </sd-teaser>
      <sd-teaser variant="primary" inset>
        <h3 slot="headline">Teaser with primary background</h3>
        <p class="sd-paragraph sd-paragraph--inverted">
          Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor.
        </p>
      </sd-teaser>
    </div>
  `
};

/**
 * - The`header` and `default` slot are both required.
 * - Use the `header` slot to display titles, it should always contain a `<h*>` element.
 * - Use the `default` slot to display any content.
 */

export const DefaultAndHeadlineSlot = {
  name: 'Default and Headline Slot',
  render: () => html`
    <sd-teaser>
      <h3 slot="headline">Lorem ipsum sic semper</h3>
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt.
      </p>
    </sd-teaser>
  `
};

/**
 * Teasers accept a `media` slot to display images or videos.
 *
 * **Accessibility Hint:** If the image doesn't contribute to the information delivered to the user, don't describe it in the alt attribute and leave it empty.
 */

export const MediaSlot = {
  render: () => html`
    <sd-teaser>
      <h3 slot="headline">Lorem ipsum sic semper</h3>
      <img slot="media" src="./placeholders/images/architecture.jpg" alt="" style="width:100%; height: auto;" />
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt.
      </p>
    </sd-teaser>
  `
};

/**
 * Use the `meta` slot to add additional content to the teaser.
 */

export const MetaSlot = {
  render: () => html`
    <sd-teaser>
      <h3 slot="headline">Lorem ipsum sic semper</h3>
      <div slot="meta">
        <time class="sd-meta sd-meta--pipe" datetime="2023-01-01">01.01.2023</time>
        <span class="sd-meta">Author name</span>
      </div>
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt.
      </p>
    </sd-teaser>
  `
};

/**
 * Use the `inset` attribute to create a teaser with an inset padding if the context needs it.
 */

export const Inset = {
  render: () => html`
    <sd-teaser inset variant="primary-100">
      <h3 slot="headline">Teaser with inset Padding</h3>
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt.
      </p>
    </sd-teaser>
  `
};

/**
 * Use the `breakpoint` attribute to change the teaser's layout at a specific breakpoint or enforce a specific layout:
 * - `0` is always horizontal
 * - `9999` is always vertical
 */

export const Breakpoint = {
  render: () => html`
    <div class="flex gap-8 flex-col">
      <sd-teaser breakpoint="0">
        <h3 slot="headline">Horizontal</h3>
        <img slot="media" src="./placeholders/images/architecture.jpg" alt="" style="width:100%; height: auto;" />
        <p>
          Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
          reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
          sunt nulla incididunt.
        </p>
      </sd-teaser>

      <sd-teaser breakpoint="9999" class="w-[256px]">
        <h3 slot="headline">Vertical</h3>
        <img slot="media" src="./placeholders/images/architecture.jpg" alt="" style="width:100%; height: auto;" />
        <p>
          Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
          reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
          sunt nulla incididunt.
        </p>
      </sd-teaser>
    </div>
  `
};

/** Use the `reversed-layout` attribute to invert the horizontal layout.
 *
 * **Hint**: Only works with horizontal teasers.
 */
export const Reverse = {
  render: () => html`
    <sd-teaser reversed-layout>
      <h3 slot="headline">Horizontal</h3>
      <img slot="media" src="./placeholders/images/architecture.jpg" alt="" class="w-full h-auto" />
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt.
      </p>
    </sd-teaser>
  `
};

/**
 * Use the `--distribution-media` and `--distribution-content` CSS properties to adjust the teaser's layout.
 */

export const Distribution = {
  render: () => html`
    <sd-teaser style="--distribution-media: 20%; --distribution-content: 80%;">
      <h3 slot="headline">Lorem ipsum sic semper</h3>
      <img slot="media" src="./placeholders/images/architecture.jpg" alt="" style="width:100%; height: auto;" />
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt.
      </p>
    </sd-teaser>
  `
};
