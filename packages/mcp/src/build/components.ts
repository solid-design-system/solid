import { rmSync } from 'node:fs';
import fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';
import type { CustomElementDeclaration, Module } from 'custom-elements-manifest/schema.d.ts';
import { componentPath, createPath } from '../utilities/index.js';

type Manifest = Module[];

/** Absolute path to the docs stories/components directory */
const DOCS_COMPONENTS_DIR = join(dirname(fileURLToPath(import.meta.url)), '../../../docs/src/stories/components');

interface MdxExtract {
  docs: string | null;
  relatedComponents: string[];
}

const extractMdxContent = async (mdxPath: string): Promise<MdxExtract> => {
  try {
    const raw = await fs.readFile(mdxPath, 'utf-8');
    const match = raw.match(/export const content = `([\s\S]*?)`;/);
    if (!match) return { docs: null, relatedComponents: [] };

    const full = match[1]
      .split('\n')
      .filter(
        line => !line.trimStart().startsWith('<DefaultStory') && !line.trimStart().startsWith('<DocumentationLinks')
      )
      .join('\n')
      .trim();

    const relCompBlock = full.match(/####\s+Related Components\n+([\s\S]*?)(?=\n####|\n###|$)/);
    const relatedComponents: string[] = [];
    if (relCompBlock) {
      const tagMatches = [...relCompBlock[1].matchAll(/\[(sd-[\w-]+)\]/g)];
      relatedComponents.push(...tagMatches.map(m => m[1]));
    }

    let docs = full.replace(/####\s+Related (?:Components|Templates)\n+((?:.*\n)*?)(?=\n####|\n###|$)/g, '');
    docs = docs.replace(/^\[.*?\]\(\.\/?path=.*?\)\n?/gm, '');
    docs = docs.replace(/\nVisit <sd-link[\s\S]*$/, '');
    docs = docs.trim();

    return { docs: docs || null, relatedComponents };
  } catch {
    return { docs: null, relatedComponents: [] };
  }
};

export interface Story {
  /** kebab-case slug used as the filename, e.g. "no-shadow" */
  slug: string;
  /** JSDoc description extracted from the comment above the export */
  description: string;
  /** Rendered HTML content */
  html: string;
}

/**
 * Extracts the content of a lit-html template literal starting at `startIndex`
 * (immediately after the opening backtick of `html\``).
 */
const extractHtmlLiteral = (source: string, startIndex: number): string => {
  let i = startIndex;
  let depth = 0;
  while (i < source.length) {
    const c = source[i];
    if (depth === 0 && c === '`') return source.slice(startIndex, i);
    if (c === '$' && source[i + 1] === '{') {
      depth++;
      i += 2;
      continue;
    }
    if (depth > 0) {
      if (c === '{') depth++;
      else if (c === '}') depth--;
    }
    i++;
  }
  return source.slice(startIndex);
};

const dedent = (str: string): string => {
  const lines = str.split('\n');
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  if (!lines.length) return '';
  const indent = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^(\s*)/)?.[1].length ?? 0));
  return lines.map(l => l.slice(indent)).join('\n');
};

/** Converts PascalCase/camelCase to kebab-case. e.g. "NoShadow" → "no-shadow" */
const toKebab = (s: string): string =>
  s.replace(/([A-Z])/g, (_: string, c: string, i: number) => (i === 0 ? c.toLowerCase() : `-${c.toLowerCase()}`));

/**
 * Extracts stories from a component .stories.ts file.
 * Only stories with a JSDoc comment AND a direct html` literal are included.
 * Default/generateTemplate stories are skipped.
 */
