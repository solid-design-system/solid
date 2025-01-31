/* eslint-disable */

import { setCustomElementsManifest } from '@storybook/web-components';
import { Declaration, Module, Package } from 'custom-elements-manifest';
// @ts-expect-error
import componentsManifest from 'virtual:vite-plugin-cem/custom-elements-manifest';
// @ts-expect-error
import stylesManifest from 'virtual:vite-plugin-solid-styles/custom-elements-manifest';

interface Member {
  description: string;
  privacy: string;
  attribute?: string;
  name?: string;
}

type IDeclaration = {
  members: Member[];
} & Declaration;

class CustomElementsManifestParser {
  manifest: Package;

  constructor(manifest: Package) {
    this.manifest = manifest;
  }

  /**
   *  Applies a transformation function to the `members` of each declaration in the manifest.
   *
   * @param {Function} callback - A function that takes an array of `members` and returns a modified array.
   */
  private cleanup(callback: (members: Member[]) => Member[]) {
    this.manifest.modules = this.manifest.modules.map((module: Module) => ({
      ...module,
      declarations: module.declarations?.map((declaration: IDeclaration) => ({
        ...declaration,
        members: declaration.members ? callback(declaration.members) : undefined
      })) as Declaration[]
    }));
  }

  /**
   * Filters out private properties and members without descriptions from the manifest.
   */
  hidePrivateProps(): CustomElementsManifestParser {
    this.cleanup(members => members.filter(member => !!member.description && member.privacy !== 'private'));
    return this;
  }

  /**
   * Removes duplicated properties on Storybook by making the member name and attribute the same
   */
  dedupeProps(): CustomElementsManifestParser {
    this.cleanup(members =>
      members.map(member => {
        if (member.attribute) {
          member.name = member.attribute;
        }

        return member;
      })
    );
    return this;
  }

  /**
   * Appends modules to the current custom elements manifest
   */
  addModules(modules: Array<Module>): CustomElementsManifestParser {
    this.manifest.modules = [...this.manifest.modules, ...modules];
    return this;
  }

  /**
   * @returns The parsed manifest with all applied changes
   */
  get(): Package {
    return this.manifest;
  }
}

export default function loadCustomElements() {
  const parser = new CustomElementsManifestParser(componentsManifest);
  const manifest = parser.hidePrivateProps().dedupeProps().addModules(stylesManifest.modules).get();
  setCustomElementsManifest(manifest);
}
