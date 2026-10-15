// Shared renderers for the three MDX changelog pages.
// @ts-nocheck
import '../../../../components/src/solid-components';
import { html, render } from 'lit';
import { until } from 'lit/directives/until.js';
import { ref } from 'lit/directives/ref.js';
import { getThemeAttributes } from '../../../.storybook/addons/theme-generator/theme-attributes';
import { CDN_FOLDER_TO_THEME_KEY, LIBRARIES, THEME_LABELS } from '../../../scripts/celum/celum-changelog';
import defaultChangelogData from '../../../../tokens/data/celum-changelogs/default.json';
import multiThemingChangelogData from '../../../../tokens/data/celum-changelogs/sd-multi-theming.json';
import internalChangelogData from '../../../../tokens/data/celum-changelogs/sd-internal.json';

// Theme + library lookups
const LIBRARY_DATA = {
  default: defaultChangelogData,
  'sd-multi-theming': multiThemingChangelogData,
  'sd-internal': internalChangelogData
};

// Icon data helpers
const iconLabel = icon => (typeof icon === 'string' ? icon : icon.name);
const iconTechnicalId = icon => (typeof icon === 'string' ? null : icon.technicalId);
const iconSvgUrl = icon => (typeof icon === 'string' ? null : icon.urlSvg);
const iconName = icon => iconLabel(icon).replace(/\.svg$/i, '');
const iconSvgFileName = icon => {
  const url = iconSvgUrl(icon);
  return url ? url.split('/').pop() : iconLabel(icon);
};
const iconDownloadFileName = icon => iconSvgFileName(icon).replace(/^\d+_/, '');

const formatLastCheckDate = date => (date ? new Intl.DateTimeFormat('de-DE').format(new Date(date)) : 'never');

// Selection state
const selectedIcons = new Map();
const selectedDateGroups = new Set();
const selectedThemeKey = { current: null };

const selectionKey = (dateGroup, url, iconType) => `${dateGroup}||${iconType}||${url}`;
const resetSelectionForTheme = currentThemeKey => {
  if (!currentThemeKey || currentThemeKey === selectedThemeKey.current) return;
  selectedThemeKey.current = currentThemeKey;
  selectedIcons.clear();
  selectedDateGroups.clear();
  updateSelectedDownloadButton();
};

// Select icons handler: keeps checkbox UI, selection state and download button in sync
const applyCheckboxState = (checkbox, isChecked, isIndeterminate = false) => {
  if (!checkbox) return;

  checkbox.checked = isChecked;
  checkbox.indeterminate = isIndeterminate;
};

const syncSelectionUi = () => {
  const rowCheckboxes = document.querySelectorAll('sd-checkbox[data-icon-url]');
  rowCheckboxes.forEach(checkbox => {
    const url = checkbox.dataset.iconUrl;
    const group = checkbox.dataset.dateGroup;
    const iconType = checkbox.dataset.iconType;
    applyCheckboxState(checkbox, !!url && selectedIcons.has(selectionKey(group, url, iconType)));
  });

  // Exclude row checkboxes, which also carry data-date-group for grouping purposes.
  const dateCheckboxes = document.querySelectorAll('sd-checkbox[data-date-group]:not([data-icon-url])');
  dateCheckboxes.forEach(checkbox => {
    const group = checkbox.dataset.dateGroup;
    const groupIcons = [...document.querySelectorAll(`sd-checkbox[data-icon-url][data-date-group="${group}"]`)].map(
      item => ({ url: item.dataset.iconUrl, iconType: item.dataset.iconType })
    );
    const selectedCount = groupIcons.filter(({ url, iconType }) =>
      selectedIcons.has(selectionKey(group, url, iconType))
    ).length;
    const isFullySelected = groupIcons.length > 0 && selectedCount === groupIcons.length;
    const isPartiallySelected = selectedCount > 0 && !isFullySelected;
    applyCheckboxState(checkbox, isFullySelected || selectedDateGroups.has(group), isPartiallySelected);
  });
};

