import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { templatesTool } from '../../src/tools/templates.js';

interface ToolResult {
  content: { text: string; type: string }[];
}

describe('when using templates tool', () => {
  let registeredTools: {
    handler: (args: { template?: string; component?: string; style?: string }) => Promise<ToolResult>;
    name: string;
  }[];

  beforeEach(() => {
    registeredTools = [];
    const mockServer = {
      registerTool: (
        name: string,
        _definition: unknown,
        handler: (args: { template?: string; component?: string; style?: string }) => Promise<ToolResult>
      ) => {
        registeredTools.push({ handler, name });
      }
    };
    templatesTool(mockServer as unknown as McpServer);
  });

  it('should register a tool named "templates"', () => {
    assert.strictEqual(registeredTools.length, 1);
    assert.strictEqual(registeredTools[0].name, 'templates');
  });

  it('should reject template combined with component/style', async () => {
    const result = await registeredTools[0].handler({ component: 'button', template: 'forms' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('`template` cannot be combined with `component` or `style`'));
  });

  it('should reject component and style together', async () => {
    const result = await registeredTools[0].handler({ component: 'button', style: 'chip' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('`component` and `style` cannot be combined'));
  });

  it('should return template list on no args', async () => {
    const result = await registeredTools[0].handler({});
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('templates'));
  });
});
