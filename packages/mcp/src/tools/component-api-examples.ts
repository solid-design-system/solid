import fs from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { componentPath } from '../utilities/index.js';

const readIfExists = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return null;
  }
};

/**
 * Tool: component-story
 * Returns the HTML example and description for a specific component story.
 * Story slugs are listed in the `stories` array in each component's info.md frontmatter.
 */
export const componentApiExamplesTool = (server: McpServer) => {
  server.registerTool(
    'component-api-examples',
    {
      description:
        'Get the HTML example for a specific Solid Design System component story. ' +
        'Stories demonstrate concrete usage patterns like "inverted", "no-shadow", "animated". ' +
        'Use component-docs to list available story slugs for a component.',
      inputSchema: {
        component: z.string().startsWith('sd-').describe('The component tag name, e.g. "sd-audio".'),
        story: z.string().describe('The story slug, e.g. "animated" or "no-shadow".')
      },
      title: 'Component API examples'
    },
    async ({ component, story }) => {
      const storyMd = await readIfExists(join(componentPath, component, 'stories', `${story}.md`));

      if (!storyMd) {
        return {
          content: [
            {
              type: 'text',
              text: `No story "${story}" found for "${component}". Use component-docs to see available stories.`            }
          ]
        };
      }

      return {
        content: [{ type: 'text', text: storyMd }]
      };
    }
  );
};
