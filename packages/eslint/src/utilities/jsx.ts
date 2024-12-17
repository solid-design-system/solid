import { AST_NODE_TYPES } from '@typescript-eslint/utils';
import type { TSESTree } from '@typescript-eslint/utils';

export class JSXElementES {
  private _el: TSESTree.JSXElement;

  constructor(element: TSESTree.JSXElement) {
    this._el = element;
  }

  get node() {
    return this._el;
  }

  get name() {
    return this._el.openingElement.name;
  }

  get children() {
    return this._el.children
      .filter((child): child is TSESTree.JSXElement => child.type === AST_NODE_TYPES.JSXElement)
      .map(child => new JSXElementES(child));
  }

  get attributes(): TSESTree.JSXAttribute[] {
    return this._el.openingElement.attributes.filter(
      attr => attr.type === AST_NODE_TYPES.JSXAttribute && attr.name.type === AST_NODE_TYPES.JSXIdentifier
    ) as TSESTree.JSXAttribute[];
  }

  is(name: string) {
    return (
      this._el.openingElement.name.type === AST_NODE_TYPES.JSXIdentifier && this._el.openingElement.name.name === name
    );
  }

  query(name: string) {
    return this.children.filter(child => child.is(name));
  }

  hasChildren() {
    return this.children.length > 0;
  }

  hasAttribute(name: string) {
    return this.attributes.some(attr => attr.name.name === name);
  }
}
