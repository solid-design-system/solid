import { createDirectory, setNestedProperty } from './utils.js';
import { FigmaBase } from './base.js';
import { FigmaLegacyTokens } from './legacy.js';
import { FigmaVariable } from './variable.js';
import { OUTPUT_DIR } from '../config.js';
import { writeFileSync } from 'fs';
import path from 'path';

export class FigmaClient extends FigmaBase {
  constructor(dictionary, legacy) {
    super(dictionary);

    this.legacy = legacy;
  }

  #getThemes() {
    const themes = {};

    Object.values(this.variables)
      .map(variable => new FigmaVariable(variable, this.dictionary))
      .forEach(variable => {
        const transformed = variable.resolve();
        transformed.modes.forEach(mode => {
          if (!themes[mode.name]) themes[mode.name] = {};

          setNestedProperty(themes[mode.name], transformed.name.split('/'), {
            description: transformed.description || undefined,
            type: mode.type,
            value: mode.value
          });
        });
      });

    const { Core, ...rest } = themes;
    return {
      core: Core,
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
        theme.tokens.outline = theme.tokens.border;
        theme.tokens.ring = theme.tokens.border;
        return theme;
      });

    const baseName = name => name.replace(/\s*(light|dark)\s*$/i, '').trim();

    const getVariantFromName = name => {
      const m = name.match(/\b(light|dark)\b$/i);
      return m ? m[1].toLowerCase() : null;
    };

    this.processed = Object.values(
      this.processed.reduce((acc, theme) => {
        const key = baseName(theme.name);
        const variant = getVariantFromName(theme.name);

        const { core: _core, ...tokens } = theme.tokens;
        if (!acc[key]) acc[key] = { name: key, tokens: { core: _core } };
        if (!acc[key].tokens[variant]) acc[key].tokens[variant] = tokens;

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
