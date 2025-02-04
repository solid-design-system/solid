import { NodeTypes } from 'es-html-parser';
import type { AttributeNode, TagNode, TextNode } from 'es-html-parser';

export class JSXElementES {
  private _el: TagNode;

  constructor(element: TagNode) {
    this._el = element;
  }

  get node() {
    return this._el;
  }

  get name() {
    return this._el.name;
  }

  get children() {
    return this._el.children
      .filter((child): child is TagNode => child.type === NodeTypes.Tag)
      .map(child => new JSXElementES(child));
  }

  get textContent() {
    return this._el.children
      .filter((child): child is TextNode => child.type === NodeTypes.Text)
      .map(c => c.value.trim())
      .join(' ')
      .trim();
  }

  get attributes(): AttributeNode[] {
    return this._el.attributes;
  }

  is(name: string) {
    return this._el.name === name;
  }

  query(name: string) {
    return this.children.filter(child => child.is(name));
  }

  hasChildren() {
    return this.children.length > 0;
  }

  hasAttribute(name: string) {
    return this.attributes.some(attr => attr.key.value === name);
  }
}
