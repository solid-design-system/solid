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
  const match = str.match(/,\s*([\d\s]+)\s*\)/);
  return match ? match[1] : null;
};

const calculateLuminanceMap = colorObject => {
  let relevantColors = {
    accent: { ...colorObject['accent'] },
    primary: { ...colorObject['primary'] },
    neutral: { ...colorObject['neutral'] }
  };

  let luminanceMaps = {};

  for (let colorType in relevantColors) {
    let luminanceMap = {};

    for (let scale in colorObject[colorType]) {
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

const findClosestLuminanceKey = (luminanceValue, luminanceMap) => {
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
const adjustLuminanceMap = (color, luminanceMap) => {
  // Calculate the luminance of the given color
  const colorLuminance = chroma(color).luminance();

  // Find the closest luminance key in the map
  const closestLuminanceKey = parseInt(findClosestLuminanceKey(colorLuminance, luminanceMap));

  // Calculate the difference from the closest key's luminance
  const difference = colorLuminance - luminanceMap[closestLuminanceKey];

  // Calculate the gradients for the linear adjustment
  const gradient = difference / (1000 - closestLuminanceKey);

  let adjustedLuminanceMap = { ...luminanceMap }; // Clone the original map to avoid mutating it directly

  // Apply the linear function to adjust the luminance values
  Object.keys(adjustedLuminanceMap).forEach(key => {
    const currentKey = parseInt(key);
    let adjustment;

    if (currentKey <= closestLuminanceKey) {
      adjustment = gradient * currentKey;
    } else {
      adjustment = gradient * (currentKey - closestLuminanceKey);
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

export const calculateColorsForType = (type, theme, colors, useDefaultLuminanceMap) => {
  const color = colors[type];
  const luminanceMaps = calculateLuminanceMap(theme['color']);

  if (!color || !chroma.valid(color)) return '';

  const hex = chroma(color).hex();
  const scalesForType = Object.keys(luminanceMaps[type]);

  const selectedLuminanceMap = useDefaultLuminanceMap ? defaultLuminanceMap : luminanceMaps[type];

  const adjustedLuminanceMap = adjustLuminanceMap(color, selectedLuminanceMap);

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

export const calculateColorsAsCss = (colors, theme, useDefaultLuminanceMap) => {
  let allTokens = ':root{\n  /* Copy & paste into your theme */\n';

  Object.keys(colors).forEach(type => {
    allTokens += calculateColorsForType(type, theme, colors, useDefaultLuminanceMap);
  });

  allTokens += '}';
  return allTokens;
};
