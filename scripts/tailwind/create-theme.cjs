const tokens = require('./tokens.json');

const hexToRgb = hex => {
  const hexCharacters = 'a-f\\d';
  const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
  const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
  const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
  const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

  if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
    throw new TypeError('Expected a valid hex string');
  }

  hex = hex.replace(/^#/, '');
  let alphaFromHex = 1;

  if (hex.length === 8) {
    alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.slice(0, 6);
  }

  if (hex.length === 4) {
    alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.slice(0, 3);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const number = Number.parseInt(hex, 16);
  const red = number >> 16;
  const green = (number >> 8) & 255;
  const blue = number & 255;

  return [red, green, blue];
};

const resolveValue = value => {
  // if value starts with "{" it's a reference.
  if (value.startsWith('{')) {
    const path = value.replace('{', '').replace('}', '').split('.');
    const resolvePath = (path, set) => {
      let resolvedValue = tokens[set];
      path.forEach(p => {
        resolvedValue = resolvedValue[p];
      });
      return resolvedValue;
    };
    const resolvedValue = resolvePath(path, 'UI Core') || resolvePath(path, 'UI Semantic');
    return resolveValue(resolvedValue.value);
  } else {
    return sanitizeValue(value);
  }
};

const sanitizeValue = value => {
  value = value.replaceAll('\b', '');
  return value;
};

const sanitizeKey = value => {
  value = value.replaceAll('\b', '');
  value = value.replaceAll(',', '.');
  return value;
};

/**
 * Reformats a color object, grouping color shades under their respective color names and
 * setting an existing color with no shade as the default color.
 *
 * @param {Object} obj - The input color object with keys representing color names and shades, and values representing color codes.
 * @returns {Object} result - The reformatted color object with grouped colors and default values set.
 *
 */
const reformatColors = obj => {
  let result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const colorValue = obj[key];

      if (key.includes('-')) {
        const [colorName, shade] = key.split('-');
        if (!result[colorName]) {
          result[colorName] = {};
        } else if (typeof result[colorName] !== 'object') {
          // Set the default value when the first shade is found
          if (result[colorName]) {
            const defaultColor = result[colorName];
            result[colorName] = {};
            result[colorName]['DEFAULT'] = defaultColor;
          }
        }

        result[colorName][shade] = colorValue;
      } else if (!result[key]) {
        result[key] = colorValue;
      }
    }
  }

  result['transparent'] = 'transparent';

  return result;
};

// Go through the opacity object that has the format object: {50: { value: string, comment: string }, 60: {value: string, comment: string}}
// convert it to an interable array first in the format [ {name: '50', value: string, comment: string}, {name: '60', value: string, comment: string}]
const getOpacities = () => {
  let result = {};
  Object.entries(tokens['UI Semantic'].opacity)
    .map(([name, value]) => ({ name, ...value }))
    .forEach(({ name, value, description }) => {
      // add the opacity to the theme
      // convert e.g. "90%" to "0.9"
      const convertedValue = resolveValue(value).replace('%', '') / 100;
      result[sanitizeValue(name)] = `var(--sd-opacity-${sanitizeValue(name)}, ${convertedValue})${
        description ? ` /* ${description} */` : ''
      }`;
    });
  return result;
};

// Go through the opacity object that has the format object: {50: { value: string, comment: string }, 60: {value: string, comment: string}}
// convert it to an interable array first in the format [ {name: '50', value: string, comment: string}, {name: '60', value: string, comment: string}]
const getBorderRadius = () => {
  let result = {};
  Object.entries(tokens['UI Semantic'].rounded)
    .map(([name, value]) => ({ name, ...value }))
    .forEach(({ name, value, description }) => {
      result[sanitizeValue(name)] = `var(--sd-border-radius-${name}, ${resolveValue(value)})${
        description ? ` /* ${description} */` : ''
      }`;
    });
  return result;
};

// Get all Object.entries(tokens['UI Semantic'].spacing and Object.entries(tokens['UI Semantic'].sizing values
// Merge them and create spacing tokens for TailwindCSS
const getSpacings = () => {
  let result = {};
  Object.entries({ ...tokens['UI Semantic'].spacing, 0: { value: '0px', description: 'No spacing (manual)' } })
    .map(([name, value]) => ({ name, ...value }))
    .concat(Object.entries(tokens['UI Semantic'].sizing).map(([name, value]) => ({ name, ...value })))
    .forEach(({ name, value, description }) => {
      // add the spacing to the theme
      result[sanitizeKey(name)] = `var(--sd-spacing-${sanitizeKey(name)}, ${resolveValue(value)})${
        description ? ` /* ${description} */` : ''
      }`;
    });
  return result;
};

// Get all Object.entries(tokens['UI Semantic'].background and set them as background colors
const getColors = (name, cssVariableScope) => {
  let result = {};
  Object.entries(tokens['UI Semantic'][name])
    .map(([name, value]) => ({ name, ...value }))
    .forEach(({ name, value, description }) => {
      if (name === 'transparent') return;
      const color = hexToRgb(resolveValue(value)).join(' ');
      // add the background color to the theme
      result[sanitizeValue(name)] = `rgb(var(--sd-color-${sanitizeKey(
        sanitizeValue(name)
      )}, ${color}) / <alpha-value>)${description ? ` /* ${description} */` : ''}`;
    });

  result = reformatColors(result);
  return result;
};

const getCoreTokensByType = (tokenType, cssVariableScope) => {
  let result = {};
  const obj = tokens['UI Core'];
  const keys = Object.keys(obj);

  keys.filter(key => {
    const { type } = obj[key];

    if (type === tokenType) {
      const keyWithoutUtility = key.split('-').slice(1).join('-');
      const description = obj[key]['description'];
      result[keyWithoutUtility] = `var(--sd-${cssVariableScope}-${sanitizeKey(keyWithoutUtility)}, ${
        obj[key]['value']
      })${description ? ` /* ${description} */` : ''}`;
    }
  });

  return result;
};

/** @type {import('tailwindcss').Config} */
const config = {
  content: [], // make sure to override this later
  theme: {
    // Checkout https://tailwindcss.com/docs/configuration#core-plugins for a list of core plugins
    accentColor: { ...getColors('text', 'accent-color') },
    backgroundColor: { ...getColors('background', 'background-color') },
    borderColor: { ...getColors('border', 'border-color') },
    borderRadius: { ...getBorderRadius() },
    caretColor: { ...getColors('text', 'caret-color') },
    fill: { ...getColors('icon-fill', 'fill-color') },
    fontFamily: {},
    fontSize: { ...getCoreTokensByType('fontSizes', 'font-size') },
    fontStyle: {},
    fontWeight: { normal: '400', bold: '700' }, // Tokens currently provide "Bk" and "Bold" which doesn't help anything
    lineHeight: { ...getCoreTokensByType('lineHeights', 'leading') },
    opacity: { ...getOpacities() },
    outlineColor: { ...getColors('border', 'outline-color') },
    placeholderColor: { ...getColors('text', 'placeholder-color') },
    ringColor: { ...getColors('border', 'ring-color') },
    space: { ...getSpacings() },
    spacing: { ...getSpacings() },
    stroke: { ...getColors('border', 'stroke-color') },
    tracking: {},
    textColor: { ...getColors('text', 'text-color') },
    textDecorationColor: { ...getColors('text', 'text-decoration-color') }
  }
};

const theme = config['theme'];
module.exports = theme;
