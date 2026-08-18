import type { Declaration, Package } from 'custom-elements-manifest';
import ts from 'typescript';

export type UsageItem = {
  href: string;
  label: string;
  tagName: string;
};

export type TemplateUsageData = {
  components: UsageItem[];
  styles: UsageItem[];
};

export type DeclarationWithTagName = Declaration & {
  summary?: string;
  tagName?: string;
};

export type DeclarationMap = Record<string, DeclarationWithTagName>;

const COMPONENT_LABEL_OVERRIDES: Record<string, string> = {
  'sd-textarea': 'Text Area'
};

const HTML_TEMPLATE_TAG_IDENTIFIER = 'html';
const COMPONENT_TAG_REGEX = /<(sd-[a-z0-9-]+)/gi;
const CLASS_ATTR_REGEX = /class(?:Name)?="([^"]+)"/g;

export const getDeclarationMap = (manifest: Package): DeclarationMap => {
  const declarations = manifest.modules.flatMap(module => module.declarations ?? []) as DeclarationWithTagName[];

  return declarations.reduce<DeclarationMap>((map, declaration) => {
    if (declaration.tagName) {
      map[declaration.tagName] = declaration;
    }

    return map;
  }, {});
};

const getFallbackLabel = (tagName: string) =>
  tagName
    .replace('sd-', '')
    .split('-')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');

export const getComponentLabel = (tagName: string) => COMPONENT_LABEL_OVERRIDES[tagName] ?? getFallbackLabel(tagName);

export const getStyleLabel = (tagName: string) => getFallbackLabel(tagName);

export const buildComponentLinks = (tags: string[], componentDeclarations: DeclarationMap): UsageItem[] =>
  tags
    .filter(tagName => componentDeclarations[tagName])
    .map(tagName => ({
      href: `./?path=/docs/components-${tagName}-overview--docs`,
      label: getComponentLabel(tagName),
      tagName
    }))
    .sort((a, b) => a.tagName.localeCompare(b.tagName));

export const buildStyleLinks = (tags: string[], styleDeclarations: DeclarationMap): UsageItem[] =>
  tags
    .filter(tagName => styleDeclarations[tagName])
    .map(tagName => ({
      href: `./?path=/docs/styles-${tagName}--docs`,
      label: getStyleLabel(tagName),
      tagName
    }))
    .sort((a, b) => a.tagName.localeCompare(b.tagName));

/**
 * Concatenates the source text of every `html` tagged template expression found in `source`.
 * Walking the real AST (instead of scanning the raw text) means anything sitting inside a
 * comment - e.g. a commented-out example story - is automatically excluded, since `forEachChild`
 * never descends into trivia/comments.
 */
const collectHtmlTemplateText = (source: string, fileName: string) => {
  const sourceFile = ts.createSourceFile(fileName, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const chunks: string[] = [];

  const visit = (node: ts.Node) => {
    if (
      ts.isTaggedTemplateExpression(node) &&
      ts.isIdentifier(node.tag) &&
      node.tag.text === HTML_TEMPLATE_TAG_IDENTIFIER
    ) {
      chunks.push(node.getText(sourceFile));
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);

  return chunks.join('\n');
};

export const extractUsageFromTemplateText = (text: string) => {
  const componentTags = new Set<string>();
  const styleClasses = new Set<string>();

  for (const match of text.matchAll(COMPONENT_TAG_REGEX)) {
    componentTags.add(match[1].toLowerCase());
  }

  for (const match of text.matchAll(CLASS_ATTR_REGEX)) {
    match[1]
      .split(/\s+/)
      .filter(Boolean)
      .forEach(className => {
        if (className.startsWith('sd-')) {
          styleClasses.add(className.split('--')[0]);
        }
      });
  }

  return {
    componentTags: [...componentTags],
    styleClasses: [...styleClasses]
  };
};

export const analyzeTemplateSource = (
  source: string,
  fileName: string,
  componentDeclarations: DeclarationMap,
  styleDeclarations: DeclarationMap
): TemplateUsageData => {
  const templateText = collectHtmlTemplateText(source, fileName);
  const { componentTags, styleClasses } = extractUsageFromTemplateText(templateText);

  return {
    components: buildComponentLinks(componentTags, componentDeclarations),
    styles: buildStyleLinks(styleClasses, styleDeclarations)
  };
};
