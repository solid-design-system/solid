import { getVersion } from './version.js';

/**
 * Parses command line arguments and returns the action to take
 */
export const parseCommandLineArgs = (args: string[] = process.argv.slice(2)) => {
  if (args.includes('--version') || args.includes('-v')) {
    return { action: 'version' as const };
  }

  if (args.includes('--help') || args.includes('-h')) {
    return { action: 'help' as const };
  }

  return { action: 'continue' as const };
};

/**
 * Handles command line arguments and exits if necessary
 */
export const handleCommandLineArgs = () => {
  const result = parseCommandLineArgs();

  if (result.action === 'version') {
    const version = getVersion();
    process.stdout.write(`Solid Design System MCP Server v${version}\n`);
    process.exit(0);
  }

  if (result.action === 'help') {
    const version = getVersion();
    process.stdout.write(`Solid Design System MCP Server v${version}

USAGE:
    solid-mcp [OPTIONS]

DESCRIPTION:
    Model Context Protocol (MCP) server for the Solid Design System.
    Provides tools for LLMs to interact with Solid components, design tokens,
    styles, and template guidance.

OPTIONS:
    -h, --help       Show this help message and exit
    -v, --version    Show version information and exit

EXAMPLES:
    solid-mcp                    # Start the MCP server
    solid-mcp --version          # Show version
    solid-mcp --help             # Show this help

ABOUT:
    This server provides the following tools for LLMs:
    • Component information and documentation
    • Design tokens and styling information
    • Template and pattern information

    For more information, visit:
    https://github.com/solid-design-system/solid

`);
    process.exit(0);
  }
};
