import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { stylesTool } from '../../src/tools/styles.js';

interface ToolResult {
  content: { text: string; type: string }[];
}

describe('when using styles tool', () => {
  let registeredTools: {
    handler: (args: { style?: string; doc?: string; example?: string }) => Promise<ToolResult>;
    name: string;
  }[];

  beforeEach(() => {
    registeredTools = [];
    const mockServer = {
      registerTool: (
        name: string,
        _definition: unknown,
        handler: (args: { style?: string; doc?: string; example?: string }) => Promise<ToolResult>
      ) => {
        registeredTools.push({ handler, name });
      }
    };
    stylesTool(mockServer as unknown as McpServer);
  });

  it('should register a tool named "styles"', () => {
    assert.strictEqual(registeredTools.length, 1);
    assert.strictEqual(registeredTools[0].name, 'styles');
  });

  it('should reject example without style', async () => {
    const result = await registeredTools[0].handler({ example: 'inverted' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('`example` requires `style`'));
  });

  it('should reject doc combined with style', async () => {
    const result = await registeredTools[0].handler({ doc: 'installation', style: 'chip' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('`doc` cannot be combined with `style` or `example`'));
  });

  it('should return style index on no args', async () => {
    const result = await registeredTools[0].handler({});
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('## Solid Design System Style Utilities'));
  });
});
