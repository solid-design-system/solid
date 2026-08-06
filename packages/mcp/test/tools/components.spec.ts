import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { componentsTool } from '../../src/tools/components.js';

interface ToolDefinition {
  description: string;
  title: string;
}

interface ToolResult {
  content: { text: string; type: string }[];
}

describe('when using components tool', () => {
  let mockServer: {
    registerTool: (
      name: string,
      definition: unknown,
      handler: (args: { component?: string; doc?: string; example?: string }) => Promise<ToolResult>
    ) => void;
  };
  let registeredTools: {
    definition: ToolDefinition;
    handler: (args: { component?: string; doc?: string; example?: string }) => Promise<ToolResult>;
    name: string;
  }[];

  beforeEach(() => {
    registeredTools = [];
    mockServer = {
      registerTool: (
        name: string,
        definition: unknown,
        handler: (args: { component?: string; doc?: string; example?: string }) => Promise<ToolResult>
      ) => {
        registeredTools.push({ definition: definition as ToolDefinition, handler, name });
      }
    };
    componentsTool(mockServer as unknown as McpServer);
  });

  it('should register a tool named "components"', () => {
    assert.strictEqual(registeredTools.length, 1);
    assert.strictEqual(registeredTools[0].name, 'components');
  });

  it('should reject example without component', async () => {
    const tool = registeredTools[0];
    const result = await tool.handler({ example: 'inverted' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('`example` requires `component`'));
  });

  it('should reject doc combined with component', async () => {
    const tool = registeredTools[0];
    const result = await tool.handler({ component: 'sd-button', doc: 'installation' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('`doc` cannot be combined with `component` or `example`'));
  });

  it('should return component spec when only component is provided', async () => {
    const tool = registeredTools[0];
    const result = await tool.handler({ component: 'sd-button' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('## Overview'));
    assert.ok(result.content[0].text.includes('<sd-button>'));
  });

  it('should return example HTML when component and example are provided', async () => {
    const tool = registeredTools[0];
    const result = await tool.handler({ component: 'sd-button', example: 'variants' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('```html'));
  });

  it('should return package doc when only doc is provided', async () => {
    const tool = registeredTools[0];
    const result = await tool.handler({ doc: 'installation' });
    assert.strictEqual(result.content[0].type, 'text');
    assert.ok(result.content[0].text.includes('# Installation'));
  });
});
