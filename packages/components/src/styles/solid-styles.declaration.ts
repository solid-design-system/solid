type StyleStatus = 'experimental' | 'stable' | 'deprecated';

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
const definitionModules = import.meta.glob('./**/*.declaration.ts');

const styleDefinitions: Style[] = [];

Object.keys(definitionModules).forEach(async modulePath => {
  const module = await definitionModules[modulePath](); // Await the module import
  if (module !== null && typeof module === 'object' && 'default' in module) {
    styleDefinitions.push(module.default as Style); // Type assertion
  }
});

export { styleDefinitions };
