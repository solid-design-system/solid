# @solid-design-system/components

## 5.15.11

### Patch Changes

- Improvements done on the `sd-select`: _[`#2533`](https://github.com/solid-design-system/solid/pull/2533) [`45ac618`](https://github.com/solid-design-system/solid/commit/45ac6183c5c88315788894069d93bec1ff0c8ba9) [@smfonseca](https://github.com/smfonseca)_
  - Prevent input wrapper elements from overflowing.
  - Better handling of option highlight when `multiple` or `useTags` is enabled. If no option is selected, the first is highlighted, otherwise, the first selected option is highlighted instead.

## 5.15.10

### Patch Changes

- Adjusted `sd-breadcrumb` font-size to `14px` instead of `16px`. _[`#2534`](https://github.com/solid-design-system/solid/pull/2534) [`1ebd640`](https://github.com/solid-design-system/solid/commit/1ebd6403350b07cbfb8d604732191db7ce880924) [@smfonseca](https://github.com/smfonseca)_

## 5.15.9

### Patch Changes

- Fixed `sd-radio-button` style when in `checked` and `disabled` state. _[`#2537`](https://github.com/solid-design-system/solid/pull/2537) [`9776ac9`](https://github.com/solid-design-system/solid/commit/9776ac999d176b394477de505b48deb63d3817f3) [@smfonseca](https://github.com/smfonseca)_

## 5.15.8

### Patch Changes

- - Update pnpm to 10.17 _[`#2522`](https://github.com/solid-design-system/solid/pull/2522) [`7cc6bb7`](https://github.com/solid-design-system/solid/commit/7cc6bb7bdfc9ccb26c2ecfa58b27021d15379312) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add minimumReleaseAge to 5 days
  - Update all actions to ensure that they're using the correct version

## 5.15.7

### Patch Changes

- Update `status-check` icon of the `_internal` icon library and change icon usage in `sd-textarea`, `sd-select`, `sd-combobox`, and `sd-input`. _[`#2473`](https://github.com/solid-design-system/solid/pull/2473) [`ae722bc`](https://github.com/solid-design-system/solid/commit/ae722bc836753279dc92e77d1a547993314b9790) [@demirgazetic](https://github.com/demirgazetic)_

## 5.15.6

### Patch Changes

- Fixed issue with `sd-carousel` initialisation where attributes are only added once all slides are ready. _[`#2475`](https://github.com/solid-design-system/solid/pull/2475) [`31c2b2a`](https://github.com/solid-design-system/solid/commit/31c2b2a2e46cc1c00f189e1c55cc7f4ea2b602e7) [@smfonseca](https://github.com/smfonseca)_

## 5.15.5

### Patch Changes

- Minor improvement to the `sd-step` horizontal inline variant: _[`#2469`](https://github.com/solid-design-system/solid/pull/2469) [`bec1056`](https://github.com/solid-design-system/solid/commit/bec105630e7caf449ad2e0cb7d4d681db2c4193d) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Remove the extra width from the last `sd-step`.

### 📈 Stats

- Uncompressed: 479 KB (+1 KB / +0%)
- Gzipped: 113 KB (+1 KB / +1%)

## 5.15.4

### Patch Changes

- Improve sd-dialog: _[`#2466`](https://github.com/solid-design-system/solid/pull/2466) [`3bac0bc`](https://github.com/solid-design-system/solid/commit/3bac0bc304e9ed8929fcb0a80791cd9663db6ef0) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Prevent unexpected scrolling behaviour.

### 📈 Stats

- Uncompressed: 478 KB (-1 KB / 0%)
- Gzipped: 112 KB (-1 KB / -1%)

## 5.15.3

### Patch Changes

- Added missing tailwind variable `--tw-content` to components. _[`#2465`](https://github.com/solid-design-system/solid/pull/2465) [`1b970bc`](https://github.com/solid-design-system/solid/commit/1b970bc9fd42ae6649468a89552df9f39653246c) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.15.2

### Patch Changes

- Fixed `sd-checkbox` animation to correctly display the `indeterminate` state icon. _[`#2455`](https://github.com/solid-design-system/solid/pull/2455) [`cf0f7e2`](https://github.com/solid-design-system/solid/commit/cf0f7e2e09c10f1b64d048b0ffe9912ef7a14beb) [@smfonseca](https://github.com/smfonseca)_

## 5.15.1

### Patch Changes

- Fixed an issue on `sd-navigation-item` where it was not properly finding the `part="base"` when it had slotted children. _[`#2454`](https://github.com/solid-design-system/solid/pull/2454) [`038a16a`](https://github.com/solid-design-system/solid/commit/038a16ada52e11bd92f7a621947104c96e71bd54) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.15.0

### Minor Changes

- Increased `sd-drawer` close button `z-index` when using attribute `no-header` to prevent it being overlapped by the content. _[`#2318`](https://github.com/solid-design-system/solid/pull/2318) [`11300b4`](https://github.com/solid-design-system/solid/commit/11300b42a379e8f13ac4316b8824126c61891281) [@paulovareiro29](https://github.com/paulovareiro29)_

  Exported new CSS part on `sd-dropdown` named `base__popup`, which targets the internal `sd-popup` `popup` part.

  Implemented `focus` and `blur` methods on `sd-navigation-item`.

  Improved `sd-navigation-item` accessibility by separating the content and description into `aria-labelledby` and `aria-describedby` respectively.

### 📈 Stats

- Uncompressed: 479 KB (unchanged)
- Gzipped: 113 KB (+1 KB / +1%)

## 5.14.0

### Minor Changes

- Implemented `waiting` attribute and `horizontal-inline` variant on `sd-step` _[`#2364`](https://github.com/solid-design-system/solid/pull/2364) [`b6d6768`](https://github.com/solid-design-system/solid/commit/b6d6768f99dffceb06356a519e9d74ee5490e5aa) [@balco0110](https://github.com/balco0110)_

### 📈 Stats

- Uncompressed: 479 KB (+2 KB / +0%)
- Gzipped: 112 KB (unchanged)

## 5.13.15

### Patch Changes

- Fixed `sd-navigation-item` padding when it is icon only. _[`#2380`](https://github.com/solid-design-system/solid/pull/2380) [`d1f3fb7`](https://github.com/solid-design-system/solid/commit/d1f3fb7ef5c47e7978e3e20f78cb11b4bbdf0f09) [@balco0110](https://github.com/balco0110)_

## 5.13.14

### Patch Changes

- Fixed `numOptionsSelected` translation letter casing used on the `sd-select`. _[`#2403`](https://github.com/solid-design-system/solid/pull/2403) [`364eafa`](https://github.com/solid-design-system/solid/commit/364eafad92827a95ed1522741c990a1a1fdeaced) [@paulovareiro29](https://github.com/paulovareiro29)_

  Adjusted the `help-text` top margin on:
  - `sd-combobox`
  - `sd-input`
  - `sd-range`
  - `sd-select`
  - `sd-textarea`

## 5.13.13

### Patch Changes

- Disallowed attribute `removable` when `sd-tag` has a href. _[`#2402`](https://github.com/solid-design-system/solid/pull/2402) [`593a7ca`](https://github.com/solid-design-system/solid/commit/593a7ca9323d08bc690dee938d56428a6f93b8eb) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.13.12

### Patch Changes

- Improved `title` attribute documentation on multiple form components. _[`#2393`](https://github.com/solid-design-system/solid/pull/2393) [`97fb154`](https://github.com/solid-design-system/solid/commit/97fb1545fda26c8584250ce0650b9f0c04136874) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.13.11

### Patch Changes

- Improved the `sd-audio` by: _[`#2371`](https://github.com/solid-design-system/solid/pull/2371) [`1b472bd`](https://github.com/solid-design-system/solid/commit/1b472bd3fd4a42134b7f0ebc018826a6a18e5ef6) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Replacing the seekbar slider by the new `sd-range` component.
  - Implementing visual updates to match figma.
  - Fixing an issue where dragging the slider was not updating the audio current time.

  Adjusted `sd-range` colors to correctly match figma.

  Added a new translation named `seconds`.

## 5.13.10

### Patch Changes

- Improved `sd-select` by making the display label reactive to localization changes. _[`#2390`](https://github.com/solid-design-system/solid/pull/2390) [`f63ec88`](https://github.com/solid-design-system/solid/commit/f63ec884a5b0613a24c19dfd2257a513cf595619) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 477 KB (-1 KB / 0%)
- Gzipped: 112 KB (unchanged)

## 5.13.9

### Patch Changes

- Fixed an issue on `sd-select` where the popup would shift when there was a horizontal scroll. _[`#2391`](https://github.com/solid-design-system/solid/pull/2391) [`610cb8c`](https://github.com/solid-design-system/solid/commit/610cb8cd86c7ace0afd19dca0ddf1e487603128e) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.13.8

### Patch Changes

- Added support for multiline text on `sd-button`. _[`#2362`](https://github.com/solid-design-system/solid/pull/2362) [`b5d9a60`](https://github.com/solid-design-system/solid/commit/b5d9a60c50a97193b57f4208e6d23af31c556f5d) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 478 KB (+1 KB / +0%)
- Gzipped: 112 KB (unchanged)

## 5.13.7

### Patch Changes

- Added missing accessible name on the `sd-radio-button` component. _[`#2387`](https://github.com/solid-design-system/solid/pull/2387) [`9882a5b`](https://github.com/solid-design-system/solid/commit/9882a5b4d96b8b5711ce038d76c53c92987ba0e9) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.13.6

### Patch Changes

- Implemented automatic disabling of `sd-tab-group` navigation buttons when scroll reaches the edges. _[`#2379`](https://github.com/solid-design-system/solid/pull/2379) [`f43230e`](https://github.com/solid-design-system/solid/commit/f43230e238d79e043d5194c66ae37edc94120e84) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.13.5

### Patch Changes

- Adjusted inverted `sd-expandable` to fit to the theming when overriding `--gradient-color-start` and `--gradient-color-end`. _[`#2383`](https://github.com/solid-design-system/solid/pull/2383) [`1644c11`](https://github.com/solid-design-system/solid/commit/1644c11f86512597a007387dad30face81ac0288) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 477 KB (+1 KB / +0%)
- Gzipped: 112 KB (unchanged)

## 5.13.4

### Patch Changes

- Updated `lit` directive import to fix issue with creation of empty chunks during the build process. _[`#2382`](https://github.com/solid-design-system/solid/pull/2382) [`cdcf427`](https://github.com/solid-design-system/solid/commit/cdcf427e6a03fc95f4e1c07684fd9501a4d4bb78) [@smfonseca](https://github.com/smfonseca)_

## 5.13.3

### Patch Changes

- Fixed an a11y issue in `sd-carousel` where cloned slides where incorrectly included in the total slide count. _[`#2375`](https://github.com/solid-design-system/solid/pull/2375) [`64453ef`](https://github.com/solid-design-system/solid/commit/64453efaf4649e22405163b0518c9df1faa75908) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.13.2

### Patch Changes

- Fixed `sd-drawer` close button position when `dir="rtl"` is set. _[`#2359`](https://github.com/solid-design-system/solid/pull/2359) [`8cfdf70`](https://github.com/solid-design-system/solid/commit/8cfdf70f4644744f18f469a3091931d2876fe8ed) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 475 KB (-1 KB / 0%)
- Gzipped: 112 KB (unchanged)

### 📈 Stats

- Uncompressed: 476 KB (+1 KB / +0%)
- Gzipped: 112 KB (unchanged)

## 5.13.1

### Patch Changes

- - Add motion design to sd-tab _[`#2256`](https://github.com/solid-design-system/solid/pull/2256) [`6f9d3fa`](https://github.com/solid-design-system/solid/commit/6f9d3fa42e95fbe3a13dcf89c499294facb25052) [@smfonseca](https://github.com/smfonseca)_

### 📈 Stats

- Uncompressed: 476 KB (+3 KB / +1%)
- Gzipped: 112 KB (+1 KB / +1%)

## 5.13.0

### Minor Changes

- Introduced new `sd-radio-button` pill shape styling. The `sd-radio-group` when containing `sd-radio-button` inside was also updated to enable the new style. _[`#2344`](https://github.com/solid-design-system/solid/pull/2344) [`496be2c`](https://github.com/solid-design-system/solid/commit/496be2cc87c25a9aa68bc4cd1966da8c5c2cd834) [@smfonseca](https://github.com/smfonseca)_

## 5.12.2

### Patch Changes

- Fixed `sd-option` checkbox fill color _[`#2345`](https://github.com/solid-design-system/solid/pull/2345) [`36470d0`](https://github.com/solid-design-system/solid/commit/36470d055af15256add3fa5589e974d7036bb62f) [@balco0110](https://github.com/balco0110)_

## 5.12.1

### Patch Changes

- Fixed the following issues in the `sd-tab-group` component: _[`#2350`](https://github.com/solid-design-system/solid/pull/2350) [`5ef9005`](https://github.com/solid-design-system/solid/commit/5ef90053097b1c4b940037e1f79a17b3680fcca4) [@smfonseca](https://github.com/smfonseca)_
  - `sd-tab-panel` focus was always visible even when tabbing into other child elements. Now it will move the focus to the correct elements.
  - `sd-tab-group` logic to scroll into view the next and previous tab was breaking when on the first or last tab element. Added another validation to prevent it.

## 5.12.0

### Minor Changes

- The `sd-loader` has arrived! 🎉 _[`#2324`](https://github.com/solid-design-system/solid/pull/2324) [`48c1a2e`](https://github.com/solid-design-system/solid/commit/48c1a2e91b9ba1eca1383b92725c7d0c3dfcae67) [@smfonseca](https://github.com/smfonseca)_

  It is a visual indicator that shows loading is in process.
  - This component will replace the `sd-spinner` which will be **deprecated** in the near future.

### 📈 Stats

- Uncompressed: 473 KB (+1 KB / +0%)
- Gzipped: 111 KB (unchanged)

## 5.11.0

### Minor Changes

- The `sd-range` and `sd-range-tick` have arrived! 🎉 _[`#2306`](https://github.com/solid-design-system/solid/pull/2306) [`6aba9bd`](https://github.com/solid-design-system/solid/commit/6aba9bd348b999fa6677de99488df234bc119de2) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Used to allow users to select a single or multiple values within a defined range using a slider.

### 📈 Stats

- Uncompressed: 472 KB (+13 KB / +3%)
- Gzipped: 111 KB (+3 KB / +3%)

## 5.10.1

### Patch Changes

- Fixed render content for `tooltip` with bolded text template _[`#2327`](https://github.com/solid-design-system/solid/pull/2327) [`1dfe777`](https://github.com/solid-design-system/solid/commit/1dfe777224c5f139065a809c426aefc81da43d92) [@balco0110](https://github.com/balco0110)_

## 5.10.0

### Minor Changes

- - Add tooltip slot to `sd-switch`; _[`#2319`](https://github.com/solid-design-system/solid/pull/2319) [`5d20c51`](https://github.com/solid-design-system/solid/commit/5d20c51b9e0b15be47cfd60e24bb179cef42bf27) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

## 5.9.0

### Minor Changes

- The `sd-menu` and `sd-menu-item` have arrived. 🎉 _[`#2297`](https://github.com/solid-design-system/solid/pull/2297) [`b2485fe`](https://github.com/solid-design-system/solid/commit/b2485fe1fcf7ee7897fd4e9d2fc48db06fe7c390) [@smfonseca](https://github.com/smfonseca)_

  It can be used as a list of choices to the user, such as a set of actions or functions.

### 📈 Stats

- Uncompressed: 459 KB (+14 KB / +3%)
- Gzipped: 108 KB (+4 KB / +4%)

## 5.8.4

### Patch Changes

- Updated internal `transcript` svg icon to the latest version. _[`#2316`](https://github.com/solid-design-system/solid/pull/2316) [`4c56920`](https://github.com/solid-design-system/solid/commit/4c56920a1ed10f5e0e675a47f6ec5b990ddba622) [@smfonseca](https://github.com/smfonseca)_

### 📈 Stats

- Uncompressed: 445 KB (+1 KB / +0%)
- Gzipped: 104 KB (unchanged)

## 5.8.3

### Patch Changes

- Implemented the style for invalid sample in `sd-switch` according to Figma _[`#2315`](https://github.com/solid-design-system/solid/pull/2315) [`1923e35`](https://github.com/solid-design-system/solid/commit/1923e3506841930afc1281f837185fb7b41424d4) [@balco0110](https://github.com/balco0110)_

## 5.8.2

### Patch Changes

- Fixed `sd-radio-group` label layout to ensure spacing between label and required asterix _[`#2273`](https://github.com/solid-design-system/solid/pull/2273) [`6701124`](https://github.com/solid-design-system/solid/commit/6701124ce70e65968802b795e5d616219d772fb0) [@balco0110](https://github.com/balco0110)_

## 5.8.1

### Patch Changes

- Fixed `sd-header` padding-bottom being overritten by style resets. _[`#2307`](https://github.com/solid-design-system/solid/pull/2307) [`2146817`](https://github.com/solid-design-system/solid/commit/2146817fe16da79d84a96a34574911b08ee4016e) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.8.0

### Minor Changes

- The `sd-breadcrumb` and `sd-breadcrumb-item` have arrived! 🎉 _[`#2288`](https://github.com/solid-design-system/solid/pull/2288) [`9a224c7`](https://github.com/solid-design-system/solid/commit/9a224c77ce047c8966ee6f3c7be54cbf7c161020) [@paulovareiro29](https://github.com/paulovareiro29)_
  - It can be used to visualize a page's location within the site's hierarchy and provide easy navigation to previous sections.

### 📈 Stats

- Uncompressed: 444 KB (+6 KB / +1%)
- Gzipped: 104 KB (+1 KB / +1%)

## 5.7.0

### Minor Changes

- - Implement `reversed-layout` attribute for the `sd-teaser`. _[`#2283`](https://github.com/solid-design-system/solid/pull/2283) [`e65a94a`](https://github.com/solid-design-system/solid/commit/e65a94a7120525d73c40f58ad565911a81cff97b) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

## 5.6.0

### Minor Changes

- Added new fade effect transition to the `sd-carousel`. When the `fade` attribute is set, the carousel will use the fade transition for a smooth effect. If the attribute is not applied, the default slide transition will remain in use. _[`#2270`](https://github.com/solid-design-system/solid/pull/2270) [`99ed5c1`](https://github.com/solid-design-system/solid/commit/99ed5c12c34dfa15fb80c15e65b0751a473acd9e) [@smfonseca](https://github.com/smfonseca)_

### 📈 Stats

- Uncompressed: 438 KB (+4 KB / +1%)
- Gzipped: 103 KB (+1 KB / +1%)

## 5.5.0

### Minor Changes

- Implemented `sd-notification` motion design. _[`#2265`](https://github.com/solid-design-system/solid/pull/2265) [`96df171`](https://github.com/solid-design-system/solid/commit/96df171ff9d85b3c4a6c872833161ea8044e23b1) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 434 KB (+1 KB / +0%)
- Gzipped: 102 KB (unchanged)

## 5.4.4

### Patch Changes

- Fixed `sd-drawer` show animation flickering when positioned to the end. _[`#2274`](https://github.com/solid-design-system/solid/pull/2274) [`f0dfe79`](https://github.com/solid-design-system/solid/commit/f0dfe791b444d7f8c7759edceffe922cea70f138) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.4.3

### Patch Changes

- Fixed problem with token processor which was returning the unprocessed value. _[`#2277`](https://github.com/solid-design-system/solid/pull/2277) [`de325b7`](https://github.com/solid-design-system/solid/commit/de325b7d29bfcc1cddcac5915370dffa4211eeb3) [@paulovareiro29](https://github.com/paulovareiro29)_
- Adjusted `sd-map-marker` motion design angle. _[`#2271`](https://github.com/solid-design-system/solid/pull/2271) [`896a632`](https://github.com/solid-design-system/solid/commit/896a63235232c3d7c23999f7d0305c2b1bcd474d) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.4.2

### Patch Changes

- Added motion design to `sd-radio`. _[`#2261`](https://github.com/solid-design-system/solid/pull/2261) [`c71a58c`](https://github.com/solid-design-system/solid/commit/c71a58c7490a2f9ad2bc04fee0fb6c9c67bdd7a5) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

### 📈 Stats

- Uncompressed: 433 KB (unchanged)
- Gzipped: 102 KB (+1 KB / +1%)

## 5.4.1

### Patch Changes

- Implemented z-index on `sd-header` component to prevent other components overlapping it. _[`#2275`](https://github.com/solid-design-system/solid/pull/2275) [`03ba826`](https://github.com/solid-design-system/solid/commit/03ba82696bc01c764d3f210db3d71720a4b232a0) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.4.0

### Minor Changes

- Implemented `sd-checkbox` motion design. _[`#2262`](https://github.com/solid-design-system/solid/pull/2262) [`58f1c1f`](https://github.com/solid-design-system/solid/commit/58f1c1fdb9db018b458232f10c6236e94e608526) [@balco0110](https://github.com/balco0110)_

### 📈 Stats

- Uncompressed: 433 KB (+1 KB / +0%)
- Gzipped: 101 KB (unchanged)

## 5.3.0

### Minor Changes

- Implemented `sd-accordion` motion design. _[`#2257`](https://github.com/solid-design-system/solid/pull/2257) [`cfefc0b`](https://github.com/solid-design-system/solid/commit/cfefc0ba18924eca18b281f6b3bbc6c66cd754dc) [@balco0110](https://github.com/balco0110)_

### Patch Changes

- Aligned the icons in the `sd-navigation-item` _[`#2210`](https://github.com/solid-design-system/solid/pull/2210) [`d8bc555`](https://github.com/solid-design-system/solid/commit/d8bc555c8d8e361802ce0d4d97f976b761518a87) [@balco0110](https://github.com/balco0110)_

## 5.2.2

### Patch Changes

- Adjusted `sd-quickfact` motion design values. _[`#2255`](https://github.com/solid-design-system/solid/pull/2255) [`c73c76c`](https://github.com/solid-design-system/solid/commit/c73c76cabed3374db1d1766d4cf1e7b3fd4195b7) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 432 KB (+1 KB / +0%)
- Gzipped: 101 KB (unchanged)

## 5.2.1

### Patch Changes

- Fixed components imports (eg. `sd-drawer`, `sd-popup`) _[`#2202`](https://github.com/solid-design-system/solid/pull/2202) [`003a058`](https://github.com/solid-design-system/solid/commit/003a0581708cc927d3d9259d81ae7089af13bd72) [@mariohamann](https://github.com/mariohamann)_

### 📈 Stats

- Uncompressed: 431 KB (-1 KB / 0%)
- Gzipped: 101 KB (unchanged)

## 5.2.0

### Minor Changes

- Implemented `sd-scrollable` motion design. _[`#2254`](https://github.com/solid-design-system/solid/pull/2254) [`91d1c32`](https://github.com/solid-design-system/solid/commit/91d1c32f31ca2d96171933879fb7e2595bacf9b5) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 432 KB (+1 KB / +0%)
- Gzipped: 101 KB (unchanged)

## 5.1.0

### Minor Changes

- Implemented `sd-map-marker` motion design. _[`#2253`](https://github.com/solid-design-system/solid/pull/2253) [`f079703`](https://github.com/solid-design-system/solid/commit/f07970394af4857b3dc26c737759831cf9f6676c) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 431 KB (+1 KB / +0%)
- Gzipped: 101 KB (unchanged)

## 5.0.1

### Patch Changes

- Adjusted `sd-tooltip` motion design values. _[`#2260`](https://github.com/solid-design-system/solid/pull/2260) [`f745474`](https://github.com/solid-design-system/solid/commit/f745474c86bc6a23fa5455d97efeddc4010ec763) [@paulovareiro29](https://github.com/paulovareiro29)_

## 5.0.0

### Major Changes

- Renamed internal icons to `_internal` instead of `system`. _[`#2217`](https://github.com/solid-design-system/solid/pull/2217) [`ac48614`](https://github.com/solid-design-system/solid/commit/ac486145c19c83f646ad16a9dddde35a6e90a6eb) [@paulovareiro29](https://github.com/paulovareiro29)_
- Fixed `sd-scrollable` `start` and `end` events. _[`#2217`](https://github.com/solid-design-system/solid/pull/2217) [`ac48614`](https://github.com/solid-design-system/solid/commit/ac486145c19c83f646ad16a9dddde35a6e90a6eb) [@paulovareiro29](https://github.com/paulovareiro29)_
  - (before): `start` event was emitted when there was available scrolling space in the `start` direction ---> (after): `start` event is emitted when the `start` is reached.
  - (before): `end` event was emitted when there was available scrolling space in the `end` direction ---> (after): `end` event is emitted when the `end` is reached.

- Separated the icon and text slots from the `toggle` button on the `sd-expandable` component. _[`#2217`](https://github.com/solid-design-system/solid/pull/2217) [`ac48614`](https://github.com/solid-design-system/solid/commit/ac486145c19c83f646ad16a9dddde35a6e90a6eb) [@paulovareiro29](https://github.com/paulovareiro29)_

  Implemented `sd-expandable` motion design.

- Removed `role="status"` from `sd-badge` to provide more a11y flexibility. _[`#2217`](https://github.com/solid-design-system/solid/pull/2217) [`ac48614`](https://github.com/solid-design-system/solid/commit/ac486145c19c83f646ad16a9dddde35a6e90a6eb) [@paulovareiro29](https://github.com/paulovareiro29)_
- Improved `sd-header` component: _[`#2217`](https://github.com/solid-design-system/solid/pull/2217) [`ac48614`](https://github.com/solid-design-system/solid/commit/ac486145c19c83f646ad16a9dddde35a6e90a6eb) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Improved `--sd-header-calculated-height` property calculation.
  - Added padding to the `sd-header` element when it has the `fixed` attribute, to prevent the following siblings from being overlapped by the header.
  - Improved accessibility by removing the `position: fixed` at a certain minimum viewport height, to ensure it doesn't cover much of the screen.

### 📈 Stats

- Uncompressed: 430 KB (+1 KB / +0%)
- Gzipped: 101 KB (+1 KB / +1%)

## 4.12.0

### Minor Changes

- Add `sd-textarea` motion design and fix validation icons style. _[`#2223`](https://github.com/solid-design-system/solid/pull/2223) [`c5a5cff`](https://github.com/solid-design-system/solid/commit/c5a5cff81e88fffd8c9cdfe787007c2e3628c60b) [@smfonseca](https://github.com/smfonseca)_

## 4.11.0

### Minor Changes

- Add `sd-switch` motion design and fix border hover style. _[`#2222`](https://github.com/solid-design-system/solid/pull/2222) [`67a6886`](https://github.com/solid-design-system/solid/commit/67a6886cafc1a345fcd1158d6b13b6726003ef9e) [@smfonseca](https://github.com/smfonseca)_

### 📈 Stats

- Uncompressed: 429 KB (+1 KB / +0%)
- Gzipped: 100 KB (unchanged)

## 4.10.0

### Minor Changes

- Add motion design to `sd-drawer`. _[`#2245`](https://github.com/solid-design-system/solid/pull/2245) [`992fc38`](https://github.com/solid-design-system/solid/commit/992fc385bb3d0a467a7f7832fcf3b3f5ac1704b1) [@balco0110](https://github.com/balco0110)_

## 4.9.0

### Minor Changes

- Implemented `sd-video` motion design. _[`#2221`](https://github.com/solid-design-system/solid/pull/2221) [`64b0678`](https://github.com/solid-design-system/solid/commit/64b06782fab8349959fb479dead41fdb7cf8ce14) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.8.2

### Patch Changes

- Update `sd-select` and `sd-combobox` animations. _[`#2224`](https://github.com/solid-design-system/solid/pull/2224) [`039ab9a`](https://github.com/solid-design-system/solid/commit/039ab9a6a9e3dc3cfdf16d67353f92fc18c25db2) [@smfonseca](https://github.com/smfonseca)_

## 4.8.1

### Patch Changes

- Fix `sd-button` slot `icon-left` alignment on full width buttons. _[`#2244`](https://github.com/solid-design-system/solid/pull/2244) [`643ae18`](https://github.com/solid-design-system/solid/commit/643ae187c6772e3721140ad4cebb8d8e96855540) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.8.0

### Minor Changes

- Added motion design to `sd-input`. _[`#2227`](https://github.com/solid-design-system/solid/pull/2227) [`b98f363`](https://github.com/solid-design-system/solid/commit/b98f363041f200dc9f9d280932179052ef0b1d49) [@balco0110](https://github.com/balco0110)_

### 📈 Stats

- Uncompressed: 428 KB (+1 KB / +0%)
- Gzipped: 100 KB (unchanged)

## 4.7.2

### Patch Changes

- Fixed `sd-button` z-index. _[`#2234`](https://github.com/solid-design-system/solid/pull/2234) [`4f27be7`](https://github.com/solid-design-system/solid/commit/4f27be79ee38a98a07e5f141ac926ff01a392713) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.7.1

### Patch Changes

- Fixed `sd-button` motion design on sd-audio. _[`#2230`](https://github.com/solid-design-system/solid/pull/2230) [`283d350`](https://github.com/solid-design-system/solid/commit/283d350e49bdd673be0d0a3b4e650a07386468c9) [@paulovareiro29](https://github.com/paulovareiro29)_

  Implemented new part `motion-wrapper` to `sd-button`.

## 4.7.0

### Minor Changes

- Implement internal function to retrieve token values from CSS. _[`#1901`](https://github.com/solid-design-system/solid/pull/1901) [`05854b6`](https://github.com/solid-design-system/solid/commit/05854b6ca0e0594a26a5d3f70b15baa1cd3b4033) [@MartaPintoTeixeira](https://github.com/MartaPintoTeixeira)_

  Implemented `sd-dialog` motion design.

  Implemented `sd-button` motion design.

  Implemented `sd-navigation-item` motion design.

  Implemented `sd-option` motion design.

  Implemented `sd-combobox` motion design.

  Implemented `sd-dropdown` motion design.

  Implemented `sd-select` motion design.

  Implemented `sd-carousel` motion design on the dots and arrows.

  Implemented `sd-tag` motion design:
  - Implement new `hide` method to visually hide the `sd-tag`.
  - Implement new `sd-hide` and `sd-after-hide` events, which are triggered by the `hide` method.

### 📈 Stats

- Uncompressed: 427 KB (+6 KB / +1%)
- Gzipped: 100 KB (+1 KB / +1%)

## 4.6.18

### Patch Changes

- Updated the color of the clearable icon in sd-select, sd-input, sd-combobox _[`#2216`](https://github.com/solid-design-system/solid/pull/2216) [`5f507c3`](https://github.com/solid-design-system/solid/commit/5f507c367d25fc0f2bc830e3d0d964dd1740b1fd) [@balco0110](https://github.com/balco0110)_

## 4.6.17

### Patch Changes

- Fixed text getting cut-off by valid/invalid icon on `sd-textarea`. _[`#2159`](https://github.com/solid-design-system/solid/pull/2159) [`fbf93a5`](https://github.com/solid-design-system/solid/commit/fbf93a5c0a535ee598c23aa8670923ccddcae623) [@paulovareiro29](https://github.com/paulovareiro29)_

### 📈 Stats

- Uncompressed: 421 KB (-1 KB / 0%)
- Gzipped: 99 KB (unchanged)

## 4.6.16

### Patch Changes

- Add focus state to elements with the `visually-disabled` attribute for improved accessibility. _[`#2157`](https://github.com/solid-design-system/solid/pull/2157) [`5c20e76`](https://github.com/solid-design-system/solid/commit/5c20e76b6910a97a2cd83710b8f3614e16622897) [@smfonseca](https://github.com/smfonseca)_

  Update cursor pointer when `sd-input` is disabled.

  Update `sd-option` text color when disabled.

## 4.6.15

### Patch Changes

- Improved `sd-teaser` and `sd-teaser-media` accessibility: _[`#2120`](https://github.com/solid-design-system/solid/pull/2120) [`ec19bb7`](https://github.com/solid-design-system/solid/commit/ec19bb7b101ced45393850328b534981b6d90c29) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Maintain consistent behavior between hover and focus states.
  - Ensure the headline is the first element in the teaser's DOM structure.

### 📈 Stats

- Uncompressed: 422 KB (+1 KB / +0%)
- Gzipped: 99 KB (unchanged)

## 4.6.14

### Patch Changes

- Improved `sd-tooltip` accessibility: _[`#2138`](https://github.com/solid-design-system/solid/pull/2138) [`6c61fde`](https://github.com/solid-design-system/solid/commit/6c61fde928d4fb2bf3cfb7355cb58d1f8dc42ec1) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - The button indicates whether it’s open;
  - Keep focus on the button if trigger is click;
  - Buttons are now accessible with VoiceOVer in Safari;
  - Screen readers announce the tooltip content when it becomes visible;

## 4.6.13

### Patch Changes

- Improved `sd-notification` accessibility: _[`#2101`](https://github.com/solid-design-system/solid/pull/2101) [`fc8514e`](https://github.com/solid-design-system/solid/commit/fc8514ea809e0ad1869953b7cb08dcffd842294c) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Improved consistency on screen reader announcements.
  - `sd-notification` will now use existing toast stacks if present in the DOM with specific IDs. If not existent, it will be automatically created as a fallback.

### 📈 Stats

- Uncompressed: 421 KB (-1 KB / 0%)
- Gzipped: 99 KB (unchanged)

## 4.6.12

### Patch Changes

- Improve `sd-select` and `sd-combobox` a11y: _[`#2154`](https://github.com/solid-design-system/solid/pull/2154) [`bb67377`](https://github.com/solid-design-system/solid/commit/bb673772c5ce0216c229c999604024804c8c0d59) [@smfonseca](https://github.com/smfonseca)_
  - Add focus state style to `sd-option`.
  - Handle option focus inside `sd-select` and `sd-combobox`.
  - Add invisible button to open `sd-combobox` with TalkBack.
  - Expand tag removal to include handling with `enter` and `space` keys in addition to `backspace`.
  - Separate tag text and removable indicator to it's own button to improve the component usability and clarity.
  - Add translatable label to `sd-tag` removable button.
  - Improve tag removal announcements.

### 📈 Stats

- Uncompressed: 422 KB (+3 KB / +1%)
- Gzipped: 99 KB (+1 KB / +1%)

## 4.6.11

### Patch Changes

- Improved `sd-dialog` `aria-label` and `aria-labelledby` attributes to ensure only one is set at a time. _[`#2140`](https://github.com/solid-design-system/solid/pull/2140) [`034046c`](https://github.com/solid-design-system/solid/commit/034046c54cc0455dc159a2c00a683138e34874f7) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.6.10

### Patch Changes

- Improved `sd-drawer` aria labels and focus outline. _[`#2143`](https://github.com/solid-design-system/solid/pull/2143) [`79644ba`](https://github.com/solid-design-system/solid/commit/79644baba6ecba34ac91abd088c814990b6c1b05) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.6.9

### Patch Changes

- Improved `sd-audio` `aria-label` by including current speed value on playback speed button. _[`#2136`](https://github.com/solid-design-system/solid/pull/2136) [`2a2dd5d`](https://github.com/solid-design-system/solid/commit/2a2dd5d34a59f6a7270e33963ce0f95a77abf1c4) [@mariohamann](https://github.com/mariohamann)_
- Adjusted type of `containingElement` property in `sd-dropdown` _[`#2136`](https://github.com/solid-design-system/solid/pull/2136) [`2a2dd5d`](https://github.com/solid-design-system/solid/commit/2a2dd5d34a59f6a7270e33963ce0f95a77abf1c4) [@mariohamann](https://github.com/mariohamann)_
- Component dependencies are not correctly imported (e.g. `sd-icon` inside `sd-button`) _[`#2136`](https://github.com/solid-design-system/solid/pull/2136) [`2a2dd5d`](https://github.com/solid-design-system/solid/commit/2a2dd5d34a59f6a7270e33963ce0f95a77abf1c4) [@mariohamann](https://github.com/mariohamann)_
- Make `sd-input` compatible to autofill with passwords _[`#2136`](https://github.com/solid-design-system/solid/pull/2136) [`2a2dd5d`](https://github.com/solid-design-system/solid/commit/2a2dd5d34a59f6a7270e33963ce0f95a77abf1c4) [@mariohamann](https://github.com/mariohamann)_
- Improved `sd-drawer` and `sd-dialog` focus management by ensuring trigger elements inside shadow DOMs are correctly re-focused when element closes. _[`#2136`](https://github.com/solid-design-system/solid/pull/2136) [`2a2dd5d`](https://github.com/solid-design-system/solid/commit/2a2dd5d34a59f6a7270e33963ce0f95a77abf1c4) [@mariohamann](https://github.com/mariohamann)_

## 4.6.8

### Patch Changes

- Implemented `visually-disabled` attribute on `sd-tab`. _[`#2126`](https://github.com/solid-design-system/solid/pull/2126) [`41c40fd`](https://github.com/solid-design-system/solid/commit/41c40fdfb3da8b4dbe28a357affe922221f3733d) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.6.7

### Patch Changes

- Improved `sd-scrollable` screen reader announcements when the scroll button is pressed. _[`#2109`](https://github.com/solid-design-system/solid/pull/2109) [`d2a3096`](https://github.com/solid-design-system/solid/commit/d2a3096319ca9f55428d24d8d333daded7227a4e) [@paulovareiro29](https://github.com/paulovareiro29)_

  Fixed focus issue on `sd-scrollable` when both axis buttons are enabled and a scrolling limit is reached.

### 📈 Stats

- Uncompressed: 419 KB (+2 KB / +0%)
- Gzipped: 98 KB (+1 KB / +1%)

## 4.6.6

### Patch Changes

- Fix `sd-carousel` a11y issues when set to autoplay. _[`#2117`](https://github.com/solid-design-system/solid/pull/2117) [`079cc6b`](https://github.com/solid-design-system/solid/commit/079cc6bda59dcafa6b7bdf65660d2192d6f2b373) [@smfonseca](https://github.com/smfonseca)_
  - Switch from `role="status"` to `aria-live` for more granular control.
  - Update `aria-live` when element is focused.
  - Add localized `aria-label` to `scroll-container`.

## 4.6.5

### Patch Changes

- Added new translation keys named `expandNavigationItem` and `collapseNavigationItem`. _[`#2099`](https://github.com/solid-design-system/solid/pull/2099) [`f032ebb`](https://github.com/solid-design-system/solid/commit/f032ebb454c2aed3b24cc0beb64299ff4cc36a3a) [@paulovareiro29](https://github.com/paulovareiro29)_

  Improved `sd-navigation-item` toggle details button title.

## 4.6.4

### Patch Changes

- Fix `sd-step` label alignment when `not-interactive` attribute is set and browsers minimum font size is defined. _[`#2103`](https://github.com/solid-design-system/solid/pull/2103) [`18442d9`](https://github.com/solid-design-system/solid/commit/18442d9f3bb775ada64c30c9e206b345b2de0a10) [@smfonseca](https://github.com/smfonseca)_

## 4.6.3

### Patch Changes

- Fix reflecting `clearable` property in `sd-select`. _[`#2098`](https://github.com/solid-design-system/solid/pull/2098) [`ae2b4c8`](https://github.com/solid-design-system/solid/commit/ae2b4c8b658f410e380d754227b592af3d3b221c) [@smfonseca](https://github.com/smfonseca)_

## 4.6.2

### Patch Changes

- Improve `sd-input` accessibility. _[`#2095`](https://github.com/solid-design-system/solid/pull/2095) [`8ba710d`](https://github.com/solid-design-system/solid/commit/8ba710d292747bdd7dc62104c06da893c37b9d1a) [@smfonseca](https://github.com/smfonseca)_
  - Make shown/ hide password button focusable.
  - Add `aria-invalid` attribute to semantically communicate invalid state.

### 📈 Stats

- Uncompressed: 417 KB (+1 KB / +0%)
- Gzipped: 97 KB (unchanged)

## 4.6.1

### Patch Changes

- Improved `sd-badge` and `sd-button` accessibility when browser minimum font size is defined. _[`#2087`](https://github.com/solid-design-system/solid/pull/2087) [`16e99da`](https://github.com/solid-design-system/solid/commit/16e99dab4886b9656fd7ed64b6e657655d2ec66e) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - `sd-badge` padding and font-size readjusted.
  - Label alignment on `sd-button` (Safari-specific bug).

## 4.6.0

### Minor Changes

- Improved `sd-select` accessibility by refactoring component to use a button to open the options list. Screenreaders like TalkBack can now correctly interact with the component. _[`#2086`](https://github.com/solid-design-system/solid/pull/2086) [`c295d51`](https://github.com/solid-design-system/solid/commit/c295d51e0fe8530c87f7b5a9cad36bb98f0af4d2) [@smfonseca](https://github.com/smfonseca)_

  Fixed hover styles handling for `sd-select` and `sd-combobox` to be applied with css only instead of Javascript.

## 4.5.3

### Patch Changes

- Fixed a11y issue in `sd-expandable`. Swapped `aria-hidden` with `inert` attribute to make sure all content, including interactive elements, is properly hidden when component state is closed. _[`#2090`](https://github.com/solid-design-system/solid/pull/2090) [`e9f8f9d`](https://github.com/solid-design-system/solid/commit/e9f8f9d4942f164ee516c135b28696a305663eae) [@smfonseca](https://github.com/smfonseca)_

## 4.5.2

### Patch Changes

- Update components to reflect selected properties so that they are always displayed in the DOM. This is specifically required when web components are used within React 19 but also to make dx more predictable. _[`#2088`](https://github.com/solid-design-system/solid/pull/2088) [`f95ee43`](https://github.com/solid-design-system/solid/commit/f95ee4374c1947f63f374de897f7a40ac373649f) [@smfonseca](https://github.com/smfonseca)_

### 📈 Stats

- Uncompressed: 416 KB (+2 KB / +0%)
- Gzipped: 97 KB (unchanged)

## 4.5.1

### Patch Changes

- Implement `role="group"` on `sd-teaser` to improve a11y. _[`#1997`](https://github.com/solid-design-system/solid/pull/1997) [`1c13853`](https://github.com/solid-design-system/solid/commit/1c138533f7aa444def6c0ae1f0d3cd94bb9492b3) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.5.0

### Minor Changes

- Implement `label` attribute on `sd-map-marker` to improve a11y. _[`#1991`](https://github.com/solid-design-system/solid/pull/1991) [`6800cd7`](https://github.com/solid-design-system/solid/commit/6800cd77873a3f03e71229a51acfe908c2749f9a) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.4.2

### Patch Changes

- Fix german translations used in the `sd-audio` component. _[`#1987`](https://github.com/solid-design-system/solid/pull/1987) [`d7bfbe3`](https://github.com/solid-design-system/solid/commit/d7bfbe39cf5fa38d1478f1fc7990fe57f377ed81) [@smfonseca](https://github.com/smfonseca)_

## 4.4.1

### Patch Changes

- Improved `sd-drawer` accessibility. _[`#1943`](https://github.com/solid-design-system/solid/pull/1943) [`f1197c5`](https://github.com/solid-design-system/solid/commit/f1197c5a777a2b330b5773eb3deef83bcda8c32e) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Make it a section fixing duplicated landmarks issues.
  - Fix issue with roles at body part.

## 4.4.0

### Minor Changes

- Improved `sd-step-group` accessibility. _[`#1966`](https://github.com/solid-design-system/solid/pull/1966) [`c49e5f8`](https://github.com/solid-design-system/solid/commit/c49e5f8bd1999ed26f75551b4d41f7d82da947a6) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Add a `label` attribute to assign an `aria-label` to the component.

  Improved `sd-step` accessibility.
  - Apply `aria-labelledby` and `aria-describedby` only when the component is interactive.

### 📈 Stats

- Uncompressed: 414 KB (+1 KB / +0%)
- Gzipped: 97 KB (unchanged)

## 4.3.1

### Patch Changes

- Removed carousel automatic `role="region"` so users can choose whenever an `sd-carousel` should have it or not. _[`#1935`](https://github.com/solid-design-system/solid/pull/1935) [`1c54e1c`](https://github.com/solid-design-system/solid/commit/1c54e1ce286f64a7ad7f575918b9952961938646) [@paulovareiro29](https://github.com/paulovareiro29)_

  For more information on how to use `role="region"`, please refer to the [Carousel template](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/templates-carousel--docs).

## 4.3.0

### Minor Changes

- Added new functionality to the `sd-input` for type="search" and improved the component accessibility. _[`#1934`](https://github.com/solid-design-system/solid/pull/1934) [`b8f1d87`](https://github.com/solid-design-system/solid/commit/b8f1d879b7974fe81633d08d66e3605ab9eae139) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Search icon button is interactive.
  - Trigger `sd-search` event when search button on `sd-input type="search"` is clicked.
  - Added a translatable label to the search icon for the `sd-input type="search"`.

## 4.2.8

### Patch Changes

- Adjust styling on form elements: _[`#1931`](https://github.com/solid-design-system/solid/pull/1931) [`82121dc`](https://github.com/solid-design-system/solid/commit/82121dce671e93f9066c1af79c8992090641f861) [@smfonseca](https://github.com/smfonseca)_
  - Placeholder color for `sd-select`, `sd-combobox`, `sd-input` and `sd-textarea` when disabled or visually-disabled.
  - `sd-select` border color when focused and visually-disabled

### 📈 Stats

- Uncompressed: 413 KB (+1 KB / +0%)
- Gzipped: 97 KB (unchanged)

## 4.2.7

### Patch Changes

- Updated `sd-optgroup` option wrapper role from `group` to `listbox` to align with HTML standards and included a localized `aria-label`. _[`#1938`](https://github.com/solid-design-system/solid/pull/1938) [`a328df3`](https://github.com/solid-design-system/solid/commit/a328df31e8fcd379100ff5d27859070015ddef68) [@smfonseca](https://github.com/smfonseca)_

## 4.2.6

### Patch Changes

- Removed summary default marker from `sd-accordion` which was being displayed in Safari. _[`#1946`](https://github.com/solid-design-system/solid/pull/1946) [`88ff20e`](https://github.com/solid-design-system/solid/commit/88ff20e092ce72f4eee5fb5019c7e0fb3d47e252) [@smfonseca](https://github.com/smfonseca)_

## 4.2.5

### Patch Changes

- Localize `sd–video` play button aria-label with new translation named `playVideo`. _[`#1944`](https://github.com/solid-design-system/solid/pull/1944) [`32695f2`](https://github.com/solid-design-system/solid/commit/32695f2580fe301f252195492bedd6aedcf467cf) [@paulovareiro29](https://github.com/paulovareiro29)_

  Remove unnecessary `aria-label` on sd-video wrapper element.

## 4.2.4

### Patch Changes

- Improved `sd-radio-group` a11y by adding the attribute `aria-labelledby` to hidden input. _[`#1940`](https://github.com/solid-design-system/solid/pull/1940) [`d2d5dcb`](https://github.com/solid-design-system/solid/commit/d2d5dcb9889102d9ad18f8ffcb9cbba389c4088e) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.2.3

### Patch Changes

- Fix sd-checkbox `aria-checked` when on the indeterminate state _[`#1930`](https://github.com/solid-design-system/solid/pull/1930) [`6327da1`](https://github.com/solid-design-system/solid/commit/6327da128579d8131da3e10dd714afb216e226e1) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.2.2

### Patch Changes

- Improved `sd-audio` accessibility and fixed progress bar syncronization. _[`#1921`](https://github.com/solid-design-system/solid/pull/1921) [`8bab0f5`](https://github.com/solid-design-system/solid/commit/8bab0f5a9870850f3dbe15a4a524a37ba88c300c) [@smfonseca](https://github.com/smfonseca)_
  - Correctly set aria attributes in the control buttons.
  - Used floating-points to more accurately set `currentTime`, `duration` and progress bar calculations.

### 📈 Stats

- Uncompressed: 412 KB (+1 KB / +0%)
- Gzipped: 97 KB (unchanged)

## 4.2.1

### Patch Changes

- Fixed the following issues in `sd-dialog`: _[`#1917`](https://github.com/solid-design-system/solid/pull/1917) [`8ff069c`](https://github.com/solid-design-system/solid/commit/8ff069cb9cf99aa3709d618efaa51394821c67d0) [@smfonseca](https://github.com/smfonseca)_
  - Panel max-height is set to 80vh.
  - On higher zoom levels (e.g. 400%):
    - Panel body now has a min-height to prevent collapsing.
    - Added `overflow-y: auto` to the footer to prevent content from overflowing.

## 4.2.0

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

### 📈 Stats

- Uncompressed: 411 KB (+7 KB / +2%)
- Gzipped: 97 KB (+1 KB / +1%)

## 4.1.3

### Patch Changes

- Improve `sd-notification` a11y: _[`#1902`](https://github.com/solid-design-system/solid/pull/1902) [`8d1b364`](https://github.com/solid-design-system/solid/commit/8d1b364f67f000eb58449ddb9431c7e3d13dc083) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Add dismiss using ESC on closable notifications
  - Add focus trap on closable notifications
  - Improve notifications stack to behave as a `region`
  - Add new `notifications` translation

### 📈 Stats

- Uncompressed: 404 KB (+1 KB / +0%)
- Gzipped: 96 KB (+1 KB / +1%)

## 4.1.2

### Patch Changes

- Fixed optical missmatch in `checked` and `disabled` state. _[`#1900`](https://github.com/solid-design-system/solid/pull/1900) [`b8f3c8a`](https://github.com/solid-design-system/solid/commit/b8f3c8a6641fb125dd472f5a5cf86c2e4de81ebe) [@smfonseca](https://github.com/smfonseca)_

## 4.1.1

### Patch Changes

- Make `sd-tooltip` more accessible: _[`#1712`](https://github.com/solid-design-system/solid/pull/1712) [`776c0e4`](https://github.com/solid-design-system/solid/commit/776c0e4579644380b0b169c76373b522ce508edf) [@Vahid1919](https://github.com/Vahid1919)_
  - Fixed tooltip ignoring first click due to focus logic.
  - Provided a label for the icon.
  - Added `aria-describedby` attribute to the button.
  - Removed "Long Content" story from screenshot tests.

### 📈 Stats

- Uncompressed: 403 KB (+1 KB / +0%)
- Gzipped: 95 KB (unchanged)

## 4.1.0

### Minor Changes

- Introduce new `sd-status-assets` icon library, to be used exclusively by the `sd-status-badge` style component. _[`#1820`](https://github.com/solid-design-system/solid/pull/1820) [`617d02d`](https://github.com/solid-design-system/solid/commit/617d02d91e0eb3d27f9769e0e72fd76b985d6b33) [@smfonseca](https://github.com/smfonseca)_

  The new icons can be seen [here](https://solid-design-system.fe.union-investment.de/docs/?path=/story/components-sd-icon-default--status-library).

### 📈 Stats

- Uncompressed: 402 KB (+2 KB / +0%)
- Gzipped: 95 KB (unchanged)

## 4.0.10

### Patch Changes

- Conditionally render the label wrapper and slotted tooltip to avoid incorrect markup in the DOM. _[`#1815`](https://github.com/solid-design-system/solid/pull/1815) [`6eceab5`](https://github.com/solid-design-system/solid/commit/6eceab576630c882b148ae0d345a02fb3c640374) [@smfonseca](https://github.com/smfonseca)_

### 📈 Stats

- Uncompressed: 400 KB (unchanged)
- Gzipped: 95 KB (+1 KB / +1%)

## 4.0.9

### Patch Changes

- Fix `sd-map-marker` variants `main`and `place` shadow. The shadow token in use (`shadow-md`) was [removed](https://github.com/solid-design-system/solid/pull/963) and is now replaced with `shadow`. _[`#1818`](https://github.com/solid-design-system/solid/pull/1818) [`adc5ee0`](https://github.com/solid-design-system/solid/commit/adc5ee06300566bd4b22352e178664cfc1458059) [@smfonseca](https://github.com/smfonseca)_

  Improve center alignment of icon in variant `place`.

### 📈 Stats

- Uncompressed: 400 KB (+1 KB / +0%)
- Gzipped: 94 KB (unchanged)

## 4.0.8

### Patch Changes

- Improve sd-radio when checked: _[`#1814`](https://github.com/solid-design-system/solid/pull/1814) [`dd2195f`](https://github.com/solid-design-system/solid/commit/dd2195f65d543900eebefc6d4ae2d0aece79deeb) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Removed the inner border of the green circle to maintain consistency with Figma

## 4.0.7

### Patch Changes

- Fixed `sd-navigation-item` broken layout _[`#1743`](https://github.com/solid-design-system/solid/pull/1743) [`722cc99`](https://github.com/solid-design-system/solid/commit/722cc99e032a91bfb1a14a019190ddd0bd1ba790) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  Improved sd-drawer a11y:
  - Fix focus management - the focus will go to close button once the drawer is open
  - Make content area a scrollable region to be accessed by screen readers
  - Add close button to no-header variant
  - Fix aria-labelledby title issue
  - Fix tests

## 4.0.6

### Patch Changes

- Improve `sd-tooltip` robustness by removing empty text nodes from the default slot which caused the trigger to not render properly. _[`#1798`](https://github.com/solid-design-system/solid/pull/1798) [`fa60adc`](https://github.com/solid-design-system/solid/commit/fa60adc10a0b96654d6bf7380b4fc8e82857caa6) [@smfonseca](https://github.com/smfonseca)_

## 4.0.5

### Patch Changes

- Fix missing gradients on `sd-teaser-media` and `sd-flipcard`. _[`#1810`](https://github.com/solid-design-system/solid/pull/1810) [`f10c08c`](https://github.com/solid-design-system/solid/commit/f10c08ce6cc0e40d860a93c50199e2917deef7df) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.0.4

### Patch Changes

- Fix `sd-carousel` focus management: _[`#1802`](https://github.com/solid-design-system/solid/pull/1802) [`77ed0c1`](https://github.com/solid-design-system/solid/commit/77ed0c14422914de6793259ed489eff363254d9e) [@smfonseca](https://github.com/smfonseca)_
  - next button is focused only when user interacts with component.
  - previous button receives focus when the last slide is reached.

### 📈 Stats

- Uncompressed: 399 KB (+1 KB / +0%)
- Gzipped: 94 KB (unchanged)

## 4.0.3

### Patch Changes

- Fixed issue with cherry picking the `sd-select` and `sd-combobox` components which required an empty chunk file. _[`#1805`](https://github.com/solid-design-system/solid/pull/1805) [`74d07fd`](https://github.com/solid-design-system/solid/commit/74d07fd7f7db082e6059469f415ff0cb61e400ef) [@smfonseca](https://github.com/smfonseca)_

## 4.0.2

### Patch Changes

- Make the attribute `maxOptionsTagLabel` of the `sd-select` and `sd-combobox` components reactive to translations. _[`#1801`](https://github.com/solid-design-system/solid/pull/1801) [`3a9da02`](https://github.com/solid-design-system/solid/commit/3a9da021a7ecf201a7f239ec7797061204ad6d75) [@smfonseca](https://github.com/smfonseca)_

## 4.0.1

### Patch Changes

- Update dependencies _[`#1787`](https://github.com/solid-design-system/solid/pull/1787) [`c70915b`](https://github.com/solid-design-system/solid/commit/c70915be2135d93f17e9150ea6fcef95f90dd081) [@paulovareiro29](https://github.com/paulovareiro29)_

## 4.0.0

### Major Changes

- Default slot is now hidden in `variant=picture` of component `sd-brandshape` _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- The `variant` `gradient-white` of component `sd-teaser-media` was changed to `gradient-light` to be in sync with design. _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- Default `size` of style `sd-display` is now `4xl` instead of `xl`. _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- The `sd-flipcard` component has been updated to improve a11y, flexibility and alignment with design. Checkout the migration guide for more details. _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- Removed `sd-video` overlay feature. _[`#1776`](https://github.com/solid-design-system/solid/pull/1776) [`d12e330`](https://github.com/solid-design-system/solid/commit/d12e3305ca95bc63188017b1ea3113e41019e27c) [@paulovareiro29](https://github.com/paulovareiro29)_
- The default `size` `base` in component `sd-navigation-item` was changed to `md` to be consistent with other components. _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- Rename sd-badge `variant` attribute options for accessibility purposes. _[`#1774`](https://github.com/solid-design-system/solid/pull/1774) [`8b96338`](https://github.com/solid-design-system/solid/commit/8b963385855a6440b3a888ac73bec1ae71697a67) [@smfonseca](https://github.com/smfonseca)_
  - `variant="default"` -> `variant="blue"`
  - `variant="sucess"` -> `variant="green"`
  - `variant="error"` -> `variant="red"`

### Minor Changes

- Adapt `sd-accordion` and expandable `sd-quickfact` HTML to use `<details />` and `<summary />` elements. _[`#1757`](https://github.com/solid-design-system/solid/pull/1757) [`b83d804`](https://github.com/solid-design-system/solid/commit/b83d8049db1abaa8744f806412c35609109ef04d) [@paulovareiro29](https://github.com/paulovareiro29)_

### Patch Changes

- List anchor slot of sd-tooltip in types _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- Improved sd-expandable visual: _[`#1724`](https://github.com/solid-design-system/solid/pull/1724) [`c7bab9d`](https://github.com/solid-design-system/solid/commit/c7bab9db426203a61b42a19740c409c50b25da4c) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Removed underline to match design.
  - Improved spacings according to design.

  Improved sd-expandable a11y:
  - Reorder elements in the DOM (button first so it is targetable by keyboard on first tab)

- Improve sd-teaser a11y: _[`#1748`](https://github.com/solid-design-system/solid/pull/1748) [`5a8c80f`](https://github.com/solid-design-system/solid/commit/5a8c80f22b39bc722614974b797164d78d6de29e) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Reordered DOM elements in order for headline to be read first by screen readers

- Fix icon slots in `sd-audio` _[`#1689`](https://github.com/solid-design-system/solid/pull/1689) [`4c065bd`](https://github.com/solid-design-system/solid/commit/4c065bd71df67bc13d2cf6cd27c3284cc4ce99b3) [@mariohamann](https://github.com/mariohamann)_
- Improved sd-divider a11y: _[`#1751`](https://github.com/solid-design-system/solid/pull/1751) [`f0fd5cb`](https://github.com/solid-design-system/solid/commit/f0fd5cb9a61b07cb487455b1da2a374d89ef93ca) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Implemented aria-orientation attribute

- Make sd-select and sd-combobox placeholders translatable. _[`#1761`](https://github.com/solid-design-system/solid/pull/1761) [`6b544f5`](https://github.com/solid-design-system/solid/commit/6b544f5b50f0a5b4c33e04a44c46bd35dbd1d8d3) [@smfonseca](https://github.com/smfonseca)_
- Bugfixes and minor non-breaking changes to the sd-select and sd-combobox components _[`#1742`](https://github.com/solid-design-system/solid/pull/1742) [`125d5f1`](https://github.com/solid-design-system/solid/commit/125d5f1db6c0eaf19500cc333ac33ab39646d842) [@DanielHargesheimer](https://github.com/DanielHargesheimer)_
  - sd-combobox: emit events correctly
  - sd-combobox: set options' initial attributes
  - sd-select and sd-combobox: add max-options-tag-label attribute
  - sd-select: add --tag-max-width and ellipsis

- Improved sd-flipcard hidden side a11y: _[`#1760`](https://github.com/solid-design-system/solid/pull/1760) [`a64a5ba`](https://github.com/solid-design-system/solid/commit/a64a5bad336ba72b62b1a1f63685a6f58bd895c5) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Interactive elements are no longer reachable.
  - Content is no longer read by screenreader.

- Fixed gradient issue on flipcard. _[`#1752`](https://github.com/solid-design-system/solid/pull/1752) [`1f05b67`](https://github.com/solid-design-system/solid/commit/1f05b677f64c6fca93e5764cfd283ddd17dcc145) [@paulovareiro29](https://github.com/paulovareiro29)_

  Implemented an improved flipcard template version.

- Fixed broken padding on tab left slot. _[`#1755`](https://github.com/solid-design-system/solid/pull/1755) [`9954447`](https://github.com/solid-design-system/solid/commit/9954447efacc72908971c123b94bfd549dc69454) [@paulovareiro29](https://github.com/paulovareiro29)_
- Fix a rare bug in the disconnecedCallback of sd-tab-group when being dynamically created and removed _[`#1768`](https://github.com/solid-design-system/solid/pull/1768) [`fbf375e`](https://github.com/solid-design-system/solid/commit/fbf375e19e760fe3765f965c06929ae846fb44f1) [@mariohamann](https://github.com/mariohamann)_

## 4.0.0-next.12

### Patch Changes

- Improved sd-expandable visual: _[`#1724`](https://github.com/solid-design-system/solid/pull/1724) [`c7bab9d`](https://github.com/solid-design-system/solid/commit/c7bab9db426203a61b42a19740c409c50b25da4c) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Removed underline to match design.
  - Improved spacings according to design.

  Improved sd-expandable a11y:
  - Reorder elements in the DOM (button first so it is targetable by keyboard on first tab)

### 📈 Stats

- Uncompressed: 398 KB (-1 KB / 0%)
- Gzipped: 94 KB (unchanged)

## 4.0.0-next.11

### Patch Changes

- Fixed gradient issue on flipcard. _[`#1752`](https://github.com/solid-design-system/solid/pull/1752) [`1f05b67`](https://github.com/solid-design-system/solid/commit/1f05b677f64c6fca93e5764cfd283ddd17dcc145) [@paulovareiro29](https://github.com/paulovareiro29)_

  Implemented an improved flipcard template version.

### 📈 Stats

- Uncompressed: 399 KB (+1 KB / +0%)
- Gzipped: 94 KB (unchanged)

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
