import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../dist/custom-elements.json';
import '../dist/themes/light.css';
import 'normalize.css';

setCustomElementsManifest(customElements);
