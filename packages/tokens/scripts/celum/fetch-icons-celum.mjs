import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Icon libraries, their supported themes, and the Celum icon categories they use.
const LIBRARIES = {
  default: {
    themes: ['union-investment'],
    iconTypes: ['content', 'system']
  },
  'sd-multi-theming': {
    themes: ['union-investment', 'bb', 'sp', 'vb'],
    iconTypes: ['content', 'system']
  },
  'sd-internal': {
    themes: ['bb', 'sp', 'vb'],
    iconTypes: ['internal']
  }
};

const WEEKDAYS_TO_FETCH = [1, 2, 3, 4, 5]; // Monday to Friday

// Map Solid theme names to the CDN icon folder configured for each theme.
const CELUM_THEME_MAPPING = {
  'union-investment': 'union-investment',
  bb: 'bbbank',
  sp: 'sp',
  vb: 'vb'
};

const getChangelogsFilePath = libraryType =>
  path.resolve(path.join(__dirname, `../../data/icons-changelogs/${libraryType}.json`));

const getLastCheckDate = (libraryType, theme) => {
  try {
    const filePath = getChangelogsFilePath(libraryType);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      const libraryData = JSON.parse(data);
      const themeData = libraryData[theme];
      return themeData?.lastCheck ? new Date(themeData.lastCheck) : new Date(new Date().getFullYear(), 0, 1);
    }
  } catch (error) {
    console.warn(`Failed to read last check date for ${libraryType}/${theme}:`, error);
  }

  return new Date(new Date().getFullYear(), 0, 1);
};

const setLastCheckDate = (libraryType, theme, date) => {
  try {
    const filePath = getChangelogsFilePath(libraryType);
    let libraryData = {};

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      libraryData = JSON.parse(data);
    }

    if (!libraryData[theme]) {
      libraryData[theme] = { system: [], content: [] };
    }

    libraryData[theme].lastCheck = date.toLocaleDateString();

    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(libraryData, null, 2), 'utf-8');
  } catch (error) {
    console.warn(`Failed to save last check date for ${libraryType}/${theme}:`, error);
  }
};

const formatDate = (date, padded = false) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (padded) {
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }
  return `${year}-${month}-${day}`;
};

const getNewIcons = newChangelogs => {
  const iconNames = new Set();

  newChangelogs.forEach(changelog => {
    [...(changelog.icons.added || []), ...(changelog.icons.modified || [])].forEach(iconName => {
      if (typeof iconName === 'string') {
        iconNames.add(iconName);
      }
    });
  });

  return Array.from(iconNames);
};

const fetchNewIconsMetadata = async (library, type, iconNames) => {
  if (!iconNames || iconNames.length === 0) {
    return [];
  }

  const celumLibrary = CELUM_THEME_MAPPING[library];
  const url = `https://celum-icons.fe.union-investment.de/${celumLibrary}/${type}.json`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const allData = await response.json();
      const filteredData = allData.filter(item => {
        const itemName = item.filename?.replace(/\.[^/.]+$/, '');
        return iconNames.some(iconName => {
          const searchName = iconName.replace(/\.[^/.]+$/, '');
          return item.filename === iconName || itemName === searchName;
        });
      });

      return filteredData;
    } else {
      return [];
    }
  } catch (error) {
    console.error(`Error fetching ${type} metadata for ${library}:`, error);
    return [];
  }
};

const addIconMetadata = (iconName, metadata) => {
  if (typeof iconName === 'object') {
    return iconName;
  }

  const iconMetadata = metadata.find(item => {
    if (item.filename === iconName) return true;

    const nameWithoutExt = iconName.replace(/\.[^/.]+$/, '');
    const metadataNameWithoutExt = item.filename?.replace(/\.[^/.]+$/, '');

    return metadataNameWithoutExt === nameWithoutExt;
  });

  if (iconMetadata) {
    return {
      name: iconName,
      technicalId: iconMetadata.technicalId || null,
      urlSvg: iconMetadata.urlSvg || null,
      tags: iconMetadata.tags || []
    };
  }

  return {
    name: iconName,
    technicalId: null,
    urlSvg: null,
    tags: []
  };
};

