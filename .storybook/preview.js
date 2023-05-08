import { setCustomElementsManifest } from '@storybook/web-components';
import 'normalize.css';

async function loadCustomElements() {
  let customElements;

  try {
    const response = await fetch('/custom-elements.json');

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    customElements = await response.json();
  } catch (error) {
    console.log('Failed to fetch custom-elements.json, importing from dist:', error.message);
    customElements = await import('../dist/custom-elements.json');
  }

  setCustomElementsManifest(customElements);
  console.log('Custom elements manifest set', customElements);
}

loadCustomElements();
