import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { optimize } from 'svgo';
import ts from 'typescript';
import prettier from 'prettier';
import FigmaExporter from 'figma-export-assets';
import {
  fileId,
  pageId,
  pageName,
  figmaThemeToFolder,
  figmaPrefixToCategory,
  internalNames,
  figmaInternalToCode,
  figmaStatusToCode
} from './config.js';

export const packageDir = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

export function selectAssets(exported, target = 'all', skippedCollections = []) {
  if (!['all', 'bundled', 'celum'].includes(target)) throw new Error(`Unknown export target: ${target}`);
  const assets = [];
  const destinations = new Set();
  const catalog = new Map();
  const requiredInternal = new Set();
  const add = (node, path) => {
    if (target !== 'all' && !path.startsWith(`${target}/`)) return;
    if (destinations.has(path)) throw new Error(`Duplicate export destination: ${path}`);
    destinations.add(path);
    assets.push({ id: node.id, path });
  };
  for (const asset of exported) {
    const separator = asset.name.lastIndexOf('/');
    const collection = asset.name.slice(0, separator);
    const prefix = Object.keys(figmaPrefixToCategory).find(key => collection.startsWith(key));
    const category = figmaPrefixToCategory[prefix];
    if (!category) continue;
    if (target === 'celum' && category === 'status') continue;
    if (target === 'bundled' && category === 'content') continue;
    const name = collection.slice(prefix.length);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) throw new Error(`Unsafe icon name: ${name}`);
    const codeName = figmaInternalToCode[name] ?? name;
    const internalName = category === 'system' && internalNames.includes(codeName) ? codeName : undefined;
    if (internalName) requiredInternal.add(`system/${name}`);
    if (target === 'bundled' && category === 'system' && !internalName) continue;
    const properties = Object.fromEntries(
      asset.name
        .slice(separator + 1)
        .split('--')
        .map(property => property.split('=').map(value => value.trim()))
    );
    if (target === 'bundled' && properties.set !== 'UI') continue;
    if (target === 'celum' && properties.set === 'UI') continue;
    if (
      Object.keys(properties).some(
        key => !['set', 'inverted', ...(category === 'status' ? ['size'] : [])].includes(key)
      )
    ) {
      throw new Error(`Unexpected variant property: ${asset.name}`);
    }
    if (!['UI', ...Object.keys(figmaThemeToFolder)].includes(properties.set))
      throw new Error(`Unknown theme: ${properties.set}`);
    if (properties.inverted && !['false', 'true'].includes(properties.inverted))
      throw new Error(`Invalid inverted variant: ${asset.name}`);
    if (category === 'status') {
      const statusName = figmaStatusToCode[name];
      if (!statusName) throw new Error(`Unconfigured status asset: ${name}`);
      if (properties.set === 'UI' && properties.size === 'sm' && properties.inverted !== 'true') {
        add(asset, `bundled/sd-status-assets/${statusName}.svg`);
      }
      continue;
    }
    catalog.set(`${category}/${name}`, collection);
    if (properties.inverted === 'true') continue;
    const folder = figmaThemeToFolder[properties.set];
    if (folder) {
      add(asset, `celum/${folder}/${category}/${name}.svg`);
      if (internalName) add(asset, `celum/${folder}/internal/${internalName}.svg`);
    } else if (internalName) {
      add(asset, `bundled/_internal/${internalName}.svg`);
    }
  }
  const folders = Object.values(figmaThemeToFolder);
  const skippedPaths = new Set();
  if (target !== 'bundled') {
    for (const [icon, collection] of catalog) {
      const missingThemes = Object.entries(figmaThemeToFolder)
        .filter(([, folder]) => !destinations.has(`celum/${folder}/${icon}.svg`))
        .map(([theme]) => theme);
      if (!missingThemes.length || requiredInternal.has(icon)) continue;
      skippedCollections.push({ collection, missingThemes });
      for (const folder of folders) skippedPaths.add(`celum/${folder}/${icon}.svg`);
      catalog.delete(icon);
    }
  }
  const required = [
    ...internalNames.flatMap(name => [
      `bundled/_internal/${name}.svg`,
      ...folders.map(folder => `celum/${folder}/internal/${name}.svg`)
    ]),
    ...Object.values(figmaStatusToCode).map(name => `bundled/sd-status-assets/${name}.svg`),
    ...[...catalog.keys()].flatMap(name => folders.map(folder => `celum/${folder}/${name}.svg`))
  ];
  const missing = required.filter(
    path => (target === 'all' || path.startsWith(`${target}/`)) && !destinations.has(path)
  );
  if (missing.length) throw new Error(`Missing export destinations: ${missing.join(', ')}`);
  return assets
    .filter(asset => !skippedPaths.has(asset.path))
    .sort((left, right) => left.path.localeCompare(right.path));
}

