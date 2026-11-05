---
name: icon-maintenance
description: Maintain SDS icons using the existing CELUM changelog and Figma export scripts. Use for CELUM-to-Figma updates, Figma-to-CELUM exports, or bundled internal/status icons, not general component styling.
---

# Icon Maintenance

Run commands from the repository root. Read the current [icon contribution guide](../../../packages/components/CONTRIBUTING.md#icons-inside-components) and the selected workflow before acting. Reuse its scripts; do not introduce a Figma CLI/plugin dependency or a second icon pipeline.

## Select the Direction

| Request                                          | Existing workflow                                                             | Result                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Bring published CELUM changes into Figma         | [CELUM changes](../../../.github/workflows/fetch-celum-changelogs.yml)        | Changelog PR and ZIP of added/modified SVGs plus `report.json` |
| Prepare approved Figma icons for CELUM           | [Figma export for CELUM](../../../.github/workflows/download-celum-icons.yml) | Export ZIP only; no source changes or PR                       |
| Update bundled component/status icons from Figma | [Bundled icons](../../../.github/workflows/update-bundled-icons.yml)          | Draft PR updating generated libraries and a patch changeset    |

If the direction is ambiguous, resolve it before running a command. Ask permission before dispatching a workflow: the CELUM and bundled workflows can commit, push, and open PRs. Do not dispatch them merely to verify this skill.

## CELUM to Figma

1. Prefer the current automation PR and its linked ZIP. The workflow checks daily at 06:00 UTC. Request permission before manually running it on the base branch, not its automation PR branch.
2. Read the changed changelog JSON, all added/modified/removed icons, and `report.json`, including unavailable downloads. The ZIP contains current SVGs for still-unmerged changes, not historical versions. Artifacts expire after 14 days; rerun the workflow to refresh them.
3. Design updates the corresponding Figma icons and affected brand variants while preserving component names. Do not assume a naming mismatch means an icon is missing, or infer a replacement from the name alone.
4. Design and Development jointly verify Figma against the current PR before merging. Recheck after further automation updates. Do not merge as a changelog-only update or postpone Figma changes to a follow-up.

For an explicitly requested local refresh, first run:

```sh
pnpm --dir packages/tokens test:icons-celum
```

Then run the existing scripts, understanding that the first updates tracked changelog data and the second downloads review artifacts:

```sh
pnpm --dir packages/tokens fetch:icons-celum
pnpm --dir packages/tokens download:icons-celum-changes
```

Read [the downloader](../../../packages/tokens/scripts/celum/download-changed-icons.mjs) for its output directory and environment options. Do not invent a dry-run flag. Inspect the resulting diff and report; never commit downloaded SVGs or ZIPs. These scripts do not edit Figma. Follow the workflow's changelog-data scope rather than manually rebuilding an icon search index.

## Figma to CELUM

1. Confirm that the Figma changes are approved. Prefer the existing export workflow when a downloadable ZIP is wanted.
2. For a requested local export, run:

   ```sh
   pnpm --dir packages/components test:figma
   pnpm --dir packages/components fetch:figma --target=celum
   ```

3. Inspect `packages/components/.figma-icons-celum/celum/` and its report. The output contains `vb`, `bbbank`, and `sparda`, not the UI catalog or bundled status assets. Public collections missing a brand variant are skipped and reported; missing required internal variants stop export. Resolve warnings rather than silently accepting missing icons.
4. CELUM maintainers review and upload manually. Exporting does not publish to CELUM or its CDN; the external CELUM publishing schedule is outside this repository's control. Verify that tracked source files remain unchanged.

## Figma to Bundled Icons

1. Read [the configuration](../../../packages/components/scripts/figma/config.js) and [exporter](../../../packages/components/scripts/figma/fetch-icons.js). Use `internalNames` for approved runtime names and `figmaInternalToCode` for Figma-name-to-runtime-name mappings. Request review for allowlist changes; do not add internal icons without a component need and UI/VB/BB/SP Figma variants.
2. Check the planned inventory before updating generated libraries:

   ```sh
   pnpm --dir packages/components test:figma
   pnpm --dir packages/components fetch:figma --target=bundled --dry-run
   ```

   The dry run still contacts Figma and needs credentials. It is not an offline test.

3. With authorization for local generated-file changes, run:

   ```sh
   pnpm --dir packages/components fetch:figma --target=bundled
   pnpm --dir packages/components ts.verify
   pnpm --dir packages/components test.single.ci icon
   ```

4. Review `library.internal.ts` and `library.status.ts`, add a component patch changeset when they change, and inspect affected components in light/dark themes. Use `library="_internal"` for approved internal icons, with an accessible label when needed. Do not hand-edit SVG strings or use the obsolete `library="system"` pipeline.
5. Run required repository verification before submitting. If using the workflow instead, confirm the intended branch; its draft PR may not automatically trigger required checks. Arrange verification before merge. CELUM theme exports remain a separate operation.

## Credentials and Completion

- Use the repository's Node.js/pnpm versions. Local exports read `FIGMA_TOKEN` from the environment or ignored `packages/components/.env`; Actions use the configured secret. Never request tokens in chat or print/commit them.
- If access or a tool is unavailable, state the missing prerequisite and stop that operation. Do not substitute browser automation or fabricate Figma changes.
- Report the selected direction, executed checks, changed files/artifacts, warnings, and pending Design/Development or CELUM actions. Do not claim Figma edits, publishing, or joint approval happened without evidence.
