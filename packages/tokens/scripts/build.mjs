import { createTailwindV4Plugin, extractComponentsBlock, extractThemeBlock } from './tailwind/index.js';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { FigmaClient } from './figma/index.js';
import { fileURLToPath } from 'url';
import { generateScss } from './scss/index.js';
import { minimizeCss } from '../../components/scripts/esbuild-plugin-lit-tailwind-and-minify.js';
import { OUTPUT_DIR } from './config.js';
import { register } from '@tokens-studio/sd-transforms';
import path from 'node:path';
import StyleDictionary from 'style-dictionary';

const variables = JSON.parse(
  readFileSync(path.join(import.meta.dirname, '../src/figma-variables/variableTokens.json'), { encoding: 'utf-8' })
);

const config = {
  input: 'figma-variables.json',
  output: 'tailwind',
  defaultTheme: 'ui-light',
  buildPath: './themes',
  themeBlock: 'build:theme',
  componentsBlock: 'build:components'
};

const loadStyleDictionary = async () => {
  await register(StyleDictionary);
  StyleDictionary.registerFormat({
    name: 'tailwind-v4',
    format: createTailwindV4Plugin({
      defaultTheme: config.defaultTheme
    })
  });

  return new StyleDictionary({
    log: {
      verbosity: 'verbose'
    }
  });
};

const buildStylesheet = async ({ buildPath, input, output, defaultTheme }) => {
  const sd = await loadStyleDictionary();

  const themeInstance = await sd.extend({
    platforms: {
      css: {
        buildPath,
        files: [
          {
            destination: `${output}.css`,
            format: 'tailwind-v4',
            options: {
              output,
              defaultTheme
            }
          }
        ],
        transformGroup: 'tokens-studio',
        transforms: [
          'name/kebab',
          'ts/size/px',
          'ts/opacity',
          'ts/size/lineheight',
          'ts/typography/fontWeight',
          'ts/size/css/letterspacing',
          'typography/css/shorthand',
          'fontFamily/css',
          'border/css/shorthand',
          'ts/color/css/hexrgba',
          'ts/color/modifiers',
          'shadow/css/shorthand'
        ]
      }
    },
    preprocessors: ['tokens-studio'],
    source: [`${OUTPUT_DIR}/${input}`]
  });

  await themeInstance.buildAllPlatforms();

  return readFileSync(`${buildPath}/${output}.css`, { encoding: 'utf-8' });
};

const getStylesheetThemes = stylesheet => {
  const themes = [];

  while (true) {
    const theme = extractThemeBlock(stylesheet);

    if (!theme) {
      break;
    }

    stylesheet = stylesheet
      .replace(theme.content, '')
      .replace(`/* ${config.themeBlock}[${theme.name}] */`, '')
      .replace(`/* ${config.themeBlock} */`, '');

    themes.push(theme);
  }

  return themes;
};

//
// Called on SIGINT or SIGTERM to cleanup the build and child processes.
//
function handleCleanup() {
  process.exit();
}

async function runBuild() {
  // --- Process figma variables ---
  const figma = new FigmaClient('figma-variables', variables);
  figma.process().save();

  // --- Build the main stylesheet file ---
  let stylesheet = await buildStylesheet({
    buildPath: config.buildPath,
    input: config.input,
    output: config.output,
    defaultTheme: config.defaultTheme
  });

  // --- Extract theme blocks as separate files ---
  const themes = getStylesheetThemes(stylesheet);
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

  // --- Extract component block as a separate file ---
  const components = extractComponentsBlock(stylesheet);
  stylesheet = stylesheet.replace(components.content, '').replaceAll(`/* ${config.componentsBlock} */`, '').trim();
  writeFileSync(`${config.buildPath}/${config.output}.css`, stylesheet);
  writeFileSync(`${config.buildPath}/components.css`, components.content.trim());

  // --- Create themes css files ---
  themes.forEach(theme => {
    mkdirSync(`./dist/${config.buildPath}/${theme.name}`, { recursive: true });
    writeFileSync(`./dist/${config.buildPath}/${theme.name}/${theme.name}.css`, minimizeCss(theme.content));
  });

  // --- Copy tailwind.css to dist ---
  writeFileSync(`./dist/${config.buildPath}/${config.output}.css`, stylesheet);

  // --- Build dist theme.js ---
  const tailwindtheme = (await import('../src/theme.mjs')).default;
  const dist = path.resolve(fileURLToPath(import.meta.url), '../../dist');
  mkdirSync(dist, { recursive: true });
  writeFileSync(path.resolve(dist, './theme.js'), `export default ${JSON.stringify(tailwindtheme)}`);

  // --- Build tokens.scss ---
  const scss = generateScss(tailwindtheme);
  writeFileSync(path.resolve(dist, './tokens.scss'), scss);

  process.exit();
}

runBuild();

process.on('SIGINT', handleCleanup);
process.on('SIGTERM', handleCleanup);
