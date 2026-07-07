# @solid-design-system/mcp

Solid Design System MCP Server – Component, Style, and Design Metadata

The `@solid-design-system/mcp` package provides a Model Context Protocol (MCP) server enabling AI assistants and development tools to access structured information about Solid Design System components, styles, templates, design tokens, and icons.

## Quick Start

### Installation

```bash
npm install --save-dev @solid-design-system/mcp
```

### Running the Server

```bash
npx @solid-design-system/mcp
```

### VS Code Integration

Add to your VS Code `settings.json`:

```jsonc
{
  "mcp": {
    "servers": {
      "solid": {
        "type": "stdio",
        "command": "npx",
        "args": ["@solid-design-system/mcp"]
      }
    }
  }
}
```

### Claude Desktop Integration

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "solid": {
      "command": "npx",
      "args": ["@solid-design-system/mcp"]
    }
  }
}
```

## Features

- **Quick Start Tool**: List and retrieve package-level quick-start docs
- **Unified Component Tool**: List all components, view full specs, retrieve HTML examples, and access package-level guides
- **Unified Styles Tool**: List all CSS utilities, view full specs, retrieve HTML examples, and access package-level guides
- **Templates**: List, filter by component/style, and retrieve template source code
- **Icons**: Search icon libraries across keywords, category, and library
- **Design Tokens**: Get design token information and guidance
- **Version Info**: Check MCP server version and metadata

## Available Tools

### 1. `quickstart`

**Quick-start package documentation across Solid packages.**

**Behavior:**

- **No arguments** → Lists available quick-start docs
- **`doc` arg** (e.g. `"Quickstart"`, `"components/Installation"`) → Returns full doc content

**Parameters:**

- `doc` (string, optional): Quick-start doc slug

**Example prompts:**

- "Show me all quickstart docs"
- "Show me components installation quickstart"
- "Get the tokens usage quickstart"

---

### 2. `components`

**Unified entry point for all component-related queries.**

**Behavior:**

- **No arguments** → Lists all available `sd-*` components + available package doc topics
- **`component` arg** (e.g. `"sd-button"` or `"button"`) → Returns full component spec: usage guidelines, API (properties, events, slots, CSS parts), related components and templates
- **`component` + `example` args** → Returns HTML code example for a specific usage pattern (e.g. `"sd-button"` + `"inverted"`)
- **`doc` arg** (e.g. `"localization"`, `"installation"`, `"customization"`) → Returns package-level guide

**Parameters:**

- `component` (string, optional): component tag name (e.g. `"sd-button"` or `"button"`)
- `example` (string, optional): Example slug for HTML example (e.g. `"inverted"` or `"no-shadow"`) (requires `component`)
- `doc` (string, optional): Package doc slug (e.g. `"localization"` or `"installation"`)

**Example prompts:**

- "Show me all available Solid components"
- "What is the sd-button component?"
- "Show me an inverted sd-button example"
- "How do I localize components?"
- "Tell me about component customization"

---

### 3. `styles`

**Unified entry point for all CSS style utilities.**

**Behavior:**

- **No arguments** → Lists all available style utilities + available package doc topics
- **`style` arg** (e.g. `"sd-chip"` or `"chip"`) → Returns full style spec: usage guidelines, available CSS class names, related components/templates
- **`style` + `example` args** → Returns HTML code example for a specific usage pattern (e.g. `"sd-chip"` + `"inverted"`)
- **`doc` arg** (e.g. `"installation"` or `"usage"`) → Returns package-level guide

**Parameters:**

- `style` (string, optional): Style name with or without `sd-` prefix, e.g. `"chip"` or `"sd-chip"`
- `example` (string, optional): Story slug for HTML example, e.g. `"inverted"` or `"size"` (requires `style`)
- `doc` (string, optional): Package doc slug, e.g. `"installation"` or `"usage"`

**Example prompts:**

- "Show me all available Solid styles"
- "What is the sd-chip style?"
- "Show me a size variant of sd-chip"
- "How do I install the styles package?"
- "Tell me about using Solid styles"

---

### 4. `templates`

**Access real-world compositions of Solid components.**

**Behavior:**

- **No arguments** → Lists all available templates
- **`template` arg** (e.g. `"forms"` or `"button-group"`) → Returns template source code and component inventory
- **`component` arg** (e.g. `"sd-button"` or `"button"`) → Filters list to templates that use that component
- **`style` arg** (e.g. `"sd-chip"` or `"chip"`) → Filters list to templates that use that style

**Parameters:**

- `template` (string, optional): Template name, e.g. `"forms"`
- `component` (string, optional): Component tag to filter by (e.g. `"sd-button"` or `"button"`)
- `style` (string, optional): Style name to filter by (e.g. `"sd-chip"` or `"chip"`)

**Example prompts:**

- "Show me all available templates"
- "What is the forms template?"
- "Show me templates that use sd-button"
- "Which templates use the sd-chip style?"

---

### 5. `icon-search`

**Search the Solid Design System icon libraries.**

**Parameters:**

- `keywords` (array of strings, required): English and/or German synonyms to search for, e.g. `["download", "save"]`
- `library` (string, optional): One of `"default"`, `"sd-status-assets"`, `"sd-multi-theming"`
- `category` (string, optional): One of `"content"`, `"system"`, `"status"`, `"all"`

**Example prompts:**

- "Search for a download icon"
- "Find icons related to close or dismiss"
- "Show me icons for user or profile"

---

### 6. `tokens`

**Access design tokens from the Solid Design System.**

**Behavior:**

- **No arguments** → Returns all available tokens with Tailwind and CSS usage guidance
- **`token` arg** (e.g. `"spacing"`) → Returns matching token names
- **`doc` arg** (e.g. "installation" or "usage") → Returns package-level guide

**Parameters:**

- `token` (string, optional): Full or partial token query
- `doc` (string, optional): Package doc slug (e.g. `"installation"`, `"usage"`)

**Example prompts:**

- "Show me the available CSS design tokens"
- "List tokens for background"

---

### 7. `version`

**Get version and metadata about the Solid Design System MCP Server.**

**Parameters:** None

**Example prompts:**

- "What version of the Solid MCP server is running?"
- "Show me server information"

---

### MCP Caller Cheat Sheet

Use these argument shapes for MCP tool calls:

```json
{ "tool": "quickstart", "arguments": {} }
{ "tool": "quickstart", "arguments": { "doc": "components/Installation" } }