class IconExporter extends FigmaExporter {
  async figmaGet(endpoint, params) {
    const data = await super.figmaGet(endpoint, {
      ...params,
      ...(endpoint.startsWith('v1/images/')
        ? { version: this.version, svg_include_id: 'false', svg_simplify_stroke: 'true' }
        : {})
    });
    if (data.version) this.version = data.version;
    return data;
  }
}

export async function inventory({ token, target = 'all' } = {}) {
  if (!token) throw new Error('FIGMA_TOKEN is required (environment or packages/components/.env)');
  const exporter = new IconExporter({
    figmaPersonalToken: token,
    fileId,
    page: pageName,
    depth: 3,
    exportVariants: true,
    format: 'svg',
    batchSize: 50,
    concurrencyLimit: 5
  });
  await exporter.setAssets();
  const skippedCollections = [];
  const assets = selectAssets(exporter.assets, target, skippedCollections);
  return {
    exporter,
    report: { fileId, pageId, target, version: exporter.version, skippedCollections, assets }
  };
}

export function optimizeSvg(source, { bundled = false, status = false } = {}) {
  if (!source?.trim()) throw new Error('Empty SVG download');
  return optimize(source, {
    multipass: true,
    floatPrecision: 3,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            convertColors: {
              currentColor: bundled ? (status ? true : /^(#00358e|#000(?:000)?|black)$/i) : false,
              shorthex: false,
              shortname: false
            }
          }
        }
      },
      'removeScripts',
      ...(bundled ? ['removeDimensions'] : [])
    ]
  }).data;
}

export async function generateLibrary(source, variableName, icons, filePath) {
  const parsed = ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  if (parsed.parseDiagnostics.length) throw new Error(`Invalid TypeScript source: ${filePath}`);
  const matches = [];
  const visit = node => {
    if (ts.isVariableDeclaration(node) && node.name.getText(parsed) === variableName) matches.push(node);
    ts.forEachChild(node, visit);
  };
  visit(parsed);
  if (matches.length !== 1) throw new Error(`Expected one ${variableName} declaration`);
  const initializer = matches[0].initializer;
  if (!initializer) throw new Error(`Missing initializer: ${variableName}`);
  const object = ts.isAsExpression(initializer) ? initializer.expression : initializer;
  if (!ts.isObjectLiteralExpression(object)) throw new Error(`Expected an object literal: ${variableName}`);
  for (const property of object.properties) {
    if (
      !ts.isPropertyAssignment(property) ||
      ![ts.SyntaxKind.Identifier, ts.SyntaxKind.StringLiteral].includes(property.name.kind)
    ) {
      throw new Error(`Unexpected property in ${variableName}`);
    }
    if (!(property.name.text in icons)) throw new Error(`Refusing to remove ${variableName}/${property.name.text}`);
  }
  const entries = Object.entries(icons).sort(([left], [right]) => left.localeCompare(right));
  const replacement = `{\n${entries.map(([name, svg]) => `${JSON.stringify(name)}: ${JSON.stringify(svg)}`).join(',\n')}\n}`;
  const updated = source.slice(0, object.getStart(parsed)) + replacement + source.slice(object.end);
  return prettier.format(updated, { ...(await prettier.resolveConfig(filePath)), filepath: filePath });
}

