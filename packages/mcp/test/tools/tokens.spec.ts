import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { tokenInfoTool } from '../../src/tools/tokens.js';

interface ToolResult {
  content: { text: string; type: string }[];
}

describe('when using token-info tool', () => {
  let registeredTools: { handler: (args: { token?: string; doc?: string }) => Promise<ToolResult>; name: string }[];

  beforeEach(() => {
    registeredTools = [];
    const mockServer = {
      registerTool: (
        name: string,
        _definition: unknown,
        handler: (args: { token?: string; doc?: string }) => Promise<ToolResult>
      ) => {
        registeredTools.push({ handler, name });
      }
    };
    tokenInfoTool(mockServer as unknown as McpServer);
  });

  it('should register a tool named "token-info"', () => {
    assert.strictEqual(registeredTools.length, 1);
    assert.strictEqual(registeredTools[0].name, 'token-info');
  });

  it('should return token guidance on no args', async () => {
    const result = await registeredTools[0].handler({});
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(
      result.content[0].text.includes('design tokens') || result.content[0].text.includes('No design tokens found')
    );
  });

  it('should handle unknown token query gracefully', async () => {
    const result = await registeredTools[0].handler({ token: '___unlikely_token___' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(
      result.content[0].text.includes('No tokens found matching') ||
        result.content[0].text.includes('No design tokens found')
    );
  });

  it('should reject doc combined with token', async () => {
    const result = await registeredTools[0].handler({ doc: 'installation', token: 'spacing' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('`doc` cannot be combined with `token`'));
  });

  it('should return package docs content', async () => {
    const result = await registeredTools[0].handler({ doc: 'installation' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('# Installation'));
  });
});
