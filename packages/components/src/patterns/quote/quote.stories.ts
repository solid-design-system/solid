import '../../solid-components';
import { html } from 'lit-html';

export default {
  title: 'Pattern/quote',
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
    src="./placeholders/family.jpg"
    alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
  />
`;

const information = (hidden = false, text = '4xl') => (hidden ? '' : html`<p class="mt-4 text-sm">${text}</p>`);

/**
 * Default: This shows quote in its default state.
 */

export const Default = {
  render: () => html`<div class="text-left text-black">
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
 * Use the `size` version to make a quote with different sizes.
 */

export const Size = {
  render: () => html` <div class="flex items-end gap-5">
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
 * Use the `inverted` version to make a quote with inverted colors.
 */

export const Inverted = {
  render: () => html` <div class="flex items-end gap-5 p-5 bg-primary">
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
 * Use the `variant` version to make a quote with or without avatar image.
 */

export const Variant = {
  render: () => html` <div class="flex items-end gap-5">
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
