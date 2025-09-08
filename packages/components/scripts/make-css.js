/**
 * This script is used to generate the final Utility CSS file for the Solid Components library.
 * It uses PostCSS to process the CSS, including Tailwind CSS, and then writes the final
 * CSS to the `dist` directory and a minified version to the `cdn` directory.
 */

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import fs from 'fs/promises';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import cssnested from 'postcss-nested';

(async () => {
  const lite = process.argv.includes('--lite');
  const path = './src/solid-components.css';
  const css = await fs.readFile(path, 'utf8');

  const content = `@reference '../../tokens/themes/tailwind.css'; ${css}`;

  const result = await postcss([tailwindcss(), cssnested(), autoprefixer])
    .process(content, { from: path })
    .then(result => result.css);

  await fs.writeFile('./dist/solid-components.css', result);

  if (lite) return;

  const minifiedResult = await postcss([tailwindcss(), autoprefixer(), cssnano])
    .process(css, { from: path })
    .then(result => result.css);

  await fs.writeFile('./cdn/solid-components.css', minifiedResult);
})();
