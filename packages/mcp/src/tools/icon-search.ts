import fs from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { iconsPath } from '../utilities/index.js';

type CompactIcon = {
  technicalId: string;
  displayNameDe: string;
  tags: string[];
};

type Category = 'content' | 'system' | 'all';

const loadIcons = async (category: Category): Promise<{ name: string; icon: CompactIcon }[]> => {
  const load = async (cat: 'content' | 'system') => {
    const raw = await fs.readFile(join(iconsPath, `${cat}.json`), 'utf-8');
    const icons: CompactIcon[] = JSON.parse(raw);
    return icons.map(icon => ({ name: `${cat}/${icon.technicalId}`, icon }));
  };

  if (category === 'all') {
    const [content, system] = await Promise.all([load('content'), load('system')]);
    return [...content, ...system];
  }
  return load(category);
};

/**
 * Scores how well a single keyword matches an icon entry.
 * Higher = better match.
 */
const scoreMatch = (keyword: string, entry: { name: string; icon: CompactIcon }): number => {
  const q = keyword.toLowerCase();
  const { technicalId, displayNameDe, tags } = entry.icon;

  if (technicalId === q) return 100;
  if (technicalId.includes(q)) return 80;
  if (displayNameDe.toLowerCase().includes(q)) return 60;
  if (tags.some(t => t.toLowerCase().includes(q))) return 40;
  return 0;
};

/**
 * Tool: icon-search
 * Searches the Solid Design System icon library by multiple keywords (EN + DE).
 * Deduplicates and ranks results across all keywords so the LLM can pick the best fit.
 */
export const iconSearchTool = (server: McpServer) => {
  server.registerTool(
    'icon-search',
    {
      description:
        'Search the Solid Design System icon library. ' +
        'Pass multiple keywords — English and/or German synonyms — to get the best possible list of candidates. ' +
        'The tool deduplicates results and shows which keyword(s) each icon matched. ' +
        'Returns icon names in the exact format for <sd-icon name="...">, e.g. "system/download". ' +
        'Always search with several synonyms (EN + DE) to maximise recall.',
      inputSchema: {
        keywords: z
          .array(z.string().min(1))
          .min(1)
          .describe(
            'One or more search keywords in English and/or German. ' +
              'Example: ["download", "herunterladen", "save", "speichern"]. ' +
              'Use both languages and multiple synonyms for best results.'
          ),
        category: z
          .enum(['content', 'system', 'all'])
          .default('all')
          .describe(
            '"system" for UI/navigation icons (arrows, controls, status), ' +
              '"content" for illustrative/thematic icons, ' +
              '"all" to search both (default).'
          )
      },
      title: 'Icon search'
    },
    async ({ keywords, category = 'all' }) => {
      let all: { name: string; icon: CompactIcon }[];
      try {
        all = await loadIcons(category as Category);
      } catch {
        return {
          content: [
            {
              type: 'text',
              text: 'Icon metadata not yet built. Run build:metadata first.'
            }
          ]
        };
      }

      // Collect best score and matched keywords per icon
      const resultMap = new Map<
        string,
        { entry: { name: string; icon: CompactIcon }; bestScore: number; matchedBy: string[] }
      >();

      for (const keyword of keywords) {
        for (const entry of all) {
          const score = scoreMatch(keyword, entry);
          if (score === 0) continue;

          const existing = resultMap.get(entry.name);
          if (existing) {
            existing.bestScore = Math.max(existing.bestScore, score);
            if (!existing.matchedBy.includes(keyword)) existing.matchedBy.push(keyword);
          } else {
            resultMap.set(entry.name, { entry, bestScore: score, matchedBy: [keyword] });
          }
        }
      }

      if (!resultMap.size) {
        return {
          content: [
            {
              type: 'text',
              text:
                `No icons found matching any of: ${keywords.map(k => `"${k}"`).join(', ')}` +
                (category !== 'all' ? ` in category "${category}"` : '') +
                '.'
            }
          ]
        };
      }

      const sorted = [...resultMap.values()].sort((a, b) => {
        // Primary: best score descending; secondary: more keyword matches first
        if (b.bestScore !== a.bestScore) return b.bestScore - a.bestScore;
        return b.matchedBy.length - a.matchedBy.length;
      });

      const lines = sorted.map(({ entry, matchedBy }) => {
        const { displayNameDe, tags } = entry.icon;
        const tagStr = tags.length ? ` — tags: ${tags.slice(0, 3).join(', ')}` : '';
        const matchStr = matchedBy.length > 1 ? ` [matched: ${matchedBy.join(', ')}]` : '';
        return `- \`${entry.name}\`  ${displayNameDe}${tagStr}${matchStr}`;
      });

      return {
        content: [
          {
            type: 'text',
            text:
              `Found ${sorted.length} icon(s) across keywords ${keywords.map(k => `"${k}"`).join(', ')}:\n\n` +
              lines.join('\n') +
              '\n\nUse the name value directly in <sd-icon name="...">.'
          }
        ]
      };
    }
  );
};
