import '../../../../components/src/solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('.sd-skeleton');
const { overrideArgs } = storybookHelpers('.sd-skeleton');
const { generateTemplate } = storybookTemplate('.sd-skeleton');

// HTML helper to get syntax highlighting and formatting in the template string
const html = String.raw;

/**
 * Apply the `sd-skeleton` class to any element to display a loading placeholder that automatically matches the element's dimensions. Remove the class to reveal the real content.
 *
 * **Accessibility:** Wrap all skeleton elements in a container with `inert`, `aria-busy="true"`, and a descriptive `aria-label` (e.g. `"Loading user profile"`). `inert` removes all descendants from the tab order and hides them from assistive technologies; `aria-busy` signals an active update. Remove all three attributes once content has loaded.
 */

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Styles/sd-skeleton',
  component: '.sd-skeleton',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: ''
    }
  },
  args: overrideArgs([]),
  argTypes
};

/**
 * The skeleton automatically adapts to its content's dimensions — it works on headings, paragraphs, buttons (via wrapper div), and bare blocks alike.
 * Use `sd-skeleton--animated` to enable a pulsing animation.
 * Add `inert` to skeleton elements to remove them from the tab order and assistive technology.
 */
export const Default = {
  render: (args: any) => {
    return generateTemplate({
      options: {
        templateContent: html`<div
          class="sd-prose flex flex-col items-start"
          aria-busy="true"
          aria-label="Loading"
          inert
        >
          <h2 class="%CLASSES%">Heading placeholder</h2>
          <p class="%CLASSES%">Paragraph placeholder text that spans a full line.</p>
          <sd-button class="%CLASSES%">Button label</sd-button>
        </div>`
      },
      args
    });
  }
};

/**
 * Use `sd-skeleton--animated` to enable a pulsing animation that communicates an active loading state.
 */
export const Animated = {
  render: () => html`
    <div class="sd-prose flex flex-col items-start" aria-busy="true" aria-label="Loading" inert>
      <h2 class="sd-skeleton sd-skeleton--animated">Heading placeholder</h2>
      <p class="sd-skeleton sd-skeleton--animated">Paragraph placeholder text that spans a full line.</p>
      <sd-button class="sd-skeleton sd-skeleton--animated">Button label</sd-button>
    </div>
  `
};
