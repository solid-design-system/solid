import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getPackageInfo } from '../utilities/version.js';

/**
 * Tool to get version information about the Solid Design System MCP Server.
 * This allows LLMs to query the current version and basic information about this MCP server.
 * @param server - The MCP server instance to register the tool on.
 */
export const versionTool = (server: McpServer) => {
  server.registerTool(
    'version',
    {
      description: 'Get version and basic information about the Solid Design System MCP Server',
      inputSchema: {},
      title: 'Solid MCP Version Information'
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    async () => {
      const packageJson = getPackageInfo();
      const versionInfo = {
        author: packageJson.author,
        description: packageJson.description,
        homepage: packageJson.homepage,
        license: packageJson.license,
        name: packageJson.name,
        repository: packageJson.repository,
        version: packageJson.version
      };

      return {
        content: [
          {
            text: `Solid Design System MCP Server Information:

**Version:** ${versionInfo.version}
**Name:** ${versionInfo.name}
**Description:** ${versionInfo.description}

**Author:** ${versionInfo.author?.name || 'N/A'}
**License:** ${versionInfo.license || 'N/A'}
**Repository:** ${versionInfo.repository?.url || 'N/A'}
**Homepage:** ${versionInfo.homepage || 'N/A'}

This MCP server provides tools to interact with the Solid Design System, including:
- Component information and documentation
- Design tokens and styling information
- CSS utility styles information
- Template and pattern information

For more information about available tools, you can explore the other MCP tools provided by this server.`,
            type: 'text'
          }
        ]
      };
    }
  );
};
