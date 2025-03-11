# @solid-design-system/docs

## 1.12.7

### Patch Changes

- Improved `sd-input` accessibility and consistency with other components. _[`#1934`](https://github.com/solid-design-system/solid/pull/1934) [`b8f1d87`](https://github.com/solid-design-system/solid/commit/b8f1d879b7974fe81633d08d66e3605ab9eae139) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add labels to sd-input.

## 1.12.6

### Patch Changes

- Fixed accessibility violation in `sd-table` templates. _[`#1963`](https://github.com/solid-design-system/solid/pull/1963) [`aebb0de`](https://github.com/solid-design-system/solid/commit/aebb0de7f2757e8ca82800d6258f745b93812bd4) [@smfonseca](https://github.com/smfonseca)_

## 1.12.5

### Patch Changes

- Fixed accessibility violation in `sd-dialog` templates. _[`#1962`](https://github.com/solid-design-system/solid/pull/1962) [`6c3d82a`](https://github.com/solid-design-system/solid/commit/6c3d82a1c81b829f3d07d5b309da8c97ff5b8a3d) [@smfonseca](https://github.com/smfonseca)_

## 1.12.4

### Patch Changes

- Update `sd-combobox` screenshots tests and stories with missing labels to fix a11y issues. _[`#1936`](https://github.com/solid-design-system/solid/pull/1936) [`0c42bc3`](https://github.com/solid-design-system/solid/commit/0c42bc397337c2dd4ecad37bd391feb09c8b1165) [@smfonseca](https://github.com/smfonseca)_

## 1.12.3

### Patch Changes

- Fix `sd-brandshape` slot a11y color-contrast issues _[`#1964`](https://github.com/solid-design-system/solid/pull/1964) [`c0ac3b8`](https://github.com/solid-design-system/solid/commit/c0ac3b84d2ca52af31f824cbec0329e2e563d08e) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.12.2

### Patch Changes

- Sync `sd-radio-button` and `sd-combobox` visually-disabled examples with Figma and fix typo in story title. _[`#1931`](https://github.com/solid-design-system/solid/pull/1931) [`82121dc`](https://github.com/solid-design-system/solid/commit/82121dce671e93f9066c1af79c8992090641f861) [@smfonseca](https://github.com/smfonseca)_

## 1.12.1

### Patch Changes

- Skipped `color-contrast` rule in accessibility tests for `sd-interactive--disabled`. _[`#1959`](https://github.com/solid-design-system/solid/pull/1959) [`69120c5`](https://github.com/solid-design-system/solid/commit/69120c52e87cb2364eced4df8a9c53795e14dd90) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.12.0

### Minor Changes

- The `sd-pagination` has arrived! 🎉 _[`#1916`](https://github.com/solid-design-system/solid/pull/1916) [`8e97181`](https://github.com/solid-design-system/solid/commit/8e97181cbc913d47fbadc1997cfe75bcaa7a9245) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Add new `sd-pagination` stories and template.

## 1.11.6

### Patch Changes

- Skipped `aria-required-parent` rule in accessibility tests for `sd-option`. This is already validated in tests for `sd-optgroup` or `sd-select`. Also included a missing `aria-label` attribute. _[`#1937`](https://github.com/solid-design-system/solid/pull/1937) [`947b5bc`](https://github.com/solid-design-system/solid/commit/947b5bc9483dc475784a5bcb368fd0f0a69474c3) [@smfonseca](https://github.com/smfonseca)_

## 1.11.5

### Patch Changes

- Implement `templateRenderer` on `generateTemplate` options to have better control of how stories are rendered. _[`#1955`](https://github.com/solid-design-system/solid/pull/1955) [`1b03e45`](https://github.com/solid-design-system/solid/commit/1b03e459950d33a7836c0d4524742870f3c5df9a) [@paulovareiro29](https://github.com/paulovareiro29)_

  Fix `sd-container` a11y contrast issues.

## 1.11.4

### Patch Changes

- Skipped `aria-required-parent` violation in accessibility automatic tests. This test is not relevant in this context since we only want to show the isolated component and not in the context of its real use which would be wrapped in a `sd-tab-group` component. This use case is already validated in other stories like `variant` or `active`. _[`#1945`](https://github.com/solid-design-system/solid/pull/1945) [`7efae4d`](https://github.com/solid-design-system/solid/commit/7efae4d273f771dfe1b6e2aa8ed350fb230de8b4) [@smfonseca](https://github.com/smfonseca)_

## 1.11.3

### Patch Changes

- Add missing alt attributes on `sd-copyright` stories. _[`#1950`](https://github.com/solid-design-system/solid/pull/1950) [`5ba05c9`](https://github.com/solid-design-system/solid/commit/5ba05c9dbddc985d7ffd4b009aa3d3d35ea1f6a6) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.11.2

### Patch Changes

- Improve storybook theme to align with brand and address some accessibility issues. _[`#1941`](https://github.com/solid-design-system/solid/pull/1941) [`49e8de0`](https://github.com/solid-design-system/solid/commit/49e8de066f6d2eb3dc77cc5dbfc50e1a3be66df5) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.11.1

### Patch Changes

- Added missing labels to `sd-optgroup` screenshot tests and stories to address a11y violations. _[`#1938`](https://github.com/solid-design-system/solid/pull/1938) [`a328df3`](https://github.com/solid-design-system/solid/commit/a328df31e8fcd379100ff5d27859070015ddef68) [@smfonseca](https://github.com/smfonseca)_

## 1.11.0

### Minor Changes

- Implement highlight option renderer to highlight multiple search occurences on combobox template. _[`#1920`](https://github.com/solid-design-system/solid/pull/1920) [`9520101`](https://github.com/solid-design-system/solid/commit/9520101d406c34e600624a269ca707449d40bbb5) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.10.5

### Patch Changes

- Fixed accessibility issue in `sd-badge` template by including missing labels. _[`#1947`](https://github.com/solid-design-system/solid/pull/1947) [`6f0ffbd`](https://github.com/solid-design-system/solid/commit/6f0ffbdd3d50e1c45befee1152eff456ed998a5b) [@smfonseca](https://github.com/smfonseca)_

## 1.10.4

### Patch Changes

- Add missing alt attribute on `sd-video` screenshot tests. _[`#1944`](https://github.com/solid-design-system/solid/pull/1944) [`32695f2`](https://github.com/solid-design-system/solid/commit/32695f2580fe301f252195492bedd6aedcf467cf) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.10.3

### Patch Changes

- Update `sd-radio`, `sd-radio-group` and `sd-radio-button` screenshots tests and stories with missing labels to fix a11y issues. _[`#1940`](https://github.com/solid-design-system/solid/pull/1940) [`d2d5dcb`](https://github.com/solid-design-system/solid/commit/d2d5dcb9889102d9ad18f8ffcb9cbba389c4088e) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.10.2

### Patch Changes

- Fix accessibility violation by including aria attribute in Slots screenshot test story. _[`#1933`](https://github.com/solid-design-system/solid/pull/1933) [`43e4765`](https://github.com/solid-design-system/solid/commit/43e4765788035d84bda1f52d693148e8392389f8) [@smfonseca](https://github.com/smfonseca)_

## 1.10.1

### Patch Changes

- Fix `empty table header` a11y issue on multiple axis component templates _[`#1930`](https://github.com/solid-design-system/solid/pull/1930) [`6327da1`](https://github.com/solid-design-system/solid/commit/6327da128579d8131da3e10dd714afb216e226e1) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.10.0

### Minor Changes

- Add `visually-disabled` attribute in form elements for improved accessibility. _[`#1899`](https://github.com/solid-design-system/solid/pull/1899) [`15d4497`](https://github.com/solid-design-system/solid/commit/15d44972b1c3c616dd147245bc837df492d9ec1c) [@smfonseca](https://github.com/smfonseca)_

  By introducing this new attribute, it is possible to display an element as if it is disabled while still keeping it accessible to screen readers. This attribute is currently available on the following components:

  - sd-button
  - sd-link
  - sd-input
  - sd-combobox
  - sd-select
  - sd-radio
  - sd-radio-button
  - sd-checkbox
  - sd-textarea

  The components `sd-radio-group` and `sd-checkbox-group` also have a new `help-text` attribute and slot which allows users to include a description.

  A new form template utilizing the `visually-disabled` approach has been created as a suggestion on how to handle forms in a more accessible way.

## 1.9.0

### Minor Changes

- Add new package `eslint-plugin` documentation. _[`#1912`](https://github.com/solid-design-system/solid/pull/1912) [`018277c`](https://github.com/solid-design-system/solid/commit/018277c67e83fd9d4906d3f0c6c3c35c04ad185c) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.8.1

### Patch Changes

- Add missing solid-components.css styles to stories. _[`#1902`](https://github.com/solid-design-system/solid/pull/1902) [`8d1b364`](https://github.com/solid-design-system/solid/commit/8d1b364f67f000eb58449ddb9431c7e3d13dc083) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.8.0

### Minor Changes

- Add checkbox-group template with required fields _[`#1910`](https://github.com/solid-design-system/solid/pull/1910) [`b9fe940`](https://github.com/solid-design-system/solid/commit/b9fe940557dd7bdd1fa6d0bfc607de54cee57301) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

## 1.7.3

### Patch Changes

- Fixed optical missmatch in `checked` and `disabled` state. _[`#1900`](https://github.com/solid-design-system/solid/pull/1900) [`b8f3c8a`](https://github.com/solid-design-system/solid/commit/b8f3c8a6641fb125dd472f5a5cf86c2e4de81ebe) [@smfonseca](https://github.com/smfonseca)_

## 1.7.2

### Patch Changes

- Improve docs: _[`#1712`](https://github.com/solid-design-system/solid/pull/1712) [`776c0e4`](https://github.com/solid-design-system/solid/commit/776c0e4579644380b0b169c76373b522ce508edf) [@Vahid1919](https://github.com/Vahid1919)_

  - Improve tooltip placement in the size story
  - Improve mobile version in the placement story

## 1.7.1

### Patch Changes

- Accessibility tests: _[`#1896`](https://github.com/solid-design-system/solid/pull/1896) [`36904da`](https://github.com/solid-design-system/solid/commit/36904dadac5ac0fe83abac7bc51b7c4a79f5cefc) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Resolved errors during test execution.
  - Removed unstable `test.watch`.

## 1.7.0

### Minor Changes

- Implement bidirectional navigation between footnotes and references. _[`#1813`](https://github.com/solid-design-system/solid/pull/1813) [`a338a64`](https://github.com/solid-design-system/solid/commit/a338a643bd09aa2829bcb5671eb40db9b8c57832) [@paulovareiro29](https://github.com/paulovareiro29)_

### Patch Changes

- Update general accessibility docs according to figma _[`#1898`](https://github.com/solid-design-system/solid/pull/1898) [`13c64c9`](https://github.com/solid-design-system/solid/commit/13c64c988068b00a7a46d459b464e203a574aee4) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.6.1

### Patch Changes

- Fix storybooks' font in alignment with brand. _[`#1842`](https://github.com/solid-design-system/solid/pull/1842) [`f628a58`](https://github.com/solid-design-system/solid/commit/f628a58eb728a15fe4fd0a026d2b3b1761347966) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.6.0

### Minor Changes

- Add the new style component `sd-status-badge` and a new status icon library (`sd-status-assets`) for exclusive use of this component. _[`#1820`](https://github.com/solid-design-system/solid/pull/1820) [`617d02d`](https://github.com/solid-design-system/solid/commit/617d02d91e0eb3d27f9769e0e72fd76b985d6b33) [@smfonseca](https://github.com/smfonseca)_

## 1.5.1

### Patch Changes

- Fix monospace font-family on show code section. _[`#1833`](https://github.com/solid-design-system/solid/pull/1833) [`01580e2`](https://github.com/solid-design-system/solid/commit/01580e2d0fbfbba33bcb28e72161858ddc0cf4ab) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.5.0

### Minor Changes

- Implemented automated accessibility tests using [@axe-core/playwright](https://www.npmjs.com/package/@axe-core/playwright) _[`#1797`](https://github.com/solid-design-system/solid/pull/1797) [`3dd6256`](https://github.com/solid-design-system/solid/commit/3dd62563f05e2a68caba65438accb10ba91d02e9) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.4.5

### Patch Changes

- Update broken urls in documentation. _[`#1834`](https://github.com/solid-design-system/solid/pull/1834) [`6ae18a3`](https://github.com/solid-design-system/solid/commit/6ae18a3a1af5dd5948c7c3fd9e6e4ef9bb7474e0) [@smfonseca](https://github.com/smfonseca)_

## 1.4.4

### Patch Changes

- Update `slot` story to have example slot div vertically centered inside the marker. _[`#1818`](https://github.com/solid-design-system/solid/pull/1818) [`adc5ee0`](https://github.com/solid-design-system/solid/commit/adc5ee06300566bd4b22352e178664cfc1458059) [@smfonseca](https://github.com/smfonseca)_

## 1.4.3

### Patch Changes

- Fix SDS documentation urls in Codepen editor. _[`#1817`](https://github.com/solid-design-system/solid/pull/1817) [`a3b28c1`](https://github.com/solid-design-system/solid/commit/a3b28c14be5a1742de36ad3b03859b4947decde4) [@smfonseca](https://github.com/smfonseca)_

## 1.4.2

### Patch Changes

- Improved sd-drawer screenshot tests, sd-drawer and sd-header templates a11y: _[`#1743`](https://github.com/solid-design-system/solid/pull/1743) [`722cc99`](https://github.com/solid-design-system/solid/commit/722cc99e032a91bfb1a14a019190ddd0bd1ba790) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add aria-labels to duplicated navigation landmarks in templates
  - Fix focus style cut off
  - Fix autofocus story
  - Replace native input with sd-input in autofocus and mouseless stories
  - Include a11y hint to add a label
  - Update stories with button to reopen drawer

## 1.4.1

### Patch Changes

- Extend `sd-tooltip` documentation with example on how to use a custom trigger and measures to preserve accessibility. _[`#1798`](https://github.com/solid-design-system/solid/pull/1798) [`fa60adc`](https://github.com/solid-design-system/solid/commit/fa60adc10a0b96654d6bf7380b4fc8e82857caa6) [@smfonseca](https://github.com/smfonseca)_

## 1.4.0

### Minor Changes

- Add radio button group template. _[`#1779`](https://github.com/solid-design-system/solid/pull/1779) [`9ec07c6`](https://github.com/solid-design-system/solid/commit/9ec07c660c1a28b7b75c75350876324f4c4bab7a) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.3.5

### Patch Changes

- Fix urls in `docs-codepen-enhancer` so that the correct files are loaded within Codepen editor. _[`#1800`](https://github.com/solid-design-system/solid/pull/1800) [`07fde87`](https://github.com/solid-design-system/solid/commit/07fde874bdf60ea02b9bf489eef34c17635fe455) [@smfonseca](https://github.com/smfonseca)_

  `https://solid-design-system.fe.union-investment.de/components/4.0.1/solid-components.bundle.js` -> `https://solid-design-system.fe.union-investment.de/components/4.0.1/cdn/solid-components.bundle.js`

## 1.3.4

### Patch Changes

- Align storybook font family with brand. _[`#1796`](https://github.com/solid-design-system/solid/pull/1796) [`53bc72f`](https://github.com/solid-design-system/solid/commit/53bc72f3f1b6126f658e63335805f9aefa84b033) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.3.3

### Patch Changes

- Fix wrong URLs in migration guide. _[`#1792`](https://github.com/solid-design-system/solid/pull/1792) [`a140cc8`](https://github.com/solid-design-system/solid/commit/a140cc85adb49a408fe19a6c1295dc0b9fcd3bf2) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.3.2

### Patch Changes

- Update dependencies _[`#1787`](https://github.com/solid-design-system/solid/pull/1787) [`c70915b`](https://github.com/solid-design-system/solid/commit/c70915be2135d93f17e9150ea6fcef95f90dd081) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.3.1

### Patch Changes

- Fix wrong URLs in migration guide. _[`#1788`](https://github.com/solid-design-system/solid/pull/1788) [`1fa11df`](https://github.com/solid-design-system/solid/commit/1fa11dff3217b479144b4c8884245fd69122d14e) [@mariohamann](https://github.com/mariohamann)_

## 1.3.0

### Minor Changes

- Removed `sd-video` overlay feature. _[`#1776`](https://github.com/solid-design-system/solid/pull/1776) [`d12e330`](https://github.com/solid-design-system/solid/commit/d12e3305ca95bc63188017b1ea3113e41019e27c) [@paulovareiro29](https://github.com/paulovareiro29)_
- Improve sd-headline stories description and a11y. _[`#1729`](https://github.com/solid-design-system/solid/pull/1729) [`776ed57`](https://github.com/solid-design-system/solid/commit/776ed57e61dfa94786534b51a8a788a25f19e8bc) [@paulovareiro29](https://github.com/paulovareiro29)_

  Implement sd-headline template.

- Codepens now link to correct styles and components in PRs, on next, main and on prod _[`#1749`](https://github.com/solid-design-system/solid/pull/1749) [`dee4112`](https://github.com/solid-design-system/solid/commit/dee41127ec4502537d1ddcb62acb63e386386bea) [@mariohamann](https://github.com/mariohamann)_

### Patch Changes

- Extend sd-interactive and icon-only buttons documentation regarding accessibility best practices. _[`#1740`](https://github.com/solid-design-system/solid/pull/1740) [`311d2f6`](https://github.com/solid-design-system/solid/commit/311d2f6715cddc760c6860bd6a0017a4123379da) [@smfonseca](https://github.com/smfonseca)_
- Improved quote template a11y: _[`#1756`](https://github.com/solid-design-system/solid/pull/1756) [`70a17a0`](https://github.com/solid-design-system/solid/commit/70a17a0391db0d95e440ab885c674f01758bb6d8) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Added accessibility information
  - Replaced `q` html elements by `blockquote`
  - Renamed `John Doe` to `Jane Doe`

- The `variant` `gradient-white` of component `sd-teaser-media` was changed to `gradient-light` to be in sync with design. _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- Fix `sd-select` displaying the scrollbar by default, even when unecessary. _[`#1769`](https://github.com/solid-design-system/solid/pull/1769) [`49615f2`](https://github.com/solid-design-system/solid/commit/49615f2326110ec1bd40bc2e5b81f7006202a9a7) [@paulovareiro29](https://github.com/paulovareiro29)_
- Removed unecessary padding classes from tab stories. _[`#1755`](https://github.com/solid-design-system/solid/pull/1755) [`9954447`](https://github.com/solid-design-system/solid/commit/9954447efacc72908971c123b94bfd549dc69454) [@paulovareiro29](https://github.com/paulovareiro29)_
- Added the debug class to sd-hidden-links to display hidden links for screenshot tests. _[`#1753`](https://github.com/solid-design-system/solid/pull/1753) [`5dbc65f`](https://github.com/solid-design-system/solid/commit/5dbc65f27496303c7f02cb0dfa90c18d232af33c) [@paulovareiro29](https://github.com/paulovareiro29)_
- Bugfixes and minor non-breaking changes to the sd-select and sd-combobox components _[`#1742`](https://github.com/solid-design-system/solid/pull/1742) [`125d5f1`](https://github.com/solid-design-system/solid/commit/125d5f1db6c0eaf19500cc333ac33ab39646d842) [@DanielHargesheimer](https://github.com/DanielHargesheimer)_

  - sd-combobox: emit events correctly
  - sd-combobox: set options' initial attributes
  - sd-select and sd-combobox: add max-options-tag-label attribute
  - sd-select: add --tag-max-width and ellipsis

- Fixed gradient issue on flipcard. _[`#1752`](https://github.com/solid-design-system/solid/pull/1752) [`1f05b67`](https://github.com/solid-design-system/solid/commit/1f05b677f64c6fca93e5764cfd283ddd17dcc145) [@paulovareiro29](https://github.com/paulovareiro29)_

  Implemented an improved flipcard template version.

- Update `variant` attribute options name in stories where sd-badge is used. _[`#1774`](https://github.com/solid-design-system/solid/pull/1774) [`8b96338`](https://github.com/solid-design-system/solid/commit/8b963385855a6440b3a888ac73bec1ae71697a67) [@smfonseca](https://github.com/smfonseca)_
- Improved sd-expandable a11y: _[`#1724`](https://github.com/solid-design-system/solid/pull/1724) [`c7bab9d`](https://github.com/solid-design-system/solid/commit/c7bab9db426203a61b42a19740c409c50b25da4c) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Improved template labels
  - Added accessibility hints

## 1.3.0-next.12

### Minor Changes

- Improve sd-headline stories description and a11y. _[`#1729`](https://github.com/solid-design-system/solid/pull/1729) [`776ed57`](https://github.com/solid-design-system/solid/commit/776ed57e61dfa94786534b51a8a788a25f19e8bc) [@paulovareiro29](https://github.com/paulovareiro29)_

  Implement sd-headline template.

## 1.3.0-next.11

### Patch Changes

- Improved quote template a11y: _[`#1756`](https://github.com/solid-design-system/solid/pull/1756) [`70a17a0`](https://github.com/solid-design-system/solid/commit/70a17a0391db0d95e440ab885c674f01758bb6d8) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Added accessibility information
  - Replaced `q` html elements by `blockquote`
  - Renamed `John Doe` to `Jane Doe`

## 1.3.0-next.10

### Patch Changes

- Improved sd-expandable a11y: _[`#1724`](https://github.com/solid-design-system/solid/pull/1724) [`c7bab9d`](https://github.com/solid-design-system/solid/commit/c7bab9db426203a61b42a19740c409c50b25da4c) [@paulovareiro29](https://github.com/paulovareiro29)_

  - Improved template labels
  - Added accessibility hints

## 1.3.0-next.9

### Patch Changes

- Fix `sd-select` displaying the scrollbar by default, even when unecessary. _[`#1769`](https://github.com/solid-design-system/solid/pull/1769) [`49615f2`](https://github.com/solid-design-system/solid/commit/49615f2326110ec1bd40bc2e5b81f7006202a9a7) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.3.0-next.8

### Patch Changes

- Fixed gradient issue on flipcard. _[`#1752`](https://github.com/solid-design-system/solid/pull/1752) [`1f05b67`](https://github.com/solid-design-system/solid/commit/1f05b677f64c6fca93e5764cfd283ddd17dcc145) [@paulovareiro29](https://github.com/paulovareiro29)_

  Implemented an improved flipcard template version.

## 1.3.0-next.7

### Minor Changes

- Removed `sd-video` overlay feature. _[`#1776`](https://github.com/solid-design-system/solid/pull/1776) [`d12e330`](https://github.com/solid-design-system/solid/commit/d12e3305ca95bc63188017b1ea3113e41019e27c) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.3.0-next.6

### Patch Changes

- Update `variant` attribute options name in stories where sd-badge is used. _[`#1774`](https://github.com/solid-design-system/solid/pull/1774) [`8b96338`](https://github.com/solid-design-system/solid/commit/8b963385855a6440b3a888ac73bec1ae71697a67) [@smfonseca](https://github.com/smfonseca)_

## 1.3.0-next.5

### Patch Changes

- Bugfixes and minor non-breaking changes to the sd-select and sd-combobox components _[`#1742`](https://github.com/solid-design-system/solid/pull/1742) [`125d5f1`](https://github.com/solid-design-system/solid/commit/125d5f1db6c0eaf19500cc333ac33ab39646d842) [@DanielHargesheimer](https://github.com/DanielHargesheimer)_

  - sd-combobox: emit events correctly
  - sd-combobox: set options' initial attributes
  - sd-select and sd-combobox: add max-options-tag-label attribute
  - sd-select: add --tag-max-width and ellipsis

## 1.3.0-next.4

### Patch Changes

- Added the debug class to sd-hidden-links to display hidden links for screenshot tests. _[`#1753`](https://github.com/solid-design-system/solid/pull/1753) [`5dbc65f`](https://github.com/solid-design-system/solid/commit/5dbc65f27496303c7f02cb0dfa90c18d232af33c) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.3.0-next.3

### Patch Changes

- Removed unecessary padding classes from tab stories. _[`#1755`](https://github.com/solid-design-system/solid/pull/1755) [`9954447`](https://github.com/solid-design-system/solid/commit/9954447efacc72908971c123b94bfd549dc69454) [@paulovareiro29](https://github.com/paulovareiro29)_

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
