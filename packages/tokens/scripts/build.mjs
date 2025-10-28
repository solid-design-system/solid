import { buildStylesheet, getFigmaVariables, getStylesheetThemes, nextTask } from './utils.js';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { extractComponentsBlock } from './tailwind/index.js';
import { FigmaClient } from './figma/index.js';
import { generateScss } from './scss/index.js';
import { minimizeCss } from '../../components/scripts/esbuild-plugin-lit-tailwind-and-minify.js';
import path from 'node:path';

const outdir = 'dist';
const cdndir = 'cdn';
let stylesheet;
let themes;
let themejs;

const config = {
  input: 'figma-variables.json',
  output: 'tailwind',
  defaultTheme: 'ui-light',
  buildPath: './themes',
  themeBlock: 'build:theme',
  componentsBlock: 'build:components'
};

async function runBuild() {
  await nextTask('Processing figma variables', () => {
    const figma = new FigmaClient('figma-variables', getFigmaVariables());
    figma.process().save();
  });

  await nextTask('Building the main stylesheet', async () => {
    stylesheet = await buildStylesheet({
      buildPath: config.buildPath,
      input: config.input,
      output: config.output,
      defaultTheme: config.defaultTheme
    });
  });

  await nextTask('Extracting themes', () => {
    themes = getStylesheetThemes(stylesheet, config);
    themes.forEach(theme => {
      stylesheet = stylesheet
        .replace(theme.content, '')
        .replace(`/* ${config.themeBlock}[${theme.name}] */`, '')
        .replace(`/* ${config.themeBlock} */`, '')
        .trim();

      const iconsPath = `${config.buildPath}/${theme.name}/icons.css`;
      if (existsSync(iconsPath)) {
        const icons = readFileSync(iconsPath, { encoding: 'utf-8' });
        theme.content = `${theme.content.trim()}\n\n${icons.replaceAll('--sd-icon-', `--sd-icon--${theme.name}-`)}`;
      }

      theme.content = theme.content.trim();

      mkdirSync(`${config.buildPath}/${theme.name}`, { recursive: true });
      writeFileSync(`${config.buildPath}/${config.output}.css`, stylesheet);
      writeFileSync(`${config.buildPath}/${theme.name}/${theme.name}.css`, theme.content);
    });
  });

  await nextTask('Extracting component variables', () => {
    const components = extractComponentsBlock(stylesheet);
    stylesheet = stylesheet.replace(components.content, '').replaceAll(`/* ${config.componentsBlock} */`, '').trim();
    writeFileSync(`${config.buildPath}/${config.output}.css`, stylesheet);
    writeFileSync(`${config.buildPath}/components.css`, components.content.trim());
  });

  await nextTask(`Creating ${outdir} output`, () => {
    themes.forEach(theme => {
      mkdirSync(`./${outdir}/${config.buildPath}/${theme.name}`, { recursive: true });
      writeFileSync(`./${outdir}/${config.buildPath}/${theme.name}/${theme.name}.css`, theme.content);
    });

    writeFileSync(`./${outdir}/${config.buildPath}/${config.output}.css`, stylesheet);
  });

  await nextTask(`Creating ${cdndir} output`, () => {
    themes.forEach(theme => {
      mkdirSync(`./${cdndir}/${config.buildPath}/${theme.name}`, { recursive: true });
      writeFileSync(`./${cdndir}/${config.buildPath}/${theme.name}/${theme.name}.css`, minimizeCss(theme.content));
    });

    writeFileSync(`./${cdndir}/${config.buildPath}/${config.output}.css`, minimizeCss(stylesheet));
  });

  await nextTask('Generating theme.js', async () => {
    themejs = (await import('../src/theme.mjs')).default;
    mkdirSync(`./${outdir}`, { recursive: true });
    writeFileSync(path.resolve(`./${outdir}`, './theme.js'), `export default ${JSON.stringify(themejs)}`);
  });

  await nextTask('Generating tokens.scss', () => {
    const scss = generateScss(themejs);
    writeFileSync(path.resolve(`./${outdir}`, './tokens.scss'), scss);
  });

  process.exit();
}

runBuild();

process.on('SIGINT', process.exit);
process.on('SIGTERM', process.exit);
