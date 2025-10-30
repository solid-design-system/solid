import { prefixReferences } from './utils.js';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const legacy = JSON.parse(readFileSync(path.join(import.meta.dirname, '../../src/tokens.json'), { encoding: 'utf-8' }));

export class FigmaLegacyTokens {
  constructor() {
    this.legacy = this.#sanitize(legacy);
  }

  get() {
    const core = this.#getCore();
    const tokens = this.#getTokens();

    tokens.utilities = tokens.utilities || {};

    tokens['font-size'] = this.#getTokensByType(core, 'fontSizes');

    tokens.spacing = {
      ...tokens.spacing,
      0: { value: '0px', type: 'spacing', description: 'No spacing (manually added)' },
      auto: {
        value: 'auto',
        type: 'spacing',
        description: 'Automatic spacing (manually added)'
      }
    };

    tokens['z-'] = {
      10: { value: '10', type: 'utility' },
      20: { value: '20', type: 'utility' },
      30: { value: '30', type: 'utility' },
      40: { value: '40', type: 'utility' },
      50: { value: '50', type: 'utility' },
      auto: { value: 'auto', type: 'utility' },
      header: { value: 'var(--sd-z-index-header, 600)', type: 'utility' },
      drawer: { value: 'var(--sd-z-index-drawer, 700)', type: 'utility' },
      dialog: { value: 'var(--sd-z-index-dialog, 800)', type: 'utility' },
      dropdown: { value: 'var(--sd-z-index-dropdown, 900)', type: 'utility' },
      'alert-group': { value: 'var(--sd-z-index-alert-group, 950)', type: 'utility' },
      tooltip: { value: 'var(--sd-z-index-tooltip, 1000)', type: 'utility' }
    };

    tokens.risk = {
      low: {
        value: 'rgb(1 125 195)',
        type: 'color',
        description: 'Exclusively for marking fonds'
      },
      moderate: {
        value: 'rgb(0 165 147)',
        type: 'color',
        description: 'Exclusively for marking fonds'
      },
      increased: {
        value: 'rgb(255 240 0)',
        type: 'color',
        description: 'Exclusively for marking fonds'
      },
      high: {
        value: 'rgb(250 155 30)',
        type: 'color',
        description: 'Exclusively for marking fonds'
      },
      veryhigh: {
        value: 'rgb(255 0 0)',
        type: 'color',
        description: 'Exclusively for marking fonds'
      }
    };

    tokens.utilities.aspect = {
      video: { value: '16 / 9', type: 'spacing' },
      square: { value: '1 / 1', type: 'spacing' },
      '6/5': { value: '6 / 5', type: 'spacing' },
      '5/4': { value: '5 / 4', type: 'spacing' },
      '4/3': { value: '4 / 3', type: 'spacing' },
      '3/2': { value: '3 / 2', type: 'spacing' },
      '16/10': { value: '16 / 10', type: 'spacing' },
      'golden-ratio': { value: '1.6180339887498948482 / 1', type: 'spacing' },
      '2/1': { value: '2 / 1', type: 'spacing' },
      '21/9': { value: '21 / 9', type: 'spacing' },
      '3/4': { value: '3 / 4', type: 'spacing' },
      '4/5': { value: '4 / 5', type: 'spacing' }
    };

    tokens.duration = {
      ...Object.fromEntries(
        Object.entries(tokens.duration).map(([key, value]) => [key, { ...value, type: 'duration' }])
      )
    };

    tokens.keyframes = {
      'bounce-once': {
        type: 'keyframes',
        value: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      grow: {
        type: 'keyframes',
        value: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      'loader-color-primary': {
        type: 'keyframes',
        value: {
          '0%, 100%': { color: 'var(--sd-color-icon-fill-primary, var(--sd-color-primary))' },
          '50%': { color: 'var(--sd-color-icon-fill-primary, var(--sd-color-primary))', opacity: '20%' }
        }
      },
      'loader-color-white': {
        type: 'keyframes',
        value: {
          '0%, 100%': { color: 'var(--sd-color-icon-fill-white, var(--sd-color-white))' },
          '50%': { color: 'var(--sd-color-icon-fill-white, var(--sd-color-white))', opacity: '20%' }
        }
      },
      'loader-color-current': {
        type: 'keyframes',
        value: {
          '0%, 100%': { color: 'currentColor' },
          '50%': { color: 'currentColor', opacity: '20%' }
        }
      },
      wave: {
        type: 'keyframes',
        value: {
          '0%, 40%, 100%': { transform: 'initial' },
          '20%': { transform: 'translateY(-4px)' }
        }
      }
    };

    tokens.animation = {
      'bounce-once': { type: 'animation', value: 'bounce-once var(--sd-duration-medium, 300ms) ease-in-out' },
      grow: { type: 'animation', value: 'grow linear' },
      'loader-primary': { type: 'animation', value: 'wave 1.3s infinite, loader-color-primary 2.6s infinite' },
      'loader-white': { type: 'animation', value: 'wave 1.3s infinite, loader-color-white 2.6s infinite' },
      'loader-current': { type: 'animation', value: 'wave 1.3s infinite, loader-color-current 2.6s infinite' }
    };

    tokens['font-weight'] = {
      normal: { type: 'fontWeight', value: 400 },
      bold: { type: 'fontWeight', value: 700 }
    };

    return { core, tokens: prefixReferences(tokens) };
  }

  #sanitize(value) {
    if (!value) return value;

    if (typeof value === 'string') {
      ['\t', '\b', '\u001d'].forEach(ch => {
        value = value.split(ch).join('');
      });
      return value;
    }

    if (Array.isArray(value)) {
      return value.map(v => this.#sanitize(v));
    }

    if (typeof value === 'object') {
      const out = Array.isArray(value) ? [] : {};
      for (const [k, v] of Object.entries(value)) {
        out[this.#sanitize(k)] = this.#sanitize(v);
      }
      return out;
    }

    return value;
  }

  #getCore() {
    return this.legacy['UI Core'];
  }

  #getTokens() {
    const legacyTokens = ['duration'];
    return Object.fromEntries(Object.entries(this.legacy['UI Semantic']).filter(([key]) => legacyTokens.includes(key)));
  }

  #getTokensByType(library, type) {
    const result = {};

    function ensurePath(target, pathParts) {
      let node = target;
      for (const part of pathParts) {
        if (
          !Object.prototype.hasOwnProperty.call(node, part) ||
          typeof node[part] !== 'object' ||
          node[part] === null
        ) {
          node[part] = {};
        }
        node = node[part];
      }
      return node;
    }

    function setAtPath(target, pathParts, value) {
      if (pathParts.length === 0) return;
      const leafKey = pathParts[pathParts.length - 1];
      const parent = ensurePath(target, pathParts.slice(0, -1));
      parent[leafKey] = value;
    }

    function walk(node, nodepath = []) {
      if (node && typeof node === 'object' && !Array.isArray(node)) {
        if (Object.prototype.hasOwnProperty.call(node, 'type') && typeof node.type === 'string') {
          if (node.type === type) {
            setAtPath(result, nodepath, node);
          }
          return;
        }

        for (const key of Object.keys(node)) {
          walk(node[key], nodepath.concat(key));
        }
      }
    }

    walk(library);
    return result;
  }
}
