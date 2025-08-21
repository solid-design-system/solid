/**
 * Shared utility functions for token processors
 */

/**
 * Convert camelCase or PascalCase to kebab-case
 */
export function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
}

/**
 * Get token value with fallback
 */
export function getTokenValue(token) {
  const { value } = token;
  return typeof value === 'string' ? token.value : token.value;
}
