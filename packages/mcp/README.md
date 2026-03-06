# @synergy-design-system/mcp

Synergy MCP Server – Multi-Framework Component Metadata & Tooling

---

The `@synergy-design-system/mcp` package provides a Model Context Protocol (MCP) server for the Synergy Design System. It enables AI assistants and development tools to access structured information about Synergy components, design tokens, icons, and migration guides across multiple frameworks (Angular, React, Vue, and vanilla Web Components).

## Quick Start

### Installation

```bash
npm install --save-dev @synergy-design-system/mcp
```

### Running the Server

The MCP server can be started using the `syn-mcp` binary:

```bash
# Run directly
npx @synergy-design-system/mcp

# Or if installed globally
syn-mcp
```

### VS Code Integration

To integrate with VS Code and AI assistants, add this configuration to your VS Code `settings.json` under the `mcp.servers` section:

```jsonc
{
  "mcp": {
    "servers": {
      "synergy": {
        "type": "stdio",
        "command": "npx",
        "args": ["@synergy-design-system/mcp"]
      }
    }
  }
}
```

### Claude Desktop Integration

For Claude Desktop, add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "synergy": {
      "command": "npx",
      "args": ["@synergy-design-system/mcp"]
    }
  }
}
```

## Features

- **Component Information**: Get detailed usage information for Synergy components across frameworks
- **Icon Assets**: Search and discover available icons from multiple icon sets
- **Design Tokens**: Access CSS and JavaScript design tokens
- **Style Utilities**: Information about available CSS utility classes
- **Templates**: Access static templates built with the Synergy Design System
- **Migration Guides**: DaVinci to Synergy component migration assistance and Synergy version migrations
- **Framework Support**: Specific documentation for Angular, React, Vue, and vanilla Web Components
- **Version Information**: Get version and metadata about the MCP server
- **MCP Protocol**: Standard Model Context Protocol interface for AI assistant integration

## Available Tools

The MCP server provides the following tools that can be invoked by AI assistants:

### 1. `component-list`

**Description:** Outputs a list of all available components in the Synergy Design System.

**Parameters:** None

**Example prompts:**

- "Show me all available Synergy components"
- "What components are available in the Synergy Design System?"
- "List all syn-\* components"

### 2. `component-info`

**Description:** Get detailed information about the usage of a specific component in the Synergy Design System.

**Parameters:**

- `component` (string, required): The name of the component (must start with `syn-`, e.g., `syn-button`)
- `framework` (string, optional): The framework (`react`, `vue`, `angular`, `vanilla`). Defaults to `vanilla`

**Example prompts:**

- "How do I use the syn-button component in React?"
- "Show me the syn-input component documentation"
- "What props does syn-dialog support in Vue?"
- "Give me an example of syn-card in Angular"

### 3. `asset-list`

**Description:** Get the available iconsets in the Synergy Design System.

**Parameters:** None

**Example prompts:**

- "What iconsets are available?"
- "Show me all available icon libraries"
- "List all iconsets in Synergy"

### 4. `asset-info`

**Description:** Get information about available icons in the Synergy Design System.

**Parameters:**

- `filter` (string, optional): Filter icon names by substring match
- `iconset` (string, optional): Icon set to search (`current`, `legacy`, `v2`, `synergy2018`, `brand2018`, `brand2025`, `synergy2025`, `new`, `next`). Defaults to `current`
- `limit` (number, optional): Maximum number of icons to return. Defaults to 5

**Example prompts:**

- "Show me icons with 'add' in the name"
- "What icons are available for cancel actions?"
- "List 10 icons from the new iconset"
- "Find icons related to 'close' in the current iconset"

### 5. `token-info`

**Description:** Get information about design tokens available in the Synergy Design System.

**Parameters:**

- `type` (string, optional): Token type (`javascript` or `css`). Defaults to `css`

**Example prompts:**

- "Show me the available CSS design tokens"
- "What JavaScript design tokens are available?"
- "List all design tokens for styling"

### 6. `styles-list`

**Description:** Outputs a list of available styles in the Synergy Design System.

**Parameters:** None

**Example prompts:**

- "What styles are available in Synergy?"
- "Show me all available CSS utility classes"
- "List all style modules"

### 7. `styles-info`

**Description:** Get information about CSS utilities available in the Synergy Design System.

**Parameters:** None

**Example prompts:**

- "Show me information about Synergy CSS utilities"
- "What CSS utilities does Synergy provide?"
- "Tell me about the styles package"

### 8. `template-list`

**Description:** Outputs a list of available static templates built with the Synergy Design System.

**Parameters:** None

**Example prompts:**

- "What templates are available in Synergy?"
- "Show me all available static templates"
- "List all templates"

### 9. `template-info`

**Description:** Get a specific template in the Synergy Design System.

**Parameters:**

- `template` (string, required): The name of the template to get information about.

**Example prompts:**

- "Show me the form template"
- "Give me information about the dashboard template"
- "How do I use the form template?"

### 10. `davinci-migrate-list`

**Description:** Get a list of all components that have migration information from DaVinci to Synergy.

**Parameters:** None

**Example prompts:**

- "What DaVinci components can be migrated to Synergy?"
- "Show me all available migration guides"
- "List components with migration information"

### 11. `davinci-migrate-component`

**Description:** Get information about the migration of a specific component from DaVinci to Synergy.

**Parameters:**

- `component` (string, required): Name of the DaVinci component (must start with `davinci-`, e.g., `davinci-button`)

**Example prompts:**

- "How do I migrate from davinci-button to Synergy?"
- "Show me the migration guide for davinci-input"
- "What's the Synergy equivalent of davinci-auto-suggest?"

### 12. `framework-info`

**Description:** Get information about a specific framework package that the Synergy Design System supports.

**Parameters:**

- `framework` (string, optional): Framework name (`react`, `vue`, `angular`, `vanilla`). Defaults to `vanilla`
- `setupInstructions` (boolean, optional): Adds additional context to include setup instructions for all synergy applications. Defaults to `false`

**Example prompts:**

- "How do I set up Synergy with React?"
- "Show me the Angular integration guide"
- "What's needed to use Synergy with Vue?"
- "How do I install Synergy for vanilla JavaScript?"

### 13. `migration-list`

**Description:** List available migration documents for a specific Synergy package in a compact, token‑efficient format.

**Parameters:**

- `synergyPackage` (string, optional): The package to list migration documents for (`assets`, `components`, `styles`, `tokens`). Defaults to `components`.

**Notes:**

- For the `components` package this returns an index of:
  - High‑level overview docs (e.g. migration overview)
  - Path‑specific guides (e.g. v2‑2018 → v3‑2018)
  - Package‑level docs (e.g. `BREAKING_CHANGES.md`, `CHANGELOG.md`)
- Each entry contains at least the filename and package name. For component paths, additional metadata such as `from`, `to`, `fromTheme`, `toTheme`, and a short `summary` is included where possible.

**Example prompts:**

- "List all Synergy component migration guides"
- "Show me available migration docs for tokens"
- "What migration paths exist from Synergy 2 to Synergy 3?"

### 14. `migration-info`

**Description:** Get detailed migration documentation for a Synergy package. Use this together with `migration-list` to fetch only the documents you need.

**Parameters:**

- `filename` (string, optional): Specific migration document filename to return. Strongly recommended for the `components` package to avoid fetching all path guides at once.
- `synergyPackage` (string, optional): The package to get migration information about (`assets`, `components`, `styles`, `tokens`). Defaults to `components`.

**Behavior:**

- For `components`:
  - With `filename`: returns exactly that migration document (e.g. a specific v2‑to‑v3 path guide).
  - Without `filename`: returns only the migration overview and high‑level package docs (such as `BREAKING_CHANGES` and `CHANGELOG`), **not** every path‑specific guide.
- For other packages (`assets`, `styles`, `tokens`):
  - Returns all migration‑related documents for the selected package (typically `BREAKING_CHANGES` and `CHANGELOG`).

**Example prompts:**

- "List the available Synergy component migrations" (first call `migration-list`)
- "Show me the migration guide from Synergy 2 (SICK 2018) to Synergy 3 (SICK 2018)"
- "Give me the breaking changes for the tokens package between major versions"

### 15. `version`

**Description:** Get version and basic information about the Synergy Design System MCP Server.

**Parameters:** None

**Example prompts:**

- "What version of the MCP server is running?"
- "Show me information about this Synergy MCP server"
- "What's the current version?"

## Developer Documentation

### Project Structure

```
src/
├── bin/
│   └── start.ts          # CLI entry point (syn-mcp command)
├── build/                # Build scripts for metadata generation
│   ├── assets.ts         # Asset metadata builder
│   ├── build.ts          # Main build orchestrator
│   ├── components.ts     # Component metadata builder
│   ├── frameworks.ts     # Framework info builder
│   ├── static.ts         # Static content builder
│   ├── styles.ts         # Styles metadata builder
│   └── tokens.ts         # Token metadata builder
├── scripts/              # Build and utility scripts
│   └── generate-checksum.ts # TypeScript checksum generator (replaces shell scripts)
├── server.ts             # MCP server setup and tool registration
├── tools/                # MCP tool implementations
│   ├── asset-info.ts     # Icon search and information
│   ├── asset-list.ts     # Available iconsets
│   ├── component-info.ts # Individual component details
│   ├── component-list.ts # List all components
│   ├── davinci-migration.ts # Migration guides
│   ├── font-info.ts      # Font and prerequisites information
│   ├── framework-info.ts # Framework-specific information
│   ├── migration-info.ts # Package migration documentation
│   ├── migration-list.ts # Package migration index (filenames + metadata)
│   ├── styles-info.ts    # CSS utilities information
│   ├── styles-list.ts    # List all styles
│   ├── template-info.ts  # Template details
│   ├── template-list.ts  # List all templates
│   ├── tokens.ts         # Design tokens
│   ├── version.ts        # MCP server version info
│   └── index.ts          # Tool exports
└── utilities/            # Helper functions and metadata loaders
    ├── assets.ts         # Asset utilities
    ├── checksum.ts       # Folder checksum utilities (replaces shell scripts)
    ├── components.ts     # Component utilities
    ├── config.ts         # Configuration management
    ├── file.ts           # File system utilities
    ├── metadata.ts       # Metadata loading utilities
    ├── stdio.ts          # Standard I/O utilities
    ├── styles.ts         # Style utilities
    ├── templates.ts      # Template utilities
    ├── tokens.ts         # Token utilities
    ├── version.ts        # Version utilities
    ├── storybook/        # Storybook documentation utilities
    └── index.ts          # Utility exports
