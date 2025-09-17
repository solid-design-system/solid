export const getThemeColors = theme => {
  return theme.theme
    .filter(variable => variable.name.startsWith('sd-color'))
    .map(variable => ({
      name: variable.name.replace('sd-color-', ''),
      value: variable.value
    }))
    .reduce((acc, variable) => {
      const [base, ...rest] = variable.name.split('-');

      if (!acc[base]) {
        acc[base] = {};
      }

      const value = variable.value.replace(/;$/, '');

      if (rest.length === 0) {
        acc[base].DEFAULT = value;
      } else {
        const key = rest.join('-');
        acc[base][key] = value;
      }

      return acc;
    }, {});
};
