import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../dist/custom-elements.json';
import { createArgsExtractor, createLitRenderer } from 'cem-plugin-better-lit-types/storybook'

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
  wrapSlots: true, // Wraps a non-default slot in `<span slot="name">`
  joinArrays: true  // Converts array to a comma-separated string
})
