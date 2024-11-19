import { readFile, writeFile } from 'fs/promises';
import { globby } from 'globby';
import postcss from 'postcss';
import atImportPlugin from 'postcss-import';
import { getDirName, getPath, job } from '../shared.js';
import tailwindcss from 'tailwindcss';
import tailwindCssNesting from '@tailwindcss/nesting';
import tailwindConfig from '../../tailwind.config.cjs';
import autoprefixer from 'autoprefixer';

/**
 * Get the output path used in postcss for the given input path
 * @example
 * getDistName('./src/typography/index.css'); // <- './dist/typography.css'
 * @param {string} inputPath The path to the input file
 * @returns {string} outputPath
 */
const getDistName = inputPath => {
  const dirName = getDirName(inputPath);

  // Special case for the root node:
  // We do not want to have a file named src.css, but index.css
  // for this special bundle file.
  if (inputPath === './src/index.css') {
    return './dist/index.css';
  }

  return `./dist/${dirName}.css`;
};

export const runPostCSS = job('Running PostCSS', async () => {
  const runner = postcss([
    atImportPlugin({
      allowDuplicates: false
    }),
    tailwindCssNesting(),
    tailwindcss(tailwindConfig),
    autoprefixer()
  ]);

  // Get a list of files that we want to process
  const indexFiles = await globby('./src/**/index.css');

  const filesToTransform = await Promise.all(
    indexFiles.map(async indexFile => ({
      css: await readFile(getPath(indexFile), {
        encoding: 'utf-8'
      }),
      from: indexFile,
      to: getDistName(indexFile)
    }))
  );

  return Promise.all(
    filesToTransform.map(async ({ css, from, to }) => {
      const result = await runner.process(css, {
        from,
        to
      });

      await writeFile(to, result.css, {
        encoding: 'utf-8'
      });
    })
  );
});
