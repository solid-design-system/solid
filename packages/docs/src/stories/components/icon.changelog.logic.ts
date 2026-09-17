// Shared renderers for the three MDX changelog pages.
// @ts-nocheck
import '../../../../components/src/solid-components';
import { html } from 'lit';
import { until } from 'lit/directives/until.js';
import { getThemeAttributes } from '../../../.storybook/addons/theme-generator/theme-attributes';
import {
  fetchRecentChangelogEntries,
  LIBRARIES,
  mergeChangelogEntries
} from '../../../scripts/changelog/celum-changelog-client';
import defaultChangelogData from '../../../../tokens/data/icons-changelogs/default.json';
import multiThemingChangelogData from '../../../../tokens/data/icons-changelogs/sd-multi-theming.json';
import internalChangelogData from '../../../../tokens/data/icons-changelogs/sd-internal.json';

const THEME_LABELS = { 'union-investment': 'Union Investment', bb: 'BBBank', sp: 'SP', vb: 'VB' };
const CDN_FOLDER_TO_THEME_KEY = { 'union-investment': 'union-investment', vb: 'vb', sp: 'sp', bbbank: 'bb' };
const LIBRARY_DATA = {
  default: defaultChangelogData,
  'sd-multi-theming': multiThemingChangelogData,
  'sd-internal': internalChangelogData
};

const iconLabel = icon => (typeof icon === 'string' ? icon : icon.name);
const iconTechnicalId = icon => (typeof icon === 'string' ? null : icon.technicalId);
const iconSvgUrl = icon => (typeof icon === 'string' ? null : icon.urlSvg);
const iconName = icon => iconLabel(icon).replace(/\.svg$/i, '');
const iconSvgFileName = icon => {
  const url = iconSvgUrl(icon);
  return url ? url.split('/').pop() : iconLabel(icon);
};

const darkThemePreviewStyles = html`<style>
  html[data-sd-theme='sd-theme-ui-dark'] .sd-icon-changelog-preview {
    filter: brightness(0) invert(1);
  }
</style>`;

const renderIconRow = (icon, iconType) =>
  html` <tr class="border-b border-neutral-200 last:border-0">
    <td class="w-8 py-1">
      ${iconSvgUrl(icon) ? html`<img src=${iconSvgUrl(icon)} alt="" class="sd-icon-changelog-preview w-5 h-5" />` : ''}
    </td>
    <td class="py-1 text-sm truncate">
      <span class="text-sm font-mono font-normal">${iconType}/${iconTechnicalId(icon) ?? iconName(icon)}</span>
    </td>
    <td class="py-1 text-sm truncate">${iconSvgFileName(icon)}</td>
    <td class="py-1 text-right text-sm">
      ${iconSvgUrl(icon) ? html`<sd-link href=${iconSvgUrl(icon)} download=${iconLabel(icon)} target="_blank">Download Icon</sd-link>` : ''}
    </td>
  </tr>`;

const renderCategorySection = (label, icons, iconType) => {
  if (icons.length === 0) return '';
  return html`<div class="mb-3 last:mb-0">
    <h4 class="text-sm font-semibold mb-1">${label} (${icons.length})</h4>
    <table class="w-full table-fixed border-collapse">
      <colgroup>
        <col class="w-8" />
        <col />
        <col />
        <col class="w-32" />
      </colgroup>
      <thead>
        <tr>
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
  </div>`;
};

const renderEntry = (entry, isLatest) =>
  html`<sd-accordion ?open=${isLatest}>
    <h2 slot="summary" class="text-base font-normal">${entry.date}</h2>
    ${renderCategorySection('Added Icons', entry.icons.added, entry.iconType)}
    ${renderCategorySection('Modified Icons', entry.icons.modified, entry.iconType)}
    ${renderCategorySection('Removed Icons', entry.icons.removed, entry.iconType)}
  </sd-accordion>`;

const renderLibraryAsync = async library => {
  const activeThemeKey = CDN_FOLDER_TO_THEME_KEY[getThemeAttributes().cdnIconFolder ?? 'union-investment'];
  const { themes, iconTypes } = LIBRARIES[library];
  if (!themes.includes(activeThemeKey)) {
    const availableThemes =
      library === 'default' ? ['UI Light', 'UI Dark'] : themes.map(theme => THEME_LABELS[theme] ?? theme);
    return html`<p class="text-sm text-neutral-500">
      No ${THEME_LABELS[activeThemeKey] ?? activeThemeKey} icons in the <code>${library}</code> library. Switch the
      theme in the toolbar above to one of: ${availableThemes.join(', ')}.
    </p>`;
  }
  const themeData = LIBRARY_DATA[library]?.[activeThemeKey] ?? {};
  const entriesByType = await Promise.all(
    iconTypes.map(async type => {
      const committed = themeData[type] ?? [];
      const fresh = await fetchRecentChangelogEntries(activeThemeKey, type, themeData.lastCheck);
      return mergeChangelogEntries(committed, fresh).map(entry => ({ ...entry, iconType: type }));
    })
  );
  const entries = entriesByType
    .flat()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 20);
  return html`<div>
    ${darkThemePreviewStyles}
    <p class="text-sm mb-3">
      The new icons are available either via the <strong>Download Icon</strong> on each log below or the link
      <sd-link href="https://cdn.dam.union-investment.de/original/" target="_blank"
        >https://cdn.dam.union-investment.de/original/</sd-link
      >{icon-filename.svg}.
    </p>
    <p class="text-sm text-neutral-500 mb-3">Last automated fetch: ${themeData.lastCheck ?? 'never'}</p>
    ${
      entries.length === 0
        ? html`<p class="text-sm text-neutral-500">No changes found.</p>`
        : html`<sd-accordion-group
            >${entries.map((entry, index) => renderEntry(entry, index === 0))}</sd-accordion-group
          >`
    }
  </div>`;
};

export const defaultLibrary = {
  render: () => html`${until(renderLibraryAsync('default'), html`<p>Loading changelog…</p>`)}`
};
export const multiThemingLibrary = {
  render: () => html`${until(renderLibraryAsync('sd-multi-theming'), html`<p>Loading changelog…</p>`)}`
};
export const internalLibrary = {
  render: () => html`${until(renderLibraryAsync('sd-internal'), html`<p>Loading changelog…</p>`)}`
};
