// Builds packages/components' custom-elements.json manifest if it's missing or
// older than the component source it describes. The metadata build reads this
// manifest for prop/event/slot docs, so a stale or absent manifest would make
// the generated metadata silently omit or outdate that content.
import { existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const componentsDir = join(dirname(fileURLToPath(import.meta.url)), '../../components');
const manifestPath = join(componentsDir, 'dist/custom-elements.json');
const srcDir = join(componentsDir, 'src');

const newestMtimeUnder = dir => {
  let newest = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      newest = Math.max(newest, newestMtimeUnder(path));
    } else if (entry.name.endsWith('.ts')) {
      newest = Math.max(newest, statSync(path).mtimeMs);
    }
  }
  return newest;
};

const isManifestStale = () => {
  if (!existsSync(manifestPath)) return true;
  const manifestMtime = statSync(manifestPath).mtimeMs;
  return newestMtimeUnder(srcDir) > manifestMtime;
};

if (isManifestStale()) {
  console.log('Components manifest missing or stale, building packages/components...');
  const result = spawnSync('pnpm', ['run', 'build'], { cwd: componentsDir, stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
} else {
  console.log('Components manifest is up to date, skipping build.');
}
