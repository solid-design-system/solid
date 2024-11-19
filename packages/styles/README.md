# @solid-design-system/styles

This package provides easy to use standalone helper classes.

---

## 1. Installation

Please make sure to install the package as a dependency:

```bash
npm install --save @solid-design-system/styles

# Install the required design tokens
# (only needed if you do not install peerDeps automatically)
npm install --save @solid-design-system/tokens
```

---

## 2. Loading the provided stylesheets

### 2.1 Loading all styles (Recommended)

To load all provided css classes at once, just include the default export into your application.
It contains all styles found in the `src` directory.

```html
<!DOCTYPE html>
  <head>
    <link rel="stylesheet" href="/node_modules/@solid-design-system/styles/dist/index.css" />
  </head>
  <body>
  </body>
</html>
```

We also provide a default export that points to the created `dist/index.css` file.
This will be picked up and served when using a bundler (e.g. webpack or vite).
For this to work, import the module directly in your project like this.

```javascript
import '@solid-design-system/styles';
```

---

### 2.2 Loading single modules

It is also possible to load only parts of the provided css files.

> For a list of available modules, please have a look at the available modules section below.

```html
<!DOCTYPE html>
  <head>
    <!-- Loading typography only -->
    <link rel="stylesheet" href="/node_modules/@solid-design-system/styles/dist/typography.css" />
  </head>
  <body>
  </body>
</html>
```

```javascript
// Loading typography only
import '@solid-design-system/styles/typography.css';
```

---

## 3. Available modules

<!-- BEGIN INLINE COMMENT -->

- typography.css
  - paragraph.css
  - prose.css

<!-- END INLINE COMMENT -->

---

## Development

### Building the styles

This package makes use of `postcss` for creating a unified bundle for easier consumption in applications. Please run `pnpm build` in the root of this package to recreate the bundle file `dist/index.css`.

### How it works

1. The build will walk through the `src` directory and process all files named `index.css`. It automatically moves those files to the root `dist` directory, with the name of the folder it resides in. `src/typography/index.css` will automatically become `dist/typography.css`.
2. All css files **not** named `index.css` will get copied over to the `dist` directory to make them available in the bundle. `src/typography/body.css` will get copied to `dist/typography/body.css`, however `dist/typography/index.css` will get renamed to `dist/typography.css` for easier inclusion.

### Creating new modules

1. Create a new folder `src/[MODULE_NAME]`.
2. Create a new file `src/[MODULE_NAME]/index.css`.
3. Add CSS statements to your liking. **Hint**: You may also split your code into multiple css files residing in the `src/[MODULE_NAME]` folder. Make sure to **import them into your `src/[MODULE_NAME]/index.css` file** to make them part of the build.
4. Add js doc comments to your code to create controls for storybook automatically. This can be done by creating comments, as seen below.
5. Run `pnpm build`. You should now see the a new file `dist/[MODULE_NAME].css` that holds all your previous code, as well as your created submodules (if you have splitted your code into multiple files).

#### Bonus: Documenting your module with css comments

When adding comments to your modules, please add a list of all variants of your module to your css file. Comments like this will take care that storybooks documentation is automatically updated:

```css
/**
 * The "variant" syn-fieldset takes care that two classes will exist in documentation. The first variant value will be the selected one:
 * - syn-fieldset-small and
 * - syn-fieldset-large
 * @variant {small | large } syn-fieldset
 *
 * The "variant" syn-shadow takes care that 4 classes will exist in documentation. There will be no default value selected via the NO_DEFAULT option:
 * @variant { NO_DEFAULT | bottom | top | start | end } syn-shadow
 *
 * The "boolean" syn-boolean-false will display as a boolean value in storybook with 'false' as default value
 * @variant syn-boolean-false This value will also be available as a class.
 *
 * The "boolean" syn-boolean-true will display as a boolean value in storybook with 'true' as default value
 * @boolean { true } syn-boolean-true This value will also be available as a class.
 * 
 */
```
