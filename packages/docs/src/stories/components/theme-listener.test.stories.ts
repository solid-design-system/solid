import '../../../../components/src/solid-components';
import { html } from 'lit-html';
import { storybookDefaults, storybookUtilities } from '../../../scripts/storybook/helper';

const { argTypes, parameters } = storybookDefaults('sd-theme-listener');
const { generateScreenshotStory } = storybookUtilities;

/**
 * Components that react to themes read the theme of their own area.
 * These screenshots make sure multiple and nested themes on the same page keep working.
 */
export default {
  title: 'Utilities/sd-theme-listener/Screenshots: sd-theme-listener',
  component: 'sd-theme-listener',
  tags: ['!autodocs'],
  argTypes,
  parameters: {
    ...parameters,
    controls: { disable: true }
  }
};

const themes = ['sd-theme-ui-light', 'sd-theme-ui-dark', 'sd-theme-vb', 'sd-theme-bb', 'sd-theme-sp'];

const themedContent = (theme: string) => html`
  <span class="text-sm">${theme}</span>
  <div class="flex gap-4">
    <sd-icon library="sd-multi-theming" name="content/calculator" class="text-[48px]" label="Calculator"></sd-icon>
    <sd-icon library="sd-multi-theming" name="system/home" class="text-[48px]" label="Home"></sd-icon>
  </div>
  <sd-button>Button</sd-button>
`;

export const MultipleThemes = {
  name: 'Multiple themes on one page',
  render: () => html`
    <div class="flex flex-wrap gap-4">
      ${themes.map(
        theme =>
          html`<div class="${theme} flex flex-col items-start gap-4 bg-white p-4 text-black">
            ${themedContent(theme)}
          </div>`
      )}
    </div>
  `
};

export const NestedThemes = {
  name: 'Nested themes',
  render: () => html`
    <div class="sd-theme-bb flex flex-wrap gap-4 bg-white p-4 text-black">
      <div class="flex flex-col items-start gap-4">${themedContent('sd-theme-bb')}</div>
      <div class="sd-theme-ui-dark flex flex-col items-start gap-4 bg-white p-4 text-black">
        ${themedContent('sd-theme-ui-dark (inside sd-theme-bb)')}
      </div>
    </div>
  `
};

/**
 * The themes are set by the wrappers inside the story, so one snapshot is enough.
 */
export const Combination = generateScreenshotStory([MultipleThemes, NestedThemes], {
  additionalChromaticOptions: { modes: { 'sd-theme-ui-light': { theme: 'UI Light' } } }
});
