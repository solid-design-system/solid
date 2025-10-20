import { createTailwindV4Plugin, extractThemeBlock } from './tailwind/index.js';
import { FigmaClient } from './figma/index.js';
import { fileURLToPath } from 'url';
import { generateScss } from './scss/index.js';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { OUTPUT_DIR } from './config.js';
import { register } from '@tokens-studio/sd-transforms';
import path from 'node:path';
import StyleDictionary from 'style-dictionary';

const variables = JSON.parse(
  readFileSync(path.join(import.meta.dirname, '../src/figma-variables/variableTokens.json'), { encoding: 'utf-8' })
);

const figma = new FigmaClient('figma-variables', variables);
figma.process().save();

await register(StyleDictionary);

StyleDictionary.registerFormat({
  name: 'tailwind-v4',
  format: createTailwindV4Plugin()
});

const sd = new StyleDictionary({
  log: {
    verbosity: 'verbose'
  }
});

const config = {
  buildPath: './themes',
  themeBlock: 'build:theme'
};

const availableThemes = [
  {
    input: 'figma-variables.json',
    output: 'tailwind',
    defaultTheme: 'ui-light'
  }
];

const cssRuns = availableThemes.map(async ({ input, output, defaultTheme }) => {
  const buildPath = config.buildPath;

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

  let file = readFileSync(`${buildPath}/${output}.css`, { encoding: 'utf-8' });
  const themes = [];

  while (true) {
    const theme = extractThemeBlock(file);

    if (!theme) {
      break;
    }

    file = file
      .replace(theme.content, '')
      .replace(`/* ${config.themeBlock}[${theme.name}] */`, '')
      .replace(`/* ${config.themeBlock} */`, '');

    themes.push(theme);
  }

  themes.forEach(theme => {
    file = file.replace(theme.content, '').replace(`/* ${config.themeBlock}[${theme.name}] */`, '');
    writeFileSync(`${buildPath}/${output}.css`, file.trim());
    writeFileSync(`${buildPath}/${theme.name}.css`, theme.content.trim());
  });
});

await Promise.all(cssRuns);

// --- Build dist theme.js ---
const tailwindtheme = (await import('../src/theme.mjs')).default;
const dist = path.resolve(fileURLToPath(import.meta.url), '../../dist');
mkdirSync(dist, { recursive: true });
writeFileSync(path.resolve(dist, './theme.js'), `export default ${JSON.stringify(tailwindtheme)}`);

// --- Build tokens.scss ---
const scss = generateScss(tailwindtheme);
writeFileSync(path.resolve(dist, './tokens.scss'), scss);
