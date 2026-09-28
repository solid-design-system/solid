# Quickstart

This guide will help you get started on adding Solid Design System to your project.

## Setup guide

### Solid Design System Packages

There is no single package that every project must install. Choose packages based on the Solid features your project requires.

#### Application packages

- [`@solid-design-system/components`](?path=/docs/packages-components--docs): Component library consisting of reusable web components.
- [`@solid-design-system/styles`](?path=/docs/packages-styles--docs): Smaller component library, built solely with CSS.
- [`@solid-design-system/tokens`](?path=/docs/packages-tokens--docs): Design tokens (variables) and themes for consistent theming.

Most applications that use Solid components and styles and provide their own theme install all three packages.
The `components`, `styles`, and `tokens` packages always share the same version.
Install or update them together when you use more than one.

#### Optional packages

- [`@solid-design-system/placeholders`](?path=/docs/packages-placeholders--docs): Placeholder text and license-free media.
- [`@solid-design-system/theming`](?path=/docs/packages-theming--docs): Color calculation utility for building themes (for existing Solid themes, use the `tokens` package).
- [`@solid-design-system/mcp`](?path=/docs/packages-mcp--docs): Model Context Protocol that provides coding agents access to current Solid guidance and metadata.
- [`@solid-design-system/eslint-plugin`](?path=/docs/packages-eslint-plugin--docs): Adds Solid-specific lint rules.

### Theming

Before installing Solid, determine whether your project is a Theme Host or a Theme Consumer:

- **Theme Host:** Owns the page or document and loads one theme for the whole page. Every component and embedded application inherits it automatically.
- **Theme Consumer:** Is a widget, microfrontend, or application embedded in a host page. It inherits the host's theme and must not load another theme.

A standalone application usually fulfills both roles: it loads the theme as the Theme Host and uses its tokens as a Theme Consumer.

Solid Design System does not ship fonts. The Theme Host must load the fonts required by its brand, either from its approved CDN or by self-hosting them. See [Tokens Installation](?path=/docs/packages-tokens-installation--docs) for detailed theming guidance and [font setup and brand examples](?path=/docs/packages-tokens-installation--docs&anchor=fonts).

### Add Solid to an existing project

Install only the packages you use. In this example, the project uses components and styles and is the Theme Host:

```bash
npm install @solid-design-system/components @solid-design-system/styles @solid-design-system/tokens
```

Import the component runtime in your application entry point:

```js
import '@solid-design-system/components/dist/solid-components.js';
```

Import the CSS in your global stylesheet. Theme Consumers must omit the theme import.

```css
@import '@solid-design-system/tokens/dist/themes/ui-light/ui-light.css';
@import '@solid-design-system/styles/dist/solid-styles.css';
@import '@solid-design-system/components/dist/solid-components.css';
```

You can now use Solid components and styles:

```html
<div class="sd-prose">
  <h2>Welcome to Solid Design System!</h2>
  <sd-button variant="primary">Click me!</sd-button>
</div>
```

### Create a Vue project with Vite and Tailwind CSS

The following setup creates a Vue and TypeScript application with Tailwind CSS v4.

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

#### 5. Use Solid

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

### Learn more

Check the installation docs for tokens, styles, components, and MCP for more details on prerequisites, multi-theming, versioning, setup, and usage:

- [Styles Installation](?path=/docs/packages-styles-installation--docs)
- [Components Installation](?path=/docs/packages-components-installation--docs)
- [Tokens Installation](?path=/docs/packages-tokens-installation--docs)
- [MCP Installation](?path=/docs/packages-mcp-installation--docs)

### MCP - Give coding agents Solid context

The Solid MCP server gives compatible coding agents access to current components, styles, templates, tokens, icons, and setup guidance.

Install it as a development dependency:

```bash
npm install --save-dev @solid-design-system/mcp
```

For VS Code, create `.vscode/mcp.json` in your project:

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

See [MCP Installation](?path=/docs/packages-mcp-installation--docs) for Claude Desktop, GitLab Duo, and other setup options.
