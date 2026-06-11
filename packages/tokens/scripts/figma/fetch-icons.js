import 'dotenv/config';
import FigmaExporter from 'figma-export-assets';
import { FIGMA_ICONS_PAGE, FIGMA_ICONS_DIR } from '../../scripts/config.js';

const normalizeIconName = name => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\/+/g, '/')
    .replace(/[^a-z0-9-/]/g, '');
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

  await exporter.createAssets(assets =>
    assets.map(asset => ({
      ...asset,
      name: normalizeIconName(asset.name)
    }))
  );

  //console.log('\n Icons fetched successfully from Figma\n');
  //console.log(`Output: ${FIGMA_ICONS_DIR}\n`);
};

fetchIcons().catch(err => {
  console.error('\n Failed to fetch icons from Figma:\n', err);
  process.exit(1);
});
