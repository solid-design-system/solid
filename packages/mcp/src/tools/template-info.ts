import fs from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { templatesPackagePath } from '../utilities/index.js';

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
 * Tool: template-info
 * Returns the SKILL.md for a template, which contains the HTML for all template
 * variants and lists the Solid components it uses. Use template-list to discover template names.
 */
export const templateInfoTool = (server: McpServer) => {
  server.registerTool(
    'template-info',
    {
      description:
        'Get the source code and component inventory for a Solid Design System template. ' +
        'Templates are real-world compositions of multiple sd-* components.',
      inputSchema: {
        template: z.string().describe('Template name as returned by template-list, e.g. "forms" or "button".')
      },
      title: 'Template info'
    },
    async ({ template }) => {
      const skillMd = await readIfExists(join(templatesPackagePath, `${template}.md`));

      if (!skillMd) {
        return {
          content: [
            {
              type: 'text',
              text: `No template found named "${template}". Use the template-list tool to see all available templates.`
            }
          ]
        };
      }

      return {
        content: [{ type: 'text', text: skillMd }]
      };
    }
  );
};
