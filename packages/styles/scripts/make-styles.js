import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import { globby } from 'globby';
import { processTailwind } from '../../components/scripts/esbuild-plugin-lit-tailwind-and-minify.js';
import commandLineArgs from 'command-line-args';
import path, { dirname } from 'path';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });

const files = await globby('./src/**/*.css');
const from = path.join(fileURLToPath(import.meta.url), '../../src');

for (const file of files) {
  const css = await fs.readFile(file, 'utf-8');
  const tailwind = path.join(fileURLToPath(import.meta.url), '../../../tokens/themes/tailwind.css');

  const result = await processTailwind(`@reference '${tailwind}'; ${css}`, { from, minify: outdir !== 'dist' });

  const outputPath = file.replace('src', outdir);
  const outputDir = dirname(outputPath);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, result, 'utf-8');
}
