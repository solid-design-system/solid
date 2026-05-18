# Issue Template Structures

This reference documents the exact markdown structure of each GitHub issue template used in the Solid Design System. Use these to parse issue bodies into structured data.

## New Component Issue

Template: `.github/ISSUE_TEMPLATE/new-component-issue-template.md`
Labels: `🙌 Epic`
Title pattern: `feat: ✨ add sd-[COMPONENT_NAME]`

```markdown
## User Story
As a [PERSONA] of the Solid Design System, I would like to [REQUIRE], as well as [FURTHER_REQUIREMENT], so that [PRODUCT_VALUE], and [FURTHER_PRODUCT_VALUE].

## Documentation
[LINK TO FIGMA]
## Hand-off
[LINK TO FIGMA]

### Components detailed requirements
#### Props
| Status | Name | Type | Default | Description |
| --- | --- | --- | --- | --- |
| <ul><li>[ ] </li></ul> | `name` | `type` | `default` | description |

#### CSS-Properties
  - [ ] `name` - description

#### Parts (besides the shoelace parts)
  - [ ] `name` - description

#### Slots
  - [ ] `name` - description

#### Stories
  - [ ] `default` - shows the components default state
  - [ ] `slots` - shows the components slots
  - [ ] `parts` - shows the components parts

#### Templates
  - [ ] `name` - description

### Open Questions towards design
- [ ] Question1

## Subtasks
- [ ] Design_implementation_task
- [ ] Development_implementation_task
- [ ] Design_release_task

## DoR
- [ ] Item has business value
- [ ] All subtasks have been estimated by the team
- [ ] Item is clear and well-defined
- [ ] Item dependencies have been identified

## DoD
- [ ] All subtasks have been closed
```

## Bugfix Issue

Template: `.github/ISSUE_TEMPLATE/fix-issue-template.md`
Title pattern: `fix: 🤔 [BUG_DESCRIPTION]`

```markdown
## Current behavior

## Expected behavior

## Steps to reproduce

## Technical Information

## DoR
- [ ] Item has business value
- [ ] Item has been estimated by the team
- [ ] Item is clear and well-defined
- [ ] Item dependencies have been identified
```

## Simple Dev Feature Issue

Template: `.github/ISSUE_TEMPLATE/simple-dev-feature-template.md`
Labels: `🔧 code`
Title pattern: `feat[dev]: ✨ [FEATURE_NAME]`

```markdown
## User Story
As a [PERSONA] of the Solid Design System, I would like to [REQUIRE], as well as [FURTHER_REQUIREMENT], so that [PRODUCT_VALUE], and [FURTHER_PRODUCT_VALUE].

### Suggested Solution

### Technical Information

## DoR
- [ ] Item has business value
- [ ] Item has been estimated by the team
- [ ] Item is clear and well-defined
- [ ] Item dependencies have been identified
```

## Development Subtask

Template: `.github/ISSUE_TEMPLATE/subtask-template-dev.md`
Labels: `🔧 code, Subtask`
Title pattern: `feat[dev]: ✨ [SUBTASK_DESCRIPTION]`

```markdown
## Description
This tasks describes the Figma implementation for: EPIC_TASK

### Open Questions towards design
- [ ] Question1

## DoR
- [ ] Item has been estimated by the team
- [ ] Item dependencies have been identified and documented
```
