import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { cdToolboxTool } from '../../src/tools/cd-toolbox.js';
import { getCdToolboxPages, readCdToolboxPage } from '../../src/utilities/cd-toolbox.js';

interface ToolResult {
  content: { text: string; type: string }[];
}

describe('when using the CD Toolbox tool', () => {
  let registeredTools: { handler: (args: { path?: string; query?: string }) => Promise<ToolResult>; name: string }[];

  beforeEach(() => {
    registeredTools = [];
    const mockServer = {
      registerTool: (
        name: string,
        _definition: unknown,
        handler: (args: { path?: string; query?: string }) => Promise<ToolResult>
      ) => {
        registeredTools.push({ handler, name });
      }
    };
    cdToolboxTool(mockServer as unknown as McpServer);
  });

  it('should register a tool named "cd-toolbox"', () => {
    assert.strictEqual(registeredTools[0].name, 'cd-toolbox');
  });

  it('should list the CD Toolbox sections', async () => {
    const result = await registeredTools[0].handler({});
    assert.ok(result.content[0].text.includes('CD Toolbox'));
    assert.ok(result.content[0].text.includes('grundlagen'));
  });

  it('should retrieve a nested page by route', async () => {
    const result = await registeredTools[0].handler({ path: 'grundlagen/Basiselemente/farbe' });
    assert.ok(result.content[0].text.includes('# Farbe'));
  });

  it('should retrieve the root page by slash route', async () => {
    const result = await registeredTools[0].handler({ path: '/' });
    assert.ok(result.content[0].text.includes('# CD-Toolbox'));
  });

  it('should search pages by title', async () => {
    const result = await registeredTools[0].handler({ query: 'Farbe' });
    assert.ok(result.content[0].text.includes('grundlagen/Basiselemente/farbe'));
  });

  it('should find German guidance through an English alias', async () => {
    const result = await registeredTools[0].handler({ query: 'color palette' });
    assert.ok(result.content[0].text.includes('grundlagen/Basiselemente/farbe'));
  });

  it('should identify Solid as the implementation authority for component-library pages', async () => {
    const result = await registeredTools[0].handler({ path: 'anwendungen/Digitalmedien/solid-design-system' });
    assert.ok(result.content[0].text.includes('Implementation authority'));
  });

  it('should reject a traversal-like page path', async () => {
    const result = await registeredTools[0].handler({ path: '../secrets' });
    assert.ok(result.content[0].text.includes('invalid path'));
  });

  it('should reject a mixed path and query request', async () => {
    const result = await registeredTools[0].handler({ path: 'grundlagen', query: 'Farbe' });
    assert.ok(result.content[0].text.includes('either `path` or `query`'));
  });
});

describe('when validating the CD Toolbox manifest', () => {
  it('should describe every page with a readable source and source URL', async () => {
    const pages = await getCdToolboxPages();
    assert.ok(pages.length > 0);
    await Promise.all(
      pages.map(async page => {
        assert.ok(page.title);
        assert.ok(Array.isArray(page.aliases));
        assert.ok(page.sourcePath.endsWith('index.md'));
        assert.match(page.sourceUrl, /^https:\/\/cd\.union-investment\.de\//);
        assert.ok(await readCdToolboxPage(page));
      })
    );
  });
});
