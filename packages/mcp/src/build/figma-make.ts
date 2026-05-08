import { rmSync } from 'node:fs';
import fs from 'node:fs/promises';
import { join } from 'node:path';
import { componentPath, stylesPath, iconsPath, figmaMakePath } from '../utilities/index.js';

const EXCLUDED_DOCS = new Set(['installation.md']);

/** Read all story .md files from a component/style directory and merge them with info.md */
async function mergeComponentFiles(sourceDir: string): Promise<string> {
  const infoPath = join(sourceDir, 'info.md');
  const infoContent = await fs.readFile(infoPath, 'utf-8');

  const storiesDir = join(sourceDir, 'stories');
  const storyParts: string[] = [];

  try {
    const storyFiles = (await fs.readdir(storiesDir)).sort();
    for (const file of storyFiles) {
      if (!file.endsWith('.md')) continue;
      const storyName = file.replace(/\.md$/, '');
      const storyContent = await fs.readFile(join(storiesDir, file), 'utf-8');
      storyParts.push(`### ${storyName}\n\n${storyContent.trim()}`);
    }
  } catch {
    // No stories directory — skip
  }

  if (storyParts.length === 0) {
    return infoContent.trim();
  }

  return `${infoContent.trim()}\n\n## Stories\n\n${storyParts.join('\n\n')}`;
}

/** Extract a one-line description from info.md (second line of the Overview section) */
function extractDescription(infoContent: string): string {
  const match = infoContent.match(/`<[^>]+>`\s*[—–-]+\s*(.+)/);
  if (match) return match[1].trim();
  // Fallback: first non-empty line after "## Overview"
  const lines = infoContent.split('\n');
  let inOverview = false;
  for (const line of lines) {
    if (line.startsWith('## Overview')) {
      inOverview = true;
      continue;
    }
    if (inOverview && line.trim()) return line.trim();
  }
  return '';
}

interface PackageResult {
  items: { name: string; description: string }[];
  docs: { name: string; content: string }[];
}

/** Build merged component/style files for one package */
async function buildPackage(sourcePath: string, outputDir: string): Promise<PackageResult> {
  await fs.mkdir(outputDir, { recursive: true });

  const entries = await fs.readdir(sourcePath, { withFileTypes: true });
  const items: { name: string; description: string }[] = [];

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name.startsWith('sd-')) {
      const merged = await mergeComponentFiles(join(sourcePath, entry.name));
      await fs.writeFile(join(outputDir, `${entry.name}.md`), merged, 'utf-8');
      items.push({ name: entry.name, description: extractDescription(merged) });
    }
  }

  // Sort alphabetically
  items.sort((a, b) => a.name.localeCompare(b.name));

  // Collect docs (excluding installation.md)
  const docs: { name: string; content: string }[] = [];
  const docsSource = join(sourcePath, 'docs');
  try {
    const docFiles = (await fs.readdir(docsSource)).sort();
    for (const file of docFiles) {
      if (!file.endsWith('.md')) continue;
      if (EXCLUDED_DOCS.has(file)) continue;
      const content = await fs.readFile(join(docsSource, file), 'utf-8');
      docs.push({ name: file.replace(/\.md$/, ''), content: content.trim() });
    }
  } catch {
    // No docs directory
  }

  return { items, docs };
}

/** Build icons.md — one line per icon */
async function buildIconsMd(outputDir: string): Promise<void> {
  const contentJson = join(iconsPath, 'content.json');
  const systemJson = join(iconsPath, 'system.json');

  const lines: string[] = ['# Icons\n', 'German keywords (tags) are used for icon search.\n'];

  for (const jsonPath of [contentJson, systemJson]) {
    try {
      const raw = await fs.readFile(jsonPath, 'utf-8');
      const icons: { technicalId: string; displayNameDe: string; tags: string[] }[] = JSON.parse(raw) as {
        technicalId: string;
        displayNameDe: string;
        tags: string[];
      }[];
      for (const icon of icons) {
        const tagPart = icon.tags && icon.tags.length > 0 ? `, ${icon.tags.join(', ')}` : '';
        lines.push(`- ${icon.technicalId}: ${icon.displayNameDe}${tagPart}`);
      }
    } catch {
      // File may not exist
    }
  }

  await fs.writeFile(join(outputDir, 'icons.md'), lines.join('\n'), 'utf-8');
}

/** Build the top-level components.md index, including docs content */
async function buildIndex(outputDir: string, components: PackageResult, styles: PackageResult): Promise<void> {
  const componentLines = components.items.map(c => `- \`${c.name}\`${c.description ? ` — ${c.description}` : ''}`);
  const styleLines = styles.items.map(s => `- \`${s.name}\`${s.description ? ` — ${s.description}` : ''}`);

  const docSections = (docs: { name: string; content: string }[]) =>
    docs.map(d => `## ${d.name.charAt(0).toUpperCase() + d.name.slice(1)}\n\n${d.content}`).join('\n\n');

  const content = [
    '# Solid Design System — Component & Style Overview',
    '',
    'Full documentation for each item is available in the `components/` and `styles/` subfolders.',
    '',
    '## Web Components',
    '',
    'These are custom HTML elements (`<sd-*>`) implemented with Lit.',
    '',
    ...componentLines,
    '',
    '## CSS Styles',
    '',
    'These are CSS class-based style utilities applied via class names.',
    '',
    ...styleLines,
    '',
    ...(components.docs.length > 0 ? ['---', '', '# Component Docs', '', docSections(components.docs), ''] : []),
    ...(styles.docs.length > 0 ? ['---', '', '# Style Docs', '', docSections(styles.docs), ''] : [])
  ].join('\n');

  await fs.writeFile(join(outputDir, 'components.md'), content, 'utf-8');
}

export async function buildFigmaMake(): Promise<void> {
  // Clean output directory
  rmSync(figmaMakePath, { recursive: true, force: true });
  await fs.mkdir(figmaMakePath, { recursive: true });

  const componentsOut = join(figmaMakePath, 'components');
  const stylesOut = join(figmaMakePath, 'styles');

  const [components, styles] = await Promise.all([
    buildPackage(componentPath, componentsOut),
    buildPackage(stylesPath, stylesOut)
  ]);

  await Promise.all([buildIconsMd(figmaMakePath), buildIndex(figmaMakePath, components, styles)]);
}
