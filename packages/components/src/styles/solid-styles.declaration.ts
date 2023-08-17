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

const definitionModules = import.meta.glob('./**/*.declaration.ts');

/**
 * Fetches and returns an array of style definitions from the imported modules.
 */
async function fetchStyleDefinitions(): Promise<Style[]> {
  const styleDefinitions: Style[] = [];

  const modules = await Promise.all(
    Object.keys(definitionModules).map(async modulePath => {
      const module = await definitionModules[modulePath]();
      return module;
    })
  );

  modules.forEach(module => {
    if (module !== null && typeof module === 'object' && 'default' in module) {
      styleDefinitions.push(module.default as Style);
    }
  });

  return styleDefinitions;
}

/**
 * Generates a component representation for the given style.
 * @param input The style definition to process.
 * @returns The component representation.
 */
function generateFakeComponentInManifest(input: Style) {
  const output = {
    declarations: [
      {
        kind: 'class',
        description: '',
        name: input.styleName,
        slots: [{ description: 'Content of the element.', name: '' }],
        members: [] as unknown[],
        attributes: [] as unknown[],
        style: true,
        summary: input.summary,
        status: input.status,
        since: input.since,
        tagName: input.styleName
      }
    ]
  };

  for (const attribute of input.attributes) {
    if (attribute.options) {
      // It's a field with multiple options.
      output.declarations[0].members.push({
        kind: 'field',
        name: attribute.name,
        type: { text: `'${attribute.options.join("' | '")}'` },
        description: attribute.description,
        attribute: attribute.name,
        reflects: true
      });

      output.declarations[0].attributes.push({
        name: attribute.name,
        type: { text: `'${attribute.options.join("' | '")}'` },
        description: attribute.description,
        fieldName: attribute.name
      });
    } else {
      // It's a boolean field.
      output.declarations[0].members.push({
        kind: 'field',
        name: attribute.name,
        type: { text: 'boolean' },
        default: 'false',
        description: attribute.description,
        attribute: attribute.name
      });

      output.declarations[0].attributes.push({
        name: attribute.name,
        type: { text: 'boolean' },
        default: 'false',
        description: attribute.description,
        fieldName: attribute.name
      });
    }
  }

  return output;
}

/**
 * Fetches style definitions and maps them to their component representations.
 * @returns An array of component representations.
 */
async function fetchStyleComponents() {
  const styleDefinitions = await fetchStyleDefinitions();
  return styleDefinitions.map(generateFakeComponentInManifest);
}

export { fetchStyleComponents };
