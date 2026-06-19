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

const normalizeCategory = category => {
  return category.toLowerCase().replace(/-icons$/, '');
};

const parseIcon = name => {
  const match = name.match(/^theming\/([^/]+)\/([^/]+)(?:\/.*)?set=([^/]+)$/);

  if (!match) {
    return null;
  }

  const category = normalizeCategory(match[1]);
  const rawIcon = match[2];
  const theme = match[3].toLowerCase();

  // brand-logos
  const hasSize = name.match(new RegExp(`size=([^-/]+)`));
  const size = hasSize?.[1] ?? 'null';
  const isLogo = name.includes('brand-logo');
  const icon = isLogo ? `${theme}-logo-${size}` : rawIcon;

  // ignore inverted icons
  const invertedMatch = name.match(/inverted=(true|false)/);
  const inverted = invertedMatch?.[1] === 'true';
  if (inverted) return null;

  return {
    category,
    icon: icon,
    theme
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

    const { icon, theme, category } = parsed;

    if (!grouped[theme]) grouped[theme] = {};
    if (!grouped[theme][category]) grouped[theme][category] = [];

    grouped[theme][category].push({
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

  for (const [theme, categories] of Object.entries(grouped)) {
    for (const [category, themeAssets] of Object.entries(categories)) {
      const themeExporter = new FigmaExporter({
        figmaPersonalToken: process.env.FIGMA_TOKEN,
        fileId: process.env.FIGMA_ICONS_FILE_ID,
        page: FIGMA_ICONS_PAGE,
        exportVariants: true,
        assetsPath: `${FIGMA_ICONS_DIR}/${theme}/${category}`,
        format: 'svg'
      });

      await themeExporter.setAssets();

      await themeExporter.createAssets(() => themeAssets);
    }
  }

  walkAndOptimize(FIGMA_ICONS_DIR);
};

fetchIcons().catch(err => {
  console.error('\n Failed to fetch icons from Figma:\n', err);
  process.exit(1);
});
