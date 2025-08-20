import { dirname } from 'path';
import { promises as fs } from 'fs';
import { globby } from 'globby';
import atImportPlugin from 'postcss-import';
import autoprefixer from 'autoprefixer';
import commandLineArgs from 'command-line-args';
import cssnano from 'cssnano';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });

const runner = postcss(
  outdir === 'dist'
    ? [atImportPlugin(), tailwindcss, autoprefixer()]
    : [atImportPlugin(), tailwindcss, autoprefixer(), cssnano]
);

const files = await globby('./src/**/*.css');

for (const file of files) {
  const css = await fs.readFile(file, 'utf-8');

  // Process the CSS file with PostCSS
  const result = await runner.process(css, {
    from: file,
    to: file.replace('src', outdir)
  });

  // Determine the output path and ensure the directory exists
  const outputPath = file.replace('src', outdir);
  const outputDir = dirname(outputPath);
  await fs.mkdir(outputDir, { recursive: true });

  const cleanedCSS = result.css
    // Remove fallbacks
    .replaceAll(`--tw-bg-opacity: 1;`, '')
    .replaceAll(`--tw-text-opacity: 1;`, '');

  // Write the processed CSS to the output file
  await fs.writeFile(outputPath, cleanedCSS, 'utf-8');
}
