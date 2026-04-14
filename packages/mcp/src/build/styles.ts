import fs from 'node:fs/promises';
import { rmSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';
import { createPath, stylesPath } from '../utilities/index.js';

/** Absolute path to the docs stories/styles directory */
const DOCS_STYLES_DIR = join(dirname(fileURLToPath(import.meta.url)), '../../../docs/src/stories/styles');

interface MdxExtract {
  docs: string | null;
  relatedTemplates: string[];
}

const extractMdxContent = async (mdxPath: string): Promise<MdxExtract> => {
  try {
    const raw = await fs.readFile(mdxPath, 'utf-8');
    const match = raw.match(/export const content = `([\s\S]*?)`;/);
    if (!match) return { docs: null, relatedTemplates: [] };

    const full = match[1]
      .split('\n')
      .filter(
        line =>
          !line.trimStart().startsWith('<DefaultStory') && !line.trimStart().startsWith('<DocumentationLinks')
      )
      .join('\n')
      .trim();

    const relTemplBlock = full.match(/####\s+Related Templates\n+([\s\S]*?)(?=\n####|\n###|$)/);
    const relatedTemplates: string[] = [];
    if (relTemplBlock) {
      const linkMatches = [...relTemplBlock[1].matchAll(/\[(.*?)\]\(.\/\?path=\/docs\/templates-([\w-]+)/g)];
      relatedTemplates.push(...linkMatches.map(m => m[2]));
    }

    let docs = full.replace(/####\s+Related (?:Components|Templates)\n+((?:.*\n)*?)(?=\n####|\n###|$)/g, '');
    docs = docs.replace(/^\[.*?\]\(\.\/?path=.*?\)\n?/gm, '');
    docs = docs.replace(/\nVisit <sd-link[\s\S]*$/, '');
    docs = docs.trim();

    return { docs: docs || null, relatedTemplates };
  } catch {
    return { docs: null, relatedTemplates: [] };
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
    if (c === '$' && source[i + 1] === '{') { depth++; i += 2; continue; }
    if (depth > 0) { if (c === '{') depth++; else if (c === '}') depth--; }
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
  s.replace(/([A-Z])/g, (_, c, i) => (i === 0 ? c.toLowerCase() : `-${c.toLowerCase()}`));

/**
 * Extracts stories from a style .stories.ts file.
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

export const buildStyles = async () => {
  const spinner = ora();
  try {
    spinner.start('Generating styles metadata...');
    createPath(stylesPath);

    // Remove existing metadata
    try {
      rmSync(stylesPath, { recursive: true });
    } catch {
      // Ignore if directory doesn't exist
    }
    createPath(stylesPath);

    // List all .mdx files in the styles docs directory to get style names
    const docsDir = await fs.readdir(DOCS_STYLES_DIR);
    const styleNames = new Set<string>();
    
    for (const file of docsDir) {
      if (file.endsWith('.mdx') && !file.startsWith('list.') && !file.startsWith('meta.')) {
        // Extract style name from filename: "display.mdx" → "display"
        const name = file.replace('.mdx', '');
        styleNames.add(name);
      }
    }

    spinner.text = 'Generating styles metadata...';

    await Promise.all(
      Array.from(styleNames).map(async name => {
        const [{ docs, relatedTemplates }, stories] = await Promise.all([
          extractMdxContent(join(DOCS_STYLES_DIR, `${name}.mdx`)),
          extractStories(join(DOCS_STYLES_DIR, `${name}.stories.ts`))
        ]);

        // Store intermediate JSON — buildTemplates will finalise into info.md + story files
        const intermediate = {
          docs,
          relatedTemplates,
          stories,
          classNames: [] as string[]  // Placeholder; CSS class extraction can be added later
        };
        await fs.writeFile(join(stylesPath, `sd-${name}.json`), JSON.stringify(intermediate));
      })
    );

    spinner.succeed('Styles metadata generated successfully.');
  } catch (error) {
    spinner.fail(`Failed to generate styles metadata. Error: ${error as string}`);
    throw error;
  }
};
