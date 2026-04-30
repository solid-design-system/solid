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
 * - `component` + `story` → HTML example for that story
 * - `doc` → package-level guide (Installation, Localization, Customization, …)
 */
export const componentsTool = (server: McpServer) => {
  server.registerTool(
    'components',
    {
      description:
        'Solid Design System components. ' +
        'Call without arguments to list all sd-* components and available package docs. ' +
        'Pass `component` (e.g. "sd-button") to get the full spec (API, events, slots, guidelines). ' +
        'Pass `component` + `story` to get the HTML example for a specific usage pattern. ' +
        'Pass `doc` (e.g. "localization") to get a package-level guide.',
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
              'Requires `component`. Use component alone first to see available story slugs.'
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
    async ({ component, example: story, doc }) => {
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

      // --- specific component story (HTML example) ---
      if (component && story) {
        const storyMd = await readIfExists(join(componentPath, component, 'stories', `${story}.md`));
        if (!storyMd) {
          return {
            content: [
              {
                type: 'text',
                text: `No story "${story}" found for "${component}". Use \`component\` alone to see available stories.`
              }
            ]
          };
        }
        return { content: [{ type: 'text', text: storyMd }] };
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
        components.map(c => `- ${c}`).join('\n'),
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
