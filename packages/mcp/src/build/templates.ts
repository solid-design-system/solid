import fs from 'node:fs/promises';
import { mkdirSync, rmSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';
import { componentPath, createPath, templatesPackagePath } from '../utilities/index.js';

/** Absolute path to the docs stories/templates directory */
const DOCS_TEMPLATES_DIR = join(dirname(fileURLToPath(import.meta.url)), '../../../docs/src/stories/templates');

/**
 * Extracts all unique sd-* tag names referenced in a template story file.
 */
const extractComponents = (source: string): string[] => {
  const matches = [...source.matchAll(/\bsd-[\w-]+/g)].map(m => m[0]);
  return [...new Set(matches)].sort();
};

/**
 * Strips the internal monorepo import path so the stored template is
 * self-contained and useful as a reference snippet.
 */
const normalizeImports = (source: string): string =>
  source.replace(/import ['"]\.{2,}\/.*?solid-components['"];?\n?/, "import '@solid-design-system/components';\n");

/**
 * Builds template metadata from the Storybook template stories.
 * For each template writes:
 *   stories.ts      — the template story source (imports normalized)
 *   components.json — list of sd-* components used in this template
 *
 * Also updates each component's templates.json with reverse cross-references.
 */
export const buildTemplates = async () => {
  const spinner = ora({
    prefixText: 'Templates:',
    text: 'Generating static metadata...'
  }).start();

  try {
    spinner.text = 'Cleaning up old metadata...';
    rmSync(templatesPackagePath, { recursive: true, force: true });
    spinner.succeed('Old metadata cleaned up.');

    await createPath(templatesPackagePath);
    spinner.text = 'Generating templates metadata...';

    const storyFiles = (await fs.readdir(DOCS_TEMPLATES_DIR)).filter(f => f.endsWith('.stories.ts'));

    // Map: componentTagName → template names that use it
    const componentToTemplates = new Map<string, string[]>();

    await Promise.all(
      storyFiles.map(async file => {
        const name = basename(file, '.stories.ts');
        const source = await fs.readFile(join(DOCS_TEMPLATES_DIR, file), 'utf-8');
        const normalized = normalizeImports(source);
        const components = extractComponents(source);

        const templateDir = join(templatesPackagePath, name);
        mkdirSync(templateDir, { recursive: true });

        await Promise.all([
          fs.writeFile(join(templateDir, 'stories.ts'), normalized),
          fs.writeFile(join(templateDir, 'components.json'), JSON.stringify(components, null, 2))
        ]);

        // Build reverse index
        for (const tag of components) {
          const list = componentToTemplates.get(tag) ?? [];
          list.push(name);
          componentToTemplates.set(tag, list);
        }
      })
    );

    spinner.succeed('Templates metadata generated successfully.');
    spinner.text = 'Updating component cross-references...';

    // Write templates.json into each component directory
    await Promise.all(
      [...componentToTemplates.entries()].map(async ([tag, templates]) => {
        const templatesFile = join(componentPath, tag, 'templates.json');
        try {
          await fs.writeFile(templatesFile, JSON.stringify(templates.sort(), null, 2));
        } catch {
          // Component directory may not exist if it's a sub-element (e.g. sd-option)
        }
      })
    );

    spinner.succeed('Component cross-references updated.');
  } catch (error) {
    spinner.fail(`Failed to generate templates metadata. Error: ${error as string}`);
    throw error;
  }
};
