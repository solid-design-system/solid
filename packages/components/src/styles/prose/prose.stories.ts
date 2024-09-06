import '../../solid-components';
import { storybookDefaults, storybookHelpers, storybookTemplate } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-prose');
const { overrideArgs } = storybookHelpers('sd-prose');
const { generateTemplate } = storybookTemplate('sd-prose');

// HTML helper to get syntax highlighting and formatting in the template string
const html = String.raw;

/**
 * Used to provide a set of `prose` classes to choose from in a richtext-editor.
 */

export default {
  title: 'Styles/sd-prose',
  tags: ['!dev'],
  component: 'sd-prose',
  parameters: {
    ...parameters
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
        templateContent: html` <div ${args['sd-prose--inverted-attr'] === true ? 'class="bg-primary p-4"' : ''}>
          <div class="%CLASSES%">${args['default-slot']}</div>
        </div>`
      },
      args
    });
  }
};

/**
 * - `<h1>`: H1, hidden in cms-modules to make sure H1 is only used once on a page
 * - `<h2>, <h3>, <h4> and <h5>`: H2, H3, H4 and H5
 * - `<p> and <p> <strong>`: Paragraph and Paragraph bold
 * - `<sd-leadtext>`: Leadtext
 * - `<blockquote>`: Quote
 * - `<hr>`: Divider
 * - `<a href >`: Link (text only - no icon before/after)
 * - `<ul> <li> / <ol> <li>`: List (unordered/ordered)
 * - `<figure>`: Image (full-width only – no text wrapping)
 * - `<figcaption>`: Image description
 * - `<table>`: Table
 *
 * The set of style classes enables users to create visually engaging and dynamic content by incorporating various text styles, formatting options, and image embeds.
 *
 * ### Spacing
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
      <h1 class="sd-headline">H1 Nisi eu excepteur anim esse</h1>
      <h2 class="sd-headline sd-headline--size-3xl">H2 Nisi eu excepteur anim esse</h2>
      <h3 class="sd-headline sd-headline--size-xl">H3 Nisi eu excepteur anim esse</h3>
      <h4 class="sd-headline sd-headline--size-lg">H4 Nisi eu excepteur anim esse</h4>
      <h5 class="sd-headline sd-headline--size-base">H5 Nisi eu excepteur anim esse</h5>
      <p class="sd-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
        dui vel id.
      </p>
      <p class="sd-paragraph">
        <b
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie
          phasellus dui vel id.</b
        >
      </p>
      <p class="sd-leadtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh justo ullamcorper odio tempor molestie phasellus
        dui vel id. Velit in sed non orci pellentesque vivamus nunc. At non tortor, sit neque tristique. Facilisis
        commodo integer hendrerit tortor.
      </p>
      <blockquote>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</blockquote>
      <sd-divider></sd-divider>
      <sd-link href="https://www.union-investment.de/">Link</sd-link>
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
        <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula</figcaption>
      </figure>
      <table class="sd-table" style="width: 100%">
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
 * Use the `sd-prose--full-width` class to make the prose full width.
 */
export const FullWidth = {
  render: () =>
    html` <div class="sd-prose mb-8">
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
