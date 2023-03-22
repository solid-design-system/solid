import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../dist/custom-elements.json';
import { createArgsExtractor, createLitRenderer } from 'cem-plugin-better-lit-types/storybook'
import '../dist/themes/final.css';
import 'normalize.css';

setCustomElementsManifest(customElements);

export const parameters = {
  docs: {
    extractArgTypes: createArgsExtractor(customElements)
  }
}

/**
 * Custom renderer made specially for LitComponents
 */
export const render = createLitRenderer({
  joinArrays: true  // Converts array to a comma-separated string
})
