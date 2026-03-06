import fs from 'node:fs/promises';
import { mkdirSync, rmSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';
import { createPath, stylesPath } from '../utilities/index.js';

/** Absolute path to the docs stories/styles directory */
const DOCS_STYLES_DIR = join(dirname(fileURLToPath(import.meta.url)), '../../../docs/src/stories/styles');

/**
 * Extracts the prose content from an MDX file.
 * Strips JSX placeholder tags so only human-readable markdown remains.
 */
const extractMdxContent = async (mdxPath: string): Promise<string | null> => {
  try {
    const raw = await fs.readFile(mdxPath, 'utf-8');
    const match = raw.match(/export const content = `([\s\S]*?)`;/);
    if (!match) return null;
    return match[1]
      .split('\n')
      .filter(
        line => !line.trimStart().startsWith('<DefaultStory') && !line.trimStart().startsWith('<DocumentationLinks')
      )
      .join('\n')
      .trim();
  } catch {
    return null;
  }
};

/**
 * Extracts unique, sorted CSS class names (matching .sd-*) from a CSS file.
 */
const extractCssClasses = async (cssPath: string): Promise<string[]> => {
  try {
    const css = await fs.readFile(cssPath, 'utf-8');
    const matches = [...css.matchAll(/\.(sd-[\w-]+)/g)].map(m => m[1]);
    return [...new Set(matches)].sort();
  } catch {
    return [];
  }
};

/**
 * Builds style metadata from MDX docs and compiled CSS modules.
 * For each style utility writes:
 *   docs.md     — usage prose from the Storybook MDX docs
 *   classes.txt — newline-separated list of available CSS class names
 */
export const buildStyles = async () => {
  const spinner = ora({
    prefixText: 'Styles:',
    text: 'Generating static metadata...'
  }).start();

  try {
    // Resolve the styles package root via its main export
    const moduleUrl = import.meta.resolve('@solid-design-system/styles');
    const stylesModuleDir = join(dirname(fileURLToPath(moduleUrl)), '../');
    const stylesModulesDir = join(stylesModuleDir, 'dist/modules');

    spinner.text = 'Cleaning up old metadata...';
    rmSync(stylesPath, { recursive: true, force: true });
    spinner.succeed('Old metadata cleaned up.');

    await createPath(stylesPath);
    spinner.text = 'Generating styles metadata...';

    // Discover all style MDX files
    const mdxFiles = (await fs.readdir(DOCS_STYLES_DIR)).filter(f => f.endsWith('.mdx'));

    await Promise.all(
      mdxFiles.map(async mdxFile => {
        const name = basename(mdxFile, '.mdx');
        const styleDir = join(stylesPath, `sd-${name}`);
        mkdirSync(styleDir, { recursive: true });

        const [docs, classes] = await Promise.all([
          extractMdxContent(join(DOCS_STYLES_DIR, mdxFile)),
          extractCssClasses(join(stylesModulesDir, `${name}.css`))
        ]);

        const writes: Promise<void>[] = [];
        if (docs) writes.push(fs.writeFile(join(styleDir, 'docs.md'), docs));
        if (classes.length) writes.push(fs.writeFile(join(styleDir, 'classes.txt'), classes.join('\n')));
        await Promise.all(writes);
      })
    );

    spinner.succeed('Styles metadata generated successfully.');
  } catch (error) {
    spinner.fail(`Failed to generate styles metadata. Error: ${error as string}`);
    throw error;
  }
};
