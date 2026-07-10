import fs from 'node:fs/promises';
import { mkdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import ora from 'ora';
import { iconsPath } from '../utilities/index.js';

const CONTENT_URL = 'https://celum-icons.fe.union-investment.de/union-investment/content.json';
const SYSTEM_URL = 'https://celum-icons.fe.union-investment.de/union-investment/system.json';
const MULTI_THEMING_CONTENT_URL = 'https://celum-icons.fe.union-investment.de/vb/content.json';
const MULTI_THEMING_SYSTEM_URL = 'https://celum-icons.fe.union-investment.de/vb/system.json';

interface RawIcon {
  technicalId: string;
  displayNameDe: string;
  tags: string[];
  [key: string]: unknown;
}

interface CompactIcon {
  technicalId: string;
  displayNameDe: string;
  tags: string[];
}

const STATUS_LIBRARY_SOURCE = resolve(
  iconsPath,
  '../../../../../packages/components/src/components/icon/library.status.ts'
);

const toLabel = (iconId: string): string =>
  iconId
    .replace(/^status-/, '')
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const getStatusIcons = async (): Promise<CompactIcon[]> => {
  const source = await fs.readFile(STATUS_LIBRARY_SOURCE, 'utf-8');
  const ids = [...source.matchAll(/'(?<id>status-[^']+)'\s*:/g)]
    .map(match => match.groups?.id)
    .filter((id): id is string => Boolean(id));

  return ids.map(id => ({
    technicalId: id,
    displayNameDe: toLabel(id),
    tags: []
  }));
};

const fetchIcons = async (url: string): Promise<CompactIcon[]> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  const data = (await res.json()) as RawIcon[];
  return data.map(({ technicalId, displayNameDe, tags }) => ({
    technicalId,
    displayNameDe,
    tags: tags ?? []
  }));
};

/**
 * Fetches icon metadata from the CDN and writes compact JSON files per library:
 *   metadata/packages/icons/default/content.json  — default library content icons
 *   metadata/packages/icons/default/system.json   — default library UI/system icons
 *   metadata/packages/icons/sd-status-assets/status.json — status indicator icons
 *   metadata/packages/icons/sd-multi-theming/content.json — multi-theme content icons
 *   metadata/packages/icons/sd-multi-theming/system.json — multi-theme system icons
 *
 * Each icon: { technicalId, displayNameDe, tags }
 * Use as <sd-icon name="content/{technicalId}"> or <sd-icon name="system/{technicalId}">
 */
export const buildIcons = async () => {
  const spinner = ora({
    prefixText: 'Icons:',
    text: 'Fetching icon metadata from CDN...'
  }).start();

  try {
    rmSync(iconsPath, { recursive: true, force: true });
    mkdirSync(join(iconsPath, 'default'), { recursive: true });
    mkdirSync(join(iconsPath, 'sd-status-assets'), { recursive: true });
    mkdirSync(join(iconsPath, 'sd-multi-theming'), { recursive: true });

    const [content, system, multiThemingContent, multiThemingSystem, statusIcons] = await Promise.all([
      fetchIcons(CONTENT_URL),
      fetchIcons(SYSTEM_URL),
      fetchIcons(MULTI_THEMING_CONTENT_URL),
      fetchIcons(MULTI_THEMING_SYSTEM_URL),
      getStatusIcons()
    ]);

    await Promise.all([
      fs.writeFile(join(iconsPath, 'default', 'content.json'), JSON.stringify(content, null, 2)),
      fs.writeFile(join(iconsPath, 'default', 'system.json'), JSON.stringify(system, null, 2)),
      fs.writeFile(join(iconsPath, 'sd-status-assets', 'status.json'), JSON.stringify(statusIcons, null, 2)),
      fs.writeFile(join(iconsPath, 'sd-multi-theming', 'content.json'), JSON.stringify(multiThemingContent, null, 2)),
      fs.writeFile(join(iconsPath, 'sd-multi-theming', 'system.json'), JSON.stringify(multiThemingSystem, null, 2))
    ]);

    spinner.succeed(
      `Icon metadata generated successfully (${content.length} default content, ${system.length} default system, ${multiThemingContent.length} multi-theming content, ${multiThemingSystem.length} multi-theming system, ${statusIcons.length} status).`
    );
  } catch (error) {
    spinner.fail(`Failed to generate icon metadata. Error: ${error as string}`);
    throw error;
  }
};
