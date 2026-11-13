type PromptFramework = 'vue' | 'react' | 'svelte';

interface PromptBlock {
  name: PromptFramework | 'shared';
  start: number;
  contentStart: number;
  end: number;
  line: number;
  content: string;
}

export function parsePromptBlocks(source: string, filename?: string): PromptBlock[];
export function createPrompt(source: string, framework?: PromptFramework, filename?: string): string;
export function stripPromptOnlyBlocks(source: string, filename?: string): string;
