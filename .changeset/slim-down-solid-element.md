---
"@solid-design-system/components": minor
---

perf: slim down SolidElement base class to reduce bundle size

Removed rarely-used features from the `SolidElement` base class (inherited by all 59 components) and moved them to opt-in modules, significantly reducing the bundle size for consumers who import individual components.

**What changed:**

- Removed `dir` and `lang` reactive properties (unused by any component; native HTML attributes still work)
- Removed `token()` method and `animate.ts` import — moved to standalone `token()` utility in `src/internal/token.ts` (used by 3 components: tag, video, audio)
- Removed `onThemeChange` lifecycle hook — moved to self-managed listeners in the 2 consuming components (icon, audio)
- Removed CSS `@import` for `interactive.css`, `headline.css`, `paragraph.css` — moved to importable modules in `src/internal/shared-styles.ts` (only added by the ~14 components that actually use them)
- Updated Storybook Vite config to process the new `shared-styles.ts` file with Tailwind

**What remains in SolidElement:**

- Tailwind `--tw-*` CSS variable resets (needed by all components)
- `box-sizing` reset and `[hidden]` rule
- `emit()` method (used by 20+ components)
