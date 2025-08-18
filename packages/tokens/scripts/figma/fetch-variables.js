import fs from 'node:fs';
import path from 'node:path';

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_ID = process.env.FIGMA_FILE_ID;

if (!FIGMA_TOKEN || !FILE_ID) {
  console.error('❌ Missing FIGMA_TOKEN or FIGMA_FILE_ID env vars.');
  process.exit(1);
}

const OUT_DIR = 'packages/tokens/src/figma-variables';
const OUT_FILE = path.join(OUT_DIR, 'variableTokens.json');

async function main() {
  const res = await fetch(`https://api.figma.com/v1/files/${FILE_ID}/variables/local`, {
    headers: { 'X-Figma-Token': FIGMA_TOKEN }
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Figma API ${res.status}: ${text}`);
  }
  const json = await res.json();
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(json, null, 2));
  console.log(`✅ Saved raw variables → ${OUT_FILE}`);

  const collections = json?.meta?.collections?.length ?? 0;
  const count = json?.variables?.length ?? 0;
  console.log(`ℹ️ Collections: ${collections}, Variables: ${count}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
