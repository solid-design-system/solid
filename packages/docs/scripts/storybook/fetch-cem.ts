/* eslint-disable */

import { setCustomElementsManifest } from '@storybook/web-components';
// @ts-expect-error
import componentsManifest from 'virtual:vite-plugin-cem/custom-elements-manifest';
// @ts-expect-error
import stylesManifest from 'virtual:vite-plugin-solid-styles/custom-elements-manifest';

export default function loadCustomElements() {
  // Remove all private members from the manifest
  if (componentsManifest.modules) {
    componentsManifest.modules = componentsManifest.modules.map((module: any) => {
      if (module.declarations) {
        module.declarations = module.declarations.map((declaration: any) => {
          if (declaration.members) {
            declaration.members = declaration.members.filter(
              (member: any) => member.description && member.privacy !== 'private'
            );
          }
          return declaration;
        });
      }
      return module;
    });
  }

  // Copy the styles manifest into the components manifest
  const manifest = {
    ...componentsManifest,
    modules: [...componentsManifest.modules, ...stylesManifest.modules]
  };

  setCustomElementsManifest(manifest);
}
