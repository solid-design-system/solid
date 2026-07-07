import { rmSync } from 'node:fs';
import fs from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';
import { componentPath, createPath } from '../utilities/index.js';

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

// Represents a single Story extracted from a component's .stories.ts file
export interface Example {
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
const extractStories = async (storiesPath: string): Promise<Example[]> => {
  let source: string;
  try {
    source = await fs.readFile(storiesPath, 'utf-8');
  } catch {
    return [];
  }

  const stories: Example[] = [];
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

interface ApiSections {
  tagName: string;
  summary: string;
  props: string;
  events: string;
  slots: string;
  parts: string;
}

const extractSummaryFromDocs = (docs: string | null): string => {
  if (!docs) return '';
  const lines = docs
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    if (line.startsWith('#')) continue;
    if (line.startsWith('<')) continue;
    if (line.startsWith('[')) continue;
    if (line.startsWith('####') || line.startsWith('###')) break;
    return line;
  }

  return '';
};

const extractSummaryFromStories = async (storiesPath: string): Promise<string> => {
  try {
    const raw = await fs.readFile(storiesPath, 'utf-8');
    const block = raw.match(/\/\*\*([\s\S]*?)\*\//);
    if (!block) return '';
    const text = block[1]
      .split('\n')
      .map(line => line.replace(/^\s*\*\s?/, '').trim())
      .filter(Boolean)
      .map(line => line.replace(/\*\*/g, ''));
    return text[0] ?? '';
  } catch {
    return '';
  }
};

const getComponentNames = async (): Promise<string[]> => {
  const files = await fs.readdir(DOCS_COMPONENTS_DIR);
  const mdxNames = files.filter(file => file.endsWith('.mdx')).map(file => basename(file, '.mdx'));
  const storyNames = files
    .filter(file => /^[a-z0-9-]+\.stories\.ts$/.test(file))
    .map(file => basename(file, '.stories.ts'));

  return [...new Set([...mdxNames, ...storyNames])].sort();
};

export const buildComponents = async () => {
  const spinner = ora({ prefixText: 'Components:', text: 'Generating static metadata...' }).start();

  try {
    const componentNames = await getComponentNames();

    spinner.text = 'Cleaning up old metadata...';
    rmSync(componentPath, { recursive: true, force: true });
    spinner.succeed('Old metadata cleaned up.');

    await createPath(componentPath);
    spinner.text = 'Generating components metadata...';

    await Promise.all(
      componentNames.map(async name => {
        const tagName = `sd-${name}`;

        const [{ docs, relatedComponents }, stories] = await Promise.all([
          extractMdxContent(join(DOCS_COMPONENTS_DIR, `${name}.mdx`)),
          extractStories(join(DOCS_COMPONENTS_DIR, `${name}.stories.ts`))
        ]);

        const fallbackSummary = await extractSummaryFromStories(join(DOCS_COMPONENTS_DIR, `${name}.stories.ts`));
        const api: ApiSections = {
          tagName,
          summary: extractSummaryFromDocs(docs) || fallbackSummary,
          props: '',
          events: '',
          slots: '',
          parts: ''
        };

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