const updateSelectedDownloadButton = () => {
  const button = document.getElementById('icon-changelog-download-selected-button');
  if (!button) return;

  const count = selectedIcons.size;
  button.textContent = `Download Icons (${count})`;
  button.disabled = count === 0;
  syncSelectionUi();
};

const syncDateSelectionState = (group, icons) => {
  const keys = new Set(
    (icons ?? [])
      .map(({ icon, iconType }) => {
        const url = iconSvgUrl(icon);
        return url ? selectionKey(group, url, iconType) : null;
      })
      .filter(Boolean)
  );
  if (!group || !keys.size) return;

  const isFullySelected = [...keys].every(key => selectedIcons.has(key));
  if (isFullySelected) {
    selectedDateGroups.add(group);
  } else {
    selectedDateGroups.delete(group);
  }
};

const toggleIconSelection = (icon, checked, dateGroup, groupIcons, date, iconType) => {
  const url = iconSvgUrl(icon);
  if (!url) return;

  const key = selectionKey(dateGroup, url, iconType);
  if (checked) {
    selectedIcons.set(key, { url, category: dateGroup.split('::').pop(), date, iconType });
  } else {
    selectedIcons.delete(key);
  }

  if (dateGroup) {
    syncDateSelectionState(dateGroup, groupIcons);
  }

  updateSelectedDownloadButton();
};

const getDateSelectionState = (icons, dateGroup) => {
  const keys = icons
    .map(({ icon, iconType }) => {
      const url = iconSvgUrl(icon);
      return url ? selectionKey(dateGroup, url, iconType) : null;
    })
    .filter(Boolean);
  if (!keys.length) return { checked: false, indeterminate: false };

  const selectedCount = keys.filter(key => selectedIcons.has(key)).length;
  return {
    checked: selectedCount === keys.length,
    indeterminate: selectedCount > 0 && selectedCount < keys.length
  };
};

const toggleDateSelection = (icons, checked, dateGroup, category, date) => {
  const iconsByKey = new Map();
  icons.forEach(({ icon, iconType }) => {
    const url = iconSvgUrl(icon);
    if (url) {
      iconsByKey.set(selectionKey(dateGroup, url, iconType), { url, iconType });
    }
  });

  if (!iconsByKey.size) return;

  if (checked) {
    iconsByKey.forEach(({ url, iconType }, key) => selectedIcons.set(key, { url, category, date, iconType }));
    if (dateGroup) selectedDateGroups.add(dateGroup);
  } else {
    iconsByKey.forEach((_, key) => selectedIcons.delete(key));
    if (dateGroup) selectedDateGroups.delete(dateGroup);
  }

  syncSelectionUi();
  updateSelectedDownloadButton();
};

// Download handler
const downloadFile = async (url, filename) => {
  const response = await fetch(url);
  if (!response.ok) return;

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = objectUrl;
  anchor.download = filename;
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(objectUrl);
};

const downloadSelectedIcons = async () => {
  if (selectedIcons.size === 0) return;

  const selectedFiles = [
    ...new Map(
      [...selectedIcons.values()]
        .filter(({ category }) => ['added', 'modified'].includes(category))
        .map(file => [file.url, file])
    ).values()
  ];

  for (const { url } of selectedFiles) {
    await downloadFile(url, decodeURIComponent(url.split('/').pop() ?? 'icon.svg').replace(/^\d+_/, ''));
  }
};

// Turns icons white for ui-dark theme
const darkThemePreviewStyles = html`<style>
  html[data-sd-theme='sd-theme-ui-dark'] .sd-icon-changelog-preview {
    filter: brightness(0) invert(1);
  }

  .sd-icon-changelog sd-accordion::part(content__slot) {
    padding-block: 0.5rem;
  }

  .sd-icon-changelog table {
    width: calc(100% + 2rem);
    margin-inline: -1rem;
  }

  .sd-icon-changelog th,
  .sd-icon-changelog td {
    padding-inline: 1rem;
  }
</style>`;

