// @ts-expect-error
import componentsManifest from 'virtual:vite-plugin-cem/custom-elements-manifest';
// @ts-expect-error
import stylesManifest from 'virtual:vite-plugin-solid-styles/custom-elements-manifest';
import type { Declaration, Package } from 'custom-elements-manifest/schema.d.ts';

type UsageLink = {
  href: string;
  label: string;
};

type UsageItem = UsageLink & {
  tagName: string;
};

type TemplateUsageConfig = {
  title?: string;
};

type TemplateUsageOptions = {
  config?: TemplateUsageConfig;
  storyTitle: string;
};

type TemplateUsageObserver = {
  disconnect: () => void;
};

type DeclarationWithTagName = Declaration & {
  summary?: string;
  tagName?: string;
};

const TEMPLATE_USAGE_ID = 'template-global-usage';
const COMPONENT_LABEL_OVERRIDES: Record<string, string> = {
  'sd-textarea': 'Text Area'
};

const getDeclarationMap = (manifest: Package) => {
  const declarations = manifest.modules.flatMap(module => module.declarations ?? []) as DeclarationWithTagName[];

  return declarations.reduce<Record<string, DeclarationWithTagName>>((map, declaration) => {
    if (declaration.tagName) {
      map[declaration.tagName] = declaration;
    }

    return map;
  }, {});
};

const componentDeclarations = getDeclarationMap(componentsManifest);
const styleDeclarations = getDeclarationMap(stylesManifest);

const getFallbackLabel = (tagName: string) =>
  tagName
    .replace('sd-', '')
    .split('-')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');

const getComponentLabel = (tagName: string) => COMPONENT_LABEL_OVERRIDES[tagName] ?? getFallbackLabel(tagName);

const getStyleLabel = (tagName: string) => getFallbackLabel(tagName);

const getIframeBody = (iframe: HTMLIFrameElement) => {
  try {
    return iframe.contentDocument?.body;
  } catch {
    return undefined;
  }
};

const getUsageRoots = (targetRoot: HTMLElement) => {
  const storyRoots = [...targetRoot.querySelectorAll<HTMLElement>('.docs-story')];
  const iframeRoots = storyRoots.flatMap(root =>
    [...root.querySelectorAll<HTMLIFrameElement>('iframe')].map(getIframeBody).filter(Boolean)
  ) as HTMLElement[];

  const roots = [...storyRoots, ...iframeRoots];
  return roots.length ? roots : [targetRoot];
};

const collectTemplateUsage = (targetRoot: HTMLElement) => {
  const components = new Set<string>();
  const styles = new Set<string>();

  getUsageRoots(targetRoot).forEach(root => {
    root.querySelectorAll<HTMLElement>('*').forEach(element => {
      if (element.localName?.startsWith('sd-')) {
        components.add(element.localName);
      }

      element.classList.forEach(className => {
        const baseClass = className.split('--')[0];
        if (styleDeclarations[baseClass]) {
          styles.add(baseClass);
        }
      });
    });
  });

  return {
    components: [...components].sort(),
    styles: [...styles].sort()
  };
};

const buildComponentLinks = (tags: string[]): UsageItem[] =>
  tags
    .filter(tagName => componentDeclarations[tagName])
    .map(tagName => ({
      href: `./?path=/docs/components-${tagName}-overview--docs`,
      label: getComponentLabel(tagName),
      tagName
    }));

const buildStyleLinks = (tags: string[]): UsageItem[] =>
  tags.map(tagName => ({
    href: `./?path=/docs/styles-${tagName}--docs`,
    label: getStyleLabel(tagName),
    tagName
  }));

const createLinksMarkup = (links: UsageLink[]) =>
  links
    .map(
      ({ href, label }) =>
        `<a href="${href}" class="sd-paragraph sd-paragraph--size-sm text-primary underline hover:text-primary-500 active:text-primary-800 text-base">${label}</a>`
    )
    .join('');

const createSectionMarkup = (title: string, links: UsageLink[]) => {
  if (!links.length) return '';

  return `
    <section class="template-global-usage__section">
      <p class="sd-headline sd-headline--size-base m-0 !text-base">${title}</p>
      <div class="template-global-usage__links">
        ${createLinksMarkup(links)}
      </div>
    </section>
  `;
};

