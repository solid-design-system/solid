import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';
import { Form } from "@storybook/components";
import { PARAM_KEY } from "../constants";
import { useGlobals } from "@storybook/manager-api";

const { Input, Textarea, Button } = Form;

export const TabContent: React.FC = () => {
  const [colors, setColors] = useState({
    primary: "#4a90e2",
    accent: "#e24a89",
    neutral: "#b0b0b0",
  });

  const [output, setOutput] = useState("");
  const [globals, updateGlobals] = useGlobals();
  const isActive = globals[PARAM_KEY] || false;
  const content = globals[PARAM_KEY + '_CONTENT'] || '';

  const colorScales = {
    primary: [100, 200, 300, 400, 500, 600, 700, 800, "default"],
    accent: [100, 200, 300, 400, 500, 550, 600, 700, 800, "default"],
    neutral: [100, 200, 300, 400, 500, 600, 700, 800],
  };

  const luminanceMap = {
    50: 0.95,
    100: 0.84,
    200: 0.73,
    300: 0.62,
    400: 0.49,
    500: 0.35,
    550: 0.29,
    600: 0.23,
    700: 0.15,
    800: 0.10,
    900: 0.05,
    950: 0.02
  };

  const calculateColorsForType = (type) => {
    const color = colors[type];

    if (!color || !chroma.valid(color)) return ''; // Return empty string for invalid colors
    const hex = chroma(color).hex();

    const scalesForType = colorScales[type];

    // Mapping the scale values to their luminance values.
    const luminancesForType = scalesForType.map(scaleValue => {
      if (scaleValue === "default") return luminanceMap[500]; // Assigning a default luminance value.
      return luminanceMap[scaleValue];
    });

    const scale = chroma.scale(luminancesForType.map(luminance => chroma(hex).luminance(luminance))).colors(scalesForType.length);

    let tokens = '';
    scale.forEach((currentColor, index) => {
      const scaleValue = scalesForType[index];
      const rgb = chroma(currentColor).rgb();
      tokens += `--sd-color-${type}${scaleValue !== 'default' ? `-${scaleValue}` : ''}: ${rgb.join(' ')};\n`;
    });

    return tokens;
  };

  const calculateColors = () => {
    let allTokens = ':root{/* Copy & paste into your theme */\n\n';

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
    <main>
      <h1>Color Token Generator</h1>

      {['primary', 'accent', 'neutral'].map((colorKey) => (
        <div key={colorKey}>
          <label>{colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}</label>
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

      <Button onClick={calculateColors}>Calculate Colors</Button>

      <Textarea readOnly value={output || content} />

      <Button onClick={() => {
        updateGlobals({ [PARAM_KEY]: !isActive });
      }}>
        {isActive ? "Disable Theme" : "Enable Theme"}
      </Button>
    </main>
  );
};
