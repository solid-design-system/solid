import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { iconSearchTool } from '../../src/tools/icon-search.js';

interface ToolResult {
  content: { text: string; type: string }[];
}

describe('when using icon-search tool', () => {
  let registeredTools: {
    handler: (args: {
      keywords?: string[];
      category?: 'all' | 'content' | 'system' | 'status';
      library?: string;
    }) => Promise<ToolResult>;
    name: string;
  }[];

  beforeEach(() => {
    registeredTools = [];
    const mockServer = {
      registerTool: (
        name: string,
        _definition: unknown,
        handler: (args: {
          keywords?: string[];
          category?: 'all' | 'content' | 'system' | 'status';
          library?: string;
        }) => Promise<ToolResult>
      ) => {
        registeredTools.push({ handler, name });
      }
    };
    iconSearchTool(mockServer as unknown as McpServer);
  });

  it('should register a tool named "icon-search"', () => {
    assert.strictEqual(registeredTools.length, 1);
    assert.strictEqual(registeredTools[0].name, 'icon-search');
  });

  it('should reject empty keywords', async () => {
    const result = await registeredTools[0].handler({ keywords: [] });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('at least one keyword'));
  });

  it('should search by keyword', async () => {
    const result = await registeredTools[0].handler({ keywords: ['download'] });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.length > 0);
  });
});
