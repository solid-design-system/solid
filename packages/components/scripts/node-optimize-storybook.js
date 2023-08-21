import { fetchStyleComponents } from './storybook/styles-helper';
import { promises as fs } from 'fs';

/**
 * Storybook Custom Elements Manifest Enhancer
 *
 * In the development environment, the `custom-elements.json` loads without issues. However, when deployed in
 * production with Storybook, inconsistencies in loading were observed. This script serves as a mitigation step
 * ensuring the manifest is enriched with `styleComponents` and reliably placed for Storybook.
 */

async function enhanceCustomElementManifest() {
  // Read the existing custom-elements.json file
  async function readCustomElements() {
    const data = await fs.readFile('./dist/custom-elements.json', 'utf-8');
    return JSON.parse(data);
  }

  // Save the modified custom-elements.json to dist/storybook/
  async function saveToStorybook(customElements) {
    const outputPath = './dist/storybook/custom-elements.json';
    const data = JSON.stringify(customElements);
    await fs.writeFile(outputPath, data, 'utf-8');
    console.log(`✅ Styles added to Custom Elements Manifest into ${outputPath}`);
  }

  try {
    const customElements = await readCustomElements();
    const styleComponents = await fetchStyleComponents();

    customElements.modules = [...customElements?.modules, ...styleComponents];
    await saveToStorybook(customElements);
  } catch (error) {
    console.error('Error processing the file:', error);
  }
}

enhanceCustomElementManifest();
