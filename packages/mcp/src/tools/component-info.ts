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
      const compDir = join(componentPath, component);

      const [docs, apiRaw, templatesRaw] = await Promise.all([
        readIfExists(join(compDir, 'docs.md')),
        readIfExists(join(compDir, 'api.json')),
        readIfExists(join(compDir, 'templates.json'))
      ]);

      if (!docs && !apiRaw) {
        return {
          content: [
            {
              type: 'text',
              text: `No metadata found for component "${component}". Use the component-list tool to see all available components.`
            }
          ]
        };
      }

      const parts: string[] = [
        '> IMPORTANT: Only use properties, events and slots listed in the API below.\n> Never invent attributes not present in this specification.'
      ];

      if (docs) parts.push(docs);

      if (apiRaw) {
        try {
          const api = JSON.parse(apiRaw);
          const lines: string[] = ['\n## API'];

          if (api.properties?.length) {
            lines.push('\n### Properties');
            for (const p of api.properties) {
              lines.push(
                `- **${p.name}** \`${p.type}\`${p.default ? ` (default: \`${p.default}\`)` : ''}${p.description ? ` — ${p.description}` : ''}`
              );
            }
          }
          if (api.events?.length) {
            lines.push('\n### Events');
            for (const e of api.events) lines.push(`- **${e.name}**${e.description ? ` — ${e.description}` : ''}`);
          }
          if (api.slots?.length) {
            lines.push('\n### Slots');
            for (const s of api.slots) lines.push(`- **${s.name}**${s.description ? ` — ${s.description}` : ''}`);
          }
          if (api.cssParts?.length) {
            lines.push('\n### CSS Parts');
            for (const p of api.cssParts) lines.push(`- **${p.name}**${p.description ? ` — ${p.description}` : ''}`);
          }
          parts.push(lines.join('\n'));
        } catch {
          /* malformed JSON, skip */
        }
      }

      const templates: string[] = templatesRaw ? JSON.parse(templatesRaw) : [];
      if (templates.length) {
        parts.push(
          `\n## Related Templates\n${templates.map(t => `- ${t}`).join('\n')}\n\nUse the template-info tool to retrieve the full code for any of these templates.`
        );
      }

      return {
        content: [{ type: 'text', text: parts.join('\n\n') }]
      };
    }
  );
};
