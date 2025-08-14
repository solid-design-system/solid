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
 * Normalize token name by removing prefixes and converting to kebab-case
 */
export function normalizeTokenName(name) {
  return name.replace(/^sd\./, '').replace(/\./g, '-').replace('\b', '');
}

/**
 * Get token value with fallback
 */
export function getTokenValue(token) {
  const { value } = token;
  return typeof value === 'string' ? token.value.replace('\b', '') : token.value;
}

/**
 * Convert object to CSS properties with kebab-case conversion
 */
export function objectToCssProperties(obj, indentLevel = 0) {
  const indent = '  '.repeat(indentLevel);
  const properties = [];

  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('&')) {
      // Handle pseudo-selectors and nested rules
      const nestedProperties = objectToCssProperties(value, indentLevel + 1);
      properties.push(`${indent}${key} {\n${nestedProperties}\n${indent}}`);
    } else {
      // Convert camelCase to kebab-case for CSS properties
      const cssProperty = toKebabCase(key);
      properties.push(`${indent}${cssProperty}: ${value};`);
    }
  }

  return properties.join('\n');
}

/**
 * Convert object to flat CSS properties string (for utilities)
 */
export function objectToFlatCssProperties(obj) {
  const properties = [];

  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('&')) {
      // Handle pseudo-selectors (though less common in utilities)
      const nestedProperties = objectToFlatCssProperties(value);
      properties.push(`${key} {\n    ${nestedProperties}\n  }`);
    } else {
      // Convert camelCase to kebab-case for CSS properties
      const cssProperty = toKebabCase(key);
      properties.push(`${cssProperty}: ${value};`);
    }
  }

  return properties.join('\n  ');
}

/**
 * Create a CSS variable name with prefix and path
 */
export function createCssVariableName(prefix, path) {
  const cleanPath = path.filter(p => Boolean(p));
  return `--${prefix}-${cleanPath.join('-')}`;
}

/**
 * Create a utility class name with prefix and path
 */
export function createUtilityClassName(prefix, path) {
  const cleanPath = path.filter(p => Boolean(p));
  return `${prefix}${cleanPath.join('-')}`;
}

/**
 * Remove redundant prefix from path if it matches
 */
export function removeRedundantPrefix(path, prefix) {
  const prefixKebab = toKebabCase(prefix);
  if (path[0] === prefixKebab) {
    return path.slice(1);
  }
  return path;
}

/**
 * Shared theme processing logic
 */
export function processTokenPath(token, rootPropertyName = '_', themePattern = 'theme-content') {
  // Get the original token path (before kebab-case conversion)
  let originalPath = [...token.path];

  // Remove common prefixes from original path
  if (originalPath[0] === 'sd') {
    originalPath = originalPath.slice(1);
  }
  if (originalPath[0] === 'color') {
    originalPath = originalPath.slice(1);
  }
  if (originalPath[0] === 'colors') {
    originalPath = originalPath.slice(1);
  }

  // Handle theme tokens specially using original path
  const isTheme = isThemeToken(originalPath, themePattern);
  const variant = isTheme ? getThemeVariant(originalPath, rootPropertyName) : null;

  // For theme tokens, remove the variant suffix for the base name
  let finalPath = originalPath;
  if (isTheme && variant) {
    finalPath = originalPath.slice(0, -1); // Remove the variant part
  } else if (isTheme && isRootProperty(originalPath, rootPropertyName)) {
    finalPath = originalPath.slice(0, -1); // Remove the "_" part
  }

  return {
    finalPath,
    variant,
    isTheme,
    originalPath
  };
}

/**
 * Check if a token path represents a theme token
 */
export function isThemeToken(path, themePattern = 'theme-content') {
  // Check if the path contains the theme pattern
  // Default pattern is 'theme-content' which means path contains 'theme'
  if (themePattern === 'theme-content') {
    return path.includes('theme');
  }

  // For custom patterns, you can extend this logic
  return path.includes('theme');
}

/**
 * Check if the last part of the path is the root property
 */
export function isRootProperty(path, rootPropertyName = '_') {
  return path[path.length - 1] === rootPropertyName;
}

/**
 * Get the theme variant from a token path
 */
export function getThemeVariant(path, rootPropertyName = '_') {
  if (!isThemeToken(path)) {
    return null;
  }

  const lastPart = path[path.length - 1];

  // If the last part is the root property name (usually '_'), this is the default theme
  if (lastPart === rootPropertyName) {
    return null;
  }

  // For theme tokens, if the last part is not the root property,
  // then it's a theme variant (e.g., 'dark', 'light', etc.)
  return lastPart || null;
}
