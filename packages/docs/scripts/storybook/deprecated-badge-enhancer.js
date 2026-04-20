const BADGE_CLASS = 'sd-deprecated-badge';
const DEPRECATED_REGEX = /\bdeprecated\b/gi;

const enhanceDeprecatedLabels = (root = document) => {
  const cells = root.querySelectorAll('.docblock-argstable td');

  cells.forEach(cell => {
    const walker = document.createTreeWalker(cell, NodeFilter.SHOW_TEXT);
    const textNodes = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node?.textContent?.match(DEPRECATED_REGEX)) continue;
      if (node.parentElement?.closest(`.${BADGE_CLASS}`)) continue;
      textNodes.push(node);
    }

    textNodes.forEach(node => {
      const text = node.textContent;
      if (!text) return;

      const parts = text.split(DEPRECATED_REGEX);
      const matches = text.match(DEPRECATED_REGEX) || [];

      if (matches.length === 0) return;

      const fragment = document.createDocumentFragment();

      parts.forEach((part, index) => {
        if (part) fragment.appendChild(document.createTextNode(part));

        if (index < matches.length) {
          const badge = document.createElement('span');
          badge.className = BADGE_CLASS;
          badge.textContent = 'Deprecated';
          fragment.appendChild(badge);
        }
      });

      node.parentNode?.replaceChild(fragment, node);
    });
  });
};

export const initDeprecatedBadgeEnhancer = () => {
  if (window.__sdDeprecatedBadgeEnhancerInitialized) return;

  window.__sdDeprecatedBadgeEnhancerInitialized = true;
  enhanceDeprecatedLabels();

  let isScheduled = false;

  const observer = new MutationObserver(() => {
    if (isScheduled) return;
    isScheduled = true;

    requestAnimationFrame(() => {
      enhanceDeprecatedLabels();
      isScheduled = false;
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
};
