// @ts-expect-error - no types
import theme from '../../tokens/src/theme.mjs';

export default () => {
  return {
    name: 'inject-theme',
    resolveId(id: unknown) {
      if (id === 'tailwind-theme') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return id;
      }
      return null;
    },
    load(id: unknown) {
      if (id === 'tailwind-theme') {
        return `export default ${JSON.stringify(theme)};`;
      }
      return null;
    }
  };
};
