import '../../solid-components';
import { html } from 'lit-html';

export default {
  title: 'Pattern/Quote',
  component: 'Quote',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hER2N8wZXhiTrdlDXyrdUt/Quote?type=design&node-id=1001-4293&mode=design&t=Xywhix1rQMoatokH-0'
    }
  }
};

/**
 * Default: This shows quote in its default state.
 */

export const Default = {
  render: () => html` <div class="text-left">
    <q class="block mb-6 text-3xl lg:text-4xl leading-tight"
      >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
    >
    <div class="gap-4 flex items-center">
      <img
        class="w-16 h-16 rounded-full overflow-hidden object-cover"
        src="./placeholders/family.jpg"
        alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
      />
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
        <img
          class="w-16 h-16 rounded-full overflow-hidden object-cover"
          src="./placeholders/family.jpg"
          alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
        />
        <div>
          <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
          <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
        </div>
      </div>
      <p class="mt-4 text-sm">4xl</p>
    </div>

    <div class="text-left text-black">
      <q class="block mb-4 text-2xl lg:text-3xl leading-tight"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
      >
      <div class="gap-6 flex items-center">
        <img
          class="w-16 h-16 rounded-full overflow-hidden object-cover"
          src="./placeholders/family.jpg"
          alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
        />
        <div>
          <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
          <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
        </div>
      </div>
      <p class="mt-4 text-sm">3xl</p>
    </div>

    <div class="text-left text-black">
      <q class="block mb-4 text-xl leading-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q>
      <div class="gap-4 flex items-center">
        <img
          class="w-16 h-16 rounded-full overflow-hidden object-cover"
          src="./placeholders/family.jpg"
          alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
        />
        <div>
          <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
          <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
        </div>
      </div>
      <p class="mt-4 text-sm">xl</p>
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
        <img
          class="w-16 h-16 rounded-full overflow-hidden object-cover"
          src="./placeholders/family.jpg"
          alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
        />
        <div>
          <p class="sd-paragraph sd-paragraph--inverted font-bold mb-1">Jane Miller</p>
          <p class="sd-paragraph sd-paragraph--size-sm sd-paragraph--inverted">Job Title</p>
        </div>
      </div>
      <p class="mt-4 text-sm">4xl</p>
    </div>

    <div class="text-left text-white">
      <q class="block mb-4 text-2xl lg:text-3xl leading-tight"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
      >
      <div class="gap-6 flex items-center">
        <img
          class="w-16 h-16 rounded-full overflow-hidden object-cover"
          src="./placeholders/family.jpg"
          alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
        />
        <div>
          <p class="sd-paragraph sd-paragraph--inverted font-bold mb-1">Jane Miller</p>
          <p class="sd-paragraph sd-paragraph--size-sm sd-paragraph--inverted">Job Title</p>
        </div>
      </div>
      <p class="mt-4 text-sm">3xl</p>
    </div>

    <div class="text-left text-white">
      <q class="block mb-4 text-xl leading-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q>
      <div class="gap-4 flex items-center">
        <img
          class="w-16 h-16 rounded-full overflow-hidden object-cover"
          src="./placeholders/family.jpg"
          alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
        />
        <div>
          <p class="sd-paragraph sd-paragraph--inverted font-bold mb-1">Jane Miller</p>
          <p class="sd-paragraph sd-paragraph--size-sm sd-paragraph--inverted">Job Title</p>
        </div>
      </div>
      <p class="mt-4 text-sm">xl</p>
    </div>
  </div>`
};

/**
 * Use the `variant` version to make a quote with or whithout avatatar image.
 */

export const Variant = {
  render: () => html` <div class="flex items-end gap-5">
    <div class="text-left text-black">
      <q class="block mb-6 text-3xl lg:text-4xl leading-tight"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
      >
      <div class="gap-6 flex items-center">
        <img
          class="w-16 h-16 rounded-full overflow-hidden object-cover"
          src="./placeholders/family.jpg"
          alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
        />
        <div>
          <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
          <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
        </div>
      </div>
      <p class="mt-4 text-sm">with profil image</p>
    </div>

    <div class="text-left text-black">
      <q class="block mb-6 text-3xl lg:text-4xl leading-tight"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</q
      >
      <div class="gap-6 flex items-center">
        <img
          class="hidden w-16 h-16 rounded-full overflow-hidden object-cover"
          src="./placeholders/family.jpg"
          alt="A caring father, balancing one child on his shoulder and gently cradling another in his arms."
        />
        <div>
          <p class="sd-paragraph font-bold mb-1">Jane Miller</p>
          <p class="sd-paragraph sd-paragraph--size-sm">Job Title</p>
        </div>
      </div>
      <p class="mt-4 text-sm">without profil image</p>
    </div>
  </div>`
};
