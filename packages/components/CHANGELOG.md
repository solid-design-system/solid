# @solid-design-system/components

## 4.0.0-next.11

### Patch Changes

- Fixed gradient issue on flipcard. _[`#1752`](https://github.com/solid-design-system/solid/pull/1752) [`1f05b67`](https://github.com/solid-design-system/solid/commit/1f05b677f64c6fca93e5764cfd283ddd17dcc145) [@paulovareiro29](https://github.com/paulovareiro29)_

  Implemented an improved flipcard template version.

### 📈 Stats
* Uncompressed: 399 KB (+1 KB / +0%)
* Gzipped: 94 KB (unchanged)

## 4.0.0-next.10

### Major Changes

- Removed `sd-video` overlay feature. _[`#1776`](https://github.com/solid-design-system/solid/pull/1776) [`d12e330`](https://github.com/solid-design-system/solid/commit/d12e3305ca95bc63188017b1ea3113e41019e27c) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 398 KB (-1 KB / 0%)
- Gzipped: 94 KB (unchanged)

## 4.0.0-next.9

### Major Changes

- Rename sd-badge `variant` attribute options for accessibility purposes. _[`#1774`](https://github.com/solid-design-system/solid/pull/1774) [`8b96338`](https://github.com/solid-design-system/solid/commit/8b963385855a6440b3a888ac73bec1ae71697a67) [@smfonseca](https://github.com/smfonseca)_

  - `variant="default"` -> `variant="blue"`
  - `variant="sucess"` -> `variant="green"`
  - `variant="error"` -> `variant="red"`

## 4.0.0-next.8

### Patch Changes

- Make sd-select and sd-combobox placeholders translatable. _[`#1761`](https://github.com/solid-design-system/solid/pull/1761) [`6b544f5`](https://github.com/solid-design-system/solid/commit/6b544f5b50f0a5b4c33e04a44c46bd35dbd1d8d3) [@smfonseca](https://github.com/smfonseca)_

## 4.0.0-next.7

### Patch Changes

- Bugfixes and minor non-breaking changes to the sd-select and sd-combobox components _[`#1742`](https://github.com/solid-design-system/solid/pull/1742) [`125d5f1`](https://github.com/solid-design-system/solid/commit/125d5f1db6c0eaf19500cc333ac33ab39646d842) [@DanielHargesheimer](https://github.com/DanielHargesheimer)_

  - sd-combobox: emit events correctly
  - sd-combobox: set options' initial attributes
  - sd-select and sd-combobox: add max-options-tag-label attribute
  - sd-select: add --tag-max-width and ellipsis

### 📈 Stats

- Uncompressed: 399 KB (+1 KB / +0%)
- Gzipped: 94 KB (unchanged)

## 4.0.0-next.6

### Patch Changes

- Improved sd-flipcard hidden side a11y: _[`#1760`](https://github.com/solid-design-system/solid/pull/1760) [`a64a5ba`](https://github.com/solid-design-system/solid/commit/a64a5bad336ba72b62b1a1f63685a6f58bd895c5) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Interactive elements are no longer reachable.
  - Content is no longer read by screenreader.

## 4.0.0-next.5

### Patch Changes

- Fix a rare bug in the disconnecedCallback of sd-tab-group when being dynamically created and removed _[`#1768`](https://github.com/solid-design-system/solid/pull/1768) [`fbf375e`](https://github.com/solid-design-system/solid/commit/fbf375e19e760fe3765f965c06929ae846fb44f1) [@mariohamann](https://github.com/mariohamann)_

## 4.0.0-next.4

### Patch Changes

- Fixed broken padding on tab left slot. _[`#1755`](https://github.com/solid-design-system/solid/pull/1755) [`9954447`](https://github.com/solid-design-system/solid/commit/9954447efacc72908971c123b94bfd549dc69454) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.0.0-next.3

### Minor Changes

- Adapt `sd-accordion` and expandable `sd-quickfact` HTML to use `<details />` and `<summary />` elements. _[`#1757`](https://github.com/solid-design-system/solid/pull/1757) [`b83d804`](https://github.com/solid-design-system/solid/commit/b83d8049db1abaa8744f806412c35609109ef04d) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 398 KB (+1 KB / +0%)
- Gzipped: 94 KB (unchanged)

## 4.0.0-next.2

### Patch Changes

- Improved sd-divider a11y: _[`#1751`](https://github.com/solid-design-system/solid/pull/1751) [`f0fd5cb`](https://github.com/solid-design-system/solid/commit/f0fd5cb9a61b07cb487455b1da2a374d89ef93ca) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Implemented aria-orientation attribute

## 4.0.0-next.1

### Patch Changes

- Improve sd-teaser a11y: _[`#1748`](https://github.com/solid-design-system/solid/pull/1748) [`5a8c80f`](https://github.com/solid-design-system/solid/commit/5a8c80f22b39bc722614974b797164d78d6de29e) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Reordered DOM elements in order for headline to be read first by screen readers

## 4.0.0-next.0

### Major Changes

- Default slot is now hidden in `variant=picture` of component `sd-brandshape` _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- The `variant` `gradient-white` of component `sd-teaser-media` was changed to `gradient-light` to be in sync with design. _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- Default `size` of style `sd-display` is now `4xl` instead of `xl`. _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- The `sd-flipcard` component has been updated to improve a11y, flexibility and alignment with design. Checkout the migration guide for more details. _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- The default `size` `base` in component `sd-navigation-item` was changed to `md` to be consistent with other components. _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_

### Patch Changes

- List anchor slot of sd-tooltip in types _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- Fix icon slots in `sd-audio` _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_

### 📈 Stats

- Uncompressed: 397 KB (-43 KB / -10%)
- Gzipped: 94 KB (-38 KB / -29%)

## 3.24.0

### Minor Changes

- Improve copyright: _[`#1691`](https://github.com/solid-design-system/solid/pull/1691) [`0ea037c`](https://github.com/solid-design-system/solid/commit/0ea037cf5b283ea52936fc84e5eaea112ead257e) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add class to black color variant
  - Add class to remove shadow
  - Add class to top placement
  - Improve docs
  - Add tests for new variants

## 3.23.4

### Patch Changes

- Improved sd-dialog accessibility: _[`#1721`](https://github.com/solid-design-system/solid/pull/1721) [`d81bd6d`](https://github.com/solid-design-system/solid/commit/d81bd6d60f42f9ac675f3d15744952f9dfca3bed) [@smfonseca](https://github.com/smfonseca)_

  - Added focus styles on dialog panel
  - Fixed content overflowing when zoom level is above 250%
  - Fixed invalid nested header in the `headline` slot
  - Updated documentation for `headline` slot

## 3.23.3

### Patch Changes

- Improved a11y for sd-header: _[`#1668`](https://github.com/solid-design-system/solid/pull/1668) [`c2fb231`](https://github.com/solid-design-system/solid/commit/c2fb2318e910be9fd591ca50292a886a898d1c00) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add ARIA attributes sd-drawer close button
  - Improve logo link alt text
  - Improve open drawer button name
  - Add ARIA attributes to open drawer button
  - Improve icon buttons names

## 3.23.2

### Patch Changes

- Improved a11y for sd-step and sd-step-group: _[`#1688`](https://github.com/solid-design-system/solid/pull/1688) [`56daf24`](https://github.com/solid-design-system/solid/commit/56daf244989a624e2c54a22b94927d5aeb2fe44c) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add list role to sd-step-group
  - Add list-item role to sd-step
  - Fix tests
  - Remove tabindex to avoid a mismatch between information the users get depending on the chosen navigation type
  - Add ARIA attributes to components
  - Fix text colors in disabled state

## 3.23.1

### Patch Changes

- Improved sd-dropdown a11y: _[`#1715`](https://github.com/solid-design-system/solid/pull/1715) [`1ecd19f`](https://github.com/solid-design-system/solid/commit/1ecd19fa9c4bef060092361a71d0e7ae784ec50d) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Correctly label icon-button dropdown triggers.
  - Fix focus on the trigger after the dropdown is hidden using the keyboard.

### 📈 Stats

- Uncompressed: 440 KB (+1 KB / +0%)
- Gzipped: 132 KB (unchanged)

## 3.23.0

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

### 📈 Stats

- Uncompressed: 439 KB (+29 KB / +7%)
- Gzipped: 132 KB (+7 KB / +6%)

## 3.22.18

### Patch Changes

- Improved sd-select a11y: _[`#1710`](https://github.com/solid-design-system/solid/pull/1710) [`ab76208`](https://github.com/solid-design-system/solid/commit/ab76208754415a3c146795b7e8329df3006ea74c) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Implemented `aria-invalid` attribute to semantically indicate component validity.
  - Implemented live announcement to screen readers when a tag is removed.

### 📈 Stats

- Uncompressed: 410 KB (+1 KB / +0%)
- Gzipped: 125 KB (unchanged)

## 3.22.17

### Patch Changes

- Improve sd-checkbox-group keyboard navigation by removing `tabindex="0"` from first checkbox. _[`#1704`](https://github.com/solid-design-system/solid/pull/1704) [`fff6b1a`](https://github.com/solid-design-system/solid/commit/fff6b1a69e777ed109f0197bd0774f788bca8721) [@smfonseca](https://github.com/smfonseca)_

## 3.22.16

### Patch Changes

- Removed references to deprecated `library="global-resources"` from: _[`#1701`](https://github.com/solid-design-system/solid/pull/1701) [`82c6b31`](https://github.com/solid-design-system/solid/commit/82c6b314fc89478cda192fcadad0daa2b73fe70d) [@smfonseca](https://github.com/smfonseca)_

  - Spin buttons on the `sd-input`
  - Templates for `sd-interactive` and `sd-table`
  - Screenshot tests of several components and styles
  - Removed icon mocks

## 3.22.15

### Patch Changes

- Improved sd-flag a11y: _[`#1705`](https://github.com/solid-design-system/solid/pull/1705) [`b4c123e`](https://github.com/solid-design-system/solid/commit/b4c123ef67e6d7106358c3a4aaab8f377db10326) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Change text color on bg neutral-500 from white to black to comply with WCAG 2.2

## 3.22.14

### Patch Changes

- Improve accessibility for `sd-checkbox` validation _[`#1707`](https://github.com/solid-design-system/solid/pull/1707) [`c8a45dd`](https://github.com/solid-design-system/solid/commit/c8a45dd2f568bf86c33bc525e32a4eee42641399) [@smfonseca](https://github.com/smfonseca)_

  - Add `aria-invalid` to identify checkboxes that have failed validation
  - Add new set of tests for `aria-invalid`

## 3.22.13

### Patch Changes

- [#1695](https://github.com/solid-design-system/solid/pull/1695) [`f472ee8`](https://github.com/solid-design-system/solid/commit/f472ee8177e3dff9ce9f494a21ff19ac3ecab334) Thanks [@mariohamann](https://github.com/mariohamann)! - Fix CDN deployment for `components`. Same functionality as `@solid-design-system/components@3.22.12`.

## 3.22.12

### Patch Changes

- [#1634](https://github.com/solid-design-system/solid/pull/1634) [`a104378`](https://github.com/solid-design-system/solid/commit/a104378ef1f3febfe262e6af6e9814e71b4e889b) Thanks [@Vahid1919](https://github.com/Vahid1919)! - Improved a11y for sd-tab-group.

  - Improve keyboard navigation.
  - Added labels to icons for the navigation buttons.
  - Added focus styles for tab panels.

# [@solid-design-system/components-v3.22.11](https://github.com/solid-design-system/solid/compare/components/3.22.10...components/3.22.11) (2024-11-27)

### Bug Fixes

- improve sd-video a11y ([#1644](https://github.com/solid-design-system/solid/issues/1644)) ([6dec218](https://github.com/solid-design-system/solid/commit/6dec2189231b9d6538391b8e37b5228d4253d9ed)), closes [#1494](https://github.com/solid-design-system/solid/issues/1494) [#1529](https://github.com/solid-design-system/solid/issues/1529)

# [@solid-design-system/components-v3.22.10](https://github.com/solid-design-system/solid/compare/components/3.22.9...components/3.22.10) (2024-11-27)

### Bug Fixes

- sd-scrollable a11y ([#1643](https://github.com/solid-design-system/solid/issues/1643)) ([0178db6](https://github.com/solid-design-system/solid/commit/0178db64c4195c9345a9f63f8a35cdbd10c240b7))

### 📈 Stats

- Bundle size (uncompressed): 409 KB (+1 KB / +0%)
- Bundle size (gzipped): 125 KB (unchanged)

# [@solid-design-system/components-v3.22.9](https://github.com/solid-design-system/solid/compare/components/3.22.8...components/3.22.9) (2024-11-25)

### Bug Fixes

- sd-teaser and sd-teaser-media a11y ([#1625](https://github.com/solid-design-system/solid/issues/1625)) ([68efac6](https://github.com/solid-design-system/solid/commit/68efac646eed449df0f16222732fa7d6cbb3f1f4))

# [@solid-design-system/components-v3.22.8](https://github.com/solid-design-system/solid/compare/components/3.22.7...components/3.22.8) (2024-11-21)

### Bug Fixes

- improve sd-button a11y ([#1641](https://github.com/solid-design-system/solid/issues/1641)) ([3a9a8bf](https://github.com/solid-design-system/solid/commit/3a9a8bfa4f7d38dca9f2e3de5a1f4f222edb69c8))

# [@solid-design-system/components-v3.22.7](https://github.com/solid-design-system/solid/compare/components/3.22.6...components/3.22.7) (2024-11-20)

### Bug Fixes

- sd-carousel & sd-carousel-item a11y ([#1607](https://github.com/solid-design-system/solid/issues/1607)) ([b207992](https://github.com/solid-design-system/solid/commit/b207992b727f9f80176b05101cb4314cacaeea80))

### 📈 Stats

- Bundle size (uncompressed): 408 KB (+1 KB / +0%)
- Bundle size (gzipped): 125 KB (unchanged)

# [@solid-design-system/components-v3.22.6](https://github.com/solid-design-system/solid/compare/components/3.22.5...components/3.22.6) (2024-11-20)

### Bug Fixes

- set sd-select placeholder text-color to neutral-700 ([#1659](https://github.com/solid-design-system/solid/issues/1659)) ([863a09e](https://github.com/solid-design-system/solid/commit/863a09e88ec2439fe7e97670ba90fae0dd97de88))

# [@solid-design-system/components-v3.22.5](https://github.com/solid-design-system/solid/compare/components/3.22.4...components/3.22.5) (2024-11-20)

### Bug Fixes

- improve sd-tag a11y ([#1640](https://github.com/solid-design-system/solid/issues/1640)) ([ea788ef](https://github.com/solid-design-system/solid/commit/ea788ef53db4c051be9ea08ec54218b086585254)), closes [#1490](https://github.com/solid-design-system/solid/issues/1490)
- improve sd-textarea a11y [skip chromatic] ([#1642](https://github.com/solid-design-system/solid/issues/1642)) ([4560278](https://github.com/solid-design-system/solid/commit/4560278baa2eac2bb628ca555b1f724ef94acabe)), closes [#1492](https://github.com/solid-design-system/solid/issues/1492)

# [@solid-design-system/components-v3.22.4](https://github.com/solid-design-system/solid/compare/components/3.22.3...components/3.22.4) (2024-11-18)

### Bug Fixes

- improve sd-switch a11y ([#1646](https://github.com/solid-design-system/solid/issues/1646)) ([79b74dd](https://github.com/solid-design-system/solid/commit/79b74dd08a3914a6e1a3e5bb08f13d8b51a013a0)), closes [#1488](https://github.com/solid-design-system/solid/issues/1488)

# [@solid-design-system/components-v3.22.3](https://github.com/solid-design-system/solid/compare/components/3.22.2...components/3.22.3) (2024-11-15)

### Bug Fixes

- 🐛 make validation more accessible in all form elements ([#1619](https://github.com/solid-design-system/solid/issues/1619)) ([7a2ca8d](https://github.com/solid-design-system/solid/commit/7a2ca8d5a3a2086461cc33db57697be0bb61b874))

# [@solid-design-system/components-v3.22.2](https://github.com/solid-design-system/solid/compare/components/3.22.1...components/3.22.2) (2024-11-14)

### Bug Fixes

- sd-input a11y ([#1615](https://github.com/solid-design-system/solid/issues/1615)) ([cbaaf6e](https://github.com/solid-design-system/solid/commit/cbaaf6ecbba5da64874eda1f686fd1b6c4cd4b4c))

### 📈 Stats

- Bundle size (uncompressed): 407 KB (+5 KB / +1%)
- Bundle size (gzipped): 125 KB (+2 KB / +2%)

# [@solid-design-system/components-v3.22.1](https://github.com/solid-design-system/solid/compare/components/3.22.0...components/3.22.1) (2024-11-13)

### Bug Fixes

- sd-map-marker accessibility violation ([#1617](https://github.com/solid-design-system/solid/issues/1617)) ([59face8](https://github.com/solid-design-system/solid/commit/59face88ccc38b953e6abf63d42bb95aad401cdd))

# [@solid-design-system/components-v3.22.0](https://github.com/solid-design-system/solid/compare/components/3.21.0...components/3.22.0) (2024-11-08)

### Features

> **Note:** This feature is related to the new docs package and not directly to the components package. However, it is documented here for completeness.

- create docs package for solid components ([#1550](https://github.com/solid-design-system/solid/issues/1550)) ([7555d18](https://github.com/solid-design-system/solid/commit/7555d182abfa34a23521c839180ae4b67604717e)), closes [#1131](https://github.com/solid-design-system/solid/issues/1131)

# [@solid-design-system/components-v3.21.0](https://github.com/solid-design-system/solid/compare/components/3.20.7...components/3.21.0) (2024-11-08)

### Features

- create tooltip slot for input elements ([#1579](https://github.com/solid-design-system/solid/issues/1579)) ([4fa2304](https://github.com/solid-design-system/solid/commit/4fa2304339ba411446c191f26bf971fba8255dfd))

# [@solid-design-system/components-v3.20.7](https://github.com/solid-design-system/solid/compare/components/3.20.6...components/3.20.7) (2024-11-07)

### Bug Fixes

- sd-interactive a11y template ([#1614](https://github.com/solid-design-system/solid/issues/1614)) ([05ae4f1](https://github.com/solid-design-system/solid/commit/05ae4f157743fad4dea8f12db3aa6c86c9f68c5

# [@solid-design-system/components-v3.20.6](https://github.com/solid-design-system/solid/compare/components/3.20.5...components/3.20.6) (2024-10-31)

### Bug Fixes

- sd-map-marker a11y ([#1577](https://github.com/solid-design-system/solid/issues/1577)) ([d755c32](https://github.com/solid-design-system/solid/commit/d755c32fbce6c0134d4eec2faf36e7977a8e2caf))

### 📈 Stats

- Bundle size (uncompressed): 402 KB (+1 KB / +0%)
- Bundle size (gzipped): 123 KB (unchanged)

# [@solid-design-system/components-v3.20.5](https://github.com/solid-design-system/solid/compare/components/3.20.4...components/3.20.5) (2024-10-31)

### Bug Fixes

- sd badge a11y ([#1563](https://github.com/solid-design-system/solid/issues/1563)) ([762656f](https://github.com/solid-design-system/solid/commit/762656f162fa1dbdf4cf56dc8f5974cbd1dc9dbc))

# [@solid-design-system/components-v3.20.4](https://github.com/solid-design-system/solid/compare/components/3.20.3...components/3.20.4) (2024-10-30)

### Bug Fixes

- sd-navigation-item a11y ([#1578](https://github.com/solid-design-system/solid/issues/1578)) ([b416555](https://github.com/solid-design-system/solid/commit/b416555becc2a9fa649725d44d485a174fb379cd))

### 📈 Stats

- Bundle size (uncompressed): 401 KB (+52 KB / +15%)
- Bundle size (gzipped): 123 KB (+41 KB / +50%)

# [@solid-design-system/components-v3.20.3](https://github.com/solid-design-system/solid/compare/components/3.20.2...components/3.20.3) (2024-10-29)

### Bug Fixes

- dot controls in sd-carousel to behave like numbered controls ([#1584](https://github.com/solid-design-system/solid/issues/1584)) ([aadae6b](https://github.com/solid-design-system/solid/commit/aadae6b771cc669425e46027d80f7ff78b17167e)), closes [#1398](https://github.com/solid-design-system/solid/issues/1398)

# [@solid-design-system/components-v3.20.2](https://github.com/solid-design-system/solid/compare/components/3.20.1...components/3.20.2) (2024-10-24)

### Bug Fixes

- sd-brandshape a11y ([#1585](https://github.com/solid-design-system/solid/issues/1585)) ([3e491a7](https://github.com/solid-design-system/solid/commit/3e491a7e0648053b61c65d1aa03abaf070de2f72))

# [@solid-design-system/components-v3.20.1](https://github.com/solid-design-system/solid/compare/components/3.20.0...components/3.20.1) (2024-10-18)

### Bug Fixes

- make svgs in sd-map-marker visible on non-Chromium ([#1567](https://github.com/solid-design-system/solid/issues/1567)) ([1f08ca7](https://github.com/solid-design-system/solid/commit/1f08ca7cf1521bb3a087df7d7bc32f20a3b76fdb))

### 📈 Stats

- Bundle size (uncompressed): 349 KB (-1 KB / 0%)
- Bundle size (gzipped): 82 KB (unchanged)

# [@solid-design-system/components-v3.20.0](https://github.com/solid-design-system/solid/compare/components/3.19.3...components/3.20.0) (2024-10-18)

### Features

- add 'md' size to sd-radio, sd-checkbox and sd-checkbox-group ([#1549](https://github.com/solid-design-system/solid/issues/1549)) ([3ffc319](https://github.com/solid-design-system/solid/commit/3ffc3197a931f3175083a90298ea5dc19b4f9274))

### 📈 Stats

- Bundle size (uncompressed): 350 KB (+1 KB / +0%)
- Bundle size (gzipped): 82 KB (unchanged)

# [@solid-design-system/components-v3.19.3](https://github.com/solid-design-system/solid/compare/components/3.19.2...components/3.19.3) (2024-10-17)

### Bug Fixes

- 🤔 sd-brandshape – improve image positioning ([#1415](https://github.com/solid-design-system/solid/issues/1415)) ([c4902ed](https://github.com/solid-design-system/solid/commit/c4902ed840753ffb6e5986fcd975e90b9bb8b630))

### 📈 Stats

- Bundle size (uncompressed): 349 KB (-1 KB / 0%)
- Bundle size (gzipped): 82 KB (unchanged)

# [@solid-design-system/components-v3.19.2](https://github.com/solid-design-system/solid/compare/components/3.19.1...components/3.19.2) (2024-10-17)

### Bug Fixes

- 🤔 pause not working in sd-carousel ([#1467](https://github.com/solid-design-system/solid/issues/1467)) ([e594b21](https://github.com/solid-design-system/solid/commit/e594b21bdc225728cff9bb6ffdf66f7f21342af0))

# [@solid-design-system/components-v3.19.1](https://github.com/solid-design-system/solid/compare/components/3.19.0...components/3.19.1) (2024-10-16)

### Bug Fixes

- licensing and placeholder images ([#1547](https://github.com/solid-design-system/solid/issues/1547)) ([b204b77](https://github.com/solid-design-system/solid/commit/b204b77fd3b2ca38b6fd8b19d6563751051f424d))

# [@solid-design-system/components-v3.19.0](https://github.com/solid-design-system/solid/compare/components/3.18.0...components/3.19.0) (2024-10-16)

### Features

- sd-audio ([#1194](https://github.com/solid-design-system/solid/issues/1194)) ([8757a14](https://github.com/solid-design-system/solid/commit/8757a14944c61e84e51b9667ff0a25f13d2ec9cb)), closes [#270](https://github.com/solid-design-system/solid/issues/270)

# [@solid-design-system/components-v3.18.0](https://github.com/solid-design-system/solid/compare/components/3.17.12...components/3.18.0) (2024-10-08)

### Features

- ✨ add vertical variant to sd-copyright ([#1414](https://github.com/solid-design-system/solid/issues/1414)) ([461909d](https://github.com/solid-design-system/solid/commit/461909d762d464be9228bcc861794b5180016ca0))

# [@solid-design-system/components-v3.17.12](https://github.com/solid-design-system/solid/compare/components/3.17.11...components/3.17.12) (2024-10-02)

### Bug Fixes

- 🤔 missing border when sd-select has not enough space ([#1408](https://github.com/solid-design-system/solid/issues/1408)) ([3639804](https://github.com/solid-design-system/solid/commit/36398045be397b8a700137a3dc747dd3d362cacd))
- 🤔 sd-textarea doesn't accept full height of container ([#1410](https://github.com/solid-design-system/solid/issues/1410)) ([eda7432](https://github.com/solid-design-system/solid/commit/eda74326b5dd678818a3900f14868ed3b5722c97))

# [@solid-design-system/components-v3.17.11](https://github.com/solid-design-system/solid/compare/components/3.17.10...components/3.17.11) (2024-09-27)

### Bug Fixes

- make sd-step-group more accessible ([#1390](https://github.com/solid-design-system/solid/issues/1390)) ([c7fc385](https://github.com/solid-design-system/solid/commit/c7fc38537480d17e1662152a359a79a363d9313e))

# [@solid-design-system/components-v3.17.10](https://github.com/solid-design-system/solid/compare/components/3.17.9...components/3.17.10) (2024-09-25)

### Bug Fixes

- 🤔 (unchecked) checkbox in sd-select does not keep size while resizing sd-popup ([#1397](https://github.com/solid-design-system/solid/issues/1397)) ([cffa05d](https://github.com/solid-design-system/solid/commit/cffa05da8e8d30716da2e9f86d8a8843a289c30f))

# [@solid-design-system/components-v3.17.9](https://github.com/solid-design-system/solid/compare/components/3.17.8...components/3.17.9) (2024-09-25)

### Bug Fixes

- 🤔 map-marker main -> white circle ([#1389](https://github.com/solid-design-system/solid/issues/1389)) ([52665da](https://github.com/solid-design-system/solid/commit/52665da06b703db56082a04e41a2b362ae58c01e))

# [@solid-design-system/components-v3.17.8](https://github.com/solid-design-system/solid/compare/components/3.17.7...components/3.17.8) (2024-09-20)

### Bug Fixes

- 🤔 update experimental status ([#1396](https://github.com/solid-design-system/solid/issues/1396)) ([d3201d4](https://github.com/solid-design-system/solid/commit/d3201d47939c33556d342e175e24b011132989fb))

# [@solid-design-system/components-v3.17.7](https://github.com/solid-design-system/solid/compare/components/3.17.6...components/3.17.7) (2024-09-20)

### Bug Fixes

- 🤔 sd-footnotes inverted variant color ([#1409](https://github.com/solid-design-system/solid/issues/1409)) ([c4d9813](https://github.com/solid-design-system/solid/commit/c4d9813cd7a8f7ed6311c6096ea334d55ed77f31))

# [@solid-design-system/components-v3.17.6](https://github.com/solid-design-system/solid/compare/components/3.17.5...components/3.17.6) (2024-09-17)

### Bug Fixes

- 🤔 reduce clickable area to label length in sd-switch, sd-radio and sd-checkbox ([#1392](https://github.com/solid-design-system/solid/issues/1392)) ([ed9c816](https://github.com/solid-design-system/solid/commit/ed9c8166acf532efbda6bd602068c8c61fd95753))

# [@solid-design-system/components-v3.17.5](https://github.com/solid-design-system/solid/compare/components/3.17.4...components/3.17.5) (2024-09-17)

### Bug Fixes

- 🤔 correct colors in form field validation ([#1381](https://github.com/solid-design-system/solid/issues/1381)) ([c587094](https://github.com/solid-design-system/solid/commit/c587094d67b90e033189e0dc00406dd97df3afde))

# [@solid-design-system/components-v3.17.4](https://github.com/solid-design-system/solid/compare/components/3.17.3...components/3.17.4) (2024-09-02)

### Bug Fixes

- incorrect indent of sd-footnotes ([#1328](https://github.com/solid-design-system/solid/issues/1328)) ([646f455](https://github.com/solid-design-system/solid/commit/646f455d6c79815a7bd7af0366a84dfd29fc3883))

# [@solid-design-system/components-v3.17.3](https://github.com/solid-design-system/solid/compare/components/3.17.2...components/3.17.3) (2024-08-29)

### Bug Fixes

- 🤔 add missing neutral-500 border on disabled+checked sd-radio-buttons ([#1330](https://github.com/solid-design-system/solid/issues/1330)) ([d00025c](https://github.com/solid-design-system/solid/commit/d00025cce2204c066a9309cc777e88811f4de478))

# [@solid-design-system/components-v3.17.2](https://github.com/solid-design-system/solid/compare/components/3.17.1...components/3.17.2) (2024-08-28)

### Bug Fixes

- correct readonly background styles for sd-input ([#1323](https://github.com/solid-design-system/solid/issues/1323)) ([5aba0f1](https://github.com/solid-design-system/solid/commit/5aba0f1998e1b62c319c90245b804c42691759cd))

# [@solid-design-system/components-v3.17.1](https://github.com/solid-design-system/solid/compare/components/3.17.0...components/3.17.1) (2024-08-28)

### Bug Fixes

- add missing labels for close buttons ([#1321](https://github.com/solid-design-system/solid/issues/1321)) ([60b973d](https://github.com/solid-design-system/solid/commit/60b973ddbc5220051966bf9c00ca59810f2ada29))

# [@solid-design-system/components-v3.17.0](https://github.com/solid-design-system/solid/compare/components/3.16.1...components/3.17.0) (2024-08-23)

### Features

- ✨ make sd-prose work better with sd-leadtext ([#1305](https://github.com/solid-design-system/solid/issues/1305)) ([8f3e8ca](https://github.com/solid-design-system/solid/commit/8f3e8ca71960c80fe613c1db39d7083b22aee220))

# [@solid-design-system/components-v3.16.1](https://github.com/solid-design-system/solid/compare/components/3.16.0...components/3.16.1) (2024-08-23)

### Bug Fixes

- neutral-100 should apply on readonly textarea ([#1303](https://github.com/solid-design-system/solid/issues/1303)) ([f736f17](https://github.com/solid-design-system/solid/commit/f736f17e689175bd24839b2826bfe4bd7b73781d))

# [@solid-design-system/components-v3.16.0](https://github.com/solid-design-system/solid/compare/components/3.15.0...components/3.16.0) (2024-08-21)

### Features

- use new default green for ui icons ([#1301](https://github.com/solid-design-system/solid/issues/1301)) ([5498431](https://github.com/solid-design-system/solid/commit/54984315561114898466b46fdc7e09cabad09ce6))

# [@solid-design-system/components-v3.15.0](https://github.com/solid-design-system/solid/compare/components/3.14.1...components/3.15.0) (2024-08-20)

### Features

- ✨ add style sd-hidden-links ([#1261](https://github.com/solid-design-system/solid/issues/1261)) ([afbb92d](https://github.com/solid-design-system/solid/commit/afbb92da7f29f55a553685ac02c34b19c8a3b855))

# [@solid-design-system/components-v3.14.1](https://github.com/solid-design-system/solid/compare/components/3.14.0...components/3.14.1) (2024-08-15)

### Bug Fixes

- 🤔 sd-carousel - numbered variant - show total clicks ([#1247](https://github.com/solid-design-system/solid/issues/1247)) ([7f22b7f](https://github.com/solid-design-system/solid/commit/7f22b7f89ec6423d33e42b80aaac8706b093906d))

### 📈 Stats

- Bundle size (uncompressed): 335 KB (+1 KB / +0%)
- Bundle size (gzipped): 79 KB (+1 KB / +1%)

# [@solid-design-system/components-v3.14.0](https://github.com/solid-design-system/solid/compare/components/3.13.0...components/3.14.0) (2024-08-15)

### Features

- ✨ enable usage of link with children on sd-navigation-item ([#1236](https://github.com/solid-design-system/solid/issues/1236)) ([35b4770](https://github.com/solid-design-system/solid/commit/35b477077135886f966aa90c81dea96d2b55163c))

### 📈 Stats

- Bundle size (uncompressed): 334 KB (+1 KB / +0%)
- Bundle size (gzipped): 78 KB (unchanged)

# [@solid-design-system/components-v3.13.0](https://github.com/solid-design-system/solid/compare/components/3.12.0...components/3.13.0) (2024-08-13)

### Features

- update celum icons url ([#1281](https://github.com/solid-design-system/solid/issues/1281)) ([6a2899b](https://github.com/solid-design-system/solid/commit/6a2899bb6272be3cb802c6d0675558fff0903fca))

# [@solid-design-system/components-v3.12.0](https://github.com/solid-design-system/solid/compare/components/3.11.1...components/3.12.0) (2024-08-09)

### Features

- add quickfact ([#1189](https://github.com/solid-design-system/solid/issues/1189)) ([fc2de27](https://github.com/solid-design-system/solid/commit/fc2de277c58f217170ff39759313ad21d7a3391d))

### 📈 Stats

- Bundle size (uncompressed): 333 KB (+4 KB / +1%)
- Bundle size (gzipped): 78 KB (unchanged)

# [@solid-design-system/components-v3.11.1](https://github.com/solid-design-system/solid/compare/components/3.11.0...components/3.11.1) (2024-08-05)

### Bug Fixes

- pass empty download attr to "a" tag in sd-link ([#1234](https://github.com/solid-design-system/solid/issues/1234)) ([0ec5939](https://github.com/solid-design-system/solid/commit/0ec5939d744ef784d5d5d7e8908092d026d62576))

# [@solid-design-system/components-v3.11.0](https://github.com/solid-design-system/solid/compare/components/3.10.3...components/3.11.0) (2024-08-02)

### Features

- add sd-expandable ([#1214](https://github.com/solid-design-system/solid/issues/1214)) ([3668556](https://github.com/solid-design-system/solid/commit/36685568b549e17f903ce3861013d65a08cb8259))

### 📈 Stats

- Bundle size (uncompressed): 329 KB (+4 KB / +1%)
- Bundle size (gzipped): 78 KB (+1 KB / +1%)

# [@solid-design-system/components-v3.10.3](https://github.com/solid-design-system/solid/compare/components/3.10.2...components/3.10.3) (2024-08-01)

### Bug Fixes

- missing border sd-container variant-border-neutral-400 ([#1229](https://github.com/solid-design-system/solid/issues/1229)) ([94e8b15](https://github.com/solid-design-system/solid/commit/94e8b15eb533b5313e29080036cb5cad2fc389e5)), closes [#1228](https://github.com/solid-design-system/solid/issues/1228)

# [@solid-design-system/components-v3.10.2](https://github.com/solid-design-system/solid/compare/components/3.10.1...components/3.10.2) (2024-07-30)

### Bug Fixes

- [#1193](https://github.com/solid-design-system/solid/issues/1193) correct clear button color in sd-icon and sd-select ([#1217](https://github.com/solid-design-system/solid/issues/1217)) ([0fa1fd2](https://github.com/solid-design-system/solid/commit/0fa1fd24aabf3c9c73802ba5b0afe33c7ce7058e))

# [@solid-design-system/components-v3.10.1](https://github.com/solid-design-system/solid/compare/components/3.10.0...components/3.10.1) (2024-07-30)

### Bug Fixes

- sd-tooltip self closing with click focus trigger (close [#1211](https://github.com/solid-design-system/solid/issues/1211)) ([#1220](https://github.com/solid-design-system/solid/issues/1220)) ([6377696](https://github.com/solid-design-system/solid/commit/637769600df9f42d1a986df48f8c56f5e9b5881d))

# [@solid-design-system/components-v3.10.0](https://github.com/solid-design-system/solid/compare/components/3.9.0...components/3.10.0) (2024-07-26)

### Features

- 🎸 adding min and max posibility for date type of input ([#1215](https://github.com/solid-design-system/solid/issues/1215)) ([cf625a0](https://github.com/solid-design-system/solid/commit/cf625a0fd880a24eaa8869ad65d82fec8add4afa))

# [@solid-design-system/components-v3.9.0](https://github.com/solid-design-system/solid/compare/components/3.8.1...components/3.9.0) (2024-07-11)

### Features

- ✨ implement new brandshape variants ([#1180](https://github.com/solid-design-system/solid/issues/1180)) ([aa47c64](https://github.com/solid-design-system/solid/commit/aa47c6485208bc435e033f7b92deb92d1fa541bc))

### 📈 Stats

- Bundle size (uncompressed): 325 KB (+3 KB / +1%)
- Bundle size (gzipped): 77 KB (+1 KB / +1%)

# [@solid-design-system/components-v3.8.1](https://github.com/solid-design-system/solid/compare/components/3.8.0...components/3.8.1) (2024-07-10)

### Bug Fixes

- fix jumping text in navigation item ([#1197](https://github.com/solid-design-system/solid/issues/1197)) ([c421b28](https://github.com/solid-design-system/solid/commit/c421b2829c1849ac17f4649b21acad60d83027a5))

# [@solid-design-system/components-v3.8.0](https://github.com/solid-design-system/solid/compare/components/3.7.3...components/3.8.0) (2024-07-01)

### Features

- ✨ add sd-flipcard ([#1121](https://github.com/solid-design-system/solid/issues/1121)) ([ffd126f](https://github.com/solid-design-system/solid/commit/ffd126ff24307a79719d569d0d9fa3a2c9b54c07))

### 📈 Stats

- Bundle size (uncompressed): 322 KB (+7 KB / +2%)
- Bundle size (gzipped): 76 KB (+1 KB / +1%)

# [@solid-design-system/components-v3.7.3](https://github.com/solid-design-system/solid/compare/components/3.7.2...components/3.7.3) (2024-06-28)

### Bug Fixes

- add missing Tailwind classes for autcomplete config ([fa984da](https://github.com/solid-design-system/solid/commit/fa984daf650fc655d1c4a1ade4e924440fdfc3a3))

### 📈 Stats

- Bundle size (uncompressed): 315 KB (+1 KB / +0%)
- Bundle size (gzipped): 75 KB (unchanged)

# [@solid-design-system/components-v3.7.2](https://github.com/solid-design-system/solid/compare/components/3.7.1...components/3.7.2) (2024-06-27)

### Bug Fixes

- fix accent color in icons ([#1182](https://github.com/solid-design-system/solid/issues/1182)) ([c4b74da](https://github.com/solid-design-system/solid/commit/c4b74da7edfd198d2bb8ebc7d7afeda98d5daf1d))

# [@solid-design-system/components-v3.7.1](https://github.com/solid-design-system/solid/compare/components/3.7.0...components/3.7.1) (2024-06-21)

### Bug Fixes

- add utilities to exports ([#1156](https://github.com/solid-design-system/solid/issues/1156)) ([137da8c](https://github.com/solid-design-system/solid/commit/137da8c164bff15db18d293f1af3356a891ff9e3))

# [@solid-design-system/components-v3.7.0](https://github.com/solid-design-system/solid/compare/components/3.6.0...components/3.7.0) (2024-06-14)

### Features

- ✨ add custom localization (closes [#852](https://github.com/solid-design-system/solid/issues/852)) ([#997](https://github.com/solid-design-system/solid/issues/997)) ([e4e881f](https://github.com/solid-design-system/solid/commit/e4e881f7447cadfd648f69f5f469464f09573e18))

# [@solid-design-system/components-v3.6.0](https://github.com/solid-design-system/solid/compare/components/3.5.0...components/3.6.0) (2024-05-29)

### Features

- add sd-prose and fix sd-list ([b82d60f](https://github.com/solid-design-system/solid/commit/b82d60f2bf87e54479c7731145d87e93c2e983db))

### 📈 Stats

- Bundle size (uncompressed): 314 KB (+5 KB / +2%)
- Bundle size (gzipped): 75 KB (+1 KB / +1%)

# [@solid-design-system/components-v3.5.0](https://github.com/solid-design-system/solid/compare/components/3.4.0...components/3.5.0) (2024-05-24)

### Features

- ✨ add sd-step & sd-step-group ([#1007](https://github.com/solid-design-system/solid/issues/1007)) ([d42c66f](https://github.com/solid-design-system/solid/commit/d42c66fec184306c1f7cc9c127f54b20fe17d5bf))

### 📈 Stats

- Bundle size (uncompressed): 309 KB (+10 KB / +3%)
- Bundle size (gzipped): 74 KB (+2 KB / +3%)

# [@solid-design-system/components-v3.4.0](https://github.com/solid-design-system/solid/compare/components/3.3.1...components/3.4.0) (2024-05-22)

### Features

- ✨ add sd-scrollable ([#966](https://github.com/solid-design-system/solid/issues/966)) ([3d7bcad](https://github.com/solid-design-system/solid/commit/3d7bcad9416da3013c45d120a0196f29fa17986e)), closes [#289](https://github.com/solid-design-system/solid/issues/289)

### 📈 Stats

- Bundle size (uncompressed): 299 KB (+7 KB / +2%)
- Bundle size (gzipped): 72 KB (+2 KB / +3%)

# [@solid-design-system/components-v3.3.1](https://github.com/solid-design-system/solid/compare/components/3.3.0...components/3.3.1) (2024-05-14)

### Bug Fixes

- 🤔 remove placeholder for fixed column sample ([#1045](https://github.com/solid-design-system/solid/issues/1045)) ([d75d6b7](https://github.com/solid-design-system/solid/commit/d75d6b7c6075883e3c194a4a07ff185c050a9a24))

# [@solid-design-system/components-v3.3.0](https://github.com/solid-design-system/solid/compare/components/3.2.0...components/3.3.0) (2024-05-06)

### Features

- ✨ optimize `autocomplete-config` to allow max-height for listbox ([#1043](https://github.com/solid-design-system/solid/issues/1043)) ([3802b3e](https://github.com/solid-design-system/solid/commit/3802b3e22d85821273bfcac82e3ed8dfe966109b))

# [@solid-design-system/components-v3.2.0](https://github.com/solid-design-system/solid/compare/components/3.1.0...components/3.2.0) (2024-05-06)

### Features

- ✨add placeholder video ([#1032](https://github.com/solid-design-system/solid/issues/1032)) ([0bf4597](https://github.com/solid-design-system/solid/commit/0bf459788f02bc27b7a3f3515d47b20da3f51f67))

# [@solid-design-system/components-v3.1.0](https://github.com/solid-design-system/solid/compare/components/3.0.1...components/3.1.0) (2024-04-29)

### Features

- ✨ add autocomplete pattern + helper ([#962](https://github.com/solid-design-system/solid/issues/962)) ([8b4bdeb](https://github.com/solid-design-system/solid/commit/8b4bdeb72b86cf5e9ce12f2c463907cb5402db5e)), closes [#269](https://github.com/solid-design-system/solid/issues/269)

### 📈 Stats

- Bundle size (uncompressed): 292 KB (+4 KB / +1%)
- Bundle size (gzipped): 70 KB (+1 KB / +1%)

# [@solid-design-system/components-v3.0.1](https://github.com/solid-design-system/solid/compare/components/3.0.0...components/3.0.1) (2024-04-29)

### Bug Fixes

- exclude event names from versioning ([#995](https://github.com/solid-design-system/solid/issues/995)) ([f72aff2](https://github.com/solid-design-system/solid/commit/f72aff2029cf9e2f67deb30796ed08017f018c27))

# [@solid-design-system/components-v3.0.0](https://github.com/solid-design-system/solid/compare/components/2.12.0...components/3.0.0) (2024-04-26)

### Features

- ✨ sd-footnotes ([#958](https://github.com/solid-design-system/solid/issues/958)) ([f53f185](https://github.com/solid-design-system/solid/commit/f53f1853654d536fe8ed88e4c2d8054837d63f8a))

### BREAKING CHANGES

- The `sd-footnote` component has been deprecated and
  removed from the library.

This PR shows adds `sd-footnotes`. As as a replacement for
`sd-footnote`, it provides the possibility to use footnotes in
combination with lists, which actually would be better in terms of DX
and A11y.

# [@solid-design-system/components-v2.12.0](https://github.com/solid-design-system/solid/compare/components/2.11.9...components/2.12.0) (2024-04-23)

### Features

- ✨ add sd-map-marker ([#974](https://github.com/solid-design-system/solid/issues/974)) ([101ed22](https://github.com/solid-design-system/solid/commit/101ed2255b90f8be1fd8fd5ed36a95f1a3a948ca))

### 📈 Stats

- Bundle size (uncompressed): 288 KB (+6 KB / +2%)
- Bundle size (gzipped): 69 KB (+1 KB / +1%)

# [@solid-design-system/components-v2.11.9](https://github.com/solid-design-system/solid/compare/components/2.11.8...components/2.11.9) (2024-04-18)

### Bug Fixes

- 🤔 sd-select - correct styling ([#951](https://github.com/solid-design-system/solid/issues/951)) ([3810a0a](https://github.com/solid-design-system/solid/commit/3810a0a3f761045d92cf64c486fce717a6f6cb27))

# [@solid-design-system/components-v2.11.8](https://github.com/solid-design-system/solid/compare/components/2.11.7...components/2.11.8) (2024-04-18)

### Bug Fixes

- 🤔 align horizontal list ([#957](https://github.com/solid-design-system/solid/issues/957)) ([03ca608](https://github.com/solid-design-system/solid/commit/03ca608d0f9968c71211d035130e9a9dcf2eab93))

# [@solid-design-system/components-v2.11.7](https://github.com/solid-design-system/solid/compare/components/2.11.6...components/2.11.7) (2024-04-17)

### Bug Fixes

- use system icon in dialog ([4519180](https://github.com/solid-design-system/solid/commit/4519180bcc2c5106567a1d0b19d4f9356f8bcc58)), closes [#895](https://github.com/solid-design-system/solid/issues/895)

# [@solid-design-system/components-v2.11.6](https://github.com/solid-design-system/solid/compare/components/2.11.5...components/2.11.6) (2024-04-17)

### Bug Fixes

- 🤔 sd-button border-radius ([#949](https://github.com/solid-design-system/solid/issues/949)) ([de2e0be](https://github.com/solid-design-system/solid/commit/de2e0beb184e83eb5dec4138dfbd804d7832cc5d))

# [@solid-design-system/components-v2.11.5](https://github.com/solid-design-system/solid/compare/components/2.11.4...components/2.11.5) (2024-04-12)

### Bug Fixes

- 🐛 sd-navigation-item remove default href + href when children ([#934](https://github.com/solid-design-system/solid/issues/934)) ([554e9f7](https://github.com/solid-design-system/solid/commit/554e9f7ab9a43f6566017c68e7063cf6b5220bb7))

# [@solid-design-system/components-v2.11.4](https://github.com/solid-design-system/solid/compare/components/2.11.3...components/2.11.4) (2024-04-11)

### Bug Fixes

- 🤔 change HTML tag from div to p ([#932](https://github.com/solid-design-system/solid/issues/932)) ([d7c15cd](https://github.com/solid-design-system/solid/commit/d7c15cddb542a2802af77385924c3b07213c8114))

# [@solid-design-system/components-v2.11.3](https://github.com/solid-design-system/solid/compare/components/2.11.2...components/2.11.3) (2024-04-11)

### Bug Fixes

- 🤔 tabs do not grow with longer tab titles ([#904](https://github.com/solid-design-system/solid/issues/904)) ([738e7c3](https://github.com/solid-design-system/solid/commit/738e7c3729d9d690029d79727dab124a27e7e9cc))

# [@solid-design-system/components-v2.11.2](https://github.com/solid-design-system/solid/compare/components/2.11.1...components/2.11.2) (2024-04-09)

### Bug Fixes

- 🐛 add inverted color to sd-footnote ([#926](https://github.com/solid-design-system/solid/issues/926)) ([658876f](https://github.com/solid-design-system/solid/commit/658876fb5918d43532988594e971892e5808c83c))

# [@solid-design-system/components-v2.11.1](https://github.com/solid-design-system/solid/compare/components/2.11.0...components/2.11.1) (2024-04-09)

### Bug Fixes

- 🐛 remove TailwindCSS var from sd-copyright ([#907](https://github.com/solid-design-system/solid/issues/907)) ([a9f0f9a](https://github.com/solid-design-system/solid/commit/a9f0f9ab01b85e5ec59fc52009f50960a20e5df6))

# [@solid-design-system/components-v2.11.0](https://github.com/solid-design-system/solid/compare/components/2.10.0...components/2.11.0) (2024-03-21)

### Features

- ✨ add sd-footnote - CSS style ([#863](https://github.com/solid-design-system/solid/issues/863)) ([b82d764](https://github.com/solid-design-system/solid/commit/b82d764b379c13401e34d4cceb6c44ae9817fbea))

# [@solid-design-system/components-v2.10.0](https://github.com/solid-design-system/solid/compare/components/2.9.3...components/2.10.0) (2024-03-20)

### Features

- add sd-icon default library which points to new CDN ([#873](https://github.com/solid-design-system/solid/issues/873)) ([e039c6d](https://github.com/solid-design-system/solid/commit/e039c6d040336e5c4bfd8a1cf5492ab234072b4a))

### 📈 Stats

- Bundle size (uncompressed): 282 KB (+1 KB / +0%)
- Bundle size (gzipped): 68 KB (unchanged)

# [@solid-design-system/components-v2.9.3](https://github.com/solid-design-system/solid/compare/components/2.9.2...components/2.9.3) (2024-03-20)

### Bug Fixes

- 🤔 logo for the Sample B Story of the sd-header ([#879](https://github.com/solid-design-system/solid/issues/879)) ([41824fc](https://github.com/solid-design-system/solid/commit/41824fc4fdcec63d88bd09b27c7f0099be8d7566)), closes [#807](https://github.com/solid-design-system/solid/issues/807)

# [@solid-design-system/components-v2.9.2](https://github.com/solid-design-system/solid/compare/components/2.9.1...components/2.9.2) (2024-03-19)

### Bug Fixes

- remove font stack from components ([#876](https://github.com/solid-design-system/solid/issues/876)) ([68699cb](https://github.com/solid-design-system/solid/commit/68699cb270bad5d47ac62d1555f05059ce14734b))

# [@solid-design-system/components-v2.9.1](https://github.com/solid-design-system/solid/compare/components/2.9.0...components/2.9.1) (2024-03-14)

### Bug Fixes

- adjust vertical spacing of navigation-item#vertical ([#847](https://github.com/solid-design-system/solid/issues/847)) ([a482ab1](https://github.com/solid-design-system/solid/commit/a482ab136be355444df2614b82eb3e097a0462d7))

# [@solid-design-system/components-v2.9.0](https://github.com/solid-design-system/solid/compare/components/2.8.2...components/2.9.0) (2024-03-14)

### Features

- ✨ add supernumber pattern ([#845](https://github.com/solid-design-system/solid/issues/845)) ([5531774](https://github.com/solid-design-system/solid/commit/5531774e528e7875093d2ef02f37f2fbcff48262))

# [@solid-design-system/components-v2.8.2](https://github.com/solid-design-system/solid/compare/components/2.8.1...components/2.8.2) (2024-03-05)

### Bug Fixes

- 🤔 CTA button color ([#810](https://github.com/solid-design-system/solid/issues/810)) ([52cf6dc](https://github.com/solid-design-system/solid/commit/52cf6dcf1919bfef85d2700fafd1cd6ec8a1e33f))

# [@solid-design-system/components-v2.8.1](https://github.com/solid-design-system/solid/compare/components/2.8.0...components/2.8.1) (2024-02-29)

### Bug Fixes

- arbitrary values in container style ([#788](https://github.com/solid-design-system/solid/issues/788)) ([a184ca1](https://github.com/solid-design-system/solid/commit/a184ca117d9f6dab7b394db1ec48804632c7c5bb))

# [@solid-design-system/components-v2.8.0](https://github.com/solid-design-system/solid/compare/components/2.7.0...components/2.8.0) (2024-02-28)

### Features

- ✨ add sd container triangle property ([#776](https://github.com/solid-design-system/solid/issues/776)) ([cce15b7](https://github.com/solid-design-system/solid/commit/cce15b7fc41ee2d5f81506af4846045b5baebd22)), closes [#737](https://github.com/solid-design-system/solid/issues/737)

# [@solid-design-system/components-v2.7.0](https://github.com/solid-design-system/solid/compare/components/2.6.0...components/2.7.0) (2024-02-27)

### Features

- ✨ add defined aspect ratios and additional colors ([#757](https://github.com/solid-design-system/solid/issues/757)) ([7cff6ad](https://github.com/solid-design-system/solid/commit/7cff6adb907cb29d361acf0b8c5de2ea5ed6f0a5))

# [@solid-design-system/components-v2.6.0](https://github.com/solid-design-system/solid/compare/components/2.5.0...components/2.6.0) (2024-02-23)

### Features

- ✨ add sd-tab & sd-tab-group ([#753](https://github.com/solid-design-system/solid/issues/753)) ([7d18eed](https://github.com/solid-design-system/solid/commit/7d18eed64147a7a045b13e5d5f35dc68ad5277e6))

### 📈 Stats

- Bundle size (uncompressed): 281 KB (+12 KB / +4%)
- Bundle size (gzipped): 68 KB (+3 KB / +5%)

# [@solid-design-system/components-v2.5.0](https://github.com/solid-design-system/solid/compare/components/2.4.5...components/2.5.0) (2024-02-23)

### Features

- ✨ add sd-media + sd-copyright - CSS style ([#755](https://github.com/solid-design-system/solid/issues/755)) ([693af1f](https://github.com/solid-design-system/solid/commit/693af1fc8be7a2db0e2b795cf25aa86f707868ec))

# [@solid-design-system/components-v2.4.5](https://github.com/solid-design-system/solid/compare/components/2.4.4...components/2.4.5) (2024-02-20)

### Bug Fixes

- 🤔 sd-video accessibility test [skip chromatic] ([#758](https://github.com/solid-design-system/solid/issues/758)) ([3c820b4](https://github.com/solid-design-system/solid/commit/3c820b408f15c2870533753dd22551ac2904b3b9))

# [@solid-design-system/components-v2.4.4](https://github.com/solid-design-system/solid/compare/components/2.4.3...components/2.4.4) (2024-02-16)

### Bug Fixes

- 🤔 min-width of input element does not match responsiveness of sd-select/sd-input ([#733](https://github.com/solid-design-system/solid/issues/733)) ([ab0f940](https://github.com/solid-design-system/solid/commit/ab0f94074290e0a37c5498c4126bfbdf90001b81))

# [@solid-design-system/components-v2.4.3](https://github.com/solid-design-system/solid/compare/components/2.4.2...components/2.4.3) (2024-02-14)

### Bug Fixes

- fix wrong customElement import + update eslint rule ([#754](https://github.com/solid-design-system/solid/issues/754)) ([9bc3790](https://github.com/solid-design-system/solid/commit/9bc3790d09f883f74f28447c5da500245fbf68cb))

### 📈 Stats

- Bundle size (uncompressed): 269 KB (-1 KB / 0%)
- Bundle size (gzipped): 65 KB (unchanged)

# [@solid-design-system/components-v2.4.2](https://github.com/solid-design-system/solid/compare/components/2.4.1...components/2.4.2) (2024-02-12)

### Bug Fixes

- 🤔 sd-dropdown handle tab key event in deeper nested shadow root ([#742](https://github.com/solid-design-system/solid/issues/742)) ([74d796d](https://github.com/solid-design-system/solid/commit/74d796d210456a63a87bfb1b9c86f0a463f65651))

### 📈 Stats

- Bundle size (uncompressed): 270 KB (+1 KB / +0%)
- Bundle size (gzipped): 65 KB (unchanged)

# [@solid-design-system/components-v2.4.1](https://github.com/solid-design-system/solid/compare/components/2.4.0...components/2.4.1) (2024-02-09)

### Bug Fixes

- add lang "de" to bundle ([#748](https://github.com/solid-design-system/solid/issues/748)) ([9cd5e4f](https://github.com/solid-design-system/solid/commit/9cd5e4f6fa4f6d7c48ab7c4c9e7a3e7958c44850))

### 📈 Stats

- Bundle size (uncompressed): 269 KB (+1 KB / +0%)
- Bundle size (gzipped): 65 KB (unchanged)

# [@solid-design-system/components-v2.4.0](https://github.com/solid-design-system/solid/compare/components/2.3.1...components/2.4.0) (2024-02-09)

### Features

- ✨ sd-media-teaser – add component ([#725](https://github.com/solid-design-system/solid/issues/725)) ([974a951](https://github.com/solid-design-system/solid/commit/974a9517e9056c180e7d5c791c5e1a785d8d6836))

### 📈 Stats

- Bundle size (uncompressed): 268 KB (+5 KB / +2%)
- Bundle size (gzipped): 65 KB (+1 KB / +2%)

# [@solid-design-system/components-v2.3.1](https://github.com/solid-design-system/solid/compare/components/2.3.0...components/2.3.1) (2024-02-08)

### Bug Fixes

- 🤔 sd-headline does not include a line-height style ([#734](https://github.com/solid-design-system/solid/issues/734)) ([42f7b32](https://github.com/solid-design-system/solid/commit/42f7b32c87f94b3cfeb015b9b2d0170315535bc8))

# [@solid-design-system/components-v2.3.0](https://github.com/solid-design-system/solid/compare/components/2.2.0...components/2.3.0) (2024-02-06)

### Features

- ✨add shadow variant for sd-table-cell ([#704](https://github.com/solid-design-system/solid/issues/704)) ([a531933](https://github.com/solid-design-system/solid/commit/a5319331a3aefa30c4aec9cc9fe989987915ea3f))

# [@solid-design-system/components-v2.2.0](https://github.com/solid-design-system/solid/compare/components/2.1.0...components/2.2.0) (2024-01-30)

### Features

- extract @solid-design-system/theming package ([#708](https://github.com/solid-design-system/solid/issues/708)) ([ce7f177](https://github.com/solid-design-system/solid/commit/ce7f177cfebd8ed9647d3d0d268fbfb900464892))

# [@solid-design-system/components-v2.1.0](https://github.com/solid-design-system/solid/compare/components/2.0.0...components/2.1.0) (2024-01-30)

### Features

- ✨ add sd-dialog ([#668](https://github.com/solid-design-system/solid/issues/668)) ([753b6d8](https://github.com/solid-design-system/solid/commit/753b6d89e4882c434d0fb42ee7a1ef57e5be42c9))

### 📈 Stats

- Bundle size (uncompressed): 263 KB (+8 KB / +3%)
- Bundle size (gzipped): 64 KB (+1 KB / +2%)

# [@solid-design-system/components-v2.0.0](https://github.com/solid-design-system/solid/compare/components/1.39.1...components/2.0.0) (2024-01-26)

### Bug Fixes

- remove automatic valid styling from form fields ([#703](https://github.com/solid-design-system/solid/issues/703)) ([eb08265](https://github.com/solid-design-system/solid/commit/eb08265c95627c9c4c8385cc8bb1c2dbd09f6e7a))

### BREAKING CHANGES

- Before this change `sd-input`, `sd-select` and
  `sd-textarea` immediately showed "valid styles" (success color +
  checkmark) immediately when an form field was valid. In most cases this
  isn't relevant, e. g. in search fields, app interfaces etc.
  With this change you now have to explicitly set the attribute
  `style-on-valid` on the mentioned components to show "valid styles", as
  soon as the component is valid.

### 📈 Stats

- Bundle size (uncompressed): 255 KB (+1 KB / +0%)
- Bundle size (gzipped): 63 KB (+1 KB / +2%)

# [@solid-design-system/components-v1.39.1](https://github.com/solid-design-system/solid/compare/components/1.39.0...components/1.39.1) (2024-01-25)

### Bug Fixes

- 🤔 re-integrate web-types generation ([#710](https://github.com/solid-design-system/solid/issues/710)) ([daea78c](https://github.com/solid-design-system/solid/commit/daea78cd4f505f11f551061e4eaf7125ef187eb2))

# [@solid-design-system/components-v1.39.0](https://github.com/solid-design-system/solid/compare/components/1.38.3...components/1.39.0) (2024-01-23)

### Features

- ✨ add sd-list (CSS style) ([#677](https://github.com/solid-design-system/solid/issues/677)) ([0124cf2](https://github.com/solid-design-system/solid/commit/0124cf2caf87171f3c08d9887ba7a32a65fa21dd))

# [@solid-design-system/components-v1.38.3](https://github.com/solid-design-system/solid/compare/components/1.38.2...components/1.38.3) (2024-01-19)

### Bug Fixes

- 🤔 parts not marked (red border) in storybook in sd-select ([#690](https://github.com/solid-design-system/solid/issues/690)) ([d481213](https://github.com/solid-design-system/solid/commit/d481213f976c682c3bad844e5b1ed95ec5e6f0cf))

# [@solid-design-system/components-v1.38.2](https://github.com/solid-design-system/solid/compare/components/1.38.1...components/1.38.2) (2024-01-18)

### Bug Fixes

- 🤔 z-index in sd-select ([#685](https://github.com/solid-design-system/solid/issues/685)) ([8b98607](https://github.com/solid-design-system/solid/commit/8b986078f10a6512155632946dec8e5f039669b5)), closes [#534](https://github.com/solid-design-system/solid/issues/534)

# [@solid-design-system/components-v1.38.1](https://github.com/solid-design-system/solid/compare/components/1.38.0...components/1.38.1) (2024-01-18)

### Bug Fixes

- add missing navigation-item parts ([#693](https://github.com/solid-design-system/solid/issues/693)) ([34eb020](https://github.com/solid-design-system/solid/commit/34eb020f505101831df1118c16379ac707f4da36))

# [@solid-design-system/components-v1.38.0](https://github.com/solid-design-system/solid/compare/components/1.37.3...components/1.38.0) (2024-01-15)

### Features

- ✨ add interactive teaser sample ([#670](https://github.com/solid-design-system/solid/issues/670)) ([d292cfe](https://github.com/solid-design-system/solid/commit/d292cfef1f63aa98e55b77ae6eabd455e42a7a9c))

# [@solid-design-system/components-v1.37.3](https://github.com/solid-design-system/solid/compare/components/1.37.2...components/1.37.3) (2024-01-10)

### Bug Fixes

- 🐛 make setCustomValidity() + reportValidity() work with inputs' inline errors ([#667](https://github.com/solid-design-system/solid/issues/667)) ([455f7f6](https://github.com/solid-design-system/solid/commit/455f7f685c7f0bf7f016e2575f18b77a71b4e7ce))

### 📈 Stats

- Bundle size (uncompressed): 254 KB (+1 KB / +0%)
- Bundle size (gzipped): 62 KB (unchanged)

# [@solid-design-system/components-v1.37.2](https://github.com/solid-design-system/solid/compare/components/1.37.1...components/1.37.2) (2024-01-08)

### Bug Fixes

- 🤔 add missing part for accordion-border ([#669](https://github.com/solid-design-system/solid/issues/669)) ([6c32704](https://github.com/solid-design-system/solid/commit/6c32704f38738fc69d81a2f714992cd6b06f2d22))

# [@solid-design-system/components-v1.37.1](https://github.com/solid-design-system/solid/compare/components/1.37.0...components/1.37.1) (2023-12-22)

### Bug Fixes

- 🤔 teaser variant 'white border-neutral-400', - no border around media slot ([#663](https://github.com/solid-design-system/solid/issues/663)) ([3b1dc2b](https://github.com/solid-design-system/solid/commit/3b1dc2b9f3c9083b2233ed663aee0f38d640216d))

# [@solid-design-system/components-v1.37.0](https://github.com/solid-design-system/solid/compare/components/1.36.0...components/1.37.0) (2023-12-15)

### Features

- ✨ add inline validation + improve initial validation ([#647](https://github.com/solid-design-system/solid/issues/647)) ([da78967](https://github.com/solid-design-system/solid/commit/da789673d8bbce64320e3102309d7fa434a83d9d)), closes [#631](https://github.com/solid-design-system/solid/issues/631) [#641](https://github.com/solid-design-system/solid/issues/641)

# [@solid-design-system/components-v1.36.0](https://github.com/solid-design-system/solid/compare/components/1.35.1...components/1.36.0) (2023-12-14)

### Features

- ✨ add sd-radio-button ([#622](https://github.com/solid-design-system/solid/issues/622)) ([273faa2](https://github.com/solid-design-system/solid/commit/273faa29b9297a289194e05444d996aba25e3534)), closes [#216](https://github.com/solid-design-system/solid/issues/216)

### 📈 Stats

- Bundle size (uncompressed): 253 KB (+5 KB / +2%)
- Bundle size (gzipped): 62 KB (+1 KB / +2%)

# [@solid-design-system/components-v1.35.1](https://github.com/solid-design-system/solid/compare/components/1.35.0...components/1.35.1) (2023-12-13)

### Bug Fixes

- 🤔 sd-chip prevent text wrap ([#657](https://github.com/solid-design-system/solid/issues/657)) ([ebce6a8](https://github.com/solid-design-system/solid/commit/ebce6a85778cc1395f42fc3524d9203a077b9e05))

# [@solid-design-system/components-v1.35.0](https://github.com/solid-design-system/solid/compare/components/1.34.0...components/1.35.0) (2023-12-12)

### Features

- ✨ improve CSS inside components via PostCSS ([#653](https://github.com/solid-design-system/solid/issues/653)) ([452ac1c](https://github.com/solid-design-system/solid/commit/452ac1c4ba1f37f304d056c033541779227ca406)), closes [#448](https://github.com/solid-design-system/solid/issues/448)

### 📈 Stats

- Bundle size (uncompressed): 248 KB (+2 KB / +1%)
- Bundle size (gzipped): 61 KB (unchanged)

# [@solid-design-system/components-v1.34.0](https://github.com/solid-design-system/solid/compare/components/1.33.1...components/1.34.0) (2023-12-12)

### Features

- ✨ add sd-flag ([#644](https://github.com/solid-design-system/solid/issues/644)) ([3c9a5dd](https://github.com/solid-design-system/solid/commit/3c9a5dd1386ab408a831f487c9edfd58ea84fa5a))

# [@solid-design-system/components-v1.33.1](https://github.com/solid-design-system/solid/compare/components/1.33.0...components/1.33.1) (2023-12-07)

### Bug Fixes

- improve TailwindCSS parser ([#643](https://github.com/solid-design-system/solid/issues/643)) ([d876249](https://github.com/solid-design-system/solid/commit/d8762493b3eceaa218665c98edef25d4531d3b04))

# [@solid-design-system/components-v1.33.0](https://github.com/solid-design-system/solid/compare/components/1.32.0...components/1.33.0) (2023-12-06)

### Features

- ✨ add sd-textarea ([#589](https://github.com/solid-design-system/solid/issues/589)) ([2bc32a9](https://github.com/solid-design-system/solid/commit/2bc32a917d57b37dd82e8cc6100702ca714f162d))

### 📈 Stats

- Bundle size (uncompressed): 246 KB (+7 KB / +3%)
- Bundle size (gzipped): 61 KB (+1 KB / +2%)

# [@solid-design-system/components-v1.32.0](https://github.com/solid-design-system/solid/compare/components/1.31.0...components/1.32.0) (2023-12-06)

### Features

- ✨ add sd-select [#258](https://github.com/solid-design-system/solid/issues/258) ([#634](https://github.com/solid-design-system/solid/issues/634)) ([02ec3b6](https://github.com/solid-design-system/solid/commit/02ec3b67be228ef7aec79ea0596297735c4ecdb8))

### 📈 Stats

- Bundle size (uncompressed): 239 KB (+22 KB / +10%)
- Bundle size (gzipped): 60 KB (+5 KB / +9%)

# [@solid-design-system/components-v1.31.0](https://github.com/solid-design-system/solid/compare/components/1.30.0...components/1.31.0) (2023-12-06)

### Features

- ✨ add sd-chip ([#637](https://github.com/solid-design-system/solid/issues/637)) ([b05a90c](https://github.com/solid-design-system/solid/commit/b05a90ce1b392331f3b5c8b1dd991424bf584e24))

# [@solid-design-system/components-v1.30.0](https://github.com/solid-design-system/solid/compare/components/1.29.0...components/1.30.0) (2023-12-05)

### Features

- ✨ add sd-container - CSS style ([#619](https://github.com/solid-design-system/solid/issues/619)) ([f8028cc](https://github.com/solid-design-system/solid/commit/f8028cc6568aa9954f8941b62c9246419363c2c6))

# [@solid-design-system/components-v1.29.0](https://github.com/solid-design-system/solid/compare/components/1.28.0...components/1.29.0) (2023-11-23)

### Features

- ✨ update tokens ([#591](https://github.com/solid-design-system/solid/issues/591)) ([2bfbf3e](https://github.com/solid-design-system/solid/commit/2bfbf3efe455faaa2365fef01b252ef507b450ca))

# [@solid-design-system/components-v1.28.0](https://github.com/solid-design-system/solid/compare/components/1.27.0...components/1.28.0) (2023-11-20)

### Features

- ✨ update sd-accordion meeting WCAG criteria / design refresh ([#575](https://github.com/solid-design-system/solid/issues/575)) ([9fdbfcb](https://github.com/solid-design-system/solid/commit/9fdbfcb220d885717801eea3267bc72f4f580ad4))

# [@solid-design-system/components-v1.27.0](https://github.com/solid-design-system/solid/compare/components/1.26.0...components/1.27.0) (2023-11-17)

### Features

- ✨ add sd-notification ([#517](https://github.com/solid-design-system/solid/issues/517)) ([4b290d1](https://github.com/solid-design-system/solid/commit/4b290d102d910e75df0d85c54c8bf886d8b99c5a))

### 📈 Stats

- Bundle size (uncompressed): 217 KB (+8 KB / +4%)
- Bundle size (gzipped): 55 KB (+2 KB / +4%)

# [@solid-design-system/components-v1.26.0](https://github.com/solid-design-system/solid/compare/components/1.25.0...components/1.26.0) (2023-11-17)

### Features

- ✨ sd-switch ([#538](https://github.com/solid-design-system/solid/issues/538)) ([259b53e](https://github.com/solid-design-system/solid/commit/259b53e0cc893c1e2743d7c152811b4a0702181a))

### 📈 Stats

- Bundle size (uncompressed): 209 KB (+5 KB / +2%)
- Bundle size (gzipped): 53 KB (unchanged)

# [@solid-design-system/components-v1.25.0](https://github.com/solid-design-system/solid/compare/components/1.24.0...components/1.25.0) (2023-11-13)

### Features

- ✨ add sd-header ([#512](https://github.com/solid-design-system/solid/issues/512)) ([3e012fc](https://github.com/solid-design-system/solid/commit/3e012fcea68230d18f5cc797a8a1ed1298b5ec19)), closes [#301](https://github.com/solid-design-system/solid/issues/301)

### 📈 Stats

- Bundle size (uncompressed): 204 KB (+2 KB / +1%)
- Bundle size (gzipped): 53 KB (+1 KB / +2%)

# [@solid-design-system/components-v1.24.0](https://github.com/solid-design-system/solid/compare/components/1.23.0...components/1.24.0) (2023-11-13)

### Features

- ✨ add sd-input ([#515](https://github.com/solid-design-system/solid/issues/515)) ([327dcd0](https://github.com/solid-design-system/solid/commit/327dcd06f2f9daefe03ecdc9ade6648e2499e468)), closes [#255](https://github.com/solid-design-system/solid/issues/255)

### 📈 Stats

- Bundle size (uncompressed): 202 KB (+17 KB / +9%)
- Bundle size (gzipped): 52 KB (+4 KB / +8%)

# [@solid-design-system/components-v1.23.0](https://github.com/solid-design-system/solid/compare/components/1.22.0...components/1.23.0) (2023-11-10)

### Features

- ✨ add sd-tooltip ([#436](https://github.com/solid-design-system/solid/issues/436)) ([45d8f63](https://github.com/solid-design-system/solid/commit/45d8f63323c24008f45f0ccfb79065847c994566)), closes [#244](https://github.com/solid-design-system/solid/issues/244)

### 📈 Stats

- Bundle size (uncompressed): 185 KB (+6 KB / +3%)
- Bundle size (gzipped): 48 KB (+1 KB / +2%)

# [@solid-design-system/components-v1.22.0](https://github.com/solid-design-system/solid/compare/components/1.21.1...components/1.22.0) (2023-11-10)

### Features

- ✨ sd-checkbox & sd-checkbox-group ([#507](https://github.com/solid-design-system/solid/issues/507)) ([ea9bda2](https://github.com/solid-design-system/solid/commit/ea9bda262efaa1fd3b36f9666b0b6b6619ec4509))

### 📈 Stats

- Bundle size (uncompressed): 179 KB (+9 KB / +5%)
- Bundle size (gzipped): 47 KB (+2 KB / +4%)

# [@solid-design-system/components-v1.21.1](https://github.com/solid-design-system/solid/compare/components/1.21.0...components/1.21.1) (2023-11-09)

### Bug Fixes

- 🤔 Typo -> sl-icon ([#525](https://github.com/solid-design-system/solid/issues/525)) ([1c2e363](https://github.com/solid-design-system/solid/commit/1c2e3639b7c33cc87fb8cbda36b2c6aa0b8c4959))

# [@solid-design-system/components-v1.21.0](https://github.com/solid-design-system/solid/compare/components/1.20.0...components/1.21.0) (2023-11-08)

### Features

- ✨ update all dependencies ([#523](https://github.com/solid-design-system/solid/issues/523)) ([a7f1b95](https://github.com/solid-design-system/solid/commit/a7f1b958bfe3764f2a35ad3c9be8d991bb1354d2))

# [@solid-design-system/components-v1.20.0](https://github.com/solid-design-system/solid/compare/components/1.19.0...components/1.20.0) (2023-10-27)

### Features

- ✨sd-radio & sd-radio-group ([#442](https://github.com/solid-design-system/solid/issues/442)) ([0d43359](https://github.com/solid-design-system/solid/commit/0d4335911e67e60a7cf63afaa4a9f8c472f4dee9))

### 📈 Stats

- Bundle size (uncompressed): 170 KB (+16 KB / +10%)
- Bundle size (gzipped): 45 KB (+3 KB / +7%)

# [@solid-design-system/components-v1.19.0](https://github.com/solid-design-system/solid/compare/components/1.18.1...components/1.19.0) (2023-10-26)

### Features

- ✨ sd-video ([#451](https://github.com/solid-design-system/solid/issues/451)) ([0b98b47](https://github.com/solid-design-system/solid/commit/0b98b47f5850f99607a96c7f746586220e2b5b4a))

### 📈 Stats

- Bundle size (uncompressed): 154 KB (+4 KB / +3%)
- Bundle size (gzipped): 42 KB (+1 KB / +2%)

# [@solid-design-system/components-v1.18.1](https://github.com/solid-design-system/solid/compare/components/1.18.0...components/1.18.1) (2023-10-13)

### Bug Fixes

- 🤔 added part selector to accordion content slot. ([#454](https://github.com/solid-design-system/solid/issues/454)) ([2d3ed01](https://github.com/solid-design-system/solid/commit/2d3ed01099648e6868e44a201992c7f3251959bb))
- add new start icon ([#470](https://github.com/solid-design-system/solid/issues/470)) ([728fcf3](https://github.com/solid-design-system/solid/commit/728fcf358d4e0a4383ef75b9fed32e1376d06ae6))

# [@solid-design-system/components-v1.18.0](https://github.com/solid-design-system/solid/compare/components/1.17.0...components/1.18.0) (2023-10-10)

### Features

- ✨sd-carousel ([#324](https://github.com/solid-design-system/solid/issues/324)) ([d1a8d0e](https://github.com/solid-design-system/solid/commit/d1a8d0eeec7faaeeb5d2a73083ec6dcffc7e3568))

### 📈 Stats

- Bundle size (uncompressed): 150 KB (+22 KB / +17%)
- Bundle size (gzipped): 41 KB (+6 KB / +17%)

# [@solid-design-system/components-v1.17.0](https://github.com/solid-design-system/solid/compare/components/1.16.0...components/1.17.0) (2023-10-06)

### Features

- ✨ sd-button with sd-badge sample ([#420](https://github.com/solid-design-system/solid/issues/420)) ([da1f63a](https://github.com/solid-design-system/solid/commit/da1f63a7ebd53e9e169fa48e7d79c7809865bed3))

# [@solid-design-system/components-v1.16.0](https://github.com/solid-design-system/solid/compare/components/1.15.0...components/1.16.0) (2023-10-06)

### Features

- ✨ sd-headline ([#435](https://github.com/solid-design-system/solid/issues/435)) ([bed5768](https://github.com/solid-design-system/solid/commit/bed5768ba651f2509ecc83161e0860497af31dca))

# [@solid-design-system/components-v1.15.0](https://github.com/solid-design-system/solid/compare/components/1.14.4...components/1.15.0) (2023-09-29)

### Bug Fixes

- 🐛 provide docs how to use registerIconLibrary with UMD bundle ([#433](https://github.com/solid-design-system/solid/issues/433)) ([0b95a21](https://github.com/solid-design-system/solid/commit/0b95a211993f17563173cd1efd1c6a61f1adf063))

### Features

- sd navigation item ([#377](https://github.com/solid-design-system/solid/issues/377)) ([25af69b](https://github.com/solid-design-system/solid/commit/25af69b6612b1ec1163a182f1d5c179631af5ce4))

### 📈 Stats

- Bundle size (uncompressed): 128 KB (+6 KB / +5%)
- Bundle size (gzipped): 35 KB (+1 KB / +3%)

# [@solid-design-system/components-v1.14.4](https://github.com/solid-design-system/solid/compare/components/1.14.3...components/1.14.4) (2023-09-25)

### Bug Fixes

- use own customElement decorator ([6a2787f](https://github.com/solid-design-system/solid/commit/6a2787fad3cfe4d0b11d71eab567792db0722e5e))

# [@solid-design-system/components-v1.14.3](https://github.com/solid-design-system/solid/compare/components/1.14.2...components/1.14.3) (2023-09-25)

### Bug Fixes

- 🤔 make styles available on CDN ([#411](https://github.com/solid-design-system/solid/issues/411)) ([8048e94](https://github.com/solid-design-system/solid/commit/8048e948ccee417dc283797b62c085724a011d48))

# [@solid-design-system/components-v1.14.2](https://github.com/solid-design-system/solid/compare/components/1.14.1...components/1.14.2) (2023-09-25)

### Bug Fixes

- 🐛 fix CEM loading in Storybook ([#427](https://github.com/solid-design-system/solid/issues/427)) ([de7368f](https://github.com/solid-design-system/solid/commit/de7368ff1a5d32938b2f2adb5453c2d12a1c6b70))

# [@solid-design-system/components-v1.14.1](https://github.com/solid-design-system/solid/compare/components/1.14.0...components/1.14.1) (2023-09-22)

### Bug Fixes

- 🐛 prevent rewrite of inset property when border variant was selected in sd-teaser ([#422](https://github.com/solid-design-system/solid/issues/422)) ([ada5be7](https://github.com/solid-design-system/solid/commit/ada5be76ea527382c0006132e9509c73939c2f12)), closes [#362](https://github.com/solid-design-system/solid/issues/362)

# [@solid-design-system/components-v1.14.0](https://github.com/solid-design-system/solid/compare/components/1.13.1...components/1.14.0) (2023-09-21)

### Features

- ✨ quote pattern ([#405](https://github.com/solid-design-system/solid/issues/405)) ([f8bc6d8](https://github.com/solid-design-system/solid/commit/f8bc6d8f0bf4237801df3e2b3a32c1b9be0b72ca))

# [@solid-design-system/components-v1.13.1](https://github.com/solid-design-system/solid/compare/components/1.13.0...components/1.13.1) (2023-09-21)

### Bug Fixes

- 🤔changed paragraph default size to text-base ([#419](https://github.com/solid-design-system/solid/issues/419)) ([40e6605](https://github.com/solid-design-system/solid/commit/40e660573ba219f44a20c02e2a8adef045adad2f))

# [@solid-design-system/components-v1.13.0](https://github.com/solid-design-system/solid/compare/components/1.12.0...components/1.13.0) (2023-09-20)

### Features

- ✨ add sd-table and sd-table-cell ([#379](https://github.com/solid-design-system/solid/issues/379)) ([ef7c5a9](https://github.com/solid-design-system/solid/commit/ef7c5a94bce4d3faf8ba2a8b82cf9cd5e8d3344e))

# [@solid-design-system/components-v1.12.0](https://github.com/solid-design-system/solid/compare/components/1.11.0...components/1.12.0) (2023-09-15)

### Features

- ✨ add inverted styles to sd-interactive ([#385](https://github.com/solid-design-system/solid/issues/385)) ([954f1ad](https://github.com/solid-design-system/solid/commit/954f1ade04cca28d27b607ac476360bc3378ce7a))

# [@solid-design-system/components-v1.11.0](https://github.com/solid-design-system/solid/compare/components/1.10.0...components/1.11.0) (2023-09-05)

### Features

- sd-interactive ([#365](https://github.com/solid-design-system/solid/issues/365)) ([fb512d6](https://github.com/solid-design-system/solid/commit/fb512d674941f18d649e48fce9cd3516ac8b13cd))

# [@solid-design-system/components-v1.10.0](https://github.com/solid-design-system/solid/compare/components/1.9.0...components/1.10.0) (2023-09-05)

### Features

- ✨ add sd-tag ([#352](https://github.com/solid-design-system/solid/issues/352)) ([8ba552b](https://github.com/solid-design-system/solid/commit/8ba552bf41bb56c93a2084fead8b8705f73c308d))

### 📈 Stats

- Bundle size (uncompressed): 122 KB (+3 KB / +3%)
- Bundle size (gzipped): 34 KB (+1 KB / +3%)

# [@solid-design-system/components-v1.9.0](https://github.com/solid-design-system/solid/compare/components/1.8.0...components/1.9.0) (2023-08-31)

### Features

- ✨ add sd-drawer ([#344](https://github.com/solid-design-system/solid/issues/344)) ([cf6b09a](https://github.com/solid-design-system/solid/commit/cf6b09afddc14a8cd70208a8985086489310eab1)), closes [#314](https://github.com/solid-design-system/solid/issues/314)

### 📈 Stats

- Bundle size (uncompressed): 119 KB (+9 KB / +8%)
- Bundle size (gzipped): 33 KB (+1 KB / +3%)

# [@solid-design-system/components-v1.8.0](https://github.com/solid-design-system/solid/compare/components/1.7.0...components/1.8.0) (2023-08-30)

### Features

- ✨ sd-dropdown ([#353](https://github.com/solid-design-system/solid/issues/353)) ([302b29b](https://github.com/solid-design-system/solid/commit/302b29bcdbee104f397b49d012f27834393947db))

### 📈 Stats

- Bundle size (uncompressed): 110 KB (+32 KB / +41%)
- Bundle size (gzipped): 32 KB (+10 KB / +45%)

# [@solid-design-system/components-v1.7.0](https://github.com/solid-design-system/solid/compare/components/1.6.0...components/1.7.0) (2023-08-24)

### Features

- ✨ add styles (paragraph, mark, display, meta, leadtext) ([#247](https://github.com/solid-design-system/solid/issues/247)) ([ae050f1](https://github.com/solid-design-system/solid/commit/ae050f1a83a0bfe9689871222bf08634a801a882))

# [@solid-design-system/components-v1.6.0](https://github.com/solid-design-system/solid/compare/components/1.5.2...components/1.6.0) (2023-08-18)

### Features

- ✨ add sd-badge ([#232](https://github.com/solid-design-system/solid/issues/232)) ([#326](https://github.com/solid-design-system/solid/issues/326)) ([db654c8](https://github.com/solid-design-system/solid/commit/db654c89b8b5eb4287e15996115a4e6fd5d5f512))

### 📈 Stats

- Bundle size (uncompressed): 78 KB (+2 KB / +3%)
- Bundle size (gzipped): 22 KB (+1 KB / +5%)

# [@solid-design-system/components-v1.5.2](https://github.com/solid-design-system/solid/compare/components/1.5.1...components/1.5.2) (2023-08-17)

### Bug Fixes

- 🤔 sd-accordion focus state ([#338](https://github.com/solid-design-system/solid/issues/338)) ([e1d986e](https://github.com/solid-design-system/solid/commit/e1d986e53842d67a1a66f1beda2a072e61eaeedc))

# [@solid-design-system/components-v1.5.1](https://github.com/solid-design-system/solid/compare/components/1.5.0...components/1.5.1) (2023-08-16)

### Bug Fixes

- brandshape whitespace ([#333](https://github.com/solid-design-system/solid/issues/333)) ([d340357](https://github.com/solid-design-system/solid/commit/d34035737d73384d7a6ae184d81e9d74d21258ed))

# [@solid-design-system/components-v1.5.0](https://github.com/solid-design-system/solid/compare/components/1.4.0...components/1.5.0) (2023-08-16)

### Features

- ✨ update tokens for better a11y ([#318](https://github.com/solid-design-system/solid/issues/318)) ([907cb40](https://github.com/solid-design-system/solid/commit/907cb40d501320d3876d767d81e450da95064e28))

# [@solid-design-system/components-v1.4.0](https://github.com/solid-design-system/solid/compare/components/1.3.0...components/1.4.0) (2023-08-04)

### Features

- sd-brandshape ([#252](https://github.com/solid-design-system/solid/issues/252)) ([5818bdc](https://github.com/solid-design-system/solid/commit/5818bdcdd4c580128af08fab613d5f884994ca36))

### 📈 Stats

- Bundle size (uncompressed): 76 KB (+5 KB / +7%)
- Bundle size (gzipped): 21 KB (+1 KB / +5%)

# [@solid-design-system/components-v1.3.0](https://github.com/solid-design-system/solid/compare/components/1.2.1...components/1.3.0) (2023-08-03)

### Features

- ✨ sd teaser ([#286](https://github.com/solid-design-system/solid/issues/286)) ([86ec975](https://github.com/solid-design-system/solid/commit/86ec975561baf02a90e0f82c87a2837b90ed2d14))

### 📈 Stats

- Bundle size (uncompressed): 71 KB (+4 KB / +6%)
- Bundle size (gzipped): 20 KB (+1 KB / +5%)

# [@solid-design-system/components-v1.2.1](https://github.com/solid-design-system/solid/compare/components/1.2.0...components/1.2.1) (2023-08-01)

### Performance Improvements

- 🚀 minify dynamic html tags (close [#250](https://github.com/solid-design-system/solid/issues/250)) ([#311](https://github.com/solid-design-system/solid/issues/311)) ([1730fe8](https://github.com/solid-design-system/solid/commit/1730fe8bc7bab773ed07f4151f3f16e663bb4fc9))

### 📈 Stats

- Bundle size (uncompressed): 67 KB (-3 KB / -4%)
- Bundle size (gzipped): 19 KB (-1 KB / -5%)

# [@solid-design-system/components-v1.2.0](https://github.com/solid-design-system/solid/compare/components/1.1.0...components/1.2.0) (2023-07-27)

### Features

- ✨ sd divider ([#248](https://github.com/solid-design-system/solid/issues/248)) ([f6206d7](https://github.com/solid-design-system/solid/commit/f6206d7b33197077ce535cbada0ad8c58448992c))

### 📈 Stats

- Bundle size (uncompressed): 70 KB (+1 KB / +1%)
- Bundle size (gzipped): 20 KB (unchanged)

# [@solid-design-system/components-v1.1.0](https://github.com/solid-design-system/solid/compare/components/1.0.2...components/1.1.0) (2023-07-07)

### Features

- ✨ accordion & accordion group ([#201](https://github.com/solid-design-system/solid/issues/201)) ([aea28b8](https://github.com/solid-design-system/solid/commit/aea28b8e3ec8583efdf375cd4e045d8a68ae14a7))

### 📈 Stats

- Bundle size (uncompressed): 69 KB (+8 KB / +13%)
- Bundle size (gzipped): 20 KB (+2 KB / +11%)

# [@solid-design-system/components-v1.0.2](https://github.com/solid-design-system/solid/compare/components/1.0.1...components/1.0.2) (2023-07-06)

### Bug Fixes

- 🐛 improve spinner a11y ([#222](https://github.com/solid-design-system/solid/issues/222)) ([ce65ce0](https://github.com/solid-design-system/solid/commit/ce65ce0cab5c58861529895ecd08c22ca005da7f))

# [@solid-design-system/components-v1.0.1](https://github.com/solid-design-system/solid/compare/components/1.0.0...components/1.0.1) (2023-07-05)

### Bug Fixes

- provide registerIconLibrary ([#213](https://github.com/solid-design-system/solid/issues/213)) ([016cefa](https://github.com/solid-design-system/solid/commit/016cefaa0b20e3fe17e6a9766422c8c1665808da))

# @solid-design-system/components-v1.0.0 (2023-07-04)

### Features

- init sd-button, sd-icon, sd-spinner, sd-link, sd-include
- provision components on CDN and NPM

### 📈 Stats

- Bundle size (uncompressed): 61 KB
- Bundle size (gzipped): 18 KB
