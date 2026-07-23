import { buildStylesheet, getFigmaVariables, getStylesheetThemes, nextTask } from './utils.js';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { extractComponentsBlock, generateTailwindJson } from './tailwind/index.js';
import { FigmaClient } from './figma/index.js';
import { generateScss } from './scss/index.js';
import { minimizeCss } from '../../components/scripts/esbuild-plugin-lit-tailwind-and-minify.js';
import path from 'node:path';

const outdir = 'dist';
const cdndir = 'cdn';
const tokenFallbacksFilename = 'token-fallbacks.css';
let stylesheet;
let themes;
let themejs;
let tokenFallbackStylesheet;

const config = {
  input: 'figma-variables.json',
  output: 'tailwind',
  defaultTheme: 'ui-light',
  buildPath: 'themes',
  themeBlock: 'build:theme',
  componentsBlock: 'build:components'
};

function getTokenFallbackStylesheet(defaultThemeContent, defaultThemeName) {
  // Keep UI token values available when no theme stylesheet is loaded.
  const scopedThemeSelector = new RegExp(`:root,\\s*\\.sd-theme-${defaultThemeName}\\b`, 'g');
  return defaultThemeContent.replace(scopedThemeSelector, ':root').trim();
}

function addLiteralFallbacksToStylesheet(cssText) {
  const declarationRegex = /^\s*(--sd-[^:\s]+):\s*(.+);$/gm;
  const tokenMap = new Map();
  let match;

  while ((match = declarationRegex.exec(cssText)) !== null) {
    tokenMap.set(match[1], match[2]);
  }

  const resolve = (value, depth = 0) => {
    if (depth > 12) return value;

    return value.replace(/var\((--sd-[^,)\s]+)\)/g, (_, varName) => {
      const resolved = tokenMap.get(varName);
      if (!resolved) return `var(${varName})`;
      if (!resolved.includes('var(')) return resolved;
      return resolve(resolved, depth + 1);
    });
  };

  const resolvedMap = new Map();
  for (const [name, value] of tokenMap) {
    resolvedMap.set(name, resolve(value));
  }

  const inject = value => {
    let output = '';

    for (let index = 0; index < value.length; index += 1) {
      if (value.slice(index, index + 4) !== 'var(') {
        output += value[index];
        continue;
      }

      let depth = 1;
      let cursor = index + 4;
      while (cursor < value.length && depth > 0) {
        if (value[cursor] === '(') depth += 1;
        if (value[cursor] === ')') depth -= 1;
        cursor += 1;
      }

      if (depth !== 0) {
        output += value.slice(index, cursor);
        index = cursor - 1;
        continue;
      }

      const fullVarExpression = value.slice(index, cursor);
      const inner = value.slice(index + 4, cursor - 1);

      // Keep existing explicit fallbacks untouched.
      if (inner.includes(',')) {
        output += fullVarExpression;
        index = cursor - 1;
        continue;
      }

      const varName = inner.trim();
      const fallback = resolvedMap.get(varName);

      if (fallback) {
        output += `var(${varName}, ${fallback})`;
      } else {
        output += fullVarExpression;
      }

      index = cursor - 1;
    }

    return output;
  };

  return cssText.replace(declarationRegex, (full, name, value) => {
    const nextValue = inject(value);
    return full.replace(value, nextValue);
  });
}

