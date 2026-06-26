import fs from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { iconsPath } from '../utilities/index.js';

interface CompactIcon {
  technicalId: string;
  displayNameDe: string;
  tags: string[];
}

type Library = 'default' | 'sd-multi-theming' | 'sd-status-assets';
type IconCategory = 'content' | 'system' | 'status';
type Category = IconCategory | 'all';

const categoriesByLibrary: Record<Library, IconCategory[]> = {
  default: ['content', 'system'],
  'sd-multi-theming': ['content', 'system'],
  'sd-status-assets': ['status']
};

const loadIcons = async (library: Library, category: Category): Promise<{ name: string; icon: CompactIcon }[]> => {
  const load = async (cat: IconCategory) => {
    try {
      const filePath = join(iconsPath, library, `${cat}.json`);
      const raw = await fs.readFile(filePath, 'utf-8');
      const icons = JSON.parse(raw) as CompactIcon[];
      return icons.map(icon => ({ name: `${cat}/${icon.technicalId}`, icon }));
    } catch {
      return [];
    }
  };

  const cats = categoriesByLibrary[library];
  if (category === 'all') {
    const loaded = await Promise.all(cats.map(load));
    return loaded.flat();
  }

  if (!cats.includes(category)) {
    return [];
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
      description: `Search Solid Design System icon libraries by meaning.
        - Pass multiple keywords, English and/or German synonyms, to find icons.
        - Returns icon names in the exact format for <sd-icon name="...">, e.g. "system/download".
        - Choose a library: \`default\` (default library), \`sd-status-assets\`, or \`sd-multi-theming\`.
        - Choose a category, where applicable: \`content\` (illustrative), \`system\` (UI/navigation), \`status\` (status indicators), or \`all\`.
        - Use the icon documentation tool if you need guidance on when to use each library or category.`,
      inputSchema: {
        keywords: z
          .array(z.string().min(1))
          .default([])
          .describe(
            'One or more search keywords in English and/or German. ' +
              'Example: ["download", "herunterladen", "save", "speichern"]. ' +
              'Prefer 3-6 synonyms across both languages for best results.'
          ),
        library: z
          .enum(['default', 'sd-status-assets', 'sd-multi-theming'])
          .default('default')
          .describe(
            'Icon library to search: "default" (default library), "sd-status-assets" (status indicators for components like sd-status-badge), or "sd-multi-theming" (multi-theme compatible icons).'
          ),
        category: z
          .enum(['content', 'system', 'status', 'all'])
          .default('all')
          .describe(
            `Search scope within the selected library:
            - \`default\`: \`content\` or \`system\`
            - \`sd-multi-theming\`: \`content\` or \`system\`
            - \`sd-status-assets\`: \`status\`
            - \`all\` searches all categories available for the selected library.`
          )
      },
      title: 'Icon search'
    },
    async ({ keywords, library = 'default', category = 'all' }) => {
      if (!keywords.length) {
        return {
          content: [
            {
              type: 'text',
              text: 'Please provide at least one keyword to search for icons.'
            }
          ]
        };
      }

      const selectedLibrary = library as Library;
      const allowedCategories = categoriesByLibrary[selectedLibrary];
      if (category !== 'all' && !allowedCategories.includes(category as IconCategory)) {
        return {
          content: [
            {
              type: 'text',
              text:
                `Invalid category "${category}" for library "${library}". ` +
                `Allowed categories: ${allowedCategories.map(c => `"${c}"`).join(', ')} or "all".`
            }
          ]
        };
      }

      let all: { name: string; icon: CompactIcon }[];
      try {
        all = await loadIcons(selectedLibrary, category);
      } catch {
        return {
          content: [
            {
              type: 'text',
              text: `Unable to load icons from library "${library}". Try library="default" or use the icons documentation tool.`
            }
          ]
        };
      }

      if (!all.length) {
        return {
          content: [
            {
              type: 'text',
              text: `No icons found in library "${library}"${category !== 'all' ? ` category "${category}"` : ''}. The library may be empty or icon metadata may not be populated yet.`
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
