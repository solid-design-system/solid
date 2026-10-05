# Quickstart

This guide will help you get started on adding Solid Design System (SDS) to your project.

The commands in this guide use npm. If an existing project uses another package manager, use that package manager consistently.

### Packages

There is no single package that every project must install. Choose packages based on the Solid features your project requires:

- [`@solid-design-system/components`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-components--docs): Component library consisting of reusable web components.
- [`@solid-design-system/styles`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-styles--docs): Smaller component library, built solely with CSS.
- [`@solid-design-system/tokens`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens--docs): Design tokens (variables) and themes, install when your project uses token utilities, Tailwind utilities, or an explicit/custom theme.
- [`@solid-design-system/mcp`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-mcp--docs): Model Context Protocol that provides coding agents access to current SDS guidance and metadata.

The `components`, `styles`, `tokens`, and `mcp` packages always share the same version.
Install or update them together when you use more than one.

There are additional packages that provide extended functionality for the Solid Design System:

- [`@solid-design-system/placeholders`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-placeholders--docs): Placeholder text and license-free media.
- [`@solid-design-system/theming`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-theming--docs): Color calculation tool for building custom themes (for existing SDS themes, use the `tokens` package).
- [`@solid-design-system/eslint-plugin`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-eslint-plugin--docs): Adds SDS-specific lint rules.

### Install manually

#### 1. Install the packages

The following commands install the necessary packages:

```bash
npm install @solid-design-system/components @solid-design-system/styles @solid-design-system/tokens
npm install --save-dev @solid-design-system/mcp
```

##### 2. Import the components

Import the component runtime in your application entry point:

```js
import '@solid-design-system/components/dist/solid-components.js';
```

#### 3. Import the styling

Import the CSS in your global stylesheet.
This example uses the `ui-light` theme and Frutiger Neue fonts from the CDN. Replace `latest` in the font URLs with the approved version for your project.
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