const fetchChangelog = async (library, date, type) => {
  const formattedDate = formatDate(date);
  const celumLibrary = CELUM_THEME_MAPPING[library];
  const url = `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/${celumLibrary}/${type}/${celumLibrary}/${type}_Changelog-${formattedDate}.txt`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.text();
      return {
        date: formatDate(date, true),
        icons: convertChangelogToIcons(data)
      };
    } else if (response.status === 404) {
      return null;
    } else {
      console.warn(`[${library}/${type}] Unexpected response status ${response.status} for ${formattedDate}`);
      return null;
    }
  } catch (error) {
    console.error(`[${library}/${type}] Error fetching changelog for ${formattedDate}:`, error);
    return null;
  }
};

const convertChangelogToIcons = data => {
  const sections = extractChangelogSections(data);

  return {
    added: parseIconList(sections.added),
    removed: parseIconList(sections.removed),
    modified: parseIconList(sections.modified)
  };
};

const parseIconList = content => {
  if (!content || content === '-') {
    return [];
  }

  return content
    .split('\n')
    .map(item => item.trim())
    .filter(item => item.length > 0);
};

const extractChangelogSections = data => {
  const addedMatch = data.match(/Added:\s*\n([\s\S]*?)(?=\n\n|$)/);
  const removedMatch = data.match(/Removed:\s*\n([\s\S]*?)(?=\n\n|$)/);
  const modifiedMatch = data.match(/Modified:\s*\n([\s\S]*?)(?=\n\n|$)/);

  return {
    added: addedMatch?.[1]?.trim(),
    removed: removedMatch?.[1]?.trim(),
    modified: modifiedMatch?.[1]?.trim()
  };
};

const updateChangelogWithMetadata = (changelog, metadata) => {
  const enrichedChangelog = { ...changelog };

  ['added', 'modified'].forEach(category => {
    if (enrichedChangelog.icons[category]) {
      enrichedChangelog.icons[category] = enrichedChangelog.icons[category].map(iconName =>
        addIconMetadata(iconName, metadata)
      );
    }
  });

  return enrichedChangelog;
};

const shouldFetchDay = date => {
  return WEEKDAYS_TO_FETCH.includes(date.getDay());
};

const fetchIconsForTheme = async (libraryType, theme, iconTypes) => {
  console.info(`  🔗 Fetching changelogs for ${theme}...`);

  try {
    const filePath = getChangelogsFilePath(libraryType);
    let libraryData = {};

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      libraryData = JSON.parse(data);
    }

    if (!libraryData[theme]) {
      libraryData[theme] = { system: [], content: [] };
    }

    const themeData = libraryData[theme];
    const lastCheck = getLastCheckDate(libraryType, theme);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const currentDate = new Date(lastCheck);
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(0, 0, 0, 0);

    let fetchedAny = false;

    // eslint-disable-next-line no-unmodified-loop-condition -- currentDate and today are mutated in place via Date setters
    while (currentDate <= today) {
      if (shouldFetchDay(currentDate)) {
        console.info(`    📅 ${formatDate(currentDate, true)}`);

        for (const type of iconTypes) {
          const changelog = await fetchChangelog(theme, currentDate, type);

          if (changelog) {
            const newIcons = getNewIcons([changelog]);

            if (newIcons.length > 0) {
              console.info(`      ✅ ${newIcons.length} icons (${type})`);

              const metadata = await fetchNewIconsMetadata(theme, type, newIcons);
              const enrichedChangelog = updateChangelogWithMetadata(changelog, metadata);

              if (!themeData[type]) {
                themeData[type] = [];
              }
              themeData[type].push(enrichedChangelog);
              fetchedAny = true;
            }
          }
        }
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (fetchedAny || today > lastCheck) {
      libraryData[theme] = themeData;
      const dir = path.dirname(filePath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(libraryData, null, 2), 'utf-8');
      setLastCheckDate(libraryType, theme, today);
    } else {
      console.info(`      ℹ️  No new changelogs`);
    }
  } catch (error) {
    console.error(`    ❌ Error: ${error.message}`);
  }
};

const fetchIconsForLibrary = async (libraryType, { themes, iconTypes }) => {
  console.info(`\n📦 ${libraryType}`);

  for (const theme of themes) {
    await fetchIconsForTheme(libraryType, theme, iconTypes);
  }
};

const main = async () => {
  console.info('🚀 Starting icon changelog fetch for all libraries...');

  for (const [libraryType, library] of Object.entries(LIBRARIES)) {
    await fetchIconsForLibrary(libraryType, library);
  }

  console.info('\n✅ Icon changelog fetch completed!');
};

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
