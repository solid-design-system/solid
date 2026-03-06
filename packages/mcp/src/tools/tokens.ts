import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getTokensMetaData } from '../utilities/index.js';

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
      inputSchema: {
        type: z
          .enum(['javascript', 'css'])
          .default('css')
          .optional()
          .describe('The type of token to retrieve, e.g., "javascript" for JS tokens or "css" for CSS tokens.')
      },
      title: 'Token info'
    },
    async ({ type }) => {
      const metadata = await getTokensMetaData(type);
      return {
        content: [
          {
            text: JSON.stringify(metadata, null, 2),
            type: 'text'
          }
        ]
      };
    }
  );
};
