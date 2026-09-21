# Decision: headless variable access (Ticket 3, Blocker 3)

**Problem:** the Figma MCP tool `get_variable_defs` requires an active UI selection and
cannot run in an unattended/automated workflow (Code Connect bulk generation,
Observe/Detect, CI).

**Decision:** use the Figma REST API endpoint `GET /v1/files/:key/variables/local`
(`X-Figma-Token` header) for programmatic variable enumeration. This is not a new
proposal — it is already implemented and running in this repo's own token pipeline:
[`fetch-variables.js`](./fetch-variables.js) already calls
`https://api.figma.com/v1/files/${FIGMA_FILE_ID || 'VTztxQ5pWG7ARg8hCX6PfR'}/variables/local`,
filters out collections/variables hidden from publishing, and writes the result to
`FIGMA_FETCHED_VARIABLES_PATH` (see `../config.js`). It already defaults to the
canonical Solid DS library file key (`VTztxQ5pWG7ARg8hCX6PfR`), and only needs a
`FIGMA_TOKEN` env var.

**Action:** no new client code is required to unblock Code Connect / Observe-Detect
variable resolution — reuse this script's output (or its `fetchFigmaVariables()`
approach) instead of routing agentic workflows through `get_variable_defs`. The
remaining follow-up is operational, not technical: make sure a `FIGMA_TOKEN` with
read access to this file is available wherever MCP/agentic tooling runs (e.g. as a
repo/CI secret), and point any MCP-based variable lookups at this JSON output rather
than requiring a live Figma selection.
