export const getColorItems = (type, color, theme) => {
  return Object.fromEntries(
    Object.entries(
      theme
        .filter(token => token.name.includes(`${type}-${color}`) && !token.name.includes('alternative'))
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
