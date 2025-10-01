import { readFile, writeFile, mkdir, access } from 'fs/promises';
import path from 'path';

// Load and parse the index.json
const indexJsonPath = './dist/storybook/index.json';
const raw = await readFile(indexJsonPath, 'utf-8');
const data = JSON.parse(raw);

// Filter and group entries by importPath
const entries = Object.entries(data.entries)
  .filter(
    ([key, value]) =>
      (key.startsWith('components-') || key.startsWith('templates-')) &&
      !value.id.includes('--docs') &&
      !value.id.includes('--combination')
  )
  .map(([, value]) => value);

const grouped = entries.reduce((acc, entry) => {
  acc[entry.importPath] = acc[entry.importPath] || [];
  acc[entry.importPath].push(entry);
  return acc;
}, {});

const fileExists = async filePath => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

const extractStoryIds = content => {
  const regex = /id=([^&']+)/g;
  const ids = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    ids.push(match[1]);
  }
  return ids;
};

const shouldSkipStory = story => {
  return story.tags && story.tags.includes('skip-playwright');
};

const generateTestContent = stories => {
  const tests = stories
    .map(story => {
      return `test('${story.name}', async ({ page }) => {
    await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=${story.id}&viewMode=story');
    await expect(page.locator('body')).toMatchAriaSnapshot(\`\`);
  });`.trim();
    })
    .join('\n\n');

  return `import { test, expect } from '@playwright/test';

  ${tests}
  `;
};

const logChanges = (filePath, newStoryIds, removedStoryIds, validStories, skippedStories, isNewFile = false) => {
  if (isNewFile) {
    console.log(`\x1b[33mCreating:\x1b[0m ${filePath}`);
  } else {
    if (newStoryIds.length > 0) {
      console.log(`\x1b[33mAdding:\x1b[0m ${newStoryIds.length} new stories to ${filePath}`);
      newStoryIds.forEach(id => {
        const story = validStories.find(s => s.id === id);
        console.log(` + ${story.name} (${id})`);
      });
    }
    if (removedStoryIds.length > 0) {
      console.log(`\x1b[31mRemoving:\x1b[0m ${removedStoryIds.length} stories from ${filePath}`);
    }
  }

  if (skippedStories.length > 0) {
    console.log(`\x1b[90mSkipped:\x1b[0m ${skippedStories.length} stories with skip-playwright tag`);
    skippedStories.forEach(story => {
      console.log(`   - ${story.name} (${story.id})`);
    });
  }
};

// For each importPath group, create or update the .a11y.ts file
for (const [importPath, stories] of Object.entries(grouped)) {
  if (importPath.endsWith('.mdx')) {
    continue;
  }

  const validStories = stories.filter(story => !shouldSkipStory(story));
  if (validStories.length === 0) {
    console.log(`\x1b[90mSkipping:\x1b[0m ${importPath} - all stories have skip-playwright tag`);
    continue;
  }

  const filePath = path.resolve(importPath.replace(/\.stories\.(t|j)sx?$/, '.a11y.ts'));
  const currentStoryIds = validStories.map(story => story.id);
  const exists = await fileExists(filePath);
  const skippedStories = stories.filter(shouldSkipStory);

  if (exists) {
    // Check for changes in existing file
    const existingContent = await readFile(filePath, 'utf-8');
    const existingStoryIds = extractStoryIds(existingContent);
    const newStoryIds = currentStoryIds.filter(id => !existingStoryIds.includes(id));
    const removedStoryIds = existingStoryIds.filter(id => !currentStoryIds.includes(id));

    // Skip if no changes
    if (newStoryIds.length === 0 && removedStoryIds.length === 0) {
      continue;
    }

    logChanges(filePath, newStoryIds, removedStoryIds, validStories, skippedStories);
  } else {
    // Creating new file
    await mkdir(path.dirname(filePath), { recursive: true });
    logChanges(filePath, [], [], validStories, skippedStories, true);
  }

  await writeFile(filePath, generateTestContent(validStories), 'utf-8');
}
