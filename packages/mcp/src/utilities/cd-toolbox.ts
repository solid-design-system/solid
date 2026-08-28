import fs from 'node:fs/promises';
import { join } from 'node:path';
import { cdToolboxManifestPath, cdToolboxPath } from './config.js';

export interface CdToolboxPage {
  aliases: string[];
  lastChanged?: string;
  path: string;
  sourcePath: string;
  sourceUrl: string;
  summary: string;
  title: string;
}

interface CdToolboxManifest {
  pages: CdToolboxPage[];
}

export const getCdToolboxPages = async (): Promise<CdToolboxPage[]> => {
  try {
    const manifest = JSON.parse(await fs.readFile(cdToolboxManifestPath, 'utf-8')) as CdToolboxManifest;
    return Array.isArray(manifest.pages) ? manifest.pages : [];
  } catch {
    return [];
  }
};

export const readCdToolboxPage = async (page: CdToolboxPage): Promise<string | null> => {
  try {
    return await fs.readFile(join(cdToolboxPath, page.sourcePath), 'utf-8');
  } catch {
    return null;
  }
};