async function runBuild() {
  await nextTask('Cleaning up old build directories', () => {
    if (existsSync(outdir)) {
      rmSync(outdir, { recursive: true });
    }
    if (existsSync(cdndir)) {
      rmSync(cdndir, { recursive: true });
    }
  });

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
    const toAppend = [
      { name: 'icons.css' },
      { name: 'overrides.css' },
      {
        name: 'legacy-variables.css',
        shared: true,
        process: (css, theme) => `:root, .sd-theme-${theme.name} {\n${css}\n}`
      }
    ];

    themes = getStylesheetThemes(stylesheet, config);
    themes.forEach(theme => {
      stylesheet = stylesheet
        .replace(theme.content, '')
        .replace(`/* ${config.themeBlock}[${theme.name}] */`, '')
        .replace(`/* ${config.themeBlock} */`, '')
        .trim();

      for (const append of toAppend) {
        const filepath = append.shared
          ? `${config.buildPath}/${append.name}`
          : `${config.buildPath}/${theme.name}/${append.name}`;
        if (!existsSync(filepath)) continue;

        const cssContent = readFileSync(filepath, { encoding: 'utf-8' });
        const css = append.shared ? cssContent.trimEnd() : cssContent.trim();
        theme.content = `${theme.content.trim()}\n\n${append.process?.(css, theme) ?? css}`;
      }

      theme.content = addLiteralFallbacksToStylesheet(theme.content);

      mkdirSync(`${config.buildPath}/${theme.name}`, { recursive: true });
      writeFileSync(`${config.buildPath}/${config.output}.css`, stylesheet);
      writeFileSync(`${config.buildPath}/${theme.name}/${theme.name}.css`, theme.content);
    });

    const defaultTheme = themes.find(theme => theme.name === config.defaultTheme);
    if (!defaultTheme) {
      throw new Error(`Default theme '${config.defaultTheme}' was not found while building token-fallbacks CSS.`);
    }

    tokenFallbackStylesheet = addLiteralFallbacksToStylesheet(
      getTokenFallbackStylesheet(defaultTheme.content, config.defaultTheme)
    );
  });

  await nextTask('Extracting component variables', () => {
    const components = extractComponentsBlock(stylesheet);
    if (components) {
      stylesheet = stylesheet.replace(components.content, '').replaceAll(`/* ${config.componentsBlock} */`, '').trim();
      writeFileSync(`${config.buildPath}/${config.output}.css`, stylesheet);
      writeFileSync(`${config.buildPath}/components.css`, components.content.trim());
    } else {
      writeFileSync(`${config.buildPath}/${config.output}.css`, stylesheet);
    }
  });

  await nextTask(`Creating ${outdir} output`, () => {
    mkdirSync(`./${outdir}/${config.buildPath}`, { recursive: true });

    themes.forEach(theme => {
      const themeWithFallback = `${tokenFallbackStylesheet}\n\n${theme.content}`;
      mkdirSync(`./${outdir}/${config.buildPath}/${theme.name}`, { recursive: true });
      writeFileSync(`./${outdir}/${config.buildPath}/${theme.name}/${theme.name}.css`, themeWithFallback);
    });

    writeFileSync(`./${outdir}/${config.buildPath}/${config.output}.css`, stylesheet);
    writeFileSync(`./${outdir}/${config.buildPath}/${tokenFallbacksFilename}`, tokenFallbackStylesheet);
  });

  await nextTask(`Creating ${cdndir} output`, () => {
    mkdirSync(`./${cdndir}/${config.buildPath}`, { recursive: true });

    themes.forEach(theme => {
      const themeWithFallback = `${tokenFallbackStylesheet}\n\n${theme.content}`;
      mkdirSync(`./${cdndir}/${config.buildPath}/${theme.name}`, { recursive: true });
      writeFileSync(`./${cdndir}/${config.buildPath}/${theme.name}/${theme.name}.css`, minimizeCss(themeWithFallback));
    });

    writeFileSync(`./${cdndir}/${config.buildPath}/${config.output}.css`, stylesheet);
    writeFileSync(`./${cdndir}/${config.buildPath}/${tokenFallbacksFilename}`, minimizeCss(tokenFallbackStylesheet));
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

  await nextTask('Generating tokens.tailwind.json', () => {
    const tokensJsonPath = path.resolve('./src/tokens.json');
    const tokensJson = JSON.parse(readFileSync(tokensJsonPath, { encoding: 'utf-8' }));
    const uiCore = tokensJson['UI Core'] ?? {};
    const json = generateTailwindJson(themejs, uiCore);
    writeFileSync(path.resolve(`./${outdir}`, './tokens.tailwind.json'), json);
  });

  process.exit();
}

runBuild();

process.on('SIGINT', process.exit);
process.on('SIGTERM', process.exit);
