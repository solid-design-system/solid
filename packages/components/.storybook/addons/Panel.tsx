import React, { useState, useEffect, useCallback } from 'react';
import { AddonPanel, Form } from "@storybook/components";
import { PARAM_KEY } from "./constants";
import { useGlobals } from "@storybook/manager-api";
import { calculateColorsAsCss } from './colorCalculations';  // Import from your utility file

const { Textarea, Button } = Form;

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


  const [output, setOutput] = useState("");
  const [globals, updateGlobals] = useGlobals();
  const isActive = globals[PARAM_KEY] || false;
  const content = globals[PARAM_KEY + '_CONTENT'] || '';

  const useDebouncedEffect = (effect, delay, deps) => {
    const callback = useCallback(effect, deps);

    useEffect(() => {
      const handler = setTimeout(() => {
        callback();
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [callback, delay]);
  };

  useEffect(() => {
    setOutput(calculateColorsAsCss(colors, useDefaultLuminanceMap));
  }, [colors, useDefaultLuminanceMap]);

  useDebouncedEffect(() => {
    updateGlobals({
      [PARAM_KEY + '_CONTENT']: output
    });
  }, 500, [output]);

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
          <label htmlFor="useDefaultLuminanceMap">Normalize colors (This might reduce accessibility – please check compliance yourself.)</label>
        </div>

        <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
          <Button onClick={() => {
            updateGlobals({ [PARAM_KEY]: !isActive });
            console.log({ output, content });
          }}
            primary={isActive}
          >
            {isActive ? "🟢 Disable Theme" : "🔴 Enable Theme"}
          </Button>
        </div>

        <Textarea style={{ marginTop: "16px", fontFamily: "monospace", width: "400px", height: "600px" }} readOnly value={output || content} />
      </div>
    </AddonPanel>
  );
};
