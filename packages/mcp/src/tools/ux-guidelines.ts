import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import fs from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import { z } from 'zod';
import { uxGuidelinesPath } from '../utilities/index.js';

interface GuidelineEntry {
  slug: string;
  filePath: string;
}

const readIfExists = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return null;
  }
};

const discoverGuidelines = async (): Promise<GuidelineEntry[]> => {
  try {
    const entries = await fs.readdir(uxGuidelinesPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isFile() && extname(entry.name) === '.md')
      .map(entry => ({
        filePath: join(uxGuidelinesPath, entry.name),
        slug: basename(entry.name, '.md')
      }))
      .sort((a, b) => a.slug.localeCompare(b.slug));
  } catch {
    return [];
  }
};

export const uxGuidelinesTool = (server: McpServer) => {
  server.registerTool(
    'ux_guidelines',
    {
      description:
        'Solid Design System UX pattern guidelines. Omit `guideline` to list available patterns, or pass a guideline slug such as "forms", "filter", "navigation", or "calculator" to retrieve it.',
      inputSchema: {
        guideline: z
          .enum(['calculator', 'filter', 'forms', 'navigation'])
          .optional()
          .describe('UX pattern slug. Omit to list available guidelines.')
      },
      title: 'UX Guidelines'
    },
    async ({ guideline }) => {
      const guidelines = await discoverGuidelines();

      if (!guideline) {
        return {
          content: [
            {
              type: 'text',
              text:
                guidelines.length > 0
                  ? `## Available UX Guidelines\n\n- ${guidelines.map(item => item.slug).join('\n- ')}`
                  : 'No UX guidelines found. Build the MCP metadata before requesting a guideline.'
            }
          ]
        };
      }

      const requestedSlug = guideline.toLowerCase().trim();
      const selectedGuideline = guidelines.find(item => item.slug.toLowerCase() === requestedSlug);
      if (!selectedGuideline) {
        return {
          content: [
            {
              type: 'text',
              text:
                `No UX guideline found for "${guideline}". Available guidelines:\n` +
                guidelines.map(item => `- ${item.slug}`).join('\n')
            }
          ]
        };
      }

      const content = await readIfExists(selectedGuideline.filePath);
      return {
        content: [
          {
            type: 'text',
            text: content ?? `Unable to read UX guideline "${selectedGuideline.slug}".`
          }
        ]
      };
    }
  );
};
