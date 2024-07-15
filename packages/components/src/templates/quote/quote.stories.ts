import '../../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Quote',
  component: 'Quote',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hER2N8wZXhiTrdlDXyrdUt/Quote?type=design&node-id=1001-4293&mode=design&t=Xywhix1rQMoatokH-0'
    }
  }
};

const img = (hidden = false) => html`
  <img
    class="w-16 h-16 rounded-full overflow-hidden object-cover ${hidden ? 'hidden' : ''}"
    src="./placeholders/images/family.jpg"
    alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
  />
`;

const information = (hidden = false, text = '4xl') => (hidden ? '' : html`<p class="mt-4 text-sm">${text}</p>`);

/**
 * The default version of a `quote` pattern showcases a quote in an appealing layout,
 * accompanied by an image of the speaker, along with their name and job description.
 * This adds context and personality to the quote, making it more engaging and relatable.
 */

export const Default = {
  render: () =>
    html`<div class="text-left text-black">
      <q class="block mb-6 text-3xl lg:text-4xl leading-tight"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
      >
      <div class="gap-4 flex items-center">
        ${img()}
        <div>
          <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
          <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
        </div>
      </div>
    </div>`
};

/**
 * This version of the quote provides flexibility in terms of `size` and offers three options: 4xl, 3xl, and xl.
 * This allows you to choose the size that best fits your layout, while maintaining a cohesive and impactful visual presentation.
 */

export const Size = {
  render: () =>
    html` <div class="flex items-end gap-5">
      <div class="text-left text-black">
        <q class="block mb-6 text-3xl lg:text-4xl leading-tight"
          >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
        >
        <div class="gap-6 flex items-center">
          ${img()}
          <div>
            <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
            <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
          </div>
        </div>
        ${information()}
      </div>

      <div class="text-left text-black">
        <q class="block mb-4 text-2xl lg:text-3xl leading-tight"
          >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
        >
        <div class="gap-6 flex items-center">
          ${img()}
          <div>
            <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
            <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
          </div>
        </div>
        ${information(false, '3xl')}
      </div>

      <div class="text-left text-black">
        <q class="block mb-4 text-xl leading-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q>
        <div class="gap-4 flex items-center">
          ${img()}
          <div>
            <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
            <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
          </div>
        </div>
        ${information(false, 'xl')}
      </div>
    </div>`
};

/**
 * This version, called 'inverted', maintains the flexibility of the quote pattern. It primarily
 * focuses on changing all text within the pattern to white, ensuring readability and adaptability
 * for various branding requirements.
 */

export const Inverted = {
  render: () =>
    html` <div class="flex items-end gap-5 p-5 bg-primary">
      <div class="text-left text-white">
        <q class="block mb-6 text-3xl lg:text-4xl leading-tight"
          >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
        >
        <div class="gap-6 flex items-center">
          ${img()}
          <div>
            <p class="sd-paragraph sd-paragraph--inverted font-bold mb-1">Jane Miller</p>
            <p class="sd-paragraph sd-paragraph--size-sm sd-paragraph--inverted">Job Title</p>
          </div>
        </div>
        ${information()}
      </div>

      <div class="text-left text-white">
        <q class="block mb-4 text-2xl lg:text-3xl leading-tight"
          >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
        >
        <div class="gap-6 flex items-center">
          ${img()}
          <div>
            <p class="sd-paragraph sd-paragraph--inverted font-bold mb-1">Jane Miller</p>
            <p class="sd-paragraph sd-paragraph--size-sm sd-paragraph--inverted">Job Title</p>
          </div>
        </div>
        ${information(false, '3xl')}
      </div>

      <div class="text-left text-white">
        <q class="block mb-4 text-xl leading-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q>
        <div class="gap-4 flex items-center">
          ${img()}
          <div>
            <p class="sd-paragraph sd-paragraph--inverted font-bold mb-1">Jane Miller</p>
            <p class="sd-paragraph sd-paragraph--size-sm sd-paragraph--inverted">Job Title</p>
          </div>
        </div>
        ${information(false, 'xl')}
      </div>
    </div>`
};

/**
 * The `variant` version of this quote provides additional flexibility by allowing you to toggle
 * the avatar image on or off. This enables you to use the pattern with or without a user image,
 * catering to your design needs.
 */

export const Variant = {
  render: () =>
    html` <div class="flex items-end gap-5">
      <div class="text-left text-black">
        <q class="block mb-6 text-3xl lg:text-4xl leading-tight"
          >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
        >
        <div class="gap-6 flex items-center">
          ${img()}
          <div>
            <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
            <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
          </div>
        </div>
        ${information(false, 'with profile image')}
      </div>

      <div class="text-left text-black">
        <q class="block mb-6 text-3xl lg:text-4xl leading-tight"
          >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
        >
        <div class="gap-6 flex items-center">
          ${img(true)}
          <div>
            <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
            <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
          </div>
        </div>
        ${information(false, 'without profile image')}
      </div>
    </div>`
};
