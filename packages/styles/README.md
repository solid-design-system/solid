<div className="flex gap-2">
  ![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
  ![NPM Version](https://img.shields.io/npm/v/%40solid-design-system%2Fstyles)
</div>

# @solid-design-system/styles

This package provides easy to use standalone helper classes.

## Development

### Building the styles

This package makes use of `postcss` for creating a unified bundle for easier consumption in applications. Run `pnpm build` in the root of this package to recreate the css files.

### Creating new modules

1. Create a new folder `src/[MODULE_NAME]`.
2. Create a new file `src/[MODULE_NAME]/solid-styles.css`.
3. Add CSS statements to your liking. **Hint**: You may also split your code into multiple css files residing in the `src/[MODULE_NAME]` folder. Make sure to **import them into your `src/[MODULE_NAME]/solid-styles.css` file** to make them part of the build.
4. Add js doc comments to your code to create controls for storybook automatically. This can be done by creating comments, as seen below.
5. Run `pnpm build`. You should now see the a new file `dist/[MODULE_NAME].css` that holds all your previous code, as well as your created submodules (if you have splitted your code into multiple files).

### Documenting your module with CSS comments

When adding comments to your modules, please add a list of all variants of your module to your css file. Comments like this will take care that storybooks documentation is automatically updated:

```css
/**
 * This is a demo class.
 * @name sd-demo
 * @status stable
 * @since 1.0
 * @variant { NO_DEFAULT | left | right } sd-demo The position.
 * @variant { xl | 3xl } sd-demo--size- The size.
 * @boolean { false } sd-demo--inverted Inverts the demo.
 */
```

This will create documentation for the following classes:

- `sd-demo`
- `sd-demo--left`
- `sd-demo--right`
- `sd-demo--size-xl`
- `sd-demo--size-3xl`
- `sd-demo--inverted`
