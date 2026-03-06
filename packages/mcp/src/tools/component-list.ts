import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getAvailableComponents } from '../utilities/index.js';

/**
 * Tool: component-list
 * Lists all available Solid Design System components.
 * Use component-docs to get the full specification for any listed component.
 */
export const componentListTool = (server: McpServer) => {
  server.registerTool(
    'component-list',
    {
      description:
        'List all available Solid Design System components. ' +
        'These are the ONLY valid sd-* components — never invent components not in this list. ' +
        'Use component-docs to get the full details for any specific component.',
      inputSchema: {},
      title: 'List Solid Components'
    },
    async () => {
      try {
        const components = await getAvailableComponents();
        return {
          content: [
            {
              type: 'text',
              text: `Available Solid Design System components:\n${components.map(c => `- ${c}`).join('\n')}`
            }
          ]
        };
      } catch (error) {
        return {
          content: [{ type: 'text', text: `Error fetching components: ${(error as Error).message}` }]
        };
      }
    }
  );
};
