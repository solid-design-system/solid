# @solid-design-system/docs

## 1.30.0-next.0

### Minor Changes

- Implemented new utility componented named `sd-theme-listener`, used to listen to theme changes. _[`#2472`](https://github.com/solid-design-system/solid/pull/2472) [`58b6d04`](https://github.com/solid-design-system/solid/commit/58b6d043d4126a1441ae929c2d9300352f787f1c) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.29.2

### Patch Changes

- Made `slot` CSS classes available in Codepen to ensure stories such as `sd-expandable--default` can be correctly visualized. _[`#2550`](https://github.com/solid-design-system/solid/pull/2550) [`b760ea8`](https://github.com/solid-design-system/solid/commit/b760ea829f73a1834127dbf2cdf8706c64002d39) [@smfonseca](https://github.com/smfonseca)_

## 1.29.1

### Patch Changes

- - Update pnpm to 10.17 _[`#2522`](https://github.com/solid-design-system/solid/pull/2522) [`7cc6bb7`](https://github.com/solid-design-system/solid/commit/7cc6bb7bdfc9ccb26c2ecfa58b27021d15379312) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add minimumReleaseAge to 5 days
  - Update all actions to ensure that they're using the correct version

## 1.29.0

### Minor Changes

- Introduced accessibility testing with Playwright in components. _[`#2435`](https://github.com/solid-design-system/solid/pull/2435) [`27f919c`](https://github.com/solid-design-system/solid/commit/27f919c157da0772876a855f3a6c0003118e0bfe) [@mariohamann](https://github.com/mariohamann)_

## 1.28.6

### Patch Changes

- Fixed a11y tests to use Storybook accessibility settings to skip specific rules instead of relying on custom tags. _[`#2471`](https://github.com/solid-design-system/solid/pull/2471) [`930b84a`](https://github.com/solid-design-system/solid/commit/930b84a255bc1c27af2085e37cef226fa0910fbd) [@smfonseca](https://github.com/smfonseca)_

## 1.28.5

### Patch Changes

- Changed `hide-label` attribute from an `id` into `class` on the `Step Group` template. _[`#2470`](https://github.com/solid-design-system/solid/pull/2470) [`712e747`](https://github.com/solid-design-system/solid/commit/712e7474e0ccab3f087a572a184a888983bad970) [@balco0110](https://github.com/balco0110)_

## 1.28.4

### Patch Changes

- Minor improvements to the `sd-step-group` docs and template stories. _[`#2457`](https://github.com/solid-design-system/solid/pull/2457) [`98efdf9`](https://github.com/solid-design-system/solid/commit/98efdf9167a4e783d5273d65f43b8957468435c9) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

## 1.28.3

### Patch Changes

- Fixed usability issues of the Storybook controls on the components default story. _[`4ed1261`](https://github.com/solid-design-system/solid/commit/4ed12613e723c76a71542e6944ed4d4de11d5ce1) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.28.2

### Patch Changes

- Fixed a small keyboard navigation issue within the `Header Navigation` template. _[`#2454`](https://github.com/solid-design-system/solid/pull/2454) [`038a16a`](https://github.com/solid-design-system/solid/commit/038a16ada52e11bd92f7a621947104c96e71bd54) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.28.1

### Patch Changes

- Fixed a small layout issue on the `Button` template. _[`#2448`](https://github.com/solid-design-system/solid/pull/2448) [`8025cd2`](https://github.com/solid-design-system/solid/commit/8025cd2a1e738aa7f26eb752147417af720a2399) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.28.0

### Minor Changes

- Implemented a new `sd-navigation-item` template showcasing a `mega menu`. _[`#2318`](https://github.com/solid-design-system/solid/pull/2318) [`11300b4`](https://github.com/solid-design-system/solid/commit/11300b42a379e8f13ac4316b8824126c61891281) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.27.0

### Minor Changes

- Implemented `waiting` attribute and `horizontal-inline` variant on `sd-step` _[`#2364`](https://github.com/solid-design-system/solid/pull/2364) [`b6d6768`](https://github.com/solid-design-system/solid/commit/b6d6768f99dffceb06356a519e9d74ee5490e5aa) [@balco0110](https://github.com/balco0110)_
- Updated the docs for `sd-step` and `sd-step-group` and `Step Group` template. _[`#2364`](https://github.com/solid-design-system/solid/pull/2364) [`b6d6768`](https://github.com/solid-design-system/solid/commit/b6d6768f99dffceb06356a519e9d74ee5490e5aa) [@balco0110](https://github.com/balco0110)_

## 1.26.11

### Patch Changes

- Adjusted form components stories casing. _[`#2403`](https://github.com/solid-design-system/solid/pull/2403) [`364eafa`](https://github.com/solid-design-system/solid/commit/364eafad92827a95ed1522741c990a1a1fdeaced) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.26.10

### Patch Changes

- Improved all style classes documentation so the user can better visualise which modifier classes are available. _[`#2386`](https://github.com/solid-design-system/solid/pull/2386) [`6ce01e4`](https://github.com/solid-design-system/solid/commit/6ce01e4d9c758cf1e181565fbe10c7010c0df002) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.26.9

### Patch Changes

- Added support for `<a>` inside `sd-footnotes--marker`. _[`#2421`](https://github.com/solid-design-system/solid/pull/2421) [`515a2b1`](https://github.com/solid-design-system/solid/commit/515a2b1168af2cc7c91469942220f7e520637bb3) [@paulovareiro29](https://github.com/paulovareiro29)_

  Removed `sd-footnotes` safari known issue.

## 1.26.8

### Patch Changes

- Improved use of solid components in Codepen environment: _[`#2407`](https://github.com/solid-design-system/solid/pull/2407) [`9280957`](https://github.com/solid-design-system/solid/commit/928095786bd6eaca704c1a6a07f7e3f602e3265e) [@smfonseca](https://github.com/smfonseca)_
  - Images, videos and audio files from the `placeholders` package are correctly imported.
  - Solid Tailwind configuration is available allowing the correct display of component and the use of different variables.

## 1.26.7

### Patch Changes

- Optimized `sd-media` documentation and template. _[`#2404`](https://github.com/solid-design-system/solid/pull/2404) [`6b1b045`](https://github.com/solid-design-system/solid/commit/6b1b0459b96d985b7c27b3d8f351b9ac0940098a) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.26.6

### Patch Changes

- Added a disclaimer to the `Range` template. _[`#2381`](https://github.com/solid-design-system/solid/pull/2381) [`be17a92`](https://github.com/solid-design-system/solid/commit/be17a92a1dc4b1b68171bef4c0d30367034db0d2) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.26.5

### Patch Changes

- Added new `Multiline` `sd-button` screenshot test. _[`#2362`](https://github.com/solid-design-system/solid/pull/2362) [`b5d9a60`](https://github.com/solid-design-system/solid/commit/b5d9a60c50a97193b57f4208e6d23af31c556f5d) [@paulovareiro29](https://github.com/paulovareiro29)_

  Updated `Button` template according to figma.

## 1.26.4

### Patch Changes

- Added more screenshot test cases to `sd-pagination`. _[`#2376`](https://github.com/solid-design-system/solid/pull/2376) [`ef0096e`](https://github.com/solid-design-system/solid/commit/ef0096ea8f2118a41faca0c6055ad017af0fea4e) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.26.3

### Patch Changes

- Updated icon libraries. _[`#2385`](https://github.com/solid-design-system/solid/pull/2385) [`2b57a70`](https://github.com/solid-design-system/solid/commit/2b57a707fb9d9ef60c313fd457ddfa6fb1db69b4) [@smfonseca](https://github.com/smfonseca)_
  - Added `internal-lib` story to showcase `_internal` icon library.
  - Added `Library: _internal` screenshot test.
  - Added `status-assets` story to showcase `sd-status-assets` icon library.
  - Added `Library: sd-status-assets` screenshot test.
  - Updated docs page with reference to `_internal` and `sd-status-assets` libraries.

- Update migration guide `from v4` with more information regarding the internal icon library renaming. _[`#2385`](https://github.com/solid-design-system/solid/pull/2385) [`2b57a70`](https://github.com/solid-design-system/solid/commit/2b57a707fb9d9ef60c313fd457ddfa6fb1db69b4) [@smfonseca](https://github.com/smfonseca)_

## 1.26.2

### Patch Changes

- Fixed an issue where the `sd-tab` `active` story would not show the current tab correctly after navigating through storybook. _[`#2384`](https://github.com/solid-design-system/solid/pull/2384) [`cbe0e16`](https://github.com/solid-design-system/solid/commit/cbe0e16de7296eeec08a8ca87f2c1812160abeb3) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.26.1

### Patch Changes

- Added inverted background on `sd-interactive` disabled screenshot tests. _[`#2361`](https://github.com/solid-design-system/solid/pull/2361) [`9e512b6`](https://github.com/solid-design-system/solid/commit/9e512b646d0959585d4d294658c880125cfeeafc) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.26.0

### Minor Changes

- Add overview pages for: _[`#2337`](https://github.com/solid-design-system/solid/pull/2337) [`4e642ad`](https://github.com/solid-design-system/solid/commit/4e642ad01318d58043d61a1216c0d64ef6cb3cf5) [@smfonseca](https://github.com/smfonseca)_
  - `sd-carousel-item`
  - `sd-mark`
  - `sd-table`

  Update Solid DS Best Practices for WCAG Compliance link in all overview pages.

## 1.25.0

### Minor Changes

- Extended `sd-pagination` style component to support the use of the `button` element. _[`#2352`](https://github.com/solid-design-system/solid/pull/2352) [`1e0338c`](https://github.com/solid-design-system/solid/commit/1e0338c1e125b0d5625d7411f81ca345c2161bd6) [@smfonseca](https://github.com/smfonseca)_
  - Included screenshot tests for new functionality.

## 1.24.5

### Patch Changes

- Update introduction page to align with Figma _[`#2353`](https://github.com/solid-design-system/solid/pull/2353) [`ac317c2`](https://github.com/solid-design-system/solid/commit/ac317c2a3ae9aca4e966cd53b002e0217e9b05c1) [@karlbaumhauer](https://github.com/karlbaumhauer)_

## 1.24.4

### Patch Changes

- - Sync `sd-tab` samples with figma _[`#2256`](https://github.com/solid-design-system/solid/pull/2256) [`6f9d3fa`](https://github.com/solid-design-system/solid/commit/6f9d3fa42e95fbe3a13dcf89c499294facb25052) [@smfonseca](https://github.com/smfonseca)_

  - `sd-tab` screenshot tests update

## 1.24.3

### Patch Changes

- Updated `sd-radio-button` stories and screenshot tests to showcase the new style. _[`#2344`](https://github.com/solid-design-system/solid/pull/2344) [`496be2c`](https://github.com/solid-design-system/solid/commit/496be2cc87c25a9aa68bc4cd1966da8c5c2cd834) [@smfonseca](https://github.com/smfonseca)_

## 1.24.2

### Patch Changes

- Added screenshot test for `sd-tab-group` with links inside the `sd-tab-panel`. _[`#2350`](https://github.com/solid-design-system/solid/pull/2350) [`5ef9005`](https://github.com/solid-design-system/solid/commit/5ef90053097b1c4b940037e1f79a17b3680fcca4) [@smfonseca](https://github.com/smfonseca)_

## 1.24.1

### Patch Changes

- Fixed missing footnotes templates. _[`#2349`](https://github.com/solid-design-system/solid/pull/2349) [`fc196a3`](https://github.com/solid-design-system/solid/commit/fc196a36bcfa2e7849cac3595f41a8e798ff0a86) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.24.0

### Minor Changes

- The `sd-loader` has arrived! 🎉 _[`#2324`](https://github.com/solid-design-system/solid/pull/2324) [`48c1a2e`](https://github.com/solid-design-system/solid/commit/48c1a2e91b9ba1eca1383b92725c7d0c3dfcae67) [@smfonseca](https://github.com/smfonseca)_

  It is a visual indicator that shows loading is in process.
  - This component will replace the `sd-spinner` which will be **deprecated** in the near future.

## 1.23.0

### Minor Changes

- The `sd-range` and `sd-range-tick` have arrived! 🎉 _[`#2306`](https://github.com/solid-design-system/solid/pull/2306) [`6aba9bd`](https://github.com/solid-design-system/solid/commit/6aba9bd348b999fa6677de99488df234bc119de2) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Used to allow users to select a single or multiple values within a defined range using a slider.

## 1.22.2

### Patch Changes

- Fixed table template a11y issue with `role="region"`. _[`#2346`](https://github.com/solid-design-system/solid/pull/2346) [`4ae574a`](https://github.com/solid-design-system/solid/commit/4ae574ab375a5557fd3f63896d12de613a92134d) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.22.1

### Patch Changes

- Fixed render content for `tooltip` with bolded text template _[`#2327`](https://github.com/solid-design-system/solid/pull/2327) [`1dfe777`](https://github.com/solid-design-system/solid/commit/1dfe777224c5f139065a809c426aefc81da43d92) [@balco0110](https://github.com/balco0110)_

## 1.22.0

### Minor Changes

- - Create `switch` template _[`#2319`](https://github.com/solid-design-system/solid/pull/2319) [`5d20c51`](https://github.com/solid-design-system/solid/commit/5d20c51b9e0b15be47cfd60e24bb179cef42bf27) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

  - Add `Switch with Tooltip` story to `switch` template

## 1.21.0

### Minor Changes

- The `sd-menu` and `sd-menu-item` have arrived. 🎉 _[`#2297`](https://github.com/solid-design-system/solid/pull/2297) [`b2485fe`](https://github.com/solid-design-system/solid/commit/b2485fe1fcf7ee7897fd4e9d2fc48db06fe7c390) [@smfonseca](https://github.com/smfonseca)_
  - Added documentation with usage guidelines, best practices and accessibility hints.

## 1.20.2

### Patch Changes

- Fix missing components and styles docs. _[`#2323`](https://github.com/solid-design-system/solid/pull/2323) [`d945956`](https://github.com/solid-design-system/solid/commit/d945956798d4c145d962e82cf302e388e6ac7ef8) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.20.1

### Patch Changes

- Updated the sample for `checked`, `help text` and `invalid` in `sd-radio-button-group` according to Figma. _[`#2273`](https://github.com/solid-design-system/solid/pull/2273) [`6701124`](https://github.com/solid-design-system/solid/commit/6701124ce70e65968802b795e5d616219d772fb0) [@balco0110](https://github.com/balco0110)_

## 1.20.0

### Minor Changes

- Updated `sd-button` templates to provide a more realistic feel with real content _[`#2289`](https://github.com/solid-design-system/solid/pull/2289) [`fb0692d`](https://github.com/solid-design-system/solid/commit/fb0692d8c086f000943063e28b7d6a5a5e471996) [@balco0110](https://github.com/balco0110)_

## 1.19.0

### Minor Changes

- The `sd-breadcrumb` and `sd-breadcrumb-item` have arrived! 🎉 _[`#2288`](https://github.com/solid-design-system/solid/pull/2288) [`9a224c7`](https://github.com/solid-design-system/solid/commit/9a224c77ce047c8966ee6f3c7be54cbf7c161020) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Added new `sd-breadcrumb` and `sd-breadcrumb-item` docs.

## 1.18.0

### Minor Changes

- - Implement `reversed-layout` attribute for the `sd-teaser`. _[`#2283`](https://github.com/solid-design-system/solid/pull/2283) [`e65a94a`](https://github.com/solid-design-system/solid/commit/e65a94a7120525d73c40f58ad565911a81cff97b) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_

## 1.17.0

### Minor Changes

- Added information about the new `fade` attribute that enables a fade effect transition in the `sd-carousel`. Also updated the `Carousel with images` template to showcase the fade effect. _[`#2270`](https://github.com/solid-design-system/solid/pull/2270) [`99ed5c1`](https://github.com/solid-design-system/solid/commit/99ed5c12c34dfa15fb80c15e65b0751a473acd9e) [@smfonseca](https://github.com/smfonseca)_

## 1.16.8

### Patch Changes

- Updated description of `orientation` attribute in the `sd-list` style component. _[`#2279`](https://github.com/solid-design-system/solid/pull/2279) [`8714fd9`](https://github.com/solid-design-system/solid/commit/8714fd94ea6d031ea399ce82c9ce41ea93dfc478) [@smfonseca](https://github.com/smfonseca)_

## 1.16.7

### Patch Changes

- Aligned icons on header template _[`#2210`](https://github.com/solid-design-system/solid/pull/2210) [`d8bc555`](https://github.com/solid-design-system/solid/commit/d8bc555c8d8e361802ce0d4d97f976b761518a87) [@balco0110](https://github.com/balco0110)_

## 1.16.6

### Patch Changes

- Updated `sd-expandable` stories to support latest changes. _[`#2217`](https://github.com/solid-design-system/solid/pull/2217) [`ac48614`](https://github.com/solid-design-system/solid/commit/ac486145c19c83f646ad16a9dddde35a6e90a6eb) [@paulovareiro29](https://github.com/paulovareiro29)_
- Renamed internal icons to `_internal` instead of `system`. _[`#2217`](https://github.com/solid-design-system/solid/pull/2217) [`ac48614`](https://github.com/solid-design-system/solid/commit/ac486145c19c83f646ad16a9dddde35a6e90a6eb) [@paulovareiro29](https://github.com/paulovareiro29)_
- Improved `sd-badge` templates accessibility. _[`#2217`](https://github.com/solid-design-system/solid/pull/2217) [`ac48614`](https://github.com/solid-design-system/solid/commit/ac486145c19c83f646ad16a9dddde35a6e90a6eb) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.16.5

### Patch Changes

- Implement new screenshot test `Full Width` on `sd-button`. _[`#2244`](https://github.com/solid-design-system/solid/pull/2244) [`643ae18`](https://github.com/solid-design-system/solid/commit/643ae187c6772e3721140ad4cebb8d8e96855540) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.16.4

### Patch Changes

- Updated `sd-tag` stories to support the new `hide` method, `sd-hide` and `sd-after-hide` events. _[`#1901`](https://github.com/solid-design-system/solid/pull/1901) [`05854b6`](https://github.com/solid-design-system/solid/commit/05854b6ca0e0594a26a5d3f70b15baa1cd3b4033) [@MartaPintoTeixeira](https://github.com/MartaPintoTeixeira)_

  Updated `sd-select` template placeholder capitalization.

  Implemented interactive `sd-navigation-item` on header and dropdown templates.

  Implemented support to retrieve token values from CSS.

## 1.16.3

### Patch Changes

- Updated the input read-only story to use `value` instead of `placeholder`. _[`#2213`](https://github.com/solid-design-system/solid/pull/2213) [`fc961c6`](https://github.com/solid-design-system/solid/commit/fc961c683103254054940dad8ef0d1bac48c4ea1) [@balco0110](https://github.com/balco0110)_

## 1.16.2

### Patch Changes

- Update company details in imprint (name, managing director, tax ID) _[`#2201`](https://github.com/solid-design-system/solid/pull/2201) [`870bc51`](https://github.com/solid-design-system/solid/commit/870bc51283016f1ae2478c61ba6972974c60fb14) [@yoezlem](https://github.com/yoezlem)_

## 1.16.1

### Patch Changes

- Implemented new `sd-textarea` screenshot test named `Scrollable`. _[`#2159`](https://github.com/solid-design-system/solid/pull/2159) [`fbf93a5`](https://github.com/solid-design-system/solid/commit/fbf93a5c0a535ee598c23aa8670923ccddcae623) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.16.0

### Minor Changes

- Moved docs-related guidelines to the docs package. _[`#2185`](https://github.com/solid-design-system/solid/pull/2185) [`ce439d0`](https://github.com/solid-design-system/solid/commit/ce439d0c00e2a1f8c236fa32f138adc16672a3d3) [@mariohamann](https://github.com/mariohamann)_

## 1.15.2

### Patch Changes

- Improved `sd-teaser` and `sd-teaser-media` accessibility: _[`#2120`](https://github.com/solid-design-system/solid/pull/2120) [`ec19bb7`](https://github.com/solid-design-system/solid/commit/ec19bb7b101ced45393850328b534981b6d90c29) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Ensure the headline is the first element in the teaser's DOM structure in all templates.
  - Improve clickable teaser media:
    - Whole card is clickable;
    - Supports nested interactive elements;
    - Improved screen reader verbosity;

## 1.15.1

### Patch Changes

- Improved `sd-tooltip` accessibility: _[`#2138`](https://github.com/solid-design-system/solid/pull/2138) [`6c61fde`](https://github.com/solid-design-system/solid/commit/6c61fde928d4fb2bf3cfb7355cb58d1f8dc42ec1) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Custom trigger announcement.

## 1.15.0

### Minor Changes

- Added a new `sd-status-badge` template to display user profiles with status indicators and a quick edit option. _[`#2156`](https://github.com/solid-design-system/solid/pull/2156) [`abcdfee`](https://github.com/solid-design-system/solid/commit/abcdfeed967405946519e245bf9eb239835e1d18) [@smfonseca](https://github.com/smfonseca)_

### Patch Changes

- Improved `sd-notification` a11y: _[`#2101`](https://github.com/solid-design-system/solid/pull/2101) [`fc8514e`](https://github.com/solid-design-system/solid/commit/fc8514ea809e0ad1869953b7cb08dcffd842294c) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Added preloaded `sd-toast-stacks` to improve consistency within screen readers.
  - Added documentation about the importance of adding preloaded `sd-toast-stacks`.

## 1.14.1

### Patch Changes

- Update `sd-combobox` documentation: _[`#2154`](https://github.com/solid-design-system/solid/pull/2154) [`bb67377`](https://github.com/solid-design-system/solid/commit/bb673772c5ce0216c229c999604024804c8c0d59) [@smfonseca](https://github.com/smfonseca)_
  - Add new `search` story in `sd-combobox`.
  - Align search icon in combobox `icons` story and correctly format documentation.

## 1.14.0

### Minor Changes

- Introduce overview page for components and styles. _[`#2024`](https://github.com/solid-design-system/solid/pull/2024) [`6fa86c8`](https://github.com/solid-design-system/solid/commit/6fa86c819208ecc26d9ab1394af81e3467aab191) [@smfonseca](https://github.com/smfonseca)_

  These pages include information for:
  - Common use cases
  - Usage guidelines
  - Accessibility

  Docs pages are now used only to document technical information, all other information has now been moved to the "overview" page.

## 1.13.11

### Patch Changes

- Added `sd-dialog` new known browser issue. _[`#2140`](https://github.com/solid-design-system/solid/pull/2140) [`034046c`](https://github.com/solid-design-system/solid/commit/034046c54cc0455dc159a2c00a683138e34874f7) [@paulovareiro29](https://github.com/paulovareiro29)_

  Implemented new `Prevent Closing` story on `sd-dialog` templates.

## 1.13.10

### Patch Changes

- Improved `sd-drawer` `nav` aria labels on the drawer template. _[`#2143`](https://github.com/solid-design-system/solid/pull/2143) [`79644ba`](https://github.com/solid-design-system/solid/commit/79644baba6ecba34ac91abd088c814990b6c1b05) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.13.9

### Patch Changes

- Fix `sd-badge` default story. _[`#2144`](https://github.com/solid-design-system/solid/pull/2144) [`ee96458`](https://github.com/solid-design-system/solid/commit/ee96458e7a9a2f6101e5e455d2d37d29b6122135) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.13.8

### Patch Changes

- Implemented `Visually Disabled` story on `sd-tab.` _[`#2126`](https://github.com/solid-design-system/solid/pull/2126) [`41c40fd`](https://github.com/solid-design-system/solid/commit/41c40fdfb3da8b4dbe28a357affe922221f3733d) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.13.7

### Patch Changes

- Improve table template a11y. _[`#2137`](https://github.com/solid-design-system/solid/pull/2137) [`3dbb5ca`](https://github.com/solid-design-system/solid/commit/3dbb5cad431425333b484068cfbb12db6969db8b) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.13.6

### Patch Changes

- Added new `sd-scrollable` screenshot test named "Auto Orientation". _[`#2109`](https://github.com/solid-design-system/solid/pull/2109) [`d2a3096`](https://github.com/solid-design-system/solid/commit/d2a3096319ca9f55428d24d8d333daded7227a4e) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.13.5

### Patch Changes

- Added missing `sd-input` `aria-label` on forms template. _[`#2119`](https://github.com/solid-design-system/solid/pull/2119) [`59b8c84`](https://github.com/solid-design-system/solid/commit/59b8c840051167c2b55a94d562536934018d9707) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.13.4

### Patch Changes

- Improve `sd-pagination` a11y by moving focus to the other previous/next button when the first/last page is reached. _[`#2107`](https://github.com/solid-design-system/solid/pull/2107) [`4b225e7`](https://github.com/solid-design-system/solid/commit/4b225e71e3382f9eda7a2663cd679bd930ddee52) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.13.3

### Patch Changes

- Improve code examples by removing empty double quotes (`=""`) from boolean attributes. _[`#2102`](https://github.com/solid-design-system/solid/pull/2102) [`993b7dd`](https://github.com/solid-design-system/solid/commit/993b7dd5d5b64d5bc3cd66d1e64068e612933cbd) [@smfonseca](https://github.com/smfonseca)_

## 1.13.2

### Patch Changes

- Refactored `sd-switch` invalid state story to prevent focus from being set in the element on page load. _[`#2104`](https://github.com/solid-design-system/solid/pull/2104) [`ad14e89`](https://github.com/solid-design-system/solid/commit/ad14e8927d7cae80152e88b65b4a958dc1a000dc) [@smfonseca](https://github.com/smfonseca)_

## 1.13.1

### Patch Changes

- Fix a11y issue in `sd-button` icon only screenshot test by adding missing label. _[`#2089`](https://github.com/solid-design-system/solid/pull/2089) [`c82034a`](https://github.com/solid-design-system/solid/commit/c82034a98469c6a2ccdbc285b45c9a2eafd205b6) [@smfonseca](https://github.com/smfonseca)_

## 1.13.0

### Minor Changes

- Add docs about link usage to sd-button. _[`#2083`](https://github.com/solid-design-system/solid/pull/2083) [`bee2d16`](https://github.com/solid-design-system/solid/commit/bee2d1688026dad731604c908a6b2ddaea899273) [@mariohamann](https://github.com/mariohamann)_

## 1.12.25

### Patch Changes

- Fixed code examples for `sd-step` in `sd-step-group` showing state attributes _[`#2081`](https://github.com/solid-design-system/solid/pull/2081) [`09a6d16`](https://github.com/solid-design-system/solid/commit/09a6d16a453ccaacecd1df5365887842e51aa3e1) [@mariohamann](https://github.com/mariohamann)_

## 1.12.24

### Patch Changes

- Unskip remaining a11y tests. _[`#2023`](https://github.com/solid-design-system/solid/pull/2023) [`62d44e4`](https://github.com/solid-design-system/solid/commit/62d44e4b6456a78c1c2dec936eac7dd33cf7b712) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.12.23

### Patch Changes

- Fix `sd-teaser` screenshot tests a11y issues. _[`#1997`](https://github.com/solid-design-system/solid/pull/1997) [`1c13853`](https://github.com/solid-design-system/solid/commit/1c138533f7aa444def6c0ae1f0d3cd94bb9492b3) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.12.22

### Patch Changes

- Fix `sd-list` and `sd-prose` a11y issues. _[`#2005`](https://github.com/solid-design-system/solid/pull/2005) [`b592253`](https://github.com/solid-design-system/solid/commit/b5922538fe376701b1bafc58f9e09f43eaf40361) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.12.21

### Patch Changes

- Fix a11y tests in `sd-header` screenshots tests by adding missing label. _[`#2001`](https://github.com/solid-design-system/solid/pull/2001) [`e58ceba`](https://github.com/solid-design-system/solid/commit/e58ceba94428662ae13ef4e2ef0b3e80977a0d6a) [@smfonseca](https://github.com/smfonseca)_

  In some cases (eg. Combination test) the components are added together in the same context, therefore we skip tests for the following two rules: `landmark-no-duplicate-banner` and `landmark-unique`.

## 1.12.20

### Patch Changes

- Fix `sd-select` a11y tests in screenshot tests by adding missing labels. _[`#2004`](https://github.com/solid-design-system/solid/pull/2004) [`f44f18f`](https://github.com/solid-design-system/solid/commit/f44f18f83266cfadd40a7d69a4cb10804ba6d2a9) [@smfonseca](https://github.com/smfonseca)_

## 1.12.19

### Patch Changes

- Fix `sd-quickfact` a11y on screeshot tests and fix mouseless test. _[`#1996`](https://github.com/solid-design-system/solid/pull/1996) [`c14d943`](https://github.com/solid-design-system/solid/commit/c14d9434673905862ef6f9740af55f878183820f) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.12.18

### Patch Changes

- Fix `sd-textarea` a11y tests by adding missing label in screenshot tests. _[`#2003`](https://github.com/solid-design-system/solid/pull/2003) [`06d0802`](https://github.com/solid-design-system/solid/commit/06d0802d5f42039414caff32ff8f36848904a7c6) [@smfonseca](https://github.com/smfonseca)_

## 1.12.17

### Patch Changes

- Unskip a11y test and add missing button name in `slots` screenshot test. _[`#1992`](https://github.com/solid-design-system/solid/pull/1992) [`824b95d`](https://github.com/solid-design-system/solid/commit/824b95d64150f053e180d67a09b44513aacd2477) [@smfonseca](https://github.com/smfonseca)_

## 1.12.16

### Patch Changes

- Fix `sd-dropdown` screenshot tests a11y issue. _[`#1990`](https://github.com/solid-design-system/solid/pull/1990) [`15d594a`](https://github.com/solid-design-system/solid/commit/15d594a94645308f38fb0aa362ea5831a2f925b6) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.12.15

### Patch Changes

- Fix `sd-map-marker` a11y issues by setting the label attribute. _[`#1991`](https://github.com/solid-design-system/solid/pull/1991) [`6800cd7`](https://github.com/solid-design-system/solid/commit/6800cd77873a3f03e71229a51acfe908c2749f9a) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.12.14

### Patch Changes

- Unskip a11y tests and add missing label in `custom icon` screenshot test for `sd-scrollable`. _[`#1972`](https://github.com/solid-design-system/solid/pull/1972) [`fbe0cca`](https://github.com/solid-design-system/solid/commit/fbe0cca956658fe9e67fc097e7e801dff7ab1de2) [@smfonseca](https://github.com/smfonseca)_

## 1.12.13

### Patch Changes

- Improved `sd-drawer` accessibility. _[`#1943`](https://github.com/solid-design-system/solid/pull/1943) [`f1197c5`](https://github.com/solid-design-system/solid/commit/f1197c5a777a2b330b5773eb3deef83bcda8c32e) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Add labels to stories.

  Improved slots color contrast by adding a darker shade to the border and text color.

## 1.12.12

### Patch Changes

- Add missing `alt` attribute in the `sd-video` default story and unskip a11y tests. _[`#1971`](https://github.com/solid-design-system/solid/pull/1971) [`cb043bf`](https://github.com/solid-design-system/solid/commit/cb043bfb3b3a4dc2af443d78979c44cd00b93995) [@smfonseca](https://github.com/smfonseca)_

## 1.12.11

### Patch Changes

- Improved `sd-step-group` and `sd-step-group template` accessibility. _[`#1966`](https://github.com/solid-design-system/solid/pull/1966) [`c49e5f8`](https://github.com/solid-design-system/solid/commit/c49e5f8bd1999ed26f75551b4d41f7d82da947a6) [@auroraVasconcelos](https://github.com/auroraVasconcelos)_
  - Add aria label to all stories.

  Improved `sd-step` accessibility.
  - Skipped `aria-required-parent` violation in accessibility automatic tests. This test is not relevant in this context since we only want to show the isolated component and not in the context of its real use which would be wrapped in a `sd-step-group` component.

## 1.12.10

### Patch Changes

- Unskip a11y tests on `sd-accordion-group` and fix mouseless story exception. _[`#1988`](https://github.com/solid-design-system/solid/pull/1988) [`b002021`](https://github.com/solid-design-system/solid/commit/b0020217ca66183bec609c8bf8af783e718fc8c7) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.12.9

### Patch Changes

- Fix `sd-carousel` screenshot test regression. _[`#1989`](https://github.com/solid-design-system/solid/pull/1989) [`5e1e882`](https://github.com/solid-design-system/solid/commit/5e1e8824c1e6f9addc47f21f445cfe7e7a67b6bc) [@paulovareiro29](https://github.com/paulovareiro29)_

## 1.12.8

### Patch Changes

- Improve `sd-carousel` a11y: _[`#1935`](https://github.com/solid-design-system/solid/pull/1935) [`1c54e1c`](https://github.com/solid-design-system/solid/commit/1c54e1ce286f64a7ad7f575918b9952961938646) [@paulovareiro29](https://github.com/paulovareiro29)_
  - Improve template a11y by adding the attributes `role="region"` and `aria-label`.
  - Add accessibility hint regarding `role="region"` and `aria-label`.
  - Fix inverted stories slot colors to improve a11y.

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
