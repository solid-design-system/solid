import chroma from 'chroma-js';

const defaultLuminanceMap = {
  50: 0.95,
  100: 0.84,
  200: 0.73,
  300: 0.62,
  400: 0.35,
  500: 0.22,
  550: 0.18,
  600: 0.1,
  700: 0.08,
  800: 0.04,
  DEFAULT: 0.22
};

const extractRGB = str => {
  const parts = str.split(',').filter(part => /\d/.test(part));
  const match = parts[1]?.match(/(\d[\d\s]*)\s*\)/);
  return match ? match[1] : null;
};

const calculateLuminanceMap = colorObject => {
  const relevantColors = {
    accent: { ...colorObject['accent'] },
    primary: { ...colorObject['primary'] },
    neutral: { ...colorObject['neutral'] }
  };

  const luminanceMaps = {};

  for (const colorType in relevantColors) {
    const luminanceMap = {};

    for (const scale in colorObject[colorType]) {
      const rgbStr = extractRGB(colorObject[colorType][scale]);

      // If we successfully extracted the RGB string
      if (rgbStr) {
        const rgbArray = rgbStr.split(' ').map(num => parseInt(num, 10));
        const luminance = chroma(...rgbArray).luminance();
        luminanceMap[scale] = luminance;
      }
    }

    luminanceMaps[colorType] = luminanceMap;
  }

  return luminanceMaps;
};

const findClosestShade = (luminanceValue, luminanceMap) => {
  const allKeys = Object.keys(luminanceMap).filter(key => key !== 'DEFAULT'); // Exclude the "DEFAULT" key

  return allKeys.reduce((closest, key) => {
    if (Math.abs(luminanceMap[closest] - luminanceValue) < Math.abs(luminanceMap[key] - luminanceValue)) {
      return closest;
    }
    return key;
  }, allKeys[0]); // Setting the initial value as the first key (excluding "DEFAULT")
};

// Adjusts the luminance map to make that the original color is always in use at some point.
// Colors close to the original color will be changed more than colors further away.
// E. g. if primary-500 fits best, primary-400 and primary-600 will be adjusted more than primary-300 and primary-700
// Aim is that the whole color palette is most consistent in itself using the original color
const adjustLuminanceMap = (color, luminanceMap, forcedShade) => {
  // Calculate the luminance of the given color
  const colorLuminance = chroma(color).luminance();

  // Find the closest luminance key in the map
  const referenceShade = parseInt(forcedShade || findClosestShade(colorLuminance, luminanceMap));

  // console.log({ color, referenceShade, forcedShade, colorLuminance, luminanceMap });

  // Calculate the difference from the closest key's luminance
  const difference = colorLuminance - luminanceMap[referenceShade];

  // Calculate the gradients for the linear adjustment
  const gradient = difference / (1000 - referenceShade);

  const adjustedLuminanceMap = { ...luminanceMap }; // Clone the original map to avoid mutating it directly

  // Apply the linear function to adjust the luminance values
  Object.keys(adjustedLuminanceMap).forEach(key => {
    const currentShade = parseInt(key);
    let adjustment;

    if (currentShade <= referenceShade) {
      adjustment = gradient * currentShade;
    } else {
      adjustment = gradient * (currentShade - referenceShade);
    }

    let adjustedLuminance = luminanceMap[key] + adjustment;
    // Ensure the adjusted luminance doesn't fall below a minimum threshold to maintain the gradient
    adjustedLuminance = Math.max(adjustedLuminance, 0.01); // Set minimum luminance threshold

    // Average the adjusted value with the original value to maintain a gradient
    adjustedLuminanceMap[key] = (adjustedLuminance + luminanceMap[key]) / 2;
  });

  // Ensure DEFAULT has the luminance of the 500 key
  adjustedLuminanceMap['DEFAULT'] = adjustedLuminanceMap['500'];

  return adjustedLuminanceMap;
};

export const calculateColorsForType = (type, theme, colors, useNormalizedLuminanceMap, useForcedShades) => {
  const color = colors[type];
  const luminanceMaps = calculateLuminanceMap(theme['color']);

  if (!color || !chroma.valid(color)) return '';

  const hex = chroma(color).hex();
  const scalesForType = Object.keys(luminanceMaps[type]);

  const selectedLuminanceMap = useNormalizedLuminanceMap ? defaultLuminanceMap : luminanceMaps[type];

  const adjustedLuminanceMap = adjustLuminanceMap(
    color,
    selectedLuminanceMap,
    useForcedShades ? { primary: 600, accent: 400 }[type] || null : null
  );

  const luminancesForType = scalesForType.map(scaleValue => {
    return adjustedLuminanceMap[scaleValue];
  });

  const scale = chroma
    .scale(luminancesForType.map(luminance => chroma(hex).luminance(luminance)))
    .colors(scalesForType.length);

  let tokens = '';
  scale.forEach((currentColor, index) => {
    const scaleValue = scalesForType[index];
    if (scaleValue === 'DEFAULT') {
      const rgb = chroma(scale[{ primary: 5, accent: 3 }[type]]).rgb(); //  as default we use 600 (primary) or 400 (accent)
      tokens += `  --sd-color-${type}: ${rgb.join(' ')};\n`;
    } else {
      const rgb = chroma(currentColor).rgb();
      tokens += `  --sd-color-${type}${`-${scaleValue}`}: ${rgb.join(' ')};\n`;
    }
  });

  return tokens;
};

/**
 * Generates CSS custom properties (variables) for color themes based on the provided colors and theme configuration.
 * This function calculates the luminance values for each color type (primary, accent, etc.) and creates a color scale.
 * The color scales are then transformed into CSS custom properties.
 *
 * @param {Object} colors - An object containing color definitions (e.g., primary, accent) with their respective hex values.
 * @param {Object} theme - Theme object containing color configurations. The @solid-design-system/tokens theme can be used as reference.
 * @param {boolean} useNormalizedLuminanceMap - A boolean flag to determine whether to use a normalized luminance map or the calculated one.
 * @param {boolean} useForcedShades - A boolean flag to decide if forced shades should be applied.
 * @returns {string} A string containing CSS custom properties for the defined color types and their shades.
 *
 * @example
 * // Example usage:
 * const colors = { primary: '#ff5733', accent: '#33c3f0', ... };
 * const theme = { accentColor: {...}, backgroundColor: {...}, ...};
 * const cssProperties = calculateColorsAsCss(colors, theme, true, false);
 * console.log(cssProperties); // Outputs CSS custom properties as a string
 */
export const calculateColorsAsCss = (colors, theme, useNormalizedLuminanceMap, useForcedShades) => {
  let allTokens = ':root{\n  /* Copy & paste into your theme */\n';

  Object.keys(colors).forEach(type => {
    if (type === 'black' || type === 'white') {
      // Add the color directly without generating shades
      allTokens += `  --sd-color-${type}: ${chroma(colors[type]).rgb().join(' ')};\n`;
    } else {
      allTokens += calculateColorsForType(type, theme, colors, useNormalizedLuminanceMap, useForcedShades);
    }
  });

  allTokens += '}';
  return allTokens;
};
