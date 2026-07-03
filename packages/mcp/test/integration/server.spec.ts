import { afterEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { createServer } from '../../src/server.js';

interface IntegrationContext {
  client: Client;
  clientTransport: InMemoryTransport;
  serverTransport: InMemoryTransport;
}

const activeContexts: IntegrationContext[] = [];

interface TextContent {
  type: 'text';
  text: string;
}

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null;

const getFirstTextContent = (content: unknown): TextContent => {
  assert.ok(Array.isArray(content));
  assert.ok(content.length > 0);

  const firstItem: unknown = content[0];
  assert.ok(isRecord(firstItem));
  assert.strictEqual(firstItem.type, 'text');
  assert.ok(typeof firstItem.text === 'string');

  return {
    type: 'text',
    text: firstItem.text
  };
};

const setup = async (): Promise<IntegrationContext> => {
  const server = createServer();
  const client = new Client({
    name: 'solid-mcp-integration-test-client',
    version: '1.0.0'
  });

  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();

  await Promise.all([server.connect(serverTransport), client.connect(clientTransport)]);

  const context = { client, clientTransport, serverTransport };
  activeContexts.push(context);
  return context;
};

afterEach(async () => {
  const contexts = activeContexts.splice(0, activeContexts.length);
  await Promise.allSettled(
    contexts.flatMap(context => [
      context.client.close(),
      context.clientTransport.close(),
      context.serverTransport.close()
    ])
  );
});

describe('when creating the MCP server', () => {
  it('should expose all expected tools through MCP protocol', async () => {
    const { client } = await setup();

    const result = await client.listTools();
    const toolNames = result.tools.map(tool => tool.name);

    assert.ok(toolNames.includes('quickstart'));
    assert.ok(toolNames.includes('components'));
    assert.ok(toolNames.includes('styles'));
    assert.ok(toolNames.includes('templates'));
    assert.ok(toolNames.includes('tokens'));
    assert.ok(toolNames.includes('icon-search'));
    assert.ok(toolNames.includes('cd-toolbox'));
    assert.ok(toolNames.includes('version'));
  });

  it('should execute a real tool call through the MCP client', async () => {
    const { client } = await setup();

    const result = await client.callTool({
      name: 'components',
      arguments: {
        component: 'sd-button'
      }
    });

    const firstContent = getFirstTextContent(result.content);

    assert.ok(firstContent.text.includes('<sd-button>'));
  });

  it('should fail for unknown tool names', async () => {
    const { client } = await setup();

    const result = await client.callTool({
      name: '___missing_tool___',
      arguments: {}
    });

    assert.strictEqual(result.isError, true);

    const firstContent = getFirstTextContent(result.content);

    assert.match(firstContent.text.toLowerCase(), /tool .* not found|unknown tool/);
  });

  it('should fail for invalid argument schema', async () => {
    const { client } = await setup();

    const result = await client.callTool({
      name: 'icon-search',
      arguments: {
        keywords: 123
      }
    });

    assert.strictEqual(result.isError, true);

    const firstContent = getFirstTextContent(result.content);

    assert.ok(firstContent.text.toLowerCase().includes('invalid arguments'));
  });

  it('should reject traversal-like slug input in quickstart tool', async () => {
    const { client } = await setup();

    const result = await client.callTool({
      name: 'quickstart',
      arguments: {
        doc: '../secrets'
      }
    });

    const firstContent = getFirstTextContent(result.content);

    assert.ok(firstContent.text.toLowerCase().includes('invalid path'));
  });
});
