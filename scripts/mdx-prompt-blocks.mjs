export function parsePromptBlocks(source, filename = 'MDX source') {
  const blocks = [];
  let active;
  let fence;
  let offset = 0;
  const lines = source.split(/(?<=\n)/);
  const fail = (message, line) => {
    throw new Error(`${filename}:${line}: ${message}`);
  };

  for (const [index, line] of lines.entries()) {
    const text = line.replace(/\r?\n$/, '');
    const boundary = text.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (fence) {
      if (boundary && boundary[1][0] === fence.character && boundary[1].length >= fence.length && !boundary[2].trim()) {
        fence = undefined;
      }
    } else if (boundary) {
      fence = { character: boundary[1][0], length: boundary[1].length };
    } else {
      const marker = text.match(/^[\t ]*\{\/\*\s*(\/?)prompt:([a-z][\w-]*)\s*\*\/\}[\t ]*$/);
      if (marker) {
        const [, closing, name] = marker;
        if (!['vue', 'react', 'svelte', 'shared'].includes(name)) fail(`Unknown prompt block "${name}"`, index + 1);
        if (closing) {
          if (!active || active.name !== name) fail(`Unmatched closing prompt:${name}`, index + 1);
          blocks.push({
            ...active,
            content: source.slice(active.contentStart, offset).trim(),
            end: offset + line.length
          });
          active = undefined;
        } else {
          if (active) fail('Prompt blocks cannot be nested', index + 1);
          if (blocks.some(block => block.name === name)) fail(`Duplicate prompt:${name}`, index + 1);
          active = { name, start: offset, contentStart: offset + line.length, line: index + 1 };
        }
      }
    }
    offset += line.length;
  }
  if (active) fail(`Unclosed prompt:${active.name}`, active.line);
  return blocks;
}

export function createPrompt(source, framework = 'vue', filename) {
  const blocks = parsePromptBlocks(source, filename);
  return [framework, 'shared']
    .map(name => {
      const block = blocks.find(candidate => candidate.name === name);
      if (!block?.content) throw new Error(`${filename ?? 'MDX source'}: Missing or empty prompt:${name}`);
      return block.content;
    })
    .join('\n\n');
}

export function stripPromptOnlyBlocks(source, filename) {
  let cursor = 0;
  let output = '';
  for (const block of parsePromptBlocks(source, filename)) {
    output += source.slice(cursor, block.start);
    if (block.name === 'shared') output += `${block.content}\n`;
    cursor = block.end;
  }
  return output + source.slice(cursor);
}