// Accordion: single icon row
const renderIconRow = (icon, iconType, dateGroup, groupIcons, date) => {
  const identifier = `${iconType}/${iconTechnicalId(icon) ?? iconName(icon)}`;
  const isRemoved = dateGroup.endsWith('::removed');

  return html` <tr class="border-b border-neutral-400 last:border-0">
    ${
      isRemoved
        ? ''
        : html`<td class="w-7 py-2.5">
            <sd-checkbox
              size="sm"
              aria-label="Select ${identifier}"
              data-icon-url=${iconSvgUrl(icon) ?? ''}
              data-icon-type=${iconType}
              data-date-group=${dateGroup}
              ?checked=${selectedIcons.has(selectionKey(dateGroup, iconSvgUrl(icon), iconType))}
              @sd-change=${event => toggleIconSelection(icon, event.target.checked, dateGroup, groupIcons, date, iconType)}
            ></sd-checkbox>
          </td>`
    }
    ${
      isRemoved
        ? ''
        : html`<td class="w-8 py-2.5">
            ${
              iconSvgUrl(icon)
                ? html`<div class="w-5 h-5">
                    <img
                      src=${iconSvgUrl(icon)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      class="sd-icon-changelog-preview w-full h-full"
                    />
                  </div>`
                : ''
            }
          </td>`
    }
    <td class="py-2.5 text-sm truncate">
      <span class="text-sm font-mono font-normal">${identifier}</span>
    </td>
    ${
      isRemoved
        ? ''
        : html`<td class="py-2.5 text-sm truncate">${iconSvgFileName(icon)}</td>
            <td class="py-2.5 pr-2 text-right text-sm">
              ${
                iconSvgUrl(icon)
                  ? html`<sd-tooltip content="Download Icon" trigger="hover focus" close-trigger="hover focus escape">
                      <button
                        class="sd-interactive sd-interactive--reset inline-flex text-primary"
                        aria-label="Download ${identifier}"
                        @click=${() => downloadFile(iconSvgUrl(icon), iconDownloadFileName(icon))}
                      >
                        <sd-icon class="w-5 h-5" name="system/download"></sd-icon>
                      </button>
                    </sd-tooltip>`
                  : ''
              }
            </td>`
    }
  </tr>`;
};

// Accordion: categories (Added/Modified/Removed)
const renderCategorySection = (label, icons, dateGroup, categoryKey, date) => {
  if (icons.length === 0) return '';

  const categoryGroupKey = `${dateGroup}::${categoryKey}`;
  const isRemoved = categoryKey === 'removed';
  const { checked: allSelected, indeterminate: partiallySelected } = getDateSelectionState(icons, categoryGroupKey);

  return html`<div class="mb-3 last:mb-0">
    <table class="w-full table-fixed border-collapse" aria-label=${label}>
      <colgroup>
        ${isRemoved ? '' : html`<col class="w-7" />`} ${isRemoved ? '' : html`<col class="w-8" />`}
        <col />
        ${isRemoved ? '' : html`<col />`} ${isRemoved ? '' : html`<col class="w-32" />`}
      </colgroup>
      <thead>
        <tr>
          ${
            isRemoved
              ? ''
              : html`<th class="pb-2" scope="col">
                  <sd-checkbox
                    size="sm"
                    aria-label="Select all ${label}"
                    data-date-group=${categoryGroupKey}
                    ?checked=${allSelected}
                    ?indeterminate=${partiallySelected}
                    @sd-change=${event =>
                      toggleDateSelection(icons, event.target.checked, categoryGroupKey, categoryKey, date)}
                  >
                    <span class="sr-only">Select all ${label}</span>
                  </sd-checkbox>
                </th>`
          }
          <th colspan=${isRemoved ? 1 : 4} class="pb-2 text-left" scope="col">
            <span class="text-sm font-semibold">${label} (${icons.length})</span>
          </th>
        </tr>
      </thead>
      <tbody>
        ${icons.map(({ icon, iconType }) => renderIconRow(icon, iconType, categoryGroupKey, icons, date))}
      </tbody>
    </table>
  </div>`;
};

