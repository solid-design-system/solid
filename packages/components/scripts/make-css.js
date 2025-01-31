/**
 * This script is used to generate the final Utility CSS file for the Solid Components library.
 * It uses PostCSS to process the CSS, including Tailwind CSS, and then writes the final
 * CSS to the `dist` directory and a minified version to the `cdn` directory.
 */

import atImportPlugin from 'postcss-import';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import fs from 'fs/promises';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting/index.js';

(async () => {
  const lite = process.argv.includes('--lite');
  const css = await fs.readFile('./src/solid-components.css', 'utf8');

  const result = await postcss([
    atImportPlugin({ allowDuplicates: false }),
    tailwindcssNesting,
    tailwindcss,
    autoprefixer
  ])
    .process(css, { from: undefined })
    .then(result => result.css);

  await fs.writeFile('./dist/solid-components.css', result);

  if (lite) return;

  const minifiedResult = await postcss([
    atImportPlugin({ allowDuplicates: false }),
    tailwindcssNesting,
    tailwindcss,
    autoprefixer,
    cssnano
  ])
    .process(css, { from: undefined })
    .then(result => result.css);

  await fs.writeFile('./cdn/solid-components.css', minifiedResult);
})();
