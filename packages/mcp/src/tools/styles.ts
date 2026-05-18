import fs from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { stylesPath, stylePackageDocsPath, getAvailableStyles } from '../utilities/index.js';

const readIfExists = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return null;
  }
};

/** Lists all package-level doc slugs (e.g. "installation", "usage"). */
const getAvailablePackageDocs = async (): Promise<string[]> => {
  try {
    const entries = await fs.readdir(stylePackageDocsPath, { withFileTypes: true });
    return entries
      .filter(d => d.isFile() && extname(d.name) === '.md')
      .map(d => basename(d.name, '.md'))
      .sort();
  } catch {
    return [];
  }
};

/**
 * Tool: styles
 *
 * Unified entry point for everything styles-related.
 *
 * - No args → list all style utilities + list all package docs topics
 * - `style` only → full spec (usage guidelines + class names)
 * - `style` + `example` → HTML example for that story
 * - `doc` → package-level guide (Installation, Usage, …)
 */
export const stylesTool = (server: McpServer) => {
  server.registerTool(
    'styles',
    {
      description:
        'Solid Design System CSS style utilities. ' +
        'Call without arguments to list all style utilities and available package docs. ' +
        'Pass `style` (e.g. "sd-chip" or "chip") to get the full spec (guidelines, class names). ' +
        'Pass `style` + `example` to get the HTML example for a specific usage pattern. ' +
        'Pass `doc` (e.g. "installation") to get a package-level guide.',
      inputSchema: {
        style: z
          .string()
          .optional()
          .describe('Style name with or without the "sd-" prefix, e.g. "chip" or "sd-chip". Omit to see all.'),
        example: z
          .string()
          .optional()
          .describe(
            'Example slug for an HTML usage example, e.g. "inverted" or "size". ' +
              'Requires `style`. Use `style` alone first to see available slugs.'
          ),
        doc: z
          .string()
          .optional()
          .describe('Package-level guide slug, e.g. "installation", "usage". Omit to see all available topics.')
      },
      title: 'Styles'
    },
    async ({ style, example, doc }) => {
      // --- package-level doc ---
      if (doc) {
        const content = await readIfExists(join(stylePackageDocsPath, `${doc}.md`));
        if (!content) {
          const available = await getAvailablePackageDocs();
          return {
            content: [
              {
                type: 'text',
                text: `No package doc found for "${doc}". Available docs:\n` + available.map(d => `- ${d}`).join('\n')
              }
            ]
          };
        }
        return { content: [{ type: 'text', text: content }] };
      }

      // --- specific style story (HTML example) ---
      if (style && example) {
        const name = style.startsWith('sd-') ? style : `sd-${style}`;
        const storyMd = await readIfExists(join(stylesPath, name, 'stories', `${example}.md`));
        if (!storyMd) {
          return {
            content: [
              {
                type: 'text',
                text: `No example "${example}" found for "${name}". Use \`style\` alone to see available examples.`
              }
            ]
          };
        }
        return { content: [{ type: 'text', text: storyMd }] };
      }

      // --- specific style spec ---
      if (style) {
        const name = style.startsWith('sd-') ? style : `sd-${style}`;
        const infoMd = await readIfExists(join(stylesPath, name, 'info.md'));
        if (!infoMd) {
          return {
            content: [
              {
                type: 'text',
                text: `No metadata found for "${style}". Call \`styles\` without arguments to see all available styles.`
              }
            ]
          };
        }
        return { content: [{ type: 'text', text: infoMd }] };
      }

      // --- no args: index ---
      const [styles, packageDocs] = await Promise.all([getAvailableStyles(), getAvailablePackageDocs()]);

      const text = [
        '## Solid Design System Style Utilities',
        '',
        'Use `style` to get the full spec for any specific style utility.',
        '',
        styles.map(s => `- ${s}`).join('\n'),
        '',
        '## Package Docs',
        '',
        'Use `doc` to retrieve any of the following guides:',
        '',
        packageDocs.map(d => `- ${d}`).join('\n')
      ].join('\n');

      return { content: [{ type: 'text', text }] };
    }
  );
};
