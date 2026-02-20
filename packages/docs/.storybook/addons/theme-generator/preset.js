import { fileURLToPath } from 'node:url';

export function previewAnnotations(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve('./preview.ts'))];
}

export function managerEntries(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve('../manager.ts'))];
}

export default {
  managerEntries,
  previewAnnotations
};
