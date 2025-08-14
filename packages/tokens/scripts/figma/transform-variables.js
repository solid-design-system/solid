import {
  createDirectory,
  figmaVariables,
  formatColor,
  getTypeForFloatVariable,
  legacyTokens,
  resolveAlias,
  setNestedProperty
} from './helpers.js';
import { OUTPUT_DIR } from '../config.js';
import { sort } from '@tamtamchik/json-deep-sort';
import { writeFileSync } from 'fs';
import path from 'path';

/**
 * Get the correct value and type of a float variable for Style Dictionary.
 * @param { string } name The name of the variable
 * @param { number } value The value of the variable
 * @returns {{ value: string, type: string }} The resolved value and type of the variable.
 */

const getFloatValueFromName = (name, value) => {
  const stringValue = `${value}`;
  const valueWithUnit = (/** @type string */ unit) => `${stringValue.replace('NaN', '0')}${unit}`;

  const type = getTypeForFloatVariable(name);

  let newValue;

  if (name.includes('opacity') || name.includes('line-height')) {
    newValue = valueWithUnit('%');
  } else if (name.includes('weight') || name.includes('z-index')) {
    newValue = stringValue;
  } else if (name.includes('letter-spacing')) {
    // Fix value to be only two decimals after the point, e.g. -0.48 instead of -0.47999998927116394
    // This is needed as Figma returns letter spacing values with many unnecessary decimals
    const roundedValue = parseFloat(value.toFixed(2));
    newValue = `${roundedValue}px`;
  } else {
    newValue = valueWithUnit('px');
  }

  return {
    type,
    value: newValue
  };
};

/**
 * Get the value and type of a variable in a specific mode.
 * @param {Variable} variable
 * @param {string} themeId
 * @returns {{ value: string, type: string } | undefined} The resolved value and type of the variable, if it could not be resolved, returns undefined.
 */
export const resolveValue = (variable, modeId) => {
  const { name, valuesByMode, resolvedType, scopes = [] } = variable;
  const cleanName = name.toLowerCase();

  // Access valuesByMode with proper type handling
  const modeValuesMap = /** @type {Record<string, any>} */ (valuesByMode);
  const modeValue = modeValuesMap?.[modeId];
  let finalValue;
  let type;

  if (typeof modeValue === 'object' && 'type' in modeValue && modeValue.type === 'VARIABLE_ALIAS') {
    const aliasObject = /** @type {{ id: string; type: string }} */ (modeValue);
    const resolved = resolveAlias(aliasObject.id);
    if (!resolved) {
      console.log(`Not able to resolve css variable ${name} in mode ${modeId}`);
      return undefined;
    }

    return {
      type: resolved.type,
      value: resolved.value
    };
  }

  if (resolvedType === 'FLOAT') {
    /** @type { number } FLOAT types have a number as value */
    const numberValue = modeValue;
    const floatValue = getFloatValueFromName(cleanName, numberValue);
    finalValue = floatValue.value;
    type = floatValue.type;
  } else if (resolvedType === 'COLOR') {
    /** @type { Color } COLOR types have an object with rgba as value */
    const colorValue = modeValue;
    finalValue = formatColor(colorValue);
    type = 'color';
  } else if (scopes.includes('FONT_FAMILY')) {
    // Add type to fonts
    finalValue = modeValue;
    type = 'fontFamilies';
  } else if (scopes.includes('TEXT_CONTENT')) {
    finalValue = modeValue;
    type = 'content';
  } else {
    // For all other variables, just return the value as is
    finalValue = modeValue;
    type = resolvedType.toLowerCase();
  }

  if (typeof finalValue === 'object') {
    throw new Error(`Expected a string for variable ${name}, but got an object: ${JSON.stringify(modeValue)}`);
  }

  return {
    type,
    value: typeof finalValue === 'string' ? finalValue : String(finalValue)
  };
};

const getVariableAvailableThemes = variable => {
  const collection = Object.values(figmaVariables.variableCollections).find(
    c => c.id === variable.variableCollectionId
  );
  return collection.modes.map(mode => ({ id: mode.modeId, name: mode.name }));
};

