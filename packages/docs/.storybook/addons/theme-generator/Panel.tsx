import React, { useState, useEffect, useCallback } from 'react';
import { AddonPanel, Form } from '@storybook/components';
import { PARAM_KEY, PANEL_DEFAULTS } from './constants';
import { useGlobals } from '@storybook/manager-api';
import theme from '../../../../tokens/src/create-theme.cjs';
import { calculateColorsAsCss } from '@solid-design-system/theming';

const { Textarea, Button } = Form;

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = props => {
  const [useNormalizedLuminanceMap, setUseNormalizedLuminanceMap] = useState(PANEL_DEFAULTS.useNormalizedLuminanceMap);
  const [useForcedShades, setUseForcedShades] = useState(PANEL_DEFAULTS.useForcedShades);

  const [colors, setColors] = useState(PANEL_DEFAULTS.colors);

  const [output, setOutput] = useState('');
  const [globals, updateGlobals] = useGlobals();
  const isActive = globals[PARAM_KEY] || false;

  const [hexInputs, setHexInputs] = useState({
    primary: PANEL_DEFAULTS.colors.primary,
    accent: PANEL_DEFAULTS.colors.accent,
    neutral: PANEL_DEFAULTS.colors.neutral
  });

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
    setOutput(calculateColorsAsCss(colors, theme, useNormalizedLuminanceMap, useForcedShades));
  }, [colors, useNormalizedLuminanceMap, useForcedShades]);

  useDebouncedEffect(
    () => {
      const panelState = {
        colors,
        useNormalizedLuminanceMap,
        useForcedShades
      };
      updateGlobals({
        [PARAM_KEY + '_STATE']: JSON.stringify(panelState)
      });
    },
    500,
    [colors, useNormalizedLuminanceMap, useForcedShades]
  );

  return (
    <AddonPanel {...props}>
      <div style={{ padding: '20px' }}>
        <h2>Solid Theme Generator</h2>
        {['primary', 'accent', 'neutral'].map(colorKey => (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
            <label style={{ width: '60px', display: 'inline-block' }}>
              {colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
            </label>

            {/* Color Picker */}
            <input
              type="color"
              value={colors[colorKey]}
              onChange={e => {
                const newColor = e.target.value;
                setColors(prev => ({ ...prev, [colorKey]: newColor }));
                setHexInputs(prev => ({ ...prev, [colorKey]: newColor }));
              }}
            />

            {/* Text Input for Hex Color */}
            <input
              type="text"
              value={hexInputs[colorKey]}
              pattern="^#(?:[0-9a-fA-F]{3}){1,2}$"
              placeholder="#RRGGBB"
              onChange={e => {
                const newHexValue = e.target.value;
                setHexInputs(prev => ({ ...prev, [colorKey]: newHexValue }));

                // Check if it's a valid hex color and update the main color state
                if (/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(newHexValue)) {
                  setColors(prev => ({ ...prev, [colorKey]: newHexValue }));
                }
              }}
              style={{ marginLeft: '8px' }}
            />
          </div>
        ))}

        <div style={{ marginTop: '12px' }}>
          <div>
            <input
              id="useNormalizedLuminanceMap"
              type="checkbox"
              checked={useNormalizedLuminanceMap}
              onChange={e => setUseNormalizedLuminanceMap(e.target.checked)}
            />
            <label htmlFor="useNormalizedLuminanceMap">
              ⚠️ Enable Color Normalization (Toggles the adjustment of color shades for visual consistency. Caution:
              Verify against accessibility standards for color contrast after applying.)
            </label>
          </div>
          <div>
            <input
              id="useForcedShades"
              type="checkbox"
              checked={useForcedShades}
              onChange={e => setUseForcedShades(e.target.checked)}
            />
            <label htmlFor="useForcedShades">
              ⚠️ Enforce Reference Color (Sets the provided color as the baseline for default shades (primary-600,
              accent-400). Note: This can significantly impact contrast ratios. Always check for accessibility
              compliance after changes.)
            </label>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          <Button
            onClick={() => {
              updateGlobals({ [PARAM_KEY]: !isActive });
            }}
            primary={isActive}
          >
            {isActive ? '🟢 Disable Theme' : '⚪️ Enable Theme'}
          </Button>
        </div>

        <Textarea
          style={{ marginTop: '16px', fontFamily: 'monospace', width: '400px', height: '600px' }}
          readOnly
          value={output || ''}
        />
      </div>
    </AddonPanel>
  );
};
