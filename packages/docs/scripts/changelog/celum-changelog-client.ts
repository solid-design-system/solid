/**
 * Client-side counterpart to `packages/tokens/scripts/celum/fetch-icons-celum.mjs`.
 *
 * The committed JSON files under `packages/tokens/data/icons-changelogs/` are only refreshed by a
 * scheduled workflow, so at Storybook runtime we fetch any days since each theme's `lastCheck`
 * directly from the Celum CDN and merge them in – this keeps the "Changelog" story up to date
 * without re-fetching everything on every docs build.
 */

export type ChangelogIcon = {
  name: string;
  technicalId: string | null;
  urlSvg: string | null;
  tags: string[];
};

export type RawChangelogIcon = string | ChangelogIcon;

export type ChangelogEntry = {
  date: string;
  icons: {
    added: RawChangelogIcon[];
    removed: RawChangelogIcon[];
    modified: RawChangelogIcon[];
  };
};

export type ThemeChangelogData = {
  lastCheck?: string;
  [iconType: string]: ChangelogEntry[] | string | undefined;
};
export type LibraryChangelogData = Record<string, ThemeChangelogData>;

export const LIBRARIES: Record<string, { themes: string[]; iconTypes: string[] }> = {
  default: { themes: ['union-investment'], iconTypes: ['content', 'system'] },
  'sd-multi-theming': { themes: ['union-investment', 'bb', 'sp', 'vb'], iconTypes: ['content', 'system'] },
  'sd-internal': { themes: ['bb', 'sp', 'vb'], iconTypes: ['internal'] }
};

export const CELUM_THEME_MAPPING: Record<string, string> = {
  'union-investment': 'union-investment',
  bb: 'bbbank',
  sp: 'sp',
  vb: 'vb'
};

const WEEKDAYS_TO_FETCH = [1, 2, 3, 4, 5];

const formatDate = (date: Date, padded = false) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return padded
    ? `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    : `${year}-${month}-${day}`;
};

const stripExt = (name: string) => name.replace(/\.[^/.]+$/, '');

const parseIconList = (content?: string) => {
  if (!content || content === '-') return [];
  return content
    .split('\n')
    .map(item => item.trim())
    .filter(item => item.length > 0);
};

const convertChangelogToIcons = (data: string) => {
  const addedMatch = data.match(/Added:\s*\n([\s\S]*?)(?=\n\n|$)/);
  const removedMatch = data.match(/Removed:\s*\n([\s\S]*?)(?=\n\n|$)/);
  const modifiedMatch = data.match(/Modified:\s*\n([\s\S]*?)(?=\n\n|$)/);

  return {
    added: parseIconList(addedMatch?.[1]?.trim()),
    removed: parseIconList(removedMatch?.[1]?.trim()),
    modified: parseIconList(modifiedMatch?.[1]?.trim())
  };
};

const fetchChangelog = async (celumTheme: string, date: Date, type: string): Promise<ChangelogEntry | null> => {
  const url = `https://celum-icons.fe.union-investment.de/_versioncontrol/${celumTheme}/${type}/${celumTheme}/${type}_Changelog-${formatDate(date)}.txt`;

  try {
    const response = await fetch(url);
    if (!response.ok) return null;

    return { date: formatDate(date, true), icons: convertChangelogToIcons(await response.text()) };
  } catch {
    return null;
  }
};

const fetchIconsMetadata = async (celumTheme: string, type: string, iconNames: string[]) => {
  if (iconNames.length === 0) return [];

  try {
    const response = await fetch(`https://celum-icons.fe.union-investment.de/${celumTheme}/${type}.json`);
    if (!response.ok) return [];

    const allData = (await response.json()) as {
      filename?: string;
      technicalId?: string;
      urlSvg?: string;
      tags?: string[];
    }[];
    return allData.filter(item =>
      iconNames.some(iconName => item.filename === iconName || stripExt(item.filename ?? '') === stripExt(iconName))
    );
  } catch {
    return [];
  }
};

const addIconMetadata = (iconName: string, metadata: Awaited<ReturnType<typeof fetchIconsMetadata>>): ChangelogIcon => {
  const match = metadata.find(
    item => item.filename === iconName || stripExt(item.filename ?? '') === stripExt(iconName)
  );

  return {
    name: iconName,
    technicalId: match?.technicalId ?? null,
    urlSvg: match?.urlSvg ?? null,
    tags: match?.tags ?? []
  };
};

const enrichEntry = async (celumTheme: string, type: string, entry: ChangelogEntry): Promise<ChangelogEntry> => {
  const namesToLookup = [...entry.icons.added, ...entry.icons.modified].filter(
    (name): name is string => typeof name === 'string'
  );
  const metadata = await fetchIconsMetadata(celumTheme, type, namesToLookup);

  const enrich = (name: RawChangelogIcon) => (typeof name === 'string' ? addIconMetadata(name, metadata) : name);

  return {
    ...entry,
    icons: {
      added: entry.icons.added.map(enrich),
      removed: entry.icons.removed,
      modified: entry.icons.modified.map(enrich)
    }
  };
};

const isEmptyEntry = (entry: ChangelogEntry) =>
  entry.icons.added.length === 0 && entry.icons.removed.length === 0 && entry.icons.modified.length === 0;

/** Fetches changelog entries published after `sinceDate` (exclusive), up to and including today. */
export const fetchRecentChangelogEntries = async (
  themeKey: string,
  type: string,
  sinceDate?: string
): Promise<ChangelogEntry[]> => {
  const celumTheme = CELUM_THEME_MAPPING[themeKey];
  if (!celumTheme) return [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentDate = sinceDate ? new Date(sinceDate) : new Date(today.getFullYear(), 0, 1);
  currentDate.setDate(currentDate.getDate() + (sinceDate ? 1 : 0));
  currentDate.setHours(0, 0, 0, 0);

  const entries: ChangelogEntry[] = [];

  while (currentDate <= today) {
    if (WEEKDAYS_TO_FETCH.includes(currentDate.getDay())) {
      const entry = await fetchChangelog(celumTheme, currentDate, type);
      if (entry && !isEmptyEntry(entry)) {
        entries.push(await enrichEntry(celumTheme, type, entry));
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return entries;
};

/** Merges committed (build-time) entries with freshly fetched ones, de-duped by date and sorted newest first. */
export const mergeChangelogEntries = (
  committed: ChangelogEntry[] = [],
  fresh: ChangelogEntry[] = []
): ChangelogEntry[] => {
  const byDate = new Map<string, ChangelogEntry>();
  [...committed, ...fresh].forEach(entry => byDate.set(entry.date, entry));
  return Array.from(byDate.values()).sort((a, b) => b.date.localeCompare(a.date));
};
