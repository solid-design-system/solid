/**
 * Tailwind v3 JSON configuration generator
 *
 * Transforms theme.js data into a Tailwind v3 compatible JSON configuration
 * matching the legacy structure with all color categories.
 */

/**
 * Semantic color prefixes → which CSS variable prefix they use in the theme
 */
const SEMANTIC_PREFIXES = {
  text: 'sd-color-text',
  background: 'sd-color-background',
  border: 'sd-color-border',
  fill: 'sd-color-icon-fill'
};

/**
 * Maps semantic palette types to Tailwind config keys that share them
 */
const COLOR_CATEGORY_MAP = {
  text: ['textColor', 'accentColor', 'caretColor', 'placeholderColor', 'textDecorationColor'],
  background: ['backgroundColor', 'boxShadowColor', 'gradientColorStops', 'ringOffsetColor'],
  border: ['borderColor', 'outlineColor', 'ringColor', 'stroke'],
  fill: ['fill']
};

/**
 * Special color values included in every color category
 */
const SPECIAL_COLORS = {
  transparent: 'transparent',
  inherit: 'inherit',
  current: 'currentColor'
};

/**
 * Strip trailing semicolons from CSS values
 */
function stripSemicolon(value) {
  return value?.replace(/;$/, '') || value;
}

/**
 * Convert an sd-color CSS variable name to alpha-value format
 * @param {string} sdVar - e.g. "sd-color-text-primary-100"
 * @returns {string} e.g. "rgb(var(--sd-color-text-primary-100) / <alpha-value>)"
 */
function toAlpha(sdVar) {
  return `rgb(var(--${sdVar}) / <alpha-value>)`;
}

/**
 * Set a nested value in an object, handling the DEFAULT pattern
 * where a key can be both a value and have sub-keys
 */
function setNested(obj, path, value) {
  if (path.length === 0) return;

  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (!(key in current)) {
      current[key] = {};
    } else if (typeof current[key] === 'string') {
      current[key] = { DEFAULT: current[key] };
    }
    current = current[key];
  }

  const lastKey = path[path.length - 1];
  const finalKey = lastKey === 'default' ? 'DEFAULT' : lastKey;

  if (typeof current[finalKey] === 'object' && current[finalKey] !== null) {
    current[finalKey].DEFAULT = value;
  } else {
    current[finalKey] = value;
  }
}

/**
 * Build a color palette object from theme tokens for a given semantic prefix
 * Uses the semantic CSS variable (e.g. --sd-color-text-primary)
 */
function buildSemanticPalette(themeTokens, semanticPrefix) {
  const palette = {};
  const prefix = semanticPrefix + '-';

  for (const token of themeTokens) {
    if (!token.name.startsWith(prefix)) continue;

    const rest = token.name.slice(prefix.length);
    if (!rest) continue;

    const parts = rest.replace(/-default$/, '').split('-');
    const value = toAlpha(token.name);
    setNested(palette, parts, value);
  }

  return palette;
}

/**
 * Build the core "color" palette from primitive color tokens
 * These are the raw color definitions like sd-color-primary-100
 */
function buildCorePalette(themeTokens) {
  const palette = {};

  // Core color groups we want
  const coreGroups = ['primary', 'accent', 'neutral', 'error'];
  const singles = ['white', 'black', 'success', 'warning', 'info'];
  const riskTokens = {};

  for (const token of themeTokens) {
    // Only process core colors (not semantic ones)
    if (!token.name.startsWith('sd-color-')) continue;

    const afterColor = token.name.slice('sd-color-'.length);

    // Skip semantic prefixes
    if (
      afterColor.startsWith('text-') ||
      afterColor.startsWith('background-') ||
      afterColor.startsWith('background') ||
      afterColor.startsWith('border-') ||
      afterColor.startsWith('icon-fill-')
    ) {
      continue;
    }

    // Check if it's a risk color
    if (afterColor.startsWith('risk-')) {
      const riskName = afterColor.slice('risk-'.length);
      riskTokens[riskName] = toAlpha(token.name);
      continue;
    }

    // Check core groups
    let matched = false;
    for (const group of coreGroups) {
      if (afterColor === group) {
        setNested(palette, [group], toAlpha(token.name));
        matched = true;
        break;
      }
      if (afterColor.startsWith(group + '-')) {
        const suffix = afterColor.slice(group.length + 1);
        setNested(palette, [group, suffix], toAlpha(token.name));
        matched = true;
        break;
      }
    }

    if (matched) continue;

    // Check singles
    for (const single of singles) {
      if (afterColor === single) {
        palette[single] = toAlpha(token.name);
        break;
      }
    }
  }

  if (Object.keys(riskTokens).length > 0) {
    palette.risk = riskTokens;
  }

  return palette;
}

