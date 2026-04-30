# Changelog

## 2.6.0

### Minor Changes

- [#1188](https://github.com/synergy-design-system/synergy-design-system/pull/1188) [`c60deb9`](https://github.com/synergy-design-system/synergy-design-system/commit/c60deb9da1175404ddaa25b2c19ce9e182205cd2) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2026-02-19

  feat: ✨ `<syn-header>` sticky behavior (#529)

  `<syn-header>` now has a new `sticky` boolean property that can be used when a sticky header is needed, e.g. `<syn-header sticky></syn-header>`.
  This adds `position: sticky`, as well as a small shadow that indicates that the header is stuck.
  You can configure the `top` position via the new `--sticky-position` css property (defaults to `0` to make it stick to the top).

## 2.5.0

### Minor Changes

- [#1191](https://github.com/synergy-design-system/synergy-design-system/pull/1191) [`30f3b74`](https://github.com/synergy-design-system/synergy-design-system/commit/30f3b74891cf693735a792a901c5b23b016c71b8) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2026-02-19

  feat: ✨ Add new size `small` to `<syn-details>` and `<syn-accordion>` (#1154)

  The `<syn-details>` element was the only element with a `size` property that had no `small` variant.
  This was now added for consistency with other elements that have a `size` property.

  This can be used via `<syn-details size="small"></syn-details>` or `<syn-accordion size="small"></syn-accordion>`.

## 2.4.1

### Patch Changes

- [#1182](https://github.com/synergy-design-system/synergy-design-system/pull/1182) [`460f8c2`](https://github.com/synergy-design-system/synergy-design-system/commit/460f8c22dfdc305d3990ba0af4b4aefc451fa8ea) Thanks [@kirchsuSICKAG](https://github.com/kirchsuSICKAG)! - Released on: 2026-02-19

  fix: 🐛 Dependency updates (#258)

- Updated dependencies [[`460f8c2`](https://github.com/synergy-design-system/synergy-design-system/commit/460f8c22dfdc305d3990ba0af4b4aefc451fa8ea)]:
  - @synergy-design-system/assets@2.0.1

## 2.4.0

### Minor Changes

- Released on: 2026-02-17

  chore: ✨ Update MCP with latest metadata

## 2.3.0

### Minor Changes

- [#1164](https://github.com/synergy-design-system/synergy-design-system/pull/1164) [`c9fb440`](https://github.com/synergy-design-system/synergy-design-system/commit/c9fb4405c0a1eb3499e4753447ac643ae632ff56) Thanks [@kirchsuSICKAG](https://github.com/kirchsuSICKAG)! - Released on: 2026-02-05

  feat: ✨ syn-combobox multiple (#627)

  Adds multiple selection functionality to the `syn-combobox` component, enabling users to select multiple options simultaneously.

  **Properties Added:**
  - `multiple`: Enables multiple selection mode
  - `delimiter`: Customizable value separator (default: ` ` (space))
  - `max-options-visible`: Controls visible tag limit with overflow handling
  - `getTag`: Custom tag rendering function

## 2.2.0

### Minor Changes

- [#1169](https://github.com/synergy-design-system/synergy-design-system/pull/1169) [`aefb7a8`](https://github.com/synergy-design-system/synergy-design-system/commit/aefb7a8c4c9860f6222d7054a6f044b2ed0c49a6) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2026-02-02

  chore: 🔧 remove vendorism from components package (#1168)

  The custom vendoring process is not needed anymore. Because of this, it was removed and all comments and builds now only rely on `pnpm build`

## 2.1.0

### Minor Changes

- [#1141](https://github.com/synergy-design-system/synergy-design-system/pull/1141) [`96dff2e`](https://github.com/synergy-design-system/synergy-design-system/commit/96dff2ebb47cee901f72773664ee864db5653219) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2026-02-02

  feat: ✨ `<syn-button-group>` (#392)

  We added a new component `<syn-button-group>` that you can use to group a list of buttons.

  It will automatically apply its `size` and `variant` properties to all nested buttons.

## 2.0.0

### Major Changes

- [#1160](https://github.com/synergy-design-system/synergy-design-system/pull/1160) [`669cbcb`](https://github.com/synergy-design-system/synergy-design-system/commit/669cbcb9cccce72134beac99ac12a2591f3e3c74) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2026-02-02

  feat: 💥 Enhanced migration support and SICK 2025 defaults

  This release enhances the MCP server with improved migration guidance and updates default iconset to SICK 2025.

  **Key Changes:**
  - **Breaking:** Migration endpoint now requires package specification - the migration endpoint has been updated to accept a package parameter (e.g., components, styles, assets, tokens) to provide package-specific breaking changes documentation
  - **Breaking:** Default iconset changed to SICK 2025 - asset info endpoint now returns SICK 2025 iconset information by default instead of SICK 2018

  **Migration Steps:**
  - Update any calls to the migration endpoint to specify the target package
  - Review asset integrations as the default iconset has changed to SICK 2025

  \*\*New tool `migration-list`
  - Provides a new tool that gives information about available migrations for packages (e.g. for components how to migrate from v2 sick2018 to v3 sick2025)

### Patch Changes

- Updated dependencies [[`669cbcb`](https://github.com/synergy-design-system/synergy-design-system/commit/669cbcb9cccce72134beac99ac12a2591f3e3c74)]:
  - @synergy-design-system/assets@2.0.0

## 1.41.2

### Patch Changes

- [#1148](https://github.com/synergy-design-system/synergy-design-system/pull/1148) [`73b7011`](https://github.com/synergy-design-system/synergy-design-system/commit/73b70118ae21bc58c83cbfeb9e2e8447873803a6) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2026-01-08

  fix: 🐛 Minor dependency updates (#258)

- Updated dependencies [[`73b7011`](https://github.com/synergy-design-system/synergy-design-system/commit/73b70118ae21bc58c83cbfeb9e2e8447873803a6)]:
  - @synergy-design-system/assets@1.25.1

## 1.41.1

### Patch Changes

- [#1147](https://github.com/synergy-design-system/synergy-design-system/pull/1147) [`8e3230c`](https://github.com/synergy-design-system/synergy-design-system/commit/8e3230cc351c62e2e9485c5234675d40ac7ac175) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2026-01-07

  fix: 🐛 adjust syn button tokens (#1145)

  The original tokens used `inherit` as a fallback value, which did not have any effect but to fall back to the original value.
  This is now made explicit to allow the use of button variables in code directly.

## 1.41.0

### Minor Changes

- [#1132](https://github.com/synergy-design-system/synergy-design-system/pull/1132) [`13f6b25`](https://github.com/synergy-design-system/synergy-design-system/commit/13f6b259af388a0fbafc7c963443d08e61c4e99f) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-18

  feat: ✨ support angular 21 (#1094)

  Enables the possibility to use `angular@21`.

## 1.40.0

### Minor Changes

- [#1138](https://github.com/synergy-design-system/synergy-design-system/pull/1138) [`dc56e6f`](https://github.com/synergy-design-system/synergy-design-system/commit/dc56e6f0ebc08e44b23bdbdaa6fffa03abc26e9e) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-18

  feat: ✨ form element active states (#433)

  This release adds adjustments for `:active` states for various form elements.
  - `<syn-checkbox>` now has new active states, dependent on if it is checked and unchecked.
  - `<syn-nav-item>` now has a new active state
  - `<syn-radio>` will show its active indicator when pressing the associated label, too.
  - `<syn-switch>` now has new active states, dependent on if it is checked and unchecked.

## 1.39.0

### Minor Changes

- [#1109](https://github.com/synergy-design-system/synergy-design-system/pull/1109) [`6b4b7e2`](https://github.com/synergy-design-system/synergy-design-system/commit/6b4b7e2940b5c87e44d5da6030354ec0e21f2f38) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-16

  feat: ✨ Brand updates for `<syn-button>` (#871)
  feat: ✨ Brand updates for `<syn-dropdown>` (#949)

## 1.38.5

### Patch Changes

- [#1134](https://github.com/synergy-design-system/synergy-design-system/pull/1134) [`53bd655`](https://github.com/synergy-design-system/synergy-design-system/commit/53bd655f465b76c2aa7d57449750b99e8fcfb500) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-16

  fix: 🐛 Adjust `<syn-option>` and `<syn-menu-item>` interactive background (#1127)

  Minor adjustments for `<syn-option>` and `<syn-menu-item>` hover and focus states to better mimic the effects as detailed in Figma for the SICK 2025 themes.
  Both components now use a combination of `background` and `border-radius` to show the `<syn-option>` with an inset highlight color, allowing to better match the wanted spacings.

## 1.38.4

### Patch Changes

- [#1139](https://github.com/synergy-design-system/synergy-design-system/pull/1139) [`6cc7376`](https://github.com/synergy-design-system/synergy-design-system/commit/6cc737681f2b137702f3e95b0a666ae6f28b5039) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-16

  fix: 🐛 Incorrect offset of submenu items when submenu opens to the left (#1009)

  Fixes an issue that leads to incorrect offsets when a nested `<syn-menu>` is opened to the left instead of to the right.

## 1.38.3

### Patch Changes

- [#1137](https://github.com/synergy-design-system/synergy-design-system/pull/1137) [`f7c0662`](https://github.com/synergy-design-system/synergy-design-system/commit/f7c0662d80dacd3aae6f4bd8559aadc399025858) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-16

  fix: 🐛 SICK Intl Semibold does not display correctly on Windows (#1124)

  This release fixes an issue that only appears when using Windows 10 and 11.
  The exported font used cleartype annotations which lead to broken renderings on certain font sizes.

  > We are still in the process of optimizing `SICK Intl` and are actively working on a solution for current problems like blurry rendering.

## 1.38.2

### Patch Changes

- [#1136](https://github.com/synergy-design-system/synergy-design-system/pull/1136) [`212b5bd`](https://github.com/synergy-design-system/synergy-design-system/commit/212b5bd29087b10d1fe0e6bbb94c97090b7b4f74) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-16

  fix: 🐛 `<syn-alert>` close icon should be aligned to top (#1135)

  Fixes an issue that was introduces in version `2.74.0`.
  The close icons is now always aligned to the top of the `<syn-alert>` again.

## 1.38.1

### Patch Changes

- [#1133](https://github.com/synergy-design-system/synergy-design-system/pull/1133) [`82ea066`](https://github.com/synergy-design-system/synergy-design-system/commit/82ea066fa18e35831d94f22c7ac620135bc8c334) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-15

  fix: 🐛 syn menu submenu rounding (#1131)

  Fixes an issue with `<syn-menu-item>` when rendering submenus.
  Submenus did not take the changed `border-radius` of `<syn-menu>` into account, leading to squared borders in the `SICK 2025` themes.

## 1.38.0

### Minor Changes

- [#1129](https://github.com/synergy-design-system/synergy-design-system/pull/1129) [`102e650`](https://github.com/synergy-design-system/synergy-design-system/commit/102e6503af3a72d0d2529ed216ce6053a07b9607) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-12

  feat: ✨ syn alert add sizes (#1119)

  We have added a new property `size` to `<syn-alert>` that can be set to `small`, `medium` (the default) and `large`.
  The property can also be used with Synergy `defaultSettings`.

  We also adjusted `<syn-validate>` to draw the `size` attribute of its `slotted` `HTMLInputElement`. If a `size` property is found on the rendered input, it will be forwarded to the rendered `<syn-alert>` if you use `variant="inline"`.

## 1.37.0

### Minor Changes

- [#1122](https://github.com/synergy-design-system/synergy-design-system/pull/1122) [`740816b`](https://github.com/synergy-design-system/synergy-design-system/commit/740816b1a86768e7f2fed5516241bdb3a9df4ef7) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-11

  feat: ✨ adjust sizes of form elements (#1083)
  - `<syn-checkbox>` Bigger checkbox in small and medium
  - `<syn-radio>` Bigger radio control in small and medium
  - `<syn-switch>` Larger label and bigger switch control in all sizes

## 1.36.0

### Minor Changes

- [#1128](https://github.com/synergy-design-system/synergy-design-system/pull/1128) [`7de2441`](https://github.com/synergy-design-system/synergy-design-system/commit/7de244110cf55bb3788e26f65704194bfc861412) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-09

  feat: ✨ Add a new `shadow` propertry to `<syn-card>` (#1107)

  Using `<syn-card shadow></syn-card>` will draw the card with a shadow. This can be used when the card has to stand out visually, for example in dashboards.

## 1.35.0

### Minor Changes

- [#1126](https://github.com/synergy-design-system/synergy-design-system/pull/1126) [`ab15da3`](https://github.com/synergy-design-system/synergy-design-system/commit/ab15da3bf8956f1d523ca3115a466205474e071f) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-09

  feat: ✨ remove background blur from drawer (#1120)

  After gathering community feedback, we chose to remove the background blur introduced in version `2.48.0` from `<syn-drawer>`.
  This was done because users might loose context when for example using the `<syn-side-nav>`.
  The blur effect is still used in `<syn-dialog>`. It may be removed entirely via setting `--syn-overlay-background-blur: 0;` if needed.

## 1.34.0

### Minor Changes

- [#1125](https://github.com/synergy-design-system/synergy-design-system/pull/1125) [`d414abe`](https://github.com/synergy-design-system/synergy-design-system/commit/d414abe26eaee05928a8f1914748de1866837804) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-09

  feat: ✨ adjust badge font size (#1108)

  The font size of `<syn-badge>` was perceived as too large. Therefore, it was changed from medium to small.

## 1.33.0

### Minor Changes

- [#1095](https://github.com/synergy-design-system/synergy-design-system/pull/1095) [`f9f544f`](https://github.com/synergy-design-system/synergy-design-system/commit/f9f544feb2adb3edef95bd1b50a303440e0c8385) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-04

  feat: ✨ Brand updates for `<syn-select>`, `<syn-option>` and `<syn-optgroup>` (#988)
  feat: ✨ Brand updates for `<syn-combobox>` (#944)

## 1.32.0

### Minor Changes

- [#1099](https://github.com/synergy-design-system/synergy-design-system/pull/1099) [`fc1e550`](https://github.com/synergy-design-system/synergy-design-system/commit/fc1e550fb4aa28eabf0bef6b089993a1dd939ff2) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-04

  feat: ✨ add sick intl to fonts (#1085)

  Add an optimized variant of the `SICK Intl` font as a shared asset to the new `@synergy-design-system/fonts` package.
  It also adds the fonts package to the Synergy MCP server.

## 1.31.0

### Minor Changes

- [#1116](https://github.com/synergy-design-system/synergy-design-system/pull/1116) [`7c97c2e`](https://github.com/synergy-design-system/synergy-design-system/commit/7c97c2eed665902484eb07d7dc23534bf2064f08) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-12-03

  feat: ✨ `<syn-details>` summary is now always shown in bold. (#1114)

## 1.30.0

### Minor Changes

- [#1092](https://github.com/synergy-design-system/synergy-design-system/pull/1092) [`b82f1d9`](https://github.com/synergy-design-system/synergy-design-system/commit/b82f1d961aa4c2898f41b7c55eb3b7d43220878c) Thanks [@kirchsuSICKAG](https://github.com/kirchsuSICKAG)! - Released on: 2025-11-28

  feat: ✨ Brand update for `syn-file` (#953)

## 1.29.0

### Minor Changes

- [#1105](https://github.com/synergy-design-system/synergy-design-system/pull/1105) [`27adaae`](https://github.com/synergy-design-system/synergy-design-system/commit/27adaaeab60487ca4c92be8fd15b09eb4f09fdc6) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-11-28

  feat: ✨ add new error icon (#1101)

### Patch Changes

- Updated dependencies [[`27adaae`](https://github.com/synergy-design-system/synergy-design-system/commit/27adaaeab60487ca4c92be8fd15b09eb4f09fdc6)]:
  - @synergy-design-system/assets@1.25.0

## 1.28.0

### Minor Changes

- [#1082](https://github.com/synergy-design-system/synergy-design-system/pull/1082) [`e27f95b`](https://github.com/synergy-design-system/synergy-design-system/commit/e27f95ba3e5bd1f494db80ad51d0c1957b8d2204) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-11-27

  feat: ✨ Brand updates for `<syn-tab-group>`, `<syn-tab-panel>` and `<syn-tab>` (#969)

### Patch Changes

- Updated dependencies [[`e27f95b`](https://github.com/synergy-design-system/synergy-design-system/commit/e27f95ba3e5bd1f494db80ad51d0c1957b8d2204)]:
  - @synergy-design-system/assets@1.24.0

## 1.27.0

### Minor Changes

- Released on: 2025-11-27

  chore: ✨ Update MCP with latest metadata

## 1.26.0

### Minor Changes

- [#1074](https://github.com/synergy-design-system/synergy-design-system/pull/1074) [`ac24e63`](https://github.com/synergy-design-system/synergy-design-system/commit/ac24e6379862c7e60b5d5293614f0d804eeb7388) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-11-27

  feat: ✨ Brand updates for `<syn-menu>`, `<syn-menu-item>` and `<syn-menu-label>` (#958)

## 1.25.0

### Minor Changes

- [#1079](https://github.com/synergy-design-system/synergy-design-system/pull/1079) [`3f893f9`](https://github.com/synergy-design-system/synergy-design-system/commit/3f893f9d9d04cbfa3ae530bf8e3ecbcfe7be022f) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-11-25

  feat: ✨ create migration iconset (#1078)

  Added new utilities that help with migrating from 2018 to the new 2025 theme:

  `migrationLibrary`:

  A small migration library, aimed to be a drop in replacement for the default system icon library.
  Please have a look at [Synergies 2025 migration guide](https://synergy-design-system.github.io/?path=/docs/migration-to-synergy-3-0--docs) about how to use this.

  `migrateIconName` and `migrateIconNameFilled`:

  New low level utilities that helps mapping 2018 icons to the new 2025 icon library.
  This may be used if a custom icon library is in place.
  You should use `migrateIconName` in most cases as the default for Synergy are outlined icons.
  In cases where needed, you may also use `migrateIconNameFilled`, which will use the filled variant of Material Icons.

  `setupIcons`:

  High level feature that allows to toggle the default icon library, as well as the system icons via one command. You may use `setupIcons('sick2025');` to switch to the new icon set.

  > Note this only works if you have your icons setup according to the Synergy defaults.

  docs: 📚 Make sure to use correct icons on both 2018 and 2025 stories (#1024)

  Documentation now correctly toggles the icon sets, using the new `migrateIconName` underneath.

### Patch Changes

- Updated dependencies [[`3f893f9`](https://github.com/synergy-design-system/synergy-design-system/commit/3f893f9d9d04cbfa3ae530bf8e3ecbcfe7be022f)]:
  - @synergy-design-system/assets@1.23.0

## 1.24.0

### Minor Changes

- [#1086](https://github.com/synergy-design-system/synergy-design-system/pull/1086) [`515226c`](https://github.com/synergy-design-system/synergy-design-system/commit/515226c44f8bba7b2b4b80cdd0f21f3237f0670d) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-11-19

  feat: ✨ Brand updates for `<syn validate>` (#973)

### Patch Changes

- Updated dependencies [[`515226c`](https://github.com/synergy-design-system/synergy-design-system/commit/515226c44f8bba7b2b4b80cdd0f21f3237f0670d)]:
  - @synergy-design-system/assets@1.22.0

## 1.23.0

### Minor Changes

- [#1076](https://github.com/synergy-design-system/synergy-design-system/pull/1076) [`1392ed2`](https://github.com/synergy-design-system/synergy-design-system/commit/1392ed23aba2b628344356adba0a78e1e8beff84) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-11-18

  feat: ✨ Brand updates for `<syn-side-nav>`, `<syn-prio-nav>` and `<syn-nav-item>` (#967, #960)

## 1.22.0

### Minor Changes

- [#1063](https://github.com/synergy-design-system/synergy-design-system/pull/1063) [`6e616f5`](https://github.com/synergy-design-system/synergy-design-system/commit/6e616f51007ebde567eeb33190518159becc7c32) Thanks [@kirchsuSICKAG](https://github.com/kirchsuSICKAG)! - Released on: 2025-11-17

  feat: ✨ Brand update for syn-range and syn-range-tick (#966)

## 1.21.1

### Patch Changes

- [#1080](https://github.com/synergy-design-system/synergy-design-system/pull/1080) [`aab4c0e`](https://github.com/synergy-design-system/synergy-design-system/commit/aab4c0e23b075e4b3c98d5d14d754c718fd74546) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-11-10

  fix: 🐛 MCP: Exclude flaky stories from output (#1077)

## 1.21.0

### Minor Changes

- [#1072](https://github.com/synergy-design-system/synergy-design-system/pull/1072) [`81dae1e`](https://github.com/synergy-design-system/synergy-design-system/commit/81dae1e912bcbdefb4346b4a3bbc245f7fac9f12) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-11-07

  feat: ✨ Brand updates for `<syn-card>` (#942)

## 1.20.0

### Minor Changes

- [#1073](https://github.com/synergy-design-system/synergy-design-system/pull/1073) [`0ae632c`](https://github.com/synergy-design-system/synergy-design-system/commit/0ae632c5331f0583ba652add18755df01766cbf5) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-11-07

  feat: ✨ Brand updates for `<syn-dialog>` (#946)

  Also made sure to have smaller `blur` settings as the token has double the size in Figma.

## 1.19.0

### Minor Changes

- Released on: 2025-11-04

  chore: ✨ Update MCP with latest metadata

## 1.18.0

### Minor Changes

- [#1039](https://github.com/synergy-design-system/synergy-design-system/pull/1039) [`bc0bc63`](https://github.com/synergy-design-system/synergy-design-system/commit/bc0bc639a996fc75c57194244596d5733097389d) Thanks [@schilchSICKAG](https://github.com/schilchSICKAG)! - Released on: 2025-11-04

  feat: ✨ changesets migration (#928)

  This PR migrates Synergies ci/cd system from `semantic-release` to `changesets`.

### Patch Changes

- Updated dependencies [[`bc0bc63`](https://github.com/synergy-design-system/synergy-design-system/commit/bc0bc639a996fc75c57194244596d5733097389d)]:
  - @synergy-design-system/assets@1.21.0

## 1.17.2

(Released on: 2025-11-03)

### Patch Changes

- 🐛 Async delimiter change for pre-selected value in syn-select not displayed ([#1061](https://github.com/synergy-design-system/synergy-design-system/issues/1061)) ([5f6d361](https://github.com/synergy-design-system/synergy-design-system/commit/5f6d36102b669cc34aa44cded47ef49559e74529))

## 1.17.1

(Released on: 2025-11-03)

### Patch Changes

- 🐛 Show scrollbars for closed sticky variant of side-nav ([#1062](https://github.com/synergy-design-system/synergy-design-system/issues/1062)) ([926905b](https://github.com/synergy-design-system/synergy-design-system/commit/926905bd15c87948700e5f32382547b2a1c43821))

## 1.17.0

(Released on: 2025-11-03)

### Minor Changes

- ✨CD update for syn-alert ([#1064](https://github.com/synergy-design-system/synergy-design-system/issues/1064)) ([f9c0656](https://github.com/synergy-design-system/synergy-design-system/commit/f9c0656a268a71ea676ed0b937d8ca77cca2c924))

## 1.16.0

(Released on: 2025-10-29)

### Minor Changes

- ✨ CD update for syn-switch ([#1046](https://github.com/synergy-design-system/synergy-design-system/issues/1046)) ([088ce44](https://github.com/synergy-design-system/synergy-design-system/commit/088ce44da4e948099f10c66d29ca48dc6da3b5bb))

## 1.15.0

(Released on: 2025-10-28)

### Minor Changes

- ✨ CD update for syn-radio ([#1051](https://github.com/synergy-design-system/synergy-design-system/issues/1051)) ([b245f1f](https://github.com/synergy-design-system/synergy-design-system/commit/b245f1f90836a68594ecc8fdc026ecb8b3d284a9))

## 1.14.0

(Released on: 2025-10-27)

### Minor Changes

- ✨ CD update for syn-badge ([#1049](https://github.com/synergy-design-system/synergy-design-system/issues/1049)) ([894e541](https://github.com/synergy-design-system/synergy-design-system/commit/894e5416653a66f5ef81acaaee8b74a1adf7f3ab))

## 1.13.0

(Released on: 2025-10-23)

### Minor Changes

- ✨ CD update for syn-checkbox ([#1050](https://github.com/synergy-design-system/synergy-design-system/issues/1050)) ([1054c71](https://github.com/synergy-design-system/synergy-design-system/commit/1054c71415f36233ba1e242433806aac21d4d19b))

## 1.12.0

(Released on: 2025-10-23)

### Minor Changes

- ✨ CD update for syn-icon-button ([#1048](https://github.com/synergy-design-system/synergy-design-system/issues/1048)) ([d740a54](https://github.com/synergy-design-system/synergy-design-system/commit/d740a5495abd1b36bbe1c1c47fc69ca6a6480549))

## 1.11.0

(Released on: 2025-10-23)

### Minor Changes

- ✨ CD update for syn-breadcrumb ([#1045](https://github.com/synergy-design-system/synergy-design-system/issues/1045)) ([46383b2](https://github.com/synergy-design-system/synergy-design-system/commit/46383b2557d284328cfb49d476a052986cb47d75))

## 1.10.0

(Released on: 2025-10-22)

### Minor Changes

- ✨ CD update for syn-header ([#1047](https://github.com/synergy-design-system/synergy-design-system/issues/1047)) ([6841148](https://github.com/synergy-design-system/synergy-design-system/commit/684114811f939b91a13302cc85300fd1b9b1670e))

## 1.9.0

(Released on: 2025-10-20)

### Minor Changes

- ✨ CD update for syn-drawer ([#1043](https://github.com/synergy-design-system/synergy-design-system/issues/1043)) ([214b367](https://github.com/synergy-design-system/synergy-design-system/commit/214b367e8e603e264ec2718772087601f463439e))

## 1.8.2

(Released on: 2025-10-15)

### Patch Changes

- 🐛 Upgrade packages to latest versions - 10/25 ([#1035](https://github.com/synergy-design-system/synergy-design-system/issues/1035)) ([2fb5693](https://github.com/synergy-design-system/synergy-design-system/commit/2fb5693e536df706ea2c99a8ffc6e4d853442bbf))

## 1.8.1

(Released on: 2025-10-13)

### Patch Changes

- 🐛 Testing syn-popup in angular results in console errors ([#1042](https://github.com/synergy-design-system/synergy-design-system/issues/1042)) ([544e01a](https://github.com/synergy-design-system/synergy-design-system/commit/544e01a1227e4760c76d7a74238a224c7ca31a18))

## 1.8.0

(Released on: 2025-10-13)

### Minor Changes

- ✨ CD update for syn-progress-ring ([#1033](https://github.com/synergy-design-system/synergy-design-system/issues/1033)) ([ba51374](https://github.com/synergy-design-system/synergy-design-system/commit/ba51374977ad486c2a8020586718740e60da7f51))

## 1.7.1

(Released on: 2025-10-08)

### Patch Changes

- 🐛 Subsequently changed delimiter not taking into account for option value ([#1040](https://github.com/synergy-design-system/synergy-design-system/issues/1040)) ([fb45b32](https://github.com/synergy-design-system/synergy-design-system/commit/fb45b32c36d39046da754a294bff79d1a0ffeb42))

## 1.7.0

(Released on: 2025-10-02)

### Minor Changes

- ✨ CD update for syn-divider, syn-tag, syn-accordion, syn-details ([#1028](https://github.com/synergy-design-system/synergy-design-system/issues/1028)) ([b43a81a](https://github.com/synergy-design-system/synergy-design-system/commit/b43a81ab651da6b41668e481981ccbdcc1f07254))

## 1.6.2

(Released on: 2025-10-02)

### Patch Changes

- 🐛 Synergy does not work with Typescript 5.9.x ([#1027](https://github.com/synergy-design-system/synergy-design-system/issues/1027)) ([7f6921c](https://github.com/synergy-design-system/synergy-design-system/commit/7f6921cccb536a9a91e7d61b487fef2ad62dc831))

## 1.6.1

(Released on: 2025-09-30)

### Patch Changes

- 🐛 Synergy element which use syn-popup may break if used in a stacking context ([#1034](https://github.com/synergy-design-system/synergy-design-system/issues/1034)) ([8d23dc7](https://github.com/synergy-design-system/synergy-design-system/commit/8d23dc737e36065a0208bc01a98981541540d0ef))

## 1.6.0

(Released on: 2025-09-24)

### Minor Changes

- ✨ CD update for syn-tooltip ([#1025](https://github.com/synergy-design-system/synergy-design-system/issues/1025)) ([b02ec3d](https://github.com/synergy-design-system/synergy-design-system/commit/b02ec3d7d720a869975dcd19dd29f096b8fd2035))

## 1.5.0

(Released on: 2025-09-24)

### Minor Changes

- ✨ CD update for syn-progress-bar ([#1026](https://github.com/synergy-design-system/synergy-design-system/issues/1026)) ([7bb3a49](https://github.com/synergy-design-system/synergy-design-system/commit/7bb3a49dfec36d4b78180e1a6413bd0f68d80724))

## 1.4.0

(Released on: 2025-09-23)

### Minor Changes

- ✨ CD update for syn-spinner, syn-textarea, syn-link, syn-table ([#1010](https://github.com/synergy-design-system/synergy-design-system/issues/1010)) ([c472bab](https://github.com/synergy-design-system/synergy-design-system/commit/c472bab888e5fb9efd368456e1b8f60953970b63))

## 1.3.1

(Released on: 2025-08-28)

### Patch Changes

- 🐛 Add old token as fallback token for new SICK 2025 tokens ([#1006](https://github.com/synergy-design-system/synergy-design-system/issues/1006)) ([e5fff30](https://github.com/synergy-design-system/synergy-design-system/commit/e5fff3060b340ceae2707eefdd06b2f2b32b9224))

## 1.3.0

(Released on: 2025-08-28)

### Minor Changes

- ✨CD update for syn-input ([#1001](https://github.com/synergy-design-system/synergy-design-system/issues/1001)) ([52f42f8](https://github.com/synergy-design-system/synergy-design-system/commit/52f42f8d1f494c54492e54b6ddafc6693dcdb0bb))

## 1.2.1

(Released on: 2025-08-21)

### Patch Changes

- 🐛 Placeholder is clipped for syn-select multiple ([#992](https://github.com/synergy-design-system/synergy-design-system/issues/992)) ([973933e](https://github.com/synergy-design-system/synergy-design-system/commit/973933e477a2cba1611c2f73f77e4e79d755c8a1))

# Changelog

## 1.2.1

(Released on: 2025-08-21)

### Patch Changes

- 🐛 Placeholder is clipped for syn-select multiple ([#992](https://github.com/synergy-design-system/synergy-design-system/issues/992)) ([973933e](https://github.com/synergy-design-system/synergy-design-system/commit/973933e477a2cba1611c2f73f77e4e79d755c8a1))

## 1.2.0

(Released on: 2025-08-19)

### Minor Changes

- ✨ export new sick2025 themes ([#985](https://github.com/synergy-design-system/synergy-design-system/issues/985)) ([148730d](https://github.com/synergy-design-system/synergy-design-system/commit/148730d68037ea74dc241ca6627aa6a32af876ab))

## 1.1.0

(Released on: 2025-08-08)

### Minor Changes

- ✨ syn-icon: Provide a function to switch the icon set to brand2025 ([#974](https://github.com/synergy-design-system/synergy-design-system/issues/974)) ([1482e34](https://github.com/synergy-design-system/synergy-design-system/commit/1482e34f21ce80b9ad6f25e760f87de13d5f70db))

# @synergy-design-system/mcp-v1.0.0 (2025-08-07)

### Features

- ✨ MCP: Initial release ([#931](https://github.com/synergy-design-system/synergy-design-system/pull/931)) ([5f511ca](https://github.com/synergy-design-system/synergy-design-system/commit/5f511ca4305981f90e589a5f634e58d0e4e834ee))
