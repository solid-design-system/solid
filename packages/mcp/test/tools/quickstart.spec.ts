import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { quickstartTool } from '../../src/tools/quickstart.js';

interface ToolResult {
  content: { text: string; type: string }[];
}

describe('when using quickstart tool', () => {
  let registeredTools: { handler: (args: { doc?: string }) => Promise<ToolResult>; name: string }[];

  beforeEach(() => {
    registeredTools = [];
    const mockServer = {
      registerTool: (name: string, _definition: unknown, handler: (args: { doc?: string }) => Promise<ToolResult>) => {
        registeredTools.push({ handler, name });
      }
    };
    quickstartTool(mockServer as unknown as McpServer);
  });

  it('should register a tool named "quickstart"', () => {
    assert.strictEqual(registeredTools.length, 1);
    assert.strictEqual(registeredTools[0].name, 'quickstart');
  });

  it('should return docs list on no args', async () => {
    const result = await registeredTools[0].handler({});
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('Quick Start Docs'));
  });

  it('should reject unsafe doc paths', async () => {
    const result = await registeredTools[0].handler({ doc: '../secrets' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('invalid path'));
  });

  it('should return a known quickstart doc', async () => {
    const result = await registeredTools[0].handler({ doc: 'Quickstart' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.length > 20);
  });
});
