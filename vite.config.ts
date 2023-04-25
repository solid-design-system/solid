import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import pkgMinifyHTML from 'rollup-plugin-minify-html-literals';

process.env.VITE_BUILD = 'lib';

const minifyHTML = (pkgMinifyHTML as any).default;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    outDir: 'dist',
    // lib: {
    //   entry: path.resolve(__dirname, 'src/index.ts'),
    //   name: 'Solid Components',
    //   fileName: (format) => `solid-components.${format}.js`,
    // },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/solid-components.ts'),
      },
      // external: ['@floating-ui/dom', '@shoelace-style/animations', 'lit', 'qr-creator'],
      output: {
        entryFileNames: 'solid-components.js',
        inlineDynamicImports: true,
        assetFileNames: 'solid-components[extname]',
      },
      plugins: [
        process.env['npm_lifecycle_event'] === 'build' ? minifyHTML() as any : console.log('ℹ️ Minification skipped'),
        process.env['npm_lifecycle_event'] === 'build' ? terser({ compress: { defaults: true, passes: 2 }, mangle: true }) as any : console.log('ℹ️ Terser skipped'),
      ],
    },
  },
});
