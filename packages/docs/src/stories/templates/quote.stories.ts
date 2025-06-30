import '../../../../components/src/solid-components';
import { html } from 'lit-html';

/**
 * **Accessibility Information:**
 * Use the `<blockquote>` HTML element for block quotes and the `<q>` HTML element for short inline quotes.
 */
export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Quote',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3733-14276&t=JCsisVFNkWSlhSSN-4'
    }
  }
};

export const Size = {
  render: () =>
    html` <p class="sd-display mb-6">size 4xl</p>
      <div class="text-left text-black mb-12">
        <blockquote class="mb-4 text-3xl lg:text-4xl leading-tight">
          “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and
          high-quality user interfaces. It includes well-documented components, design tokens, and accessibility
          features, ensuring seamless integration across platforms.”
        </blockquote>
        <div class="gap-6 flex items-center">
          <img
            class="w-16 h-16 rounded-full overflow-hidden object-cover"
            src="./placeholders/images/profile.png"
            alt=""
          />
          <div>
            <p class="sd-paragraph font-bold mb-1">Jane Doe</p>
            <p class="sd-paragraph sd-paragraph--size-sm">Team Member of SDS</p>
          </div>
        </div>
      </div>
      <p class="sd-display mb-6">size 3xl</p>
      <div class="text-left text-black mb-12">
        <blockquote class="block mb-4 text-2xl lg:text-3xl leading-tight">
          “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and
          high-quality user interfaces. It includes well-documented components, design tokens, and accessibility
          features, ensuring seamless integration across platforms.”
        </blockquote>
        <div class="gap-6 flex items-center">
          <img
            class="w-16 h-16 rounded-full overflow-hidden object-cover"
            src="./placeholders/images/profile.png"
            alt=""
          />
          <div>
            <p class="sd-paragraph font-bold mb-1">Jane Doe</p>
            <p class="sd-paragraph sd-paragraph--size-sm">Team Member of SDS</p>
          </div>
        </div>
      </div>
      <p class="sd-display mb-6">size xl</p>
      <div class="text-left text-black">
        <blockquote class="block mb-4 text-xl leading-tight">
          “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and
          high-quality user interfaces. It includes well-documented components, design tokens, and accessibility
          features, ensuring seamless integration across platforms.”
        </blockquote>
        <div class="gap-4 flex items-center">
          <img
            class="w-16 h-16 rounded-full overflow-hidden object-cover"
            src="./placeholders/images/profile.png"
            alt=""
          />
          <div>
            <p class="sd-paragraph font-bold mb-1">Jane Doe</p>
            <p class="sd-paragraph sd-paragraph--size-sm">Team Member of SDS</p>
          </div>
        </div>
      </div>`
};

export const Inverted = {
  name: 'Quote Inverted',
  render: () =>
    html` <div class="flex items-end gap-5 p-5 bg-primary">
      <div class="text-left text-white">
        <blockquote class="block mb-4 text-3xl lg:text-4xl leading-tight">
          “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and
          high-quality user interfaces. It includes well-documented components, design tokens, and accessibility
          features, ensuring seamless integration across platforms.”
        </blockquote>
        <div class="gap-6 flex items-center">
          <img
            class="w-16 h-16 rounded-full overflow-hidden object-cover"
            src="./placeholders/images/profile.png"
            alt=""
          />
          <div>
            <p class="sd-paragraph sd-paragraph--inverted font-bold mb-1">Jane Doe</p>
            <p class="sd-paragraph sd-paragraph--inverted sd-paragraph--size-sm">Team Member of SDS</p>
          </div>
        </div>
      </div>
    </div>`
};

export const QuoteWithoutProfileImage = {
  name: 'Quote without Profile Image',
  render: () =>
    html` <div class="text-left text-black">
      <blockquote class="block mb-6 text-3xl lg:text-4xl leading-tight">
        “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and
        high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features,
        ensuring seamless integration across platforms.”
      </blockquote>
      <div>
        <p class="sd-paragraph font-bold mb-1">Jane Doe</p>
        <p class="sd-paragraph sd-paragraph--size-sm">Team Member of SDS</p>
      </div>
    </div>`
};
