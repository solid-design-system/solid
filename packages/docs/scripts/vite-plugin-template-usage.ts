import type { Package } from 'custom-elements-manifest';
import type { Plugin } from 'vite';
import MagicString from 'magic-string';
import { analyzeTemplateSource, getDeclarationMap, type DeclarationMap } from './storybook/template-usage-analyzer.js';

const COMPONENTS_VIRTUAL_MODULE_ID = 'virtual:vite-plugin-cem/custom-elements-manifest';
const STYLES_VIRTUAL_MODULE_ID = 'virtual:vite-plugin-solid-styles/custom-elements-manifest';
const TEMPLATE_STORY_PATTERN = /\/src\/stories\/templates\/.*\.stories\.ts$/;
const MANIFEST_SOURCE_PATTERN = /\/packages\/(components|styles)\/src\//;
const DEFAULT_EXPORT_PATTERN = /export\s+default\s*\{/;

type ManifestDeclarations = {
  componentDeclarations: DeclarationMap;
  styleDeclarations: DeclarationMap;
};

const parseVirtualModuleJson = (code: string): Package => JSON.parse(code.replace(/^export default /, ''));

/**
 * Statically analyzes every `packages/docs/src/stories/templates/**\/*.stories.ts` file and injects
 * the resulting "utilized components/styles" data into the story's `parameters.templateUsageData`,
 * so `scripts/storybook/template-usage.ts` no longer has to scan the rendered DOM at runtime.
 */
export default function vitePluginTemplateUsage(): Plugin {
  let manifestsPromise: Promise<ManifestDeclarations> | null = null;

  // Typed loosely on purpose: `this` inside the `transform` hook is Rollup's `TransformPluginContext`,
  // which isn't re-exported by `vite` and pulling in `rollup` as an explicit dependency just for this
  // type isn't worth it.
  const loadManifest = async (ctx: any, virtualModuleId: string): Promise<Package> => {
    const resolved = await ctx.resolve(virtualModuleId);
    if (!resolved) {
      throw new Error(`[vite-plugin-template-usage] Unable to resolve "${virtualModuleId}"`);
    }

    const moduleInfo = await ctx.load({ id: resolved.id });
    return parseVirtualModuleJson(moduleInfo.code ?? '');
  };

  const getManifestDeclarations = (ctx: any): Promise<ManifestDeclarations> => {
    if (!manifestsPromise) {
      manifestsPromise = (async () => {
        const [componentsManifest, stylesManifest] = await Promise.all([
          loadManifest(ctx, COMPONENTS_VIRTUAL_MODULE_ID),
          loadManifest(ctx, STYLES_VIRTUAL_MODULE_ID)
        ]);

        return {
          componentDeclarations: getDeclarationMap(componentsManifest),
          styleDeclarations: getDeclarationMap(stylesManifest)
        };
      })();
    }

    return manifestsPromise;
  };

  return {
    name: 'vite-plugin-template-usage',
    enforce: 'pre',
    async transform(code, id) {
      if (!TEMPLATE_STORY_PATTERN.test(id)) {
        return undefined;
      }

      const match = DEFAULT_EXPORT_PATTERN.exec(code);
      if (!match) {
        this.warn(`[vite-plugin-template-usage] Skipping ${id}: expected an "export default { ... }" object literal.`);
        return undefined;
      }

      const { componentDeclarations, styleDeclarations } = await getManifestDeclarations(this);
      const usageData = analyzeTemplateSource(code, id, componentDeclarations, styleDeclarations);

      const magicString = new MagicString(code);
      magicString.overwrite(match.index, match.index + match[0].length, 'const __sdTemplateMeta = {');
      magicString.append(
        `\nexport default __sdTemplateMeta;\n` +
          `__sdTemplateMeta.parameters = { ...__sdTemplateMeta.parameters, templateUsageData: ${JSON.stringify(usageData)} };\n`
      );

      return {
        code: magicString.toString(),
        map: magicString.generateMap({ hires: true })
      };
    },
    handleHotUpdate({ file, server }) {
      if (!MANIFEST_SOURCE_PATTERN.test(file)) {
        return undefined;
      }

      manifestsPromise = null;

      [...server.moduleGraph.idToModuleMap.values()]
        .filter(mod => mod.id && TEMPLATE_STORY_PATTERN.test(mod.id))
        .forEach(mod => server.reloadModule(mod));

      return undefined;
    }
  };
}
