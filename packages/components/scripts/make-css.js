/**
 * This script is used to generate the final Utility CSS file for the Solid Components library.
 * It uses PostCSS to process the CSS, including Tailwind CSS, and then writes the final
 * CSS to the `dist` directory and a minified version to the `cdn` directory.
 */

import fs from 'fs/promises';
import { processTailwind } from './esbuild-plugin-lit-tailwind-and-minify.js';

(async () => {
  const lite = process.argv.includes('--lite');
  const path = './src/solid-components.css';
  const css = await fs.readFile(path, 'utf8');

  const result = await processTailwind(css);
  await fs.writeFile('./dist/solid-components.css', result);

  if (lite) return;

  const minified = await processTailwind(css, { minify: true });
  await fs.writeFile('./cdn/solid-components.css', minified);
})();
