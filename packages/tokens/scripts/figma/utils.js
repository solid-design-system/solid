import { existsSync, mkdirSync } from 'fs';

/**
 * Formats a color object into a CSS-compatible color string.
 * formatColor({ r: 0.5, g: 0.5, b: 0.5, a: 0.8 }) // "rgba(128, 128, 128, 0.80)"
 * formatColor({ r: 0.5, g: 0.5, b: 0.5 }) // "#808080"
 * @param { Color } color Color object with r, g, b, and optional a properties.
 * @returns {string} The formatted color string.
 */
export const formatColor = color => {
  const { r, g, b } = color;
  const a = 'a' in color ? color.a : undefined;

  const red = Math.round(r * 255);
  const green = Math.round(g * 255);
  const blue = Math.round(b * 255);

  if (a !== undefined && a < 1) {
    return `rgba(${red}, ${green}, ${blue}, ${a.toFixed(2)})`;
  }

  // eslint-disable-next-line no-bitwise
  return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
};

/**
 * Creates a nested property in an object
 * @param {*} obj The object to modify
 * @param {Array<string>} keys The keys representing the path to the nested property
 * @param {unknown} value The value to set at the nested property
 */
export const setNestedProperty = (obj, keys, value) => {
  let current = obj;
  keys.slice(0, -1).forEach(key => {
    if (!current[key]) current[key] = {};
    current = current[key];
  });
  current[keys[keys.length - 1]] = value;
};

/**
 * Create a directory if it does not exist.
 * @param { string } dirPath the directory path
 */
export const createDirectory = dirPath => {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
};

export function prefixReferences(obj) {
  if (typeof obj === 'string') {
    return obj.replace(/\{(?!core\.)/g, '{core.');
  }

  if (Array.isArray(obj)) {
    return obj.map(prefixReferences);
  }

  if (obj && typeof obj === 'object') {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, prefixReferences(value)]));
  }

  return obj;
}
