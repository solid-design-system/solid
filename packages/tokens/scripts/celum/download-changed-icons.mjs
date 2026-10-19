import { execFileSync } from 'node:child_process';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { isDeepStrictEqual } from 'node:util';
import { CELUM_THEME_MAPPING } from '../../../docs/.storybook/addons/theme-generator/theme-attributes.ts';

export function collectChangedIcons(library, before, after) {
  const changes = [];
  for (const [theme, data] of Object.entries(after)) {
    for (const type of ['system', 'content', 'internal']) {
      for (const entry of data[type] ?? []) {
        const previous = before[theme]?.[type]?.find(item => item.date === entry.date)?.icons;
        for (const change of ['added', 'modified', 'removed']) {
          for (const icon of entry.icons[change] ?? []) {
            if (previous?.[change]?.some(item => isDeepStrictEqual(item, icon))) continue;
            changes.push({
              ...(typeof icon === 'string' ? { name: icon } : icon),
              library,
              theme,
              type,
              date: entry.date,
              change
            });
          }
        }
      }
    }
  }
  return changes;
}

export async function downloadChangedIcons(changes, output, fetchImpl = fetch) {
  await rm(output, { recursive: true, force: true });
  if (!changes.length) return { downloaded: 0, changes };
  await mkdir(output, { recursive: true });
  const files = new Set();
  const seen = new Set();
  for (const icon of [...changes].reverse()) {
    if (icon.change === 'removed') continue;
    try {
      if (
        ![icon.library, icon.theme, icon.type].every(value => /^[a-z0-9-]+$/.test(value)) ||
        !/^[a-zA-Z0-9][a-zA-Z0-9_.-]*\.svg$/i.test(icon.name)
      )
        throw new Error('Unsafe icon filename');
      const file = `${icon.library}/${icon.theme}/${icon.type}/${icon.name}`;
      if (seen.has(file)) continue;
      seen.add(file);
      const name = icon.technicalId ?? icon.name.replace(/^\d+_/, '').replace(/\.svg$/i, '');
      const url = new URL(
        icon.urlSvg ||
          `https://celum-icons.fe.union-investment.de/${CELUM_THEME_MAPPING[icon.theme]}/${icon.type}/${encodeURIComponent(name)}.svg`
      );
      if (url.protocol !== 'https:') throw new Error('Expected an HTTPS icon URL');
      const response = await fetchImpl(url, { signal: AbortSignal.timeout(60_000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const destination = path.join(output, file);
      await mkdir(path.dirname(destination), { recursive: true });
      await writeFile(destination, await response.text());
      icon.file = file;
      files.add(file);
    } catch (error) {
      icon.downloadError = error.message;
      console.warn(`Could not download ${icon.library}/${icon.theme}/${icon.type}/${icon.name}: ${error.message}`);
    }
  }
  const report = { downloaded: files.size, changes };
  await writeFile(path.join(output, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
  return report;
}

async function main() {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const directory = 'packages/tokens/data/celum-changelogs';
  const changes = [];
  for (const filename of await readdir(path.join(root, directory))) {
    if (!filename.endsWith('.json')) continue;
    const relative = `${directory}/${filename}`;
    const tracked = execFileSync('git', ['ls-tree', '--name-only', 'HEAD', '--', relative], {
      cwd: root,
      encoding: 'utf8'
    });
    const before = tracked.trim()
      ? JSON.parse(execFileSync('git', ['show', `HEAD:${relative}`], { cwd: root, encoding: 'utf8' }))
      : {};
    const after = JSON.parse(await readFile(path.join(root, relative), 'utf8'));
    changes.push(...collectChangedIcons(filename.slice(0, -5), before, after));
  }
  const output = path.join(process.env.RUNNER_TEMP || tmpdir(), 'solid-celum-icon-changes');
  const report = await downloadChangedIcons(changes, output);
  console.info(
    `${report.downloaded} added/modified icons downloaded; ${changes.length} changelog changes. Output: ${output}`
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
