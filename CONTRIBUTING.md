# Contributing to Solid Components

## Table of Contents

- [Contributing to Solid Components](#contributing-to-solid-components)
  - [Table of Contents](#table-of-contents)
  - [What We Do for Our Users](#what-we-do-for-our-users)
    - [We Provide Flexibility](#we-provide-flexibility)
    - [We Avoid Breaking Changes](#we-avoid-breaking-changes)
    - [We Document Extensively and Consistently](#we-document-extensively-and-consistently)
    - [We Make Migration Easy](#we-make-migration-easy)
    - [We Ensure Icon Availability](#we-ensure-icon-availability)
    - [We Emphasize Testing](#we-emphasize-testing)
    - [We Monitor Performance](#we-monitor-performance)
    - [We Ensure Accessibility](#we-ensure-accessibility)
  - [What We Do for Ourselves](#what-we-do-for-ourselves)
    - [We Focus on Maintainability](#we-focus-on-maintainability)
    - [We Only Use TailwindCSS or "Solid Styles"](#we-only-use-tailwindcss-or-solid-styles)
    - [We Enforce Security](#we-enforce-security)
    - [We Track TODOs](#we-track-todos)
    - [We Prepare Tickets for the Refinement](#we-prepare-tickets-for-the-refinement)
  - [Git + GitHub](#git--github)
    - [Referencing People](#referencing-people)
    - [Pull Requests](#pull-requests)
      - [Feature-Check-In Meeting to Prepare Pull Requests](#feature-check-in-meeting-to-prepare-pull-requests)
      - [Assignees and Reviewers](#assignees-and-reviewers)
      - [Commit Messages](#commit-messages)
      - [Review Comments](#review-comments)
      - [Special commands/suffixes](#special-commandssuffixes)
      - [Squash and Merge Your Changes](#squash-and-merge-your-changes)
    - [Chromatic](#chromatic)
  - [Release Process](#release-process)
    - [Standard Release from Main Branch](#standard-release-from-main-branch)
    - [Feature Branch Deployment](#feature-branch-deployment)
    - [Docs Deployment](#docs-deployment)

## What We Do for Our Users

### We Provide Flexibility

- **User Story**: As a developer using the Solid Design System, I want to build diverse apps for B2B and B2C customers without always asking the Solid team for help.
- **Actions**:
  - Provide flexibility to reduce dependencies on the Solid team.
  - Use [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) to allow for easy element nesting ([Lit: Working with Shadow DOM](https://lit.dev/docs/components/shadow-dom/))
  - Use [parts](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part) to allow external manipulation of CSS.
  - Use [events](https://lit.dev/docs/components/events/) to make critical information available outside of a component.

### We Avoid Breaking Changes

- **User Story**: As a developer, I want to trust Solid's updates and have less manual work when updating.
- **Actions**:
  - We commit to careful planning to avoid future breaking changes.
  - Ensure stable and reliable updates that align with semantic versioning.

### We Document Extensively and Consistently

- **User Story**: As a developer, I want to be able to use the Solid Design System without having to ask for help and understand how the component works in different states.
- **Actions**:
  - Provide stories for props, slots etc. in Storybook
  - Props, events, slots, parts and CSS Custom Properties should be documented in the component's source code using [JSDoc](https://jsdoc.app/). Make sure to include a description, type, and default value for each.
  - Use `.slot` and the additional utility classes classes defined in `packages/components/.storybook/preview-head.html` to mock the slot element used in Figma. These classes are integrated into the Storybook header and should exclusively be used in Storybook. Check out the 'Slot' stories for components like 'sd-dropdown' to see how these classes are used.

### We Make Migration Easy

- **User Story**: As a developer, I want to be able to migrate from the Component Library to the Solid Design System without having to ask for help.
- **Actions**:
  - Provide migration guides for each new component in the Solid Design System, representing an old component from the Component Library. See [Components](./DEVELOPER_STARTING_GUIDE.md#components) chapter (13.) for more details.

### We Ensure Icon Availability

- **User Story**: As a developer, I want to be sure that icons, like the 'chevron-up' in `sd-accordion`, always show up.
- **Actions**:
  - Include any icons necessary for development in `components/icon/library.system.ts`.
  - Before doing so, [compress them and remove fills](https://jakearchibald.github.io/svgomg/) for consistency and ease of styling.
  - Minimize the attributes in the SVG tag. Usually only `xmlns`and `viewbox`are necessary.
  - You can then use `sd-icon` by specifying `library=“system”` and setting `name=“your-key”`.

### We Emphasize Testing

- **User Story**: As a developer, I want to ensure that components don't break.
- **Actions**:
  - Regularly write and update end-to-end tests.
  - Create visual stories in Storybook to detect and fix any visual issues.
- **Tips**:
  - Motto: “Test the behavior, not the implementation.” Write tests that verify your components meet the expected requirements and specifications, ensuring they function correctly from the user's perspective. Don’t get too tied up trying to test all the technical details.
  - Shoelace tests are included in the earmarked `/_components` folders, start with them and adapt as needed.
  - Write tests for any newly added functions and ask yourself if the Jest semantics represent a thorough analysis of the code.
  - Look at the stories provided in the Shoelace docs as a guideline and adapt them to use the custom helpers in our repository: `packages/components/scripts/storybook/helper.ts` (e.g. we sometimes present multiple attributes side by side in a grid format using the `axis` key). See [Storybook Stories](./DEVELOPER_STARTING_GUIDE.md#storybook-stories) for more details.
  - Use the existing stories for inspiration, the final result should read top to bottom and bring a complete outsider to your level of understanding.

### We Monitor Performance

- **User Story**: As a developer, I want a low bundle size and high performance.
- **Actions**:
  - Continuously monitor and optimize the performance and bundle size.
  - Make feature and component decisions with performance in mind.

### We Ensure Accessibility

- **User Story**: As a developer, I want to ensure components are accessible.
- **Actions**:
  - Use semantic HTML elements, ARIA Landmarks, Roles, States, and Properties in Components and Storybook stories.
  - Implement tests and "mouseless" stories to ensure that interactive elements can be navigated and activated using the keyboard (tabindex) and ensure the correct sequence of navigation.
  - Use descriptive text, labels, and instructions to provide context for non-text content.
  - Ensure that dynamic content changes are announced to screen readers with ARIA live regions.
- **Tips**:
  - Shoelace is extensive and accessible. Take note of their use of the concepts and build out from there.

## What We Do for Ourselves

### We Focus on Maintainability

- **User Story**: As a maintainer of the Solid Design System, I want our codebase and output to stay maintainable.
- **Actions**:
  - Focus on enabling users to easily build features themselves.
  - Provide powerful customization options like slots, events, and parts.

### We Only Use TailwindCSS or "Solid Styles"

- **User Story**: As a maintainer of the Solid Design System, I want to have a common style for writing CSS and stay in sync with design.
- **Actions**:
  - Use TailwindCSS (which are connected to design tokens) for all Solid components.
  - Convert BEM-style CSS to TailwindCSS utility classes where possible.
  - Utilize IDs or part selectors for any custom CSS needs.
  - Use `@apply` inside `css` tagged template literals to generate CSS, but do not use arbitrary values like `mt-[var(--spacing-xxl)]` there (!), as this increases the bundle size of the main TailwindCSS file. Add those custom values as plain CSS outside the `@apply` directive

### We Enforce Security

- **User Story**: As a maintainer of the Solid Design System, I want to ensure that the codebase is secure for us, our users and end users.
- **Actions**:
  - Before integrating a new package, research it online, check for security advisories and community feedback, and assess its maintenance status and compatibility.
  - We highly recommend to use websites e.g. https://nvd.nist.gov/vuln/search to check a dependency/package before adding them to the project.

### We Track TODOs

- **User Story**: As a maintainer of the Solid Design System, I want to ensure that the codebase is clean and that TODOs are tracked.
- **Actions**:
  - Always create a ticket for a TODO.
  - In addition (!) add `// TODO:` comments to give future developers bug-related hints.
  - Avoid the accumulation of unresolved problems.
  - Comment out temporarily non-functional code (eg. tests that don't work under current conditions) along with a TODO.
  - Code that requires a rework should not be commented out but completely removed from the code base.
  - If the code is essential for a future fix, please add it to a ticket that explains the problem.

### We Prepare Tickets for the Refinement

- **User Story**: As a `Product Team` (@solid-design-system/product-team) member of the Solid Design System, I want to ensure a effective and efficient refinement process, by preparing each ticket with the necessary information during a weekly pre-refinement meeting.
  > Note: To ensure an effective and efficient meeting, the following parties need to be attending: development-lead, design-lead, brand-lead, architecture-lead and product owner.
- **Actions**:
  - Decide if the feature will be implemented or not.
  - Define the scope of the feature.
  - Define the development basis for the feature (shoelace component, new component, etc.).
  - Define necessary changes to the Figma component to match the development basis.
  - Add the necessary information to the ticket description in the way, that it is understandable (without context) and explicit for the whole team.
  - Make sure all links are up to date.
  - Note open questions to be answered during the implementation towards design OR development in the respective section in the ticket description.

## Git + GitHub

### Referencing People

We don't mention the names of internal or external colleagues in issues or other documents hosted on GitHub, as our project is entirely public and can be accessed by anybody. Tagging/mentioning colleagues using their GitHub profiles is fine, as they decided to be visible on GitHub.

### Pull Requests

#### Feature-Check-In Meeting to Prepare Pull Requests

To enhance our review process, we introduced a "Feature-Check-In" meeting. This meeting aims to address conceptual and logical queries, resolve any miscommunication between development and design, and decrease the number of comments in a PR.

The meeting adheres to a few straightforward rules:

- The meeting is an **_optional_** tool to enhance PRs and should be utilized only when required, such as for large or complex new features, or a feature where certain questions were left open for implementation.
- When a developer believes they have completed all they can and the feature is in a "presentable" state, a meeting should be scheduled with the development lead (@mariohamann) AND/OR design lead (@coraliefeil).
- Unless absolutely necessary, the meeting should not exceed 30 minutes.
- The outcomes of the meeting MUST be recorded in the ticket description.
- Once the developer has incorporated the feedback/results into the code changes, a PR should be opened for all other team members to review the modifications.

#### Assignees and Reviewers

When opening a PR, please make sure all checkboxes under "Definition of reviewable" are checked.
As next step, please assign the reviewer needed for the PR.
The SDS uses the following process to assign PRs and request reviews (due to handling on the project board in GitHub).
_**The reviewer section from GitHub is not used for assigning reviewers. Instead, the following process is used:**_

1. The author of the PR needs to assign themselves
2. The author of the PR needs to assign the reviewer needed for the PR (according to the rules below)
3. Reviewers will unassign themselves after they have reviewed the PR
4. If changes are requested, the author needs to reassign the reviewer after the changes are made and pushed

> Note: If UI changes needs to be reviewed in Chromatic, the reviewer need to add a comment to the PR, stating if the changes are approved or new changes are requested. This is mandatory as the Chromatic approval will not send any notifications.

Assigning reviewers follows a few rules:

1. **New Feature PRs:** All current members from the SDS team need to be assigned to the PR (@solid-design-system/current-sds-team).
2. **Bug Fix or Docs PRs:** Minimum 1 developer from the SDS dev-core-team (@solid-design-system/core-development) needs to be assigned to the PR. Designers need to be added separately if visual changes are made.
3. **CI/CD PRs:** Minimum 1 out of @yoezlem, @mariohamann or @karlbaumhauer needs to be assigned to the PR.

#### Commit Messages

We use Semantic Release to automate versioning and publishing based on commit messages, ensuring consistent release practices. Pull Request titles are especially important for semantic versioning, so follow these guidelines when writing them as well.

Use the following semantic versioning in your commit messages (`feat`, `fix`, `perf`, `docs`, `chore`, `ci`).

```
Commits with a breaking change will be associated with a major release.
Commits with type 'feat' will be associated with a minor release.
Commits with type 'fix' will be associated with a patch release.
Commits with type 'perf' will be associated with a patch release.
```

**Remark:** Always think from the perspective of the person using our packages/components – will the final distribution/bundle change? If so, then it's always `feat` `fix` or `perf` – if not, it's one of the others. Please reach out if you're unsure.

#### Review Comments

The primary objective of this "rule-set" is to eliminate comments that lack any code-related context, thereby minimizing the workload for the PR author during feedback implementation.

- Developers should restrict their feedback to inline comments during code reviews.
- Comments pertaining to the UI should be included as inline comments in the relevant file (for instance, "your story is not functioning", should be placed as an inline comment in the review section of the component.stories.ts file).
- Designers should exclusively use Chromatic for providing feedback on alterations.
- General comments in the PR should be avoided as much as possible. If they are unavoidable, they should only include process-related information that doesn't require a response (for example, "Completed my UI-review, please re-assign to me once changes have been made").

#### Special commands/suffixes

`[skip ci]`

The `[skip ci]` command is a special command used in commit messages to prevent a CI (Continuous Integration) build from being triggered. This command is recognized by our GitHub Actions. You might use this command when you're making changes that don't affect the codebase, such as updating the README or other documentation, and you don't want to consume CI resources for these changes.

However, using `[skip ci]` should be done with **_caution_**. If it's used inappropriately, it could lead to situations where code is merged without being properly tested, which could introduce bugs into the codebase. For example, if you mistakenly believe a code change won't affect the build and use `[skip ci]`, you might bypass important checks and tests that could catch issues.

> Note: It's recommended to use `[skip ci]` sparingly and only when you're absolutely certain that your changes don't require a build or test run.

`[skip chromatic]`

Orientated at [GitHub's commit commands to skip workflows](https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs), we added a special command to skip Chromatic actions in PRs and commits on main to save screenshots. This should be used with care, as it is only needed in cases where the visual appearance of the components is not affected. For example, when updating the README or the CI configuration.

> Note: This command is only available for PRs and commits on main. It currently doesn't work for single commits on a PR.

#### Squash and Merge Your Changes

Always perform a Squash and Merge when merging. This keeps the Git history clean by combining your commits once you are done with a feature/component.

- Remember to include the appropriate prefix (e.g., feat: ✨) at the beginning of the squash message.
- Please rewrite or delete your additional commit message, if it's really long.
- Double-check if `[skip ci]` or similar was used anywhere as this may break our release flow.
- Double-check if the PR title could be using a `[skip chromatic]` tag. See [Special command [skip chromatic]](#special-commandssuffixes) for more details.

### Chromatic

You can take a look at tests on Github. Users might be required to log in to [Chromatic](https://www.chromatic.com/). Make sure to login using your GitHub account to avoid any errors and access the checks related to the Pull Request.

## Release Process

> Note: To avoid cluttering the commit history and losing track of the GitHub and Azure DevOps context, we have relocated Azure pipelines to the [Azure DevOps Pipeline Repository](https://dev.azure.com/Union-Investment/SolidDesignSystem/_git/SolidDesignSystem-Pipelines?path=/&version=GBmain). The release and deployment process remains unchanged as outlined below.

### Standard Release from Main Branch

1. On push to the main branch, the release workflow is triggered. This workflow integrates with semantic release.
2. Once the release workflow is completed, it triggers the 'sync-to-azure' workflow. This workflow ensures synchronization between the main branch on GitHub and the main branch in the Azure DevOps repository.
3. On Azure, the 'deploy-to-cdn.yml' pipeline is automatically triggered. This pipeline deploys the code and Storybook to the SDS CDN.

> Note: The pipeline checks the last commit and sets one of 3 possible deployment type. This step ensures that a new version is deployed only when there is a new release and only the docs are deployed if there are docs-only changes. Otherwise, it would overwrite the current version with new code. The 3 types are:
>
> - `code`: This type is set when the last commit message starts with `chore(release/components):` (coming from a semantic-release version bump) and it deploys everything to the CDN
> - `docs`: This type is set when the last commit message starts with `docs:` and deploys only the Storybook to the CDN
> - `none`: This type is set when the last commit message starts with anything else and skips deployment to the CDN.

4. For the main branch, the pipeline utilizes the 'push-to-storage-main.template.yml' template to deploy the code to the CDN. This template deploys the code into different folders to provide wildcard URLs:

- It deploys into a new version folder (current version from package.json).
- It deploys into a latest version / patch-wildcard folder called `x.x.x`
- It deploys into a patch wildcard folder called `[1st-version-number].x.x`
- It deploys into a minor wildcard folder called `[1st-version-number].[2nd-version-number].x`

5. All the respective CDN folders are purged from the old code.

### Feature Branch Deployment

> Note: This is only intended for testing purposes. **_Do not use it in production._**
> The following limitations apply to feature branch deployments:

> 1. Feature branches are not stable, and their versions may conflict with other versions from other feature branches or the main branch. This may lead to unexpected behavior while using versioned components.
> 2. The feature must be completed and merged to the main branch of the SDS repository before it can be used in any other production environment. This means the feature cannot be added to the SDS library if it is not ready before the go-live date in your own project environment.

Workflow:

1. To deploy a feature branch, trigger the 'sync-to-azure' workflow [manually](https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow), with your feature branch as workflow target.
2. On Azure, the 'deploy-to-cdn.yml' pipeline is automatically triggered, following a similar procedure as described above. The only difference is that it uses the 'push-to-storage-feature.template.yml' template and deploys the code into a folder with the name of the branch. The branch name is manipulated to replace all '/' with '\_' to ensure a valid folder name.

> Note: There is no differentiation between deployment type for feature branches. Therewith the type `code` will be used for all feature branch deployments and updates.

### Docs Deployment

To perform a documentation-only deployment, make a commit on main with `docs: ` prefix. See the `Note` under [Standard Release from Main Branch](#standard-release-from-main-branch) for more details.
