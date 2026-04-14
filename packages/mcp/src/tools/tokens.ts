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
      description: 'Get information about design tokens available in the Solid Design System',
      inputSchema: {},
      title: 'Token info'
    },
    async () => {
      const tokenNames = getTailwindThemeTokenNames();
      return {
        content: [
          {
            text: `The following are CSS custom properties (CSS variables) available inside @theme inline in tailwind.css.\nUse them in CSS as var(--property-name) or leverage the Tailwind utility mappings below.\n\n${TAILWIND_MAPPING}\n\nAvailable CSS variables:\n${tokenNames.join('\n')}`,
            type: 'text'
          }
        ]
      };
    }
  );
};
