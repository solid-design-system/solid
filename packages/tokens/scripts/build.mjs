import { createTailwindV4Plugin } from './processors/index.js';
import { FigmaClient } from './figma/index.js';
import { OUTPUT_DIR } from './config.js';
import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import variables from '../src/figma-variables/variableTokens.json' with { type: 'json' };

const figma = new FigmaClient(variables);
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
  buildPath: './dist/'
};

const availableThemes = [
  {
    input: 'ui-semantic-light.json',
    theme: 'light'
  },
  {
    input: 'ui-semantic-dark.json',
    theme: 'dark'
  }
];

const cssRuns = availableThemes.map(async ({ input, theme }) => {
  const themeInstance = await sd.extend({
    platforms: {
      css: {
        buildPath: `${config.buildPath}themes/`,
        files: [
          {
            destination: `${theme}.css`,
            format: 'tailwind-v4',
            options: {
              theme
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

  return themeInstance.buildAllPlatforms();
});

await Promise.all(cssRuns);