{ "tool": "components", "arguments": { "component": "button" } }
{ "tool": "components", "arguments": { "component": "sd-button", "example": "inverted" } }
{ "tool": "components", "arguments": { "doc": "installation" } }

{ "tool": "styles", "arguments": { "style": "chip" } }
{ "tool": "styles", "arguments": { "style": "sd-chip", "example": "size" } }
{ "tool": "styles", "arguments": { "doc": "usage" } }

{ "tool": "templates", "arguments": { "component": "button" } }
{ "tool": "templates", "arguments": { "style": "chip" } }
{ "tool": "templates", "arguments": { "template": "forms" } }

{ "tool": "icon-search", "arguments": { "keywords": ["download", "herunterladen"], "library": "default", "category": "all" } }

{ "tool": "tokens", "arguments": {} }
{ "tool": "tokens", "arguments": { "token": "background" } }
{ "tool": "tokens", "arguments": { "doc": "installation" } }

{ "tool": "version", "arguments": {} }
```

## Developer Documentation

### Project Structure

```
src/
├── bin/
│   └── index.ts              # CLI entry point
├── build/                    # Metadata generation
│   ├── build.ts              # Main orchestrator
│   ├── components.ts         # Component metadata
│   ├── icons.ts              # Icon metadata
│   ├── package-docs.ts       # Package-level docs (Installation, Localization, etc.)
│   ├── static.ts             # Static content
│   ├── styles.ts             # Styles metadata
│   ├── templates.ts          # Templates metadata
│   └── tokens.ts             # Tokens metadata
├── server.ts                 # MCP server setup
├── tools/                    # Tool implementations
│   ├── quickstart.ts         # Package quick-start docs
│   ├── components.ts         # Unified components tool
│   ├── icon-search.ts        # Icon search
│   ├── styles.ts             # Unified styles tool
│   ├── templates.ts          # Unified templates tool
│   ├── tokens.ts             # tokens tool
│   ├── version.ts            # Version information
│   └── index.ts              # Tool exports
└── utilities/                # Helper functions
    ├── checksum.ts           # Metadata checksums
    ├── components.ts         # Component utilities
    ├── config.ts             # Configuration paths
    ├── file.ts               # File utilities
    ├── metadata.ts           # Metadata loading
    ├── stdio.ts              # I/O utilities
    ├── styles.ts             # Style utilities
    ├── templates.ts          # Template utilities
    ├── tokens.ts             # Token utilities
    ├── version.ts            # Version utilities
    └── index.ts              # Utility exports

