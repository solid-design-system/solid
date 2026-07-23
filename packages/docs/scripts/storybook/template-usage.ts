import type { TemplateUsageData, UsageItem } from './template-usage-analyzer.js';

// HTML helper to get syntax highlighting and formatting in the template string
const html = String.raw;

type TemplateUsageConfig = {
  title?: string;
};

type TemplateUsageOptions = {
  config?: TemplateUsageConfig;
  storyTitle: string;
  usageData?: TemplateUsageData | null;
};

type TemplateUsageObserver = {
  disconnect: () => void;
};

const TEMPLATE_USAGE_ID = 'template-global-usage';

const createLinksMarkup = (links: UsageItem[]) =>
  links
    .map(
      ({ href, label }) =>
        html`<a
          href="${href}"
          class="sd-paragraph sd-paragraph--size-sm text-primary underline hover:text-primary-500 active:text-primary-800 text-base"
          >${label}</a
        >`
    )
    .join('');

const createSectionMarkup = (title: string, links: UsageItem[]) => {
  if (!links.length) return '';

  return html`
    <section class="template-global-usage__section">
      <p class="sd-headline sd-headline--size-base m-0 !text-base">${title}</p>
      <div class="template-global-usage__links">${createLinksMarkup(links)}</div>
    </section>
  `;
};

const createTemplateUsage = ({
  componentLinks,
  styleLinks,
  title
}: {
  componentLinks: UsageItem[];
  styleLinks: UsageItem[];
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

export const renderTemplateUsage = ({ config, storyTitle, usageData }: TemplateUsageOptions) => {
  const targetRoot = getTargetRoot();
  if (!targetRoot) return;

  const components = usageData?.components ?? [];
  const styles = usageData?.styles ?? [];

  if (!components.length && !styles.length) {
    removeTemplateUsage();
    return;
  }

  const signature = `${storyTitle}::${components.map(item => item.tagName).join('|')}::${styles
    .map(item => item.tagName)
    .join('|')}`;
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
  const usage = createTemplateUsage({ componentLinks: components, styleLinks: styles, title });
  usage.dataset.componentSignature = signature;

  insertionRoot.prepend(usage);
};

/**
 * Waits for Storybook's docs page to (re)render `#storybook-docs .sbdocs-content` and (re)inserts
 * the usage aside whenever that happens. Since `usageData` is now computed statically at build time
 * (see `../vite-plugin-template-usage.ts`), this observer no longer needs to scan rendered content -
 * it only needs to know *when* to (re)insert the already-computed markup.
 */
export const observeTemplateUsage = (options: TemplateUsageOptions): TemplateUsageObserver => {
  const targetRoot = getTargetRoot();
  if (!targetRoot) return { disconnect: () => undefined };

  const deferredRenderer = createDeferredRenderer(options);
  const render = deferredRenderer.render;

  const docsObserver = new MutationObserver(render);
  docsObserver.observe(targetRoot, {
    childList: true,
    subtree: true
  });

  render();

  return {
    disconnect: () => {
      deferredRenderer.cancel();
      docsObserver.disconnect();
    }
  };
};
