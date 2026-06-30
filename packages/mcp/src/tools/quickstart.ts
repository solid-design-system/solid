import fs from 'node:fs/promises';
import { join } from 'node:path';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { docsSourceStoriesPath } from '../utilities/index.js';

type DocEntry = { slug: string; filePath: string };

const QUICKSTART_DOCS: DocEntry[] = [
  { slug: 'Quickstart', filePath: join(docsSourceStoriesPath, 'packages', 'Quickstart.mdx') },
  {
    slug: 'components/Installation',
    filePath: join(docsSourceStoriesPath, 'packages', 'components', 'Installation.mdx')
  },
  { slug: 'components/usage', filePath: join(docsSourceStoriesPath, 'packages', 'components', 'Usage.mdx') },
  { slug: 'styles/Installation', filePath: join(docsSourceStoriesPath, 'packages', 'styles', 'Installation.mdx') },
  { slug: 'styles/usage', filePath: join(docsSourceStoriesPath, 'packages', 'styles', 'Usage.mdx') },
  { slug: 'tokens/Installation', filePath: join(docsSourceStoriesPath, 'packages', 'tokens', 'Installation.mdx') },
  { slug: 'tokens/usage', filePath: join(docsSourceStoriesPath, 'packages', 'tokens', 'Usage.mdx') }
];

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, '');

const isSafePath = (value: string): boolean => {
  const parts = value.split('/').filter(Boolean);
  return parts.length > 0 && parts.every(part => part !== '.' && part !== '..');
};

const readIfExists = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return null;
  }
};

const cleanMdx = (raw: string): string =>
  raw
    .replace(/^import\s+.*\n/gm, '')
    .replace(/<Meta\s[^>]*\/>/gs, '')
    .replace(/```html:preview/g, '```html')
    .replace(/<[A-Z][A-Za-z]*\s[^>]*\/>/gs, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

export const quickstartTool = (server: McpServer) => {
  server.registerTool(
    'quickstart',
    {
      description:
        'Solid Design System quick start documentation across packages. ' +
        'Call without arguments to list the supported quick start docs. ' +
        'Pass `doc` to retrieve one quick start page.',
      inputSchema: {
        doc: z
          .string()
          .optional()
          .describe(
            'Documentation slug: "Quickstart", "components/Installation", "components/usage", "styles/Installation", "styles/usage", "tokens/Installation", or "tokens/usage".'
          )
      },
      title: 'Quick Start'
    },
    async ({ doc }) => {
      const availableDocs = QUICKSTART_DOCS;

      if (!doc) {
        return {
          content: [
            {
              type: 'text',
              text: [
                '## Quick Start Docs',
                '',
                availableDocs.length
                  ? availableDocs.map(item => `- ${item.slug}`).join('\n')
                  : 'No quick-start docs found.'
              ].join('\n')
            }
          ]
        };
      }

      const normalizedDoc = trimSlashes(doc);
      if (!isSafePath(normalizedDoc)) {
        return {
          content: [
            {
              type: 'text',
              text: 'Invalid `doc` path. Use one of the supported quick start doc slugs.'
            }
          ]
        };
      }

      const selectedDoc = availableDocs.find(item => item.slug.toLowerCase() === normalizedDoc.toLowerCase());
      if (!selectedDoc) {
        return {
          content: [
            {
              type: 'text',
              text:
                `No documentation found for "${doc}". Available docs:\n` +
                availableDocs.map(item => `- ${item.slug}`).join('\n')
            }
          ]
        };
      }

      const content = await readIfExists(selectedDoc.filePath);
      if (!content) {
        return {
          content: [{ type: 'text', text: `Unable to read documentation for "${selectedDoc.slug}".` }]
        };
      }

      return {
        content: [{ type: 'text', text: cleanMdx(content) }]
      };
    }
  );
};
