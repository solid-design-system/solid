import { setCustomElementsManifest } from '@storybook/web-components';
// import '../dist/themes/final.css';
import 'normalize.css';

fetch('/custom-elements.json')
  .then(res => res.json())
  .then(customElements => { setCustomElementsManifest(customElements); console.log('Custom elements manifest set', customElements) })
