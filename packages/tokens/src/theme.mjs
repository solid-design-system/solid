import { readFileSync } from 'node:fs';
import path from 'path';

/**
 * Flatten raw design tokens from tokens.json for a given set of types.
 * Handles both flat entries and one level of nesting
 * (e.g. { "0": { "value": "0rem", "5": { "value": "2px" } } }).
 * Commas in keys are normalised to dots ("2,5" → "2.5").
 */
function flattenRawTokens(uiCore, types) {
  const result = {};
  for (const [key, entry] of Object.entries(uiCore)) {
    if (typeof entry !== 'object' || entry === null) continue;
    // Direct entry with a matching type
    if (types.includes(entry.type) && entry.value !== undefined) {
      result[key.replace(',', '.')] = entry.value;
    }
    // One level of nesting (e.g. "0" → "0.5")
    for (const [subKey, subEntry] of Object.entries(entry)) {
      if (
        typeof subEntry === 'object' &&
        subEntry !== null &&
        types.includes(subEntry.type) &&
        subEntry.value !== undefined
      ) {
        result[`${key}.${subKey}`.replace(',', '.')] = subEntry.value;
      }
    }
  }
  return result;
}

const extractBlock = (css, selector) => {
  const startIndex = css.indexOf(selector);
  if (startIndex === -1) return null;

  const openIndex = css.indexOf('{', startIndex);
  if (openIndex === -1) return null;

  let depth = 0;
  let endIndex = -1;

  for (let i = openIndex; i < css.length; i++) {
    if (css[i] === '{') {
      depth++;
    } else if (css[i] === '}') {
      depth--;
      if (depth === 0) {
        endIndex = i;
        break;
      }
    }
  }

  if (endIndex === -1) return null;
  return css.slice(openIndex + 1, endIndex).trim();
};

const extractVariables = (css, selector) => {
  const block = extractBlock(css, selector);
  if (!block) return null;

  return block
    .split('\n')
    .map(variable => {
      const [name, value] = variable.trim().split(':');
      if (!name.startsWith('--')) return null;
      return { name: name.replace('--', '').replace(/\\/g, '').trim(), value: value?.trim() };
    })
    .filter(Boolean);
};

const extractUtilities = css => {
  const blocks = [...css.matchAll(/@utility\s+([^\s{]+)\s*\{([\s\S]*?)\}/g)];

  return blocks.map(m => {
    const name = m[1].trim();
    const body = m[2];
    const declarations = [];
    for (const d of body.matchAll(/([a-z-]+)\s*:\s*([^;]+);/gi)) {
      declarations.push({ prop: d[1], value: d[2].trim() });
    }
    return {
      name,
      declarations
    };
  });
};

const dir = path.join(process.cwd(), '../tokens/themes');
const tailwind = readFileSync(path.join(dir, './tailwind.css'), { encoding: 'utf-8' });
const theme = readFileSync(path.join(dir, './ui-light/ui-light.css'), { encoding: 'utf-8' });

const tokensJsonPath = path.join(process.cwd(), '../tokens/src/tokens.json');
const tokensJson = JSON.parse(readFileSync(tokensJsonPath, { encoding: 'utf-8' }));
const uiCore = tokensJson['UI Core'] ?? {};

export default {
  base: extractVariables(tailwind, '@theme inline'),
  utilities: extractUtilities(tailwind),
  theme: extractVariables(theme, ':root, .sd-theme-ui-light'),
  /** Raw spacing values keyed by Tailwind scale name (e.g. "0" → "0rem", "5" → "1.25rem").
   *  These exist in tokens.json but are not exported as CSS custom properties,
   *  so the generator uses the raw value directly for those entries. */
  rawSpacing: flattenRawTokens(uiCore, ['spacing']),
  /** Raw lineHeight values keyed by token name (e.g. "leading-none" → "100%"). */
  rawLineHeight: flattenRawTokens(uiCore, ['lineHeights'])
};
