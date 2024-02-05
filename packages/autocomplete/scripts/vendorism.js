import { eject, get, set } from 'vendorism';

const config = {
  get: {
    hooks: {
      before: 'echo ⌛️ Setting up source...',
      after: 'echo ✅ Source setup complete.'
    },
    url: 'https://github.com/TarekRaafat/autoComplete.js/archive/refs/tags/v10.2.7.zip',
    path: 'vendor',
    downloadConfig: { extract: true, strip: 1 }
  },
  set: {
    hooks: {
      before: 'echo ⌛️ Setting up target...',
      after: 'echo ✅ Target setup complete.'
    },
    includes: 'src/**/*.js',
    path: '.',
    transforms: [
      (path, content) => {
        const eslintDisableComment = '/* eslint-disable */';
        let nextContent = content;
        // Vendored js uses other style rules, so make sure to ignore them per default
        if (path.endsWith('.ts') || path.endsWith('.js')) {
          nextContent = `${eslintDisableComment}\n${nextContent}`;
        }

        return {
          content: nextContent,
          path
        };
      }
    ]
  }
};

await get(config);
await set(config);
