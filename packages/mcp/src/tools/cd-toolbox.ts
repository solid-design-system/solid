import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getCdToolboxPages, readCdToolboxPage, type CdToolboxPage } from '../utilities/index.js';
import { normalizeSafeSlug } from '../utilities/input.js';

const isSolidImplementationPage = (page: CdToolboxPage): boolean =>
  page.path.toLowerCase().includes('komponentenbibliothek') || page.path.toLowerCase().includes('solid-design-system');

const authorityNotice = (page: CdToolboxPage): string =>
  isSolidImplementationPage(page)
    ? '> **Implementation authority:** For current Solid frontend APIs, HTML, styles, and tokens, use the `components`, `styles`, `tokens`, and `templates` tools. This CD Toolbox page is brand and channel guidance.\n\n'
    : '';

const scorePage = (query: string, page: CdToolboxPage): number => {
  const normalizedQuery = query.toLocaleLowerCase();
  const title = page.title.toLocaleLowerCase();
  const aliases = page.aliases.join(' ').toLocaleLowerCase();
  const searchable = `${page.path} ${page.summary}`.toLocaleLowerCase();
  if (title === normalizedQuery) return 100;
  if (title.includes(normalizedQuery)) return 80;
  if (page.aliases.some(alias => alias.toLocaleLowerCase() === normalizedQuery)) return 80;
  if (aliases.includes(normalizedQuery)) return 60;
  if (page.path.toLocaleLowerCase().includes(normalizedQuery)) return 60;
  if (searchable.includes(normalizedQuery)) return 40;
  return 0;
};

const formatPage = (page: CdToolboxPage): string => {
  const changed = page.lastChanged ? ` | Last changed: ${page.lastChanged}` : '';
  const summary = page.summary ? ` - ${page.summary}` : '';
  return `- \`${page.path || '/'}\` | **${page.title}**${changed}${summary}`;
};

/**
 * Tool: cd-toolbox
 *
 * Route-aware access to the Union Investment Corporate Design Toolbox export.
 */
export const cdToolboxTool = (server: McpServer) => {
  server.registerTool(
    'cd-toolbox',
    {
      description:
        'Union Investment Corporate Design Toolbox. Omit arguments to browse its page hierarchy, pass `path` to retrieve a page, or pass `query` to search brand, print, image, motion, and channel guidance. For current Solid frontend implementation details, use the Solid components, styles, tokens, and templates tools.',
      inputSchema: {
        path: z.string().optional().describe('CD Toolbox route, e.g. "grundlagen/Basiselemente/farbe".'),
        query: z.string().optional().describe('Search phrase, e.g. "logo", "barrierefreiheit", or "print".')
      },
      title: 'CD Toolbox'
    },
    async ({ path, query }) => {
      if (path && query) {
        return { content: [{ type: 'text', text: 'Invalid arguments: use either `path` or `query`, not both.' }] };
      }

      const pages = await getCdToolboxPages();
      if (!pages.length) {
        return {
          content: [
            {
              type: 'text',
              text: 'No CD Toolbox manifest found. Run `pnpm build` in `packages/mcp` before requesting CD Toolbox guidance.'
            }
          ]
        };
      }

      if (path) {
        const normalizedPath = normalizeSafeSlug(path);
        if (path.trim() !== '/' && !normalizedPath) {
          return { content: [{ type: 'text', text: 'Invalid arguments: `path` contains an invalid path.' }] };
        }
        const safePath = path.trim() === '/' ? '' : normalizedPath!;
        const page = pages.find(entry => entry.path.toLocaleLowerCase() === safePath.toLocaleLowerCase());
        if (!page) {
          return {
            content: [
              {
                type: 'text',
                text: `No CD Toolbox page found for "${safePath}". Use \`query\` or call \`cd-toolbox\` without arguments to browse routes.`
              }
            ]
          };
        }
        const content = await readCdToolboxPage(page);
        return {
          content: [
            {
              type: 'text',
              text: content ? `${authorityNotice(page)}${content}` : `Unable to read CD Toolbox page "${page.path}".`
            }
          ]
        };
      }

      if (query) {
        const matches = pages
          .map(page => ({ page, score: scorePage(query, page) }))
          .filter(result => result.score > 0)
          .sort((first, second) => second.score - first.score || first.page.path.localeCompare(second.page.path))
          .slice(0, 10)
          .map(result => formatPage(result.page));
        return {
          content: [
            {
              type: 'text',
              text: matches.length
                ? `## CD Toolbox Results for "${query}"\n\n${matches.join('\n')}`
                : `No CD Toolbox pages found for "${query}".`
            }
          ]
        };
      }

      const sections = new Map<string, number>();
      pages.forEach(page => {
        const section = page.path.split('/').at(0) || 'Start';
        sections.set(section, (sections.get(section) ?? 0) + 1);
      });
      const browse = [...sections.entries()]
        .sort(([first], [second]) => first.localeCompare(second))
        .map(([section, count]) => `- \`${section}\` (${count} pages)`)
        .join('\n');
      return {
        content: [
          {
            type: 'text',
            text:
              `## Union Investment CD Toolbox\n\n` +
              `Use \`query\` to find guidance, then retrieve the returned route with \`path\`.\n\n` +
              `### Sections\n\n${browse}\n\n` +
              `For current Solid frontend implementation, use \`components\`, \`styles\`, \`tokens\`, and \`templates\`.`
          }
        ]
      };
    }
  );
};
