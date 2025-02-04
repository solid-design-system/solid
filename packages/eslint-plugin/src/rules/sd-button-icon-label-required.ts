import { ESLintUtils } from '@typescript-eslint/utils';
import { JSXElementES } from '../utilities/jsx.js';
import type { Rule } from 'eslint';
import type { TSESTree } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`);

export default createRule({
  name: 'sd-button-icon-label-required',
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
  defaultOptions: [],
  create(context) {
    return {
      JSXElement(node: TSESTree.JSXElement) {
        const el = new JSXElementES(node);

        if (!el.is('sd-button') || !el.hasChildren()) {
          return;
        }

        const isEveryChildrenIcon = el.children.every(child => child.is('sd-icon'));
        const atLeastOneIconHasLabel = el.children.some(child => child.is('sd-icon') && child.hasAttribute('label'));

        if (!isEveryChildrenIcon || atLeastOneIconHasLabel) {
          return;
        }

        const icon = el
          .query('sd-icon')
          .filter(child => !child.hasAttribute('label'))
          .shift();

        if (!icon) return;

        context.report({
          node: icon.node,
          messageId: 'missingLabel',
          fix(fixer) {
            return fixer.insertTextAfter(icon.name, ' label=""');
          }
        });
      }
    };
  }
}) as unknown as Rule.RuleModule;
