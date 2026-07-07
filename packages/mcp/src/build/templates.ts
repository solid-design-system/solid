import fs from 'node:fs/promises';
import { mkdirSync, rmSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';
import { componentPath, createPath, templatesPackagePath, stylesPath } from '../utilities/index.js';
import type { Example } from './components.js';

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

const exportNameToTitle = (name: string): string => name.replace(/([A-Z])/g, ' $1').trim();

const extractDefaultTitle = (source: string): string | null => {
  const match = source.match(/title:\s*['"]Templates\/([^'"]+)['"]/);
  return match ? match[1] : null;
};

const extractExamples = (source: string): { name: string; html: string }[] => {
  const examples: { name: string; html: string }[] = [];
  const exportPattern = /^export const (\w+) = \{/gm;
  let match: RegExpExecArray | null;
  while ((match = exportPattern.exec(source)) !== null) {
    const exportName = match[1];
    const blockStart = match.index + match[0].length;
    const nameMatch = source.slice(blockStart, blockStart + 500).match(/name:\s*['"]([^'"]+)['"]/);
    const exampleName = nameMatch ? nameMatch[1] : exportNameToTitle(exportName);
    const blockSlice = source.slice(blockStart);
    const htmlIdx = blockSlice.indexOf('html`');
    if (htmlIdx === -1) continue;
    const rawHtml = extractTemplateLiteralContent(source, blockStart + htmlIdx + 5);
    const html = dedent(rawHtml);
    if (!html) continue;
    examples.push({ name: exampleName, html });
  }
  return examples;
};

const extractSection = (docs: string, heading: string): string => {
  const re = new RegExp(`###\\s+${heading}\\n+([\\s\\S]*?)(?=\\n+###(?!#)|$)`, 'i');
  const m = docs.match(re);
  return m ? m[1].trim() : '';
};

const promoteSubheadings = (block: string): string => block.replace(/^####\s+/gm, '### ');

export const buildTemplates = async () => {
  const spinner = ora({ prefixText: 'Templates:', text: 'Generating static metadata...' }).start();

  try {
    spinner.text = 'Cleaning up old metadata...';
    rmSync(templatesPackagePath, { recursive: true, force: true });
    spinner.succeed('Old metadata cleaned up.');

    await createPath(templatesPackagePath);
    spinner.text = 'Generating templates metadata...';

    const storyFiles = (await fs.readdir(DOCS_TEMPLATES_DIR)).filter(f => f.endsWith('.stories.ts'));

    await Promise.all(
      storyFiles.map(async file => {
        const name = basename(file, '.stories.ts');
        const source = await fs.readFile(join(DOCS_TEMPLATES_DIR, file), 'utf-8');
        const components = extractComponents(source);
        const examples = extractExamples(source);
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

        const content = [
          frontmatter,
          ...examples.map(example => `## Template: ${example.name}\n\n\`\`\`html\n${example.html}\n\`\`\``)
        ].join('\n\n');
        await fs.writeFile(join(templatesPackagePath, `${name}.md`), content);
      })
    );

    spinner.succeed('Templates metadata generated successfully.');
    spinner.text = 'Finalising component metadata into subdirectories...';

    const compFiles = (await fs.readdir(componentPath)).filter(f => f.endsWith('.json'));

    // Write final metadata
    await Promise.all(
      compFiles.map(async file => {
        const tagName = basename(file, '.json');
        const raw = await fs.readFile(join(componentPath, file), 'utf-8').catch(() => null);
        if (!raw) return;

        const {
          api,
          docs,
          stories: examples
        } = JSON.parse(raw) as {
          api: { tagName: string; summary: string; props: string; events: string; slots: string; parts: string };
          docs: string | null;
          stories: Example[];
        };

        const exampleSlugList = examples.map(example => example.slug);

        // Create component subdirectory and stories subfolder
        const compDir = join(componentPath, tagName);
        const storiesDir = join(compDir, 'stories');
        mkdirSync(storiesDir, { recursive: true });

        // Write per-story files into stories/ subfolder
        await Promise.all(
          examples.map(example => {
            const lines: string[] = [];
            if (example.description) lines.push(example.description, '');
            lines.push('```html', example.html, '```');
            return fs.writeFile(join(storiesDir, `${example.slug}.md`), lines.join('\n'));
          })
        );

        // CSS parts — names only, no descriptions
        const partNames = api.parts
          ? api.parts
              .split('\n')
              .map(line => line.replace(/^part\.([\w-]+):.*/, 'part.$1'))
              .filter(Boolean)
          : [];

        // Build info.md sections
        const sections: string[] = [];

        // Overview
        sections.push(`## Overview\n\n\`<${tagName}>\` — ${api.summary}`);

        // API section with sub-headings
        const apiSubSections: string[] = [];

        if (exampleSlugList.length) {
          apiSubSections.push(
            `### Examples\n\nUse the components tool by passing the args \`component\` and \`example\` for any of these combinations:\n\n${exampleSlugList.map(example => `- component: ${tagName}, example: ${example}`).join('\n')}`
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

        const {
          summary,
          docs,
          relatedTemplates,
          stories: examples
        } = JSON.parse(raw) as {
          summary: string | null;
          docs: string | null;
          relatedTemplates: string[];
          stories: Example[];
        };

        const exampleSlugList = examples.map(example => example.slug);

        // Create style subdirectory and stories subfolder
        const styleDir = join(stylesPath, styleName);
        const storiesDir = join(styleDir, 'stories');
        mkdirSync(storiesDir, { recursive: true });

        // Write per-story files into stories/ subfolder
        await Promise.all(
          examples.map(example => {
            const lines: string[] = [];
            if (example.description) lines.push(example.description, '');
            lines.push('```html', example.html, '```');
            return fs.writeFile(join(storiesDir, `${example.slug}.md`), lines.join('\n'));
          })
        );

        // Build info.md sections
        const sections: string[] = [];

        // Overview
        sections.push(`## Overview\n\n\`${styleName}\`${summary ? ` – ${summary}` : ' style utility'}`);

        // API section with sub-headings
        const apiSubSections: string[] = [];

        if (exampleSlugList.length) {
          apiSubSections.push(
            `### Examples\n\nUse the styles tool (with \`style\` + \`example\` args) to retrieve the HTML for any of these examples:\n\n${exampleSlugList.map(example => `- ${styleName}/${example}`).join('\n')}`
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
            `### Related Templates\n\n${relatedTemplates.map(t => `- ${t}`).join('\n')}\n\nUse the templates tool (with \`template\` arg) to retrieve the full code for any of these templates.`
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
