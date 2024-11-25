import type { ClassMember, Declaration, Module } from 'custom-elements-manifest/schema.d.ts';

/**
 * Plugin configuration options
 */
export interface Config {
  /**
   * The endpoint to use for the middleware
   */
  endPoint: string;

  /**
   * The filename used when building storybook
   */
  outputFileName: string;

  /**
   * The source directory to obtain data from
   */
  srcDir: string;
}

/**
 * An enhanced version of the default cem class member
 */
export type StyleClassMember = ClassMember & {
  attribute?: string;
};

/**
 * Enhanced declaration for internal usage
 */
export type StyleDeclaration = Declaration & {
  tagNameWithoutPrefix?: string;
};

/**
 * Enhanced module for internal usage
 * Represents a style (in the vain of a css style)
 */
export type StyleModule = Module & {
  declarations: StyleDeclaration[];
};

/**
 * The given tag in the structure
 */
export interface Tag {
  description: string;
  fileName: string;
  name: string;
  tag: string;
  type: string;
}

/**
 * A structure as parsed with the getStructure function
 */
export interface Structure {
  comments: {
    description: string;
    tags: Tag[];
  }[];
  module: string;
}
