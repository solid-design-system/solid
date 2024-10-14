// @ts-expect-error - no types
import theme from '../../tokens/src/create-theme.cjs';

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
        return `export default ${JSON.stringify(theme).replace(/<alpha-value>/g, '1')};`;
      }
      return null;
    }
  };
};
