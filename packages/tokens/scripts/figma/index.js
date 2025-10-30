import { createDirectory, setNestedProperty, toKebabCase } from './utils.js';
import { FigmaBase } from './base.js';
import { FigmaLegacyTokens } from './legacy.js';
import { FigmaVariable } from './variable.js';
import { OUTPUT_DIR } from '../config.js';
import { writeFileSync } from 'fs';
import path from 'path';

const CORE_COLLECTION = 'Core';

export class FigmaClient extends FigmaBase {
  constructor(name, dictionary, legacy) {
    super(dictionary);

    this.name = name;
    this.legacy = legacy;
    this.collections = [CORE_COLLECTION, 'Theme'];
  }

  #isCoreCollection(name) {
    return name === CORE_COLLECTION;
  }

  #getThemes() {
    const themes = {};

    Object.values(this.variables)
      .map(variable => new FigmaVariable(variable, this.dictionary))
      .filter(variable => this.collections.includes(variable.collection.name))
      .forEach(variable => {
        const transformed = variable.resolve();

        transformed.modes.forEach(mode => {
          if (!themes[mode.name]) themes[mode.name] = {};

          if (
            !this.#isCoreCollection(variable.collection.name) &&
            !transformed.name.startsWith('utilities') &&
            !transformed.name.startsWith('components')
          ) {
            return;
          }

          setNestedProperty(themes[mode.name], transformed.name.split('/'), {
            description: transformed.description || undefined,
            type: mode.type,
            value: mode.value
          });
        });
      });

    const { Default, ...rest } = themes;

    return {
      core: Default,
      themes: rest
    };
  }

  process() {
    const legacy = new FigmaLegacyTokens().get();
    const { core, themes } = this.#getThemes();

    this.processed = Object.entries(themes)
      .map(([name, tokens]) => ({
        name,
        tokens: { core: { ...legacy.core, ...core }, ...legacy.tokens, ...tokens }
      }))
      .map(theme => {
        theme.tokens.utilities = { ...legacy.tokens.utilities, ...theme.tokens.utilities };
        theme.tokens.outline = theme.tokens.border;
        theme.tokens.ring = theme.tokens.border;
        return theme;
      });

    this.processed = Object.values(
      this.processed
        .filter(theme => !theme.name.startsWith('_'))
        .reduce((acc, theme) => {
          const name = toKebabCase(theme.name.replaceAll(' ', '-'));

          const { core: _core, ...tokens } = theme.tokens;
          if (!acc[this.name]) acc[this.name] = { name: this.name, tokens: { core: _core } };
          if (!acc[this.name].tokens[name]) acc[this.name].tokens[name] = tokens;

          return acc;
        }, {})
    );

    return this;
  }

  save() {
    this.processed.forEach(theme => {
      createDirectory(OUTPUT_DIR);
      const outputPath = path.join(OUTPUT_DIR, `${theme.name.toLowerCase().replace(/\s+/g, '-')}.json`);
      writeFileSync(outputPath, JSON.stringify(theme.tokens, null, 2));
    });
  }
}
