import { replaceComponentName } from './index.js';
import { test } from 'node:test';
import assert from 'assert';

test('should not replace css variables', () => {
  const fileContent = `
    --sd-button: red;
    --sd-button-bg: blue;
  `;
  const result = replaceComponentName(fileContent, 'button', '3.2.1');
  assert.strictEqual(result, fileContent); // No replacements expected
});

test('should replace classes in CSS', () => {
  const fileContent = `
    .sd-button {
      color: red;
    }
    .sd-button:hover {
      background-color: blue;
    }
  `;
  const expected = `
    .sd-3-2-1-button {
      color: red;
    }
    .sd-3-2-1-button:hover {
      background-color: blue;
    }
  `;
  const result = replaceComponentName(fileContent, 'button', '3.2.1');
  assert.strictEqual(result, expected); // Classes should be replaced
});

test('should replace other strings', () => {
  const fileContent = `
    <div class="sd-button"></div>
    <button id="sd-button">Click me</button>
  `;
  const expected = `
    <div class="sd-3-2-1-button"></div>
    <button id="sd-3-2-1-button">Click me</button>
  `;
  const result = replaceComponentName(fileContent, 'button', '3.2.1');
  assert.strictEqual(result, expected); // Other instances should be replaced
});

test('should not replace Storybook URLs', () => {
  const fileContent = `
    https://solid-design-system.fe.union-investment.de/docs/?path=/docs/components-sd-button--docs
  `;
  const result = replaceComponentName(fileContent, 'button', '3.2.1');
  assert.strictEqual(result, fileContent); // No replacements in URLs
});

test('should not replace event names', () => {
  const fileContent = `
    this.emit("sd-button");
    this.emit("sd-button-clicked");
  `;
  const result = replaceComponentName(fileContent, 'button', '3.2.1');
  assert.strictEqual(result, fileContent); // No replacements in event names
});

test('should replace multiple occurrences', () => {
  const fileContent = `
    <div class="sd-button"></div>
    <button id="sd-button">Click me</button>
    .sd-button:hover {
      color: green;
    }
  `;
  const expected = `
    <div class="sd-3-2-1-button"></div>
    <button id="sd-3-2-1-button">Click me</button>
    .sd-3-2-1-button:hover {
      color: green;
    }
  `;
  const result = replaceComponentName(fileContent, 'button', '3.2.1');
  assert.strictEqual(result, expected); // All occurrences should be replaced
});
