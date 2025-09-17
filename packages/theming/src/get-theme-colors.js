export const getThemeColors = theme => {
  return theme.theme
    .filter(variable => variable.name.startsWith('sd-color'))
    .map(variable => ({
      name: variable.name.replace('sd-color-', ''),
      value: variable.value
    }))
    .reduce((acc, variable) => {
      const [base, ...rest] = variable.name.split('-');

      // Prevent prototype pollution via dangerous keys
      const dangerousKeys = ['__proto__', 'constructor', 'prototype'];
      if (dangerousKeys.includes(base)) {
        return acc;
      }

      if (!acc[base]) {
        acc[base] = {};
      }

      const value = variable.value.replace(/;$/, '');

      if (rest.length === 0) {
        acc[base].DEFAULT = value;
      } else {
        const key = rest.join('-');
        if (!dangerousKeys.includes(key)) {
          acc[base][key] = value;
        }
      }

      return acc;
    }, {});
};
