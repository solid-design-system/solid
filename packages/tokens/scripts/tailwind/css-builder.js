export class CSSBuilder {
  constructor(config = {}) {
    this.config = config;
    this.indentSize = config.indentSize || 2;
  }

  /**
   * Indent text by specified levels
   */
  indent(str, level = 1) {
    return str
      .split('\n')
      .map(line => (line ? ' '.repeat(this.indentSize * level) + line : ''))
      .join('\n');
  }

  /**
   * Create a CSS block
   */
  block(content, level = 1) {
    return `{\n${this.indent(content, level)}\n}`;
  }

  /**
   * Create a CSS rule
   */
  rule(selector, content) {
    return `${selector} {\n${this.indent(content, 1)}\n}`;
  }

  /**
   * Create a CSS property
   */
  property(name, value) {
    return `${name}: ${value};`;
  }

  /**
   * Create an import statement
   */
  import(path) {
    return `@import '${path}';`;
  }

  source(path) {
    return `@source '${path}';`;
  }

  /**
   * Create a @theme directive
   */
  theme(content) {
    return `@theme ${this.block(content, 1)}`;
  }

  /**
   * Create a @custom-variant directive
   */
  customVariant(name, selector) {
    return `@custom-variant ${name} (${selector});`;
  }

  /**
   * Create a @layer directive
   */
  layer(name, content) {
    return `@layer ${name} ${this.block(content, 1)}`;
  }

  /**
   * Create a @utility directive
   */
  utility(name, content) {
    return `@utility ${name} ${this.block(content, 1)}`;
  }

  /**
   * Join array elements with separator, filtering out falsy values
   */
  join(arr, separator = '\n') {
    return arr.filter(Boolean).join(separator);
  }
}
