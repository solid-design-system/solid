import fs from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { cdToolboxPath } from '../utilities/index.js';

/**
 * Extracts the `description` value from YAML frontmatter.
 */
const extractDescription = (content: string): string | null => {
  const match = content.match(/^---\s*\ndescription:\s*>?\s*\n([\s\S]*?)---/);
  if (!match) return null;
  return match[1]
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .join(' ');
};

const getTopics = async (): Promise<{ id: string; description: string }[]> => {
  const files = await fs.readdir(cdToolboxPath);
  const topics: { id: string; description: string }[] = [];

  for (const file of files.sort()) {
    const ext = extname(file);
    if (ext !== '.md') continue;
    const id = basename(file, '.md');
    const content = await fs.readFile(join(cdToolboxPath, file), 'utf-8');
    const description = extractDescription(content) ?? id;
    topics.push({ id, description });
  }

  return topics;
};

/**
 * Tool: cd-toolbox
 * Provides access to CD (Corporate Design) Toolbox guidelines and documentation.
 * Without a topic argument it lists all available topics.
 * With a topic argument it returns the full content of that topic.
 */
export const cdToolboxTool = (server: McpServer) => {
  server.registerTool(
    'cd-toolbox',
    {
      description:
        'Access Corporate Design (CD) Toolbox guidelines for Union Investment digital products. ' +
        'Call without a topic to list all available topics with short descriptions. ' +
        'Call with a topic ID to get the full guidelines for that topic.',
      inputSchema: {
        topic: z
          .string()
          .optional()
          .describe('The topic ID to retrieve (e.g. "icons", "ux-princpials"). Omit to list all available topics.')
      },
      title: 'CD Toolbox'
    },
    async ({ topic }) => {
      if (!topic) {
        try {
          const topics = await getTopics();
          const list = topics.map(t => `- **${t.id}**: ${t.description}`).join('\n');
          return {
            content: [
              {
                type: 'text',
                text: 'Available CD Toolbox topics (use the topic ID to retrieve full content):\n\n' + list
              }
            ]
          };
        } catch (error) {
          return {
            content: [{ type: 'text', text: `Error listing topics: ${(error as Error).message}` }]
          };
        }
      }

      const filePath = join(cdToolboxPath, `${topic}.md`);
      try {
        const content = await fs.readFile(filePath, 'utf-8');
        // Strip frontmatter before returning
        const body = content.replace(/^---[\s\S]*?---\s*\n?/, '');
        return {
          content: [{ type: 'text', text: body }]
        };
      } catch {
        try {
          const topics = await getTopics();
          const list = topics.map(t => `- ${t.id}`).join('\n');
          return {
            content: [
              {
                type: 'text',
                text: `Topic "${topic}" not found. Available topics:\n${list}`
              }
            ]
          };
        } catch {
          return {
            content: [{ type: 'text', text: `Topic "${topic}" not found.` }]
          };
        }
      }
    }
  );
};
