import fs from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { templatesPackagePath } from '../utilities/index.js';

/**
 * Tool: template-list
 * Lists all available Solid Design System templates.
 * Optionally filter to only templates that use a specific sd-* component.
 */
export const templateList = (server: McpServer) => {
  server.registerTool(
    'template-list',
    {
      description:
        'List all available Solid Design System templates. ' +
        'Optionally provide a component name to filter to only templates that use that component.',
      inputSchema: {
        component: z.string().optional().describe('Optional sd-* component tag name to filter by, e.g. "sd-button".')
      },
      title: 'List Solid Templates'
    },
    async ({ component }) => {
      let entries: string[];
      try {
        entries = (await fs.readdir(templatesPackagePath, { withFileTypes: true }))
          .filter(d => d.isFile() && d.name.endsWith('.md'))
          .map(d => d.name.replace(/\.md$/, ''));
      } catch {
        return {
          content: [{ type: 'text', text: 'Template metadata not yet built. Run build:metadata first.' }]
        };
      }

      if (component) {
        // Filter to templates that include the requested component
        const filtered: string[] = [];
        await Promise.all(
          entries.map(async name => {
            try {
              const raw = await fs.readFile(join(templatesPackagePath, `${name}.md`), 'utf-8');
              // Parse components array from YAML frontmatter
              const yamlMatch = raw.match(/^---\n([\s\S]*?)\n---/);
              if (yamlMatch) {
                const comps = [...yamlMatch[1].matchAll(/^  - (sd-[\w-]+)$/gm)].map(m => m[1]);
                if (comps.includes(component)) filtered.push(name);
              }
            } catch {
              /* skip missing */
            }
          })
        );
        entries = filtered.sort();
      }

      if (!entries.length) {
        const msg = component ? `No templates found that use "${component}".` : 'No templates found.';
        return { content: [{ type: 'text', text: msg }] };
      }

      const header = component ? `Templates that use \`${component}\`:` : 'Available Solid Design System templates:';

      return {
        content: [
          {
            type: 'text',
            text: `${header}\n${entries.map(t => `- ${t}`).join('\n')}`
          }
        ]
      };
    }
  );
};
