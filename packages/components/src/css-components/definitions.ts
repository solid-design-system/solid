type StyleStatus = 'experimental' | 'stable' | 'deprecated'; // or any other status you might have

interface StyleAttribute {
  name: string;
  description: string;
  /**
   * If you don't set options, the attribute will be rendered as a boolean attribute.
   */
  options?: string[];
}

export interface Style {
  styleName: string;
  summary: string;
  status: StyleStatus;
  since: string;
  attributes: StyleAttribute[];
}

// Use import.meta.glob to get all the .definition.ts files
const definitionModules = import.meta.glob('./**/*.definition.ts');

const styleDefinitions = [];

Object.keys(definitionModules).forEach(modulePath => {
  definitionModules[modulePath]().then(module => {
    styleDefinitions.push(module.default);
  });
});

export { styleDefinitions };
