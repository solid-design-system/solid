import '../solid-components';
import { html } from 'lit-html';

/**
 * Examples of the `sd-expandable` component in different backgrounds or with different variants.
 * Can be used with background options of `white`, `neutral-100` and `primary-100`.
 * When using these options, use the `--gradient-color-start` and `--gradient-color-end` CSS variables to align the gradient colors.
 *
 */

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
 * Using`white` background.
 *
 */
export const Default = {
  name: 'Expandable in white background',
  render: () => html`
    <div class="background-sample">
      <sd-expandable>
        <div class="slot slot--border slot--text h-16">Default slot</div>
      </sd-expandable>
    </div>
  `
};

/**
 * Using `neutral-100` background.
 */

export const ExpandableWithNeutralBackground = {
  name: 'Expandable in neutral background',
  render: () =>
    html` <div class="background-sample bg-neutral-100 p-4">
      <sd-expandable
        style="--gradient-color-start: rgba(246, 246, 246, 0);--gradient-color-end: rgba(246, 246, 246, 1)"
      >
        <div class="slot slot--border slot--text h-16">Default slot</div>
      </sd-expandable>
    </div>`
};

/**
 * Using `primary-100` background.
 */

export const ExpandableWithPrimaryBackground = {
  name: 'Expandable in primary background',
  render: () =>
    html`<div class="background-sample bg-primary-100 p-4">
      <sd-expandable
        style="--gradient-color-start: rgba(236, 240, 249, 0);--gradient-color-end: rgba(236, 240, 249, 1)"
      >
        <div class="slot slot--border slot--text h-16">Default slot</div>
      </sd-expandable>
    </div>`
};

/**
 * Using `primary-100` background with inverted colors.
 */

export const ExpandableWithPrimaryInvertedBackground = {
  name: 'Expandable in primary background, inverted',
  render: () =>
    html`<div class="background-sample bg-primary p-4">
      <sd-expandable inverted>
        <div class="slot slot--border slot--text h-16">Default slot</div>
      </sd-expandable>
    </div>`
};

/**
 * The default slot can be used with `lead text` for alternate expandable experiences.
 */

export const ExpandableWithLeadText = {
  name: 'Expandable with lead text',
  render: () =>
    html`<div class="background-sample bg-neutral-100 p-4">
      <sd-expandable
        style="--gradient-color-start: rgba(246, 246, 246, 0);--gradient-color-end: rgba(246, 246, 246, 1)"
      >
        <div class="sd-leadtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis
          commodo integer hendrerit tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo
          ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non
          tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
        </div>
      </sd-expandable>
    </div>`
};

/**
 * The default slot can be used with `paragraph` for alternate expandable experiences.
 */

export const ExpandableWithParagraph = {
  name: 'Expandable with paragraph',
  render: () =>
    html`<div class="background-sample bg-neutral-100 p-4">
      <sd-expandable
        style="--gradient-color-start: rgba(246, 246, 246, 0);--gradient-color-end: rgba(246, 246, 246, 1)"
      >
        <div class="sd-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
          dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis
          commodo integer hendrerit tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo
          ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non
          tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.
        </div>
      </sd-expandable>
    </div>`
};
