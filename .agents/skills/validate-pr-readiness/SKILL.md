---
name: validate-pr-readiness
description: Review SDS changes before opening a PR or requesting review, checking documentation, regressions, visual coverage, changesets, conventions, verification evidence, and PR template checklists. Use when preparing or updating PR descriptions. Includes uncommitted work; not an instruction to commit, push, or create a PR.
---

# Validate PR Readiness

## Inspect the Actual Change

1. Read [the PR template](../../../.github/pull_request_template.md), root/package contribution guidance, and [the quality gate](../../../.github/workflows/check-pr.yml). Establish the intended PR base from the PR/task; otherwise use the configured Changesets base branch and state that assumption. Do not assume every feature branch targets `main`.
2. Inspect committed changes since the merge base together with staged/unstaged/untracked work. Read-only commands from root, after assigning the verified base to `base_ref`:

   ```sh
   git status --short
   merge_base=$(git merge-base "$base_ref" HEAD)
   git diff --name-status "$merge_base" --
   git diff "$merge_base" --
   git ls-files --others --exclude-standard
   ```

   Stop if the base cannot be resolved; do not continue with a guessed empty diff. `git diff` against the merge base includes the current tracked working tree. Read relevant untracked text files separately and account for renamed/deleted files. Preserve user edits and do not stage files or switch branches.

3. Identify affected runtime APIs, CSS, stories, docs, build configuration, and tests. Classify release and visual impact from the diff, not filenames alone.

## Check Applicable Requirements

| Check               | Evidence                                                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public docs         | Updated property/slot/part/event/custom-property JSDoc and accurate affected stories/overviews                                                      |
| Compatibility       | Removed/renamed APIs, changed defaults or behavior assessed; correct legacy/version migration guide when needed                                     |
| Behavior regression | Focused tests cover the changed user behavior; component tests register the built bundle                                                            |
| Visual regression   | Existing or updated screenshot stories cover affected layouts/states/themes, including UI-affecting MDX, CSS, templates, tokens, and render changes |
| Release impact      | Correct package/bump/summary or justified non-release/empty changeset under [create-changeset](../create-changeset/SKILL.md)                        |
| Conventions         | SDS custom-element wrapper, direct dependency imports, reflected-property exceptions, token/CSS rules, and accessible interactions                  |
| PR title            | Actual or intended title follows [the title workflow](../../../.github/workflows/lint-pr.yml): `fix`, `feat`, `docs`, `chore`, `ci`, or `perf`      |
| Required gates      | Commands and results for affected checks plus root `pnpm verify` before submission                                                                  |

Do not demand changed stories for a logic-only fix already represented correctly, a package release for repository-only guidance, or a migration guide for private refactoring. Check content and executed assertions: file presence is not a passing test.

## Prepare or Update the PR Description

Use the repository's PR template, preserving its headings, comments, and the order of applicable checklist items. Assess each item against the actual change:

- Be precise and concise: state what changed and why in a short summary with only essential bullets. Do not narrate the implementation process, enumerate every file, or explain routine details extensively.
- Leave local verification commands, test counts, build logs, and execution history out of the PR description; CI runs provide that evidence. Only include command/result details if the repository template explicitly requires them.
- Check an applicable item only when it is complete and verified; leave genuinely pending work unchecked.
- Remove non-applicable items or strike through their text, for example `- [ ] ~~Migration Guide is created/updated~~ — not applicable: no breaking changes`.
- Do not leave a non-applicable item as an ordinary unchecked task with only an appended "N/A" explanation, and do not check it as if work was completed. It must be removed or visibly struck through so it cannot be mistaken for outstanding work.
- When updating an existing PR, preserve unrelated description content while applying the requested edits.

## Chromatic and External Review

Inspect the actual intended PR title, not just the latest commit message. `[skip chromatic]` controls [the workflow](../../../.github/workflows/check-pr.yml); discuss it only after confirming no visual impact. Do not automatically add the flag or suggest it for all MDX/docs changes. Warn when the flag would hide relevant visual coverage and explain what needs verification.

Icon changes additionally follow [icon-maintenance](../icon-maintenance/SKILL.md): a CELUM changelog PR needs completed joint Design/Development Figma review, not only passing code checks. Bot-created PRs may require arranging checks that did not start automatically.

## Report

Run the cheapest relevant behavior check first, then the required gates. Report results concisely to the user, not as a verification transcript in the PR description. Distinguish **passed**, **failed**, **not run**, and **not applicable**; surface blockers and next actions without listing every successful check. Do not call a PR ready when required checks or approvals remain unverified. Report missing credentials/environment without exposing secrets. Do not commit, push, merge, or open a PR merely because this skill was invoked.
