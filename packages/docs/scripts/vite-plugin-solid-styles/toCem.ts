import type { Attribute, ClassMember, Package } from 'custom-elements-manifest/schema.d.ts';
import type { Structure, StyleClassMember, StyleModule, Tag } from './types.js';

/**
 * Get the supported types as an array
 * @param tag The tag to get the types for
 * @returns Array of types for the tag
 */
const getTypesAsArray = (tag: Tag): string[] =>
  tag.type
    .split('|')
    .map(t => t.trim())
    .map(t => {
      // If we don`t want a default value in a drop down, return an empty string
      if (t === 'NO_DEFAULT') return '';

      // We use BEM for our style classes, therefore modifiers are added with a `--`.
      // In case of the tag `syn-body`, type (e.g. small) is the modifier and is therefore added
      // via `--` (-> `syn-body--small`).
      // On other cases like the tag `syn-table-cell--shadow`, the type (e.g. top) needs to be added
      // via `-` (e.g. `syn-table-cell--shadow-top`). The modifier is in this case `shadow-top`.
      const separator = tag.name.includes('--') ? '-' : '--';
      return `'${tag.name}${separator}${t}'`;
    });

/**
 * The tag to get the type for
 * @param tag The tag to get the type for
 * @returns Type structure for the tag
 */
const getTypeForTag = (tag: Tag) => {
  const text = getTypesAsArray(tag).join(' | ');
  return {
    text
  };
};

/**
 * Check if a tag is allowed to be included
 * @param tag The tag to check
 * @returns True if the tag is allowed to be included
 */
const tagIsAllowedToBeIncluded = (tag: Tag): boolean => ['variant', 'boolean'].includes(tag.tag);

/**
 * Check if a tag is a boolean type
 * @param tag The tag to check
 * @returns True if the tag is a boolean type
 */
const tagIsBooleanType = (tag: Tag): boolean =>
  tag.tag === 'boolean' || !tag.type || tag.type.trim().length === 0 || ['true', 'false'].includes(tag.type);

/**
 * Convert a tag to an attribute
 * @param tag The tag to convert to an attribute
 * @returns attribute The created attribute
 */
const getAttributesForTag = (tag: Tag): Attribute | null => {
  // Skip if we don't have variants or if the tag is not dynamic
  if (!tagIsAllowedToBeIncluded(tag)) {
    return null;
  }

  // 1. If we do not have a variant or its a single value with 'true',
  // treat the tag as a boolean value
  if (tagIsBooleanType(tag)) {
    return {
      default: tag.type === 'true' ? 'true' : 'false',
      description: tag.description,
      name: tag.name,
      type: {
        text: 'boolean'
      }
    };
  }

  // 2. Treat the value as a select
  return {
    default: getTypesAsArray(tag).at(0),
    description: tag.description,
    name: tag.name,
    type: getTypeForTag(tag)
  };
};

/**
 * Get the attributes for a list of tags
 * @param tags The tags to get attributes for
 * @returns List of attributes for the tags
 */
const getAttributesForTags = (tags: Tag[]): Attribute[] => tags.map(getAttributesForTag).filter(Boolean) as Attribute[];

/**
 * Get the members section of a tag
 * @param tag The tag to get the members for
 * @returns ClassMember or null if the tag is not allowed
 */
const getMembersForTag = (tag: Tag): StyleClassMember | null => {
  // Skip if we don't have variants or if the tag is not dynamic
  if (!tagIsAllowedToBeIncluded(tag)) {
    return null;
  }

  // 1. If we do not have a variant or its a single value with 'true',
  // treat the tag as a boolean value
  if (tagIsBooleanType(tag)) {
    return {
      attribute: tag.name,
      default: tag.type === 'true' ? 'true' : 'false',
      description: tag.description,
      kind: 'field',
      name: tag.name,
      type: {
        text: 'boolean'
      }
    };
  }

  // 2. Treat the value as a select
  return {
    attribute: tag.name,
    default: getTypesAsArray(tag).at(0),
    description: tag.description,
    kind: 'field',
    name: tag.name,
    type: getTypeForTag(tag)
  };
};

/**
 * Get the members for a list of tags
 * @param tags The tags to get members for
 * @returns List of members for the tags
 */
const getMembersForTags = (tags: Tag[]): ClassMember[] => tags.map(getMembersForTag).filter(Boolean) as ClassMember[];

/**
 * Converts a list of tags to a schema module
 * @param tags The tags to convert
 * @returns module The schema module
 */
const tagsToSchemaModule = (tags: Tag[]): StyleModule => {
  const [name, status, since] = tags;
  const attributes = getAttributesForTags(tags);
  const members = getMembersForTags(tags);

  const tagNameWithoutPrefix = name.name.includes('-') ? name.name.split('-').slice(1).join('-') : name.name;

  return {
    declarations: [
      {
        attributes,
        customElement: true,
        kind: 'class',
        status: status.name,
        since: since.name,
        members,
        name: name.name,
        slots: [
          {
            description: `Main content of ${name.name}`,
            name: ''
          }
        ],
        tagName: name.name,
        tagNameWithoutPrefix
      }
    ],
    description: name.description,
    kind: 'javascript-module',
    path: name.fileName
  };
};

/**
 * Takes a structure and converts it to a custom elements schema
 * @param structure The structure to use
 * @returns package The custom elements schema
 */
export const toCem = (structure: Structure[]): Package => {
  const modules = structure
    .filter(({ comments }) => comments.length > 0)
    .flatMap(({ comments }) => comments)
    .map(({ tags }) => tags)
    .map(tagsToSchemaModule);

  return {
    modules,
    readme: '',
    schemaVersion: '1.0.0'
  } as Package;
};
