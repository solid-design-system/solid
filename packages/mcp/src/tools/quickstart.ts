import fs from 'node:fs/promises';
import { join } from 'node:path';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
  componentPackageDocsPath,
  quickstartPackageDocsPath,
  stylePackageDocsPath,
  tokenPackageDocsPath
} from '../utilities/index.js';

interface DocEntry {
  slug: string;
  filePath: string;
  description: string;
}

interface DocSource {
  slug: string;
  filePath: string;
}

const QUICKSTART_DOCS: DocSource[] = [
  { slug: 'Quickstart', filePath: join(quickstartPackageDocsPath, 'quickstart.md') },
  { slug: 'components/Installation', filePath: join(componentPackageDocsPath, 'installation.md') },
  { slug: 'components/Usage', filePath: join(componentPackageDocsPath, 'usage.md') },
  { slug: 'styles/Installation', filePath: join(stylePackageDocsPath, 'installation.md') },
  { slug: 'styles/Usage', filePath: join(stylePackageDocsPath, 'usage.md') },
  { slug: 'tokens/Installation', filePath: join(tokenPackageDocsPath, 'installation.md') },
  { slug: 'tokens/Usage', filePath: join(tokenPackageDocsPath, 'usage.md') }
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, '');

const isSafePath = (value: string): boolean => {
  const parts = value.split('/').filter(Boolean);
  return parts.length > 0 && parts.every(part => part !== '.' && part !== '..' && !part.includes('\0'));
};

const readIfExists = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return null;
  }
};

/** Extract the first H1 heading from raw MDX, falling back to the slug basename. */
const extractHeading = (raw: string, fallback: string): string => {
  const match = raw.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
};

async function discoverDocs(): Promise<DocEntry[]> {
  const entries: DocEntry[] = [];

  for (const source of QUICKSTART_DOCS) {
    const content = await readIfExists(source.filePath);
    if (!content) continue;

    entries.push({
      slug: source.slug,
      filePath: source.filePath,
      description: extractHeading(content, source.slug)
    });
  }

  return entries;
}

// ---------------------------------------------------------------------------
// Tool registration
// ---------------------------------------------------------------------------

export const quickstartTool = (server: McpServer) => {
  server.registerTool(
    'quickstart',
    {
      title: 'Quick Start',
      description: `Solid Design System quick-start documentation. 
        - Call without arguments to list available docs. 
        - Pass \`doc\` to retrieve one quick-start page.`,
      inputSchema: {
        doc: z.string().optional().describe('Documentation name. Omit to see the full list.')
      }
    },
    async ({ doc }) => {
      const docs = await discoverDocs();

      if (!doc) {
        if (docs.length === 0) {
          return { content: [{ type: 'text', text: 'No quick-start docs found.' }] };
        }

        const lines = ['## Available Quick Start Docs', ''];
        for (const item of docs) {
          lines.push(`- ${item.slug}`);
        }

        return { content: [{ type: 'text', text: lines.join('\n') }] };
      }

      const normalizedDoc = trimSlashes(doc);

      if (!normalizedDoc) {
        return {
          content: [{ type: 'text', text: '`doc` must not be empty. Omit it to list available slugs.' }]
        };
      }

      if (!isSafePath(normalizedDoc)) {
        return {
          content: [{ type: 'text', text: '`doc` contains an invalid path. Use a listed slug.' }]
        };
      }

      const selectedDoc = docs.find(item => item.slug.toLowerCase() === normalizedDoc.toLowerCase());
      if (!selectedDoc) {
        return {
          content: [
            {
              type: 'text',
              text:
                `No documentation found for "${doc}". Available slugs:\n` +
                docs.map(item => `- ${item.slug}`).join('\n')
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

      return { content: [{ type: 'text', text: content }] };
    }
  );
};