/**
 * Build risk colors object from theme tokens
 */
function buildRiskColors(themeTokens) {
  const risk = {};
  for (const token of themeTokens) {
    if (token.name.startsWith('sd-color-risk-')) {
      const name = token.name.slice('sd-color-risk-'.length);
      risk[name] = toAlpha(token.name);
    }
  }
  return risk;
}

/**
 * Add warning/risk colors that exist as core tokens but may be missing from semantic palettes
 */
function enrichPalette(palette, themeTokens, semanticPrefix) {
  // Add warning for text, border, fill palettes (background already has it)
  if (!palette.warning) {
    const warningToken = themeTokens.find(t => t.name === 'sd-color-warning');
    if (warningToken) palette.warning = toAlpha('sd-color-warning');
  }

  // Add risk colors to all semantic palettes
  if (!palette.risk) {
    const risk = buildRiskColors(themeTokens);
    if (Object.keys(risk).length > 0) {
      palette.risk = risk;
    }
  }

  return palette;
}

/**
 * Build spacing config from theme tokens
 */
function buildSpacing(themeTokens) {
  const spacing = {};

  for (const token of themeTokens) {
    if (!token.name.startsWith('sd-spacing-')) continue;
    const key = token.name.slice('sd-spacing-'.length);
    spacing[key] = `var(--${token.name})`;
  }

  return spacing;
}

/**
 * Build fontSize config from theme tokens
 */
function buildFontSize(themeTokens) {
  const fontSize = {};

  for (const token of themeTokens) {
    if (!token.name.startsWith('sd-text-')) continue;
    const key = token.name.slice('sd-text-'.length);
    fontSize[key] = `var(--${token.name})`;
  }

  return fontSize;
}

/**
 * Build fontWeight config from theme tokens (use actual values)
 */
function buildFontWeight(themeTokens) {
  const fontWeight = {};

  for (const token of themeTokens) {
    if (!token.name.startsWith('sd-font-weight-')) continue;
    const key = token.name.slice('sd-font-weight-'.length);
    fontWeight[key] = stripSemicolon(token.value);
  }

  return fontWeight;
}

/**
 * Build borderRadius config from theme tokens
 */
function buildBorderRadius(themeTokens) {
  const borderRadius = {};

  for (const token of themeTokens) {
    if (token.name === 'sd-radius') {
      borderRadius['default'] = `var(--${token.name})`;
    } else if (token.name.startsWith('sd-radius-')) {
      const key = token.name.slice('sd-radius-'.length);
      borderRadius[key] = `var(--${token.name})`;
    }
  }

  return borderRadius;
}

/**
 * Build borderWidth config from theme tokens
 */
function buildBorderWidth(themeTokens) {
  const borderWidth = {};

  for (const token of themeTokens) {
    if (token.name === 'sd-border-width') {
      borderWidth['DEFAULT'] = `var(--${token.name})`;
    } else if (token.name.startsWith('sd-border-width-')) {
      const key = token.name.slice('sd-border-width-'.length);
      borderWidth[key] = `var(--${token.name})`;
    }
  }

  return borderWidth;
}

/**
 * Build opacity config from theme tokens
 */
function buildOpacity(themeTokens) {
  const opacity = {};

  for (const token of themeTokens) {
    if (!token.name.startsWith('sd-opacity-')) continue;
    const key = token.name.slice('sd-opacity-'.length);
    opacity[key] = `var(--${token.name})`;
  }

  return opacity;
}

/**
 * Build boxShadow config from theme tokens
 */
function buildBoxShadow(themeTokens) {
  const boxShadow = {};

  for (const token of themeTokens) {
    if (token.name === 'sd-shadow') {
      boxShadow['DEFAULT'] = `var(--${token.name})`;
    } else if (token.name.startsWith('sd-shadow-')) {
      const key = token.name.slice('sd-shadow-'.length);
      boxShadow[key] = `var(--${token.name})`;
    }
  }

  return boxShadow;
}

/**
 * Build dropShadow config from theme tokens
 */
