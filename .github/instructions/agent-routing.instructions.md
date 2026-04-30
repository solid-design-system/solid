---
description: "Shared routing table for mapping GitHub issue types to specialized implementation agents. Referenced by the orchestrator and the Plan agent after planning is complete."
---

# Agent Routing Table

Use this table to determine which implementation agent to recommend based on the detected issue type.

## Routing Rules

| Detected type | Labels / Signals | Route to |
|---------------|------------------|----------|
| New Component | Label `🙌 Epic`, title `feat: ✨ add sd-*`, no `style-components` label | **Dev: Component Developer** |
| New Style Component | Label `🙌 Epic`, label `style-components` | **Dev: Style Component Developer** |
| Bugfix | Title starts with `fix:` | **Dev: Bugfix Developer** |
| Documentation | Title starts with `docs:` | **Agent** mode |
| Maintenance | Title starts with `chore:` or `ci:` | **Agent** mode |
| Dev Feature | Label `🔧 code`, title `feat[dev]:` | **Agent** mode |
| Dev Subtask | Label `Subtask`, label `🔧 code` | **Agent** mode |
| Design Feature/Subtask | Label `🎨 figma` | Not an implementation task — inform user this is a design issue |

## Output Format

After resolving the target agent, tell the user:

> Switch to the **[agent name]** and say: "Implement issue #[number]"

For **Agent** mode issues, also include the issue summary, spec data, and plan path (`/memories/session/plan.md`) in the suggested prompt so the agent has full context.

For **Design Feature/Subtask** issues, do not suggest an implementation agent. Instead inform the user that this is a design issue and not an implementation task.
