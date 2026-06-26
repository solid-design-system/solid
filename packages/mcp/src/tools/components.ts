import fs from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { componentPath, componentPackageDocsPath, getAvailableComponents } from '../utilities/index.js';

const readIfExists = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return null;
  }
};

/** Lists all package-level doc slugs (e.g. "installation", "localization"). */
const getAvailablePackageDocs = async (): Promise<string[]> => {
  try {
    const entries = await fs.readdir(componentPackageDocsPath, { withFileTypes: true });
    return entries
      .filter(d => d.isFile() && extname(d.name) === '.md')
      .map(d => basename(d.name, '.md'))
      .sort();
  } catch {
    return [];
  }
};

/**
 * Tool: components
 *
 * Unified entry point for everything component-related.
 *
 * - No args → list all sd-* components + list all package docs topics
 * - `component` only → full spec (usage guidelines + API)
 * - `component` + `example` → HTML example for that example
 * - `doc` → package-level guide (Installation, Localization, Customization, …)
 */
export const componentsTool = (server: McpServer) => {
  server.registerTool(
    'components',
    {
      description: ` Solid Design System components. Usage modes:
        - No arguments: list all sd-* components and available package docs.
        - \`component\` only: get the full specification for one component, including API, examples, events, slots, and guidelines.
        - \`component\` + \`example\`: get the HTML example for one specific usage pattern (e.g. component="sd-button", example="inverted").
        - \`doc\` only: get a package-level guide such as "localization". Do not combine \`doc\` with \`component\` or \`example\`.`,
      inputSchema: {
        component: z
          .string()
          .startsWith('sd-')
          .optional()
          .describe('Component tag name, e.g. "sd-button". Omit to see the full list.'),
        example: z
          .string()
          .optional()
          .describe(
            'Slug for an HTML usage example, e.g. "inverted" or "no-shadow". ' +
              'Requires `component`. Use component alone first to see available example slugs.'
          ),
        doc: z
          .string()
          .optional()
          .describe(
            'Package-level guide slug, e.g. "localization", "installation", "customization". ' +
              'Omit to see all available topics.'
          )
      },
      title: 'Components'
    },
    async ({ component, example, doc }) => {
      // Validate if doc is combined with component/example - not allowed
      if (doc && (component || example)) {
        return {
          content: [
            {
              type: 'text',
              text: 'Invalid arguments: `doc` cannot be combined with `component` or `example`. Use either `doc` alone or a component query.'
            }
          ]
        };
      }
      // Validate if `example` is provided without `component` - not allowed
      if (example && !component) {
        return {
          content: [
            {
              type: 'text',
              text: 'Invalid arguments: `example` requires `component`. Use both together, e.g. component="sd-button", example="inverted".'
            }
          ]
        };
      }

      // --- package-level doc ---
      if (doc) {
        const content = await readIfExists(join(componentPackageDocsPath, `${doc}.md`));
        if (!content) {
          const available = await getAvailablePackageDocs();
          return {
            content: [
              {
                type: 'text',
                text: `No package doc found for "${doc}". Available docs:\n` + available.map(d => `- ${d}`).join('\n')
              }
            ]
          };
        }
        return { content: [{ type: 'text', text: content }] };
      }

      // --- specific component example (HTML example) ---
      if (component && example) {
        const exampleMd = await readIfExists(join(componentPath, component, 'stories', `${example}.md`));
        if (!exampleMd) {
          return {
            content: [
              {
                type: 'text',
                text: `No example "${example}" found for "${component}". Use \`component\` alone to see available examples.`
              }
            ]
          };
        }
        return { content: [{ type: 'text', text: exampleMd }] };
      }

      // --- specific component spec ---
      if (component) {
        const infoMd = await readIfExists(join(componentPath, component, 'info.md'));
        if (!infoMd) {
          return {
            content: [
              {
                type: 'text',
                text: `No metadata found for "${component}". Call \`components\` without arguments to see all available components.`
              }
            ]
          };
        }
        const text =
          '> IMPORTANT: Only use properties, events and slots listed in the API below.\n' +
          '> Never invent attributes not present in this specification.\n\n' +
          infoMd;
        return { content: [{ type: 'text', text }] };
      }

      // --- no args: index ---
      const [components, packageDocs] = await Promise.all([getAvailableComponents(), getAvailablePackageDocs()]);

      const text = [
        '## Solid Design System Components',
        '',
        'These are the ONLY valid sd-* components — never invent components not in this list.',
        'Use `component` to get the full spec for any specific component.',
        '',
        components.map(c => (c.description ? `- ${c.name} – ${c.description}` : `- ${c.name}`)).join('\n'),
        '',
        '## Package Docs',
        '',
        'Use `doc` to retrieve any of the following guides:',
        '',
        packageDocs.map(d => `- ${d}`).join('\n')
      ].join('\n');

      return { content: [{ type: 'text', text }] };
    }
  );
};
