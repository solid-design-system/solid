# Quickstart

This guide will help you get started on adding Solid Design System (SDS) to your project.

The commands in this guide use npm. If an existing project uses another package manager, use that package manager consistently.

### Install manually

#### 1. Install the packages

The following commands install the most important packages:

```bash
# Component library consisting of reusable web components, smaller component library built solely with CSS, and design tokens.
npm install @solid-design-system/components @solid-design-system/styles @solid-design-system/tokens
# Local MCP server that provides coding agents access to current SDS guidance and metadata.
npm install --save-dev @solid-design-system/mcp
```

Additionally, you can install the extended functionality packages as needed:

```bash
# Placeholder text and license-free media.
npm install @solid-design-system/placeholder
# ESLint plugin for SDS-specific lint rules.
npm install --save-dev @solid-design-system/eslint-plugin
```

#### 2. Import the components

Import the component runtime in your application entry point:

```js
import '@solid-design-system/components/dist/solid-components.js';
```

#### 3. Import the styling

Import the CSS in your global stylesheet.
This example uses the built-in `ui-light` theme and Frutiger Neue fonts from the CDN of Union Investment's CMS. Replace the font URLs with the approved version for your project.
For other themes and font setups, see [Fonts and brand examples](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens-installation--docs&anchor=fonts).

```css
@import '@solid-design-system/tokens/dist/themes/ui-light/ui-light.css';
@import '@solid-design-system/styles/dist/solid-styles.css';
@import '@solid-design-system/components/dist/solid-components.css';

@font-face {
  font-family: 'Frutiger Neue';
  font-style: normal;
  font-weight: 400;
  src: url('https://global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-Bk.woff2')
    format('woff2');
}

@font-face {
  font-family: 'Frutiger Neue';
  font-style: italic;
  font-weight: 400;
  src: url('https://global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-BkIt.woff2')
    format('woff2');
}

@font-face {
  font-family: 'Frutiger Neue';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('https://global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-Bd.woff2')
    format('woff2');
}

@font-face {
  font-family: 'Frutiger Neue';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url('https://global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-BdIt.woff2')
    format('woff2');
}

body {
  font-family:
    'Frutiger Neue',
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    sans-serif;
}

:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-size: 16px;
}
```

#### 4. Add MCP

The Solid MCP server gives compatible coding agents access to current components, styles, templates, tokens, icons, and setup guidance.

1. Install it as a development dependency:

```bash
npm install --save-dev @solid-design-system/mcp
```

2. For VS Code, create `.vscode/mcp.json` in your project:

```json
{
  "servers": {
    "solid": {
      "type": "stdio",
      "command": "npx",
      "args": ["@solid-design-system/mcp"]
    }
  }
}
```

3. In VS Code, run **MCP: List Servers** from the Command Palette, select `solid`, and start it if needed. Confirm trust if prompted. In Chat, open **Configure Tools** and verify that the Solid tools are available.

See [MCP Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-mcp-installation--docs) for Claude Desktop and GitLab Duo options.

#### 5. Use Solid Design System

You can now use Solid Design System components and styles:

```html
<div class="sd-prose">
  <h2>Welcome to Solid Design System!</h2>
  <sd-button variant="primary">Click me!</sd-button>
</div>
```

### Install with Agent

Copy this prompt into a coding agent with access to your project files and terminal:
