import fs from 'node:fs/promises';
import { mkdirSync } from 'node:fs';
import { dirname, join, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';
import { componentPackageDocsPath, stylePackageDocsPath } from '../utilities/index.js';

const SKIP = new Set(['changelog', 'contributing', 'migration', 'index']);

/** Absolute path to the docs stories/packages directory */
const DOCS_PACKAGES_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../../docs/src/stories/packages'
);

/**
 * Strip Storybook-specific syntax from MDX, returning plain Markdown.
 */
const cleanMdx = (raw: string): string =>
  raw
    // Remove import lines
    .replace(/^import\s+.*\n/gm, '')
    // Remove <Meta .../>  (single or multi-line)
    .replace(/<Meta\s[^>]*\/>/gs, '')
    // Remove html:preview fences → plain html
    .replace(/```html:preview/g, '```html')
    // Remove any remaining JSX-style self-closing tags from storybook
    .replace(/<[A-Z][A-Za-z]*\s[^>]*\/>/gs, '')
    // Collapse multiple blank lines
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const buildDocsForPackage = async (
  sourceDir: string,
  outputDir: string,
  label: string
): Promise<void> => {
  const spinner = ora({ prefixText: 'MCP:', text: `Building ${label} package docs...` }).start();
  mkdirSync(outputDir, { recursive: true });

  let entries: string[];
  try {
    entries = await fs.readdir(sourceDir);
  } catch {
    spinner.warn(`${label} source dir not found: ${sourceDir}`);
    return;
  }

  const mdxFiles = entries.filter(f => {
    if (extname(f) !== '.mdx') return false;
    const slug = basename(f, '.mdx').toLowerCase().replace(/\s+/g, '-');
    return !SKIP.has(slug);
  });

  await Promise.all(
    mdxFiles.map(async file => {
      const raw = await fs.readFile(join(sourceDir, file), 'utf-8');
      const cleaned = cleanMdx(raw);
      const slug = basename(file, '.mdx').toLowerCase().replace(/\s+/g, '-');
      await fs.writeFile(join(outputDir, `${slug}.md`), cleaned, 'utf-8');
    })
  );

  spinner.succeed(`${label} package docs: ${mdxFiles.length} file(s) written to ${outputDir}`);
};

export const buildPackageDocs = async (): Promise<void> => {
  await buildDocsForPackage(
    join(DOCS_PACKAGES_DIR, 'components'),
    componentPackageDocsPath,
    'Components'
  );
  await buildDocsForPackage(
    join(DOCS_PACKAGES_DIR, 'styles'),
    stylePackageDocsPath,
    'Styles'
  );
};
