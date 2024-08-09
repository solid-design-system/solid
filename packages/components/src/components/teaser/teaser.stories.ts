import '../../solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-teaser');
const { overrideArgs } = storybookHelpers('sd-teaser');
const { generateTemplate } = storybookTemplate('sd-teaser');

/**
 * Teasers can be used to group related subjects in a container.
 *
 * **Related templates**:
 * - [Teaser with Icon](?path=/docs/templates-teaser-with-icon--docs)
 * - [Teaser with Link](?path=/docs/templates-teaser-with-link--docs)
 */
export default {
  tags: ['!dev'],
  title: 'Components/sd-teaser',
  component: 'sd-teaser',
  args: overrideArgs([
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
  parameters
};

/**
 * This shows sd-teaser in its default state.
 */

export const Default = {
  render: (args: any) => generateTemplate({ args })
};

/**
 * The header and main slot are both obligatory.
 * - Headers can be used to display titles and should always contain a `<h*>` element.
 * - The default slot can display any content.
 */

export const HeaderAndMainSlot = {
  render: () => html`
    <sd-teaser>
      <h3 slot="headline">Simple teaser</h3>
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt. Cupidatat officia reprehenderit est cupidatat et id officia ut. Exercitation id pariatur
        elit occaecat ad Lorem nisi sunt pariatur do aute aliqua magna irure incididunt.
      </p>
    </sd-teaser>
  `
};

/**
 * Use the `variant` attribute to use the appropriate teaser for your context.
 */

export const Variant = {
  render: () => html`
    <sd-teaser variant="white border-neutral-400">
      <h3 slot="headline">Teaser with border</h3>
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt. Cupidatat officia reprehenderit est cupidatat et id officia ut. Exercitation id pariatur
        elit occaecat ad Lorem nisi sunt pariatur do aute aliqua magna irure incididunt.
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
      <h3 slot="headline">Inset teaser</h3>
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt. Cupidatat officia reprehenderit est cupidatat et id officia ut. Exercitation id pariatur
        elit occaecat ad Lorem nisi sunt pariatur do aute aliqua magna irure incididunt.
      </p>
    </sd-teaser>
  `
};

/**
 * The meta slot can be used to display additional information.
 */

export const MetaSlot = {
  render: () => html`
    <sd-teaser>
      <h3 slot="headline">Teaser with Meta</h3>
      <time slot="meta" class="sd-meta" datetime="2023-08-11">11. August 2023</time>
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt. Cupidatat officia reprehenderit est cupidatat et id officia ut. Exercitation id pariatur
        elit occaecat ad Lorem nisi sunt pariatur do aute aliqua magna irure incididunt.
      </p>
    </sd-teaser>
  `
};

/**
 * Teasers accept a media slot to display images or videos.
 */

export const MediaSlot = {
  render: () => html`
    <sd-teaser>
      <h3 slot="headline">Eu ut ad exercitation magna</h3>
      <img slot="media" src="./placeholders/images/collaboration.jpg" alt="Test" style="width:100%; height: auto;" />
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt. Cupidatat officia reprehenderit est cupidatat et id officia ut. Exercitation id pariatur
        elit occaecat ad Lorem nisi sunt pariatur do aute aliqua magna irure incididunt.
      </p>
    </sd-teaser>
  `
};

/**
 * Use the `--distribution-media` and `--distribution-content` CSS properties to adjust the teaser's layout.
 */

export const Distribution = {
  render: () => html`
    <sd-teaser style="--distribution-media: 30%; --distribution-content: 70%;">
      <h3 slot="headline">Eu ut ad exercitation magna</h3>
      <img slot="media" src="./placeholders/images/collaboration.jpg" alt="Test" style="width:100%; height: auto;" />
      <p>
        Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
        reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
        sunt nulla incididunt. Cupidatat officia reprehenderit est cupidatat et id officia ut. Exercitation id pariatur
        elit occaecat ad Lorem nisi sunt pariatur do aute aliqua magna irure incididunt.
      </p>
    </sd-teaser>
  `
};

/**
 * Use the `breakpoint` attribute to change the teaser's layout at a specific breakpoint or enforce a specific layout.
 * `0` is always horizontal, `9999` is always vertical.
 */
export const Breakpoint = {
  render: () => html`
    <div class="flex gap-8 flex-col">
      <sd-teaser breakpoint="0">
        <h3 slot="headline">Horizontal teaser</h3>
        <img slot="media" src="./placeholders/images/collaboration.jpg" alt="Test" style="width:100%; height: auto;" />
        <p>
          Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
          reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
          sunt nulla incididunt. Cupidatat officia reprehenderit est cupidatat et id officia ut. Exercitation id
          pariatur elit occaecat ad Lorem nisi sunt pariatur do aute aliqua magna irure incididunt.
        </p>
      </sd-teaser>

      <sd-teaser breakpoint="9999" class="w-[256px]">
        <h3 slot="headline">Vertical teaser</h3>
        <img slot="media" src="./placeholders/images/collaboration.jpg" alt="Test" style="width:100%; height: auto;" />
        <p>
          Quis ut ex cupidatat proident cillum ullamco ea aute ad laborum aliqua incididunt sint ipsum. Elit enim
          reprehenderit aliquip officia in minim. Eu ipsum pariatur dolor. Do ex in cupidatat anim aliqua sint voluptate
          sunt nulla incididunt. Cupidatat officia reprehenderit est cupidatat et id officia ut. Exercitation id
          pariatur elit occaecat ad Lorem nisi sunt pariatur do aute aliqua magna irure incididunt.
        </p>
      </sd-teaser>
    </div>
  `
};
