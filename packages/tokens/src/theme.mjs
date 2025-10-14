import { readFileSync } from 'node:fs';
import path from 'path';

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
const theme = readFileSync(path.join(dir, './sd-ui-semantic-light.css'), { encoding: 'utf-8' });

export default {
  base: extractVariables(tailwind, '@theme inline'),
  utilities: extractUtilities(tailwind),
  theme: extractVariables(theme, ':root, .sd-theme-ui-semantic-light')
};
