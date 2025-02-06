import { JSXElementES } from '../../utilities/jsx.js';
import type { Context } from 'types/rules';
import type { Rule } from 'eslint';
import type { TagNode } from 'es-html-parser';

const rule = {
  name: 'required-sd-icon-label',
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'sd-icon inside an sd-button with only an icon should always contain a label.'
    },
    messages: {
      missingLabel: 'sd-icon should contain a label'
    },
    schema: []
  },
  create(context: Context) {
    return {
      Tag(node: TagNode) {
        const el = new JSXElementES(node);

        if (!el.is('sd-button') || !el.hasChildren()) return;

        const hasTextContent = el.textContent;
        const isEveryChildrenIcon = el.children.every(child => child.is('sd-icon'));
        const atLeastOneIconHasLabel = el.children.some(child => child.is('sd-icon') && child.hasAttribute('label'));

        if (hasTextContent || !isEveryChildrenIcon || atLeastOneIconHasLabel) return;

        const icon = el
          .query('sd-icon')
          .filter(child => !child.hasAttribute('label'))
          .shift();

        if (!icon) return;

        context.report({
          node: icon.node,
          messageId: 'missingLabel'
        });
      }
    };
  }
};

export default rule as unknown as Rule.RuleModule;
