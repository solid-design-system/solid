// Import all components and register them

/* PACKAGES:START */
const modules = import.meta.glob('./components/**/!(*.stories|*.spec|*.test|*.style).ts');

Object.keys(modules).forEach(module => {
  modules[module]();
});
/* PACKAGES:END */

// Export selected utilities

export * from './utilities/icon-library';
export * from './utilities/localize';
// export * from './utilities/animation';
// export * from './utilities/base-path';
