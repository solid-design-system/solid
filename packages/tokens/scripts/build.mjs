import { createTailwindV4Plugin, extractThemeBlock } from './tailwind/index.js';
import { FigmaClient } from './figma/index.js';
import { OUTPUT_DIR } from './config.js';
import { readFileSync, writeFileSync } from 'node:fs';
import { register } from '@tokens-studio/sd-transforms';
import path from 'node:path';
import StyleDictionary from 'style-dictionary';

const variables = JSON.parse(
  readFileSync(path.join(import.meta.dirname, '../src/figma-variables/variableTokens.json'), { encoding: 'utf-8' })
);

const figma = new FigmaClient('ui-semantic', variables);
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
    input: 'ui-semantic.json',
    output: 'tailwind'
  }
];

const cssRuns = availableThemes.map(async ({ input, output }) => {
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
              output
            }
          }
        ],
        prefix: config.prefix,
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
