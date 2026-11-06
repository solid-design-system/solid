# Adapting a Shoelace Component

Use this reference only for an explicitly requested Shoelace adaptation. Read the [existing project guidance](../../../../packages/components/CONTRIBUTING.md#adapting-a-shoelace-component) and identify the upstream component and revision before copying. Preserve applicable upstream license notices.

1. Review the complete upstream component folder, including its tests, styles, dependencies, and accessibility behavior. Do not copy just the render method or overwrite an existing SDS component wholesale.
2. Scaffold a genuinely new SDS component using the current generator. Use its actual `packages/components/src/components/{name}/` destination, not the obsolete `_components` path from early drafts. Adapt the upstream source and tests into this structure.
3. Rename relevant `sl-*`/Shoelace component, event, type, and import names to their SDS equivalents. Reuse existing SDS controllers such as `FormControlController`; do not duplicate them.
4. Compare the requested SDS/Figma specification with upstream behavior. Remove unsupported design options only deliberately, retain needed technical behavior, and implement specified differences. Do not assume every upstream option belongs in SDS.
5. Convert styling to the project's Tailwind-first conventions while preserving layout, keyboard focus, interaction states, motion, and accessibility details. Use direct CSS variables where SDS requires them.
6. Replace upstream custom-element registration with the SDS wrapper, add direct component imports, and maintain public JSDoc and export registration. Follow the main skill's conventions reference.
7. Adapt tests to SDS defaults, names, imports, and events. Run `pnpm --dir packages/components test.single.ci <name>` with the actual group name, not the removed `test.component` command. Cover lost behavior or fixes with regression tests.
8. Complete SDS stories, overview documentation, changeset, and any legacy-library or version migration guide. Document meaningful differences rather than treating upstream parity as the acceptance criterion.
