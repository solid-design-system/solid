import { FigmaBase } from './base.js';
import { formatColor } from './utils.js';

export class FigmaVariable extends FigmaBase {
  constructor(variable, dictionary) {
    super(dictionary);

    this.self = variable;
    this.collection = this.getCollectionById(variable.variableCollectionId);
  }

  #getModes() {
    return this.collection.modes.map(mode => ({ id: mode.modeId, name: mode.name }));
  }

  #alias(id) {
    const alias = Object.values(this.variables).find(v => v.id === id);
    if (!alias) return null;

    const name = alias.name.toLowerCase();
    const type = alias.resolvedType.toLowerCase();

    return { type, value: `{core.${name.replaceAll('/', '.')}}` };
  }

  #value(mode) {
    const { valuesByMode, resolvedType: type } = this.self;
    const value = valuesByMode[mode.id];

    const isAlias = typeof value === 'object' && 'type' in value && value.type === 'VARIABLE_ALIAS';
    if (isAlias) {
      return this.#alias(value.id);
    }

    if (type === 'COLOR') {
      return {
        type: 'color',
        value: formatColor(value)
      };
    }

    return {
      type: type.toLowerCase(),
      value: typeof value === 'string' ? value : String(value)
    };
  }

  resolve() {
    const { name, description } = this.self;
    const modes = this.#getModes().map(mode => ({ ...mode, ...this.#value(mode) }));

    return { name: name.toLowerCase(), description, modes };
  }
}
