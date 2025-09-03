import { readFileSync, writeFileSync } from 'node:fs';
import { createTailwindV4Plugin } from './tailwind/index.js';
import { FigmaClient } from './figma/index.js';
import { OUTPUT_DIR } from './config.js';
import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import variables from '../src/figma-variables/variableTokens.json' with { type: 'json' };

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

  function extractThemeBlock(src) {
    const re = /\/\*\s*build:theme\[(.*?)\]\s*\*\/([\s\S]*?)\/\*\s*build:theme\s*\*\//;
    const m = src.match(re);
    if (!m) return null;
    const name = m[1]; // content inside the brackets
    const content = m[2]; // content between the markers
    return { name, content };
  }

  let file = readFileSync(`${buildPath}/${output}.css`, { encoding: 'utf-8' });
  let themes = [];

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
