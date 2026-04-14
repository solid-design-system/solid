import fs from 'node:fs/promises';
import { mkdirSync, rmSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';
import { componentPath, createPath, templatesPackagePath, stylesPath } from '../utilities/index.js';
import type { Story } from './components.js';

/** Absolute path to the docs stories/templates directory */
const DOCS_TEMPLATES_DIR = join(dirname(fileURLToPath(import.meta.url)), '../../../docs/src/stories/templates');

const extractComponents = (source: string): string[] => {
  const matches = [...source.matchAll(/\bsd-[\w-]+/g)].map(m => m[0]);
  return [...new Set(matches)].sort();
};

const extractTemplateLiteralContent = (source: string, startIndex: number): string => {
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
  const indent = Math.min(...lines.filter(l => l.trim()).map(l => (l.match(/^(\s*)/)?.[1].length ?? 0)));
  return lines.map(l => l.slice(indent)).join('\n');
};

const exportNameToTitle = (name: string): string =>
  name.replace(/([A-Z])/g, ' $1').trim();

const extractDefaultTitle = (source: string): string | null => {
  const match = source.match(/title:\s*['"]Templates\/([^'"]+)['"]/);
  return match ? match[1] : null;
};

const extractStories = (source: string): Array<{ name: string; html: string }> => {
  const stories: Array<{ name: string; html: string }> = [];
  const exportPattern = /^export const (\w+) = \{/gm;
  let match: RegExpExecArray | null;
  while ((match = exportPattern.exec(source)) !== null) {
    const exportName = match[1];
    const blockStart = match.index + match[0].length;
    const nameMatch = source.slice(blockStart, blockStart + 500).match(/name:\s*['"]([^'"]+)['"]/);
    const storyName = nameMatch ? nameMatch[1] : exportNameToTitle(exportName);
    const blockSlice = source.slice(blockStart);
    const htmlIdx = blockSlice.indexOf('html`');
    if (htmlIdx === -1) continue;
    const rawHtml = extractTemplateLiteralContent(source, blockStart + htmlIdx + 5);
    const html = dedent(rawHtml);
    if (!html) continue;
    stories.push({ name: storyName, html });
  }
  return stories;
};

const extractSection = (docs: string, heading: string): string => {
  const re = new RegExp(`###\\s+${heading}\\n+([\\s\\S]*?)(?=\\n+###(?!#)|$)`, 'i');
  const m = docs.match(re);
  return m ? m[1].trim() : '';
};

const promoteSubheadings = (block: string): string =>
  block.replace(/^####\s+/gm, '### ');

export const buildTemplates = async () => {
  const spinner = ora({ prefixText: 'Templates:', text: 'Generating static metadata...' }).start();

  try {
    spinner.text = 'Cleaning up old metadata...';
    rmSync(templatesPackagePath, { recursive: true, force: true });
    spinner.succeed('Old metadata cleaned up.');

    await createPath(templatesPackagePath);
    spinner.text = 'Generating templates metadata...';

    const storyFiles = (await fs.readdir(DOCS_TEMPLATES_DIR)).filter(f => f.endsWith('.stories.ts'));
    const componentToTemplates = new Map<string, string[]>();

    await Promise.all(
      storyFiles.map(async file => {
        const name = basename(file, '.stories.ts');
        const source = await fs.readFile(join(DOCS_TEMPLATES_DIR, file), 'utf-8');
        const components = extractComponents(source);
        const stories = extractStories(source);
        const title = extractDefaultTitle(source) ?? name;

        const frontmatter = [
          '---',
          `name: ${name}`,
          `title: ${title}`,
          'components:',
          ...components.map(c => `  - ${c}`),
          'version: 1.0.0',
          '---'
        ].join('\n');

        const content = [frontmatter, ...stories.map(s => `## Template: ${s.name}\n\n\`\`\`html\n${s.html}\n\`\`\``)].join('\n\n');
        await fs.writeFile(join(templatesPackagePath, `${name}.md`), content);

        for (const tag of components) {
          const list = componentToTemplates.get(tag) ?? [];
          list.push(name);
          componentToTemplates.set(tag, list);
        }
      })
    );

    spinner.succeed('Templates metadata generated successfully.');
    spinner.text = 'Finalising component metadata into subdirectories...';

    const compFiles = (await fs.readdir(componentPath)).filter(f => f.endsWith('.json'));

    // First pass: build a tagName → summary map for related component descriptions
    const summaryMap = new Map<string, string>();
    await Promise.all(
      compFiles.map(async file => {
        const raw = await fs.readFile(join(componentPath, file), 'utf-8').catch(() => null);
        if (!raw) return;
        const { api } = JSON.parse(raw) as { api: { tagName: string; summary: string } };
        if (api?.tagName) summaryMap.set(api.tagName, api.summary ?? '');
      })
    );

    // Second pass: write final metadata
    await Promise.all(
      compFiles.map(async file => {
        const tagName = basename(file, '.json');
        const raw = await fs.readFile(join(componentPath, file), 'utf-8').catch(() => null);
        if (!raw) return;

        const { api, docs, relatedComponents, stories } = JSON.parse(raw) as {
          api: { tagName: string; summary: string; props: string; events: string; slots: string; parts: string };
          docs: string | null;
          relatedComponents: string[];
          stories: Story[];
        };

        const templates = (componentToTemplates.get(tagName) ?? []).sort();
        const storySlugList = stories.map(s => s.slug);

        // Create component subdirectory and stories subfolder
        const compDir = join(componentPath, tagName);
        const storiesDir = join(compDir, 'stories');
        mkdirSync(storiesDir, { recursive: true });

        // Write per-story files into stories/ subfolder
        await Promise.all(
          stories.map(story => {
            const lines: string[] = [];
            if (story.description) lines.push(story.description, '');
            lines.push('```html', story.html, '```');
            return fs.writeFile(join(storiesDir, `${story.slug}.md`), lines.join('\n'));
          })
        );

        // CSS parts — names only, no descriptions
        const partNames = api.parts
          ? api.parts.split('\n').map(line => line.replace(/^part\.([\w-]+):.*/, 'part.$1')).filter(Boolean)
          : [];

        // Build info.md sections
        const sections: string[] = [];

        // Overview
        sections.push(`## Overview\n\n\`<${tagName}>\` — ${api.summary}`);

        // API section with sub-headings
        const apiSubSections: string[] = [];

        if (storySlugList.length) {
          apiSubSections.push(
            `### Examples\n\nUse the component-api-examples tool to retrieve the HTML for any of these examples on how to use the component and its API:\n\n${storySlugList.map(s => `- ${tagName}/${s}`).join('\n')}`
          );
        }
        if (api.props) apiSubSections.push(`### Key Properties\n\n${api.props}`);
        if (api.events) apiSubSections.push(`### Events\n\n${api.events}`);
        if (api.slots) apiSubSections.push(`### Slots\n\n${api.slots}`);
        if (partNames.length) apiSubSections.push(`### CSS Parts\n\n${partNames.join('\n')}`);

        if (apiSubSections.length) sections.push(`## API\n\n${apiSubSections.join('\n\n')}`);

        // Guidelines section
        if (docs) {
          const guideSubSections: string[] = [];
          const useCases = extractSection(docs, 'Common Use Cases');
          if (useCases) guideSubSections.push(`### Use Cases\n\n${useCases}`);
          const guidelines = extractSection(docs, 'Usage Guidelines');
          if (guidelines) guideSubSections.push(`### Rules\n\n${promoteSubheadings(guidelines)}`);
          const accessibility = extractSection(docs, 'Accessibility Information');
          if (accessibility) guideSubSections.push(`### Accessibility\n\n${accessibility}`);
          if (guideSubSections.length) sections.push(`## Guidelines\n\n${guideSubSections.join('\n\n')}`);
        }

        // Related Templates
        if (templates.length) {
          sections.push(
            `### Related Templates\n\n${templates.map(t => `- ${t}`).join('\n')}\n\nUse the template-info tool to retrieve the full code for any of these templates.`
          );
        }

        // Related Components (with summary descriptions)
        if (relatedComponents.length) {
          const lines = relatedComponents.map(c => {
            const desc = summaryMap.get(c);
            return desc ? `- ${c}: ${desc}` : `- ${c}`;
          });
          sections.push(
            `### Related Components\n\n${lines.join('\n')}\n\nUse the component-info tool to retrieve the full code for any of these components.`
          );
        }

        await fs.writeFile(join(compDir, 'info.md'), sections.join('\n\n'));

        // Remove intermediate JSON
        await fs.unlink(join(componentPath, file)).catch(() => null);
      })
    );

    spinner.succeed('Component subdirectories finalised.');

    // Finalize styles metadata: convert intermediate JSON to subdirectories with info.md + stories/
    spinner.text = 'Finalising style metadata into subdirectories...';

    const styleFiles = (await fs.readdir(stylesPath)).filter(f => f.endsWith('.json'));

    await Promise.all(
      styleFiles.map(async file => {
        const styleName = basename(file, '.json');
        const raw = await fs.readFile(join(stylesPath, file), 'utf-8').catch(() => null);
        if (!raw) return;

        const { docs, relatedTemplates, stories } = JSON.parse(raw) as {
          docs: string | null;
          relatedTemplates: string[];
          stories: Story[];
        };

        const storySlugList = stories.map(s => s.slug);

        // Create style subdirectory and stories subfolder
        const styleDir = join(stylesPath, styleName);
        const storiesDir = join(styleDir, 'stories');
        mkdirSync(storiesDir, { recursive: true });

        // Write per-story files into stories/ subfolder
        await Promise.all(
          stories.map(story => {
            const lines: string[] = [];
            if (story.description) lines.push(story.description, '');
            lines.push('```html', story.html, '```');
            return fs.writeFile(join(storiesDir, `${story.slug}.md`), lines.join('\n'));
          })
        );

        // Build info.md sections
        const sections: string[] = [];

        // Overview
        sections.push(`## Overview\n\n\`${styleName}\` style utility`);

        // API section with sub-headings
        const apiSubSections: string[] = [];

        if (storySlugList.length) {
          apiSubSections.push(
            `### Examples\n\nUse the style-api-examples tool to retrieve the HTML for any of these examples on how to use the style:\n\n${storySlugList.map(s => `- ${styleName}/${s}`).join('\n')}`
          );
        }

        if (apiSubSections.length) sections.push(`## API\n\n${apiSubSections.join('\n\n')}`);

        // Guidelines section
        if (docs) {
          const guideSubSections: string[] = [];
          const useCases = extractSection(docs, 'Common Use Cases');
          if (useCases) guideSubSections.push(`### Use Cases\n\n${useCases}`);
          const guidelines = extractSection(docs, 'Usage Guidelines');
          if (guidelines) guideSubSections.push(`### Rules\n\n${promoteSubheadings(guidelines)}`);
          const accessibility = extractSection(docs, 'Accessibility Information');
          if (accessibility) guideSubSections.push(`### Accessibility\n\n${accessibility}`);
          if (guideSubSections.length) sections.push(`## Guidelines\n\n${guideSubSections.join('\n\n')}`);
        }

        // Related Templates
        if (relatedTemplates.length) {
          sections.push(
            `### Related Templates\n\n${relatedTemplates.map(t => `- ${t}`).join('\n')}\n\nUse the template-info tool to retrieve the full code for any of these templates.`
          );
        }

        await fs.writeFile(join(styleDir, 'info.md'), sections.join('\n\n'));

        // Remove intermediate JSON
        await fs.unlink(join(stylesPath, file)).catch(() => null);
      })
    );

    spinner.succeed('Style subdirectories finalised.');
  } catch (error) {
    spinner.fail(`Failed to generate templates metadata. Error: ${error as string}`);
    throw error;
  }
};
