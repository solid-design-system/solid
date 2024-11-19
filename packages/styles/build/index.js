import * as jobs from './jobs/index.js';

await jobs.runCleanup();
await jobs.runPostCSS();
await jobs.runCopyModules();
await jobs.runAdjustReadme();
