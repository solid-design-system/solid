/** Converts the first letter of a string to uppercase */
export function uppercaseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/** Converts a kebab-case string to camelCase */
export function kebabToCamelCase(string: string) {
  return string.replace(/-./g, x => x[1].toUpperCase());
}
