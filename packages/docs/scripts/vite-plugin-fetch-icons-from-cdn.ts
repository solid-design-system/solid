/**
 * The 'fetch-icons-from-cdn' plugin is created for Vite, aiming to dynamically expose all icons from the CDN.
 *
 * This happens on build time to reduce transfer size and improve loading speed.
 */

import type { Plugin } from 'vite';

async function fetchIconsJson() {
  try {
    const contentUrl = 'https://celum-icons.fe.union-investment.de/union-investment/content.json';
    const systemUrl = 'https://celum-icons.fe.union-investment.de/union-investment/system.json';

    const [contentResponse, systemResponse] = await Promise.all([fetch(contentUrl), fetch(systemUrl)]);

    if (!contentResponse.ok || !systemResponse.ok) {
      throw new Error('Failed to fetch data');
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
    throw new Error('Failed to fetch icons data');
  }
}

function viteFetchIconsFromCDN(): Plugin {
  let iconsData: string | null = null;

  return {
    name: 'vite-fetch-icons-from-cdn',

    resolveId(id: unknown) {
      if (id === 'icons-from-cdn') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return id;
      }
      return null;
    },
    async buildStart() {
      const iconsObject = await fetchIconsJson();
      iconsData = JSON.stringify(iconsObject);
    },

    load(id: unknown) {
      if (id === 'icons-from-cdn') {
        return `export default ${iconsData};`;
      }
      return null;
    }
  };
}

export default viteFetchIconsFromCDN;
