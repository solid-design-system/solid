import type SdOptGroup from '../optgroup/optgroup.js';
import type SdOption from '../option/option.js';

/**
 * Get a list of all assigned elements for a given slot
 * @param slot The slot to query
 * @returns Flattened list of assigned elements
 */
export const getAssignedElementsForSlot = (slot: HTMLSlotElement) =>
  Array.from(slot.assignedElements({ flatten: true })) as HTMLElement[];

/**
 * Retrieves the option or nested options from the provided HTMLElement.
 *
 * @param item - The HTMLElement representing the option or containing nested options.
 * @returns The found sd-option(s)
 */
export const getOptionOrNestedOptions = (item: HTMLElement): SdOption | SdOption[] =>
  item.tagName.toLocaleLowerCase() === 'sd-option'
    ? (item as SdOption)
    : Array.from(item.querySelectorAll<SdOption>(':scope > sd-option'));

/**
 * Check if an item is a sd-optgroup
 * @param item The item to check for
 * @returns True if the item is a SdOptgroup, false otherwise
 */
export const isOptgroup = (item: HTMLElement): item is SdOptGroup => item.tagName.toLocaleLowerCase() === 'sd-optgroup';

/**
 * Get a list of only Option elements
 * @param items List of items to check for
 * @returns New array of all found sd-nav-items
 */
export const getAllOptions = (items: HTMLElement[]) => items.map(getOptionOrNestedOptions);

/**
 * Get a list of only Optgroup elements
 * @param items List of items to check for
 * @returns New array of all found sd-optgroup's
 */
export const filterOnlyOptgroups = (items: HTMLElement[]) => items.filter(isOptgroup);

/**
 * Normalize a string by removing accents and converting to lowercase
 * @param str The string to normalize
 * @returns The normalized string
 */
export const normalizeString = (str: string) =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