function buildDropShadow(themeTokens) {
  const dropShadow = {};

  for (const token of themeTokens) {
    if (token.name === 'sd-drop-shadow') {
      dropShadow['DEFAULT'] = `var(--${token.name})`;
    } else if (token.name.startsWith('sd-drop-shadow-')) {
      const key = token.name.slice('sd-drop-shadow-'.length);
      dropShadow[key] = `var(--${token.name})`;
    }
  }

  return dropShadow;
}

/**
 * Build zIndex config from utilities
 */
function buildZIndex(utilities) {
  const zIndex = {};

  for (const util of utilities) {
    if (!util.name.startsWith('z-')) continue;
    const key = util.name.slice('z-'.length);
    const decl = util.declarations.find(d => d.prop === 'z-index');
    if (decl) {
      zIndex[key] = decl.value;
    }
  }

  return zIndex;
}

/**
 * Build aspectRatio config from theme tokens (use actual values)
 */
function buildAspectRatio(themeTokens) {
  const aspectRatio = {};

  for (const token of themeTokens) {
    if (!token.name.startsWith('sd-aspect-')) continue;
    const key = token.name.slice('sd-aspect-'.length);
    aspectRatio[key] = stripSemicolon(token.value);
  }

  return aspectRatio;
}

/**
 * Generate complete Tailwind v3 compatible JSON configuration
 * @param {{ base: Array, utilities: Array, theme: Array }} themejs - Theme data from theme.mjs
 * @returns {object}
 */
export function generateTailwindConfig(themejs) {
  const { theme: themeTokens = [], utilities = [] } = themejs;

  // Build semantic color palettes
  const palettes = {};
  for (const [key, prefix] of Object.entries(SEMANTIC_PREFIXES)) {
    const palette = buildSemanticPalette(themeTokens, prefix);
    enrichPalette(palette, themeTokens, prefix);
    palettes[key] = { ...palette, ...SPECIAL_COLORS };
  }

  // Build core color palette
  const corePalette = { ...buildCorePalette(themeTokens), ...SPECIAL_COLORS };

  // Build all color categories by cloning semantic palettes
  const colorCategories = {};
  for (const [semantic, categories] of Object.entries(COLOR_CATEGORY_MAP)) {
    for (const category of categories) {
      colorCategories[category] = palettes[semantic];
    }
  }
  colorCategories['color'] = corePalette;

  // Build non-color configs
  const spacing = buildSpacing(themeTokens);
  const fontSize = buildFontSize(themeTokens);
  const fontWeight = buildFontWeight(themeTokens);
  const borderRadius = buildBorderRadius(themeTokens);
  const borderWidth = buildBorderWidth(themeTokens);
  const opacity = buildOpacity(themeTokens);
  const boxShadow = buildBoxShadow(themeTokens);
  const dropShadow = buildDropShadow(themeTokens);
  const zIndex = buildZIndex(utilities);
  const aspectRatio = buildAspectRatio(themeTokens);
  const risk = buildRiskColors(themeTokens);

  // Assemble in order matching legacy structure
  return {
    accentColor: colorCategories.accentColor,
    backgroundColor: colorCategories.backgroundColor,
    borderColor: colorCategories.borderColor,
    borderRadius,
    borderWidth,
    boxShadow,
    boxShadowColor: colorCategories.boxShadowColor,
    caretColor: colorCategories.caretColor,
    color: colorCategories.color,
    dropShadow,
    fill: colorCategories.fill,
    fontFamily: {},
    fontSize,
    fontStyle: {},
    fontWeight,
    gradientColorStops: colorCategories.gradientColorStops,
    lineHeight: {},
    opacity,
    outlineColor: colorCategories.outlineColor,
    placeholderColor: colorCategories.placeholderColor,
    ringColor: colorCategories.ringColor,
    ringOffsetColor: colorCategories.ringOffsetColor,
    space: spacing,
    spacing,
    stroke: colorCategories.stroke,
    tracking: {},
    textColor: colorCategories.textColor,
    textDecorationColor: colorCategories.textDecorationColor,
    zIndex,
    risk,
    aspectRatio
  };
}

/**
 * Generate JSON string from theme data
 * @param {{ base: Array, utilities: Array, theme: Array }} themejs
 * @returns {string} Formatted JSON string
 */
export function generateTailwindJson(themejs) {
  const config = generateTailwindConfig(themejs);
  return JSON.stringify(config, null, 2);
}
