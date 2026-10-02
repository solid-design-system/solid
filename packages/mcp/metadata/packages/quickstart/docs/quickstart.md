# Quickstart

This guide will help you get started on adding Solid Design System (SDS) to your project.

The commands in this guide use npm. If an existing project uses another package manager, use that package manager consistently.

## Packages, Theming, and MCP

### Packages

There is no single package that every project must install. Choose packages based on the Solid features your project requires.

- [`@solid-design-system/components`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-components--docs): Component library consisting of reusable web components.
- [`@solid-design-system/styles`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-styles--docs): Smaller component library, built solely with CSS.
- [`@solid-design-system/tokens`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens--docs): Design tokens (variables) and themes, install when your project uses token utilities, Tailwind utilities, or an explicit/custom theme.
- [`@solid-design-system/mcp`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-mcp--docs): Model Context Protocol that provides coding agents access to current SDS guidance and metadata.

The `components`, `styles`, and `tokens` packages always share the same version.
Install or update them together when you use more than one.

Please check the installation documentation for [Components Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-components-installation--docs),
[Styles Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-styles-installation--docs),
[Tokens Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens-installation--docs),
and the [MCP Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-mcp-installation--docs)
for more details on prerequisites, multi-theming, versioning, setup, and usage.

#### Additional packages

- [`@solid-design-system/placeholders`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-placeholders--docs): Placeholder text and license-free media.
- [`@solid-design-system/theming`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-theming--docs): Color calculation tool for building custom themes (for existing SDS themes, use the `tokens` package).
- [`@solid-design-system/eslint-plugin`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-eslint-plugin--docs): Adds SDS-specific lint rules.

### Theming

Before installing SDS, determine whether your project is a Theme Host or a Theme Consumer:

- **Theme Host:** Owns the page or document and may load one explicit theme for the whole page. Every component and embedded application inherits it automatically.
- **Theme Consumer:** Is a widget, microfrontend, or application embedded in a host page. It inherits the host's theme and must not load another theme.

A standalone application usually fulfills both roles: it owns the page as a Theme Host and uses SDS components and tokens as a Theme Consumer. Current components and styles provide a built-in `ui-light` fallback, so a theme import is only needed when you want an explicit or custom theme. Load that theme once as the Theme Host; all components and embedded applications on the page inherit it. Embedded Theme Consumers must not load theme CSS. Install `tokens` when you use its token utilities or other package assets.

<sd-accordion id="older-versions" summary="Older versions">
  For component and style versions v5 through v6, load a theme of your choice as the default. If you import a theme from npm, install `@solid-design-system/tokens` and add that theme's CSS to your global stylesheet. If you serve the theme CSS from another location, you do not need to install `tokens`.

For example, to use the `ui-light` theme:

```css
@import '@solid-design-system/tokens/dist/themes/ui-light/ui-light.css';
```

Versions v4 or earlier can use the built-in `ui-light` fallback without importing a theme.
</sd-accordion>

Solid Design System does not ship fonts. The Theme Host must load the fonts required by its brand, either from its approved CDN or by self-hosting them. Confirm the required brand and theme before choosing a font source. See [Tokens Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens-installation--docs) for detailed theming guidance and [font setup and brand examples](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens-installation--docs&anchor=fonts).

### Model Context Protocol (MCP)

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

## Installation and Application

### Add Solid Design System to your project

#### 1. Install the packages

Install the packages used in this Union Investment example. The `tokens` package provides the explicit theme CSS imported below, as well as token utilities:

```bash
npm install @solid-design-system/components @solid-design-system/styles @solid-design-system/tokens
```

#### 2. Import the components

Import the component runtime in your application entry point:

```js
import '@solid-design-system/components/dist/solid-components.js';
```

#### 3. Import the styling

Import the CSS in your global stylesheet. This example uses the `ui-light` theme and Frutiger Neue fonts from the CDN. Replace `latest` in the font URLs with the approved version for your project. For other themes and font setups, see [Fonts and brand examples](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens-installation--docs&anchor=fonts).

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

For older-version, see the [Older versions requirements](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-quickstart--docs&anchor=older-versions).

#### 4. Use Solid Design System

You can now use Solid Design System components and styles:

```html
<div class="sd-prose">
  <h2>Welcome to Solid Design System!</h2>
  <sd-button variant="primary">Click me!</sd-button>
</div>
```

### Create a Vue project with Vite and Solid Design System

The following setup creates a Vue and TypeScript application with Tailwind CSS v4 and Solid Design System. It requires [Node.js 20.19+ or 22.12+](https://vite.dev/guide/#scaffolding-your-first-vite-project). The font example uses Frutiger Neue from the Union Investment CDN; replace `latest` in the font URLs with the approved version for your project.

Copy and run this complete setup in a terminal:

```bash
: '1. Create the Vue and TypeScript project without interactive prompts.'
npm create vite@latest solid-app -- --template vue-ts --no-interactive
cd solid-app

: '2. Install the SDS packages and Tailwind CSS v4.'
npm install
npm install @solid-design-system/components @solid-design-system/styles @solid-design-system/tokens
npm install --save-dev tailwindcss @tailwindcss/vite

: '3. Configure Vue to recognize SDS custom elements and enable Tailwind CSS.'
cat > vite.config.ts <<'EOF'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('sd-')
        }
      }
    }),
    tailwindcss()
  ]
});
EOF

: '4. Import the SDS styles and define the app fonts.'
cat > src/style.css <<'EOF'
@import 'tailwindcss';
@import '@solid-design-system/tokens/dist/themes/tailwind.css';
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
EOF

: '5. Register SDS components and mount the Vue app.'
cat > src/main.ts <<'EOF'
import '@solid-design-system/components/dist/solid-components.js';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

createApp(App).mount('#app');
EOF

: '6. Add a page that uses an SDS button.'
cat > src/App.vue <<'EOF'
<template>
  <main class="sd-prose p-6">
    <h1>Welcome to Solid Design System!</h1>
    <sd-button variant="primary">Click me!</sd-button>
  </main>
</template>
EOF

: '7. Verify the production build, then start the development server.'
npm run build
npm run dev
```

The `isCustomElement` option tells Vue to treat `sd-*` elements as web components. The `tailwind.css` import exposes Solid tokens as Tailwind utilities.
