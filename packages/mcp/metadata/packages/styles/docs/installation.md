# Installation

Solid Styles is installed via npm. For environments without a bundler, see [CDN Hosting](?path=/docs/general-cdn-hosting--docs).

<sd-notification type="info" open id="versioning-info">
  The `components`, `styles`, and `tokens` packages now always share the same version. We use fixed versioning to keep
  them fully in sync, so every release updates all three packages, even if only one of them changed. Make sure to
  install or update them using the same version number.
</sd-notification>

## Prerequisites

### Theme

Solid Styles come without any theme or font by default. Ensure to follow the installation guidelines from [@solid-design-system/tokens](?path=/docs/packages-tokens-installation--docs) to include a fitting theme in your project.

### Versioned vs. unversioned styles

When using styles from Solid Design System in microfrontends, versioned components can be used. While their are strongly recommended for `@solid-design-system/styles`,
versioning is less important for `@solid-design-system/styles` due to the lightweight approach and given encapsulation in ShadowDOMs.
Including version numbers in component names provides more control over updates and prevents collisions when different versions of the same component are used simultaneously.

<sd-tab-group>
  {/* prettier-ignore */}
  <sd-tab slot="nav" panel="unversioned"> Unversioned </sd-tab>
  {/* prettier-ignore */}
  <sd-tab slot="nav" panel="versioned"> Versioned </sd-tab>
  <sd-tab-panel name="unversioned">
    ```html
    <mark class="sd-mark">Lorem ipsum</mark>
    ```
  </sd-tab-panel>
  <sd-tab-panel name="versioned">
    ```html
    <mark class="sd-%DASHED-STYLES-VERSION%-mark">Lorem ipsum</mark>
    ```
  </sd-tab-panel>
</sd-tab-group>

## Installation

Install Solid Styles from npm:

```bash
npm install @solid-design-system/styles
```

It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/solid` that serves static files from `node_modules/@solid-design-system/styles`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

<sd-tab-group>
  {/* prettier-ignore */}
  <sd-tab slot="nav" panel="unversioned">Unversioned</sd-tab>
  {/* prettier-ignore */}
  <sd-tab slot="nav" panel="versioned">Versioned</sd-tab>
  <sd-tab-panel name="unversioned">
    ```html
    <link rel="stylesheet" href="/solid/dist/solid-styles.css" />
    ```
  </sd-tab-panel>
  <sd-tab-panel name="versioned">
    ```html
    <link rel="stylesheet" href="/solid/dist-versioned/solid-styles.css" />
    ```
  </sd-tab-panel>
</sd-tab-group>

Alternatively, you can use a bundler.

## Cherry Picking

Cherry picking loads only the styles you need up front, limiting the number of files the browser has to download. The disadvantage is that you need to import each individual style.

Here's an example that loads only the mark style that would work in Vite.

<sd-tab-group>
  {/* prettier-ignore */}
  <sd-tab slot="nav" panel="unversioned">Unversioned</sd-tab>
  {/* prettier-ignore */}
  <sd-tab slot="nav" panel="versioned">Versioned</sd-tab>
  <sd-tab-panel name="unversioned">
  ```html
  <script type="module">
    import '@solid-design-system/styles/dist/modules/mark.css';

    // .sd-mark is ready to use!

  </script>
  ```
  </sd-tab-panel>
  <sd-tab-panel name="versioned">
  ```html
  <script type="module">

    import '@solid-design-system/styles/dist-versioned/modules/mark.css';

    // .sd-%DASHED-COMPONENTS-VERSION%-mark is ready to use!

  </script>
  ```
  </sd-tab-panel>
</sd-tab-group>

### Prose

tbd.

## cdn/ vs dist/

The package ships both `cdn/` and `dist/` artifacts. The `/cdn` files are already minified. The `/dist` files can be more easily patched and are better suited for bundlers.

Use `/dist` with a bundler (recommended). Use `/cdn` only when hosting on your own CDN without build tooling — see [CDN Hosting](?path=/docs/general-cdn-hosting--docs).
