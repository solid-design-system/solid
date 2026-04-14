import fs from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { componentPath } from '../utilities/index.js';

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
 * Tool: component-docs
 * Returns everything an LLM needs to correctly use a Solid Design System component:
 *   - Usage docs (from the official Storybook MDX: use cases, guidelines, accessibility)
 *   - Compact API (properties, events, slots, CSS parts from custom-elements.json)
 *   - Which templates demonstrate this component in real-world compositions
 *
 * Keep context small: docs are ~3 KB, API ~2 KB. Never guess properties not in the API.
 */
export const componentInfoTool = (server: McpServer) => {
  server.registerTool(
    'component-docs',
    {
      description:
        'Get the full specification for a Solid Design System component: ' +
        'usage guidelines, when/how to use it, API (properties, events, slots, CSS parts), ' +
        'and which templates show it in real-world compositions.',
      inputSchema: {
        component: z.string().startsWith('sd-').describe('The component tag name, e.g. "sd-button".')
      },
      title: 'Component docs'
    },
    async ({ component }) => {
      const infoMd = await readIfExists(join(componentPath, component, 'info.md'));

      if (!infoMd) {
        return {
          content: [
            {
              type: 'text',
              text: `No metadata found for component "${component}". Use the component-list tool to see all available components.`

            }
          ]
        };
      }

      const text =
        '> IMPORTANT: Only use properties, events and slots listed in the API below.\n> Never invent attributes not present in this specification.\n\n' +
        infoMd;

      return {
        content: [{ type: 'text', text }]
      };
    }
  );
};