const renderEntryContents = (entry, container) => {
  if (!container || container.dataset.rendered) return;

  container.dataset.rendered = 'true';
  const dateGroupKey = entry.date;

  render(
    html`
      ${renderCategorySection('Added Icons', entry.icons.added, dateGroupKey, 'added', entry.date)}
      ${renderCategorySection('Modified Icons', entry.icons.modified, dateGroupKey, 'modified', entry.date)}
      ${renderCategorySection('Removed Icons', entry.icons.removed, dateGroupKey, 'removed', entry.date)}
    `,
    container
  );
};

// Accordion: date entry
const renderEntry = (entry, isLatest) => {
  return html`<sd-accordion
    ?open=${isLatest}
    @sd-show=${event => renderEntryContents(entry, event.currentTarget.querySelector('[data-entry-content]'))}
  >
    <h2 slot="summary" class="text-base font-normal">${entry.date}</h2>
    <div data-entry-content ${ref(element => isLatest && renderEntryContents(entry, element))}></div>
  </sd-accordion>`;
};

// Fetches changelog entries for the active theme
const renderLibraryAsync = async library => {
  const activeThemeKey = CDN_FOLDER_TO_THEME_KEY[getThemeAttributes().cdnIconFolder ?? 'union-investment'];
  resetSelectionForTheme(`${library}:${activeThemeKey}:${document.documentElement.dataset.sdTheme}`);
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
  const entriesByType = iconTypes.map(type => (themeData[type] ?? []).map(entry => ({ ...entry, iconType: type })));
  const entriesByDate = new Map();
  entriesByType.flat().forEach(({ date, icons, iconType }) => {
    if (!entriesByDate.has(date)) {
      entriesByDate.set(date, { date, icons: { added: [], modified: [], removed: [] } });
    }
    Object.entries(icons).forEach(([category, categoryIcons]) => {
      entriesByDate.get(date).icons[category].push(...categoryIcons.map(icon => ({ icon, iconType })));
    });
  });
  const entries = Array.from(entriesByDate.values()).sort((a, b) => b.date.localeCompare(a.date));
  return html`<div class="sd-icon-changelog">
    ${darkThemePreviewStyles}
    <div
      class="${document.documentElement.dataset.sdTheme === 'sd-theme-ui-dark' ? 'sd-theme-ui-light text-black' : ''}"
    >
      <p class="text-sm mb-3">
        The new icons are available to download on each log below or the link
        <sd-link href="https://cdn.dam.union-investment.de/original/" target="_blank"
          >https://cdn.dam.union-investment.de/original/{icon_filename.svg}</sd-link
        >
        where <i>icon_filename.svg</i> is the icon's SVG filename (e.g. <code>1013585_upload.svg</code>).
      </p>
      <div class="mb-4 flex items-end justify-between gap-3">
        <p class="text-sm mb-0 font-bold">Last automated fetch: ${formatLastCheckDate(themeData.lastCheck)}</p>
        <sd-button
          id="icon-changelog-download-selected-button"
          variant="primary"
          size="sm"
          ?disabled=${selectedIcons.size === 0}
          @click=${downloadSelectedIcons}
        >
          Download Icons (${selectedIcons.size})
        </sd-button>
      </div>
    </div>

    <div class="sd-container--variant-white">
      ${
        entries.length === 0
          ? html`<p class="text-sm text-neutral-500">No changes found.</p>`
          : html`<sd-accordion-group
              >${entries.map((entry, index) => renderEntry(entry, index === 0))}</sd-accordion-group
            >`
      }
    </div>
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