const getLegacyTokens = () => {
  const core = legacyTokens['UI Core'];
  const tokens = Object.fromEntries(
    Object.entries(legacyTokens['UI Semantic']).filter(
      ([key]) => !['background', 'icon-fill', 'border', '*background-transparent', 'text'].includes(key)
    )
  );

  /** Manually add spacing tokens */
  tokens.spacing = {
    ...tokens.spacing,
    0: { value: '0px', type: 'spacing', description: 'No spacing (manually added)' },
    auto: {
      value: 'auto',
      type: 'spacing',
      description: 'Automatic spacing (manually added)'
    }
  };

  /** Manually add z-index tokens */
  tokens['z-'] = {
    10: { value: '10', type: 'utility' },
    20: { value: '20', type: 'utility' },
    30: { value: '30', type: 'utility' },
    40: { value: '40', type: 'utility' },
    50: { value: '50', type: 'utility' },
    auto: { value: 'auto', type: 'utility' },
    header: { value: 'var(--sd-z-index-header, 600)', type: 'utility' },
    drawer: { value: 'var(--sd-z-index-drawer, 700)', type: 'utility' },
    dialog: { value: 'var(--sd-z-index-dialog, 800)', type: 'utility' },
    dropdown: { value: 'var(--sd-z-index-dropdown, 900)', type: 'utility' },
    'alert-group': { value: 'var(--sd-z-index-alert-group, 950)', type: 'utility' },
    tooltip: { value: 'var(--sd-z-index-tooltip, 1000)', type: 'utility' }
  };

  tokens.risk = {
    low: {
      value: 'rgb(var(--sd-color-risk-low, 1 125 195))',
      type: 'color',
      description: 'Exclusively for marking fonds'
    },
    moderate: {
      value: 'rgb(var(--sd-color-risk-moderate, 0 165 147))',
      type: 'color',
      description: 'Exclusively for marking fonds'
    },
    increased: {
      value: 'rgb(var(--sd-color-risk-increased, 255 240 0))',
      type: 'color',
      description: 'Exclusively for marking fonds'
    },
    high: {
      value: 'rgb(var(--sd-color-risk-high, 250 155 30))',
      type: 'color',
      description: 'Exclusively for marking fonds'
    },
    veryhigh: {
      value: 'rgb(var(--sd-color-risk-veryhigh, 255 0 0))',
      type: 'color',
      description: 'Exclusively for marking fonds'
    }
  };

  return { core, tokens };
};

function prefixReferences(obj) {
  if (typeof obj === 'string') {
    return obj.replace(/\{(?!core\.)/g, '{core.');
  }

  if (Array.isArray(obj)) {
    return obj.map(prefixReferences);
  }

  if (obj && typeof obj === 'object') {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, prefixReferences(value)]));
  }

  return obj;
}

// --- Main Transformation ---
const transformFigmaVariables = () => {
  /** @type {Record<string, any>} */
  const transformed = {};

  Object.values(figmaVariables.variables).forEach(variable => {
    const { name, variableCollectionId } = variable;

    const collection = Object.values(figmaVariables.variableCollections).find(c => c.id === variableCollectionId);

    if (!collection) {
      console.warn(`Variable collection with id ${variableCollectionId} not found for variable ${name}`);
      return;
    }

    const themes = getVariableAvailableThemes(variable);
    themes.forEach(theme => {
      if (!transformed[theme.name]) transformed[theme.name] = {};

      const variableValue = resolveValue(variable, theme.id);

      if (!variableValue) {
        return;
      }

      const { value, type } = variableValue;

      const keys = name.toLowerCase().split('/');
      const description = variable.description || undefined;

      setNestedProperty(transformed[theme.name], keys, { description, type, value });
    });
  });

  const core = transformed['Core'];
  const { core: coreLegacy, tokens: legacy } = getLegacyTokens();

  Object.entries(transformed).forEach(([modeName, modeData]) => {
    if (modeName === 'Core') return;

    const coreTokens = prefixReferences({ ...coreLegacy, ...core });
    const tokens = prefixReferences({ ...legacy, ...sort(modeData) });

    const sanitizedModeName = modeName.toLowerCase().replace(/\s+/g, '-');
    const outputPath = path.join(OUTPUT_DIR, `${sanitizedModeName}.json`);
    createDirectory(OUTPUT_DIR);
    writeFileSync(outputPath, JSON.stringify({ core: coreTokens, ...tokens }, null, 2));
  });
};

transformFigmaVariables();
