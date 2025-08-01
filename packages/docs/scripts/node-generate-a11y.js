import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Load and parse the index.json
const indexJsonPath = './dist/storybook/index.json';
const raw = await readFile(indexJsonPath, 'utf-8');
const data = JSON.parse(raw);

// Filter and group entries by importPath
const entries = Object.entries(data.entries)
  .filter(([key]) => key.startsWith('templates-'))
  .map(([, value]) => value);

const grouped = entries.reduce((acc, entry) => {
  acc[entry.importPath] = acc[entry.importPath] || [];
  acc[entry.importPath].push(entry);
  return acc;
}, {});

// For each importPath group, create the .a11y.ts file
for (const [importPath, stories] of Object.entries(grouped)) {
  // Create output file path
  const filePath = path.resolve(importPath.replace(/\.stories\.(t|j)sx?$/, '.stories.a11y.ts'));

  // Ensure directory exists
  await mkdir(path.dirname(filePath), { recursive: true });

  // Build the file content
  const tests = stories
    .map(story =>
      `
test('${story.name}', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=${story.id}&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(\`\`);
});
`.trim()
    )
    .join('\n\n');

  const content = `import { test, expect } from '@playwright/test';

${tests}
`;

  // Write the file
  await writeFile(filePath, content, 'utf-8');
  console.log(`Created: ${filePath}`);
}
