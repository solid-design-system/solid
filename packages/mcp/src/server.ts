import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import * as tools from './tools/index.js';
import { getVersion } from './utilities/version.js';

/**
 * Creates a new instance of the MCP server configured for the Solid Design System.
 * @returns A new instance of the MCP server configured for the Solid Design System.
 */
export const createServer = () => {
  const version = getVersion();
  const server = new McpServer({
    description: 'A server for the Solid Design System that provides tools to interact with components and resources.',
    name: 'solid design system',
    title: 'Solid Design System MCP Server',
    version
  });

  Object.values(tools).forEach(tool => {
    tool(server);
  });

  return server;
};
