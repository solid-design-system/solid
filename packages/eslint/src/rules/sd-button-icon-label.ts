import { AST_NODE_TYPES, ESLintUtils } from '@typescript-eslint/utils';
import type { TSESTree } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`);

// Type: RuleModule<"uppercase", ...>
export default createRule({
  name: 'sd-icon-no-empty-label',
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'sd-icon inside an icon button should always contain a label.'
    },
    messages: {
      missingLabel: 'sd-icon should contain a label'
    },
    schema: []
  },
  defaultOptions: [],
  create(context) {
    return {
      // TODO: To be improved & tested
      JSXElement(node: TSESTree.JSXElement) {
        // Check if the element is an <sd-button>
        if (
          node.openingElement.name.type === AST_NODE_TYPES.JSXIdentifier &&
          node.openingElement.name.name === 'sd-button'
        ) {
          const children = node.children.filter(
            (child): child is TSESTree.JSXElement => child.type === AST_NODE_TYPES.JSXElement
          );

          // Check if the <sd-button> contains exactly one <sd-icon>
          if (
            children.length === 1 &&
            children[0].openingElement.name.type === AST_NODE_TYPES.JSXIdentifier &&
            children[0].openingElement.name.name === 'sd-icon'
          ) {
            const sdIconNode = children[0];

            // Check if <sd-icon> has a `label` attribute
            const hasLabelAttribute = sdIconNode.openingElement.attributes.some(
              attr =>
                attr.type === AST_NODE_TYPES.JSXAttribute &&
                attr.name.type === AST_NODE_TYPES.JSXIdentifier &&
                attr.name.name === 'label'
            );

            if (!hasLabelAttribute) {
              context.report({
                node: sdIconNode,
                messageId: 'missingLabel'
              });
            }
          }
        }
      }
    };
  }
});
