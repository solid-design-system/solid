import 'dotenv/config';
import FigmaExporter from 'figma-export-assets';
import { optimize } from 'svgo';
import fs from 'fs';
import path from 'path';
import { FIGMA_ICONS_PAGE, FIGMA_ICONS_DIR } from '../../scripts/config.js';

const normalizeIconName = name => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\/+/g, '/')
    .replace(/[^a-z0-9-/]/g, '');
};

const parseIcon = name => {
  const match = name.match(/theming\/icons\/([^/]+)\/set=([^/]+)/);

  if (!match) return null;

  return {
    icon: match[1],
    theme: match[2]
  };
};

const optimizeSvgFile = filePath => {
  const svg = fs.readFileSync(filePath, 'utf8');

  const result = optimize(svg, {
    path: filePath,
    multipass: true,
    plugins: [
      'preset-default',
      'removeDimensions',
      {
        name: 'removeAttrs',
        params: {
          attrs: '(data-name|id)'
        }
      }
    ]
  });

  fs.writeFileSync(filePath, result.data);
};

const walkAndOptimize = dir => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkAndOptimize(fullPath);
      continue;
    }

    if (file.endsWith('.svg')) {
      optimizeSvgFile(fullPath);
    }
  }
};

const groupByTheme = assets => {
  const grouped = {};

  for (const asset of assets) {
    const parsed = parseIcon(asset.name);
    if (!parsed) continue;

    const { icon, theme } = parsed;

    if (!grouped[theme]) grouped[theme] = [];

    grouped[theme].push({
      ...asset,
      name: normalizeIconName(icon)
    });
  }
  return grouped;
};

const fetchIcons = async () => {
  const exporter = new FigmaExporter({
    figmaPersonalToken: process.env.FIGMA_TOKEN,
    fileId: process.env.FIGMA_ICONS_FILE_ID,
    page: FIGMA_ICONS_PAGE,
    exportVariants: true,
    assetsPath: FIGMA_ICONS_DIR,
    format: 'svg'
  });

  await exporter.setAssets();

  const grouped = groupByTheme(exporter.assets);

  for (const [theme, themeAssets] of Object.entries(grouped)) {
    const themeExporter = new FigmaExporter({
      figmaPersonalToken: process.env.FIGMA_TOKEN,
      fileId: process.env.FIGMA_ICONS_FILE_ID,
      page: FIGMA_ICONS_PAGE,
      exportVariants: true,
      assetsPath: `${FIGMA_ICONS_DIR}/${theme}`,
      format: 'svg'
    });

    await themeExporter.setAssets();

    await themeExporter.createAssets(() => themeAssets);
  }

  walkAndOptimize(FIGMA_ICONS_DIR);
};

fetchIcons().catch(err => {
  console.error('\n Failed to fetch icons from Figma:\n', err);
  process.exit(1);
});
