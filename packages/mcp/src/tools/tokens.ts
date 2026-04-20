import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
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
        'Get design tokens (CSS variables and TailwindCSS utility classes) available in the Solid Design System. Use this to look up correct Tailwind class names and CSS custom properties for colors, spacing, typography, and more.',
      inputSchema: {},
      title: 'Token info'
    },
    async () => {
      const tokenNames = getTailwindThemeTokenNames();
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
