# Contributing to Solid Components

## About

- [ ] Read through [Principles of Solid Design System](https://solid-design-system.fe.union-investment.de/x.x.x/storybook/)
- [ ] Have a look on the [demo project](https://solid-design-system.github.io/solid-design-system-demo/) and maybe even [install it locally and play around](https://github.com/solid-design-system/solid-design-system-demo).

## How

- [ ] Closely coupled to Design
- [ ] Heavy usage of slots, parts and reduce business logic on component level
- [ ] Extensive docs and examples per component in Storybook (go through some components in Storybook and play around https://solid-design-system.fe.union-investment.de/x.x.x/storybook/)
- [ ] E2E-Tests with Playwright, Visual Regression Tests with Chromatic (every Story is a test)

## Work
- [ ] Structure of the project (monorepo with packages e.g. `components`)
- [ ] central linting and formatting (in root)
- [ ] packages have to be run theirself (`cd packages/components` → `pnpm dev`)
- [ ] make sure to have `pnpm` installed

## Merging
- [ ] We're using Semantic Release, whcih automatically creates releases based on your commits. Follow semantic-versioning in your commit names (`feat`, `fix`, `perf`, `docs`, `chore`, `ci`, `refactor`)
```
Commits with a breaking change will be associated with a major release.
Commits with type 'feat' will be associated with a minor release.
Commits with type 'fix' will be associated with a patch release.
Commits with type 'perf' will be associated with a patch release.
```
- [ ] Always think from the perspective of the people using our packages/components – will the final dist/bundle change? it's always `feat` `fix` or `perf` – if not, it's one of the others. Please reach out, if you're unsure.
- [ ] Always do Squash and Merge, before merging and remember using `feat: ✨ ` or whatever at the beginning of the squash message. Please rewrite or delete your addirtional commit message, if it's really long. Definitely check, if anywhere [skip ci] or similar was used, as this may break our release flow.


## Quick Start
Make sure to have pnpm installed: 
https://pnpm.io/installation

```
pnpm i
cd packages/components
pnpm dev
```

Please move Contributions.md from the components folder to the top.