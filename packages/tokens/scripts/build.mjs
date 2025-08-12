import { createTailwindV4Plugin } from './processors/index.js';
import { OUTPUT_DIR } from './config.js';
import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

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

// /**
//  * @type {{ author: Record<string, string>, name: string, version: string }} data
//  */

// const data = JSON.parse(readFileSync('./package.json', 'utf-8'));
// const { author, name, version } = data;

// // Sets up custom file header
// StyleDictionary.registerFileHeader({
//   fileHeader: (defaultMsg = []) => [`${name} version ${version}`, `${author.name}`, ...defaultMsg],
//   name: 'sd/header'
// });

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

          // 'syn/add-fallback-fonts',
          // 'syn/add-missing-quotes-for-strings',
          // 'syn/convert-letter-spacing-to-normal'
        ]
      }
    },
    preprocessors: ['tokens-studio'],
    source: [`${OUTPUT_DIR}/${input}`]
  });

  return themeInstance.buildAllPlatforms();
});

await Promise.all(cssRuns);
