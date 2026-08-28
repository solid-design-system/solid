import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { uxGuidelinesTool } from '../../src/tools/ux-guidelines.js';

interface ToolResult {
  content: { text: string; type: string }[];
}

describe('when using ux_guidelines tool', () => {
  let registeredTools: { handler: (args: { guideline?: string }) => Promise<ToolResult>; name: string }[];

  beforeEach(() => {
    registeredTools = [];
    const mockServer = {
      registerTool: (
        name: string,
        _definition: unknown,
        handler: (args: { guideline?: string }) => Promise<ToolResult>
      ) => {
        registeredTools.push({ handler, name });
      }
    };
    uxGuidelinesTool(mockServer as unknown as McpServer);
  });

  it('should register a tool named "ux_guidelines"', () => {
    assert.strictEqual(registeredTools.length, 1);
    assert.strictEqual(registeredTools[0].name, 'ux_guidelines');
  });

  it('should list the available metadata guidelines', async () => {
    const result = await registeredTools[0].handler({});
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('calculator'));
    assert.ok(result.content[0].text.includes('forms'));
  });

  it('should return a selected metadata guideline', async () => {
    const result = await registeredTools[0].handler({ guideline: 'filter' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('# Pattern Guide: Filter'));
  });
});
