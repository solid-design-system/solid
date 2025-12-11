export const getColorItems = (type, color, theme) => {
  return Object.fromEntries(
    Object.entries(
      theme
        .filter(token => token.name.includes(`${type}-${color}`) && !token.name.includes('constant'))
        .reduce(
          (acc, token) => ({
            ...acc,
            [token.name.replace(`${type}-`, '')]: token.value
          }),
          {}
        )
    ).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  );
};

export const getTokens = (
  type,
  theme,
  options = {
    filter: () => true,
    sort: () => 0
  }
) =>
  theme
    .filter(token => token.name.startsWith(type) && (options.filter?.(token) ?? true))
    .map(token => ({ ...token, name: token.name.replace(`${type}-`, '') }))
    .sort(options.sort ?? (() => 0));
