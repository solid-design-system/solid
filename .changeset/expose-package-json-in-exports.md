---
"@solid-design-system/components": minor
"@solid-design-system/tokens": minor
---

Expose `./package.json` in the package exports so you can read the installed version programmatically, for example `import pkg from '@solid-design-system/components/package.json' with { type: 'json' }` or `require.resolve('@solid-design-system/components/package.json')`.
