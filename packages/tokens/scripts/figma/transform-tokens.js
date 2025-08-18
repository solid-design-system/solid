import fs from 'node:fs';
import path from 'node:path';

const DIR = 'packages/tokens/src/figma-variables';
const IN = path.join(DIR, 'variableTokens.json');
const OUT_JSON = path.join(DIR, 'tokens.simple.json');
const OUT_CSS = path.join(DIR, 'tokens.css');

function toCssName(name) {
  return `--${name
    .trim()
    .toLowerCase()
    .replace(/[^\w]+/g, '-')
    .replace(/^-+|-+$/g, '')}`;
}

function resolveColor(v) {
  if (v && typeof v === 'object' && 'r' in v && 'g' in v && 'b' in v) {
    const r = Math.round(v.r * 255);
    const g = Math.round(v.g * 255);
    const b = Math.round(v.b * 255);
    const a = 'a' in v ? v.a : 1;
    return a === 1 ? `rgb(${r} ${g} ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return v;
}

function main() {
  if (!fs.existsSync(IN)) {
    console.error(`❌ Input not found: ${IN}. Run "pnpm run fetch:figma" first.`);
    process.exit(1);
  }
  const raw = JSON.parse(fs.readFileSync(IN, 'utf8'));

  // Choose a mode (first one by default)
  const modeId =
    raw?.meta?.collections?.[0]?.modes?.[0]?.mode_id ?? Object.keys(raw?.variables?.[0]?.valuesByMode ?? {})[0];

  const byId = new Map();
  for (const v of raw.variables ?? []) byId.set(v.id, v);

  const flat = {};
  const css = [':root {'];

  for (const v of raw.variables ?? []) {
    let value = v.valuesByMode?.[modeId] ?? Object.values(v.valuesByMode ?? {})[0];
    if (typeof value === 'string' && value.startsWith('VariableID:')) {
      const ref = byId.get(value.replace('VariableID:', ''));
      value = ref?.valuesByMode?.[modeId] ?? Object.values(ref?.valuesByMode ?? {})[0];
    }
    const resolved = resolveColor(value);
    flat[v.name] = resolved;
    css.push(`  ${toCssName(v.name)}: ${resolved};`);
  }
  css.push('}');

  fs.writeFileSync(OUT_JSON, JSON.stringify(flat, null, 2));
  fs.writeFileSync(OUT_CSS, css.join('\n') + '\n');
  console.log(`✅ Wrote ${OUT_JSON} and ${OUT_CSS}`);
}

main();
