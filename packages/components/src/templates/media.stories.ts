import '../solid-components';
import { html } from 'lit-html';

export default {
  title: 'Templates/Media',
  tags: ['!dev'],
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 * Users can choose more ratios for different needs using the class `aspect-[ratio]`.
 */
export const Ratios = {
  render: () =>
    html`<div class="grid grid-cols-2 items-end gap-12">
      <figure class="sd-media aspect-[16/9]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[16/9] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[16/10]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[16/10] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[1/1]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[1/1] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[21/9]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[21/9] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[2/1]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[2/1] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[3/2]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[3/2] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[3/4]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[3/4] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[4/3]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[4/3] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[4/5]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[4/5] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[5/4]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[5/4] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[6/5]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[6/5] object-cover"
        />
      </figure>
      <figure class="sd-media aspect-[ 1.618/1]">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-[ 1.618/1] object-cover"
        />
      </figure>
    </div>`
};

/**
 * `Description` can be shown at the bottom.
 */
export const MediaWithDescription = {
  name: 'Description (Optional)',
  render: () => html`
    <figure class="sd-media max-w-xl p-4">
      <img
        src="./placeholders/images/architecture.jpg"
        alt="A generic placeholder jpg"
        class="aspect-video object-cover"
      />
      <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula</figcaption>
    </figure>
  `
};

/**
 * `Copyright` can be shown at the bottom of the default slot.
 */

export const MediaWithCopyright = {
  name: 'Copyright (Optional)',
  render: () => html`
    <figure class="sd-media max-w-xl p-4">
      <div class="sd-copyright" style="--copyright: '© Union Investment 2024'">
        <img
          src="./placeholders/images/architecture.jpg"
          alt="A generic placeholder jpg"
          class="aspect-video object-cover"
        />
      </div>
    </figure>
  `
};