metadata/                    # Generated and static metadata
├── packages/
│   ├── components/          # Component metadata
│   │   ├── sd-*/            # Per-component dirs
│   │   │   ├── info.md      # Full spec (API, guidelines, examples list)
│   │   │   └── stories/     # HTML examples
│   │   │       └── *.md
│   │   └── docs/            # Package-level docs
│   │       ├── installation.md
│   │       ├── localization.md
│   │       ├── customization.md
│   │       └── *.md
│   ├── styles/              # Style metadata
│   │   ├── sd-*/
│   │   │   ├── info.md
│   │   │   └── stories/
│   │   └── docs/            # Package-level docs
│   │       ├── installation.md
│   │       └── *.md
│   ├── templates/           # Template metadata (.md files)
│   ├── icons/               # Icon library metadata
│   ├── quickstart/          # Quickstart docs metadata
│   └── tokens/              # Tokens metada
└── static/                  # Static AI-rule files
```

### Key Changes in v2.6.0

**Tool Consolidation:** Reduced from 10 tools to 5 unified tools:

| Old Tools                                                    | New Tool     | Key Difference                                        |
| ------------------------------------------------------------ | ------------ | ----------------------------------------------------- |
| `component-list`, `component-docs`, `component-api-examples` | `components` | Single tool handles list, spec, and examples via args |
| `styles-list`, `styles-info`, `style-api-examples`           | `styles`     | Single tool handles list, spec, and examples via args |
| `template-list`, `template-info`                             | `templates`  | Single tool with optional filtering                   |

**Package Documentation:** Added package-level guides (Installation, Localization, Customization, Usage) extracted from MDX files in `packages/docs/src/stories/packages/`:

- `components` tool with `doc` arg accesses these
- `styles` tool with `doc` arg accesses these
- Automatically built from source during `build:metadata`

### Building

```bash
# Build TypeScript and metadata
pnpm build

# Or separately:
pnpm build:ts          # Compile TypeScript only
pnpm build:metadata    # Generate metadata from source
pnpm build:hash        # Generate integrity checksum
```

### Metadata Generation

The `build:metadata` script currently runs builders in this sequence:

1. **Components** — Extracts component metadata
2. **Styles** — Extracts style metadata
3. **Templates** — Finalizes template metadata and relationships
4. **Tokens** — Generates token definitions
5. **Icons** — Generates icon indexes by library/category
6. **Package docs** — Converts package MDX docs to build-time markdown
7. **Static files** — Copies static guidance content
8. **Figma Make output** — Generates condensed dist output for Figma Make use

### Adding a New Tool

1. Create `src/tools/my-tool.ts`:

   ```typescript
   import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
   import { z } from 'zod';

   export const myTool = (server: McpServer) => {
     server.registerTool(
       'my-tool',
       {
         description: 'What this tool does',
         inputSchema: {
           param: z.string().describe('A parameter')
         },
         title: 'My Tool'
       },
       async ({ param }) => {
         return { content: [{ type: 'text', text: 'Result' }] };
       }
     );
   };
   ```

2. Export from `src/tools/index.ts`:

   ```typescript
   export * from './my-tool.js';
   ```

3. Register in `src/server.ts` (via `tools/index.ts` exports)

### Testing the Server

```bash
# Start the server
npx @solid-design-system/mcp

# In another terminal, you can test tool invocation
# (requires MCP client or integration with Claude/VS Code)
```

## Related Packages

- `@solid-design-system/components` — Web Components library
- `@solid-design-system/styles` — CSS utility classes
- `@solid-design-system/tokens` — Design token definitions
- `@solid-design-system/icons` — Icon library
- `@solid-design-system/theming` — Theme management

## License

See [LICENSE.md](../../LICENSE.md)
