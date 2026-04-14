import fs from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { stylesPath } from '../utilities/index.js';

const readIfExists = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return null;
  }
};

/**
 * Tool: style-api-examples
 * Returns the HTML example and description for a specific style story.
 * Story slugs are listed in the `stories` array in each style's info.md.
 */
export const styleApiExamplesTool = (server: McpServer) => {
  server.registerTool(
    'style-api-examples',
    {
      description:
        'Get the HTML example for a specific Solid Design System style story. ' +
        'Stories demonstrate concrete usage patterns like "inverted", "size", "contrast". ' +
        'Use style-docs to list available story slugs for a style.',
      inputSchema: {
        style: z.string().startsWith('sd-').describe('The style name, e.g. "sd-display".'),
        example: z.string().describe('The story slug, e.g. "inverted" or "size".')
      },
      title: 'Style API examples'
    },
    async ({ style, example }) => {
      const storyMd = await readIfExists(join(stylesPath, style, 'stories', `${example}.md`));

      if (!storyMd) {
        return {
          content: [
            {
              type: 'text',
              text: `No story "${example}" found for "${style}". Use style-docs to see available stories.`
            }
          ]
        };
      }

      return {
        content: [{ type: 'text', text: storyMd }]
      };
    }
  );
};
