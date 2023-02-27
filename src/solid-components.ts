

/*
 * Import all components and register them
 */

// const modules = import.meta.glob('./components/**/!(color-picker*|animation*|*.stories|*.spec|*.test|*.style).ts');

const modules = import.meta.glob('./components/**/!(*.stories|*.spec|*.test|*.style).ts');

Object.keys(modules).forEach((module) => {
  modules[module]();
});
