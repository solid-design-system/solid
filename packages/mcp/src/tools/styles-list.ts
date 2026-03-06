import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getAvailableStyles } from '../utilities/index.js';

/**
 * Tool: style-list
 * Lists all available Solid Design System CSS style utilities.
 * Use style-docs to get the full usage spec and class names for any style.
 */
export const stylesList = (server: McpServer) => {
  server.registerTool(
    'style-list',
    {
      description:
        'List all available Solid Design System CSS style utilities. ' +
        'Use style-docs to get the full specification for any specific style.',
      inputSchema: {},
      title: 'List Solid Styles'
    },
    async () => {
      try {
        const styles = await getAvailableStyles();
        return {
          content: [
            {
              type: 'text',
              text: `Available Solid Design System style utilities:\n${styles.map(s => `- ${s}`).join('\n')}`
            }
          ]
        };
      } catch (error) {
        return {
          content: [{ type: 'text', text: `Error fetching styles: ${(error as Error).message}` }]
        };
      }
    }
  );
};
