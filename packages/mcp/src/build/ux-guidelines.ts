import fs from 'node:fs/promises';
import { uxGuidelinesPath } from '../utilities/index.js';

const REQUIRED_GUIDELINES = ['calculator.md', 'filter.md', 'navigation.md', 'ux_pattern_forms.md'];

/** Verify authored UX metadata survives the generated metadata build. */
export const buildUxGuidelines = async (): Promise<void> => {
  let files: string[];

  try {
    files = await fs.readdir(uxGuidelinesPath);
  } catch {
    throw new Error(`UX guidelines metadata directory is missing: ${uxGuidelinesPath}`);
  }

  const missingFiles = REQUIRED_GUIDELINES.filter(file => !files.includes(file));
  if (missingFiles.length > 0) {
    throw new Error(`UX guidelines metadata is incomplete. Missing: ${missingFiles.join(', ')}`);
  }
};
