import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../dist/custom-elements.json';
import '../dist/themes/final.css';
import 'normalize.css';

setCustomElementsManifest(customElements);