metadata/                 # Generated and static metadata files
├── checksum.txt          # Metadata integrity checksum
├── davinci-migration/    # DaVinci to Synergy migration guides
├── packages/             # Synergy package specific information
└── static/               # Static metadata for tools
```

### Available Scripts

The following npm scripts are available for development:

```bash
# Build the entire project (TypeScript + metadata + Storybook docs)
pnpm build

# Build only TypeScript files
pnpm build:ts

# Build metadata from source packages
pnpm build:metadata

# Generate metadata integrity checksum (uses TypeScript instead of shell script)
pnpm build:hash

# Build Storybook documentation
pnpm build:storybook

# Run linting
pnpm lint
pnpm lint:js

# Run tests with coverage
pnpm test
```

### Development Workflow

1. **Setup**: Install dependencies with `pnpm install`
2. **Build**: Run `pnpm build` to compile TypeScript and generate metadata
   - `pnpm build:ts` compiles TypeScript files
   - `pnpm build:metadata` generates metadata from source packages
   - `pnpm build:hash` creates integrity checksum for metadata using TypeScript utilities
3. **Test**: Use `pnpm test` to run the test suite with coverage
4. **Lint**: Run `pnpm lint` to check code quality
5. **Run**: Start the server with `npx syn-mcp` or `node dist/bin/start.js`

The metadata build process runs multiple specialized builders in sequence:

1. Assets (icons and iconsets)
2. Components (from package manifests)
3. Framework information (setup guides)
4. Design tokens (CSS and JS tokens)
5. Styles (utility classes)
6. Static files (hand-written documentation)

### Adding New Tools

To add a new tool:

1. Create a new file in `src/tools/` (e.g., `my-tool.ts`)
2. Implement the tool following the MCP SDK patterns
3. Export the tool from `src/tools/index.ts`
4. Your tool will automatically be registered into the server.

Example tool structure:

```typescript
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export const myTool = (server: McpServer) => {
  server.registerTool(
    'my-tool',
    {
      description: 'Description of what the tool does',
      inputSchema: {
        param: z.string().describe('Parameter description')
      },
      title: 'My Tool'
    },
    async ({ param }) => {
      // Tool implementation
      return {
        content: [
          {
            text: `Result for ${param}`,
            type: 'text'
          }
        ]
      };
    }
  );
};
```

### Metadata Management

Metadata is stored in the `metadata/` directory and is built during the build process:

- **Static metadata**: Hand-written files in `metadata/static/`
- **Component metadata**: Generated from Synergy packages in `metadata/packages/`
- **Migration guides**: DaVinci migration information in `metadata/davinci-migration/`
- **Checksum validation**: `metadata/checksum.txt` ensures metadata integrity

The `pnpm build:metadata` script processes source packages and generates structured metadata files using specialized builders:

- `build/assets.ts` - Processes icon and asset information
- `build/components.ts` - Extracts component metadata from packages
- `build/frameworks.ts` - Generates framework-specific documentation
- `build/static.ts` - Processes static content files
- `build/styles.ts` - Extracts CSS utility information
- `build/tokens.ts` - Processes design token data
- `build/build.ts` - Orchestrates the entire build process

### Checksum Utilities

The project includes TypeScript utilities for generating and verifying folder checksums, replacing shell scripts for cross-platform compatibility:

**Key Features:**

- **Cross-platform**: Works on Windows, macOS, and Linux
- **Configurable**: Support for custom exclude patterns and hash algorithms (MD5, SHA1, SHA256)
- **TypeScript native**: Full type safety and IDE support
- **Shell script replacement**: Replaces `find | sort | xargs | md5` commands

**Available Functions:**

- `createFolderChecksum(path, options?)` - Generate checksum and optionally write to file
- `verifyFolderChecksum(path, options?)` - Verify current contents match stored checksum
- `getFolderChecksum(path, options?)` - Get checksum without writing to file

**Usage Example:**

```typescript
import { createFolderChecksum, verifyFolderChecksum } from './utilities/checksum.js';

