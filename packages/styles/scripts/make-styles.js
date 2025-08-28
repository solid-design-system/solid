import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import { globby } from 'globby';
import autoprefixer from 'autoprefixer';
import commandLineArgs from 'command-line-args';
import cssnano from 'cssnano';
import cssnested from 'postcss-nested';
import path, { dirname } from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });

const runner = postcss(
  outdir === 'dist'
    ? [tailwindcss(), cssnested(), autoprefixer()]
    : [tailwindcss(), cssnested(), autoprefixer(), cssnano]
);

const files = await globby('./src/**/*.css');

for (const file of files) {
  const css = await fs.readFile(file, 'utf-8');
  const tailwind = path.join(fileURLToPath(import.meta.url), '../../../tokens/themes/tailwind.css');

  const result = await runner.process(`@reference '${tailwind}'; ${css}`, {
    from: file,
    to: file.replace('src', outdir)
  });

  const outputPath = file.replace('src', outdir);
  const outputDir = dirname(outputPath);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, result.css, 'utf-8');
}
