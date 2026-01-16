import React, { useState, useEffect, useCallback } from 'react';
import { AddonPanel, Form } from 'storybook/internal/components';
import { PARAM_KEY, PANEL_DEFAULTS } from './constants';
import { addons, useGlobals } from 'storybook/manager-api';
import { calculateColorsAsCss, hexToRgba, rgbaToHex } from '@solid-design-system/theming';
import theme from '../../../../tokens/dist/theme.js';
import { FORCE_RE_RENDER } from 'storybook/internal/core-events';

const { Textarea, Button } = Form;

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props: PanelProps) => {
  const [useNormalizedLuminanceMap, setUseNormalizedLuminanceMap] = useState(PANEL_DEFAULTS.useNormalizedLuminanceMap);
  const [useForcedShades, setUseForcedShades] = useState(PANEL_DEFAULTS.useForcedShades);

  const [colors, setColors] = useState(PANEL_DEFAULTS.colors);
  const [output, setOutput] = useState('');
  const [globals, updateGlobals] = useGlobals();
  const isActive = globals[PARAM_KEY] || false;

  const refreshAndUpdateGlobal = () => {
    (updateGlobals({
      [PARAM_KEY + '_STATE']: {
        colors,
        output,
        useNormalizedLuminanceMap,
        useForcedShades
      }
    }),
      // Invokes Storybook's addon API method (with the FORCE_RE_RENDER) event to trigger a UI refresh
      addons.getChannel().emit(FORCE_RE_RENDER));
  };

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
    () =>
      updateGlobals({
        [PARAM_KEY + '_STATE']: {
          colors,
          output,
          useNormalizedLuminanceMap,
          useForcedShades
        }
      }),
    500,
    [colors, useNormalizedLuminanceMap, useForcedShades]
  );

  useEffect(() => refreshAndUpdateGlobal(), [isActive]);

  return (
    <AddonPanel {...props}>
      <div style={{ padding: '20px' }}>
        <h2>Solid Theme Generator</h2>
        {['primary', 'accent', 'neutral', 'black', 'white'].map(colorKey => (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
            <label style={{ width: '60px', display: 'inline-block' }}>
              {colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
            </label>

            {/* Color Picker */}
            <input
              type="color"
              value={rgbaToHex(colors[colorKey])}
              onChange={e => {
                setColors(prev => ({ ...prev, [colorKey]: hexToRgba(e.target.value) }));
              }}
            />

            {/* Text Input for Hex Color */}
            <input
              type="text"
              value={colors[colorKey]}
              placeholder="r,g,b,t"
              onChange={e => {
                setColors(prev => ({ ...prev, [colorKey]: hexToRgba(e.target.value) }));
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
            variant={isActive ? 'solid' : 'outline'}
          >
            {isActive ? '🟢 Disable Theme' : '⚪️ Enable Theme'}
          </Button>
        </div>

        <Textarea
          style={{ marginTop: '16px', fontFamily: 'monospace', width: '400px', height: 600 }}
          readOnly
          value={output || ''}
        />
      </div>
    </AddonPanel>
  );
};
