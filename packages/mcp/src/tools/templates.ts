import fs from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { templatesPackagePath } from '../utilities/index.js';

const readIfExists = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return null;
  }
};

const listTemplateNames = async (): Promise<string[]> => {
  try {
    return (await fs.readdir(templatesPackagePath, { withFileTypes: true }))
      .filter(d => d.isFile() && d.name.endsWith('.md'))
      .map(d => d.name.replace(/\.md$/, ''))
      .sort();
  } catch {
    return [];
  }
};

/**
 * Tool: templates
 *
 * Unified entry point for all Solid Design System templates.
 *
 * - No args → list all templates
 * - `template` → source code + component inventory for that template
 * - `component` or `style` → filter the list to templates that use that component/style
 */
export const templatesTool = (server: McpServer) => {
  server.registerTool(
    'templates',
    {
      description: `Solid Design System templates — real-world compositions of multiple sd-* components. 
        - Call without arguments to list all templates. 
        - Pass \`template\` (e.g. "forms") to get the source code and component inventory for one template. 
        - Pass \`component\` (e.g. "sd-button") or \`style\` (e.g. "sd-chip" or "chip") to list templates that use that tag. 
        - Use either \`component\` or \`style\` for filtering, not both together. 
        - Do not combine \`template\` with \`component\` or \`style\`.`,
      inputSchema: {
        template: z
          .string()
          .optional()
          .describe('Template name as returned by the list (e.g. "forms" or "button"). Omit to list all.'),
        component: z
          .string()
          .optional()
          .describe('Optional sd-* component tag name to filter the template list (e.g. "sd-button").'),
        style: z
          .string()
          .optional()
          .describe('Optional style name (with or without "sd-" prefix) to filter the template list (e.g. "sd-chip").')
      },
      title: 'Templates'
    },
    async ({ template, component, style }) => {
      // Validate if `template` is combined with `component`/`style` - not allowed
      if (template && (component || style)) {
        return {
          content: [
            {
              type: 'text',
              text: 'Invalid arguments: `template` cannot be combined with `component` or `style`. Use either `template` alone or a filter query.'
            }
          ]
        };
      }

      // Validate if both `component` and `style` are provided - not allowed
      if (component && style) {
        return {
          content: [
            {
              type: 'text',
              text: 'Invalid arguments: `component` and `style` cannot be combined. Use one filter at a time.'
            }
          ]
        };
      }

      // --- specific template ---
      if (template) {
        const content = await readIfExists(join(templatesPackagePath, `${template}.md`));
        if (!content) {
          return {
            content: [
              {
                type: 'text',
                text: `No template found named "${template}". Call \`templates\` without arguments to see all available templates.`
              }
            ]
          };
        }
        return { content: [{ type: 'text', text: content }] };
      }

      // --- list (optionally filtered) ---
      const allNames = await listTemplateNames();
      if (!allNames.length) {
        return {
          content: [{ type: 'text', text: 'Template metadata not yet built. Run build:metadata first.' }]
        };
      }

      const filterTag = component ?? (style ? (style.startsWith('sd-') ? style : `sd-${style}`) : undefined);

      let entries = allNames;
      if (filterTag) {
        const filtered: string[] = [];
        await Promise.all(
          allNames.map(async name => {
            const raw = await readIfExists(join(templatesPackagePath, `${name}.md`));
            if (!raw) return;
            const yamlMatch = raw.match(/^---\n([\s\S]*?)\n---/);
            if (yamlMatch) {
              const tags = [...yamlMatch[1].matchAll(/^ {2}- (sd-[\w-]+)$/gm)].map(m => m[1]);
              if (tags.includes(filterTag)) filtered.push(name);
            }
          })
        );
        entries = filtered.sort();
      }

      if (!entries.length) {
        const filter = filterTag ? ` that use "${filterTag}"` : '';
        return { content: [{ type: 'text', text: `No templates found${filter}.` }] };
      }

      const header = filterTag ? `Templates that use \`${filterTag}\`:` : 'Available Solid Design System templates:';

      return {
        content: [{ type: 'text', text: `${header}\n${entries.map(t => `- ${t}`).join('\n')}` }]
      };
    }
  );
};