// Generate checksum (equivalent to shell script)
await createFolderChecksum('./metadata', {
  excludePatterns: ['.*', 'checksum.txt'],
  algorithm: 'md5',
  outputFile: 'checksum.txt'
});

// Verify integrity
const isValid = await verifyFolderChecksum('./metadata');
```

The build process uses `scripts/generate-checksum.ts` instead of shell commands for better cross-platform support and maintainability.

### Binary Distribution

The package includes a `syn-mcp` binary that starts the MCP server via stdio transport. This is defined in `package.json`:

```json
{
  "bin": {
    "syn-mcp": "./dist/bin/start.js"
  }
}
```

## Usage Examples

### Command Line Interface

```bash
# Start the MCP server
syn-mcp

# The server will communicate via stdio and wait for MCP protocol messages
```

### Programmatic Usage

```typescript
import { createServer } from '@synergy-design-system/mcp';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

// Create and start the server
const server = createServer();
const transport = new StdioServerTransport();
await server.connect(transport);
```

### AI Assistant Integration

Once configured with an AI assistant, you can use natural language prompts like:

```
"Show me how to use syn-button in React"
"What icons are available for navigation?"
"How do I migrate from davinci-textarea to Synergy?"
"How do I migrate from Synergy v1 to v2?"
"List all available Synergy components"
"What CSS utilities does Synergy provide?"
```

The MCP server will interpret these prompts and call the appropriate tools to provide structured responses.

## Architecture

The MCP server is built using the Model Context Protocol SDK and provides a standardized interface for AI assistants to access Synergy Design System information.

### Core Components

- **Server**: MCP server instance that manages tool registration and request handling
- **Tools**: Individual tool implementations that provide specific functionality
- **Utilities**: Helper functions for metadata loading and processing
- **Metadata**: Static and generated metadata files containing component and framework information

### Data Flow

1. AI assistant sends MCP request to the server
2. Server routes request to appropriate tool
3. Tool processes request and loads relevant metadata
4. Tool returns structured response to AI assistant
5. AI assistant processes response and provides user-friendly output

## License

MIT

---
