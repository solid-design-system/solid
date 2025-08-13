import { existsSync, mkdirSync } from 'fs';
import variablesJson from '../../src/figma-variables/variableTokens.json' with { type: 'json' };
import legacyTokensJson from '../../src/tokens.json' with { type: 'json' };

/**
 * The fetching result of the Figma API for local variables.
 */
export const figmaVariables = variablesJson;

export const legacyTokens = legacyTokensJson;

/**
 * Create a directory if it does not exist.
 * @param { string } dirPath the directory path
 */
export const createDirectory = dirPath => {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
};

/**
 * If the variable is from type FLOAT there are more specific types, which it needs to be mapped to.
 * This function returns the specific type for the float variable based on its name.
 *
 * @param { string } name The name of a variable
 * @returns { string } The specific type for the float variable
 */
export const getTypeForFloatVariable = name => {
  const type = ['letter-spacing', 'line-height', 'opacity', 'weight', 'z-index'].find(key => name.includes(key));

  switch (type) {
    case 'letter-spacing':
      return 'letterSpacing';
    case 'line-height':
      return 'lineHeights';
    case 'opacity':
      return 'opacity';
    case 'weight':
      return 'fontWeights';
    case 'z-index':
      return 'number';
    default:
      return 'sizing';
  }
};

/**
 * Resolves a variable alias by its ID.
 * @param {string} id The ID of the variable
 * @returns {{ value: string, type: string } | null} The resolved value and type of the variable, or null if not found.
 */
export const resolveAlias = id => {
  const aliasVar = Object.values(figmaVariables.variables).find(v => v.id === id);
  if (!aliasVar) return null;
  const aliasName = aliasVar.name.toLowerCase();

  const aliasType =
    aliasVar.resolvedType === 'FLOAT' ? getTypeForFloatVariable(aliasName) : aliasVar.resolvedType.toLowerCase();

  // The syntax for separators in style dictionary is ".", so all "/" are replaced with "."
  const replacedSeparator = aliasName.replaceAll('/', '.');

  return { type: aliasType, value: `{${replacedSeparator}}` };
};

/**
 * Gets the value of an alias variable in a specific mode.
 * @param { string } aliasId Id of the alias variable
 * @param { string } modeId Id of the mode
 * @returns {unknown | undefined} The value of the alias variable, or undefined if not found.
 */
export const getAliasValue = (aliasId, modeId) => {
  const aliasVar = Object.values(figmaVariables.variables).find(v => v.id === aliasId);
  /** @type {Record<string, unknown> | undefined} */
  const valuesByMode = aliasVar?.valuesByMode;
  return valuesByMode?.[modeId];
};

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
