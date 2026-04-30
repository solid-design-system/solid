---
name: read-issue-from-github
description: "Fetch a single GitHub issue by number with full metadata (body, comments, labels, project fields, assignees). Use for: reading issue details before implementation, getting issue spec for development, fetching bug report details, retrieving component requirements from an issue."
---

# Read Issue from GitHub

## When to Use

- A development agent needs to read a specific GitHub issue to understand what to implement
- Fetching the full issue body, labels, and project fields for a single issue
- Getting bug report details (steps to reproduce, expected/current behavior)
- Reading component specs (Props, Slots, Parts, CSS Properties) from an Epic issue

## Input

The caller provides `{ISSUE_NUMBER}` — the GitHub issue number (e.g. `123`).

## Procedure

### Step 1: Fetch the issue

> **IMPORTANT**: Do NOT use terminal commands, `gh` CLI, or any other fallback to fetch issue data. Only use the MCP tool.

Call the `mcp_github_issue_read` with:
- **method**: `get`
- **owner**: `solid-design-system`
- **repo**: `solid`
- **issue_number**: `{ISSUE_NUMBER}`

This returns the issue with title, body, labels, assignees, and state.

### Step 1.5: Fetch issue comments

Call `mcp_github_issue_read` with:
- **method**: `get_comments`
- **owner**: `solid-design-system`
- **repo**: `solid`
- **issue_number**: `{ISSUE_NUMBER}`

Parse the returned comments into a structured array. For each comment, extract:
- `author` — the commenter's login
- `created_at` — timestamp
- `body` — raw markdown body

If the issue has no comments, set the array to empty.

### Step 2: Fetch project fields (optional)

If the caller needs project board metadata (SP, Priority, Iteration, Status), use the **get-project-items-by-query** skill to query by the issue number. Otherwise, skip this step.

### Step 3: Parse the issue type

Detect the issue type from its labels and title prefix:

| Signal | Type |
|--------|------|
| Label `🙌 Epic` + title starts with `feat: ✨ add sd-` | New Component |
| Label `🙌 Epic` + label `style-components` | New Style Component |
| Title starts with `fix:` | Bugfix |
| Label `🔧 code` + title starts with `feat[dev]:` | Dev Feature |
| Label `🎨 figma` | Design Feature |
| Label `Subtask` + label `🔧 code` | Dev Subtask |
| Label `Subtask` + label `🎨 figma` | Design Subtask |
| Title starts with `docs:` | Documentation |
| Title starts with `chore:` or `ci:` | Maintenance |

### Step 4: Extract structured data

Based on the issue type, parse the issue body into structured sections. See the [issue template structures](./references/issue-template-structures.md) for the exact markdown structure of each issue type.

#### For New Component issues

Extract from the body:
- **User Story** — the "As a ... I would like to ..." section
- **Documentation link** — Figma URL
- **Props table** — parse the markdown table under `#### Props`
- **CSS Properties** — checkbox list under `#### CSS-Properties`
- **Parts** — checkbox list under `#### Parts`
- **Slots** — checkbox list under `#### Slots`
- **Stories** — checkbox list under `#### Stories`
- **Templates** — checkbox list under `#### Templates`
- **Open Questions** — under `### Open Questions towards design`
- **Subtasks** — checkbox list under `## Subtasks`

#### For Bugfix issues

Extract:
- **Current behavior** — section under `## Current behavior`
- **Expected behavior** — section under `## Expected behavior`
- **Steps to reproduce** — section under `## Steps to reproduce`
- **Technical Information** — section under `## Technical Information`

#### For Dev Feature issues

Extract:
- **User Story** — the "As a ... I would like to ..." section
- **Suggested Solution** — section under `### Suggested Solution`
- **Technical Information** — section under `### Technical Information`

#### For Dev Subtask issues

Extract:
- **Description** — section under `## Description`
- **Open Questions** — under `### Open Questions towards design`

### Step 4.5: Analyze comments for signals

Scan the comments array from Step 1.5 for information that supplements the issue body:

1. **Resolved questions** — Comments that answer items from the Open Questions section (look for quoted question text followed by an answer, or explicit "resolved" / "answered" language).
2. **Additional specs or decisions** — Comments containing tables, code blocks, or explicit decisions (e.g. "we decided to...", "let's go with...") that refine the original spec.
3. **Scope changes** — Comments that add, remove, or modify requirements after the issue was created.

Record these as `commentSignals` with:
- `resolvedQuestions` — list of Open Question items that appear answered in comments
- `decisions` — list of `{ author, summary, date }` for decisions found in comments
- `scopeChanges` — list of `{ author, summary, date }` for scope modifications

If no relevant signals are found, set `commentSignals` to `null`.

### Step 5: Return structured result

Return the parsed data to the caller in a structured format including:
- `number` — issue number
- `url` — HTML URL
- `title` — issue title
- `type` — detected issue type
- `labels` — array of label names
- `assignees` — array of assignee logins
- `state` — open/closed
- `body` — raw markdown body
- `comments` — array of `{ author, created_at, body }` from Step 1.5
- `parsed` — the structured sections extracted in Step 4
- `commentSignals` — resolved questions, decisions, and scope changes from Step 4.5 (or `null` if none found)
