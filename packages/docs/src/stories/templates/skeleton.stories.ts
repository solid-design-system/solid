import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Skeleton',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3626-235289&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

/**
 * A user profile row — avatar, name, and role loading together.
 */
export const ProfileRow = {
  render: () => html`
    <div
      class="flex items-center gap-4 p-4 border border-neutral-300 rounded"
      aria-busy="true"
      aria-label="Loading profile"
      inert
      style="max-width: 400px"
    >
      <div class="sd-skeleton sd-skeleton--animated rounded-full w-14 h-14 shrink-0"></div>
      <div class="flex-1 flex flex-col gap-2">
        <p class="sd-skeleton sd-skeleton--animated font-bold">Full name placeholder text</p>
        <p class="sd-skeleton sd-skeleton--animated w-24 text-sm">Role placeholder</p>
      </div>
    </div>
  `
};

/**
 * A form skeleton — `sd-input` fields and `sd-button` loading before the form becomes interactive.
 */
export const Form = {
  render: () => html`
    <div class="flex flex-col gap-4" aria-busy="true" aria-label="Loading form" inert style="max-width: 400px">
      <div class="sd-skeleton sd-skeleton--animated w-full">
        <sd-input label="First name" placeholder="Placeholder"></sd-input>
      </div>
      <div class="sd-skeleton sd-skeleton--animated w-full">
        <sd-input label="Last name" placeholder="Placeholder"></sd-input>
      </div>
      <div class="sd-skeleton sd-skeleton--animated inline-block self-start">
        <sd-button>Submit</sd-button>
      </div>
    </div>
  `
};

/**
 * Accordion panels with skeleton placeholders while content is being fetched asynchronously per panel.
 * Each accordion panel has its own `aria-busy` container because panels can load independently.
 */
export const AccordionGroup = {
  render: () => html`
    <sd-accordion-group style="max-width: 800px">
      <sd-accordion open summary="Shareholder structure">
        <div class="flex flex-col gap-3" aria-busy="true" aria-label="Loading shareholder data" inert>
          <div class="sd-skeleton sd-skeleton--animated h-8 w-full"></div>
          <div class="sd-skeleton sd-skeleton--animated h-8 w-full"></div>
          <div class="sd-skeleton sd-skeleton--animated h-8 w-1/3"></div>
        </div>
      </sd-accordion>
      <sd-accordion open summary="Cooperative financial network">
        <div class="flex flex-col gap-3" aria-busy="true" aria-label="Loading network data" inert>
          <div class="sd-skeleton sd-skeleton--animated h-8 w-full"></div>
          <div class="sd-skeleton sd-skeleton--animated h-8 w-1/2"></div>
        </div>
      </sd-accordion>
    </sd-accordion-group>
  `
};

/**
 * A grid of article teasers all loading simultaneously. A **single `inert` + `aria-busy` on the
 * outermost container** covers all cards — remove those attributes and all `sd-skeleton` classes
 * in one step once content is ready.
 */
export const CardGrid = {
  render: () => html`
    <div
      class="grid grid-cols-3 gap-6"
      aria-busy="true"
      aria-label="Loading article list"
      inert
      style="max-width: 960px"
    >
      <sd-teaser breakpoint="9999">
        <div slot="media" class="sd-skeleton sd-skeleton--animated w-full" style="aspect-ratio:16/9"></div>
        <h3 slot="headline" class="sd-skeleton sd-skeleton--animated py-1">Article headline placeholder</h3>
        <div class="flex flex-col gap-2 mt-3 items-start">
          <p class="sd-skeleton sd-skeleton--animated">First line of the teaser text for this article.</p>
          <p class="sd-skeleton sd-skeleton--animated w-3/4">Second line of teaser text.</p>
          <sd-link class="sd-skeleton sd-skeleton--animated inline-block mt-1" href="#">Read more</sd-link>
        </div>
      </sd-teaser>
      <sd-teaser breakpoint="9999">
        <div slot="media" class="sd-skeleton sd-skeleton--animated w-full" style="aspect-ratio:16/9"></div>
        <h3 slot="headline" class="sd-skeleton sd-skeleton--animated py-1">
          A slightly longer headline for this article
        </h3>
        <div class="flex flex-col gap-2 mt-3 items-start">
          <p class="sd-skeleton sd-skeleton--animated">An introductory sentence describing this piece.</p>
          <sd-link class="sd-skeleton sd-skeleton--animated inline-block mt-1" href="#">Read more</sd-link>
        </div>
      </sd-teaser>
      <sd-teaser breakpoint="9999">
        <div slot="media" class="sd-skeleton sd-skeleton--animated w-full" style="aspect-ratio:16/9"></div>
        <h3 slot="headline" class="sd-skeleton sd-skeleton--animated py-1">Short headline</h3>
        <div class="flex flex-col gap-2 mt-3 items-start">
          <p class="sd-skeleton sd-skeleton--animated w-4/5">Brief teaser copy that ends early.</p>
          <sd-link class="sd-skeleton sd-skeleton--animated inline-block mt-1" href="#">Read more</sd-link>
        </div>
      </sd-teaser>
    </div>
  `
};
