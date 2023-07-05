/*
 * Import all components and register them
 */

const modules = import.meta.glob('./components/**/!(*.stories|*.spec|*.test|*.style).ts');

Object.keys(modules).forEach(module => {
  modules[module]();
});

export * from './utilities/icon-library';
export * from './utilities/localize';
