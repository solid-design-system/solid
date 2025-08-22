import { readFile, writeFile } from 'node:fs/promises';
import { compile } from '@tailwindcss/node';
import { Scanner } from '@tailwindcss/oxide';
import postcss from 'postcss';
import cssnested from 'postcss-nested';

export async function processCssTags(source, { path, base, minify }) {
  const cssTagRegex = /css`([^`]*)`/g;
  let match;

  while ((match = cssTagRegex.exec(source)) !== null) {
    const [fullMatch, cssContent] = match;

    const css = `@import '../tokens/tailwind.css'; ${cssContent}`;

    try {
      let compiler = await compile(css, {
        base,
        onDependency(path) {}
      });

      let candidates = [];
      if (compiler.features > 0) {
        let sources = [...compiler.sources];
        if (compiler.root === null) {
          sources.push({ base, pattern: '**/*', negated: false });
        }

        let scanner = new Scanner({
          sources
        });

        candidates = scanner.scan();
      }

      let compiled = compiler.build(candidates);

      const result = await postcss([cssnested])
        .process(compiled, { from: undefined })
        .then(r => r.css);

      source = source.replace(
        fullMatch,
        `css\`${result
          .replaceAll('\\', '\\\\') // Escape backslashes
          .replaceAll('`', '\\`')}\``
      );

      if (path.includes('button.ts')) {
        await writeFile('../button.source.ts', source);
      }
    } catch (error) {
      console.error(`PostCSS error: ${error}`);
    }
  }

  return source;
}

export function esbuildPluginTailwind(options) {
  let base = options?.base ?? process.cwd();
  let minify = options?.minify ?? false;

  let plugin = {
    name: 'tailwind',
    async setup(build) {
      build.onLoad({ filter: /\.(ts|js)$/ }, async ({ path }) => {
        if (/node_modules/.test(path)) {
          return;
        }
        let source = await readFile(path, 'utf8');

        return {
          contents: await processCssTags(source, { path, base, minify }),
          loader: 'ts'
        };
      });
    }
  };

  return plugin;
}
