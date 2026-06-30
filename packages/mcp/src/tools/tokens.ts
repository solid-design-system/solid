import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getTailwindThemeTokenNames } from '../utilities/index.js';

const TAILWIND_MAPPING = `
CSS variable prefix → Tailwind utility
--background-color-*  →  bg-*
--text-color-*        →  text-*
--border-color-*      →  border-*
--fill-*              →  fill-*
--outline-color-*     →  outline-*
--spacing-*           →  p-*, m-*, gap-*, inset-*, …
--sizing-*            →  w-*, h-*, size-*
--text-{size}         →  text-{size}
--font-weight-*       →  font-*
--border-width-*      →  border-*
--radius-*            →  rounded-*
--aspect-*            →  aspect-*
--opacity-*           →  opacity-*
--shadow-*            →  shadow-*
--drop-shadow-*       →  drop-shadow-*
--transition-duration-*  →  duration-*
--animate-*           →  animate-*
`.trim();

const scoreMatch = (keyword: string, token: string): number => {
  const q = keyword.toLowerCase();
  const t = token.toLowerCase();
  const normalized = t.replace(/^--/, '');

  if (t === q || normalized === q) return 100;
  if (normalized.startsWith(q) || t.startsWith(q)) return 80;
  if (normalized.includes(q) || t.includes(q)) return 60;
  return 0;
};

/**
 * Simple tool to list all available tokens in the Solid Design System.
 * This tool fetches the token data from the Solid package and formats it for display.
 * @param server - The MCP server instance to register the tool on.
 */
export const tokenInfoTool = (server: McpServer) => {
  server.registerTool(
    'token-info',
    {
      description:
        `Solid Design System tokens. ` +
        `Call without arguments to list all tokens and usage guidance. ` +
        `Pass \`token\` (e.g. "--background-color-neutral-100" or "background") to search matching tokens.`,
      inputSchema: {
        token: z
          .string()
          .optional()
          .describe('Token name or partial token text, e.g. "--background-color-neutral-100" or "spacing".')
      },
      title: 'Tokens'
    },
    ({ token }) => {
      const tokenNames = getTailwindThemeTokenNames();

      if (!tokenNames.length) {
        return {
          content: [
            {
              text: 'No design tokens found. Token metadata may not be built yet.',
              type: 'text'
            }
          ]
        };
      }

      if (token) {
        const sorted = tokenNames
          .map(name => ({ token: name, score: scoreMatch(token, name) }))
          .filter(item => item.score > 0)
          .sort((a, b) => b.score - a.score || a.token.localeCompare(b.token));

        if (!sorted.length) {
          return {
            content: [
              {
                type: 'text',
                text: `No tokens found matching "${token}".`
              }
            ]
          };
        }

        const lines = sorted.map(({ token: tokenName }) => `- \`${tokenName}\``);

        return {
          content: [
            {
              text: [
                `Found ${sorted.length} token(s) matching "${token}":`,
                '',
                lines.join('\n'),
                '',
                'Use Tailwind utility classes directly where available; use CSS variables via `var(--token-name)` in CSS.'
              ].join('\n'),
              type: 'text'
            }
          ]
        };
      }

      return {
        content: [
          {
            text: [
              `These are the design tokens of the Solid Design System. Each token is available both as a CSS custom property (CSS variable) and as a TailwindCSS utility class.`,
              ``,
              `## How to use`,
              ``,
              `### TailwindCSS (preferred)`,
              `Use the semantic Tailwind utility classes directly. Do NOT use arbitrary value syntax like \`bg-[rgb(var(--sd-color-neutral-100))]\` or \`bg-[var(--sd-color-neutral-100)]\`.`,
              `Instead, always use the mapped Tailwind class, e.g. \`bg-neutral-100\`.`,
              ``,
              `### CSS`,
              `Use the CSS custom properties via \`var(--property-name)\`, e.g. \`background-color: var(--sd-color-neutral-100)\`.`,
              ``,
              `## CSS variable → Tailwind utility mapping`,
              ``,
              TAILWIND_MAPPING,
              ``,
              `## Available tokens (CSS variable names)`,
              ``,
              tokenNames.join('\n')
            ].join('\n'),
            type: 'text'
          }
        ]
      };
    }
  );
};
