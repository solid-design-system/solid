import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Expandable',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/owNwnmTLTH7rDD4kOyGJK9/Expandable?node-id=0-1&t=8M0kKNRUhCykqrGj-0'
    }
  }
};

/**
 * - `white`
 * - `neutral-100`
 * - `primary-100`
 * - `primary (if inverted)`
 */

export const BackgroundOptions = {
  name: 'Background options',
  render: () =>
    html`<div class="flex flex-col gap-4">
      <div class="background-sample">
        <sd-expandable>
          <div class="sd-paragraph h-full">
            For us, diversity equals strength. By taking the views and experiences of a wide range of people into
            account, we provide room for creative solutions and ensure that we are equipped for the future. A diverse
            and inclusive working environment is important to us. We benefit from the perspectives of different genders,
            age groups, educational levels and backgrounds, thus guaranteeing that we are successful together.
          </div>
        </sd-expandable>
      </div>
      <div class="background-sample bg-neutral-100 p-4">
        <sd-expandable
          style="--gradient-color-start: rgba(246, 246, 246, 0);--gradient-color-end: rgba(246, 246, 246, 1)"
        >
          <div class="sd-paragraph h-full">
            For us, diversity equals strength. By taking the views and experiences of a wide range of people into
            account, we provide room for creative solutions and ensure that we are equipped for the future. A diverse
            and inclusive working environment is important to us. We benefit from the perspectives of different genders,
            age groups, educational levels and backgrounds, thus guaranteeing that we are successful together.
          </div>
        </sd-expandable>
      </div>
      <div class="background-sample bg-primary-100 p-4">
        <sd-expandable
          style="--gradient-color-start: rgba(236, 240, 249, 0);--gradient-color-end: rgba(236, 240, 249, 1)"
        >
          <div class="sd-paragraph h-full">
            For us, diversity equals strength. By taking the views and experiences of a wide range of people into
            account, we provide room for creative solutions and ensure that we are equipped for the future. A diverse
            and inclusive working environment is important to us. We benefit from the perspectives of different genders,
            age groups, educational levels and backgrounds, thus guaranteeing that we are successful together.
          </div>
        </sd-expandable>
      </div>
      <div class="background-sample bg-primary p-4">
        <sd-expandable inverted>
          <div class="sd-paragraph h-full ext-white">
            For us, diversity equals strength. By taking the views and experiences of a wide range of people into
            account, we provide room for creative solutions and ensure that we are equipped for the future. A diverse
            and inclusive working environment is important to us. We benefit from the perspectives of different genders,
            age groups, educational levels and backgrounds, thus guaranteeing that we are successful together.
          </div>
        </sd-expandable>
      </div>
    </div> `
};

/**
 * - `lead text` (default)
 * - `paragraph`
 */

export const FontStyleOptions = {
  name: 'Font style options',
  render: () =>
    html`<div class="flex flex-col gap-4">
      <div class="background-sample bg-neutral-100 p-4">
        <sd-expandable
          style="--gradient-color-start: rgba(246, 246, 246, 0);--gradient-color-end: rgba(246, 246, 246, 1)"
        >
          <div class="sd-leadtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
            phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
            Facilisis commodo integer hendrerit tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
            justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus
            nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
          </div>
        </sd-expandable>
      </div>
      <div class="background-sample bg-neutral-100 p-4">
        <sd-expandable
          style="--gradient-color-start: rgba(246, 246, 246, 0);--gradient-color-end: rgba(246, 246, 246, 1)"
        >
          <div class="sd-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
            phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
            Facilisis commodo integer hendrerit tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
            justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus
            nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
          </div>
        </sd-expandable>
      </div>
    </div>`
};
