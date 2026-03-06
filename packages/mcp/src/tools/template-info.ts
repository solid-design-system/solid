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
 * Returns the full Storybook story code for a template plus the list of
 * Solid components it uses. Use template-list to discover template names.
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
      const templateDir = join(templatesPackagePath, template);

      const [stories, componentsRaw] = await Promise.all([
        readIfExists(join(templateDir, 'stories.ts')),
        readIfExists(join(templateDir, 'components.json'))
      ]);

      if (!stories) {
        return {
          content: [
            {
              type: 'text',
              text: `No template found named "${template}". Use the template-list tool to see all available templates.`
            }
          ]
        };
      }

      const parts: string[] = [];

      if (componentsRaw) {
        const components: string[] = JSON.parse(componentsRaw);
        parts.push(`## Components used in this template\n${components.map(c => `- ${c}`).join('\n')}`);
      }

      parts.push(`## Template source\n\`\`\`typescript\n${stories}\n\`\`\``);

      return {
        content: [{ type: 'text', text: parts.join('\n\n') }]
      };
    }
  );
};