const createTemplateUsage = ({
  componentLinks,
  styleLinks,
  title
}: {
  componentLinks: UsageLink[];
  styleLinks: UsageLink[];
  title: string;
}) => {
  const usage = document.createElement('aside');
  usage.id = TEMPLATE_USAGE_ID;
  usage.className = 'template-global-usage';

  usage.innerHTML = `
    <div class="template-global-usage__inner">
      <p class="sd-headline sd-headline--size-base m-0 !text-xl">${title}</p>
      <div class="template-global-usage__groups">
        ${createSectionMarkup('Components', componentLinks)}
        ${createSectionMarkup('Styles', styleLinks)}
      </div>
    </div>
  `;

  return usage;
};

const getTargetRoot = () => document.getElementById('storybook-docs');

const getInsertionRoot = (targetRoot: HTMLElement) =>
  targetRoot.querySelector<HTMLElement>('.sbdocs-content') ?? targetRoot;

const getStoryIframes = (targetRoot: HTMLElement) => [
  ...targetRoot.querySelectorAll<HTMLIFrameElement>('.docs-story iframe')
];

const createDeferredRenderer = (options: TemplateUsageOptions) => {
  let frameId = 0;

  return {
    cancel: () => window.cancelAnimationFrame(frameId),
    render: () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => renderTemplateUsage(options));
    }
  };
};

export const removeTemplateUsage = () => {
  document.getElementById(TEMPLATE_USAGE_ID)?.remove();
};

export const renderTemplateUsage = ({ config, storyTitle }: TemplateUsageOptions) => {
  const targetRoot = getTargetRoot();
  if (!targetRoot) return;

  const { components, styles } = collectTemplateUsage(targetRoot);
  if (!components.length && !styles.length) {
    removeTemplateUsage();
    return;
  }

  const componentLinks = buildComponentLinks(components);
  const styleLinks = buildStyleLinks(styles);
  const signature = `${storyTitle}::${components.join('|')}::${styles.join('|')}`;
  const existingUsage = document.getElementById(TEMPLATE_USAGE_ID);
  const insertionRoot = getInsertionRoot(targetRoot);

  if (
    existingUsage &&
    existingUsage.parentElement === insertionRoot &&
    existingUsage.dataset.componentSignature === signature
  ) {
    return;
  }

  existingUsage?.remove();

  const title = config?.title || 'Utilized Components and Styles';
  const usage = createTemplateUsage({ componentLinks, styleLinks, title });
  usage.dataset.componentSignature = signature;

  insertionRoot.prepend(usage);
};

export const observeTemplateUsage = (options: TemplateUsageOptions): TemplateUsageObserver => {
  const targetRoot = getTargetRoot();
  if (!targetRoot) return { disconnect: () => undefined };

  const deferredRenderer = createDeferredRenderer(options);
  const render = deferredRenderer.render;
  const observedIframeBodies = new WeakSet<HTMLElement>();
  const iframeLoadCleanups = new Map<HTMLIFrameElement, () => void>();
  const observers: MutationObserver[] = [];

  const observeIframeBody = (iframe: HTMLIFrameElement) => {
    const body = getIframeBody(iframe);
    if (!body || observedIframeBodies.has(body)) return;

    observedIframeBodies.add(body);

    const observer = new MutationObserver(render);
    observer.observe(body, {
      attributes: true,
      attributeFilter: ['class'],
      childList: true,
      subtree: true
    });
    observers.push(observer);
    render();
  };

  const observeIframes = () => {
    getStoryIframes(targetRoot).forEach(iframe => {
      observeIframeBody(iframe);

      if (iframeLoadCleanups.has(iframe)) return;

      const handleLoad = () => {
        observeIframeBody(iframe);
        render();
      };

      iframe.addEventListener('load', handleLoad);
      iframeLoadCleanups.set(iframe, () => iframe.removeEventListener('load', handleLoad));
    });
  };

  const docsObserver = new MutationObserver(() => {
    observeIframes();
    render();
  });
  docsObserver.observe(targetRoot, {
    childList: true,
    subtree: true
  });
  observers.push(docsObserver);

  observeIframes();
  render();

  return {
    disconnect: () => {
      deferredRenderer.cancel();
      observers.forEach(observer => observer.disconnect());
      iframeLoadCleanups.forEach(cleanup => cleanup());
      iframeLoadCleanups.clear();
    }
  };
};