const extractStories = async (storiesPath: string): Promise<Story[]> => {
  let source: string;
  try {
    source = await fs.readFile(storiesPath, 'utf-8');
  } catch {
    return [];
  }

  const stories: Story[] = [];
  // Match: optional JSDoc, then `export const ExportName = {`
  const pattern = /(\/\*\*([\s\S]*?)\*\/\s*)?^export const (\w+) = \{/gm;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(source)) !== null) {
    const exportName = match[3];
    if (exportName === 'default') continue;

    const jsdocRaw = match[2] ?? '';
    // Clean up JSDoc: remove leading " * " on each line
    const description = jsdocRaw
      .split('\n')
      .map(l => l.replace(/^\s*\*\s?/, '').trim())
      .filter(Boolean)
      .join('\n')
      .trim();

    // Find `html`` directly inside the render function (not inside generateTemplate)
    const blockStart = match.index + match[0].length;
    const blockSlice = source.slice(blockStart);

    // Skip if this story uses generateTemplate
    const nextExportIdx = blockSlice.search(/\nexport const /);
    const block = nextExportIdx === -1 ? blockSlice : blockSlice.slice(0, nextExportIdx);
    if (block.includes('generateTemplate(')) continue;

    const htmlIdx = block.indexOf('html`');
    if (htmlIdx === -1) continue;

    const rawHtml = extractHtmlLiteral(block, htmlIdx + 5);
    const html = dedent(rawHtml);
    if (!html) continue;

    stories.push({ slug: toKebab(exportName), description, html });
  }

  return stories;
};

const formatPropMeta = (type: string, defaultVal: string): string => {
  const parts: string[] = [];
  if (type) parts.push(type.replace(/\s*\|\s*/g, '|'));
  if (defaultVal !== '' && defaultVal !== undefined) parts.push(`default=${defaultVal}`);
  return parts.join(', ');
};

interface ApiSections {
  tagName: string;
  summary: string;
  props: string;
  events: string;
  slots: string;
  parts: string;
}

interface ClassMemberField {
  kind: string;
  privacy?: string;
  description?: string;
  type?: { text: string };
  default?: string;
  attribute?: string;
  name: string;
}

const extractApiSections = (decl: CustomElementDeclaration): ApiSections => {
  const tagName = decl.tagName ?? '';
  const summary = (decl as CustomElementDeclaration & { summary?: string }).summary ?? '';

  const members = (decl.members ?? []) as ClassMemberField[];
  const propsLines = members
    .filter(m => m.kind === 'field' && !m.privacy && m.description)
    .map(m => {
      const meta = formatPropMeta(m.type?.text ?? '', m.default ?? '');
      const attrSuffix = m.attribute && m.attribute !== m.name ? ` [attr: ${m.attribute}]` : '';
      return `- prop.${m.name}${attrSuffix}: ${meta}${m.description ? ` \u2014 ${m.description}` : ''}`;
    });

  const eventLines = (decl.events ?? []).map(e => `- event.${e.name}: ${e.description ?? ''}`);
  const slotLines = (decl.slots ?? []).map(s => `- slot.${s.name || 'default'}: ${s.description ?? ''}`);
  const partLines = (decl.cssParts ?? []).map(p => `- part.${p.name}: ${p.description ?? ''}`);

  return {
    tagName,
    summary,
    props: propsLines.join('\n'),
    events: eventLines.join('\n'),
    slots: slotLines.join('\n'),
    parts: partLines.join('\n')
  };
};

export const buildComponents = async () => {
  const spinner = ora({ prefixText: 'Components:', text: 'Generating static metadata...' }).start();

  try {
    const manifestImport = (await import('@solid-design-system/components/dist/custom-elements.json', {
      with: { type: 'json' }
    })) as { default: { modules: Manifest } };
    const modules = manifestImport.default?.modules;

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
        const api = extractApiSections(comp);

        const [{ docs, relatedComponents }, stories] = await Promise.all([
          extractMdxContent(join(DOCS_COMPONENTS_DIR, `${name}.mdx`)),
          extractStories(join(DOCS_COMPONENTS_DIR, `${name}.stories.ts`))
        ]);

        // Store intermediate JSON — buildTemplates will finalise into info.md + story files
        const intermediate = {
          api,
          docs,
          relatedComponents,
          stories,
          templates: [] as string[]
        };
        await fs.writeFile(join(componentPath, `${tagName}.json`), JSON.stringify(intermediate));
      })
    );

    spinner.succeed('Components metadata generated successfully.');
  } catch (error) {
    spinner.fail(`Failed to generate components metadata. Error: ${error as string}`);
    throw error;
  }
};
