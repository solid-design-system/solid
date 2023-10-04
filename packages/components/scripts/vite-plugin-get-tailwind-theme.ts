import theme from '../../tokens/src/create-theme.cjs';

export default () => {
  return {
    name: 'inject-theme',
    resolveId(id) {
      if (id === 'tailwind-theme') {
        return id;
      }
      return null;
    },
    load(id) {
      if (id === 'tailwind-theme') {
        return `export default ${JSON.stringify(theme).replace(/<alpha-value>/g, '1')};`;
      }
      return null;
    }
  };
};