export async function downloadAssets(report, exporter) {
  const directory = await mkdtemp(resolve(packageDir, '.figma-icons-download-'));
  const names = new Map([...new Set(report.assets.map(asset => asset.id))].map((id, index) => [id, String(index)]));
  const optimized = new Map();
  try {
    await exporter.createAssets(
      assets => assets.filter(asset => names.has(asset.id)).map(asset => ({ ...asset, name: names.get(asset.id) })),
      { assetsPath: directory, figmaPersonalToken: undefined }
    );
    return await Promise.all(
      report.assets.map(asset => {
        const bundled = asset.path.startsWith('bundled/');
        const status = asset.path.startsWith('bundled/sd-status-assets/');
        const key = `${asset.id}/${bundled}/${status}`;
        if (!optimized.has(key)) {
          optimized.set(
            key,
            readFile(resolve(directory, `${names.get(asset.id)}.svg`), 'utf8')
              .catch(() => {
                throw new Error(`Missing SVG download for Figma node ${asset.id}`);
              })
              .then(source => {
                const svg = optimizeSvg(source, { bundled, status });
                return { svg, sha256: createHash('sha256').update(svg).digest('hex') };
              })
          );
        }
        return optimized.get(key).then(result => ({ ...asset, ...result }));
      })
    );
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

export async function publishExport(report, assets, rootDir = packageDir) {
  const output = resolve(rootDir, `.figma-icons${report.target && report.target !== 'all' ? `-${report.target}` : ''}`);
  const stage = await mkdtemp(`${output}-stage-`);
  const backup = `${stage}-previous`;
  const updates = [];
  let movedOutput = false;
  let publishedOutput = false;
  try {
    for (const asset of assets) {
      if (
        !/^(bundled\/(_internal|sd-status-assets)|celum\/(vb|bbbank|sparda)\/(system|content|internal))\/[a-z0-9-]+\.svg$/.test(
          asset.path
        )
      ) {
        throw new Error(`Unsafe export destination: ${asset.path}`);
      }
      const destination = resolve(stage, asset.path);
      await mkdir(dirname(destination), { recursive: true });
      await writeFile(destination, `${asset.svg}\n`);
    }
    const sanitizedReport = { ...report, assets: assets.map(({ svg, ...asset }) => asset) };
    await writeFile(resolve(stage, 'report.json'), `${JSON.stringify(sanitizedReport, null, 2)}\n`);
    if (report.target !== 'bundled') {
      await mkdir(resolve(stage, 'celum'), { recursive: true });
      const themeReport = {
        ...sanitizedReport,
        assets: sanitizedReport.assets.filter(asset => asset.path.startsWith('celum/'))
      };
      await writeFile(resolve(stage, 'celum/report.json'), `${JSON.stringify(themeReport, null, 2)}\n`);
    }
    const libraries =
      report.target === 'celum'
        ? []
        : [
            ['_internal', 'internalIcons'],
            ['sd-status-assets', 'statusIcons']
          ];
    for (const [library, variableName] of libraries) {
      const path = resolve(
        rootDir,
        `src/components/icon/library.${library === '_internal' ? 'internal' : 'status'}.ts`
      );
      const original = await readFile(path, 'utf8');
      const icons = Object.fromEntries(
        assets
          .filter(asset => asset.path.startsWith(`bundled/${library}/`))
          .map(asset => [asset.path.split('/').at(-1).slice(0, -4), asset.svg])
      );
      const source = await generateLibrary(original, variableName, icons, path);
      updates.push({ path, original, source });
    }
    if (existsSync(output)) {
      await rename(output, backup);
      movedOutput = true;
    }
    await rename(stage, output);
    publishedOutput = true;
    for (const update of updates) {
      if ((await readFile(update.path, 'utf8')) !== update.original)
        throw new Error('Icon source changed during export; retry');
    }
    for (const update of updates) {
      if (update.source !== update.original) {
        update.written = true;
        await writeFile(update.path, update.source);
      }
    }
    await rm(backup, { recursive: true, force: true });
    return updates.filter(update => update.written).map(update => update.path);
  } catch (error) {
    for (const update of updates.filter(update => update.written)) await writeFile(update.path, update.original);
    if (publishedOutput) await rm(output, { recursive: true, force: true });
    if (movedOutput) await rename(backup, output);
    throw error;
  } finally {
    await rm(stage, { recursive: true, force: true });
  }
}

export async function main() {
  const envPath = resolve(packageDir, '.env');
  if (existsSync(envPath)) process.loadEnvFile(envPath);
  const { values } = parseArgs({
    options: { 'dry-run': { type: 'boolean' }, target: { type: 'string', default: 'all' } }
  });
  if (!['all', 'bundled', 'celum'].includes(values.target)) throw new Error(`Unknown export target: ${values.target}`);
  const { exporter, report } = await inventory({
    token: process.env.FIGMA_TOKEN,
    target: values.target
  });
  console.info(`Validated ${report.assets.length} export destinations`);
  for (const { collection, missingThemes } of report.skippedCollections) {
    console.warn(`Skipping ${collection}: missing non-inverted variants for ${missingThemes.join(', ')}`);
  }
  if (values['dry-run']) {
    const output = resolve(packageDir, '.figma-icons-dry-run');
    await mkdir(output, { recursive: true });
    await writeFile(resolve(output, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
    console.info(
      'Dry-run complete; no downloads or source updates. Report: packages/components/.figma-icons-dry-run/report.json'
    );
    return;
  }
  const assets = await downloadAssets(report, exporter);
  const changed = await publishExport(report, assets);
  console.info(
    `Export complete: ${assets.length} SVG files, ${changed.length} updated libraries. Target: ${values.target}`
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
