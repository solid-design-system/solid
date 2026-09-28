# Quickstart

This guide will help you get started on adding Solid Design System (SDS) to your project.

The commands in this guide use npm. If an existing project uses another package manager, use that package manager consistently.

## Packages, Theming, and MCP

There is no single package that every project must install. Choose packages based on the Solid features your project requires.

### Application packages

- [`@solid-design-system/components`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-components--docs): Install when you use reusable Solid web components.
- [`@solid-design-system/styles`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-styles--docs): Install when you use Solid components built solely with CSS.
- [`@solid-design-system/tokens`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens--docs): Install when your project provides a theme or uses Solid design token utilities, including Tailwind utilities.

Most applications that use Solid Design System components and styles, and provide their own theme, install all three packages.
The `components`, `styles`, and `tokens` packages always share the same version.
Install or update them together when you use more than one.

### Additional packages

- [`@solid-design-system/placeholders`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-placeholders--docs): Install when prototypes, examples, or tests need placeholder text and license-free media.
- [`@solid-design-system/theming`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-theming--docs): Install only when building custom themes with its color calculation utility. To use an existing Solid theme, install `tokens` instead.
- [`@solid-design-system/mcp`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-mcp--docs): Install as a development dependency when coding agents need current Solid guidance and metadata.
- [`@solid-design-system/eslint-plugin`](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-eslint-plugin--docs): Install as a development dependency when you want Solid-specific lint rules.

Please check the installation documentation for [Components Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-components-installation--docs),
[Styles Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-styles-installation--docs),
[Tokens Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens-installation--docs),
and the [MCP Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-mcp-installation--docs)
for more details on prerequisites, multi-theming, versioning, setup, and usage.

### Theming

Before installing SDS, determine whether your project is a Theme Host or a Theme Consumer:

- **Theme Host:** Owns the page or document and loads one theme for the whole page. Every component and embedded application inherits it automatically.
- **Theme Consumer:** Is a widget, microfrontend, or application embedded in a host page. It inherits the host's theme and must not load another theme.

A standalone application usually fulfills both roles: it loads the theme as the Theme Host and uses its tokens as a Theme Consumer.

Theme Hosts must install `tokens` and load one theme. Theme Consumers must not load theme CSS and should install `tokens` only when they use its token utilities or other package assets.

Solid Design System does not ship fonts. The Theme Host must load the fonts required by its brand, either from its approved CDN or by self-hosting them. Confirm the required brand and theme before choosing a font source; do not guess. See [Tokens Installation](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens-installation--docs) for detailed theming guidance and [font setup and brand examples](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-tokens-installation--docs&anchor=fonts).

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

Install the packages you need. In this example, the project uses components and styles and is the Theme Host:

```bash
npm install @solid-design-system/components @solid-design-system/styles @solid-design-system/tokens
```

#### 2. Import the components

Import the component runtime in your application entry point:

```js
import '@solid-design-system/components/dist/solid-components.js';
```

#### 3. Import the styling

Import the CSS in your global stylesheet. Theme Consumers must omit the theme import.

```css
@import '@solid-design-system/tokens/dist/themes/ui-light/ui-light.css';
@import '@solid-design-system/styles/dist/solid-styles.css';
@import '@solid-design-system/components/dist/solid-components.css';
```

#### 4. Use Solid Design System

You can now use Solid Design System components and styles:

```html
<div class="sd-prose">
  <h2>Welcome to Solid Design System!</h2>
  <sd-button variant="primary">Click me!</sd-button>
</div>
```

### Create a Vue project with Vite and Solid Design System

The following setup creates a Vue and TypeScript application with Tailwind CSS v4 and Solid Design System. It requires [Node.js 20.19+ or 22.12+](https://vite.dev/guide/#scaffolding-your-first-vite-project).

#### 1. Create the project

```bash
npm create vite@latest solid-app -- --template vue-ts
cd solid-app
npm install
npm install @solid-design-system/components @solid-design-system/styles @solid-design-system/tokens
npm install --save-dev tailwindcss @tailwindcss/vite
```

#### 2. Configure Vite

Replace `vite.config.ts` with:

```ts
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
```

The `isCustomElement` option tells Vue to treat `sd-*` elements as web components.

#### 3. Add the global styles

Replace `src/style.css` with:

```css
@import 'tailwindcss';
@import '@solid-design-system/tokens/dist/themes/tailwind.css';
@import '@solid-design-system/tokens/dist/themes/ui-light/ui-light.css';
@import '@solid-design-system/styles/dist/solid-styles.css';
@import '@solid-design-system/components/dist/solid-components.css';
```

The `tailwind.css` import exposes Solid tokens as Tailwind utilities. The `ui-light.css` import makes this application the Theme Host.

#### 4. Register the components

Add the component runtime to `src/main.ts`, before mounting the app:

```ts
import '@solid-design-system/components/dist/solid-components.js';
```

Keep Vite's existing `import './style.css';` in the same file.

#### 5. Use Solid Design System

Replace `src/App.vue` with:

```vue
<template>
  <main class="sd-prose p-6">
    <h1>Welcome to Solid Design System!</h1>
    <sd-button variant="primary">Click me!</sd-button>
  </main>
</template>
```

Start the development server:

```bash
npm run dev
```

Before considering the setup complete, verify the production build:

```bash
npm run build
```
