# @solid-design-system/styles

## 6.0.0-next.16

### Patch Changes

- - Add `kid-starter` theme. _[`#2663`](https://github.com/solid-design-system/solid/pull/2663) [`575bcf1`](https://github.com/solid-design-system/solid/commit/575bcf1ae1ce4bf0ee1773be5519ae07c5c8981a) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

## 6.0.0-next.15

### Patch Changes

- Internal: version bump to align with main (no user-facing changes). _[`#2656`](https://github.com/solid-design-system/solid/pull/2656) [`34dbd53`](https://github.com/solid-design-system/solid/commit/34dbd5304ad4bd6486068c40e307742841c25f4d) [@paulovareiro29](https://github.com/paulovareiro29)_

## 6.0.0-next.14

## 6.0.0-next.13

### Minor Changes

- Added more semantic tokens to the following components: _[`#2646`](https://github.com/solid-design-system/solid/pull/2646) [`24e0bff`](https://github.com/solid-design-system/solid/commit/24e0bffe2a91c5ddbd39cef6c7a3bb46df89f472) [@paulovareiro29](https://github.com/paulovareiro29)_
  - sd-accordion
  - sd-audio
  - sd-badge
  - sd-brandshape
  - sd-breadcrumb
  - sd-button
  - sd-carousel
  - sd-checkbox
  - sd-chip
  - sd-combobox
  - sd-container
  - sd-date-picker
  - sd-divider
  - sd-flag
  - sd-footnotes
  - sd-header
  - sd-input
  - sd-interactive
  - sd-loader
  - sd-map-marker
  - sd-menu-item
  - sd-navigation-item
  - sd-notification
  - sd-quick-fact
  - sd-radio
  - sd-radio-button
  - sd-radio-group
  - sd-range-tick
  - sd-select
  - sd-step
  - sd-switch
  - sd-tab
  - sd-tag
  - sd-teaser
  - sd-teaser-media
  - sd-textarea
  - sd-tooltip
  - sd-video

## 6.0.0-next.12

## 6.0.0-next.11

## 6.0.0-next.10

## 6.0.0-next.9

## 6.0.0-next.8

### Patch Changes

- Sync packages versions. _[`#2618`](https://github.com/solid-design-system/solid/pull/2618) [`c87b6ef`](https://github.com/solid-design-system/solid/commit/c87b6ef3c8db38b6add6cb87a712a50bc2068935) [@paulovareiro29](https://github.com/paulovareiro29)_

## 2.0.0-next.1

### Patch Changes

- Fixed styles build output to correctly resolve imports. _[`#2601`](https://github.com/solid-design-system/solid/pull/2601) [`be010da`](https://github.com/solid-design-system/solid/commit/be010daa4b1d5ed2e87b1910643bf01dae8071d7) [@paulovareiro29](https://github.com/paulovareiro29)_

## 2.0.0-next.0

### Major Changes

- Introduce multi-theming with new CSS variables _[`#2565`](https://github.com/solid-design-system/solid/pull/2565) [`602f0d3`](https://github.com/solid-design-system/solid/commit/602f0d38371c8f797662997071feb8173113e896) [@github-actions](https://github.com/apps/github-actions)_

## 1.5.6

### Patch Changes

- Replace counters() with counter() inside ordered lists: _[`#2623`](https://github.com/solid-design-system/solid/pull/2623) [`d5dd9c0`](https://github.com/solid-design-system/solid/commit/d5dd9c001ff94fa1841ae40633af04fdb29f3f4a) [@Vahid1919](https://github.com/Vahid1919)_
  - counter() is sufficient here since we are already incrementing each level's counter separately.
  - Fixes an issue where nested ordered lists would sometimes not display correct numbering in some browsers.

## 1.5.5

### Patch Changes

- - Update pnpm to 10.17 _[`#2522`](https://github.com/solid-design-system/solid/pull/2522) [`7cc6bb7`](https://github.com/solid-design-system/solid/commit/7cc6bb7bdfc9ccb26c2ecfa58b27021d15379312) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add minimumReleaseAge to 5 days
  - Update all actions to ensure that they're using the correct version

## 1.5.4

### Patch Changes

- Added support for `<a>` inside `sd-footnotes--marker`. _[`#2421`](https://github.com/solid-design-system/solid/pull/2421) [`515a2b1`](https://github.com/solid-design-system/solid/commit/515a2b1168af2cc7c91469942220f7e520637bb3) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.5.3

### Patch Changes

- Fixed small visual issues with `sd-pagination` using buttons. _[`#2376`](https://github.com/solid-design-system/solid/pull/2376) [`ef0096e`](https://github.com/solid-design-system/solid/commit/ef0096ea8f2118a41faca0c6055ad017af0fea4e) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.5.2

### Patch Changes

- Fixed `sd-interactive` disabled color to align with design. _[`#2361`](https://github.com/solid-design-system/solid/pull/2361) [`9e512b6`](https://github.com/solid-design-system/solid/commit/9e512b646d0959585d4d294658c880125cfeeafc) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.5.1

### Patch Changes

- Reset button default styles from `sd-pagination`. _[`#2363`](https://github.com/solid-design-system/solid/pull/2363) [`b5c9913`](https://github.com/solid-design-system/solid/commit/b5c9913d112b54498c0379ecb081ee1f1f5e82d0) [@smfonseca](https://github.com/smfonseca)_

## 1.5.0

### Minor Changes

- Extended `sd-pagination` style component to support the use of the `button` element. _[`#2352`](https://github.com/solid-design-system/solid/pull/2352) [`1e0338c`](https://github.com/solid-design-system/solid/commit/1e0338c1e125b0d5625d7411f81ca345c2161bd6) [@smfonseca](https://github.com/smfonseca)_
  - Included screenshot tests for new functionality.

## 1.4.1

### Patch Changes

- Fixed issue with package version to correctly publish package in NPM. _[`#2258`](https://github.com/solid-design-system/solid/pull/2258) [`afd4811`](https://github.com/solid-design-system/solid/commit/afd481190d771171b1872798e9d00cf0919ee80a) [@smfonseca](https://github.com/smfonseca)_

## 1.4.0

### Minor Changes

> **Note:** This version is currently unpublished on NPM and cannot be used. All changes introduced here, are available on version 1.4.1

- Adjusted `sd-interactive` transition duration values. _[`#2217`](https://github.com/solid-design-system/solid/pull/2217) [`ac48614`](https://github.com/solid-design-system/solid/commit/ac486145c19c83f646ad16a9dddde35a6e90a6eb) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.3.3

### Patch Changes

- Fix styles on `sd-pagination` arrow icons when using versioned `sd-icon` component. _[`#2251`](https://github.com/solid-design-system/solid/pull/2251) [`f086b08`](https://github.com/solid-design-system/solid/commit/f086b084171a2bb300f0607e93a334f6d843ec92) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.3.2

### Patch Changes

- Make `sd-list` accessible and make it behave closer to design _[`#2114`](https://github.com/solid-design-system/solid/pull/2114) [`8c51bc0`](https://github.com/solid-design-system/solid/commit/8c51bc031f403f6b73692c3ea1bc949c5bcf5b3a) [@mariohamann](https://github.com/mariohamann)_

## 1.3.1

### Patch Changes

- Fix `sd-copyright` default shadow. _[`#2025`](https://github.com/solid-design-system/solid/pull/2025) [`28525de`](https://github.com/solid-design-system/solid/commit/28525de175bca22592ade10cca8e6717c37b1080) [@smfonseca](https://github.com/smfonseca)_
  - Added missing variables that prevented the `filter` css effect from rendering the correct shadow.

## 1.3.0

### Minor Changes

- The `sd-pagination` has arrived! 🎉 _[`#1916`](https://github.com/solid-design-system/solid/pull/1916) [`8e97181`](https://github.com/solid-design-system/solid/commit/8e97181cbc913d47fbadc1997cfe75bcaa7a9245) [@paulovareiro29](https://github.com/paulovareiro29)_

  This style can be used to split large content into several pages.

## 1.2.0

### Minor Changes

- Implement bidirectional navigation between footnotes and references. _[`#1813`](https://github.com/solid-design-system/solid/pull/1813) [`a338a64`](https://github.com/solid-design-system/solid/commit/a338a643bd09aa2829bcb5671eb40db9b8c57832) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.1.0

### Minor Changes

- Add new `sd-status-badge` style component. _[`#1820`](https://github.com/solid-design-system/solid/pull/1820) [`617d02d`](https://github.com/solid-design-system/solid/commit/617d02d91e0eb3d27f9769e0e72fd76b985d6b33) [@smfonseca](https://github.com/smfonseca)_

  This component can be used with the following variants:
  - `sd-status-badge--success`
  - `sd-status-badge--warning`
  - `sd-status-badge--error`
  - `sd-status-badge--info`

  The icons used together with this style component should come exclusively from the `sd-status-assets` library.

## 1.0.1

### Patch Changes

- Update dependencies _[`#1787`](https://github.com/solid-design-system/solid/pull/1787) [`c70915b`](https://github.com/solid-design-system/solid/commit/c70915be2135d93f17e9150ea6fcef95f90dd081) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.0.0

### Major Changes

- Init styles package _[`#1785`](https://github.com/solid-design-system/solid/pull/1785) [`6b9a71e`](https://github.com/solid-design-system/solid/commit/6b9a71e690ad75f492b371411b3583b8aebeab65) [@mariohamann](https://github.com/mariohamann)_

### Patch Changes

- This version is exactly the same as `1.0.0-next.0`, but this bump was required to be able to correctly publish the package into npm registry. _[`#1750`](https://github.com/solid-design-system/solid/pull/1750) [`c6ab1b4`](https://github.com/solid-design-system/solid/commit/c6ab1b406ef1e9478326930c9195c50c10679e31) [@smfonseca](https://github.com/smfonseca)_

## 1.0.0-next.1

### Patch Changes

- This version is exactly the same as `1.0.0-next.0`, but this bump was required to be able to correctly publish the package into npm registry. _[`#1750`](https://github.com/solid-design-system/solid/pull/1750) [`c6ab1b4`](https://github.com/solid-design-system/solid/commit/c6ab1b406ef1e9478326930c9195c50c10679e31) [@smfonseca](https://github.com/smfonseca)_

## 1.0.0-next.0

### Major Changes

- Init styles package _[`6b9a71e`](https://github.com/solid-design-system/solid/commit/6b9a71e690ad75f492b371411b3583b8aebeab65) [@mariohamann](https://github.com/mariohamann)_
