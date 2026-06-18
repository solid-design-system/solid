/**
 * The 'fetch-icons-from-cdn' plugin is created for Vite, aiming to dynamically expose all icons from the CDN.
 *
 * This happens on build time to reduce transfer size and improve loading speed.
 */

import type { Plugin } from 'vite';
import { getThemeIconFolders } from '../.storybook/addons/theme-generator/theme-attributes';

async function fetchDefaultIconsJson() {
  try {
    const contentUrl = 'https://celum-icons.fe.union-investment.de/union-investment/content.json';
    const systemUrl = 'https://celum-icons.fe.union-investment.de/union-investment/system.json';
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

async function fetchMultiThemingIconsJson(folder: string | null) {
  try {
    const baseUrl = `https://celum-icons.fe.union-investment.de/${folder}`;
    const contentUrl = `${baseUrl}/content.json`;
    const systemUrl = `${baseUrl}/system.json`;

    const [contentResponse, systemResponse] = await Promise.all([fetch(contentUrl), fetch(systemUrl)]);

    if (!contentResponse.ok || !systemResponse.ok) {
      console.error('Failed to fetch required icon JSON data from CDN – maybe the CDN is unreachable?');
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
      const defaultData = await fetchDefaultIconsJson();

      // multi-theming library
      const multiThemingData: Record<string, any> = {};
      for (const [themeKey, folder] of Object.entries(getThemeIconFolders)) {
        multiThemingData[themeKey] = await fetchMultiThemingIconsJson(folder);
      }

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
