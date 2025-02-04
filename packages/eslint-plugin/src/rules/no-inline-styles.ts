import { NODE_TYPES } from '@html-eslint/parser';

export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow inline styles in HTML',
      category: 'Best Practices',
      recommended: true
    },
    messages: {
      noInlineStyles: 'Avoid using inline styles. Use CSS classes instead.'
    }
  },
  create(context) {
    return {
      Tag(node) {
        if (node.name === 'sd-button') {
          const icon = node.children.find(child => child.name === 'sd-icon');
          const hasLabel = icon.attributes.find(attr => attr.key === 'aria-label');

          if (icon && !hasLabel)
            context.report({
              node: icon,
              messageId: 'noInlineStyles'
            });
        }
      }
    };
  }
};
