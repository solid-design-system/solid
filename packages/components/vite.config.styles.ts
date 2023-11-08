import copy from 'rollup-plugin-copy';
import packageJson from './package.json';
import path from 'path';
import type { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default (() => {
  return {
    /**
     * Build step for styles
     */
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          'solid-components': path.resolve(__dirname, 'src/solid-styles.css')
        },
        output: {
          dir: 'dist/styles',
          assetFileNames: `solid-styles.css`
        },
        plugins: [
          copy({
            targets: [
              {
                src: 'dist/styles/solid-styles.css',
                dest: 'dist/versioned-styles',
                rename: () => `solid-styles.css`,
                transform: contents => {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                  const version = packageJson.version;
                  return contents.toString().replace(/\.sd-/g, `.sd-${version.replace(/\./g, '-')}-`);
                }
              }
            ],
            hook: 'writeBundle'
          })
        ]
      }
    }
  };
}) as unknown as typeof defineConfig;
