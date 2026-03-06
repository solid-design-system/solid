import fs from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { stylesPath } from '../utilities/index.js';

/**
 * Reads a file as text; returns null if it does not exist.
 */
const readIfExists = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return null;
  }
};

/**
 * Tool: style-docs
 * Returns everything needed to correctly apply a Solid Design System style utility:
 *   - Usage docs (from the official Storybook MDX: use cases, guidelines, accessibility)
 *   - All available CSS class names for this utility
 *
 * Use style-list first to discover available style names.
 */
export const stylesInfoTool = (server: McpServer) => {
  server.registerTool(
    'style-docs',
    {
      description:
        'Get the full specification for a Solid Design System CSS style utility: ' +
        'usage guidelines, when/how to use it, and all available CSS class names.',
      inputSchema: {
        style: z.string().describe('Style name with or without the "sd-" prefix, e.g. "chip" or "sd-chip".')
      },
      title: 'Style docs'
    },
    async ({ style }) => {
      // Normalise: accept both "chip" and "sd-chip"
      const name = style.startsWith('sd-') ? style : `sd-${style}`;
      const styleDir = join(stylesPath, name);

      const [docs, classesRaw] = await Promise.all([
        readIfExists(join(styleDir, 'docs.md')),
        readIfExists(join(styleDir, 'classes.txt'))
      ]);

      if (!docs && !classesRaw) {
        return {
          content: [
            {
              type: 'text',
              text: `No metadata found for style "${style}". Use the style-list tool to see all available styles.`
            }
          ]
        };
      }

      const parts: string[] = [
        '> IMPORTANT: Only use CSS classes listed in the Classes section below.\n> Never invent class names not present in this specification.'
      ];

      if (docs) parts.push(docs);

      if (classesRaw) {
        const classes = classesRaw.split('\n').filter(Boolean);
        parts.push(`\n## Available CSS Classes\n${classes.map(c => `- \`${c}\``).join('\n')}`);
      }

      return {
        content: [{ type: 'text', text: parts.join('\n\n') }]
      };
    }
  );
};
