import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { cdToolboxTool } from '../../src/tools/cd-toolbox.js';

interface ToolResult {
  content: { text: string; type: string }[];
}

describe('when using cd-toolbox tool', () => {
  let registeredTools: { handler: (args: { topic?: string }) => Promise<ToolResult>; name: string }[];

  beforeEach(() => {
    registeredTools = [];
    const mockServer = {
      registerTool: (
        name: string,
        _definition: unknown,
        handler: (args: { topic?: string }) => Promise<ToolResult>
      ) => {
        registeredTools.push({ handler, name });
      }
    };
    cdToolboxTool(mockServer as unknown as McpServer);
  });

  it('should register a tool named "cd-toolbox"', () => {
    assert.strictEqual(registeredTools.length, 1);
    assert.strictEqual(registeredTools[0].name, 'cd-toolbox');
  });

  it('should list topics on no args', async () => {
    const result = await registeredTools[0].handler({});
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('topics'));
  });

  it('should return not found with available topics for unknown topic', async () => {
    const result = await registeredTools[0].handler({ topic: '___nope___' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('not found'));
  });
});
