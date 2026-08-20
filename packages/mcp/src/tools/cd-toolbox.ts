import fs from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { cdToolboxPath, cdToolboxPackageDocsPath, getAvailableCdToolboxItems } from '../utilities/index.js';
import { normalizeSafeSlug } from '../utilities/input.js';

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
    const entries = await fs.readdir(cdToolboxPackageDocsPath, { withFileTypes: true });
    return entries
      .filter(d => d.isFile() && extname(d.name) === '.md')
      .map(d => basename(d.name, '.md'))
      .sort();
  } catch {
    return [];
  }
};

/**
 * Tool: cd-toolbox
 *
 * Unified entry point for everything CD Toolbox-related.
 *
 * - No args → list all toolbox items + list all package docs topics
 * - `item` only → full spec (usage guidelines)
 * - `item` + `example` → HTML example for that story
 * - `doc` → package-level guide (Installation, Usage, …)
 */
export const cdToolboxTool = (server: McpServer) => {
  server.registerTool(
    'cd-toolbox',
    {
      description: `Solid Design System CD Toolbox utilities. 
        - Call without arguments to list all CD Toolbox items and available package docs. 
        - Pass \`item\` to get the full specification, including guidelines. 
        - Pass \`item\` + \`example\` to get one HTML usage example. 
        - Pass \`doc\` (e.g. "installation") to get a package-level guide. 
        - Do not combine \`doc\` with \`item\` or \`example\`.`,
      inputSchema: {
        item: z.string().optional().describe('Toolbox item name. Omit to see all.'),
        example: z
          .string()
          .optional()
          .describe(
            'Example slug for an HTML usage example. ' +
              'Requires `item`. Use `item` alone first to see available slugs.'
          ),
        doc: z
          .string()
          .optional()
          .describe('Package-level guide slug (e.g. "installation", "usage"). Omit to see all available topics.')
      },
      title: 'CD Toolbox'
    },
    async ({ item, example, doc }) => {
      if (doc && (item || example)) {
        return {
          content: [
            {
              type: 'text',
              text: 'Invalid arguments: `doc` cannot be combined with `item` or `example`. Use either `doc` alone or an item query.'
            }
          ]
        };
      }

      if (example && !item) {
        return {
          content: [
            {
              type: 'text',
              text: 'Invalid arguments: `example` requires `item`. Use both together, e.g. item="my-item", example="inverted".'
            }
          ]
        };
      }

      if (doc) {
        const safeDoc = normalizeSafeSlug(doc);
        if (!safeDoc) {
          return {
            content: [
              { type: 'text', text: 'Invalid arguments: `doc` contains an invalid path. Use a listed doc slug.' }
            ]
          };
        }

        const content = await readIfExists(join(cdToolboxPackageDocsPath, `${safeDoc}.md`));
        if (!content) {
          const available = await getAvailablePackageDocs();
          return {
            content: [
              {
                type: 'text',
                text:
                  `No package doc found for "${safeDoc}". Available docs:\n` + available.map(d => `- ${d}`).join('\n')
              }
            ]
          };
        }
        return { content: [{ type: 'text', text: content }] };
      }

      if (item && example) {
        const safeItem = normalizeSafeSlug(item);
        if (!safeItem) {
          return {
            content: [
              { type: 'text', text: 'Invalid arguments: `item` contains an invalid path. Use a listed item name.' }
            ]
          };
        }
        const safeExample = normalizeSafeSlug(example);
        if (!safeExample) {
          return {
            content: [
              {
                type: 'text',
                text: 'Invalid arguments: `example` contains an invalid path. Use a listed example slug.'
              }
            ]
          };
        }

        const storyMd = await readIfExists(join(cdToolboxPath, safeItem, 'stories', `${safeExample}.md`));
        if (!storyMd) {
          return {
            content: [
              {
                type: 'text',
                text: `No example "${safeExample}" found for "${safeItem}". Use \`item\` alone to see available examples.`
              }
            ]
          };
        }
        return { content: [{ type: 'text', text: storyMd }] };
      }

      if (item) {
        const safeItem = normalizeSafeSlug(item);
        if (!safeItem) {
          return {
            content: [
              { type: 'text', text: 'Invalid arguments: `item` contains an invalid path. Use a listed item name.' }
            ]
          };
        }
        const infoMd = await readIfExists(join(cdToolboxPath, safeItem, 'info.md'));
        if (!infoMd) {
          return {
            content: [
              {
                type: 'text',
                text: `No metadata found for "${safeItem}". Call \`cd-toolbox\` without arguments to see all available items.`
              }
            ]
          };
        }
        return { content: [{ type: 'text', text: infoMd }] };
      }

      const [items, packageDocs] = await Promise.all([getAvailableCdToolboxItems(), getAvailablePackageDocs()]);
      const text = [
        '## Solid Design System CD Toolbox',
        '',
        'Use `item` to get the full spec for any specific toolbox item.',
        '',
        items.map(i => (i.description ? `- ${i.name} - ${i.description}` : `- ${i.name}`)).join('\n'),
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
