import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { versionTool } from '../../src/tools/version.js';

interface ToolDefinition {
  description: string;
  title: string;
}

interface ToolResult {
  content: { text: string; type: string }[];
}

describe('when using version tool', () => {
  let mockServer: { registerTool: (name: string, definition: unknown, handler: () => Promise<ToolResult>) => void };
  let registeredTools: { definition: ToolDefinition; handler: () => Promise<ToolResult>; name: string }[];

  beforeEach(() => {
    registeredTools = [];
    mockServer = {
      registerTool: (name: string, definition: unknown, handler: () => Promise<ToolResult>) => {
        registeredTools.push({ definition, handler, name });
      }
    };
    versionTool(mockServer as unknown as McpServer);
  });

  it('should register a tool named "version"', () => {
    assert.strictEqual(registeredTools.length, 1);
    assert.strictEqual(registeredTools[0].name, 'version');
  });

  it('should have appropriate tool definition', () => {
    const tool = registeredTools[0];
    assert.ok('description' in tool.definition);
    assert.ok(tool.definition.description.includes('version'));
    assert.ok('title' in tool.definition);
    assert.ok(tool.definition.title.includes('Solid MCP Version Information'));
  });

  it('should have a handler function', () => {
    const tool = registeredTools[0];
    assert.strictEqual(typeof tool.handler, 'function');
  });

  it('should return version information when called', async () => {
    const tool = registeredTools[0];
    const result = await tool.handler();
    assert.ok('content' in result);
    assert.ok(Array.isArray(result.content));
    assert.strictEqual(result.content.length, 1);
    const content = result.content[0];
    assert.strictEqual(content.type, 'text');
    assert.ok('text' in content);
    assert.ok(content.text.includes('Solid Design System MCP Server'));
    assert.ok(content.text.includes('Version:'));
  });

  it('should include version number in response', async () => {
    const tool = registeredTools[0];
    const result = await tool.handler();
    const content = result.content[0];
    assert.match(content.text, /\*\*Version:\*\* \d+\.\d+\.\d+/);
  });

  it('should format response as structured text', async () => {
    const tool = registeredTools[0];
    const result = await tool.handler();
    const content = result.content[0];
    const lines = content.text.split('\n');
    assert.ok(lines.length > 1);
    assert.ok(lines[0].includes('Solid Design System MCP Server'));
  });
});
