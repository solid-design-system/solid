import fs from 'node:fs/promises';
import { mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import ora from 'ora';
import { iconsPath } from '../utilities/index.js';

const CONTENT_URL = 'https://celum-icons.fe.union-investment.de/union-investment/content.json';
const SYSTEM_URL = 'https://celum-icons.fe.union-investment.de/union-investment/system.json';

type RawIcon = {
  technicalId: string;
  displayNameDe: string;
  tags: string[];
  [key: string]: unknown;
};

type CompactIcon = {
  technicalId: string;
  displayNameDe: string;
  tags: string[];
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
 * Fetches icon metadata from the CDN and writes compact JSON files:
 *   metadata/packages/icons/content.json  — content/illustration icons
 *   metadata/packages/icons/system.json   — UI/system icons
 *
 * Each icon: { technicalId, displayNameDe, tags }
 * Use as <sd-icon name="system/{technicalId}"> or <sd-icon name="content/{technicalId}">
 */
export const buildIcons = async () => {
  const spinner = ora({
    prefixText: 'Icons:',
    text: 'Fetching icon metadata from CDN...'
  }).start();

  try {
    rmSync(iconsPath, { recursive: true, force: true });
    mkdirSync(iconsPath, { recursive: true });

    const [content, system] = await Promise.all([fetchIcons(CONTENT_URL), fetchIcons(SYSTEM_URL)]);

    await Promise.all([
      fs.writeFile(join(iconsPath, 'content.json'), JSON.stringify(content, null, 2)),
      fs.writeFile(join(iconsPath, 'system.json'), JSON.stringify(system, null, 2))
    ]);

    spinner.succeed(`Icon metadata generated successfully (${content.length} content, ${system.length} system).`);
  } catch (error) {
    spinner.fail(`Failed to generate icon metadata. Error: ${error as string}`);
    throw error;
  }
};
