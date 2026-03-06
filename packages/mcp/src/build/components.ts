import { mkdirSync, rmSync } from 'node:fs';
import fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';
import type { CustomElementDeclaration, Module } from 'custom-elements-manifest/schema.d.ts';
import { componentPath, createPath } from '../utilities/index.js';

type Manifest = Module[];

/** Absolute path to the docs stories/components directory */
const DOCS_COMPONENTS_DIR = join(dirname(fileURLToPath(import.meta.url)), '../../../docs/src/stories/components');

/**
 * Extracts the prose content from an MDX file.
 * Strips JSX placeholder tags (<DefaultStory />, <DocumentationLinks .../>)
 * so only the human-readable markdown remains.
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
 * Extracts a compact, LLM-friendly API summary from a CustomElementDeclaration.
 * Only includes public fields, events, slots, and CSS parts.
 */
const extractApi = (decl: CustomElementDeclaration) => ({
  tagName: decl.tagName,
  summary: (decl as any).summary ?? '',
  properties: ((decl.members ?? []) as any[])
    .filter((m: any) => m.kind === 'field' && !m.privacy)
    .map((m: any) => ({
      name: m.name,
      type: m.type?.text ?? '',
      default: m.default ?? '',
      description: m.description ?? ''
    })),
  events: (decl.events ?? []).map(e => ({ name: e.name, description: e.description ?? '' })),
  slots: (decl.slots ?? []).map(s => ({ name: s.name || '(default)', description: s.description ?? '' })),
  cssParts: (decl.cssParts ?? []).map(p => ({ name: p.name, description: p.description ?? '' }))
});

/**
 * Builds component metadata from the MDX docs and custom-elements manifest.
 * For each sd-* component writes:
 *   docs.md      — usage prose from the Storybook MDX docs
 *   api.json     — compact API (properties, events, slots, cssParts)
 *   templates.json — cross-reference populated later by buildTemplates
 */
export const buildComponents = async () => {
  const spinner = ora({
    prefixText: 'Components:',
    text: 'Generating static metadata...'
  }).start();

  try {
    const manifestImport = await import('@solid-design-system/components/dist/custom-elements.json', {
      with: { type: 'json' }
    });
    const modules = manifestImport.default?.modules as Manifest;

    spinner.text = 'Cleaning up old metadata...';
    rmSync(componentPath, { recursive: true, force: true });
    spinner.succeed('Old metadata cleaned up.');

    await createPath(componentPath);
    spinner.text = 'Generating components metadata...';

    const components = modules
      .filter(m => m.declarations?.some(d => (d as CustomElementDeclaration).tagName))
      .map(m => m.declarations![0] as CustomElementDeclaration);

    await Promise.all(
      components.map(async comp => {
        const tagName = comp.tagName!;
        const name = tagName.replace(/^sd-/, '');
        const compDir = join(componentPath, tagName);
        mkdirSync(compDir, { recursive: true });

        const [docs] = await Promise.all([extractMdxContent(join(DOCS_COMPONENTS_DIR, `${name}.mdx`))]);

        const writes: Promise<void>[] = [
          fs.writeFile(join(compDir, 'api.json'), JSON.stringify(extractApi(comp), null, 2)),
          fs.writeFile(join(compDir, 'templates.json'), '[]')
        ];
        if (docs) writes.push(fs.writeFile(join(compDir, 'docs.md'), docs));

        await Promise.all(writes);
      })
    );

    spinner.succeed('Components metadata generated successfully.');
  } catch (error) {
    spinner.fail(`Failed to generate components metadata. Error: ${error as string}`);
    throw error;
  }
};
