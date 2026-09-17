import '../../../../components/src/solid-components';
import { html } from 'lit';
import { until } from 'lit/directives/until.js';
import { getThemeAttributes } from '../../../.storybook/addons/theme-generator/theme-attributes';
import {
  fetchRecentChangelogEntries,
  LIBRARIES,
  mergeChangelogEntries,
  type ChangelogEntry,
  type LibraryChangelogData,
  type RawChangelogIcon
} from '../../../scripts/changelog/celum-changelog-client';
// committed JSON, refreshed by the "Update Icons Changelogs" workflow
import defaultChangelogData from '../../../../tokens/data/icons-changelogs/default.json';
import multiThemingChangelogData from '../../../../tokens/data/icons-changelogs/sd-multi-theming.json';
import internalChangelogData from '../../../../tokens/data/icons-changelogs/sd-internal.json';

const THEME_LABELS: Record<string, string> = {
  'union-investment': 'Union Investment',
  bb: 'BBBank',
  sp: 'SP',
  vb: 'VB'
};

// Maps the CDN icon folder (used by the theme toolbar) back to the theme key used in the changelog data/scripts.
const CDN_FOLDER_TO_THEME_KEY: Record<string, string> = {
  'union-investment': 'union-investment',
  vb: 'vb',
  sp: 'sp',
  bbbank: 'bb'
};

const LIBRARY_DATA: Record<string, LibraryChangelogData> = {
  default: defaultChangelogData,
  'sd-multi-theming': multiThemingChangelogData,
  'sd-internal': internalChangelogData
};

export default {
  title: 'Components/sd-icon/Changelog',
  tags: ['skip-playwright'],
  component: 'sd-icon',
  parameters: {
    // the underlying Celum data changes on its own schedule, so a visual snapshot would always be flaky
    chromatic: { disableSnapshot: true },
    controls: { disable: true },
    docsOnly: true
  }
};

/**
 * > This list is only fully accurate up to the theme's last automated fetch (shown below); more recent
 * > changes are fetched live from Celum in your browser as a fallback. Use the theme toolbar above to switch themes.
 */

const iconLabel = (icon: RawChangelogIcon) => (typeof icon === 'string' ? icon : icon.name);
const iconTechnicalId = (icon: RawChangelogIcon) => (typeof icon === 'string' ? null : icon.technicalId);
const iconSvgUrl = (icon: RawChangelogIcon) => (typeof icon === 'string' ? null : icon.urlSvg);
const iconName = (icon: RawChangelogIcon) => iconLabel(icon).replace(/\.svg$/i, '');

const darkThemePreviewStyles = html`
  <style>
    html[data-sd-theme='sd-theme-ui-dark'] .sd-icon-changelog-preview {
      filter: brightness(0) invert(1);
    }
  </style>
`;

const renderIconRow = (icon: RawChangelogIcon, iconType: string) => html`
  <tr class="border-b border-neutral-200 last:border-0">
    <td class="w-8 py-1">
      ${iconSvgUrl(icon) ? html`<img src=${iconSvgUrl(icon)!} alt="" class="sd-icon-changelog-preview w-5 h-5" />` : ''}
    </td>
    <td class="py-1 text-sm truncate">
      <span class="text-sm font-mono font-normal">${iconType}/${iconTechnicalId(icon) ?? iconName(icon)}</span>
    </td>
    <td class="py-1 text-sm">${iconType}</td>
    <td class="py-1 text-sm truncate">${typeof icon === 'string' ? '' : icon.name}</td>
    <td class="py-1 text-right text-sm">
      ${
        iconSvgUrl(icon)
          ? html`<sd-link href=${iconSvgUrl(icon)!} download=${iconLabel(icon)} target="_blank">Download Icon</sd-link>`
          : ''
      }
    </td>
  </tr>
`;

const renderCategorySection = (label: string, icons: RawChangelogIcon[], iconType: string) => {
  if (icons.length === 0) return '';

  return html`
    <div class="mb-3 last:mb-0">
      <h4 class="text-sm font-semibold mb-1">${label} (${icons.length})</h4>
      <table class="w-full table-fixed border-collapse">
        <colgroup>
          <col class="w-8" />
          <col />
          <col class="w-20" />
          <col />
          <col class="w-32" />
        </colgroup>
        <thead>
          <tr class="text-left text-xs text-neutral-500">
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${icons.map(icon => renderIconRow(icon, iconType))}
        </tbody>
      </table>
    </div>
  `;
};

