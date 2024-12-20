# @solid-design-system/docs

## 1.3.0-next.2

### Minor Changes

- Codepens now link to correct styles and components in PRs, on next, main and on prod _[`#1749`](https://github.com/solid-design-system/solid/pull/1749) [`dee4112`](https://github.com/solid-design-system/solid/commit/dee41127ec4502537d1ddcb62acb63e386386bea) [@mariohamann](https://github.com/mariohamann)_

## 1.2.7-next.1

### Patch Changes

- The `variant` `gradient-white` of component `sd-teaser-media` was changed to `gradient-light` to be in sync with design. _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_

## 1.2.7-next.0

### Patch Changes

- Extend sd-interactive and icon-only buttons documentation regarding accessibility best practices. _[`#1740`](https://github.com/solid-design-system/solid/pull/1740) [`311d2f6`](https://github.com/solid-design-system/solid/commit/311d2f6715cddc760c6860bd6a0017a4123379da) [@smfonseca](https://github.com/smfonseca)_

## 1.2.6

### Patch Changes

- Fix typos in docs and configure spelling extension. _[`#1723`](https://github.com/solid-design-system/solid/pull/1723) [`1bf55d3`](https://github.com/solid-design-system/solid/commit/1bf55d37ffeaec412589b9bb0acccfe2d1d69978) [@karlbaumhauer](https://github.com/karlbaumhauer)_

## 1.2.5

### Patch Changes

- Improve copyright: _[`#1691`](https://github.com/solid-design-system/solid/pull/1691) [`0ea037c`](https://github.com/solid-design-system/solid/commit/0ea037cf5b283ea52936fc84e5eaea112ead257e) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add class to black color variant
  - Add class to remove shadow
  - Add class to top placement
  - Improve docs
  - Add tests for new variants

## 1.2.4

### Patch Changes

- Improve sd-dialog examples and templates: _[`#1721`](https://github.com/solid-design-system/solid/pull/1721) [`d81bd6d`](https://github.com/solid-design-system/solid/commit/d81bd6d60f42f9ac675f3d15744952f9dfca3bed) [@smfonseca](https://github.com/smfonseca)_

  - Added buttons to reopen dialog in both stories and templates
  - Added example actions to the templates buttons

## 1.2.3

### Patch Changes

- Improved a11y for sd-header: _[`#1668`](https://github.com/solid-design-system/solid/pull/1668) [`c2fb231`](https://github.com/solid-design-system/solid/commit/c2fb2318e910be9fd591ca50292a886a898d1c00) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add ARIA attributes sd-drawer close button
  - Improve logo link alt text
  - Improve open drawer button name
  - Add ARIA attributes to open drawer button
  - Improve icon buttons names

## 1.2.2

### Patch Changes

- Improved a11y for sd-step and sd-step-group: _[`#1688`](https://github.com/solid-design-system/solid/pull/1688) [`56daf24`](https://github.com/solid-design-system/solid/commit/56daf244989a624e2c54a22b94927d5aeb2fe44c) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add list role to sd-step-group
  - Add list-item role to sd-step
  - Fix tests
  - Remove tabindex to avoid a mismatch between information the users get depending on the chosen navigation type
  - Add ARIA attributes to components
  - Fix text colors in disabled state

## 1.2.1

### Patch Changes

- Improve carousel template alt descriptions _[`#1725`](https://github.com/solid-design-system/solid/pull/1725) [`203a8d8`](https://github.com/solid-design-system/solid/commit/203a8d83a69cba68df64ae5880a06c7927d4dcd9) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.2.0

### Minor Changes

- Restructure FAQ _[`#1608`](https://github.com/solid-design-system/solid/pull/1608) [`ee7287c`](https://github.com/solid-design-system/solid/commit/ee7287c88537c66c0c3a8ff487b91846037a28b3) [@karlbaumhauer](https://github.com/karlbaumhauer)_

  - Cluster FAQ items into sections
  - Rephrase some existing FAQ items
  - Add new FAQ item

## 1.1.1

### Patch Changes

- Improved sd-dropdown a11y: _[`#1715`](https://github.com/solid-design-system/solid/pull/1715) [`1ecd19f`](https://github.com/solid-design-system/solid/commit/1ecd19fa9c4bef060092361a71d0e7ae784ec50d) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Correctly label icon-button dropdown triggers.
  - Fix focus on the trigger after the dropdown is hidden using the keyboard.

## 1.1.0

### Minor Changes

- Add sd-combobox and improve sd-select. _[`#1633`](https://github.com/solid-design-system/solid/pull/1633) [`8a16da8`](https://github.com/solid-design-system/solid/commit/8a16da830e7fdd135d9dcbbc540c48ef567dbe02) [@DanielHargesheimer](https://github.com/DanielHargesheimer)_

  - add configurable `sd-combobox` component
  - add keyboard navigation and accessibility features
  - add multi-select and tag support
  - use backspace key to remove latest selected option on `sd-combobox`
  - use backspace key to remove focused tag and related option
  - improve tags presentation
  - show tags in selected order
  - add sd-optgroup component for better grouping of options

## 1.0.8

### Patch Changes

- Removed references to deprecated `library="global-resources"` from: _[`#1701`](https://github.com/solid-design-system/solid/pull/1701) [`82c6b31`](https://github.com/solid-design-system/solid/commit/82c6b314fc89478cda192fcadad0daa2b73fe70d) [@smfonseca](https://github.com/smfonseca)_

  - Spin buttons on the `sd-input`
  - Templates for `sd-interactive` and `sd-table`
  - Screenshot tests of several components and styles
  - Removed icon mocks

# [@solid-design-system/docs-v1.0.7](https://github.com/solid-design-system/solid/compare/docs/1.0.6...docs/1.0.7) (2024-11-29)

### Bug Fixes

- improve table template a11y ([#1664](https://github.com/solid-design-system/solid/issues/1664)) ([83fa79b](https://github.com/solid-design-system/solid/commit/83fa79b2c31f670da37566dd6a27e7d9c6f9681a)), closes [#1534](https://github.com/solid-design-system/solid/issues/1534)

# [@solid-design-system/docs-v1.0.6](https://github.com/solid-design-system/solid/compare/docs/1.0.5...docs/1.0.6) (2024-11-27)

### Bug Fixes

- improve sd-video a11y ([#1644](https://github.com/solid-design-system/solid/issues/1644)) ([6dec218](https://github.com/solid-design-system/solid/commit/6dec2189231b9d6538391b8e37b5228d4253d9ed)), closes [#1494](https://github.com/solid-design-system/solid/issues/1494) [#1529](https://github.com/solid-design-system/solid/issues/1529)

# [@solid-design-system/docs-v1.0.5](https://github.com/solid-design-system/solid/compare/docs/1.0.4...docs/1.0.5) (2024-11-25)

### Bug Fixes

- sd-teaser and sd-teaser-media a11y ([#1625](https://github.com/solid-design-system/solid/issues/1625)) ([68efac6](https://github.com/solid-design-system/solid/commit/68efac646eed449df0f16222732fa7d6cbb3f1f4))

# [@solid-design-system/docs-v1.0.4](https://github.com/solid-design-system/solid/compare/docs/1.0.3...docs/1.0.4) (2024-11-20)

### Bug Fixes

- sd-carousel & sd-carousel-item a11y ([#1607](https://github.com/solid-design-system/solid/issues/1607)) ([b207992](https://github.com/solid-design-system/solid/commit/b207992b727f9f80176b05101cb4314cacaeea80))

# [@solid-design-system/docs-v1.0.3](https://github.com/solid-design-system/solid/compare/docs/1.0.2...docs/1.0.3) (2024-11-20)

### Bug Fixes

- improve sd-tag a11y ([#1640](https://github.com/solid-design-system/solid/issues/1640)) ([ea788ef](https://github.com/solid-design-system/solid/commit/ea788ef53db4c051be9ea08ec54218b086585254)), closes [#1490](https://github.com/solid-design-system/solid/issues/1490)
- improve sd-textarea a11y [skip chromatic] ([#1642](https://github.com/solid-design-system/solid/issues/1642)) ([4560278](https://github.com/solid-design-system/solid/commit/4560278baa2eac2bb628ca555b1f724ef94acabe)), closes [#1492](https://github.com/solid-design-system/solid/issues/1492)

# [@solid-design-system/docs-v1.0.2](https://github.com/solid-design-system/solid/compare/docs/1.0.1...docs/1.0.2) (2024-11-14)

### Bug Fixes

- sd-input a11y ([#1615](https://github.com/solid-design-system/solid/issues/1615)) ([cbaaf6e](https://github.com/solid-design-system/solid/commit/cbaaf6ecbba5da64874eda1f686fd1b6c4cd4b4c))

# [@solid-design-system/docs-v1.0.1](https://github.com/solid-design-system/solid/compare/docs/1.0.0...docs/1.0.1) (2024-11-08)

### Bug Fixes

- add correct path to changelog of docs ([#1629](https://github.com/solid-design-system/solid/issues/1629)) ([9425c39](https://github.com/solid-design-system/solid/commit/9425c39dcb0a213831cb55b82929876d0d4a1c4b))

# @solid-design-system/docs-v1.0.0 (2024-11-08)

### Features

- create docs package for solid components ([#1550](https://github.com/solid-design-system/solid/issues/1550)) ([7555d18](https://github.com/solid-design-system/solid/commit/7555d182abfa34a23521c839180ae4b67604717e)), closes [#1131](https://github.com/solid-design-system/solid/issues/1131)
