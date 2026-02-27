import { createTailwindV4Plugin, extractThemeBlock } from './tailwind/index.js';
import { OUTPUT_DIR } from './config.js';
import { readFileSync } from 'node:fs';
import { register } from '@tokens-studio/sd-transforms';
import ora from 'ora';
import path from 'node:path';
import pc from 'picocolors';
import StyleDictionary from 'style-dictionary';

//
// Helper function to draw a spinner while tasks run.
//
export async function nextTask(label, action) {
  const spinner = ora({ hideCursor: false }).start();
  spinner.text = label;
  spinner.start();

  try {
    await action();
    spinner.stop();
    // eslint-disable-next-line no-console
    console.log(`${pc.green('✔')} ${label}`);
  } catch (err) {
    spinner.stop();
    console.error(`${pc.red('✘')} ${err}`);
    if (err.stdout) console.error(pc.red(err.stdout));
    if (err.stderr) console.error(pc.red(err.stderr));
    process.exit(1);
  }
}

export const getFigmaVariables = () => {
  return JSON.parse(
    readFileSync(path.join(import.meta.dirname, '../src/figma-variables/variableTokens.json'), { encoding: 'utf-8' })
  );
};

export const loadStyleDictionary = async (
  config = {
    defaultTheme: 'ui-light'
  }
) => {
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

export const buildStylesheet = async ({ buildPath, input, output, defaultTheme }) => {
  const sd = await loadStyleDictionary({ defaultTheme });

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

export const getStylesheetThemes = (css, config) => {
  const blocks = [];

  while (true) {
    const block = extractThemeBlock(css);

    if (!block) {
      break;
    }

    css = css
      .replace(block.content, '')
      .replace(`/* ${config.themeBlock}[${block.name}] */`, '')
      .replace(`/* ${config.themeBlock} */`, '');

    blocks.push(block);
  }

  return blocks;
};