type TypedChangelogEntry = ChangelogEntry & { iconType: string };

const renderEntry = (entry: TypedChangelogEntry, isLatest: boolean) => html`
  <sd-accordion summary=${entry.date} ?open=${isLatest}>
    ${renderCategorySection('Added Icons', entry.icons.added, entry.iconType)}
    ${renderCategorySection('Modified Icons', entry.icons.modified, entry.iconType)}
    ${renderCategorySection('Removed Icons', entry.icons.removed, entry.iconType)}
  </sd-accordion>
`;

const renderThemeColumnAsync = async (library: string, themeKey: string, iconTypes: string[]) => {
  const themeData = LIBRARY_DATA[library]?.[themeKey] ?? {};
  const lastCheck = themeData.lastCheck;

  const entriesByType = await Promise.all(
    iconTypes.map(async type => {
      const committed = (themeData[type] as ChangelogEntry[]) ?? [];
      const fresh = await fetchRecentChangelogEntries(themeKey, type, lastCheck);
      return mergeChangelogEntries(committed, fresh).map(entry => ({ ...entry, iconType: type }));
    })
  );

  const entries = entriesByType
    .flat()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 20);

  return html`
    <div>
      ${darkThemePreviewStyles}
      <p class="text-sm mb-3">
        The new icons are available either via the <strong>Download Icon</strong> column on each log below or the link
        <a href="https://cdn.dam.union-investment.de/original/" target="_blank" rel="noreferrer">
          https://cdn.dam.union-investment.de/original/
        </a>
        followed by the <strong>SVG filename</strong>.
      </p>
      <h3 class="sd-headline sd-headline--size-base mb-1">${THEME_LABELS[themeKey] ?? themeKey}</h3>
      <p class="text-sm text-neutral-500 mb-3">Last automated fetch: ${lastCheck ?? 'never'}</p>
      ${
        entries.length === 0
          ? html`<p class="text-sm text-neutral-500">No changes found.</p>`
          : html`<sd-accordion-group
              >${entries.map((entry, index) => renderEntry(entry, index === 0))}</sd-accordion-group
            >`
      }
    </div>
  `;
};

const getActiveThemeKey = () => CDN_FOLDER_TO_THEME_KEY[getThemeAttributes().cdnIconFolder ?? 'union-investment'];

const renderLibraryAsync = async (library: keyof typeof LIBRARIES) => {
  const activeThemeKey = getActiveThemeKey();
  const { themes, iconTypes } = LIBRARIES[library];

  if (!themes.includes(activeThemeKey)) {
    const availableThemes =
      library === 'default' ? ['UI Light', 'UI Dark'] : themes.map(themeKey => THEME_LABELS[themeKey] ?? themeKey);

    return html`<p class="text-sm text-neutral-500">
      No ${THEME_LABELS[activeThemeKey] ?? activeThemeKey} icons in the \`${library}\` library. Switch the theme in the
      toolbar above to one of: ${availableThemes.join(', ')}.
    </p>`;
  }

  return renderThemeColumnAsync(library, activeThemeKey, iconTypes);
};

/**
 * Reflects the theme selected in the toolbar above. `default` icons are only maintained for Union Investment.
 */
export const DefaultLibrary = {
  name: 'default',
  render: () => html`${until(renderLibraryAsync('default'), html`<p>Loading changelog…</p>`)}`
};

/**
 * Reflects the theme selected in the toolbar above.
 */
export const MultiTheming = {
  name: 'sd-multi-theming',
  render: () => html`${until(renderLibraryAsync('sd-multi-theming'), html`<p>Loading changelog…</p>`)}`
};

/**
 * Reflects the theme selected in the toolbar above. `sd-internal` icons are only available for BBBank, SP and VB.
 */
export const Internal = {
  name: 'sd-internal',
  render: () => html`${until(renderLibraryAsync('sd-internal'), html`<p>Loading changelog…</p>`)}`
};
