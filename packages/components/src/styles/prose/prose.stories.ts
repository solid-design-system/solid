import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-prose');
const { overrideArgs } = storybookHelpers('sd-prose');
const { generateTemplate } = storybookTemplate('sd-prose');

// HTML helper to get syntax highlighting and formatting in the template string
const html = String.raw;

/**
 * Used as a set of `prose` classes to choose from in a richtext-editor.
 *
 * The set of style classes enables users to create visually engaging and dynamic content by incorporating various text styles, formatting options, and image embeds.
 */

export default {
  title: 'Styles/sd-prose',
  tags: ['!dev'],
  component: 'sd-prose',
  parameters: {
    ...parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3255-5589&t=VCN0oU7WM1KOC3Zk-4'
    }
  },
  args: overrideArgs({
    type: 'slot',
    name: 'default',
    value:
      '<p>Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis commodo integer hendrerit tortor.</p>'
  }),
  argTypes
};

export const Default = {
  render: (args: { [k: string]: any }) => {
    return generateTemplate({
      options: {
        templateContent: html` <div class=${args['sd-prose--inverted-attr'] === true ? 'bg-primary p-4' : ''}>
          <div class="%CLASSES%">${args['default-slot']}</div>
        </div>`
      },
      args
    });
  }
};

/**
 * Use the `sd-prose` to set a style for a group of elements.
 *
 * - `<h1>`: H1, hidden in cms-modules to make sure H1 is only used once on a page
 * - `<h2>, <h3>, <h4> and <h5>`: H2, H3, H4 and H5
 * - `<p> and <p> <strong>`: Paragraph and Paragraph bold
 * - `<sd-leadtext>`: Leadtext
 * - `<blockquote>`: Quote
 * - `<hr>`: Divider
 * - `<a href>`: Inline Link (text only - no icon before/after)
 * - `<a href> <strong>`: Inline Link bold (text only - no icon before/after)
 * - `<ul> <li> / <ol> <li>`: List (unordered/ordered)
 * - `<figure>`: Image (full-width only – no text wrapping)
 * - `<figcaption>`: Image description
 * - `<table>`: Table
 *
 * **Spacing**
 *
 * Certain combinations have a specific vertical spacing in between:
 * - Headlines after any other element than a headline have a spacing of 32px to the top instead of 16px.
 * - Headlines after a headline have a spacing of 8px to the top instead of 16px.
 * - Figcaption has an additional 8px at the bottom.
 * - Media has an additional 8px at the bottom if followed by any other element than figcaption.
 */

export const StylingOptions = {
  render: () => html`
    <div class="sd-prose sd-prose--full-width flex flex-col gap-8">
      <h1 class="sd-headline">H1 - Nisi eu excepteur anim esse</h1>
      <h2 class="sd-headline sd-headline--size-3xl">H2 - Nisi eu excepteur anim esse</h2>
      <h3 class="sd-headline sd-headline--size-xl">H3 - Nisi eu excepteur anim esse</h3>
      <h4 class="sd-headline sd-headline--size-lg">H4 - Nisi eu excepteur anim esse</h4>
      <h5 class="sd-headline sd-headline--size-base">H5 - Nisi eu excepteur anim esse</h5>
      <p class="sd-paragraph">
        Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
        phasellus dui vel id.
      </p>
      <p class="sd-paragraph">
        <strong>
          Paragraph Bold - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor
          molestie phasellus dui vel id.
        </strong>
      </p>
      <p class="sd-leadtext">
        Leadtext - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
        phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
        Facilisis commodo integer hendrerit tortor.
      </p>
      <blockquote>Blockquote - Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</blockquote>
      <sd-divider></sd-divider>
      <sd-link href="https://www.union-investment.de/">Inline link</sd-link>
      <sd-link href="https://www.union-investment.de/"><strong>Inline link strong</strong></sd-link>
      <ul>
        <li>
          Unordered list level 1
          <ul>
            <li>
              Unordered list level 2
              <ul>
                <li>Unordered list level 3</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Unordered list level 1</li>
        <li>Unordered list level 1</li>
      </ul>
      <figure class="sd-media p-4">
        <img
          src="./placeholders/images/generic.jpg"
          alt="A generic placeholder jpg"
          class="aspect-video object-cover"
        />
        <figcaption>
          Figcaption - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
        </figcaption>
      </figure>
      <table class="sd-table">
        <thead>
          <tr>
            <th class="sd-table-cell">Header</th>
            <th class="sd-table-cell">Header</th>
            <th class="sd-table-cell">Header</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="sd-table-cell">Cell Content</td>
            <td class="sd-table-cell">Cell Content</td>
            <td class="sd-table-cell">Cell Content</td>
          </tr>
          <tr>
            <td class="sd-table-cell">Cell Content</td>
            <td class="sd-table-cell">Cell Content</td>
            <td class="sd-table-cell">Cell Content</td>
          </tr>
          <tr>
            <td class="sd-table-cell">Cell Content</td>
            <td class="sd-table-cell">Cell Content</td>
            <td class="sd-table-cell">Cell Content</td>
          </tr>
          <tr>
            <td class="sd-table-cell">Cell Content</td>
            <td class="sd-table-cell">Cell Content</td>
            <td class="sd-table-cell">Cell Content</td>
          </tr>
          <tr>
            <td class="sd-table-cell">Cell Content</td>
            <td class="sd-table-cell">Cell Content</td>
            <td class="sd-table-cell">Cell Content</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
};

/**
 * Use the `&--full-width` class to make the prose full width.
 */
export const FullWidth = {
  render: () =>
    html` <div class="flex flex-col space-y-8">
      <div class="sd-prose">
        <h4>Default width</h4>
        <p class="sd-paragraph">
          Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
          phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
          Facilisis commodo integer hendrerit tortor.
        </p>
      </div>
      <div class="sd-prose sd-prose--full-width">
        <h4>Full width</h4>
        <p class="sd-paragraph">
          Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
          phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
          Facilisis commodo integer hendrerit tortor.
        </p>
      </div>
    </div>`
};

/**
 * Use the `&--inverted` class when displayed on primary background.
 */
export const Inverted = {
  render: () => html`
    <div class="bg-primary p-4 sd-prose sd-prose--inverted">
      <p class="sd-paragraph">
        Large Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
        phasellus dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique.
        Facilisis commodo integer hendrerit tortor.
      </p>
    </div>
  `
};
