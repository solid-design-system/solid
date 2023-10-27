import React, { useState, useEffect } from 'react';
import { useAddonState, useChannel } from "@storybook/manager-api";
import { AddonPanel, Form } from "@storybook/components";
import chroma from 'chroma-js';
import { PARAM_KEY } from "./constants";
import { useGlobals } from "@storybook/manager-api";
import theme from '../../../tokens/src/create-theme.cjs';

const { Input, Textarea, Button } = Form;

const defaultLuminanceMap = {
  50: 0.95,
  100: 0.84,
  200: 0.73,
  300: 0.62,
  400: 0.35,
  500: 0.28,
  550: 0.22,
  600: 0.18,
  700: 0.10,
  800: 0.04,
  DEFAULT: 0.3
};

const extractRGB = (str) => {
  const match = str.match(/,\s*([\d\s]+)\s*\)/);
  return match ? match[1] : null;
};

const calculateLuminanceMap = (colorObject) => {
  let relevantColors = { accent: { ...colorObject['accent'] }, primary: { ...colorObject['primary'] }, neutral: { ...colorObject['neutral'] } };

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

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {

  const [useDefaultLuminanceMap, setUseDefaultLuminanceMap] = useState(false);

  const [colors, setColors] = useState({
    primary: "#4bbce2",
    accent: "#e24a89",
    neutral: "#b0b0b0",
  });

  const luminanceMaps = calculateLuminanceMap(theme['color']);

  const [output, setOutput] = useState("");
  const [globals, updateGlobals] = useGlobals();
  const isActive = globals[PARAM_KEY] || false;
  const content = globals[PARAM_KEY + '_CONTENT'] || '';

  const gaussian = (x, stdDev = 1) => {
    return Math.exp(-Math.pow(x, 2) / (2 * Math.pow(stdDev, 2)));
  };

  const findClosestLuminanceKey = (luminanceValue, luminanceMap) => {
    const allKeys = Object.keys(luminanceMap)
      .filter(key => key !== 'DEFAULT');  // Exclude the "DEFAULT" key

    return allKeys.reduce((closest, key) => {
      if (Math.abs(luminanceMap[closest] - luminanceValue) < Math.abs(luminanceMap[key] - luminanceValue)) {
        return closest;
      }
      return key;
    }, allKeys[0]);  // Setting the initial value as the first key (excluding "DEFAULT")
  };

  const adjustLuminanceMap = (color, luminanceMap) => {
    const colorLuminance = chroma(color).luminance();
    const closestLuminanceKey = findClosestLuminanceKey(colorLuminance, luminanceMap);
    const closestLuminance = luminanceMap[closestLuminanceKey];

    const difference = colorLuminance - closestLuminance;
    let newLuminanceMap = {};

    for (let key in luminanceMap) {
      let luminanceDistance = (closestLuminance - luminanceMap[key]);
      let impactFactor = gaussian(luminanceDistance, 0.5);
      let adjustment = difference * impactFactor;

      newLuminanceMap[key] = Math.min(1, Math.max(0, luminanceMap[key] + adjustment)); // Clamp between 0 and 1
    }
    return newLuminanceMap;
  };

  const calculateColorsForType = (type) => {
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
      tokens += `--sd-color-${type}${scaleValue !== 'DEFAULT' ? `-${scaleValue}` : ''}: ${rgb.join(' ')};\n`;
    });

    return tokens;
  };

  const calculateColors = () => {
    let allTokens = ':root{\n  /* Copy & paste into your theme */\n';

    Object.keys(colors).forEach(type => {
      allTokens += calculateColorsForType(type);
    });

    allTokens += '}';
    setOutput(allTokens);
  };

  useEffect(() => {
    updateGlobals({
      [PARAM_KEY + '_CONTENT']: output
    });
  }, [output]);

  return (
    <AddonPanel {...props}>
      <div style={{ padding: "20px" }}>
        <h2>Color Tokens Generator</h2>
        {['primary', 'accent', 'neutral'].map((colorKey) => (
          <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
            <label style={{ width: "60px", display: 'inline-block' }}>{colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}</label>
            <input
              type="color"
              value={colors[colorKey]}
              onChange={(e) => {
                const newColor = e.target.value;
                setColors(prev => ({ ...prev, [colorKey]: newColor }));
              }}
            />
          </div>
        ))}

        <div style={{ marginTop: "12px" }}>
          <input
            id="useDefaultLuminanceMap"
            type="checkbox"
            checked={useDefaultLuminanceMap}
            onChange={(e) => setUseDefaultLuminanceMap(e.target.checked)}
          />
          <label htmlFor="useDefaultLuminanceMap">Do not use Luminence of Union Investment</label>
        </div>

        <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
          <Button onClick={calculateColors}
            secondary={true}
          >Calculate Colors</Button>

          <Button onClick={() => {
            updateGlobals({ [PARAM_KEY]: !isActive });
          }}
            primary={isActive}
          >
            {isActive ? "Disable Theme" : "Enable Theme"}
          </Button>

        </div>

        <Textarea style={{ marginTop: "16px" }} rows="12" readOnly value={output || content} />
      </div>
    </AddonPanel>
  );
};
