import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Get the current file's directory
const currentFilename = fileURLToPath(import.meta.url);
const currentDirname = dirname(currentFilename);

/** Base metadata directory */
export const metaDataPath = join(currentDirname, '../../metadata');

/**
 * Components package metadata — one sub-directory per sd-* component.
 * Each component dir contains: docs.md, api.json, templates.json
 */
export const componentPath = join(currentDirname, '../../metadata/packages/components');

/**
 * Styles package metadata — one sub-directory per style utility (e.g. sd-chip).
 * Each style dir contains: docs.md, classes.txt
 */
export const stylesPath = join(currentDirname, '../../metadata/packages/styles');

/**
 * Templates package metadata — one sub-directory per template (e.g. button, forms).
 * Each template dir contains: stories.ts, components.json
 */
export const templatesPackagePath = join(currentDirname, '../../metadata/packages/templates');

/** Tokens package metadata */
export const tokensPath = join(currentDirname, '../../metadata/packages/tokens');

/** Icons package metadata */
export const iconsPath = join(currentDirname, '../../metadata/packages/icons');

/** CD Toolbox guidelines */
export const cdToolboxPath = join(currentDirname, '../../metadata/cd-toolbox');

/** Root of all static AI-rule markdown files */
export const staticPath = join(currentDirname, '../../metadata/static');

/** Static AI rules for styles */
export const staticStylesPath = join(currentDirname, '../../metadata/static/styles');

/** Static AI rules for templates */
export const templatesPath = join(currentDirname, '../../metadata/static/templates');

export type Framework = 'vanilla';
