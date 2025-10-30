import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import { globby } from 'globby';
import { processTailwind } from '../../components/scripts/esbuild-plugin-lit-tailwind-and-minify.js';
import commandLineArgs from 'command-line-args';
import path, { dirname } from 'path';

const { outdir, minify } = commandLineArgs([
  { name: 'outdir', type: String },
  { name: 'minify', type: String }
]);

const files = await globby('./src/**/*.css');
const from = path.join(fileURLToPath(import.meta.url), '../../src');

for (const file of files) {
  const css = await fs.readFile(file, 'utf-8');
  const result = await processTailwind(css, { from, minify: minify === 'true' });

  const outputPath = file.replace('src', outdir);
  const outputDir = dirname(outputPath);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, result, 'utf-8');
}
