import fs from 'fs/promises';
import { globby } from 'globby';
import * as prettier from 'prettier';

(async () => {
  const files = await globby(['./dist/**/*.css', '!./dist/index.css']);
  const structure = files.reduce((acc, file) => {
    const [category, module] = file.replace('./dist/', '').replace('.css', '').split('/');
    acc[category] = acc[category] || [];
    if (module) acc[category].push(module);
    return acc;
  }, {});

  const markdown =
    Object.entries(structure)
      .map(([category, modules]) => `- ${category}.css\n  ${modules.map(m => `- ${m}.css`).join('\n  ')}`)
      .join('\n') + '\n';

  const formattedMarkdown = await prettier.format(markdown, { parser: 'markdown' });

  const readme = await fs.readFile('./README.md', 'utf-8');
  const updatedReadme = readme.replace(
    /<!-- BEGIN INLINE COMMENT -->[\s\S]*<!-- END INLINE COMMENT -->/,
    `<!-- BEGIN INLINE COMMENT -->\n\n${formattedMarkdown}\n<!-- END INLINE COMMENT -->`
  );

  await fs.writeFile('./README.md', updatedReadme);
})();
