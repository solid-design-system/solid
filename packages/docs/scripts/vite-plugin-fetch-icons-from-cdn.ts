/**
 * The 'fetch-icons-from-cdn' plugin is created for Vite, aiming to dynamically expose all icons from the CDN.
 *
 * This happens on build time to reduce transfer size and improve loading speed.
 */

import type { Plugin } from 'vite';
import { getThemeIconFolders } from '../.storybook/addons/theme-generator/theme-attributes';

async function fetchIconsJson(baseUrl: string) {
  try {
    const contentUrl = `${baseUrl}/content.json`;
    const systemUrl = `${baseUrl}/system.json`;
    const [contentResponse, systemResponse] = await Promise.all([fetch(contentUrl), fetch(systemUrl)]);

    if (!contentResponse.ok || !systemResponse.ok) {
      console.error('Failed to fetch icon JSON data from CDN – maybe the CDN is unreachable?');
      return {
        content: [],
        system: []
      };
    }

    const contentData = (await contentResponse.json()) as { technicalId: string }[];
    const systemData = (await systemResponse.json()) as { technicalId: string }[];

    const icons = {
      content: contentData.map(icon => icon.technicalId),
      system: systemData.map(icon => icon.technicalId)
    };
    return icons;
  } catch (error) {
    console.error('Error fetching icon JSON data:', error);
    return {
      content: [],
      system: []
    };
  }
}

function viteFetchIconsFromCDN(): Plugin {
  let iconsData: string | null = null;

  return {
    name: 'vite-fetch-icons-from-cdn',

    resolveId(id: unknown) {
      if (id === 'icons-from-cdn') return id;
      if (id === 'icons-from-cdn/multi-theming') return id;
      return null;
    },
    async buildStart() {
      // default library
      const defaultData = await fetchIconsJson('https://celum-icons.fe.union-investment.de/union-investment');

      // multi-theming library - keep a single themed dataset for the docs stories
      // only include icons that are also available in the default library
      const vbRaw = await fetchIconsJson(`https://celum-icons.fe.union-investment.de/${getThemeIconFolders.vb}`);
      const multiThemingData = {
        vb: {
          content: vbRaw.content.filter(id => defaultData.content.includes(id)),
          system: vbRaw.system.filter(id => defaultData.system.includes(id))
        }
      };

      const data = {
        defaultData,
        multiThemingData
      };

      iconsData = JSON.stringify(data);
    },
    load(id: unknown) {
      if (id === 'icons-from-cdn') {
        return `export default ${JSON.stringify(JSON.parse(iconsData!).defaultData)};`;
      }

      if (id === 'icons-from-cdn/multi-theming') {
        return `export default ${JSON.stringify(JSON.parse(iconsData!).multiThemingData)};`;
      }

      return null;
    }
  };
}

export default viteFetchIconsFromCDN;
