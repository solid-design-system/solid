import fs from 'node:fs/promises';
import { relative, join } from 'node:path';
import ora from 'ora';
import { cdToolboxManifestPath, cdToolboxPath } from '../utilities/index.js';

const CD_TOOLBOX_URL = 'https://cd.union-investment.de';

export interface CdToolboxPage {
  aliases: string[];
  lastChanged?: string;
  path: string;
  sourcePath: string;
  sourceUrl: string;
  summary: string;
  title: string;
}

const ENGLISH_ALIASES: Record<string, string[]> = {
  aenderungshistorie: ['change history', 'changelog', 'release notes', 'updates'],
  anzeigen: ['advertising', 'advertisements'],
  anwendungen: ['applications', 'use cases'],
  barrierefreiheit: ['accessibility', 'accessible design'],
  bewegtbild: ['motion', 'video'],
  bildwelt: ['imagery', 'photography', 'image style'],
  digitale: ['digital'],
  download: ['download', 'downloads', 'assets'],
  farbe: ['color', 'colour', 'brand colors', 'color palette'],
  grafik: ['graphics', 'graphic elements'],
  hintergruende: ['backgrounds'],
  icon: ['icon', 'icons', 'iconography'],
  illustration: ['illustration', 'illustrations'],
  logo: ['logo', 'logos', 'brand mark'],
  markenform: ['brand shape', 'brand form'],
  motion: ['motion', 'animation', 'animated'],
  newsletter: ['newsletter', 'email'],
  print: ['print', 'print media'],
  schreib: ['writing'],
  schrift: ['typography', 'font', 'typeface'],
  sound: ['sound', 'audio', 'voice'],
  vorlagen: ['templates', 'page templates']
};

const getEnglishAliases = (title: string, path: string): string[] => {
  const searchable = `${title} ${path}`.toLocaleLowerCase();
  return Object.entries(ENGLISH_ALIASES)
    .filter(([term]) => searchable.includes(term))
    .flatMap(([, aliases]) => aliases)
    .filter((alias, index, aliases) => aliases.indexOf(alias) === index)
    .sort();
};

const extractTitle = (content: string, fallback: string): string =>
  content
    .match(/^#\s+(.+)$/m)?.[1]
    .replace(/&amp;/g, '&')
    .trim() ?? fallback;

const extractSummary = (content: string): string => {
  const lines = content
    .split('\n')
    .map(line => line.trim())
    .filter(
      line =>
        line &&
        !line.startsWith('#') &&
        !line.startsWith('![') &&
        !line.startsWith('[') &&
        !line.startsWith('Source:') &&
        !line.startsWith('Drucken')
    );
  return (
    lines
      .find(line => line.length > 40)
      ?.replace(/\[\.\.\.\]/g, '')
      .trim() ?? ''
  );
};

const extractLastChanged = (content: string): string | undefined => {
  const dates = [...content.matchAll(/\b(\d{2})\.(\d{2})\.(\d{4})\b/g)].map(
    match => `${match[3]}-${match[2]}-${match[1]}`
  );
  return dates.sort().at(-1);
};

const findIndexFiles = async (directory: string): Promise<string[]> => {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async entry => {
      const entryPath = join(directory, entry.name);
      if (entry.isDirectory()) return findIndexFiles(entryPath);
      return entry.isFile() && entry.name === 'index.md' ? [entryPath] : [];
    })
  );
  return nested.flat();
};

/** Generates route-aware metadata from the checked-in CD Toolbox site export. */
export const buildCdToolbox = async (): Promise<void> => {
  const spinner = ora({ prefixText: 'MCP:', text: 'Building CD Toolbox manifest...' }).start();
  const files = await findIndexFiles(cdToolboxPath);
  const pages = await Promise.all(
    files.map(async filePath => {
      const content = await fs.readFile(filePath, 'utf-8');
      const sourcePath = relative(cdToolboxPath, filePath);
      const path = sourcePath === 'index.md' ? '' : sourcePath.replace(/\/index\.md$/, '');
      const fallback = path.split('/').at(-1) || 'CD-Toolbox';
      return {
        aliases: getEnglishAliases(extractTitle(content, fallback), path),
        lastChanged: extractLastChanged(content),
        path,
        sourcePath,
        sourceUrl: `${CD_TOOLBOX_URL}/${path}`,
        summary: extractSummary(content),
        title: extractTitle(content, fallback)
      } satisfies CdToolboxPage;
    })
  );

  pages.sort((first, second) => first.path.localeCompare(second.path));
  await fs.writeFile(cdToolboxManifestPath, `${JSON.stringify({ pages }, null, 2)}\n`, 'utf-8');
  spinner.succeed(`CD Toolbox manifest: ${pages.length} page(s) written.`);
};
