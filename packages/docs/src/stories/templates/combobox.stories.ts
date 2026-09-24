import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { highlightOptionRenderer } from '../../../../components/src/components/combobox/option-renderer';

const fonds = [
  'UniDeutschland XS',
  'UniEM Global A',
  'UniEuroKapital -net-',
  'UniEuroKapital Corporates A',
  'UniGlobal Vorsorge'
].sort();

const createFondsOption = (fonds: string) => `<sd-option value="${fonds.replaceAll(' ', '_')}">${fonds}</sd-option>`;

const createFondsOptions = () => fonds.map(createFondsOption);

const createFondsOptionsHtml = () => unsafeHTML(createFondsOptions().join('\n'));

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Combobox',
  parameters: {
    relatedLinks: ['components/sd-combobox', 'components/sd-optgroup'],
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=9809-70407&node-type=section&t=5OiI2e0LLVUGyk2I-0'
    }
  }
};

/**
 * Example of how to use the combobox to filter a list of options as the user types. The dropdown displays matching results in real time, narrowing the visible options based on the current input.
 */
export const SimpleSuggests = {
  name: 'Combobox Simple Suggests',
  render: () => html`
    <div class="h-[260px] max-w-[400px]">
      <sd-combobox label="Funds"> ${createFondsOptionsHtml()} </sd-combobox>
    </div>
  `
};

/**
 * Example of how to enhance combobox suggestions by bolding the portion of each option that matches the current query. This helps users quickly see why a result was returned and confirms the input is being recognized correctly.
 *
 * The filtered options shown in the list can be customized by passing a function to the getOption property. Your function can return a string of HTML, a Lit Template, or an HTMLElement. The getOption() function will be called for each option. The first argument is an element and the second argument is the query string. Remember that the options are rendered in a shadow root. To style them, you can use the style attribute in your template or you can add your own parts and target them with the ::part() selector. Note: Be sure you trust the content you are outputting! Passing unsanitized user input to getOption() can result in XSS vulnerabilities.
 */
export const HighlightQuery = {
  name: 'Combobox Highlight Query',
  render: () => {
    const optionRenderer = highlightOptionRenderer;
    return html`
      <div class="h-[260px] max-w-[400px]">
        <sd-combobox label="Funds" class="highlight-combobox" value="g"> ${createFondsOptionsHtml()} </sd-combobox>
      </div>
      <script type="module">
        // the highlight option renderer utility function can be imported via:
        // import { highlightOptionRenderer } from '@solid-design-system/components';

        // preview-ignore:start
        const highlightOptionRenderer = ${optionRenderer};
        // preview-ignore:end

        const comboboxes = document.querySelectorAll('.highlight-combobox');
        comboboxes.forEach(combobox => {
          combobox.getOption = highlightOptionRenderer;
        });
      </script>
    `;
  }
};

/**
 * Example of how to organize combobox suggestions into labeled groups using sd-optgroup. The dropdown separates results into distinct categories making it easier to scan results when they come from multiple sources.
 *
 * Use <sd-optgroup> to group <sd-option>s visually.
 *
 * __Accessibility Hint:__
 *  Label can be omitted for search input fields if a button (e.g., aria-label="Search") with a search icon is present.
 */
export const GroupingQuery = {
  name: 'Combobox Grouping Query',
  render: () => html`
    <div class="h-[260px] max-w-[400px]">
      <sd-combobox label="Group elements" type="search" value="g">
        <sd-optgroup label="Funds"> ${createFondsOptionsHtml()} </sd-optgroup>
        <sd-optgroup label="Search Suggestions">
          <sd-option value="uniabsoluterertrag">UniAbsoluterErtrag</sd-option>
          <sd-option value="uniasia">UniAsia</sd-option>
        </sd-optgroup>
      </sd-combobox>
    </div>
  `
};

/**
 * In this use case, the heading, supporting question, search icon, and placeholder work together to reinforce the
 * field's purpose visually — but WCAG 2.2 compliance itself rests on the hidden label being implemented correctly.
 * To meet minimum compliance, pass the label through the `label` slot and hide it with the `sr-only` class. An
 * `aria-label` on `<sd-combobox>` is not forwarded to the inner input and therefore provides no accessible name.
 */
export const VisuallyHiddenLabel = {
  name: 'Combobox with Visually Hidden Label',
  render: () => html`
    <div class="h-[340px] max-w-[400px]">
      <h4 class="text-primary font-bold text-xl mb-4">New transfer</h4>

      <p class="text-sm mb-4">Who do you want to send money to?</p>

      <sd-combobox type="search" placeholder="Please select">
        <span slot="label" class="sr-only">Search recipients</span>
        ${createFondsOptionsHtml()}
      </sd-combobox>
    </div>
  `
};
