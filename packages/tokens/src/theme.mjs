import { readFileSync } from 'node:fs';
import path from 'path';

const extractBase = css => {
  const blocks = [...css.matchAll(/@theme\s*\{([\s\S]*?)\}/g)].map(m => m[1]);

  const variables = [];
  for (const block of blocks) {
    for (const m of block.matchAll(/--([a-z0-9-_\\/.]+)\s*:\s*([^;]+);/gi)) {
      const name = m[1];
      const value = m[2].trim();
      variables.push({ name, value });
    }
  }

  return variables;
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

const tailwind = readFileSync(path.join(process.cwd(), '../tokens/themes/tailwind.css'), { encoding: 'utf-8' });

export default {
  base: extractBase(tailwind),
  utilities: extractUtilities(tailwind)
};
