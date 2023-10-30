import chroma from 'chroma-js';
import theme from '../../../tokens/src/create-theme.cjs';

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

const luminanceMaps = calculateLuminanceMap(theme['color']);

const gaussian = (x, stdDev = 1) => {
  return Math.exp(-Math.pow(x, 2) / (2 * Math.pow(stdDev, 2)));
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

const adjustLuminanceMap = (color, luminanceMap) => {
  const colorLuminance = chroma(color).luminance();
  const closestLuminanceKey = findClosestLuminanceKey(colorLuminance, luminanceMap);
  const closestLuminance = luminanceMap[closestLuminanceKey];

  const difference = colorLuminance - closestLuminance;
  let newLuminanceMap = {};

  for (let key in luminanceMap) {
    let luminanceDistance = closestLuminance - luminanceMap[key];
    let impactFactor = gaussian(luminanceDistance, 0.5);
    let adjustment = difference * impactFactor;

    newLuminanceMap[key] = Math.min(1, Math.max(0, luminanceMap[key] + adjustment)); // Clamp between 0 and 1
  }
  return newLuminanceMap;
};

export const calculateColorsForType = (type, colors, useDefaultLuminanceMap) => {
  const color = colors[type];

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
    const rgb = chroma(currentColor).rgb();
    tokens += `  --sd-color-${type}${scaleValue !== 'DEFAULT' ? `-${scaleValue}` : ''}: ${rgb.join(' ')};\n`;
  });

  return tokens;
};

export const calculateColorsAsCss = (colors, useDefaultLuminanceMap) => {
  let allTokens = ':root{\n  /* Copy & paste into your theme */\n';

  Object.keys(colors).forEach(type => {
    allTokens += calculateColorsForType(type, colors, useDefaultLuminanceMap);
  });

  allTokens += '}';
  return allTokens;
};
